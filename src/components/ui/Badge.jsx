import React from 'react'
import { Check } from 'lucide-react'

const variants = {
  default: {
    background: 'var(--bg-elevated)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-subtle)',
  },
  accent: {
    background: 'var(--accent-subtle)',
    color: 'var(--accent)',
    border: '1px solid var(--border-accent)',
  },
  positive: {
    background: 'rgba(0, 255, 136, 0.1)',
    color: 'var(--positive)',
    border: '1px solid rgba(0, 255, 136, 0.2)',
  },
  negative: {
    background: 'rgba(255, 68, 102, 0.1)',
    color: 'var(--negative)',
    border: '1px solid rgba(255, 68, 102, 0.2)',
  },
  warning: {
    background: 'rgba(255, 170, 0, 0.1)',
    color: 'var(--warning)',
    border: '1px solid rgba(255, 170, 0, 0.2)',
  },
}

export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  style = {},
  ...props
}) {
  const sizeStyles = {
    xs: { padding: '2px 6px', fontSize: '10px' },
    sm: { padding: '4px 10px', fontSize: '12px' },
    md: { padding: '6px 12px', fontSize: '13px' },
  }

  return (
    <span
      style={{
        ...variants[variant],
        ...sizeStyles[size],
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        borderRadius: 'var(--radius-sm)',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export function VerifiedBadge({ size = 20 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dim) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px var(--accent-glow)',
      }}
    >
      <Check size={size * 0.6} color="#000" strokeWidth={3} />
    </div>
  )
}

export function PriceChange({ value, showIcon = true }) {
  const isPositive = value >= 0
  
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        color: isPositive ? 'var(--positive)' : 'var(--negative)',
        fontSize: '14px',
        fontWeight: 600,
      }}
    >
      {showIcon && (
        <span style={{ fontSize: '12px' }}>
          {isPositive ? '▲' : '▼'}
        </span>
      )}
      {isPositive ? '+' : ''}{value.toFixed(2)}%
    </span>
  )
}
