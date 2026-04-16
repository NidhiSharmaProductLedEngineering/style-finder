'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const TICKER = [
  'MINIMAL','EDITORIAL','PARISIAN','LUXE','CLASSIC',
  'AVANT-GARDE','STREET','FEMININE','REFINED','QUIET LUXURY',
  'MINIMAL','EDITORIAL','PARISIAN','LUXE','CLASSIC',
  'AVANT-GARDE','STREET','FEMININE','REFINED','QUIET LUXURY',
]

const STEPS = [
  { n: '01', t: 'Style profile',    d: '6 questions about your body type, vibe, lifestyle, and budget.' },
  { n: '02', t: 'AI lookbook',      d: '6 curated outfits built specifically for your style DNA.' },
  { n: '03', t: 'Shop every piece', d: 'Brand links and price ranges for every item we suggest.' },
]

const STATS = [['6','Questions'],['6','AI Outfits'],['9+','Brands'],['100%','Yours']]

const IMAGES = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80&fit=crop',
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: .12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: .6, ease: [.22,1,.36,1] } },
}

export default function HomePage() {
  return (
    <main style={{ background: 'var(--ob)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav className="ob-nav">
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="brand"
        >
          STYLEFINDER
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          style={{ display: 'flex', gap: 28, alignItems: 'center' }}
        >
          <Link href="/quiz"     style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)', textTransform: 'uppercase', textDecoration: 'none' }}>Quiz</Link>
          <Link href="/shopping" style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)', textTransform: 'uppercase', textDecoration: 'none' }}>Shopping</Link>
          <Link href="/quiz"><button className="gold-btn">Start →</button></Link>
        </motion.div>
      </nav>

      {/* Hero */}
      <section style={{ borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        {/* Scan line */}
        <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'rgba(232,184,75,.05)', animation: 'scan 5s linear infinite', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'end', position: 'relative', zIndex: 1 }}>

          {/* Left — massive type */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <div style={{ width: 28, height: 1, background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.28em', color: 'var(--gold)', textTransform: 'uppercase', opacity: .8 }}>AI-Powered Fashion · 2025</span>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', opacity: .4 }} className="do-pulse" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem,9vw,7.5rem)', lineHeight: .88, color: 'var(--white)', letterSpacing: '.02em' }}>DISCOVER</div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem,9vw,7.5rem)', lineHeight: .88, color: 'var(--gold)', letterSpacing: '.02em' }}>YOUR STYLE.</div>
            </motion.div>

            <motion.p variants={fadeUp} style={{ fontFamily: 'DM Sans', fontSize: 13, lineHeight: 1.9, color: 'var(--muted)', marginTop: 22, maxWidth: 400 }}>
              6 questions. AI-curated outfits. Every piece linked directly to Zara, COS, Net-a-Porter and 9 more brands — instantly.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 10, marginTop: 26, alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz"><motion.button whileHover={{ background: 'var(--gold2)' }} className="gold-btn do-glow" style={{ padding: '13px 32px' }}>Find My Style →</motion.button></Link>
              <Link href="/shopping"><motion.button whileHover={{ borderColor: 'var(--gold)', color: 'var(--gold)' }} className="ghost-btn">Browse Trends ↗</motion.button></Link>
              <span style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--dim)', letterSpacing: '.1em', textTransform: 'uppercase' }}>60 sec · Free</span>
            </motion.div>
          </motion.div>

          {/* Right — editorial image stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5, duration: .7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=350&q=80&fit=crop"
                alt="Fashion editorial"
                style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block', filter: 'grayscale(20%) contrast(1.1)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(8,8,8,.7))' }} />
              <span style={{ position: 'absolute', bottom: 10, left: 12, fontFamily: '"Bebas Neue", sans-serif', fontSize: 11, letterSpacing: '.16em', color: 'var(--gold)', background: 'rgba(8,8,8,.7)', padding: '3px 8px' }}>CURATED FOR YOU</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&q=80&fit=crop"
                  alt="Style"
                  style={{ width: '100%', height: 80, objectFit: 'cover', display: 'block', filter: 'grayscale(30%)' }}
                />
              </div>
              <div style={{ background: 'var(--s2)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 12 }}>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 28, color: 'var(--gold)', lineHeight: 1 }}>9+</div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 8, color: 'var(--muted)', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 2 }}>Brands</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '10px 0', overflow: 'hidden', background: 'var(--s1)' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="do-marquee">
          {TICKER.map((w, i) => (
            <span key={i} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 13, color: i % 4 === 0 ? 'var(--gold)' : 'var(--dim)', marginRight: 22, letterSpacing: '.1em' }}>
              {w} <span style={{ color: 'var(--border)', margin: '0 2px' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {STATS.map(([n, l]) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ padding: '22px 40px', borderRight: '1px solid var(--border)' }}
          >
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 36, color: 'var(--white)', letterSpacing: '.04em', lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--muted)', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
          </motion.div>
        ))}
      </div>

      {/* How it works */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 40px 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}
        >
          <span style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.24em', color: 'var(--muted)', textTransform: 'uppercase' }}>How it works</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)' }}>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .1 }}
              className="ob-card lift"
              style={{ padding: '32px 24px', border: 'none', borderRight: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 8, right: 12, fontFamily: '"Bebas Neue", sans-serif', fontSize: 80, color: 'rgba(232,184,75,.06)', lineHeight: 1, userSelect: 'none' }}>{s.n}</div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 11, letterSpacing: '.2em', color: 'var(--gold)', marginBottom: 14 }}>{s.n}</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, color: 'var(--white)', marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--muted)', lineHeight: 1.75 }}>{s.d}</div>
              <div className="card-underline" style={{ marginTop: 18 }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 1100, margin: '1px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)', height: 180 }}
      >
        {IMAGES.map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
            <img
              src={src}
              alt="fashion"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(30%) contrast(1.1)', transition: 'transform .4s ease' }}
              onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
              onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,.25)' }} />
            {i === 1 && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 16, color: 'var(--gold)', letterSpacing: '.14em', textAlign: 'center', lineHeight: 1.3 }}>YOUR<br/>LOOKBOOK</span>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ background: 'var(--s1)', borderTop: '1px solid var(--border)', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, maxWidth: '100%' }}
      >
        <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(1.2rem,3vw,1.8rem)', color: 'var(--white)', letterSpacing: '.04em' }}>
          READY TO FIND YOUR STYLE?
        </div>
        <Link href="/quiz">
          <motion.button whileHover={{ background: 'var(--gold2)' }} className="gold-btn" style={{ padding: '14px 36px', fontSize: 11 }}>
            Begin Your Journey →
          </motion.button>
        </Link>
      </motion.div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border2)', padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="brand" style={{ fontSize: 15 }}>STYLEFINDER</span>
        <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--dim)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Built by Nidhi Sharma</span>
      </footer>
    </main>
  )
}
