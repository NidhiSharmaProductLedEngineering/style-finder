'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { OutfitRecommendation, QuizAnswers, ApiResponse } from '@/lib/types'

/* ── Skeleton ── */
function Skeleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--gray-100)' }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ background: 'var(--white)' }} className="do-shimmer">
          <div style={{ height: 28, background: 'var(--gray-100)' }} />
          <div style={{ padding: '18px 16px' }}>
            <div style={{ height: 14, width: '65%', background: 'var(--gray-100)', marginBottom: 10, borderRadius: 2 }} />
            <div style={{ height: 10, width: '100%', background: 'var(--gray-50)', marginBottom: 6, borderRadius: 2 }} />
            <div style={{ height: 10, width: '80%',  background: 'var(--gray-50)', borderRadius: 2 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Outfit card ── */
function OutfitCard({ outfit, index }: { outfit: OutfitRecommendation; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .45, delay: index * 0.09 }}
      className="lift"
      style={{ background: 'var(--white)', cursor: 'pointer' }}
      onClick={() => setOpen(o => !o)}
    >
      {/* Color swatch bar */}
      <div style={{ display: 'flex', height: 28 }}>
        {outfit.swatchColors.map((c, i) => (
          <div key={i} style={{ flex: 1, background: c }} />
        ))}
      </div>

      <div style={{ padding: '16px 16px 12px' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontStyle: 'italic', color: 'var(--black)', marginBottom: 4 }}>
          {outfit.name}
        </div>
        <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.14em', color: 'var(--gray-400)', textTransform: 'uppercase', marginBottom: 12 }}>
          {outfit.occasion}
        </div>

        {/* Pieces */}
        <div style={{ marginBottom: 10 }}>
          {outfit.pieces.slice(0, open ? undefined : 2).map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
              <div style={{ marginTop: 7, width: 3, height: 3, borderRadius: '50%', background: 'var(--gray-300)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-700)' }}>{p.item}</span>
                <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gray-300)', marginLeft: 6 }}>{p.brand} · {p.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
          {outfit.tags.map(tag => (
            <span key={tag} style={{ fontFamily: 'DM Sans', fontSize: 9, padding: '2px 8px', border: '0.5px solid var(--gray-200)', color: 'var(--gray-500)', letterSpacing: '0.06em' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ borderTop: '1px solid var(--gray-100)', marginTop: 8, paddingTop: 12 }}>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.16em', color: 'var(--gray-300)', textTransform: 'uppercase', marginBottom: 4 }}>Styling tip</div>
                <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-500)', lineHeight: 1.65, marginBottom: 10 }}>{outfit.stylingTip}</p>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.16em', color: 'var(--gray-300)', textTransform: 'uppercase', marginBottom: 4 }}>Why it works</div>
                <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-500)', lineHeight: 1.65 }}>{outfit.whyItWorks}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ marginTop: 8, fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.12em', color: 'var(--gray-300)', textTransform: 'uppercase' }}>
          {open ? '↑ Less' : '↓ Details'}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main results ── */
function ResultsContent() {
  const params = useSearchParams()
  const router = useRouter()

  const answers: QuizAnswers = {
    bodyType:     params.get('bodyType')     ?? '',
    styleVibe:    params.get('styleVibe')    ?? '',
    occasion:     params.get('occasion')     ?? '',
    colorPalette: params.get('colorPalette') ?? '',
    budget:       params.get('budget')       ?? '',
    fit:          params.get('fit')          ?? '',
  }

  const [outfits, setOutfits] = useState<OutfitRecommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState('')

  const styleLabel: Record<string, string> = {
    minimal: 'Clean Minimal', feminine: 'Feminine & Soft',
    classic: 'Timeless Classic', edgy: 'Edgy & Modern',
    boho: 'Boho & Free', glam: 'Glam & Luxe',
  }

  useEffect(() => {
    if (!answers.bodyType) { router.push('/quiz'); return }
    void fetchOutfits()
  }, [])

  const fetchOutfits = async () => {
    setLoading(true)
    setError('')
    try {
      const res  = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      })
      const data = await res.json() as ApiResponse
      if (Array.isArray(data.outfits)) {
        setOutfits(data.outfits)
      } else {
        setError('Could not generate outfits. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main style={{ background: 'var(--white)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid var(--gray-100)', padding: '0 40px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 400, letterSpacing: '0.08em', color: 'var(--black)', textTransform: 'uppercase' }}>
            STYLE<span style={{ fontWeight: 300, fontStyle: 'italic' }}>finder</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/shopping" style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-400)', textTransform: 'uppercase', textDecoration: 'none' }}>Shopping</Link>
          <Link href="/quiz"     style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-400)', textTransform: 'uppercase', textDecoration: 'none' }}>Retake</Link>
        </div>
      </nav>

      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--gray-100)', padding: '40px 40px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.24em', color: 'var(--gray-300)', textTransform: 'uppercase', marginBottom: 10 }}>
              {styleLabel[answers.styleVibe] ?? answers.styleVibe}
            </div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 300, color: 'var(--black)', lineHeight: 1.1 }}>
              Your personal <em>lookbook</em>
            </h1>
            {!loading && (
              <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--gray-400)', marginTop: 8 }}>
                {outfits.length} outfits curated for your style profile
              </p>
            )}
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 40px 80px' }}>

        {loading && <Skeleton />}

        {error && (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--gray-500)', marginBottom: 20 }}>{error}</p>
            <button
              onClick={() => void fetchOutfits()}
              style={{ padding: '12px 28px', background: 'var(--black)', color: 'var(--white)', border: 'none', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer' }}
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && outfits.length > 0 && (
          <>
            {/* Bento grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--gray-100)', marginBottom: 40 }}>
              {outfits.map((outfit, i) => (
                <OutfitCard key={i} outfit={outfit} index={i} />
              ))}
            </div>

            {/* Shopping CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .7 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', padding: '36px 40px', background: 'var(--black)', marginBottom: 16 }}
            >
              <div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.22em', color: 'var(--gray-500)', textTransform: 'uppercase', marginBottom: 8 }}>Ready to buy?</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontStyle: 'italic', color: 'var(--white)', marginBottom: 6 }}>Shop every look</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--gray-500)', lineHeight: 1.7 }}>Browse brand links and price ranges — Zara, H&M, COS, Net-a-Porter and more.</p>
              </div>
              <Link href="/shopping">
                <motion.button
                  whileHover={{ background: 'var(--gray-900)' }}
                  style={{ padding: '14px 28px', background: 'var(--white)', color: 'var(--black)', border: 'none', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background .2s' }}
                >
                  Shopping guide →
                </motion.button>
              </Link>
            </motion.div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/quiz">
                <motion.button
                  whileHover={{ borderColor: 'var(--gray-700)', color: 'var(--gray-700)' }}
                  style={{ padding: '12px 32px', background: 'transparent', color: 'var(--gray-300)', border: '1px solid var(--gray-100)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}
                >
                  Retake the quiz
                </motion.button>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '100vh', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 24, height: 24, border: '1.5px solid var(--gray-200)', borderTopColor: 'var(--black)', borderRadius: '50%', margin: '0 auto 16px' }} className="do-spin" />
            <p style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-300)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Loading your lookbook</p>
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  )
}
