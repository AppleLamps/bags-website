import React, { useEffect, useRef, useState } from 'react'
import { createChart, ColorType, CrosshairMode } from 'lightweight-charts'
import { Card } from '../ui'
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react'

// Generate realistic candlestick data
const generateCandleData = (days = 30) => {
  const data = []
  let basePrice = 0.000018
  const now = new Date()
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)
    
    const volatility = 0.15
    const change = (Math.random() - 0.48) * volatility
    const open = basePrice
    const close = basePrice * (1 + change)
    const high = Math.max(open, close) * (1 + Math.random() * 0.05)
    const low = Math.min(open, close) * (1 - Math.random() * 0.05)
    
    data.push({
      time: date.toISOString().split('T')[0],
      open,
      high,
      low,
      close,
    })
    
    basePrice = close
  }
  
  return data
}

// Generate volume data matching candle data
const generateVolumeData = (candleData) => {
  return candleData.map((candle, i) => ({
    time: candle.time,
    value: Math.random() * 50000 + 10000,
    color: candle.close >= candle.open 
      ? 'rgba(0, 255, 136, 0.5)' 
      : 'rgba(255, 68, 102, 0.5)',
  }))
}

const timeframes = [
  { label: '1H', value: '1h' },
  { label: '4H', value: '4h' },
  { label: '1D', value: '1d' },
  { label: '1W', value: '1w' },
]

export function TradingChart({ 
  symbol = '$GROKIFY',
  currentPrice = 0.000029,
  priceChange = 61.11,
}) {
  const chartContainerRef = useRef(null)
  const [activeTimeframe, setActiveTimeframe] = useState('1d')
  const [hoveredData, setHoveredData] = useState(null)
  
  useEffect(() => {
    if (!chartContainerRef.current) return
    
    // Track if component is mounted for cleanup
    let isSubscribed = true
    let chart = null
    
    chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#6a6a7a',
        fontFamily: "'Space Grotesk', sans-serif",
      },
      grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.03)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.03)' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
        vertLine: {
          color: 'rgba(0, 255, 136, 0.3)',
          width: 1,
          style: 2,
          labelBackgroundColor: '#00ff88',
        },
        horzLine: {
          color: 'rgba(0, 255, 136, 0.3)',
          width: 1,
          style: 2,
          labelBackgroundColor: '#00ff88',
        },
      },
      rightPriceScale: {
        borderColor: 'rgba(255, 255, 255, 0.06)',
        scaleMargins: { top: 0.1, bottom: 0.2 },
      },
      timeScale: {
        borderColor: 'rgba(255, 255, 255, 0.06)',
        timeVisible: true,
        secondsVisible: false,
      },
      handleScroll: { vertTouchDrag: false },
    })
    
    // Candlestick series
    const candleData = generateCandleData(30)
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#00ff88',
      downColor: '#ff4466',
      borderUpColor: '#00ff88',
      borderDownColor: '#ff4466',
      wickUpColor: '#00ff88',
      wickDownColor: '#ff4466',
    })
    candlestickSeries.setData(candleData)
    
    // Volume series
    const volumeData = generateVolumeData(candleData)
    const volumeSeries = chart.addHistogramSeries({
      priceFormat: { type: 'volume' },
      priceScaleId: '',
      scaleMargins: { top: 0.85, bottom: 0 },
    })
    volumeSeries.setData(volumeData)
    
    // Crosshair move handler
    chart.subscribeCrosshairMove((param) => {
      if (!isSubscribed) return
      if (param.time) {
        const candlePrice = param.seriesData.get(candlestickSeries)
        if (candlePrice) {
          setHoveredData(candlePrice)
        }
      } else {
        setHoveredData(null)
      }
    })
    
    // Fit content
    chart.timeScale().fitContent()
    
    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chart && isSubscribed) {
        chart.applyOptions({ 
          width: chartContainerRef.current.clientWidth,
          height: 320,
        })
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      isSubscribed = false
      window.removeEventListener('resize', handleResize)
      if (chart) {
        try {
          chart.remove()
        } catch (e) {
          // Chart may already be disposed in strict mode
        }
        chart = null
      }
    }
  }, [activeTimeframe])
  
  const displayData = hoveredData || { 
    open: currentPrice * 0.95, 
    high: currentPrice * 1.02, 
    low: currentPrice * 0.93, 
    close: currentPrice 
  }
  
  return (
    <Card variant="glass" padding="lg" radius="2xl">
      {/* Chart Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}>
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'baseline', 
            gap: '12px',
            marginBottom: '4px',
          }}>
            <span style={{ 
              fontSize: '32px', 
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '-1px',
            }}>
              ${displayData.close?.toFixed(6) || currentPrice.toFixed(6)}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: priceChange >= 0 ? 'var(--positive)' : 'var(--negative)',
              fontSize: '14px',
              fontWeight: 600,
            }}>
              {priceChange >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
            </span>
          </div>
          
          {/* OHLC Data */}
          <div style={{
            display: 'flex',
            gap: '16px',
            fontSize: '12px',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
          }}>
            <span>O: ${displayData.open?.toFixed(6) || '0.000000'}</span>
            <span>H: ${displayData.high?.toFixed(6) || '0.000000'}</span>
            <span>L: ${displayData.low?.toFixed(6) || '0.000000'}</span>
            <span>C: ${displayData.close?.toFixed(6) || '0.000000'}</span>
          </div>
        </div>
        
        {/* Timeframe Selector */}
        <div style={{
          display: 'flex',
          gap: '4px',
          background: 'var(--bg-elevated)',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
        }}>
          {timeframes.map((tf) => (
            <button
              key={tf.value}
              onClick={() => setActiveTimeframe(tf.value)}
              style={{
                background: activeTimeframe === tf.value 
                  ? 'var(--accent-subtle)' 
                  : 'transparent',
                border: activeTimeframe === tf.value 
                  ? '1px solid var(--border-accent)' 
                  : '1px solid transparent',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 14px',
                color: activeTimeframe === tf.value 
                  ? 'var(--accent)' 
                  : 'var(--text-tertiary)',
                fontWeight: 600,
                fontSize: '12px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                fontFamily: 'var(--font-display)',
              }}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Chart Container */}
      <div 
        ref={chartContainerRef}
        style={{
          width: '100%',
          height: '320px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      />
      
      {/* Chart Footer - Quick Stats */}
      <div style={{
        display: 'flex',
        gap: '24px',
        marginTop: '20px',
        paddingTop: '16px',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChart3 size={14} color="var(--text-tertiary)" />
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            24h Vol: 
          </span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            $10.77K
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            24h High:
          </span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--positive)' }}>
            $0.000033
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            24h Low:
          </span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--negative)' }}>
            $0.000018
          </span>
        </div>
      </div>
    </Card>
  )
}
