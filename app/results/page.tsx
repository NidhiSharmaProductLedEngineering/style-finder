'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { getFallbackOutfits, type FallbackOutfit } from '@/lib/fallback-outfits'

const styleLabel: Record<string, string> = {
  minimal:  'Clean Minimal',   feminine: 'Feminine & Soft',
  classic:  'Timeless Classic', edgy:    'Edgy & Modern',
  boho:     'Boho & Free',     glam:    'Glam & Luxe',
}

function Skeleton() {
  return (
    <div style={{ columns: 3, columnGap: 8 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ marginBottom: 8, breakInside: 'avoid' }} className="do-shimmer">
          <div style={{ background: 'var(--s2)', aspectRatio: i % 2 === 0 ? '3/4' : '1/1', marginBottom: 2 }} />
          <div style={{ background: 'var(--s2)', padding: 14 }}>
            <div style={{ height: 14, background: 'var(--s3)', marginBottom: 8, width: '65%', borderRadius: 1 }} />
            <div style={{ height: 10, background: 'var(--s3)', marginBottom: 5, width: '100%', borderRadius: 1 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function OutfitCard({ outfit, index }: { outfit: FallbackOutfit; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .45, delay: index * .08 }}
      style={{ marginBottom: 8, breakInside: 'avoid' }}
    >
      <div
        className="ob-card"
        style={{ border: '1px solid var(--border)', cursor: 'pointer' }}
        onClick={() => setOpen(o => !o)}
      >
        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={outfit.image}
            alt={outfit.name}
            style={{
              width: '100%',
              aspectRatio: index % 3 === 0 ? '3/4' : '4/5',
              objectFit: 'cover',
              display: 'block',
              filter: 'grayscale(20%) contrast(1.1)',
              transition: 'transform .4s ease',
            }}
            onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
            onMouseOut={e =>  { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
          />
          {/* Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(8,8,8,.65))' }} />
          {/* Tags */}
          <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {outfit.tags.slice(0, 2).map(tag => (
              <span key={tag} style={{ fontFamily: 'DM Sans', fontSize: 8, padding: '2px 7px', background: 'rgba(8,8,8,.82)', color: 'var(--gold)', letterSpacing: '.1em', textTransform: 'uppercase', border: '1px solid rgba(232,184,75,.3)' }}>
                {tag}
              </span>
            ))}
          </div>
          {/* Occasion badge bottom */}
          <span style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: 'DM Sans', fontSize: 9, color: 'var(--muted)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            {outfit.occasion}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '14px 14px 10px', background: 'var(--s2)' }}>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 16, color: 'var(--white)', letterSpacing: '.04em', marginBottom: 10 }}>
            {outfit.name}
          </div>

          {/* Pieces */}
          <div style={{ marginBottom: 12 }}>
            {outfit.pieces.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 5 }}>
                <div style={{ marginTop: 7, width: 3, height: 3, background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--muted)', lineHeight: 1.45 }}>{p}</span>
              </div>
            ))}
          </div>

          {/* Shop links */}
          <div style={{ borderTop: '1px solid var(--border2)', paddingTop: 10, marginBottom: 8 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 7, fontWeight: 500 }}>
              Shop this look
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {outfit.shopLinks.map(link => (
                <a
                  key={link.brand}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', padding: '5px 8px', background: 'var(--s3)', transition: 'background .15s', borderLeft: '2px solid transparent' }}
                  onMouseOver={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--ob)'; el.style.borderLeftColor = 'var(--gold)' }}
                  onMouseOut={e =>  { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--s3)'; el.style.borderLeftColor = 'transparent' }}
                >
                  <span style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--white)', fontWeight: 500 }}>{link.brand}</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--muted)' }}>{link.price} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Expand for styling tip */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ borderTop: '1px solid var(--border2)', paddingTop: 10 }}>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.16em', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: 6 }}>Styling tip</div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.65 }}>
                    {outfit.stylingTip}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ marginTop: 8, fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.12em', color: 'var(--dim)', textTransform: 'uppercase' }}>
            {open ? '↑ hide' : '↓ styling tip'}
          </div>

          <div className="card-underline" style={{ marginTop: 10 }} />
        </div>
      </div>
    </motion.div>
  )
}

function ResultsContent() {
  const params = useSearchParams()
  const router = useRouter()

  const styleVibe    = params.get('styleVibe')    ?? 'minimal'
  const bodyType     = params.get('bodyType')     ?? ''
  const occasion     = params.get('occasion')     ?? ''
  const colorPalette = params.get('colorPalette') ?? ''
  const budget       = params.get('budget')       ?? ''
  const fit          = params.get('fit')          ?? ''

  const [outfits, setOutfits] = useState<FallbackOutfit[]>([])
  const [loading, setLoading] = useState(true)
  const [aiUsed,  setAiUsed]  = useState(false)

  useEffect(() => {
    if (!bodyType) { router.push('/quiz'); return }
    void load()
  }, [])

  const load = async () => {
    setLoading(true)
    // Fallback loads instantly — users always see results
    const fallback = getFallbackOutfits(styleVibe)
    setOutfits(fallback)
    setLoading(false)

    // Try AI enhancement silently in background
    try {
      const res  = await fetch('/api/recommend', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ bodyType, styleVibe, occasion, colorPalette, budget, fit }),
      })
      if (!res.ok) return
      const data = await res.json()
      if (Array.isArray(data.outfits) && data.outfits.length > 0) {
        const mapped: FallbackOutfit[] = data.outfits.map((o: Record<string, unknown>, i: number) => ({
          name:       typeof o.name === 'string' ? o.name : 'Curated Look',
          image:      fallback[i % fallback.length].image,
          occasion:   typeof o.occasion === 'string' ? o.occasion : occasion,
          tags:       Array.isArray(o.tags) ? o.tags as string[] : [],
          pieces:     Array.isArray(o.pieces)
            ? (o.pieces as unknown[]).map(p => typeof p === 'string' ? p : typeof p === 'object' && p !== null ? `${(p as Record<string,string>).item} — ${(p as Record<string,string>).brand}` : '')
            : [],
          shopLinks:  fallback[i % fallback.length].shopLinks,
          stylingTip: typeof o.stylingTip === 'string' ? o.stylingTip : '',
        }))
        setOutfits(mapped)
        setAiUsed(true)
      }
    } catch { /* keep fallback */ }
  }

  return (
    <main style={{ background: 'var(--ob)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav className="ob-nav">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="brand">STYLEFINDER</span>
        </Link>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/shopping" style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', color: 'var(--muted)', textTransform: 'uppercase', textDecoration: 'none' }}>Shopping</Link>
          <Link href="/quiz"     style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '.14em', color: 'var(--muted)', textTransform: 'uppercase', textDecoration: 'none' }}>Retake</Link>
        </div>
      </nav>

      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '32px 40px 24px' }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 16, height: 1, background: 'var(--gold)' }} />
            <span style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.24em', color: 'var(--gold)', textTransform: 'uppercase', opacity: .8 }}>
              {styleLabel[styleVibe] ?? styleVibe}
            </span>
            {aiUsed && <span style={{ fontFamily: 'DM Sans', fontSize: 8, color: 'var(--gold)', letterSpacing: '.1em' }}>✦ AI-personalised</span>}
          </div>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(2rem,5vw,3.2rem)', color: 'var(--white)', letterSpacing: '.04em', lineHeight: 1 }}>
            YOUR LOOKBOOK
          </div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>
            {loading ? 'Curating your style...' : `${outfits.length} outfit ideas · tap any card for styling tips`}
          </div>
        </motion.div>
      </div>

      {/* Masonry grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 40px 60px' }}>

        {loading && <Skeleton />}

        {!loading && (
          <div style={{ columns: 3, columnGap: 8 }}>
            {outfits.map((outfit, i) => (
              <OutfitCard key={i} outfit={outfit} index={i} />
            ))}
          </div>
        )}

        {/* Shop CTA */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .7 }}
            style={{ background: 'var(--s1)', border: '1px solid var(--border)', padding: '28px 32px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center', marginTop: 24 }}
          >
            <div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 20, color: 'var(--gold)', letterSpacing: '.06em', marginBottom: 4 }}>SHOP THE FULL EDIT</div>
              <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
                Browse all trends with brand links — Zara, H&M, COS, Net-a-Porter and 8 more.
              </p>
            </div>
            <Link href="/shopping">
              <motion.button whileHover={{ background: 'var(--gold2)' }} className="gold-btn" style={{ whiteSpace: 'nowrap', padding: '12px 24px' }}>
                Shopping guide →
              </motion.button>
            </Link>
          </motion.div>
        )}

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/quiz">
            <motion.button
              whileHover={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
              className="ghost-btn"
            >
              Retake the quiz
            </motion.button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '100vh', background: 'var(--ob)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 24, height: 24, border: '1.5px solid var(--s3)', borderTopColor: 'var(--gold)', borderRadius: '50%', margin: '0 auto 16px' }} className="do-spin" />
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 14, color: 'var(--muted)', letterSpacing: '.2em' }}>LOADING YOUR LOOKBOOK</p>
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  )
}
