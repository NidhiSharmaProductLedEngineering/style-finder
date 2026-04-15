'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { quizSteps } from '@/lib/quiz-data'
import type { QuizAnswers } from '@/lib/types'

const variants = {
  enter:  { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0,  transition: { duration: .35, ease: 'easeOut' } },
  exit:   { opacity: 0, x: -24, transition: { duration: .22 } },
}

const item = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: .28 } },
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

  return (
    <main style={{ background: 'var(--white)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid var(--gray-100)', padding: '0 40px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <button onClick={goBack} style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-400)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ← Back
        </button>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 400, letterSpacing: '0.08em', color: 'var(--black)', textTransform: 'uppercase' }}>
            STYLE<span style={{ fontWeight: 300, fontStyle: 'italic' }}>finder</span>
          </span>
        </Link>
        <span style={{ fontFamily: 'DM Sans', fontSize: 11, color: 'var(--gray-300)', letterSpacing: '0.08em' }}>
          {step + 1} / {quizSteps.length}
        </span>
      </nav>

      {/* Progress */}
      <div style={{ height: 2, background: 'var(--gray-100)' }}>
        <motion.div
          style={{ height: '100%', background: 'var(--black)' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: .5, ease: 'easeOut' }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, maxWidth: 680, margin: '0 auto', width: '100%', padding: '48px 24px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={step} variants={variants} initial="enter" animate="center" exit="exit">

            {/* Question */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.24em', color: 'var(--gray-300)', textTransform: 'uppercase', marginBottom: 12 }}>
                Step {step + 1} of {quizSteps.length}
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 400, color: 'var(--black)', marginBottom: 8, lineHeight: 1.2 }}>
                {current.question}
              </h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: 'var(--gray-400)', lineHeight: 1.6 }}>
                {current.subtitle}
              </p>
            </div>

            {/* Options */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: .06 } } }}
              initial="hidden"
              animate="visible"
              style={{ display: 'grid', gridTemplateColumns: current.options.length === 4 ? '1fr 1fr' : 'repeat(3,1fr)', gap: 1, background: 'var(--gray-100)', marginBottom: 28 }}
            >
              {current.options.map(opt => {
                const isSelected = selected === opt.value
                return (
                  <motion.button
                    key={opt.value}
                    variants={item}
                    onClick={() => pick(opt.value)}
                    whileHover={{ background: isSelected ? 'var(--black)' : 'var(--gray-50)' }}
                    style={{
                      textAlign: 'left',
                      padding: '24px 20px',
                      background:   isSelected ? 'var(--black)'   : 'var(--white)',
                      border:       'none',
                      cursor:       'pointer',
                      transition:   'background .18s',
                    }}
                  >
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 400, color: isSelected ? 'var(--white)' : 'var(--black)', marginBottom: 6 }}>
                      {opt.label}
                    </div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 11, color: isSelected ? 'var(--gray-300)' : 'var(--gray-400)', lineHeight: 1.5 }}>
                      {opt.desc}
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ marginTop: 10, width: 16, height: 16, borderRadius: '50%', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--black)' }} />
                      </motion.div>
                    )}
                  </motion.button>
                )
              })}
            </motion.div>

            {/* Continue */}
            <motion.button
              onClick={goNext}
              disabled={!selected}
              whileHover={selected ? { background: 'var(--gray-900)' } : {}}
              whileTap={selected ? { scale: .98 } : {}}
              style={{
                width: '100%',
                padding: '16px',
                background: selected ? 'var(--black)' : 'var(--gray-100)',
                color:      selected ? 'var(--white)' : 'var(--gray-300)',
                border:     'none',
                fontFamily: 'DM Sans',
                fontSize:   11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor:     selected ? 'pointer' : 'not-allowed',
                transition: 'background .2s',
              }}
            >
              {step === quizSteps.length - 1 ? 'Get my lookbook →' : 'Continue →'}
            </motion.button>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 24 }}>
              {quizSteps.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width:        i === step ? 20 : 6,
                    height:       6,
                    borderRadius: i === step ? 3 : '50%',
                    background:   i === step ? 'var(--black)' : i < step ? 'var(--gray-300)' : 'var(--gray-100)',
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
