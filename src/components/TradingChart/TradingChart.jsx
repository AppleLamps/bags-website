import React, { useEffect, useRef, useState } from 'react'
import { createChart, ColorType, CrosshairMode } from 'lightweight-charts'
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
      ? 'rgba(34, 197, 94, 0.4)'
      : 'rgba(239, 68, 68, 0.4)',
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
          color: 'rgba(34, 197, 94, 0.3)',
          width: 1,
          style: 2,
          labelBackgroundColor: '#22c55e',
        },
        horzLine: {
          color: 'rgba(34, 197, 94, 0.3)',
          width: 1,
          style: 2,
          labelBackgroundColor: '#22c55e',
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
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderUpColor: '#22c55e',
      borderDownColor: '#ef4444',
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
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
        const width = chartContainerRef.current.clientWidth
        // Responsive chart height
        const height = window.innerWidth < 640 ? 260 : 320
        chart.applyOptions({
          width,
          height,
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
    <div style={{
      padding: '16px',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, rgba(13, 13, 13, 0.8) 100%)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
      animation: 'fadeIn 0.5s ease-out',
    }}>
      {/* Chart Header */}
      <div className="chart-header" style={{
        display: 'flex',
        marginBottom: '16px',
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '10px',
            marginBottom: '4px',
            flexWrap: 'wrap',
          }}>
            <span className="chart-price" style={{
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '-1px',
              textShadow: priceChange >= 0
                ? '0 0 20px rgba(34, 197, 94, 0.3)'
                : '0 0 20px rgba(239, 68, 68, 0.3)',
            }}>
              ${displayData.close?.toFixed(6) || currentPrice.toFixed(6)}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: priceChange >= 0 ? 'var(--positive)' : 'var(--negative)',
              fontSize: '13px',
              fontWeight: 600,
              padding: '4px 8px',
              background: priceChange >= 0
                ? 'rgba(34, 197, 94, 0.1)'
                : 'rgba(239, 68, 68, 0.1)',
              borderRadius: 'var(--radius-full)',
              border: priceChange >= 0
                ? '1px solid rgba(34, 197, 94, 0.2)'
                : '1px solid rgba(239, 68, 68, 0.2)',
            }}>
              {priceChange >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
            </span>
          </div>

          {/* OHLC Data */}
          <div className="chart-ohlc" style={{
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
        <div className="timeframe-selector" style={{
          display: 'flex',
          gap: '4px',
          background: 'var(--bg-elevated)',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}>
          {timeframes.map((tf) => (
            <button
              key={tf.value}
              onClick={() => setActiveTimeframe(tf.value)}
              style={{
                background: activeTimeframe === tf.value
                  ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%)'
                  : 'transparent',
                border: activeTimeframe === tf.value
                  ? '1px solid var(--border-accent)'
                  : '1px solid transparent',
                borderRadius: 'var(--radius-sm)',
                padding: '6px 10px',
                color: activeTimeframe === tf.value
                  ? 'var(--accent)'
                  : 'var(--text-tertiary)',
                fontWeight: 600,
                fontSize: '11px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-display)',
                boxShadow: activeTimeframe === tf.value
                  ? '0 0 12px rgba(34, 197, 94, 0.15)'
                  : 'none',
              }}
              onMouseEnter={(e) => {
                if (activeTimeframe !== tf.value) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTimeframe !== tf.value) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-tertiary)';
                }
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
          height: '260px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      />

      {/* Chart Footer - Quick Stats */}
      <div className="chart-footer" style={{
        display: 'flex',
        marginTop: '16px',
        paddingTop: '14px',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <BarChart3 size={14} color="var(--text-tertiary)" />
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
            24h Vol:
          </span>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            $10.77K
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
            24h High:
          </span>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--positive)' }}>
            $0.000033
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
            24h Low:
          </span>
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--negative)' }}>
            $0.000018
          </span>
        </div>
      </div>
    </div>
  )
}
