import React, { useState } from 'react'

const variants = {
  primary: {
    background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dim) 100%)',
    color: '#000',
    border: 'none',
    boxShadow: 'var(--shadow-button)',
  },
  secondary: {
    background: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent',
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-medium)',
  },
  accent: {
    background: 'var(--accent-subtle)',
    color: 'var(--accent)',
    border: '1px solid var(--border-accent)',
  },
}

const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: '13px',
    borderRadius: 'var(--radius-sm)',
  },
  md: {
    padding: '12px 20px',
    fontSize: '14px',
    borderRadius: 'var(--radius-md)',
  },
  lg: {
    padding: '16px 28px',
    fontSize: '15px',
    borderRadius: 'var(--radius-lg)',
  },
  xl: {
    padding: '18px 32px',
    fontSize: '16px',
    borderRadius: 'var(--radius-lg)',
  },
}

export function Button({
  children,
  variant = 'secondary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  style = {},
  onClick,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const baseStyle = {
    ...variants[variant],
    ...sizes[size],
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transform: isPressed ? 'scale(0.98)' : isHovered ? 'translateY(-1px)' : 'none',
    ...style,
  }

  return (
    <button
      style={baseStyle}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false) }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      {...props}
    >
      {loading ? (
        <span style={{ 
          width: '16px', 
          height: '16px', 
          border: '2px solid currentColor',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  )
}

export function IconButton({
  children,
  variant = 'ghost',
  size = 24,
  style = {},
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      style={{
        ...variants[variant],
        width: size + 16,
        height: size + 16,
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        opacity: isHovered ? 0.8 : 1,
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  )
}
