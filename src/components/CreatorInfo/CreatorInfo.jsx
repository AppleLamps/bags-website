import React from 'react'
import { Card, Badge } from '../ui'
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
    <Card variant="default" padding="md" radius="lg">
      {/* Creator */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '16px',
      }}>
        <div>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '12px',
            margin: '0 0 4px',
          }}>
            created by
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
            }}>
              {creator.avatar || '👤'}
            </div>
            <code style={{
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}>
              {creator.address}
            </code>
          </div>
        </div>
        <Badge variant="default" size="sm">
          earns {creator.royalty}%
        </Badge>
      </div>
      
      {/* Royalties To */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '12px',
            margin: '0 0 4px',
          }}>
            royalties to
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
            }}>
              {royaltiesTo.avatar}
            </div>
            <span style={{
              color: 'var(--accent)',
              fontSize: '14px',
              fontWeight: 600,
            }}>
              {royaltiesTo.name}
            </span>
            <X size={14} color="var(--text-tertiary)" />
          </div>
        </div>
        <Badge variant="accent" size="sm">
          earns {royaltiesTo.percentage}%
        </Badge>
      </div>
    </Card>
  )
}
