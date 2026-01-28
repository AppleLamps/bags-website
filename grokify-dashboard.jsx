import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Copy, ExternalLink, Twitter, Globe, TrendingUp, TrendingDown, Clock, DollarSign, BarChart3, Wallet } from 'lucide-react';

const priceData = [
  { time: '00:00', price: 0.000018, volume: 2100 },
  { time: '02:00', price: 0.000021, volume: 3400 },
  { time: '04:00', price: 0.000019, volume: 2800 },
  { time: '06:00', price: 0.000024, volume: 5200 },
  { time: '08:00', price: 0.000028, volume: 7100 },
  { time: '10:00', price: 0.000025, volume: 4300 },
  { time: '12:00', price: 0.000031, volume: 8900 },
  { time: '14:00', price: 0.000027, volume: 6200 },
  { time: '16:00', price: 0.000033, volume: 9800 },
  { time: '18:00', price: 0.000029, volume: 7600 },
  { time: '20:00', price: 0.000032, volume: 8100 },
  { time: '22:00', price: 0.000029, volume: 10770 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(15, 15, 20, 0.95)',
        border: '1px solid rgba(0, 255, 136, 0.3)',
        borderRadius: '12px',
        padding: '12px 16px',
        backdropFilter: 'blur(10px)',
      }}>
        <p style={{ color: '#8a8a9a', fontSize: '12px', marginBottom: '4px' }}>{label}</p>
        <p style={{ color: '#00ff88', fontSize: '16px', fontWeight: '600' }}>
          ${payload[0].value.toFixed(6)}
        </p>
      </div>
    );
  }
  return null;
};

export default function GrokifyDashboard() {
  const [timeframe, setTimeframe] = useState('24H');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #0f0f18 50%, #0a0a12 100%)',
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#ffffff',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-30%',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(0, 255, 136, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-20%',
        width: '60%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(0, 200, 255, 0.02) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #1a1a24 0%, #0f0f15 100%)',
              border: '2px solid rgba(0, 255, 136, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              boxShadow: '0 8px 32px rgba(0, 255, 136, 0.1)',
            }}>
              🤖
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h1 style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  margin: 0,
                  background: 'linear-gradient(90deg, #ffffff 0%, #00ff88 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.5px',
                }}>$GROKIFY</h1>
                <div style={{
                  background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                  borderRadius: '50%',
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '12px' }}>✓</span>
                </div>
              </div>
              <p style={{ color: '#6a6a7a', margin: '4px 0 0', fontSize: '14px' }}>Grokify Prompt</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '12px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}>
            <Wallet size={18} color="#00ff88" />
            <span style={{ color: '#ffffff', fontWeight: '600' }}>1.39 SOL</span>
          </div>
        </div>

        {/* Earnings Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 200, 100, 0.05) 100%)',
          border: '1px solid rgba(0, 255, 136, 0.2)',
          borderRadius: '20px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '100%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 136, 0.05) 100%)',
          }} />
          <div>
            <p style={{ color: '#8a8a9a', fontSize: '14px', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Earnings</p>
            <p style={{ color: '#00ff88', fontSize: '36px', fontWeight: '700', margin: 0 }}>$144.33</p>
          </div>
          <button style={{
            background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '14px 32px',
            color: '#000',
            fontWeight: '700',
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(0, 255, 136, 0.3)',
          }}>
            Claim Now
          </button>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '24px',
        }}>
          {/* Chart Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '24px',
            padding: '28px',
          }}>
            {/* Chart Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontSize: '28px', fontWeight: '700' }}>$0.000029</span>
                  <span style={{
                    color: '#00ff88',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <TrendingUp size={14} />
                    +61.11%
                  </span>
                </div>
                <p style={{ color: '#6a6a7a', margin: '4px 0 0', fontSize: '13px' }}>Last 24 hours</p>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '6px',
                borderRadius: '12px',
              }}>
                {['1H', '24H', '7D', '30D'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    style={{
                      background: timeframe === tf ? 'rgba(0, 255, 136, 0.15)' : 'transparent',
                      border: timeframe === tf ? '1px solid rgba(0, 255, 136, 0.3)' : '1px solid transparent',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      color: timeframe === tf ? '#00ff88' : '#6a6a7a',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div style={{ height: '300px', marginBottom: '24px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00ff88" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#00ff88" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="time" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#4a4a5a', fontSize: 11 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#4a4a5a', fontSize: 11 }}
                    tickFormatter={(value) => `$${value.toFixed(5)}`}
                    domain={['dataMin - 0.000005', 'dataMax + 0.000005']}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#00ff88"
                    strokeWidth={2.5}
                    fill="url(#colorPrice)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}>
              {[
                { label: 'Market Cap', value: '$28.69K', icon: DollarSign },
                { label: '24H Volume', value: '$10.77K', icon: BarChart3 },
                { label: 'Total Earnings', value: '$6,896.22', icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <stat.icon size={16} color="#6a6a7a" />
                    <span style={{ color: '#6a6a7a', fontSize: '13px' }}>{stat.label}</span>
                  </div>
                  <p style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Contract Address */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <p style={{ color: '#6a6a7a', fontSize: '12px', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contract Address</p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                padding: '12px 16px',
              }}>
                <code style={{ color: '#ffffff', fontSize: '14px' }}>8F2F...BAGS</code>
                <button
                  onClick={handleCopy}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                  }}
                >
                  <Copy size={16} color={copied ? '#00ff88' : '#6a6a7a'} />
                </button>
              </div>
            </div>

            {/* Links */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Globe, label: 'Website' },
              ].map((link, i) => (
                <button key={i} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  <link.icon size={18} />
                  <span style={{ fontWeight: '500' }}>{link.label}</span>
                </button>
              ))}
            </div>

            {/* Creator Info */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '16px',
              }}>
                <div>
                  <p style={{ color: '#6a6a7a', fontSize: '12px', margin: '0 0 4px' }}>Created by</p>
                  <p style={{ color: '#ffffff', fontSize: '14px', margin: 0, fontWeight: '500' }}>9BFF...TK4X</p>
                </div>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#6a6a7a',
                }}>0% royalty</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ color: '#6a6a7a', fontSize: '12px', margin: '0 0 4px' }}>Royalties to</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px' }}>🍏</span>
                    <p style={{ color: '#00ff88', fontSize: '14px', margin: 0, fontWeight: '600' }}>LAMPS_APPLE</p>
                  </div>
                </div>
                <span style={{
                  background: 'rgba(0, 255, 136, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#00ff88',
                }}>100%</span>
              </div>
            </div>

            {/* Buy Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Buy on Bags', color: '#00ff88', primary: true },
                { name: 'Buy on Axiom', color: '#ffffff', primary: false },
                { name: 'Buy on Jupiter', color: '#ffffff', primary: false },
              ].map((btn, i) => (
                <button key={i} style={{
                  background: btn.primary 
                    ? 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: btn.primary ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '18px 24px',
                  color: btn.primary ? '#000' : '#ffffff',
                  fontWeight: '600',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: btn.primary ? '0 4px 20px rgba(0, 255, 136, 0.25)' : 'none',
                }}>
                  {btn.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
