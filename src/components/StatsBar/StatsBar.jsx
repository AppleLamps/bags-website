import React from 'react'
import { Card } from '../ui'

export function StatsBar({
  marketCap = 23840,
  volume24h = 9020,
  price = 0.000024,
}) {
  const formatValue = (value, prefix = '$') => {
    if (value >= 1000000) {
      return `${prefix}${(value / 1000000).toFixed(2)}M`
    }
    if (value >= 1000) {
      return `${prefix}${(value / 1000).toFixed(2)}K`
    }
    return `${prefix}${value.toFixed(2)}`
  }

  const stats = [
    { label: 'MCAP', value: formatValue(marketCap) },
    { label: '24H VOL', value: formatValue(volume24h) },
    { label: 'PRICE', value: `$${price.toFixed(6)}` },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      padding: '0 16px',
    }}>
      {stats.map((stat, i) => (
        <Card 
          key={i}
          variant="default"
          padding="md"
          radius="lg"
          style={{
            textAlign: 'center',
          }}
        >
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            margin: '0 0 6px',
          }}>
            {stat.label}
          </p>
          <p style={{
            color: 'var(--text-primary)',
            fontSize: '16px',
            fontWeight: 700,
            margin: 0,
            fontFamily: 'var(--font-mono)',
          }}>
            {stat.value}
          </p>
        </Card>
      ))}
    </div>
  )
}
