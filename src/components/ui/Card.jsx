import React from 'react'

const variants = {
  default: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
  },
  elevated: {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-card)',
  },
  accent: {
    background: 'var(--accent-subtle)',
    border: '1px solid var(--border-accent)',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid var(--border-subtle)',
    backdropFilter: 'blur(12px)',
  },
}

export function Card({ 
  children, 
  variant = 'default', 
  padding = 'md',
  radius = 'lg',
  className = '',
  style = {},
  hoverable = false,
  onClick,
  ...props 
}) {
  const paddingMap = {
    none: 0,
    sm: 'var(--space-md)',
    md: 'var(--space-lg)',
    lg: 'var(--space-xl)',
  }

  const radiusMap = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
  }

  const baseStyle = {
    ...variants[variant],
    padding: paddingMap[padding],
    borderRadius: radiusMap[radius],
    transition: 'all 0.2s ease',
    cursor: hoverable || onClick ? 'pointer' : 'default',
    ...style,
  }

  const hoverStyle = hoverable ? {
    ':hover': {
      background: 'var(--bg-card-hover)',
      borderColor: 'var(--border-medium)',
    }
  } : {}

  return (
    <div 
      className={className}
      style={baseStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, style = {} }) {
  return (
    <div style={{
      marginBottom: 'var(--space-md)',
      paddingBottom: 'var(--space-md)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style,
    }}>
      {children}
    </div>
  )
}

export function CardTitle({ children, style = {} }) {
  return (
    <h3 style={{
      fontSize: '18px',
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: 0,
      ...style,
    }}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, style = {} }) {
  return (
    <p style={{
      fontSize: '13px',
      color: 'var(--text-secondary)',
      margin: '4px 0 0',
      ...style,
    }}>
      {children}
    </p>
  )
}
