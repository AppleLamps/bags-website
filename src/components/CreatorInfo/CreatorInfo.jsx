import React from 'react'
import { User, Coins } from 'lucide-react'

export function CreatorInfo({
  creator = {
    address: '9BFF...TK4X',
    royalty: 0,
  },
  royaltiesTo = {
    name: 'LAMPS_APPLE',
    percentage: 100,
  },
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    }}>
      {/* Creator */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 18px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
      }}>
        <div>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '12px',
            margin: '0 0 6px',
            fontWeight: 500,
          }}>
            created by
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <User size={14} color="var(--text-secondary)" />
            </div>
            <code style={{
              color: 'var(--text-primary)',
              fontSize: '15px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}>
              {creator.address}
            </code>
          </div>
        </div>
        <span style={{
          padding: '6px 12px',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-full)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          fontWeight: 500,
        }}>
          earns {creator.royalty}%
        </span>
      </div>

      {/* Royalties To */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 18px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
      }}>
        <div>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '12px',
            margin: '0 0 6px',
            fontWeight: 500,
          }}>
            royalties to
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Coins size={14} color="var(--accent)" />
            </div>
            <span style={{
              color: 'var(--accent)',
              fontSize: '15px',
              fontWeight: 600,
            }}>
              {royaltiesTo.name}
            </span>
          </div>
        </div>
        <span style={{
          padding: '6px 12px',
          background: 'var(--accent-subtle)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-full)',
          fontSize: '13px',
          color: 'var(--accent)',
          fontWeight: 500,
        }}>
          earns {royaltiesTo.percentage}%
        </span>
      </div>
    </div>
  )
}
