import React, { useState } from 'react'
import { Copy, Check, RotateCcw } from 'lucide-react'
import { Card } from '../ui'

export function ContractAddress({
  address = '8F2F7Jk9mNpQrStUvWxYz1AbCdEfGhIjKlMnOpQrSt...BAGS',
  shortAddress = '8F2F...BAGS',
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Card variant="default" padding="md" radius="lg">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 18px',
      }}>
        <code style={{
          color: 'var(--text-primary)',
          fontSize: '15px',
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
        }}>
          {shortAddress}
        </code>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleCopy}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s ease',
            }}
            title="Copy address"
          >
            {copied ? (
              <Check size={18} color="var(--accent)" />
            ) : (
              <RotateCcw size={18} color="var(--text-tertiary)" />
            )}
          </button>
        </div>
      </div>
    </Card>
  )
}
