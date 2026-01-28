import React from 'react'

export function EarningsBanner({
  earnings = 6951.99,
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 16px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
    }}>
      <span style={{
        color: 'var(--text-tertiary)',
        fontSize: '13px',
      }}>
        earnings
      </span>
      <span style={{
        color: 'var(--accent)',
        fontSize: '18px',
        fontWeight: 700,
        fontFamily: 'var(--font-mono)',
      }}>
        ${earnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </span>
    </div>
  )
}
