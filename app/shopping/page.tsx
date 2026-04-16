'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const trends = [
  {
    label: 'Spring / Summer 2025',
    title: 'QUIET LUXURY',
    desc:  'Understated elegance — neutral tones, impeccable tailoring, zero logos.',
    items: [
      { piece: 'Cashmere crew-neck knit',   price: 'AED 280–450', brands: ['COS', 'Arket', 'Uniqlo'],          url: 'https://www.cos.com/' },
      { piece: 'Wide-leg tailored trousers', price: 'AED 180–380', brands: ['Zara', 'Mango', 'COS'],            url: 'https://www.zara.com/ae/' },
      { piece: 'Slip-on leather loafers',    price: 'AED 250–550', brands: ['Charles & Keith', 'Zara', 'Aldo'], url: 'https://www.charleskeith.com/' },
      { piece: 'Structured leather tote',    price: 'AED 200–600', brands: ['H&M', 'Mango', 'COS'],             url: 'https://www2.hm.com/en_ae/' },
    ],
  },
  {
    label: 'Spring / Summer 2025',
    title: 'COASTAL GRANDMA',
    desc:  'Linen, loose silhouettes, natural textures — sun-bleached and effortless.',
    items: [
      { piece: 'Linen wide-leg trousers',      price: 'AED 99–199',  brands: ['H&M', 'Zara', 'Uniqlo'],                url: 'https://www2.hm.com/en_ae/' },
      { piece: 'Relaxed linen shirt',           price: 'AED 99–220',  brands: ['Uniqlo', 'COS', 'H&M'],                 url: 'https://www.uniqlo.com/ae/' },
      { piece: 'Woven straw tote',              price: 'AED 120–280', brands: ['Zara', '& Other Stories', 'H&M'],       url: 'https://www.zara.com/ae/' },
      { piece: 'Flat leather sandals',          price: 'AED 120–300', brands: ['Aldo', 'Charles & Keith', 'Zara'],      url: 'https://www.aldoshoes.com/ae/' },
    ],
  },
  {
    label: 'All Season',
    title: 'MODERN MINIMALISM',
    desc:  'Clean geometry, monochrome dressing — the power of negative space.',
    items: [
      { piece: 'Fitted black turtleneck',       price: 'AED 89–180',  brands: ['Uniqlo', 'COS', 'Arket'],              url: 'https://www.uniqlo.com/ae/' },
      { piece: 'Straight-leg dark jeans',        price: 'AED 120–280', brands: ['Zara', 'H&M', 'Mango'],                url: 'https://www.zara.com/ae/' },
      { piece: 'White leather sneakers',         price: 'AED 200–600', brands: ['Adidas', 'Zara', 'Farfetch'],          url: 'https://www.adidas.com/ae' },
      { piece: 'Micro crossbody bag',            price: 'AED 150–380', brands: ['& Other Stories', 'Mango', 'Charles & Keith'], url: 'https://www.stories.com/' },
    ],
  },
  {
    label: 'Autumn / Winter 2025',
    title: 'DARK ACADEMIA',
    desc:  'Rich earth tones, heritage checks, layered textures — library meets runway.',
    items: [
      { piece: 'Herringbone wool blazer',        price: 'AED 299–599', brands: ['Zara', 'Mango', 'COS'],                url: 'https://www.zara.com/ae/' },
      { piece: 'Plaid midi skirt',               price: 'AED 150–320', brands: ['H&M', '& Other Stories', 'Zara'],      url: 'https://www2.hm.com/en_ae/' },
      { piece: 'Chelsea ankle boots',            price: 'AED 250–500', brands: ['Zara', 'Aldo', 'Charles & Keith'],     url: 'https://www.zara.com/ae/' },
      { piece: 'Leather belt bag',               price: 'AED 150–280', brands: ['Mango', 'Charles & Keith', 'Zara'],    url: 'https://shop.mango.com/ae' },
    ],
  },
]

const brands = [
  { name: 'Zara',            range: 'AED 49–599',    type: 'Fast fashion',    url: 'https://www.zara.com/ae/' },
  { name: 'H&M',             range: 'AED 29–399',    type: 'Everyday',        url: 'https://www2.hm.com/en_ae/' },
  { name: 'COS',             range: 'AED 150–900',   type: 'Minimal tailored',url: 'https://www.cos.com/' },
  { name: 'Mango',           range: 'AED 89–699',    type: 'Mediterranean',   url: 'https://shop.mango.com/ae' },
  { name: '& Other Stories', range: 'AED 120–600',   type: 'Curated feminine',url: 'https://www.stories.com/' },
  { name: 'Arket',           range: 'AED 200–900',   type: 'Modern utility',  url: 'https://www.arket.com/' },
  { name: 'Uniqlo',          range: 'AED 49–299',    type: 'Quality basics',  url: 'https://www.uniqlo.com/ae/' },
  { name: 'Charles & Keith', range: 'AED 120–600',   type: 'Acc & footwear',  url: 'https://www.charleskeith.com/' },
  { name: 'Aldo',            range: 'AED 150–500',   type: 'Shoes & bags',    url: 'https://www.aldoshoes.com/ae/' },
  { name: 'Net-a-Porter',    range: 'AED 500–5000+', type: 'Luxury designer', url: 'https://www.net-a-porter.com/' },
  { name: 'Farfetch',        range: 'AED 400+',      type: 'Global boutiques',url: 'https://www.farfetch.com/' },
  { name: 'Namshi',          range: 'AED 49–999',    type: 'UAE multi-brand', url: 'https://en-ae.namshi.com/' },
]

export default function ShoppingPage() {
  return (
    <main style={{ background: 'var(--ob)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav className="ob-nav">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="brand">STYLEFINDER</span>
        </Link>
        <Link href="/quiz">
          <motion.button whileHover={{ background: 'var(--gold2)' }} className="gold-btn" style={{ padding: '8px 18px', fontSize: 10 }}>
            Take quiz →
          </motion.button>
        </Link>
      </nav>

      {/* Hero */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '40px 40px 28px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 1, background: 'var(--gold)' }} />
              <span style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.24em', color: 'var(--gold)', textTransform: 'uppercase', opacity: .8 }}>Curated shopping · 2025</span>
            </div>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--white)', letterSpacing: '.04em', lineHeight: 1 }}>
              SHOP THE TRENDS
            </div>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--muted)', marginTop: 10, maxWidth: 480, lineHeight: 1.8 }}>
              Curated pieces for 2025's defining trends — every item links directly to the brand, sorted by budget range.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 40px 80px' }}>

        {/* Trend sections */}
        {trends.map((trend, ti) => (
          <motion.div
            key={trend.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            style={{ marginBottom: 24 }}
          >
            {/* Header */}
            <div style={{ background: 'var(--s1)', border: '1px solid var(--border)', borderBottom: 'none', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 8, letterSpacing: '.2em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 5 }}>{trend.label}</div>
                <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 24, color: 'var(--gold)', letterSpacing: '.06em', marginBottom: 4 }}>{trend.title}</div>
                <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--muted)', maxWidth: 400, lineHeight: 1.6 }}>{trend.desc}</div>
              </div>
              <Link href="/quiz">
                <motion.button whileHover={{ borderColor: 'var(--gold)', color: 'var(--gold)' }} className="ghost-btn" style={{ padding: '8px 18px', fontSize: 10 }}>
                  Get my look →
                </motion.button>
              </Link>
            </div>

            {/* Items */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border)' }}>
              {trend.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ii * .06 }}
                  className="ob-card"
                  style={{ padding: '18px 16px', border: 'none', borderRight: '1px solid var(--border)' }}
                >
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, fontStyle: 'italic', color: 'var(--white)', marginBottom: 6, lineHeight: 1.3 }}>
                    {item.piece}
                  </div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 10 }}>
                    {item.price}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {item.brands.map(b => (
                      <a
                        key={b}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color .15s' }}
                        onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)' }}
                        onMouseOut={e =>  { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)' }}
                      >
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--dim)', display: 'inline-block', flexShrink: 0 }} />
                        {b} ↗
                      </a>
                    ))}
                  </div>
                  <div className="card-underline" style={{ marginTop: 12 }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Brand directory */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 40, marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 18, color: 'var(--white)', letterSpacing: '.06em' }}>WHERE TO SHOP</div>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--border)' }}>
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
                className="ob-card"
                style={{ padding: '16px 18px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 'none', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
              >
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, color: 'var(--white)', marginBottom: 2 }}>{b.name}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--dim)' }}>{b.type}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 9, color: 'var(--gold)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{b.range}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: 14, color: 'var(--muted)', marginTop: 3 }}>↗</div>
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
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: 'var(--dim)', marginBottom: 18, letterSpacing: '.04em' }}>
            Want personalised outfit recommendations?
          </p>
          <Link href="/quiz">
            <motion.button whileHover={{ background: 'var(--gold2)' }} className="gold-btn" style={{ padding: '14px 40px', fontSize: 11 }}>
              Take the style quiz →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
