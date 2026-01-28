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
      {/* Background Effects */}
      <div style={{
        position: 'fixed',
        top: '-20%',
        right: '-10%',
        width: '60%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(0, 255, 136, 0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-20%',
        left: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(0, 200, 255, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

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
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
              border: '2px solid var(--border-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              boxShadow: 'var(--shadow-glow)',
            }}>
              {tokenData.emoji}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h1 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  margin: 0,
                  background: 'linear-gradient(90deg, var(--text-primary) 0%, var(--accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {tokenData.name}
                </h1>
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dim) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
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
          <Card
            variant="accent"
            padding="md"
            radius="xl"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 200, 100, 0.05) 100%)',
            }}
          >
            <div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '12px',
                margin: '0 0 4px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                Your Earnings
              </p>
              <p style={{
                color: 'var(--accent)',
                fontSize: '28px',
                fontWeight: 700,
                margin: 0,
                fontFamily: 'var(--font-mono)',
              }}>
                ${tokenData.earnings.toLocaleString()}
              </p>
            </div>
            <button style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dim) 100%)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              padding: '14px 28px',
              color: '#000',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-button)',
            }}>
              Claim Now
            </button>
          </Card>
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
              gap: '16px',
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
                <Card key={i} variant="glass" padding="md" radius="xl">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--accent-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <stat.icon size={18} color="var(--accent)" />
                    </div>
                    <span style={{
                      color: 'var(--text-secondary)',
                      fontSize: '13px',
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
                      fontSize: '24px',
                      fontWeight: 700,
                      margin: 0,
                      fontFamily: 'var(--font-mono)',
                    }}>
                      {stat.value}
                    </p>
                    <span style={{
                      color: 'var(--positive)',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      {stat.change}
                    </span>
                  </div>
                </Card>
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
