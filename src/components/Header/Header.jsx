import React from 'react'
import { Search, Plus } from 'lucide-react'
import { Button } from '../ui'

export function Header({ walletBalance = 1.05 }) {
  
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bg-primary)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
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
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '18px',
            color: '#000',
          }}>
            $
          </div>
        </a>
        
        {/* Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}>
          <Search size={18} color="var(--text-tertiary)" />
        </div>
      </div>
      
      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
        
        {/* Wallet */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--bg-tertiary)',
          padding: '8px 14px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)',
          marginLeft: '8px',
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
          }}>
            🍏
          </div>
          <span style={{
            fontWeight: 600,
            fontSize: '13px',
            color: 'var(--text-primary)',
          }}>
            $LAMPS_APPLE
          </span>
          <span style={{
            color: 'var(--border-medium)',
            fontSize: '14px',
          }}>
            |
          </span>
          <span style={{
            fontWeight: 600,
            fontSize: '13px',
            color: 'var(--text-primary)',
          }}>
            {walletBalance} SOL
          </span>
        </div>
      </nav>
    </header>
  )
}
