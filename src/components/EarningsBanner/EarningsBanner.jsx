import React from 'react'

export function EarningsBanner({
  earnings = 6951.99,
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 20px',
      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, var(--bg-card) 100%)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-lg)',
    }}>
      <span style={{
        color: 'var(--text-secondary)',
        fontSize: '14px',
        fontWeight: 500,
      }}>
        earnings
      </span>
      <span style={{
        color: 'var(--accent)',
        fontSize: '26px',
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
        textShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
      }}>
        ${earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </span>
    </div>
  )
}
