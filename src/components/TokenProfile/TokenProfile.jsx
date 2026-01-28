import React from 'react'
import { VerifiedBadge } from '../ui'

export function TokenProfile({
  name = '$GROKIFY',
  description = 'Grokify Prompt',
  imageUrl = null,
  emoji = '🤖',
  verified = true,
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '32px 0 24px',
    }}>
      {/* Token Avatar */}
      <div style={{
        width: '88px',
        height: '88px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
        border: '2px solid var(--border-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '36px',
        boxShadow: 'var(--shadow-glow)',
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <span style={{
            background: 'linear-gradient(135deg, #1a1a24 0%, #0f0f15 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {emoji}
          </span>
        )}
      </div>
      
      {/* Token Name */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '4px',
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          margin: 0,
          background: 'linear-gradient(90deg, var(--text-primary) 0%, var(--accent) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.5px',
        }}>
          {name}
        </h1>
        {verified && <VerifiedBadge size={22} />}
      </div>
      
      {/* Description */}
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '14px',
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  )
}
