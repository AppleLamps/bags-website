import React, { useState } from 'react'
import { Home, User, Settings } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export function BottomNav({ active = 'profile' }) {
  const [activeTab, setActiveTab] = useState(active)

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      padding: '12px 24px 24px',
      background: 'linear-gradient(to top, var(--bg-primary) 60%, transparent)',
      zIndex: 100,
    }}>
      <div style={{
        display: 'flex',
        gap: '32px',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '12px 40px',
        backdropFilter: 'blur(12px)',
      }}>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                transition: 'all 0.2s ease',
              }}
            >
              <Icon 
                size={22} 
                color={isActive ? 'var(--accent)' : 'var(--text-tertiary)'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span style={{
                fontSize: '11px',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
              }}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
