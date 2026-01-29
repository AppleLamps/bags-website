import React from 'react'
import { Twitter, Globe, ExternalLink } from 'lucide-react'
import { Button } from '../ui'

export function SocialLinks({
  twitterUrl = '#',
  websiteUrl = '#',
}) {
  const links = [
    { icon: <ExternalLink size={18} />, label: 'twitter', url: twitterUrl },
    { icon: <Globe size={18} />, label: 'website', url: websiteUrl },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
    }}>
      {links.map((link, i) => (
        <Button
          key={i}
          variant="secondary"
          size="lg"
          fullWidth
          icon={link.icon}
          style={{
            gap: '10px',
          }}
          onClick={() => window.open(link.url, '_blank')}
        >
          {link.label}
        </Button>
      ))}
    </div>
  )
}
