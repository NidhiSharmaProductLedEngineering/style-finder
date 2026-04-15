export interface QuizOption {
  value: string
  label: string
  desc: string
}

export interface QuizStep {
  id: string
  question: string
  subtitle: string
  options: QuizOption[]
}

export const quizSteps: QuizStep[] = [
  {
    id: 'bodyType',
    question: 'What is your body type?',
    subtitle: 'We find silhouettes that flatter your natural shape',
    options: [
      { value: 'hourglass',  label: 'Hourglass',          desc: 'Balanced bust & hips, defined waist' },
      { value: 'pear',       label: 'Pear',                desc: 'Fuller hips & thighs, narrower shoulders' },
      { value: 'apple',      label: 'Apple',               desc: 'Fuller midsection, slimmer legs' },
      { value: 'rectangle',  label: 'Rectangle',           desc: 'Straight silhouette, similar bust & hips' },
      { value: 'inverted',   label: 'Inverted triangle',   desc: 'Broader shoulders, narrower hips' },
      { value: 'petite',     label: 'Petite',              desc: 'Under 5\'4" with a smaller frame' },
    ],
  },
  {
    id: 'styleVibe',
    question: 'What is your style vibe?',
    subtitle: 'Pick the aesthetic that feels most like you',
    options: [
      { value: 'minimal',   label: 'Clean minimal',     desc: 'Neutral tones, clean lines, less is more' },
      { value: 'feminine',  label: 'Feminine & soft',   desc: 'Florals, soft draping, romantic details' },
      { value: 'classic',   label: 'Timeless classic',  desc: 'Tailored, polished, enduring pieces' },
      { value: 'edgy',      label: 'Edgy & modern',     desc: 'Bold cuts, unexpected combinations' },
      { value: 'boho',      label: 'Boho & free',       desc: 'Relaxed layers, earthy textures' },
      { value: 'glam',      label: 'Glam & luxe',       desc: 'Statement pieces, elevated fabrics' },
    ],
  },
  {
    id: 'occasion',
    question: 'Where do you mostly dress for?',
    subtitle: 'Your lifestyle shapes your wardrobe',
    options: [
      { value: 'work',    label: 'Office & professional',  desc: 'Meetings, presentations, client-facing roles' },
      { value: 'casual',  label: 'Everyday casual',        desc: 'Errands, coffee dates, weekends' },
      { value: 'social',  label: 'Social & evenings',      desc: 'Dinners, brunches, events' },
      { value: 'mixed',   label: 'A mix of everything',    desc: 'I need versatile pieces across occasions' },
    ],
  },
  {
    id: 'colorPalette',
    question: 'Which color world feels most you?',
    subtitle: 'Your palette shapes every outfit we pick',
    options: [
      { value: 'neutrals', label: 'Neutrals',    desc: 'Black, white, beige, grey, camel' },
      { value: 'earth',    label: 'Earth tones', desc: 'Terracotta, rust, olive, brown' },
      { value: 'pastels',  label: 'Soft pastels', desc: 'Blush, lavender, sky, mint' },
      { value: 'bold',     label: 'Rich & bold',  desc: 'Navy, emerald, burgundy, cobalt' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your style budget?',
    subtitle: 'We suggest pieces that match your investment level',
    options: [
      { value: 'budget',     label: 'Smart shopper',    desc: 'Under AED 300 per piece — H&M, Zara' },
      { value: 'mid',        label: 'Mid-range',        desc: 'AED 300–800 — COS, Mango Premium' },
      { value: 'investment', label: 'Investment pieces', desc: 'AED 800–2,000 — Arket, quality basics' },
      { value: 'luxury',     label: 'Luxury',           desc: 'AED 2,000+ — designer and premium labels' },
    ],
  },
  {
    id: 'fit',
    question: 'How do you prefer your clothes to fit?',
    subtitle: 'Fit is the foundation of every great outfit',
    options: [
      { value: 'fitted',   label: 'Fitted & tailored',  desc: 'Clothes that define and hug your shape' },
      { value: 'relaxed',  label: 'Relaxed & easy',     desc: 'Comfortable without being oversized' },
      { value: 'oversized', label: 'Oversized & loose', desc: 'Intentionally large, fashion-forward' },
      { value: 'mix',      label: 'Mix & contrast',     desc: 'Fitted top + wide bottom, or vice versa' },
    ],
  },
]
