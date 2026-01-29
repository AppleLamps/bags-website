import React from 'react'
import { Button } from '../ui'
import { ShoppingBag, Triangle, Globe, Zap } from 'lucide-react'

const exchanges = [
  {
    name: 'Buy on Bags',
    icon: ShoppingBag,
    primary: true,
    url: '#',
  },
  {
    name: 'Buy on Axiom',
    icon: Triangle,
    primary: false,
    url: '#',
  },
  {
    name: 'Buy on Jupiter',
    icon: Globe,
    primary: false,
    url: '#',
  },
  {
    name: 'Buy on Photon',
    icon: Zap,
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
      {exchanges.map((exchange, i) => {
        const IconComponent = exchange.icon
        return (
          <Button
            key={i}
            variant={exchange.primary ? 'primary' : 'secondary'}
            size="xl"
            fullWidth
            icon={<IconComponent size={16} />}
            onClick={() => window.open(exchange.url, '_blank')}
          >
            {exchange.name}
          </Button>
        )
      })}
    </div>
  )
}
