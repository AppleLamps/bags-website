import React from 'react'
import { X } from 'lucide-react'

export function CreatorInfo({
  creator = {
    address: '9BFF...TK4X',
    royalty: 0,
    avatar: null,
  },
  royaltiesTo = {
    name: 'LAMPS_APPLE',
    percentage: 100,
    avatar: '🍏',
  },
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      {/* Creator */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
      }}>
        <div>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '11px',
            margin: '0 0 4px',
          }}>
            created by
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
            }}>
              {creator.avatar || '👤'}
            </div>
            <code style={{
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}>
              {creator.address}
            </code>
          </div>
        </div>
        <span style={{
          padding: '4px 10px',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-full)',
          fontSize: '11px',
          color: 'var(--text-secondary)',
        }}>
          earns {creator.royalty}%
        </span>
      </div>

      {/* Royalties To */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
      }}>
        <div>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '11px',
            margin: '0 0 4px',
          }}>
            royalties to
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
            }}>
              {royaltiesTo.avatar}
            </div>
            <span style={{
              color: 'var(--accent)',
              fontSize: '13px',
              fontWeight: 600,
            }}>
              {royaltiesTo.name}
            </span>
            <X size={12} color="var(--text-tertiary)" />
          </div>
        </div>
        <span style={{
          padding: '4px 10px',
          background: 'var(--accent-subtle)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-full)',
          fontSize: '11px',
          color: 'var(--accent)',
        }}>
          earns {royaltiesTo.percentage}%
        </span>
      </div>
    </div>
  )
}
