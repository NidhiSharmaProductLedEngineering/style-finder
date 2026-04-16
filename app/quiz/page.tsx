'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { quizSteps } from '@/lib/quiz-data'
import type { QuizAnswers } from '@/lib/types'

const slide = {
  enter:  { opacity: 0, x: 32 },
  center: { opacity: 1, x: 0,   transition: { duration: .35, ease: 'easeOut' } },
  exit:   { opacity: 0, x: -24, transition: { duration: .22 } },
}

const item = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0,  transition: { duration: .28 } },
}

export default function QuizPage() {
  const router = useRouter()
  const [step, setStep]       = useState(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})

  const current  = quizSteps[step]
  const selected = answers[current.id as keyof QuizAnswers]
  const progress = ((step + 1) / quizSteps.length) * 100

  const pick = (value: string) =>
    setAnswers(prev => ({ ...prev, [current.id]: value }))

  const goNext = () => {
    if (!selected) return
    if (step < quizSteps.length - 1) {
      setStep(s => s + 1)
    } else {
      const params = new URLSearchParams(answers as Record<string, string>)
      router.push(`/results?${params.toString()}`)
    }
  }

  const goBack = () => {
    if (step > 0) setStep(s => s - 1)
    else router.push('/')
  }

  const is4Col = current.options.length <= 4

  return (
    <main style={{ background: 'var(--ob)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <nav className="ob-nav">
        <button
          onClick={goBack}
          style={{ fontFamily: 'DM Sans', fontSize: 10, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '.14em', textTransform: 'uppercase' }}
        >
          ← Back
        </button>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="brand">STYLEFINDER</span>
        </Link>
        <span style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--dim)', letterSpacing: '.06em', fontVariantNumeric: 'tabular-nums' }}>
          {String(step + 1).padStart(2, '0')} / {String(quizSteps.length).padStart(2, '0')}
        </span>
      </nav>

      {/* Gold progress bar */}
      <div style={{ height: 2, background: 'var(--s3)' }}>
        <motion.div
          style={{ height: '100%', background: 'var(--gold)', transformOrigin: 'left' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: .45, ease: 'easeOut' }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, maxWidth: 700, margin: '0 auto', width: '100%', padding: '48px 24px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={step} variants={slide} initial="enter" animate="center" exit="exit">

            {/* Question */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 9, letterSpacing: '.24em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 12, opacity: .8 }}>
                Step {String(step + 1).padStart(2, '0')} of {quizSteps.length}
              </div>
              <h2 style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: 'clamp(1.8rem,5vw,3rem)', color: 'var(--white)', letterSpacing: '.03em', lineHeight: 1.05, marginBottom: 8 }}>
                {current.question}
              </h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                {current.subtitle}
              </p>
            </div>

            {/* Options grid */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: .06 } } }}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: is4Col ? '1fr 1fr' : 'repeat(3,1fr)',
                gap: 1,
                background: 'var(--border)',
                marginBottom: 24,
              }}
            >
              {current.options.map(opt => {
                const isSel = selected === opt.value
                return (
                  <motion.button
                    key={opt.value}
                    variants={item}
                    onClick={() => pick(opt.value)}
                    style={{
                      textAlign:  'left',
                      padding:    '20px 18px',
                      background: isSel ? 'var(--s3)' : 'var(--s2)',
                      border:     isSel ? '1px solid var(--gold)' : '1px solid transparent',
                      cursor:     'pointer',
                      transition: 'all .18s',
                      position:   'relative',
                    }}
                    whileHover={{ background: 'var(--s3)' }}
                    whileTap={{ scale: .98 }}
                  >
                    {/* Selection dot */}
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      border:  `1px solid ${isSel ? 'var(--gold)' : 'var(--dim)'}`,
                      background: isSel ? 'var(--gold)' : 'transparent',
                      marginBottom: 12,
                      transition: 'all .18s',
                    }} />
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontStyle: 'italic', color: isSel ? 'var(--white)' : 'var(--muted)', marginBottom: 4, transition: 'color .18s' }}>
                      {opt.label}
                    </div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--dim)', lineHeight: 1.45 }}>
                      {opt.desc}
                    </div>
                    {isSel && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'var(--gold)' }} />
                    )}
                  </motion.button>
                )
              })}
            </motion.div>

            {/* Continue */}
            <motion.button
              onClick={goNext}
              disabled={!selected}
              whileHover={selected ? { background: 'var(--gold2)' } : {}}
              whileTap={selected ? { scale: .98 } : {}}
              style={{
                width:          '100%',
                padding:        '16px',
                background:     selected ? 'var(--gold)' : 'var(--s2)',
                color:          selected ? 'var(--ob)'   : 'var(--dim)',
                border:         `1px solid ${selected ? 'var(--gold)' : 'var(--s3)'}`,
                fontFamily:     '"Bebas Neue", sans-serif',
                fontSize:       18,
                letterSpacing:  '.14em',
                cursor:         selected ? 'pointer' : 'not-allowed',
                transition:     'all .2s',
              }}
            >
              {step === quizSteps.length - 1 ? 'GET MY LOOKBOOK →' : 'CONTINUE →'}
            </motion.button>

            {/* Step dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 24 }}>
              {quizSteps.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width:        i === step ? 20 : 5,
                    height:       3,
                    borderRadius: 2,
                    background:   i === step ? 'var(--gold)' : i < step ? 'var(--dim)' : 'var(--s3)',
                    transition:   'all .3s',
                  }}
                />
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
