'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { getFallbackOutfits, type FallbackOutfit } from '@/lib/fallback-outfits'

const styleLabel: Record<string, string> = {
  minimal: 'Clean Minimal', feminine: 'Feminine & Soft',
  classic: 'Timeless Classic', edgy: 'Edgy & Modern',
  boho: 'Boho & Free', glam: 'Glam & Luxe',
}

/* ── Single outfit card — Pinterest style ── */
function OutfitCard({ outfit, index }: { outfit: FallbackOutfit; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .45, delay: index * 0.08 }}
      style={{ breakInside: 'avoid', marginBottom: 1 }}
    >
      <div
        style={{ background: 'var(--white)', border: '1px solid var(--gray-100)', cursor: 'pointer', overflow: 'hidden' }}
        onClick={() => setOpen(o => !o)}
      >
        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={outfit.image}
            alt={outfit.name}
            style={{ width: '100%', aspectRatio: index % 3 === 0 ? '3/4' : '4/5', objectFit: 'cover', display: 'block', transition: 'transform .4s ease' }}
            onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
            onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
          />
          {/* Overlay tags */}
          <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {outfit.tags.slice(0, 2).map(tag => (
              <span key={tag} style={{ fontFamily: 'DM Sans', fontSize: 9, padding: '2px 8px', background: 'rgba(10,10,10,.75)', color: 'var(--white)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: '16px 16px 12px' }}>
          <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 18, color: 'var(--black)', letterSpacing: '.04em', marginBottom: 3 }}>
            {outfit.name}
          </div>
          <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.14em', color: 'var(--gray-400)', textTransform: 'uppercase', marginBottom: 12 }}>
            {outfit.occasion}
          </div>

          {/* Pieces */}
          <div style={{ marginBottom: 12 }}>
            {outfit.pieces.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 5 }}>
                <div style={{ marginTop: 7, width: 3, height: 3, background: 'var(--yellow)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-600)', lineHeight: 1.45 }}>{p}</span>
              </div>
            ))}
          </div>

          {/* Shop links — always visible */}
          <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 10, marginBottom: 8 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.18em', color: 'var(--yellow)', textTransform: 'uppercase', marginBottom: 7, fontWeight: 500 }}>
              Shop this look
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {outfit.shopLinks.map(link => (
                <a
                  key={link.brand}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', padding: '5px 8px', background: 'var(--gray-50)', transition: 'background .15s' }}
                  onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gray-100)' }}
                  onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gray-50)' }}
                >
                  <span style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--black)', fontWeight: 500 }}>{link.brand}</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gray-400)' }}>{link.price} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Expandable styling tip */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 10 }}>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.16em', color: 'var(--gray-300)', textTransform: 'uppercase', marginBottom: 5 }}>Styling tip</div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, fontStyle: 'italic', color: 'var(--gray-500)', lineHeight: 1.65 }}>
                    {outfit.stylingTip}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.12em', color: 'var(--gray-300)', textTransform: 'uppercase', marginTop: 8 }}>
            {open ? '↑ hide tip' : '↓ styling tip'}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Loading skeleton ── */
function Skeleton() {
  return (
    <div style={{ columns: 3, columnGap: 1 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ marginBottom: 1, breakInside: 'avoid' }} className="do-shimmer">
          <div style={{ background: 'var(--gray-100)', aspectRatio: i % 2 === 0 ? '3/4' : '1/1', marginBottom: 1 }} />
          <div style={{ background: 'var(--white)', padding: '14px', border: '1px solid var(--gray-100)' }}>
            <div style={{ height: 16, background: 'var(--gray-100)', marginBottom: 8, width: '70%' }} />
            <div style={{ height: 10, background: 'var(--gray-50)', marginBottom: 5, width: '100%' }} />
            <div style={{ height: 10, background: 'var(--gray-50)', width: '80%' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Main ── */
function ResultsContent() {
  const params   = useSearchParams()
  const router   = useRouter()
  const [outfits, setOutfits] = useState<FallbackOutfit[]>([])
  const [loading, setLoading] = useState(true)
  const [aiUsed,  setAiUsed]  = useState(false)

  const styleVibe    = params.get('styleVibe')    ?? 'minimal'
  const bodyType     = params.get('bodyType')     ?? ''
  const occasion     = params.get('occasion')     ?? ''
  const colorPalette = params.get('colorPalette') ?? ''
  const budget       = params.get('budget')       ?? ''
  const fit          = params.get('fit')          ?? ''

  useEffect(() => {
    if (!bodyType) { router.push('/quiz'); return }
    void loadOutfits()
  }, [])

  const loadOutfits = async () => {
    setLoading(true)

    // Always load fallback first for instant display
    const fallback = getFallbackOutfits(styleVibe)
    setOutfits(fallback)
    setLoading(false)

    // Then try to enhance with AI in background
    try {
      const res  = await fetch('/api/recommend', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ bodyType, styleVibe, occasion, colorPalette, budget, fit }),
      })
      if (!res.ok) return

      const data = await res.json()
      if (Array.isArray(data.outfits) && data.outfits.length > 0) {
        // Map AI outfits to FallbackOutfit shape so card works with both
        const mapped: FallbackOutfit[] = data.outfits.map((o: any, i: number) => ({
          name:      o.name ?? 'Curated Look',
          image:     fallback[i % fallback.length].image,
          occasion:  o.occasion ?? occasion,
          tags:      Array.isArray(o.tags) ? o.tags : [],
          pieces:    Array.isArray(o.pieces)
            ? o.pieces.map((p: any) => typeof p === 'string' ? p : `${p.item} — ${p.brand} (${p.price})`)
            : [],
          shopLinks: fallback[i % fallback.length].shopLinks,
          stylingTip: o.stylingTip ?? '',
        }))
        setOutfits(mapped)
        setAiUsed(true)
      }
    } catch {
      // silently keep fallback
    }
  }

  return (
    <main style={{ background: 'var(--white)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ background: 'var(--black)', padding: '0 40px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="brand">STYLEFINDER</span>
        </Link>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <Link href="/shopping" style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-500)', textTransform: 'uppercase', textDecoration: 'none' }}>Shopping</Link>
          <Link href="/quiz"     style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-500)', textTransform: 'uppercase', textDecoration: 'none' }}>Retake</Link>
        </div>
      </nav>

      {/* Header */}
      <div style={{ background: 'var(--black)', borderBottom: '1px solid var(--gray-900)', padding: '36px 40px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 20, height: 1, background: 'var(--yellow)' }} />
              <span style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.24em', color: 'var(--yellow)', textTransform: 'uppercase', opacity: .8 }}>
                {styleLabel[styleVibe] ?? styleVibe}
              </span>
            </div>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--white)', letterSpacing: '.04em', lineHeight: 1 }}>
              YOUR LOOKBOOK
            </div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--gray-500)', marginTop: 8 }}>
              {loading ? 'Curating your style...' : `${outfits.length} outfit ideas · tap any card for styling tips`}
              {aiUsed && <span style={{ color: 'var(--yellow)', marginLeft: 8 }}>✦ AI-personalised</span>}
            </div>
          </motion.div>
          <Link href="/quiz">
            <motion.button
              whileHover={{ background: 'var(--yellow)', color: 'var(--black)', borderColor: 'var(--yellow)' }}
              style={{ padding: '10px 22px', background: 'transparent', color: 'var(--gray-500)', border: '1px solid var(--gray-700)', fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}
            >
              Retake quiz
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Pinterest masonry grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 40px 80px' }}>

        {loading && <Skeleton />}

        {!loading && (
          <div style={{ columns: 3, columnGap: 1 }}>
            {outfits.map((outfit, i) => (
              <OutfitCard key={i} outfit={outfit} index={i} />
            ))}
          </div>
        )}

        {/* Promo strip */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
            style={{ background: 'var(--black)', padding: '32px 36px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center', marginTop: 32 }}
          >
            <div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 22, color: 'var(--yellow)', letterSpacing: '.06em', marginBottom: 4 }}>
                SHOP THE FULL EDIT
              </div>
              <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--gray-500)', lineHeight: 1.7 }}>
                Browse all trends with brand links sorted by price — Zara, H&M, COS, Net-a-Porter and 8 more.
              </p>
            </div>
            <Link href="/shopping">
              <motion.button
                whileHover={{ background: 'var(--yellow)', color: 'var(--black)', borderColor: 'var(--yellow)' }}
                style={{ padding: '12px 28px', background: 'transparent', color: 'var(--white)', border: '1px solid var(--gray-600)', fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .2s' }}
              >
                Shopping guide →
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 24, height: 24, border: '1.5px solid var(--gray-700)', borderTopColor: 'var(--yellow)', borderRadius: '50%', margin: '0 auto 16px' }} className="do-spin" />
            <p style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 14, color: 'var(--gray-500)', letterSpacing: '0.2em' }}>LOADING YOUR LOOKBOOK</p>
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  )
}
