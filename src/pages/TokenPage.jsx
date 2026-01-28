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
import { DollarSign, BarChart3, TrendingUp, Activity } from 'lucide-react'

// Token data
const tokenData = {
  name: '$GROKIFY',
  description: 'Grokify Prompt',
  verified: true,
  emoji: '🤖',
  contractAddress: '8F2F7Jk9mNpQrStUvWxYz1AbCdEfGhIjKlMnOpQrStUvWxYz1BAGS',
  shortAddress: '8F2F...BAGS',
  marketCap: 23840,
  volume24h: 9020,
  price: 0.000024,
  priceChange24h: 61.11,
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
