export interface QuizAnswers {
  bodyType: string
  styleVibe: string
  occasion: string
  colorPalette: string
  budget: string
  fit: string
}

export interface OutfitPiece {
  item: string
  brand: string
  price: string
}

export interface OutfitRecommendation {
  name: string
  pieces: OutfitPiece[]
  swatchColors: string[]
  occasion: string
  tags: string[]
  stylingTip: string
  whyItWorks: string
}

export interface ApiResponse {
  outfits: OutfitRecommendation[]
}
