import React from 'react'
import {
  Header,
  TokenProfile,
  StatsBar,
  ContractAddress,
  SocialLinks,
  CreatorInfo,
  EarningsBanner,
  BuyButtons,
  BottomNav,
  TradingChart,
  Card,
  ProjectUpdates,
} from '../components'
import { DollarSign, BarChart3, TrendingUp, Activity, Droplets, Users, ArrowUpDown, Cpu, ExternalLink, Twitter, Globe, Copy, User, Percent } from 'lucide-react'

// Token data
const tokenData = {
  name: '$GROKIFY',
  description: 'Grokify Prompt',
  verified: true,
  contractAddress: '8F2F7Jk9mNpQrStUvWxYz1AbCdEfGhIjKlMnOpQrStUvWxYz1BAGS',
  shortAddress: '8F2F...BAGS',
  marketCap: 20000,
  volume24h: 3700,
  price: 0.0000420,
  priceSol: 0.0000001606,
  priceChange24h: -8.82,
  priceChange1h: -0.30,
  priceChange6h: -6.52,
  liquidity: 12000,
  fdv: 20000,
  holders: 335,
  // Trading activity
  txns: 65,
  buys: 32,
  sells: 33,
  buyVolume: 1600,
  sellVolume: 2000,
  makers: 40,
  buyers: 20,
  sellers: 28,
  earnings: 6951.99,
  totalEarnings: 6896.22,
  creator: {
    address: '9BFF...TK4X',
    royalty: 0,
  },
  royaltiesTo: {
    name: 'LAMPS_APPLE',
    percentage: 100,
  },
  twitterUrl: 'https://twitter.com/grokify',
  websiteUrl: 'https://grokify.io',
}

export function TokenPage() {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      background: 'var(--bg-primary)',
    }}>
      {/* Gradient Background Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '600px',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 197, 94, 0.12) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Header */}
      <Header walletBalance={1.05} />

      {/* Main Content */}
      <main className="container-responsive" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Compact Token Header Row */}
        <div className="token-header-compact" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
          flexWrap: 'wrap',
        }}>
          {/* Left: Token Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
              border: '1px solid var(--border-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Cpu size={24} color="var(--accent)" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>{tokenData.name}</h1>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  color: '#000',
                  fontWeight: 700,
                }}>
                  ✓
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: '2px 0 0', fontSize: '13px' }}>
                {tokenData.description}
              </p>
            </div>
            {/* Price Tags */}
            <div style={{ display: 'flex', gap: '8px', marginLeft: '8px' }}>
              <div style={{
                background: 'var(--bg-tertiary)',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', fontWeight: 500 }}>USD</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                  $0.0₄2033
                </span>
              </div>
              <div style={{
                background: 'var(--bg-tertiary)',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', fontWeight: 500 }}>SOL</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                  0.0₆1606
                </span>
              </div>
            </div>
          </div>

          {/* Right: Earnings + Claim */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, var(--bg-card) 100%)',
            border: '1px solid var(--border-accent)',
            borderRadius: '14px',
            padding: '12px 18px',
          }}>
            <div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '11px', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 500 }}>
                Your Earnings
              </p>
              <p style={{ color: 'var(--accent)', fontSize: '22px', fontWeight: 700, margin: 0, fontFamily: 'var(--font-mono)' }}>
                ${tokenData.earnings.toLocaleString()}
              </p>
            </div>
            <button style={{
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '20px',
              padding: '10px 20px',
              color: '#000',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Claim Now
            </button>
          </div>
        </div>

        {/* Horizontal Stats Bar */}
        <div className="stats-bar-horizontal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '12px',
          marginBottom: '16px',
        }}>
          {[
            { label: 'Market Cap', value: `$${(tokenData.marketCap / 1000).toFixed(1)}K`, icon: DollarSign, change: '+12.3%', color: 'var(--accent)' },
            { label: '24H Volume', value: `$${(tokenData.volume24h / 1000).toFixed(1)}K`, icon: BarChart3, change: '+8.7%', color: 'var(--accent)' },
            { label: 'Total Earnings', value: `$${tokenData.totalEarnings.toLocaleString()}`, icon: TrendingUp, change: '+156%', color: 'var(--accent)' },
            { label: 'Liquidity', value: `$${(tokenData.liquidity / 1000).toFixed(0)}K`, icon: Droplets, color: '#3b82f6' },
            { label: 'FDV', value: `$${(tokenData.fdv / 1000).toFixed(0)}K`, icon: DollarSign, color: '#f59e0b' },
            { label: 'Holders', value: tokenData.holders.toString(), icon: Users, color: '#a855f7' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              padding: '14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <stat.icon size={14} color={stat.color} />
                </div>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', fontWeight: 500 }}>{stat.label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{stat.value}</span>
                {stat.change && <span style={{ color: 'var(--positive)', fontSize: '11px', fontWeight: 600 }}>{stat.change}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid - Chart + Sidebar */}
        <div className="main-grid-balanced">
          {/* Left Column - Chart & Trading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Trading Chart */}
            <TradingChart
              symbol={tokenData.name}
              currentPrice={tokenData.price}
              priceChange={tokenData.priceChange24h}
            />

            {/* Time-based Price Changes */}
            <div className="time-periods" style={{
              padding: '12px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
            }}>
              {[
                { label: '5M', value: 'N/A', color: 'var(--text-tertiary)' },
                { label: '1H', value: `${tokenData.priceChange1h}%`, color: tokenData.priceChange1h >= 0 ? 'var(--positive)' : 'var(--negative)' },
                { label: '6H', value: `${tokenData.priceChange6h}%`, color: tokenData.priceChange6h >= 0 ? 'var(--positive)' : 'var(--negative)' },
                { label: '24H', value: `${tokenData.priceChange24h}%`, color: tokenData.priceChange24h >= 0 ? 'var(--positive)' : 'var(--negative)', active: true },
              ].map((period, i) => (
                <div key={i} style={{
                  padding: '10px 8px',
                  background: period.active ? 'var(--bg-tertiary)' : 'transparent',
                  borderRadius: '8px',
                  border: period.active ? '1px solid var(--border-accent)' : '1px solid transparent',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '12px', marginBottom: '4px', fontWeight: 500 }}>{period.label}</div>
                  <div style={{ color: period.color, fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{period.value}</div>
                </div>
              ))}
            </div>

            {/* Trading Activity - Compact */}
            <div style={{
              padding: '14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <ArrowUpDown size={16} color="var(--accent)" />
                <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>Trading Activity</span>
              </div>

              {/* Transaction Stats Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px', marginBottom: '14px' }}>
                <div style={{ textAlign: 'center', padding: '10px 6px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase' }}>TXNS</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.txns}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '10px 6px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase' }}>BUYS</div>
                  <div style={{ color: 'var(--positive)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.buys}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '10px 6px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase' }}>SELLS</div>
                  <div style={{ color: 'var(--negative)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.sells}</div>
                </div>
                <div style={{ textAlign: 'center', padding: '10px 6px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase' }}>VOLUME</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>${(tokenData.volume24h / 1000).toFixed(1)}K</div>
                </div>
                <div style={{ textAlign: 'center', padding: '10px 6px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase' }}>BUY VOL</div>
                  <div style={{ color: 'var(--positive)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>${(tokenData.buyVolume / 1000).toFixed(1)}K</div>
                </div>
                <div style={{ textAlign: 'center', padding: '10px 6px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase' }}>SELL VOL</div>
                  <div style={{ color: 'var(--negative)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>${(tokenData.sellVolume / 1000).toFixed(1)}K</div>
                </div>
              </div>

              {/* Buy/Sell Ratio Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--positive)', fontSize: '11px', fontWeight: 600 }}>BUYERS: {tokenData.buyers}</span>
                  <span style={{ color: 'var(--negative)', fontSize: '11px', fontWeight: 600 }}>SELLERS: {tokenData.sellers}</span>
                </div>
                <div style={{ display: 'flex', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${(tokenData.buyers / (tokenData.buyers + tokenData.sellers)) * 100}%`, background: 'var(--positive)' }} />
                  <div style={{ width: `${(tokenData.sellers / (tokenData.buyers + tokenData.sellers)) * 100}%`, background: 'var(--negative)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar (Sticky) */}
          <div className="sidebar-sticky">
            {/* Contract Address */}
            <div style={{
              padding: '14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>{tokenData.shortAddress}</span>
                <button style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Copy size={14} color="var(--text-secondary)" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <a href={tokenData.twitterUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: '12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontSize: '13px',
                fontWeight: 500,
              }}>
                <ExternalLink size={14} /> twitter
              </a>
              <a href={tokenData.websiteUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: '12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontSize: '13px',
                fontWeight: 500,
              }}>
                <Globe size={14} /> website
              </a>
            </div>

            {/* Creator & Royalties */}
            <div style={{
              padding: '14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={14} color="var(--text-tertiary)" />
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '12px' }}>created by</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>{tokenData.creator.address}</span>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', background: 'var(--bg-tertiary)', padding: '4px 8px', borderRadius: '6px' }}>earns {tokenData.creator.royalty}%</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Percent size={14} color="var(--text-tertiary)" />
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '12px' }}>royalties to</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: 500 }}>{tokenData.royaltiesTo.name}</span>
                  <span style={{ color: 'var(--accent)', fontSize: '11px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '4px 8px', borderRadius: '6px' }}>earns {tokenData.royaltiesTo.percentage}%</span>
                </div>
              </div>
            </div>

            {/* Earnings Display */}
            <div style={{
              padding: '16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '12px' }}>earnings</span>
                <span style={{ color: 'var(--accent)', fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>${tokenData.earnings.toLocaleString()}</span>
              </div>
            </div>

            {/* Buy Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button style={{
                width: '100%',
                padding: '14px',
                background: 'var(--accent)',
                border: 'none',
                borderRadius: '12px',
                color: '#000',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}>
                <DollarSign size={16} /> Buy on Bags
              </button>
              {['Axiom', 'Jupiter', 'Photon'].map(exchange => (
                <button key={exchange} style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}>
                  <ExternalLink size={14} /> Buy on {exchange}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
