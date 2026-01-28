import React, { useState } from 'react'
import { Search, Plus, Wallet, Menu, X } from 'lucide-react'
import { Button, IconButton } from '../ui'

export function Header({ walletBalance = 1.05 }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(10, 10, 15, 0.8)',
      backdropFilter: 'blur(12px)',
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
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dim) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '18px',
            color: '#000',
            boxShadow: '0 4px 12px var(--accent-glow)',
          }}>
            $
          </div>
        </a>
        
        {/* Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '8px 14px',
          minWidth: '200px',
        }}>
          <Search size={16} color="var(--text-tertiary)" />
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontFamily: 'var(--font-display)',
              width: '100%',
            }}
          />
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
          gap: '12px',
          background: 'var(--bg-tertiary)',
          padding: '8px 16px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          marginLeft: '8px',
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>
            🍏
          </div>
          <span style={{ 
            fontWeight: 600, 
            fontSize: '14px',
            color: 'var(--text-primary)',
          }}>
            $LAMPS_APPLE
          </span>
          <span style={{
            color: 'var(--text-secondary)',
            fontSize: '14px',
          }}>
            |
          </span>
          <span style={{ 
            fontWeight: 600, 
            fontSize: '14px',
            color: 'var(--text-primary)',
          }}>
            {walletBalance} SOL
          </span>
        </div>
      </nav>
    </header>
  )
}
