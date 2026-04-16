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

const STATS: [string, string][] = [['6','Questions'],['6','AI Outfits'],['9+','Brands'],['100%','Yours']]

/* Dark, editorial Unsplash images — all have dark or neutral backgrounds */
const HERO_IMG   = 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=85&fit=crop'
const HERO_IMG2  = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=85&fit=crop'
const ROW_IMGS   = [
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=450&q=80&fit=crop',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=450&q=80&fit=crop',
  'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=450&q=80&fit=crop',
]

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: .12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0,  transition: { duration: .6, ease: [.22,1,.36,1] as const } },
}

/* Image style — full B&W editorial look */
const IMG_FILTER = 'grayscale(85%) contrast(1.25) brightness(0.8)'

export default function HomePage() {
  return (
    <main style={{ background: 'var(--ob)', minHeight: '100vh' }}>

      {/* ── Nav ── */}
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
          <Link href="/quiz"
            style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)', textTransform: 'uppercase', textDecoration: 'none' }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = 'var(--white)' }}
            onMouseOut={e =>  { (e.currentTarget as HTMLElement).style.color = 'var(--muted)' }}
          >Quiz</Link>
          <Link href="/shopping"
            style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)', textTransform: 'uppercase', textDecoration: 'none' }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = 'var(--white)' }}
            onMouseOut={e =>  { (e.currentTarget as HTMLElement).style.color = 'var(--muted)' }}
          >Shopping</Link>
          <Link href="/quiz"><button className="gold-btn do-glow" style={{ padding: '9px 20px' }}>Start →</button></Link>
        </motion.div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        {/* Scan-line shimmer */}
        <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'rgba(232,184,75,.04)', animation: 'scan 6s linear infinite', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'end', position: 'relative', zIndex: 1 }}>

          {/* Left — type */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <div style={{ width: 28, height: 1, background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.28em', color: 'var(--gold)', textTransform: 'uppercase' }}>AI-Powered Fashion · 2025</span>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', opacity: .5 }} className="do-pulse" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem,9vw,7.5rem)', lineHeight: .88, color: 'var(--white)', letterSpacing: '.02em' }}>DISCOVER</div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(4rem,9vw,7.5rem)', lineHeight: .88, color: 'var(--gold)', letterSpacing: '.02em' }}>YOUR STYLE.</div>
            </motion.div>

            <motion.p variants={fadeUp} style={{ fontFamily: 'DM Sans', fontSize: 13, lineHeight: 1.9, color: 'var(--text)', marginTop: 22, maxWidth: 420 }}>
              6 questions. AI-curated outfits. Every piece linked directly to Zara, COS, Net-a-Porter and 9 more brands — instantly.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 10, marginTop: 26, alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz">
                <motion.button whileHover={{ background: 'var(--gold2)' }} className="gold-btn" style={{ padding: '13px 32px', fontSize: 11 }}>
                  Find My Style →
                </motion.button>
              </Link>
              <Link href="/shopping">
                <motion.button whileHover={{ borderColor: 'var(--gold)', color: 'var(--gold)' }} className="ghost-btn">
                  Browse Trends ↗
                </motion.button>
              </Link>
              <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--dim)', letterSpacing: '.1em', textTransform: 'uppercase' }}>60 sec · Free</span>
            </motion.div>
          </motion.div>

          {/* Right — editorial B&W image stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5, duration: .7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {/* Main image */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src={HERO_IMG}
                alt="Fashion editorial"
                style={{ width: '100%', height: 150, objectFit: 'cover', display: 'block', filter: IMG_FILTER }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(8,8,8,.75))' }} />
              <span style={{ position: 'absolute', bottom: 10, left: 12, fontFamily: '"Bebas Neue", sans-serif', fontSize: 10, letterSpacing: '.2em', color: 'var(--gold)', background: 'rgba(8,8,8,.8)', padding: '3px 8px' }}>
                CURATED FOR YOU
              </span>
            </div>

            {/* Bottom pair */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={HERO_IMG2}
                  alt="Fashion editorial"
                  style={{ width: '100%', height: 90, objectFit: 'cover', display: 'block', filter: IMG_FILTER }}
                />
              </div>
              {/* Stat block */}
              <div style={{ background: 'var(--s2)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 30, color: 'var(--gold)', lineHeight: 1 }}>9+</div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--muted)', letterSpacing: '.16em', textTransform: 'uppercase' }}>Brands</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '10px 0', overflow: 'hidden', background: 'var(--s1)' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }} className="do-marquee">
          {TICKER.map((w, i) => (
            <span key={i} style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 13, color: i % 4 === 0 ? 'var(--gold)' : 'var(--dim)', marginRight: 22, letterSpacing: '.1em' }}>
              {w} <span style={{ color: 'rgba(232,184,75,.15)', margin: '0 2px' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div style={{ borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {STATS.map(([n, l]) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ padding: '24px 40px', borderRight: '1px solid var(--border)' }}
          >
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 36, color: 'var(--white)', letterSpacing: '.04em', lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--muted)', letterSpacing: '.16em', textTransform: 'uppercase', marginTop: 5 }}>{l}</div>
          </motion.div>
        ))}
      </div>

      {/* ── How it works ── */}
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
              {/* Watermark number */}
              <div style={{ position: 'absolute', top: 6, right: 10, fontFamily: '"Bebas Neue", sans-serif', fontSize: 80, color: 'rgba(232,184,75,.05)', lineHeight: 1, userSelect: 'none' }}>{s.n}</div>
              <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 11, letterSpacing: '.2em', color: 'var(--gold)', marginBottom: 14 }}>{s.n}</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, color: 'var(--white)', marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--text)', lineHeight: 1.75 }}>{s.d}</div>
              <div className="card-underline" style={{ marginTop: 18 }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Editorial image row ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 1100, margin: '1px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)', height: 200 }}
      >
        {ROW_IMGS.map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
            <img
              src={src}
              alt="fashion editorial"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: IMG_FILTER, transition: 'transform .5s ease' }}
              onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)' }}
              onMouseOut={e =>  { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,.2)' }} />
            {i === 1 && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 15, color: 'var(--gold)', letterSpacing: '.16em', textAlign: 'center', lineHeight: 1.4, textShadow: '0 2px 12px rgba(0,0,0,.8)' }}>
                  YOUR<br/>LOOKBOOK
                </span>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ background: 'var(--s1)', borderTop: '1px solid var(--border)', padding: '26px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
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

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid var(--border2)', padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="brand" style={{ fontSize: 15 }}>STYLEFINDER</span>
        <span style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--dim)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Built by Nidhi Sharma</span>
      </footer>
    </main>
  )
}
