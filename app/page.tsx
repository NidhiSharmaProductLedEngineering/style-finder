'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const words = ['Minimal.','Editorial.','Parisian.','Classic.','Avant-garde.','Sleek.','Feminine.','Refined.','Minimal.','Editorial.','Parisian.','Classic.','Avant-garde.','Sleek.','Feminine.','Refined.']

const steps = [
  { n: '01', t: 'Style profile',    d: '6 quick questions — body type, vibe, lifestyle, budget.' },
  { n: '02', t: 'AI lookbook',      d: '6 curated outfits built around your exact style DNA.' },
  { n: '03', t: 'Shop every piece', d: 'Brand links and price ranges for every item we suggest.' },
]

export default function HomePage() {
  return (
    <main style={{ background: 'var(--white)', minHeight: '100vh' }}>

      {/* Nav — black with yellow brand */}
      <nav style={{ background: 'var(--black)', padding: '0 40px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="brand">
          STYLEFINDER
        </motion.span>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <Link href="/quiz"     style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-500)', textTransform: 'uppercase', textDecoration: 'none' }}>Quiz</Link>
          <Link href="/shopping" style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-500)', textTransform: 'uppercase', textDecoration: 'none' }}>Shopping</Link>
          <Link href="/quiz">
            <motion.button
              whileHover={{ background: 'var(--yellow)', color: 'var(--black)', borderColor: 'var(--yellow)' }}
              style={{ padding: '8px 20px', background: 'transparent', color: 'var(--yellow)', border: '1px solid var(--yellow)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}
            >
              Start →
            </motion.button>
          </Link>
        </motion.div>
      </nav>

      {/* Hero — black, massive Bebas type + images */}
      <section style={{ background: 'var(--black)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', minHeight: 380 }}>

          {/* Left — giant type block */}
          <div style={{ padding: '52px 40px 48px', borderRight: '1px solid var(--gray-800)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5 }} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 28, height: 1, background: 'var(--yellow)' }} />
                <span style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.28em', color: 'var(--yellow)', textTransform: 'uppercase', opacity: .8 }}>AI-Powered Fashion · 2025</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem,9vw,7.5rem)', lineHeight: .88, color: 'var(--white)', letterSpacing: '.02em' }}>DISCOVER</div>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem,9vw,7.5rem)', lineHeight: .88, color: 'var(--yellow)', letterSpacing: '.02em' }}>YOUR STYLE.</div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
              <p style={{ fontFamily: 'DM Sans', fontSize: 13, lineHeight: 1.9, color: 'var(--gray-400)', marginBottom: 28, maxWidth: 380 }}>
                Answer 6 questions. Get a personalised lookbook with AI-curated outfits and direct shopping links — from Zara to Net-a-Porter.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href="/quiz">
                  <motion.button
                    whileHover={{ background: 'var(--yellow)', color: 'var(--black)', borderColor: 'var(--yellow)' }}
                    style={{ padding: '13px 28px', background: 'transparent', color: 'var(--white)', border: '1px solid var(--gray-600)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}
                  >
                    Find my style →
                  </motion.button>
                </Link>
                <Link href="/shopping">
                  <motion.button
                    whileHover={{ borderColor: 'var(--gray-500)' }}
                    style={{ padding: '13px 22px', background: 'transparent', color: 'var(--gray-500)', border: '1px solid var(--gray-800)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}
                  >
                    Shop trends ↗
                  </motion.button>
                </Link>
              </div>
              <div style={{ marginTop: 18, fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gray-700)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>60 sec · Free · No signup needed</div>
            </motion.div>
          </div>

          {/* Right — two stacked editorial images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3, duration: .8 }}
            style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 1, background: 'var(--gray-900)' }}
          >
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=360&q=80&fit=crop&crop=faces"
                alt="Fashion editorial"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: '"Bebas Neue", sans-serif', fontSize: 11, letterSpacing: '0.16em', color: 'var(--yellow)', background: 'rgba(10,10,10,.75)', padding: '3px 8px' }}>
                CURATED FOR YOU
              </div>
            </div>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=360&q=80&fit=crop"
                alt="Style editorial"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 10, left: 10, fontFamily: '"Bebas Neue", sans-serif', fontSize: 11, letterSpacing: '0.16em', color: 'var(--yellow)', background: 'rgba(10,10,10,.75)', padding: '3px 8px' }}>
                AI-POWERED
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div style={{ overflow: 'hidden', padding: '10px 0', background: 'var(--black)', borderTop: '1px solid var(--gray-900)' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="do-marquee">
          {words.map((w, i) => (
            <span key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, fontStyle: 'italic', color: i % 3 === 0 ? 'var(--yellow)' : i % 3 === 1 ? 'var(--gray-600)' : 'var(--gray-800)', marginRight: 28 }}>
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid var(--gray-100)' }}>
        {[['6','Style questions'],['6','AI-curated outfits'],['9+','Brand partners'],['100%','Personalised']].map(([n, l]) => (
          <div key={l} style={{ padding: '28px 40px', borderRight: '1px solid var(--gray-100)' }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 36, color: 'var(--black)', marginBottom: 4, letterSpacing: '.04em' }}>{n}</div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 40px 80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}
        >
          <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.24em', color: 'var(--gray-400)', textTransform: 'uppercase' }}>How it works</div>
          <div style={{ flex: 1, height: 1, background: 'var(--gray-100)' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--gray-100)' }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="lift"
              style={{ background: 'var(--white)', padding: '36px 28px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 8, right: 14, fontFamily: '"Bebas Neue", sans-serif', fontSize: 80, color: 'var(--gray-100)', lineHeight: 1, letterSpacing: '.02em', userSelect: 'none' }}>{s.n}</div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 12, letterSpacing: '0.2em', color: 'var(--yellow)', marginBottom: 16 }}>{s.n}</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'var(--black)', marginBottom: 12 }}>{s.t}</div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.75 }}>{s.d}</div>
              <div style={{ width: 20, height: 2, background: 'var(--yellow)', marginTop: 18 }} />
            </motion.div>
          ))}
        </div>

        {/* 3 fashion images */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'var(--gray-100)', marginTop: 1, height: 200 }}
        >
          {[
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop',
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80&fit=crop',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80&fit=crop',
          ].map((src, i) => (
            <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
              <img
                src={src}
                alt="fashion inspiration"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .4s ease' }}
                onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
                onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
              />
              {i === 1 && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 16, color: 'var(--yellow)', letterSpacing: '.12em' }}>YOUR LOOKBOOK</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}
        >
          <Link href="/quiz">
            <motion.button
              whileHover={{ background: 'var(--yellow)', color: 'var(--black)', borderColor: 'var(--yellow)' }}
              style={{ padding: '16px 48px', background: 'var(--black)', color: 'var(--white)', border: '1px solid var(--black)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}
            >
              Begin your style journey →
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--gray-100)', padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--black)' }}>
        <span className="brand" style={{ fontSize: 16 }}>STYLEFINDER</span>
        <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gray-600)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Built by Nidhi Sharma</span>
      </footer>
    </main>
  )
}
