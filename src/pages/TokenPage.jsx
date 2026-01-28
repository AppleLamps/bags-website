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
import { DollarSign, BarChart3, TrendingUp, Activity, Droplets, Users, ArrowUpDown } from 'lucide-react'

// Token data
const tokenData = {
  name: '$GROKIFY',
  description: 'Grokify Prompt',
  verified: true,
  emoji: '🤖',
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
    avatar: '👤',
  },
  royaltiesTo: {
    name: 'LAMPS_APPLE',
    percentage: 100,
    avatar: '🍏',
  },
  twitterUrl: 'https://twitter.com/grokify',
  websiteUrl: 'https://grokify.io',
}

export function TokenPage() {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
    }}>

      {/* Header */}
      <Header walletBalance={1.05} />

      {/* Main Content */}
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '24px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Token Header with Stats */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Token Avatar */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}>
              {tokenData.emoji}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{
                  fontSize: '28px',
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
                }}>
                  ✓
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0', fontSize: '14px' }}>
                {tokenData.description}
              </p>
              {/* Dual Price Display */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <div style={{
                  padding: '6px 12px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginRight: '6px' }}>USD</span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    $0.0₄2033
                  </span>
                </div>
                <div style={{
                  padding: '6px 12px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginRight: '6px' }}>SOL</span>
                  <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    0.0₆1606
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            padding: '16px 20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
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
                fontSize: '24px',
                fontWeight: 700,
                margin: 0,
                fontFamily: 'var(--font-mono)',
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
            }}>
              Claim Now
            </button>
          </div>
        </div>

        {/* Main Grid - Chart + Sidebar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '24px',
        }}>
          {/* Left Column - Chart */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Trading Chart */}
            <TradingChart
              symbol={tokenData.name}
              currentPrice={tokenData.price}
              priceChange={tokenData.priceChange24h}
            />

            {/* Time-based Price Changes */}
            <div style={{
              display: 'flex',
              gap: '8px',
              padding: '12px 16px',
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
                  flex: 1,
                  padding: '10px 12px',
                  background: period.active ? 'var(--bg-tertiary)' : 'transparent',
                  borderRadius: 'var(--radius-md)',
                  border: period.active ? '1px solid var(--border-accent)' : '1px solid transparent',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>{period.label}</div>
                  <div style={{ color: period.color, fontSize: '14px', fontWeight: 600 }}>{period.value}</div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}>
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
                <div key={i} style={{
                  padding: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '10px',
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <stat.icon size={16} color="var(--accent)" />
                    </div>
                    <span style={{
                      color: 'var(--text-tertiary)',
                      fontSize: '12px',
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
                      fontSize: '20px',
                      fontWeight: 700,
                      margin: 0,
                      fontFamily: 'var(--font-mono)',
                    }}>
                      {stat.value}
                    </p>
                    <span style={{
                      color: 'var(--positive)',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Liquidity/FDV/Holders Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}>
              {[
                {
                  label: 'Liquidity',
                  value: `$${(tokenData.liquidity / 1000).toFixed(0)}K`,
                  icon: Droplets,
                },
                {
                  label: 'FDV',
                  value: `$${(tokenData.fdv / 1000).toFixed(0)}K`,
                  icon: DollarSign,
                },
                {
                  label: 'Holders',
                  value: tokenData.holders.toString(),
                  icon: Users,
                },
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '10px',
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <stat.icon size={16} color="var(--accent)" />
                    </div>
                    <span style={{
                      color: 'var(--text-tertiary)',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}>
                      {stat.label}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '20px',
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
              padding: '16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <ArrowUpDown size={16} color="var(--accent)" />
                <span style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600 }}>Trading Activity</span>
              </div>

              {/* Transaction Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '16px',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>TXNS</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.txns}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>BUYS</div>
                  <div style={{ color: 'var(--positive)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.buys}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>SELLS</div>
                  <div style={{ color: 'var(--negative)', fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tokenData.sells}</div>
                </div>
              </div>

              {/* Volume Breakdown */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>VOLUME</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>${(tokenData.volume24h / 1000).toFixed(1)}K</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>BUY VOL</div>
                  <div style={{ color: 'var(--positive)', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>${(tokenData.buyVolume / 1000).toFixed(1)}K</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '11px', marginBottom: '4px' }}>SELL VOL</div>
                  <div style={{ color: 'var(--negative)', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>${(tokenData.sellVolume / 1000).toFixed(1)}K</div>
                </div>
              </div>

              {/* Buy/Sell Ratio Bar */}
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}>BUYERS: {tokenData.buyers}</span>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}>SELLERS: {tokenData.sellers}</span>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
