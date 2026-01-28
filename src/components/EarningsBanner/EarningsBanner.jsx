import React from 'react'
import { Card } from '../ui'
import { DollarSign } from 'lucide-react'

export function EarningsBanner({
  earnings = 6951.99,
}) {
  return (
    <Card 
      variant="default" 
      padding="md" 
      radius="lg"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <p style={{
          color: 'var(--text-tertiary)',
          fontSize: '12px',
          margin: '0 0 4px',
        }}>
          earnings
        </p>
      </div>
      <span style={{
        color: 'var(--accent)',
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
      }}>
        ${earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </span>
    </Card>
  )
}
