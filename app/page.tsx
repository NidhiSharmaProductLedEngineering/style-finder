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

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid var(--gray-100)', padding: '0 40px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 400, letterSpacing: '0.08em', color: 'var(--black)', textTransform: 'uppercase' }}>
            STYLE<span style={{ fontWeight: 300, fontStyle: 'italic' }}>finder</span>
          </span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <Link href="/quiz"     style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-500)', textTransform: 'uppercase', textDecoration: 'none' }}>Quiz</Link>
          <Link href="/shopping" style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', color: 'var(--gray-500)', textTransform: 'uppercase', textDecoration: 'none' }}>Shopping</Link>
          <Link href="/quiz">
            <motion.button whileHover={{ background: 'var(--gray-900)' }} style={{ padding: '8px 20px', background: 'var(--black)', color: 'var(--white)', border: 'none', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background .2s' }}>
              Start →
            </motion.button>
          </Link>
        </motion.div>
      </nav>

      {/* Hero — full-width black band */}
      <section style={{ background: 'var(--black)', padding: '80px 40px 64px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, alignItems: 'end' }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ width: 40, height: 1, background: 'var(--gray-600)' }} />
                <span style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.28em', color: 'var(--gray-400)', textTransform: 'uppercase' }}>AI-Powered Fashion</span>
              </div>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem,8vw,7rem)', fontWeight: 300, lineHeight: .95, color: 'var(--white)', letterSpacing: '-0.01em' }}>
                Discover
              </h1>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem,8vw,7rem)', fontWeight: 300, lineHeight: .95, color: 'var(--gray-400)', fontStyle: 'italic', letterSpacing: '-0.01em' }}>
                your style.
              </h1>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4, duration: .6 }} style={{ paddingBottom: 8 }}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13, lineHeight: 1.9, color: 'var(--gray-400)', marginBottom: 28 }}>
              Answer 6 questions. Get a personalised lookbook with AI-curated outfits and direct shopping links — from Zara to Net-a-Porter.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href="/quiz">
                <motion.button
                  whileHover={{ background: 'var(--white)', color: 'var(--black)' }}
                  style={{ width: '100%', padding: '14px 24px', background: 'transparent', color: 'var(--white)', border: '1px solid var(--gray-600)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', textAlign: 'left', transition: 'all .2s' }}
                >
                  Find my style →
                </motion.button>
              </Link>
              <Link href="/shopping">
                <motion.button
                  whileHover={{ borderColor: 'var(--gray-500)', color: 'var(--gray-300)' }}
                  style={{ width: '100%', padding: '14px 24px', background: 'transparent', color: 'var(--gray-500)', border: '1px solid var(--gray-800)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', textAlign: 'left', transition: 'all .2s' }}
                >
                  Browse shopping guide ↗
                </motion.button>
              </Link>
            </div>
            <div style={{ marginTop: 20, fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gray-600)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>60 sec · Free · No signup</div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ borderBottom: '1px solid var(--gray-100)', overflow: 'hidden', padding: '12px 0' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="do-marquee">
          {words.map((w, i) => (
            <span key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, fontStyle: 'italic', color: i % 2 === 0 ? 'var(--gray-500)' : 'var(--gray-300)', marginRight: 28, letterSpacing: '0.04em' }}>
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ borderBottom: '1px solid var(--gray-100)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {[['6', 'Style questions'], ['6', 'AI-curated outfits'], ['9+', 'Brand partners'], ['100%', 'Personalised']].map(([n, l]) => (
          <div key={l} style={{ padding: '28px 40px', borderRight: '1px solid var(--gray-100)' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 300, color: 'var(--black)', marginBottom: 4 }}>{n}</div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-400)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}
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
              style={{ background: 'var(--white)', padding: '40px 32px' }}
            >
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 11, letterSpacing: '0.22em', color: 'var(--gray-300)', marginBottom: 20, textTransform: 'uppercase' }}>{s.n}</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'var(--black)', marginBottom: 14, fontWeight: 400 }}>{s.t}</div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.75 }}>{s.d}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}
        >
          <Link href="/quiz">
            <motion.button
              whileHover={{ background: 'var(--gray-900)' }}
              style={{ padding: '16px 48px', background: 'var(--black)', color: 'var(--white)', border: 'none', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background .2s' }}
            >
              Begin your style journey →
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer strip */}
      <footer style={{ borderTop: '1px solid var(--gray-100)', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, color: 'var(--gray-400)', fontStyle: 'italic' }}>StyleFinder</span>
        <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gray-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Built by Nidhi Sharma</span>
      </footer>
    </main>
  )
}
