import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const body = await req.json() as Record<string, string>
  const { bodyType, styleVibe, occasion, colorPalette, budget, fit } = body

  const budgetMap: Record<string, string> = {
    budget:     'under AED 300 per piece — H&M, Zara, Mango',
    mid:        'AED 300–800 per piece — COS, & Other Stories, Mango Premium',
    investment: 'AED 800–2,000 per piece — Arket, Toteme, quality investment pieces',
    luxury:     'AED 2,000+ per piece — designer labels like Jacquemus, The Row',
  }

  const prompt = `You are a world-class personal stylist based in Dubai. Generate 6 personalised outfit recommendations.

Style Profile:
- Body type: ${bodyType}
- Style vibe: ${styleVibe}
- Primary occasion: ${occasion}
- Color palette: ${colorPalette}
- Budget: ${budgetMap[budget] ?? budget}
- Preferred fit: ${fit}

Return ONLY a valid JSON object with no markdown, no preamble, no backticks. Use this exact structure:
{
  "outfits": [
    {
      "name": "Short evocative outfit name",
      "pieces": [
        { "item": "Specific item description", "brand": "Brand name", "price": "AED XXX–XXX" }
      ],
      "swatchColors": ["#hex1", "#hex2", "#hex3", "#hex4"],
      "occasion": "When and where to wear this",
      "tags": ["Tag1", "Tag2", "Tag3"],
      "stylingTip": "One concrete, specific styling tip",
      "whyItWorks": "Why this works for their specific body type and vibe"
    }
  ]
}

Rules:
- Generate exactly 6 outfits
- Each outfit has exactly 4 pieces and exactly 4 swatchColors
- swatchColors must be real hex codes matching the suggested color palette
- pieces must include item, brand, and price fields
- brands must be realistic for the budget range
- tags: exactly 2–3 short words per tag
- stylingTip: specific and actionable, not generic
- whyItWorks: mention their body type explicitly`

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    })

    const block = response.content[0]
    if (block.type !== 'text') {
      return NextResponse.json({ error: 'Unexpected response type' }, { status: 500 })
    }

    const text    = block.text.trim()
    const jsonStr = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
    const parsed  = JSON.parse(jsonStr)

    return NextResponse.json(parsed)
  } catch (err) {
    console.error('Recommend error:', err)
    return NextResponse.json({ error: 'Failed to generate recommendations' }, { status: 500 })
  }
}
