import React, { useState } from 'react'

const variants = {
  primary: {
    background: 'var(--accent)',
    color: '#000',
    border: 'none',
    boxShadow: '0 2px 12px rgba(34, 197, 94, 0.25)',
  },
  secondary: {
    background: 'var(--bg-tertiary)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-medium)',
    boxShadow: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
    boxShadow: 'none',
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-medium)',
    boxShadow: 'none',
  },
  accent: {
    background: 'rgba(34, 197, 94, 0.1)',
    color: 'var(--accent)',
    border: '1px solid var(--border-accent)',
    boxShadow: '0 0 20px rgba(34, 197, 94, 0.1)',
  },
}

const hoverVariants = {
  primary: {
    background: 'var(--accent-bright)',
    boxShadow: '0 4px 24px rgba(34, 197, 94, 0.4)',
    transform: 'translateY(-2px)',
  },
  secondary: {
    background: 'var(--bg-elevated)',
    borderColor: 'var(--border-strong)',
    transform: 'translateY(-1px)',
  },
  ghost: {
    background: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--text-primary)',
  },
  outline: {
    background: 'rgba(255, 255, 255, 0.03)',
    borderColor: 'var(--border-strong)',
    transform: 'translateY(-1px)',
  },
  accent: {
    background: 'rgba(34, 197, 94, 0.15)',
    borderColor: 'var(--border-accent-strong)',
    boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)',
    transform: 'translateY(-1px)',
  },
}

const sizes = {
  sm: {
    padding: '10px 18px',
    fontSize: '14px',
    borderRadius: 'var(--radius-full)',
  },
  md: {
    padding: '12px 22px',
    fontSize: '15px',
    borderRadius: 'var(--radius-full)',
  },
  lg: {
    padding: '16px 28px',
    fontSize: '15px',
    borderRadius: 'var(--radius-full)',
  },
  xl: {
    padding: '18px 28px',
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

  const hoverStyles = isHovered && !disabled ? hoverVariants[variant] : {}

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
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transform: isPressed ? 'scale(0.97)' : (hoverStyles.transform || 'none'),
    ...hoverStyles,
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
