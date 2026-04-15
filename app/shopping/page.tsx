'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const trends = [
  {
    label: 'Spring / Summer 2025',
    title: 'Quiet Luxury',
    desc: 'Understated elegance — neutral tones, impeccable tailoring, zero logos.',
    items: [
      { piece: 'Cashmere crew-neck knit',      price: 'AED 280–450', brands: ['COS', 'Arket', 'Uniqlo'] },
      { piece: 'Wide-leg tailored trousers',    price: 'AED 180–380', brands: ['Zara', 'Mango', 'COS'] },
      { piece: 'Slip-on leather loafers',       price: 'AED 250–550', brands: ['Charles & Keith', 'Zara', 'Aldo'] },
      { piece: 'Structured leather tote',       price: 'AED 200–600', brands: ['H&M Premium', 'Mango', 'COS'] },
    ],
  },
  {
    label: 'Spring / Summer 2025',
    title: 'Coastal Grandma',
    desc: 'Linen, loose silhouettes, natural textures — sun-bleached and effortless.',
    items: [
      { piece: 'Linen wide-leg trousers',       price: 'AED 99–199',  brands: ['H&M', 'Zara', 'Uniqlo'] },
      { piece: 'Relaxed oversized linen shirt',  price: 'AED 99–220',  brands: ['Uniqlo', 'COS', 'H&M'] },
      { piece: 'Woven straw tote bag',           price: 'AED 120–280', brands: ['Zara', '& Other Stories', 'H&M'] },
      { piece: 'Flat leather sandals',           price: 'AED 120–300', brands: ['Aldo', 'Charles & Keith', 'Zara'] },
    ],
  },
  {
    label: 'All Season',
    title: 'Modern Minimalism',
    desc: 'Clean geometry, monochrome dressing — the power of negative space.',
    items: [
      { piece: 'Fitted black turtleneck',       price: 'AED 89–180',  brands: ['Uniqlo', 'COS', 'Arket'] },
      { piece: 'Straight-leg dark jeans',        price: 'AED 120–280', brands: ['Zara', 'H&M', 'Mango'] },
      { piece: 'Minimal white leather sneakers', price: 'AED 200–600', brands: ['Adidas', 'Zara', 'Farfetch'] },
      { piece: 'Micro crossbody bag',            price: 'AED 150–380', brands: ['& Other Stories', 'Mango', 'Charles & Keith'] },
    ],
  },
  {
    label: 'Autumn / Winter 2025',
    title: 'Dark Academia',
    desc: 'Rich earth tones, heritage checks, layered textures — library meets runway.',
    items: [
      { piece: 'Herringbone wool blazer',        price: 'AED 299–599', brands: ['Zara', 'Mango', 'COS'] },
      { piece: 'Plaid midi skirt',               price: 'AED 150–320', brands: ['H&M', '& Other Stories', 'Zara'] },
      { piece: 'Chelsea ankle boots',            price: 'AED 250–500', brands: ['Zara', 'Aldo', 'Charles & Keith'] },
      { piece: 'Leather belt bag',               price: 'AED 150–380', brands: ['Mango', 'Charles & Keith', 'Zara'] },
    ],
  },
]

const brands = [
  { name: 'Zara',             range: 'AED 49–599',   type: 'Fast fashion',    url: 'https://www.zara.com/ae/' },
  { name: 'H&M',              range: 'AED 29–399',   type: 'Affordable daily',url: 'https://www2.hm.com/en_ae/' },
  { name: 'Mango',            range: 'AED 89–699',   type: 'Mediterranean',   url: 'https://shop.mango.com/ae' },
  { name: 'COS',              range: 'AED 150–900',  type: 'Minimal tailored',url: 'https://www.cos.com/' },
  { name: '& Other Stories',  range: 'AED 120–600',  type: 'Curated feminine',url: 'https://www.stories.com/' },
  { name: 'Arket',            range: 'AED 200–900',  type: 'Modern utility',  url: 'https://www.arket.com/' },
  { name: 'Uniqlo',           range: 'AED 49–299',   type: 'Quality basics',  url: 'https://www.uniqlo.com/ae/' },
  { name: 'Charles & Keith',  range: 'AED 120–600',  type: 'Acc & footwear',  url: 'https://www.charleskeith.com/' },
  { name: 'Aldo',             range: 'AED 150–500',  type: 'Shoes & bags',    url: 'https://www.aldoshoes.com/ae/' },
  { name: 'Net-a-Porter',     range: 'AED 500–5000+', type: 'Luxury designer',url: 'https://www.net-a-porter.com/' },
  { name: 'Farfetch',         range: 'AED 400–10000+',type: 'Global boutiques',url: 'https://www.farfetch.com/' },
  { name: 'Namshi',           range: 'AED 49–999',   type: 'UAE multi-brand', url: 'https://en-ae.namshi.com/' },
]

export default function ShoppingPage() {
  return (
    <main style={{ background: 'var(--white)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid var(--gray-900)', padding: '0 40px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--black)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="brand">STYLEFINDER</span>
        </Link>
        <Link href="/quiz">
          <motion.button
            whileHover={{ background: 'var(--yellow)', color: 'var(--black)', borderColor: 'var(--yellow)' }}
            style={{ padding: '8px 20px', background: 'transparent', color: 'var(--yellow)', border: '1px solid var(--yellow)', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .2s' }}
          >
            Take quiz →
          </motion.button>
        </Link>
      </nav>

      {/* Hero */}
      <div style={{ borderBottom: '1px solid var(--gray-100)', padding: '48px 40px 36px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 32, height: 1, background: 'var(--gray-300)' }} />
              <span style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.22em', color: 'var(--gray-400)', textTransform: 'uppercase' }}>Curated shopping</span>
            </div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 300, color: 'var(--black)', lineHeight: 1.1 }}>
              Shop the <em>trends</em>
            </h1>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--gray-400)', marginTop: 10, maxWidth: 480, lineHeight: 1.8 }}>
              Curated pieces for 2025's defining fashion trends — every item links directly to the brand, sorted by budget range.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 40px 80px' }}>

        {/* Trend sections */}
        {trends.map((trend, ti) => (
          <motion.div
            key={trend.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: .1 }}
            style={{ marginBottom: 32 }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '20px 24px', background: ti % 2 === 0 ? 'var(--black)' : 'var(--gray-50)', border: '1px solid var(--gray-100)' }}>
              <div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.2em', color: ti % 2 === 0 ? 'var(--gray-500)' : 'var(--gray-300)', textTransform: 'uppercase', marginBottom: 5 }}>
                  {trend.label}
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontStyle: 'italic', color: ti % 2 === 0 ? 'var(--white)' : 'var(--black)', marginBottom: 4 }}>
                  {trend.title}
                </div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: ti % 2 === 0 ? 'var(--gray-500)' : 'var(--gray-400)', maxWidth: 400, lineHeight: 1.6 }}>
                  {trend.desc}
                </div>
              </div>
              <Link href="/quiz">
                <motion.button
                  whileHover={{ opacity: .8 }}
                  style={{ padding: '9px 20px', background: 'transparent', color: ti % 2 === 0 ? 'var(--gray-400)' : 'var(--gray-500)', border: `1px solid ${ti % 2 === 0 ? 'var(--gray-700)' : 'var(--gray-200)'}`, fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity .2s' }}
                >
                  Get my look →
                </motion.button>
              </Link>
            </div>

            {/* Items grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--gray-100)' }}>
              {trend.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ii * .05 }}
                  className="lift"
                  style={{ background: 'var(--white)', padding: '20px 18px' }}
                >
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, color: 'var(--black)', marginBottom: 6, lineHeight: 1.3 }}>
                    {item.piece}
                  </div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '0.12em', color: 'var(--gray-300)', textTransform: 'uppercase', marginBottom: 10 }}>
                    {item.price}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {item.brands.map(b => (
                      <span key={b} style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-500)', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--gray-300)', display: 'inline-block', flexShrink: 0 }} />
                        {b}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Brand Directory */}
        <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 48, marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.22em', color: 'var(--gray-300)', textTransform: 'uppercase' }}>Brand directory</div>
            <div style={{ flex: 1, height: 1, background: 'var(--gray-100)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--gray-100)' }}>
            {brands.map((b, i) => (
              <motion.a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * .04 }}
                whileHover={{ background: 'var(--gray-50)' }}
                style={{ background: 'var(--white)', padding: '18px 20px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'background .15s' }}
              >
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, color: 'var(--black)', marginBottom: 2 }}>{b.name}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--gray-400)' }}>{b.type}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--gray-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{b.range}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 14, color: 'var(--gray-400)', marginTop: 3 }}>↗</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--gray-300)', marginBottom: 20, letterSpacing: '0.04em' }}>
            Want personalised outfit recommendations?
          </p>
          <Link href="/quiz">
            <motion.button
              whileHover={{ background: 'var(--gray-900)' }}
              style={{ padding: '14px 40px', background: 'var(--black)', color: 'var(--white)', border: 'none', fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background .2s' }}
            >
              Take the style quiz →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
