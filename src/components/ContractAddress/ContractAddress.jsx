import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

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
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-medium)';
      e.currentTarget.style.background = 'var(--bg-card-hover)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.background = 'var(--bg-card)';
    }}>
      <code style={{
        color: 'var(--text-primary)',
        fontSize: '16px',
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
      }}>
        {shortAddress}
      </code>

      <button
        onClick={handleCopy}
        style={{
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-subtle)',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-md)',
          transition: 'all 0.2s ease',
        }}
        title="Copy address"
      >
        {copied ? (
          <Check size={18} color="var(--accent)" />
        ) : (
          <Copy size={18} color="var(--text-tertiary)" />
        )}
      </button>
    </div>
  )
}
