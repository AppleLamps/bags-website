import React, { useState } from 'react'
import { Card, Badge } from '../ui'
import {
    MessageSquare,
    Image as ImageIcon,
    GitBranch,
    Target,
    Calendar,
    ExternalLink,
    Heart,
    MessageCircle,
    Share2,
    ChevronRight,
    Check,
    Clock,
    Star,
    GitCommit,
    GitPullRequest,
    Code2,
    Sparkles,
    Play,
    Zap,
    ArrowUpRight,
    Users,
    TrendingUp
} from 'lucide-react'

// Mock data for the updates
const mockUpdates = [
    {
        id: 1,
        type: 'announcement',
        date: '2 hours ago',
        title: 'Major Update: V2 Launch Coming Soon!',
        content: 'We\'re excited to announce that GROKIFY V2 is in final testing. New features include AI-powered prompt optimization and multi-chain support.',
        likes: 247,
        comments: 42,
        isPinned: true,
        author: 'Core Team',
        authorAvatar: '🤖',
    },
    {
        id: 2,
        type: 'photo',
        date: '1 day ago',
        title: 'Team at ETH Denver',
        images: [
            { emoji: '🎪', label: 'Booth Setup' },
            { emoji: '👥', label: 'Team Photo' },
            { emoji: '🏆', label: 'Award Ceremony' },
        ],
        content: 'Amazing turnout at our booth! Thanks to everyone who stopped by.',
        likes: 189,
        comments: 28,
        author: 'Marketing',
        authorAvatar: '📣',
    },
    {
        id: 3,
        type: 'github',
        date: '3 days ago',
        title: 'New Release: v1.4.2',
        content: 'Bug fixes and performance improvements. 15% faster prompt processing.',
        commits: 23,
        contributors: 5,
        author: 'Dev Team',
        authorAvatar: '💻',
    },
]

const mockGithubStats = {
    repo: 'grokify/grokify-core',
    stars: 1247,
    forks: 234,
    openIssues: 12,
    lastCommit: '2 hours ago',
    language: 'TypeScript',
    recentCommits: [
        { message: 'feat: add multi-chain support', author: 'alexdev', time: '2h ago' },
        { message: 'fix: resolve memory leak in parser', author: 'sarahcodes', time: '5h ago' },
        { message: 'docs: update API documentation', author: 'devjohn', time: '1d ago' },
    ]
}

const mockMilestones = [
    { id: 1, title: 'Token Launch', status: 'completed', date: 'Jan 2026' },
    { id: 2, title: 'DEX Listings', status: 'completed', date: 'Jan 2026' },
    { id: 3, title: 'V2 Beta Release', status: 'in-progress', date: 'Feb 2026' },
    { id: 4, title: 'Mobile App Launch', status: 'upcoming', date: 'Mar 2026' },
    { id: 5, title: 'Cross-chain Bridge', status: 'upcoming', date: 'Q2 2026' },
]

const mockPhotos = [
    { id: 1, emoji: '🚀', caption: 'Launch Day', date: 'Jan 15', likes: 89 },
    { id: 2, emoji: '👥', caption: 'Team Meetup', date: 'Jan 12', likes: 67 },
    { id: 3, emoji: '🏆', caption: 'Hackathon Win', date: 'Jan 8', likes: 124 },
    { id: 4, emoji: '🎉', caption: 'Community AMA', date: 'Jan 5', likes: 95 },
    { id: 5, emoji: '💻', caption: 'Dev Sprint', date: 'Jan 3', likes: 54 },
    { id: 6, emoji: '🌐', caption: 'Global Launch', date: 'Dec 28', likes: 203 },
]

// Styles object for reusable hover/active states
const buttonStyles = {
    base: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 20px',
        background: 'transparent',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        color: 'var(--text-secondary)',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    hover: {
        background: 'var(--accent-subtle)',
        borderColor: 'var(--border-accent)',
        color: 'var(--accent)',
        transform: 'translateY(-1px)',
    }
}

export function ProjectUpdates() {
    const [activeTab, setActiveTab] = useState('updates')
    const [hoveredTab, setHoveredTab] = useState(null)

    const tabs = [
        { id: 'updates', label: 'Updates', icon: MessageSquare, count: 12, color: '#00ff88' },
        { id: 'photos', label: 'Media', icon: ImageIcon, count: 24, color: '#ff6b9d' },
        { id: 'github', label: 'GitHub', icon: GitBranch, color: '#a29bfe' },
        { id: 'roadmap', label: 'Roadmap', icon: Target, color: '#ffd93d' },
    ]

    return (
        <div style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
        }}>
            {/* Section Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Sparkles size={18} color="var(--accent)" />
                    </div>
                    <div>
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            margin: 0,
                            color: 'var(--text-primary)',
                        }}>
                            Project Hub
                        </h2>
                        <p style={{
                            margin: '2px 0 0',
                            fontSize: '12px',
                            color: 'var(--text-tertiary)',
                        }}>
                            Updates, media, and development progress
                        </p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    background: 'var(--accent-subtle)',
                    border: '1px solid var(--border-accent)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '12px',
                    color: 'var(--accent)',
                    fontWeight: 500,
                }}>
                    <Check size={12} />
                    Creator Verified
                </div>
            </div>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '20px',
                padding: '4px',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
            }}>
                {tabs.map(tab => {
                    const isActive = activeTab === tab.id

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                padding: '12px 16px',
                                background: isActive ? 'var(--bg-tertiary)' : 'transparent',
                                border: isActive ? '1px solid var(--border-subtle)' : '1px solid transparent',
                                borderRadius: 'var(--radius-md)',
                                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontSize: '13px',
                                fontWeight: isActive ? 600 : 500,
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                            }}
                        >
                            <tab.icon size={16} style={{ color: isActive ? tab.color : 'inherit' }} />
                            <span>{tab.label}</span>
                            {tab.count && (
                                <span style={{
                                    background: isActive ? tab.color : 'var(--bg-tertiary)',
                                    color: isActive ? '#000' : 'var(--text-tertiary)',
                                    padding: '2px 8px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '11px',
                                    fontWeight: 600,
                                }}>
                                    {tab.count}
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Tab Content with animation wrapper */}
            <div style={{
                animation: 'fadeIn 0.3s ease-out',
            }}>
                {activeTab === 'updates' && <UpdatesFeed updates={mockUpdates} />}
                {activeTab === 'photos' && <PhotoGallery photos={mockPhotos} />}
                {activeTab === 'github' && <GithubIntegration stats={mockGithubStats} />}
                {activeTab === 'roadmap' && <Roadmap milestones={mockMilestones} />}
            </div>
        </div>
    )
}

function UpdatesFeed({ updates }) {
    const [hoveredCard, setHoveredCard] = useState(null)
    const [likedPosts, setLikedPosts] = useState({})

    const toggleLike = (id) => {
        setLikedPosts(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {updates.map(update => (
                <div
                    key={update.id}
                    onMouseEnter={() => setHoveredCard(update.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                        background: hoveredCard === update.id
                            ? 'rgba(255, 255, 255, 0.03)'
                            : 'rgba(255, 255, 255, 0.015)',
                        border: hoveredCard === update.id
                            ? '1px solid var(--border-medium)'
                            : '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-xl)',
                        padding: '24px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: hoveredCard === update.id ? 'translateY(-2px)' : 'none',
                        boxShadow: hoveredCard === update.id
                            ? '0 8px 32px rgba(0, 0, 0, 0.2)'
                            : 'none',
                    }}
                >
                    {/* Post Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '16px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: 'var(--radius-lg)',
                                background: update.type === 'announcement'
                                    ? 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)'
                                    : update.type === 'photo'
                                        ? 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)'
                                        : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: update.type === 'announcement'
                                    ? '0 4px 16px rgba(0, 255, 136, 0.3)'
                                    : update.type === 'photo'
                                        ? '0 4px 16px rgba(255, 107, 157, 0.3)'
                                        : '0 4px 16px rgba(108, 92, 231, 0.3)',
                            }}>
                                {update.type === 'announcement' && <Zap size={22} color="#000" />}
                                {update.type === 'photo' && <ImageIcon size={22} color="#fff" />}
                                {update.type === 'github' && <GitBranch size={22} color="#fff" />}
                            </div>
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flexWrap: 'wrap',
                                }}>
                                    <h4 style={{
                                        margin: 0,
                                        fontSize: '17px',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                    }}>
                                        {update.title}
                                    </h4>
                                    {update.isPinned && (
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            padding: '4px 10px',
                                            background: 'linear-gradient(135deg, rgba(255, 170, 0, 0.2) 0%, rgba(255, 136, 0, 0.1) 100%)',
                                            border: '1px solid rgba(255, 170, 0, 0.3)',
                                            borderRadius: '20px',
                                            fontSize: '11px',
                                            fontWeight: 600,
                                            color: 'var(--warning)',
                                        }}>
                                            📌 Pinned
                                        </span>
                                    )}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginTop: '4px',
                                }}>
                                    <span style={{
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        color: 'var(--text-secondary)',
                                    }}>
                                        {update.author || 'Team'}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                                    <span style={{
                                        fontSize: '12px',
                                        color: 'var(--text-tertiary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                    }}>
                                        <Clock size={12} />
                                        {update.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button style={{
                            padding: '8px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-tertiary)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}>
                            <ArrowUpRight size={16} />
                        </button>
                    </div>

                    {/* Post Content */}
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        margin: '0 0 20px',
                    }}>
                        {update.content}
                    </p>

                    {/* Photo Grid */}
                    {update.images && (
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            marginBottom: '20px',
                        }}>
                            {update.images.map((img, i) => (
                                <div key={i} style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
                                    border: '1px solid var(--border-subtle)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '6px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}>
                                        {img.label.toLowerCase().includes('team') ? (
                                            <Users size={20} color="var(--text-primary)" />
                                        ) : img.label.toLowerCase().includes('award') ? (
                                            <Star size={20} color="var(--warning)" fill="currentColor" />
                                        ) : (
                                            <ImageIcon size={20} color="var(--text-primary)" />
                                        )}
                                    </div>
                                    <span style={{
                                        fontSize: '10px',
                                        color: 'var(--text-tertiary)',
                                        fontWeight: 500,
                                    }}>
                                        {img.label}
                                    </span>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, transparent 100%)',
                                        opacity: 0,
                                        transition: 'opacity 0.2s ease',
                                    }} />
                                </div>
                            ))}
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: 'var(--radius-lg)',
                                background: 'var(--bg-card)',
                                border: '1px dashed var(--border-medium)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                cursor: 'pointer',
                                color: 'var(--text-tertiary)',
                            }}>
                                <span style={{ fontSize: '18px' }}>+12</span>
                                <span style={{ fontSize: '10px' }}>more</span>
                            </div>
                        </div>
                    )}

                    {/* GitHub Stats Bar */}
                    {update.commits && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            marginBottom: '20px',
                            padding: '14px 18px',
                            background: 'linear-gradient(135deg, rgba(108, 92, 231, 0.1) 0%, rgba(162, 155, 254, 0.05) 100%)',
                            border: '1px solid rgba(108, 92, 231, 0.2)',
                            borderRadius: 'var(--radius-lg)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <GitCommit size={16} color="#a29bfe" />
                                <span style={{ fontSize: '14px', fontWeight: 600 }}>{update.commits}</span>
                                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>commits</span>
                            </div>
                            <div style={{
                                width: '1px',
                                height: '20px',
                                background: 'var(--border-subtle)'
                            }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Users size={16} color="var(--text-tertiary)" />
                                <span style={{ fontSize: '14px', fontWeight: 600 }}>{update.contributors}</span>
                                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>contributors</span>
                            </div>
                            <button style={{
                                marginLeft: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '8px 14px',
                                background: 'rgba(108, 92, 231, 0.2)',
                                border: 'none',
                                borderRadius: 'var(--radius-md)',
                                color: '#a29bfe',
                                fontSize: '12px',
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}>
                                <ExternalLink size={12} />
                                View Release
                            </button>
                        </div>
                    )}

                    {/* Action Bar */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--border-subtle)',
                    }}>
                        <button
                            onClick={() => toggleLike(update.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 16px',
                                background: likedPosts[update.id]
                                    ? 'rgba(255, 68, 102, 0.1)'
                                    : 'var(--bg-elevated)',
                                border: likedPosts[update.id]
                                    ? '1px solid rgba(255, 68, 102, 0.3)'
                                    : '1px solid var(--border-subtle)',
                                borderRadius: 'var(--radius-md)',
                                color: likedPosts[update.id]
                                    ? '#ff4466'
                                    : 'var(--text-tertiary)',
                                fontSize: '13px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <Heart
                                size={16}
                                fill={likedPosts[update.id] ? '#ff4466' : 'none'}
                            />
                            {(update.likes || 0) + (likedPosts[update.id] ? 1 : 0)}
                        </button>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 16px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-tertiary)',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}>
                            <MessageCircle size={16} />
                            {update.comments || 0}
                        </button>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 16px',
                            marginLeft: 'auto',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-tertiary)',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                        }}>
                            <Share2 size={16} />
                            Share
                        </button>
                    </div>
                </div>
            ))}

            {/* Load More Button */}
            <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px 24px',
                background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-xl)',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
            }}>
                View All Updates
                <ChevronRight size={18} />
            </button>
        </div>
    )
}

function PhotoGallery({ photos }) {
    const [hoveredPhoto, setHoveredPhoto] = useState(null)

    return (
        <div>
            {/* Category Pills */}
            <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '24px',
                overflowX: 'auto',
                paddingBottom: '8px',
            }}>
                {['All', 'Events', 'Team', 'Product', 'Community'].map((cat, i) => (
                    <button
                        key={cat}
                        style={{
                            padding: '10px 18px',
                            background: i === 0
                                ? 'linear-gradient(135deg, rgba(255, 107, 157, 0.2) 0%, rgba(196, 69, 105, 0.1) 100%)'
                                : 'var(--bg-elevated)',
                            border: i === 0
                                ? '1px solid rgba(255, 107, 157, 0.4)'
                                : '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-full)',
                            color: i === 0 ? '#ff6b9d' : 'var(--text-secondary)',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Photo Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
            }}>
                {photos.map(photo => (
                    <div
                        key={photo.id}
                        onMouseEnter={() => setHoveredPhoto(photo.id)}
                        onMouseLeave={() => setHoveredPhoto(null)}
                        style={{
                            aspectRatio: '1',
                            borderRadius: 'var(--radius-xl)',
                            background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
                            border: hoveredPhoto === photo.id
                                ? '1px solid var(--border-medium)'
                                : '1px solid var(--border-subtle)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden',
                            transform: hoveredPhoto === photo.id ? 'scale(1.02)' : 'scale(1)',
                            boxShadow: hoveredPhoto === photo.id
                                ? '0 12px 40px rgba(0, 0, 0, 0.25)'
                                : '0 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div style={{
                            transition: 'all 0.3s ease',
                            transform: hoveredPhoto === photo.id ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
                            opacity: hoveredPhoto === photo.id ? 1 : 0.7,
                        }}>
                            {photo.caption.toLowerCase().includes('team') || photo.caption.toLowerCase().includes('community') ? (
                                <Users size={48} strokeWidth={1.5} color="var(--text-secondary)" />
                            ) : photo.caption.toLowerCase().includes('launch') || photo.caption.toLowerCase().includes('v2') ? (
                                <Zap size={48} strokeWidth={1.5} color="var(--text-secondary)" />
                            ) : (
                                <ImageIcon size={48} strokeWidth={1.5} color="var(--text-secondary)" />
                            )}
                        </div>

                        {/* Hover Overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                            opacity: hoveredPhoto === photo.id ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '16px',
                        }}>
                            <p style={{
                                margin: '0 0 8px',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                            }}>
                                {photo.caption}
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                            }}>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    fontSize: '12px',
                                    color: 'var(--text-secondary)',
                                }}>
                                    <Heart size={12} fill="#ff6b9d" color="#ff6b9d" />
                                    {photo.likes || 0}
                                </span>
                                <span style={{
                                    fontSize: '11px',
                                    color: 'var(--text-tertiary)',
                                }}>
                                    {photo.date || 'Jan 20'}
                                </span>
                            </div>
                        </div>

                        {/* Bottom Caption Bar (visible without hover) */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '14px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                            opacity: hoveredPhoto === photo.id ? 0 : 1,
                            transition: 'opacity 0.3s ease',
                        }}>
                            <p style={{
                                margin: 0,
                                fontSize: '12px',
                                fontWeight: 500,
                                color: 'var(--text-primary)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {photo.caption}
                            </p>
                        </div>

                        {/* Play Button for Videos */}
                        {photo.isVideo && (
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(8px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Play size={20} fill="#fff" color="#fff" />
                            </div>
                        )}
                    </div>
                ))}

                {/* Upload More Card */}
                <div style={{
                    aspectRatio: '1',
                    borderRadius: 'var(--radius-xl)',
                    border: '2px dashed var(--border-medium)',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(255, 107, 157, 0.1)',
                        border: '1px solid rgba(255, 107, 157, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <ImageIcon size={22} color="#ff6b9d" />
                    </div>
                    <span style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-tertiary)',
                    }}>
                        +18 more
                    </span>
                </div>
            </div>

            {/* View All Button */}
            <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                marginTop: '24px',
                padding: '16px',
                background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.05) 100%)',
                border: '1px solid rgba(255, 107, 157, 0.2)',
                borderRadius: 'var(--radius-xl)',
                color: '#ff6b9d',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
            }}>
                <ImageIcon size={18} />
                View Full Gallery
                <ChevronRight size={16} />
            </button>
        </div>
    )
}

function GithubIntegration({ stats }) {
    const [hoveredCommit, setHoveredCommit] = useState(null)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Repo Header */}
            <div style={{
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(108, 92, 231, 0.12) 0%, rgba(162, 155, 254, 0.06) 100%)',
                border: '1px solid rgba(108, 92, 231, 0.25)',
                borderRadius: 'var(--radius-xl)',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: 'var(--radius-lg)',
                            background: 'linear-gradient(135deg, #2d333b 0%, #1c2024 100%)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                        }}>
                            <GitBranch size={26} color="#fff" />
                        </div>
                        <div>
                            <h4 style={{
                                margin: 0,
                                fontSize: '18px',
                                fontWeight: 700,
                                fontFamily: 'var(--font-mono)',
                            }}>
                                {stats.repo}
                            </h4>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginTop: '6px',
                            }}>
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '13px',
                                    color: 'var(--text-secondary)',
                                }}>
                                    <span style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: '#3178c6',
                                        boxShadow: '0 0 8px rgba(49, 120, 198, 0.5)',
                                    }} />
                                    {stats.language}
                                </span>
                                <span style={{ color: 'var(--text-muted)' }}>•</span>
                                <span style={{
                                    fontSize: '12px',
                                    color: 'var(--text-tertiary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                }}>
                                    <Clock size={12} />
                                    {stats.lastCommit}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 20px',
                        background: 'linear-gradient(135deg, #2d333b 0%, #1c2024 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-lg)',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                    }}>
                        <ExternalLink size={16} />
                        View on GitHub
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
            }}>
                {[
                    { icon: Star, label: 'Stars', value: stats.stars.toLocaleString(), color: '#ffaa00', bg: 'rgba(255, 170, 0, 0.1)' },
                    { icon: GitPullRequest, label: 'Forks', value: stats.forks, color: '#00ff88', bg: 'rgba(0, 255, 136, 0.1)' },
                    { icon: MessageCircle, label: 'Open Issues', value: stats.openIssues, color: '#a29bfe', bg: 'rgba(162, 155, 254, 0.1)' },
                ].map((stat, i) => (
                    <div key={i} style={{
                        padding: '20px',
                        background: stat.bg,
                        border: `1px solid ${stat.color}22`,
                        borderRadius: 'var(--radius-xl)',
                        transition: 'all 0.2s ease',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: 'var(--radius-lg)',
                                background: `${stat.color}22`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <stat.icon size={20} color={stat.color} />
                            </div>
                            <div>
                                <p style={{
                                    margin: 0,
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                }}>
                                    {stat.value}
                                </p>
                                <p style={{
                                    margin: 0,
                                    fontSize: '12px',
                                    color: 'var(--text-tertiary)',
                                    fontWeight: 500,
                                }}>
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Commits */}
            <div style={{
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.015)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                }}>
                    <h4 style={{
                        margin: 0,
                        fontSize: '15px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: 'var(--radius-md)',
                            background: 'rgba(0, 255, 136, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <GitCommit size={16} color="var(--accent)" />
                        </div>
                        Recent Commits
                    </h4>
                    <span style={{
                        padding: '6px 12px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '12px',
                        color: 'var(--text-tertiary)',
                    }}>
                        Last 7 days
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {stats.recentCommits.map((commit, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredCommit(i)}
                            onMouseLeave={() => setHoveredCommit(null)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '14px 16px',
                                background: hoveredCommit === i
                                    ? 'rgba(255, 255, 255, 0.03)'
                                    : 'var(--bg-tertiary)',
                                border: hoveredCommit === i
                                    ? '1px solid var(--border-medium)'
                                    : '1px solid transparent',
                                borderRadius: 'var(--radius-lg)',
                                transition: 'all 0.2s ease',
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: 'var(--radius-md)',
                                background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%)',
                                border: '1px solid var(--border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '16px',
                                flexShrink: 0,
                            }}>
                                <GitCommit size={18} color="var(--text-secondary)" />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    fontFamily: 'var(--font-mono)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    color: hoveredCommit === i
                                        ? 'var(--text-primary)'
                                        : 'var(--text-secondary)',
                                    transition: 'color 0.2s ease',
                                }}>
                                    {commit.message}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginTop: '4px',
                                }}>
                                    <span style={{
                                        fontSize: '12px',
                                        color: 'var(--accent)',
                                        fontWeight: 500,
                                    }}>
                                        {commit.author}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                                    <span style={{
                                        fontSize: '11px',
                                        color: 'var(--text-tertiary)',
                                    }}>
                                        {commit.time}
                                    </span>
                                </div>
                            </div>
                            <ArrowUpRight
                                size={16}
                                color="var(--text-tertiary)"
                                style={{
                                    opacity: hoveredCommit === i ? 1 : 0,
                                    transition: 'opacity 0.2s ease',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Roadmap({ milestones }) {
    const [hoveredMilestone, setHoveredMilestone] = useState(null)

    const statusConfig = {
        completed: {
            bg: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
            shadow: '0 0 20px rgba(0, 255, 136, 0.4)',
            iconColor: '#000',
            textColor: 'var(--text-primary)',
            badgeBg: 'rgba(0, 255, 136, 0.15)',
            badgeBorder: 'rgba(0, 255, 136, 0.3)',
            badgeColor: '#00ff88',
        },
        'in-progress': {
            bg: 'linear-gradient(135deg, #ffaa00 0%, #ff8800 100%)',
            shadow: '0 0 20px rgba(255, 170, 0, 0.4)',
            iconColor: '#000',
            textColor: 'var(--text-primary)',
            badgeBg: 'rgba(255, 170, 0, 0.15)',
            badgeBorder: 'rgba(255, 170, 0, 0.3)',
            badgeColor: '#ffaa00',
        },
        upcoming: {
            bg: 'var(--bg-tertiary)',
            shadow: 'none',
            iconColor: 'var(--text-tertiary)',
            textColor: 'var(--text-tertiary)',
            badgeBg: 'var(--bg-elevated)',
            badgeBorder: 'var(--border-subtle)',
            badgeColor: 'var(--text-tertiary)',
        },
    }

    return (
        <div style={{
            padding: '28px',
            background: 'rgba(255, 255, 255, 0.015)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '28px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 204, 106, 0.1) 100%)',
                        border: '1px solid rgba(0, 255, 136, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Target size={22} color="var(--accent)" />
                    </div>
                    <div>
                        <h4 style={{
                            margin: 0,
                            fontSize: '17px',
                            fontWeight: 700,
                        }}>
                            Project Roadmap
                        </h4>
                        <p style={{
                            margin: '2px 0 0',
                            fontSize: '12px',
                            color: 'var(--text-tertiary)',
                        }}>
                            Track development progress
                        </p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                        }} />
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Completed</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--warning)',
                        }} />
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>In Progress</span>
                    </div>
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                {/* Timeline line */}
                <div style={{
                    position: 'absolute',
                    left: '19px',
                    top: '40px',
                    bottom: '40px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--accent) 0%, var(--warning) 40%, var(--border-subtle) 70%)',
                    borderRadius: '2px',
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {milestones.map((milestone, i) => {
                        const config = statusConfig[milestone.status]
                        return (
                            <div
                                key={milestone.id}
                                onMouseEnter={() => setHoveredMilestone(milestone.id)}
                                onMouseLeave={() => setHoveredMilestone(null)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    padding: '16px',
                                    marginLeft: '-8px',
                                    background: hoveredMilestone === milestone.id
                                        ? 'rgba(255, 255, 255, 0.02)'
                                        : 'transparent',
                                    borderRadius: 'var(--radius-xl)',
                                    transition: 'all 0.25s ease',
                                }}
                            >
                                {/* Status indicator */}
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: config.bg,
                                    border: milestone.status === 'upcoming'
                                        ? '2px solid var(--border-medium)'
                                        : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    zIndex: 1,
                                    boxShadow: config.shadow,
                                    transition: 'all 0.25s ease',
                                    transform: hoveredMilestone === milestone.id ? 'scale(1.1)' : 'scale(1)',
                                }}>
                                    {milestone.status === 'completed' && (
                                        <Check size={20} color={config.iconColor} strokeWidth={3} />
                                    )}
                                    {milestone.status === 'in-progress' && (
                                        <Clock size={18} color={config.iconColor} />
                                    )}
                                    {milestone.status === 'upcoming' && (
                                        <span style={{
                                            fontSize: '14px',
                                            fontWeight: 700,
                                            color: 'var(--text-tertiary)',
                                        }}>
                                            {i + 1}
                                        </span>
                                    )}
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '12px',
                                        marginBottom: '6px',
                                    }}>
                                        <h5 style={{
                                            margin: 0,
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: config.textColor,
                                            transition: 'color 0.2s ease',
                                        }}>
                                            {milestone.title}
                                        </h5>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '6px 12px',
                                            background: config.badgeBg,
                                            border: `1px solid ${config.badgeBorder}`,
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: '11px',
                                            fontWeight: 600,
                                            color: config.badgeColor,
                                        }}>
                                            {milestone.status === 'completed' && '✓ Completed'}
                                            {milestone.status === 'in-progress' && '⏳ In Progress'}
                                            {milestone.status === 'upcoming' && 'Upcoming'}
                                        </span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}>
                                        <span style={{
                                            fontSize: '13px',
                                            color: 'var(--text-tertiary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                        }}>
                                            <Calendar size={13} />
                                            {milestone.date}
                                        </span>
                                        {milestone.status === 'in-progress' && (
                                            <>
                                                <span style={{ color: 'var(--text-muted)' }}>•</span>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                }}>
                                                    <div style={{
                                                        width: '80px',
                                                        height: '4px',
                                                        background: 'var(--bg-tertiary)',
                                                        borderRadius: '2px',
                                                        overflow: 'hidden',
                                                    }}>
                                                        <div style={{
                                                            width: '65%',
                                                            height: '100%',
                                                            background: 'linear-gradient(90deg, #ffaa00, #ff8800)',
                                                            borderRadius: '2px',
                                                        }} />
                                                    </div>
                                                    <span style={{
                                                        fontSize: '11px',
                                                        color: 'var(--warning)',
                                                        fontWeight: 600,
                                                    }}>
                                                        65%
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
