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
import { DollarSign, BarChart3, TrendingUp, Activity, Droplets, Users, ArrowUpDown, Cpu } from 'lucide-react'

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
        {/* Token Header with Stats */}
        <div className="token-header" style={{
          marginBottom: '20px',
        }}>
          <div className="token-header-info">
            {/* Token Avatar */}
            <div className="token-avatar" style={{
              background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
              border: '1px solid var(--border-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Cpu size={24} color="var(--accent)" />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h1 className="token-name" style={{
                  fontWeight: 700,
                  margin: 0,
                  color: 'var(--text-primary)',
                }}>
                  {tokenData.name}
                </h1>
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
                  flexShrink: 0,
                }}>
                  ✓
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0', fontSize: '14px' }}>
                {tokenData.description}
              </p>
              {/* Dual Price Display */}
              <div className="price-tags" style={{ marginTop: '8px' }}>
                <div className="price-tag" style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginRight: '6px' }}>USD</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    $0.0₄2033
                  </span>
                </div>
                <div className="price-tag" style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginRight: '6px' }}>SOL</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    0.0₆1606
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Banner */}
          <div className="earnings-banner" style={{
            display: 'flex',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, var(--bg-card) 100%)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.1)',
            animation: 'fadeInScale 0.5s ease-out',
          }}>
            <div>
              <p style={{
                color: 'var(--text-tertiary)',
                fontSize: '11px',
                margin: '0 0 2px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                Your Earnings
              </p>
              <p style={{
                color: 'var(--accent)',
                fontSize: '22px',
                fontWeight: 700,
                margin: 0,
                fontFamily: 'var(--font-mono)',
                textShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
              }}>
                ${tokenData.earnings.toLocaleString()}
              </p>
            </div>
            <button style={{
              background: 'var(--accent)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '10px 20px',
              color: '#000',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}>
              Claim Now
            </button>
          </div>
        </div>

        {/* Main Grid - Chart + Sidebar */}
        <div className="main-grid">
          {/* Left Column - Chart */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
              borderRadius: 'var(--radius-lg)',
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
                  borderRadius: 'var(--radius-md)',
                  border: period.active ? '1px solid var(--border-accent)' : '1px solid transparent',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>{period.label}</div>
                  <div style={{ color: period.color, fontSize: '13px', fontWeight: 600 }}>{period.value}</div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="stats-grid">
              {[
                {
                  label: 'Market Cap',
                  value: `$${(tokenData.marketCap / 1000).toFixed(2)}K`,
                  icon: DollarSign,
                  change: '+12.3%',
                },
                {
                  label: '24H Volume',
                  value: `$${(tokenData.volume24h / 1000).toFixed(2)}K`,
                  icon: BarChart3,
                  change: '+8.7%',
                },
                {
                  label: 'Total Earnings',
                  value: `$${tokenData.totalEarnings.toLocaleString()}`,
                  icon: TrendingUp,
                  change: '+156%',
                },
              ].map((stat, i) => (
                <div key={stat.label} style={{
                  padding: '14px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  animation: `fadeInUp 0.4s ease-out ${i * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <stat.icon size={14} color="var(--accent)" />
                    </div>
                    <span style={{
                      color: 'var(--text-tertiary)',
                      fontSize: '11px',
                      fontWeight: 500,
                    }}>
                      {stat.label}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      margin: 0,
                      fontFamily: 'var(--font-mono)',
                    }}>
                      {stat.value}
                    </p>
                    <span style={{
                      color: 'var(--positive)',
                      fontSize: '10px',
                      fontWeight: 600,
                      textShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
                    }}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Liquidity/FDV/Holders Row */}
            <div className="stats-grid">
              {[
                {
                  label: 'Liquidity',
                  value: `$${(tokenData.liquidity / 1000).toFixed(0)}K`,
                  icon: Droplets,
                  color: '#3b82f6',
                },
                {
                  label: 'FDV',
                  value: `$${(tokenData.fdv / 1000).toFixed(0)}K`,
                  icon: DollarSign,
                  color: '#f59e0b',
                },
                {
                  label: 'Holders',
                  value: tokenData.holders.toString(),
                  icon: Users,
                  color: '#a855f7',
                },
              ].map((stat, i) => (
                <div key={stat.label} style={{
                  padding: '14px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: 'var(--radius-md)',
                      background: `${stat.color}15`,
                      border: `1px solid ${stat.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <stat.icon size={14} color={stat.color} />
                    </div>
                    <span style={{
                      color: 'var(--text-tertiary)',
                      fontSize: '11px',
                      fontWeight: 500,
                    }}>
                      {stat.label}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Buy/Sell Activity Section */}
            <div style={{
              padding: '14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '14px',
              }}>
                <ArrowUpDown size={16} color="var(--accent)" />
                <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>Trading Activity</span>
              </div>

              {/* Transaction Stats */}
              <div className="trading-activity-grid" style={{ marginBottom: '14px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px' }}>TXNS</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.txns}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px' }}>BUYS</div>
                  <div style={{ color: 'var(--positive)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.buys}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px' }}>SELLS</div>
                  <div style={{ color: 'var(--negative)', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.sells}</div>
                </div>
              </div>

              {/* Volume Breakdown */}
              <div className="trading-activity-grid" style={{
                paddingTop: '14px',
                borderTop: '1px solid var(--border-subtle)',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px' }}>VOLUME</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>${(tokenData.volume24h / 1000).toFixed(1)}K</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px' }}>BUY VOL</div>
                  <div style={{ color: 'var(--positive)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>${(tokenData.buyVolume / 1000).toFixed(1)}K</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '10px', marginBottom: '4px' }}>SELL VOL</div>
                  <div style={{ color: 'var(--negative)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>${(tokenData.sellVolume / 1000).toFixed(1)}K</div>
                </div>
              </div>

              {/* Buy/Sell Ratio Bar */}
              <div style={{ marginTop: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>BUYERS: {tokenData.buyers}</span>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '10px' }}>SELLERS: {tokenData.sellers}</span>
                </div>
                <div style={{
                  display: 'flex',
                  height: '8px',
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${(tokenData.buyers / (tokenData.buyers + tokenData.sellers)) * 100}%`,
                    background: 'var(--positive)',
                  }} />
                  <div style={{
                    width: `${(tokenData.sellers / (tokenData.buyers + tokenData.sellers)) * 100}%`,
                    background: 'var(--negative)',
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="sidebar">
            {/* Contract Address */}
            <ContractAddress
              address={tokenData.contractAddress}
              shortAddress={tokenData.shortAddress}
            />

            {/* Social Links */}
            <SocialLinks
              twitterUrl={tokenData.twitterUrl}
              websiteUrl={tokenData.websiteUrl}
            />

            {/* Creator Info */}
            <CreatorInfo
              creator={tokenData.creator}
              royaltiesTo={tokenData.royaltiesTo}
            />

            {/* Earnings */}
            <EarningsBanner earnings={tokenData.earnings} />

            {/* Buy Buttons */}
            <BuyButtons />
          </div>
        </div>

        {/* Project Updates Section */}
        <ProjectUpdates />
      </main>
    </div>
  )
}
