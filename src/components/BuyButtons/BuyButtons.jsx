import React from 'react'
import { Button } from '../ui'

const exchanges = [
  { 
    name: 'Buy on Bags', 
    icon: '💰',
    primary: true,
    url: '#',
  },
  { 
    name: 'Buy on Axiom', 
    icon: '▲',
    primary: false,
    url: '#',
  },
  { 
    name: 'Buy on Jupiter', 
    icon: '🪐',
    primary: false,
    url: '#',
  },
  { 
    name: 'Buy on Photon', 
    icon: '⚡',
    primary: false,
    url: '#',
  },
]

export function BuyButtons() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      {exchanges.map((exchange, i) => (
        <Button
          key={i}
          variant={exchange.primary ? 'primary' : 'secondary'}
          size="xl"
          fullWidth
          icon={<span style={{ fontSize: '16px' }}>{exchange.icon}</span>}
          onClick={() => window.open(exchange.url, '_blank')}
        >
          {exchange.name}
        </Button>
      ))}
    </div>
  )
}
