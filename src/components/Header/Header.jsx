import React from 'react'
import { Search, Plus } from 'lucide-react'
import { Button } from '../ui'

export function Header({ walletBalance = 1.05 }) {

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      gap: '12px',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            minWidth: '32px',
            borderRadius: '8px',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '16px',
            color: '#000',
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
            transition: 'all 0.3s ease',
          }}>
            $
          </div>
        </a>

        {/* Search - Always visible */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}>
          <Search size={18} color="var(--text-tertiary)" />
        </div>
      </div>

      {/* Navigation - Hidden on mobile via CSS */}
      <nav className="header-nav" style={{ alignItems: 'center', gap: '8px' }}>
        <a
          href="#"
          style={{
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: 'var(--radius-sm)',
            transition: 'all 0.15s ease',
          }}
        >
          [how it works]
        </a>

        <Button
          variant="primary"
          size="sm"
          icon={<Plus size={16} />}
        >
          new project
        </Button>
      </nav>

      {/* Wallet - Always visible with responsive styling */}
      <div className="header-wallet" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border-subtle)',
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          minWidth: '24px',
          borderRadius: '6px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
        }}>
          🍏
        </div>
        <span className="header-wallet-name" style={{
          fontWeight: 600,
          fontSize: '13px',
          color: 'var(--text-primary)',
        }}>
          $LAMPS_APPLE
        </span>
        <span className="hide-mobile" style={{
          color: 'var(--border-medium)',
          fontSize: '14px',
        }}>
          |
        </span>
        <span style={{
          fontWeight: 600,
          fontSize: '13px',
          color: 'var(--text-primary)',
          whiteSpace: 'nowrap',
        }}>
          {walletBalance} SOL
        </span>
      </div>
    </header>
  )
}
