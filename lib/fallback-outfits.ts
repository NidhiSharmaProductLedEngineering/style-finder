export interface ShopLink {
  brand: string
  url: string
  price: string
}

export interface FallbackOutfit {
  name: string
  image: string
  occasion: string
  tags: string[]
  pieces: string[]
  shopLinks: ShopLink[]
  stylingTip: string
}

const outfitsByVibe: Record<string, FallbackOutfit[]> = {
  minimal: [
    {
      name: 'The Clean Slate',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop',
      occasion: 'Everyday & work',
      tags: ['Effortless', 'Versatile', 'Modern'],
      pieces: ['White oversized button-down shirt', 'Straight-leg dark jeans', 'White leather sneakers', 'Minimal crossbody bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 149–299' },
        { brand: 'COS', url: 'https://www.cos.com/', price: 'AED 250–450' },
        { brand: 'Uniqlo', url: 'https://www.uniqlo.com/ae/', price: 'AED 89–199' },
      ],
      stylingTip: 'Half-tuck the shirt for a relaxed, intentional look. Keep accessories to one piece only.',
    },
    {
      name: 'Monochrome Moment',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop',
      occasion: 'Work & meetings',
      tags: ['Sharp', 'Polished', 'Confident'],
      pieces: ['Fitted black turtleneck', 'High-waist tailored trousers', 'Black pointed mules', 'Structured mini tote'],
      shopLinks: [
        { brand: 'Uniqlo', url: 'https://www.uniqlo.com/ae/', price: 'AED 89–189' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 199–399' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 179–349' },
      ],
      stylingTip: 'Tone-on-tone black elongates the body. Add a thin gold belt to define the waist.',
    },
    {
      name: 'Linen Easy Set',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop',
      occasion: 'Weekend & brunch',
      tags: ['Relaxed', 'Breathable', 'Chic'],
      pieces: ['Wide-leg linen trousers in sand', 'Matching linen tank top', 'Flat leather sandals', 'Woven tote bag'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 99–199' },
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 199–350' },
        { brand: 'Arket', url: 'https://www.arket.com/', price: 'AED 299–550' },
      ],
      stylingTip: 'Match the linen pieces for a clean co-ord. Let natural textures do the talking.',
    },
    {
      name: 'Sharp Tailoring',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
      occasion: 'Office & presentations',
      tags: ['Professional', 'Sleek', 'Powerful'],
      pieces: ['Oversized blazer in ivory', 'Slim trousers', 'Simple white tee', 'Leather loafers'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 249–499' },
        { brand: 'COS', url: 'https://www.cos.com/', price: 'AED 350–650' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 189–399' },
      ],
      stylingTip: 'Roll up the blazer sleeves twice for a relaxed, intentional feel.',
    },
    {
      name: 'Minimal Evening',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop',
      occasion: 'Dinner & evenings',
      tags: ['Sleek', 'Elevated', 'Understated'],
      pieces: ['Satin slip dress in ivory', 'Strappy heeled mules', 'Delicate gold chain necklace', 'Micro evening clutch'],
      shopLinks: [
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 299–499' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 199–399' },
        { brand: 'Charles & Keith', url: 'https://www.charleskeith.com/', price: 'AED 199–350' },
      ],
      stylingTip: 'A slip dress works day to night. Add a structured blazer for a polished daytime look.',
    },
    {
      name: 'Street Minimal',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop',
      occasion: 'Casual & street',
      tags: ['Urban', 'Cool', 'Effortless'],
      pieces: ['Oversized grey hoodie', 'Wide-leg cargo trousers', 'Clean white sneakers', 'Baseball cap'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 79–199' },
        { brand: 'Uniqlo', url: 'https://www.uniqlo.com/ae/', price: 'AED 99–229' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 149–299' },
      ],
      stylingTip: 'Choose one statement oversized piece and keep everything else streamlined.',
    },
  ],
  feminine: [
    {
      name: 'Romantic Wrap',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop',
      occasion: 'Dates & dinners',
      tags: ['Romantic', 'Flattering', 'Feminine'],
      pieces: ['Floral wrap midi dress', 'Block-heeled sandals', 'Delicate gold hoops', 'Wicker clutch bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 199–349' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 249–449' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 149–299' },
      ],
      stylingTip: 'Wrap dresses cinch at the smallest point of the waist. Let the silhouette do the work.',
    },
    {
      name: 'Soft Power Suit',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop',
      occasion: 'Work & beyond',
      tags: ['Polished', 'Modern', 'Feminine'],
      pieces: ['Pastel blazer & trouser set', 'Fitted ribbed top', 'Kitten heel mules', 'Mini top-handle bag'],
      shopLinks: [
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 299–550' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 199–450' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 249–499' },
      ],
      stylingTip: 'A matching blazer and trouser in a soft colour reads feminine and powerful simultaneously.',
    },
    {
      name: 'Flowy Midi Moment',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop',
      occasion: 'Brunch & weekend',
      tags: ['Dreamy', 'Effortless', 'Fresh'],
      pieces: ['Flowy chiffon midi skirt', 'Fitted cotton crop top', 'Flat strappy sandals', 'Straw shoulder bag'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 99–229' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 149–299' },
        { brand: 'Namshi', url: 'https://en-ae.namshi.com/', price: 'AED 99–249' },
      ],
      stylingTip: 'Tuck the top fully into the skirt for definition. Add a thin belt for extra shape.',
    },
    {
      name: 'Lace & Texture',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
      occasion: 'Evenings & events',
      tags: ['Elegant', 'Luxe', 'Romantic'],
      pieces: ['Lace-trim satin blouse', 'Wide-leg tailored trousers', 'Heeled mary jane shoes', 'Beaded mini bag'],
      shopLinks: [
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 249–499' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 199–399' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 179–350' },
      ],
      stylingTip: 'Balance a feminine top with structured bottoms. The contrast is what makes it feel intentional.',
    },
    {
      name: 'Garden Party',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop',
      occasion: 'Events & weddings',
      tags: ['Occasion-ready', 'Fresh', 'Beautiful'],
      pieces: ['Floral midi dress with puff sleeves', 'Block-heeled court shoes', 'Pearl drop earrings', 'Mini structured clutch'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 249–449' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 149–299' },
        { brand: 'Net-a-Porter', url: 'https://www.net-a-porter.com/', price: 'AED 600–1800' },
      ],
      stylingTip: 'For outdoor events, choose block heels over stilettos. Comfort keeps you confident.',
    },
    {
      name: 'Feminine Denim',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop',
      occasion: 'Casual & everyday',
      tags: ['Relaxed', 'Cute', 'Versatile'],
      pieces: ['Straight-leg light wash jeans', 'Smocked floral blouse', 'White leather trainers', 'Mini croc-effect bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 149–299' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 99–199' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 129–249' },
      ],
      stylingTip: 'Tuck just the front of the blouse to show the waistband for an effortless, put-together look.',
    },
  ],
  classic: [
    {
      name: 'Parisian Power',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop',
      occasion: 'Work & office',
      tags: ['Classic', 'Chic', 'Timeless'],
      pieces: ['White crisp button-down shirt', 'Well-cut tailored trousers', 'Ballet flat shoes', 'Leather structured tote'],
      shopLinks: [
        { brand: 'Arket', url: 'https://www.arket.com/', price: 'AED 299–599' },
        { brand: 'COS', url: 'https://www.cos.com/', price: 'AED 250–450' },
        { brand: 'Uniqlo', url: 'https://www.uniqlo.com/ae/', price: 'AED 99–249' },
      ],
      stylingTip: 'The classic white shirt is your most powerful wardrobe asset. Invest in a quality one.',
    },
    {
      name: 'Trench & Turtleneck',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop',
      occasion: 'All day, everyday',
      tags: ['Heritage', 'Polished', 'Timeless'],
      pieces: ['Classic trench coat', 'Fine-knit turtleneck', 'Straight dark jeans', 'Oxford shoes'],
      shopLinks: [
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 399–699' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 299–549' },
        { brand: 'COS', url: 'https://www.cos.com/', price: 'AED 450–799' },
      ],
      stylingTip: 'A trench works over everything. Tie the belt loosely for a relaxed, editorial look.',
    },
    {
      name: 'Tailored Blazer Set',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop',
      occasion: 'Meetings & dinners',
      tags: ['Sharp', 'Authority', 'Classic'],
      pieces: ['Structured double-breasted blazer', 'Matching wide-leg trousers', 'Silk blouse', 'Leather loafers'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 349–649' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 399–699' },
        { brand: 'COS', url: 'https://www.cos.com/', price: 'AED 499–900' },
      ],
      stylingTip: 'A matching blazer-trouser set is the modern power suit. Wear the jacket open for ease.',
    },
    {
      name: 'Little Black Dress',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
      occasion: 'Evenings & events',
      tags: ['Iconic', 'Elegant', 'Evergreen'],
      pieces: ['Fitted LBD with clean lines', 'Court heels in nude or black', 'Small evening bag', 'Stud earrings'],
      shopLinks: [
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 349–699' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 249–499' },
        { brand: 'Net-a-Porter', url: 'https://www.net-a-porter.com/', price: 'AED 800–3000' },
      ],
      stylingTip: 'The LBD is not about the dress — it\'s about the accessories. Choose one statement piece.',
    },
    {
      name: 'Weekend in Paris',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop',
      occasion: 'Casual weekend',
      tags: ['Effortless', 'French-girl', 'Easy'],
      pieces: ['Striped Breton top', 'High-rise slim jeans', 'White leather trainers', 'Leather shoulder bag'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 79–179' },
        { brand: 'Uniqlo', url: 'https://www.uniqlo.com/ae/', price: 'AED 89–199' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 119–249' },
      ],
      stylingTip: 'The Breton stripe never goes out of style. Wear with minimal accessories to let it breathe.',
    },
    {
      name: 'Heritage Check',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop',
      occasion: 'Autumn & winter',
      tags: ['Heritage', 'Warm', 'Layered'],
      pieces: ['Plaid blazer or jacket', 'Camel turtleneck', 'Dark slim trousers', 'Chelsea ankle boots'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 299–599' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 349–649' },
        { brand: 'Arket', url: 'https://www.arket.com/', price: 'AED 499–899' },
      ],
      stylingTip: 'Ground a heritage check with neutral knits. Let the pattern be the focal point.',
    },
  ],
  edgy: [
    {
      name: 'Downtown Cool',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop',
      occasion: 'Everyday urban',
      tags: ['Bold', 'Modern', 'Sharp'],
      pieces: ['All-black leather jacket', 'Straight-leg black jeans', 'Chunky boots', 'Chain-strap mini bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 299–699' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 199–399' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 249–499' },
      ],
      stylingTip: 'Black on black works when you mix textures — leather, denim, and matte jersey together.',
    },
    {
      name: 'The Statement Blazer',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop',
      occasion: 'Work & going out',
      tags: ['Confident', 'Striking', 'Modern'],
      pieces: ['Oversized bold-print or neon blazer', 'Straight black trousers', 'Pointed heeled boots', 'Simple white tee underneath'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 299–549' },
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 349–599' },
        { brand: 'Farfetch', url: 'https://www.farfetch.com/', price: 'AED 600–2500' },
      ],
      stylingTip: 'One statement piece per outfit. Make the blazer the hero and keep everything else minimal.',
    },
    {
      name: 'Structured Power',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
      occasion: 'Evenings & events',
      tags: ['Dramatic', 'Powerful', 'Show-stopping'],
      pieces: ['Structured corset top', 'Wide-leg tailored trousers', 'Pointed heeled mules', 'Minimal gold cuff bracelet'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 179–349' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 199–399' },
        { brand: 'Namshi', url: 'https://en-ae.namshi.com/', price: 'AED 149–299' },
      ],
      stylingTip: 'A corset top is the boldest silhouette choice. Pair with a fluid wide-leg trouser to balance.',
    },
    {
      name: 'Moto-Inspired',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop',
      occasion: 'Casual & weekend',
      tags: ['Rebellious', 'Cool', 'Urban'],
      pieces: ['Biker jacket in black or brown', 'Band tee', 'Straight raw-hem jeans', 'Ankle boots'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 349–699' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 199–449' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 299–549' },
      ],
      stylingTip: 'Roll up the jeans once to show the boot shaft — it adds proportion and a deliberate edge.',
    },
    {
      name: 'Graphic Edge',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop',
      occasion: 'Social & casual',
      tags: ['Artistic', 'Expressive', 'Bold'],
      pieces: ['Graphic printed tee', 'Loose tailored trousers', 'Chunky platform shoes', 'Mini structured bag'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 79–249' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 99–299' },
        { brand: 'Namshi', url: 'https://en-ae.namshi.com/', price: 'AED 99–249' },
      ],
      stylingTip: 'Let the graphic tee lead. Balance it with clean, structured bottoms to avoid visual chaos.',
    },
    {
      name: 'Vinyl & Volume',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop',
      occasion: 'Nights out',
      tags: ['Night-out', 'Daring', 'Glamorous'],
      pieces: ['Vinyl or faux-leather mini skirt', 'Sheer or mesh top', 'Strappy heeled sandals', 'Tiny evening bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 149–349' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 99–249' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 179–349' },
      ],
      stylingTip: 'Sheer over a matching bra or bodysuit looks intentional. Own the transparency.',
    },
  ],
  boho: [
    {
      name: 'Earthen Layers',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop',
      occasion: 'Weekend & brunch',
      tags: ['Earthy', 'Relaxed', 'Natural'],
      pieces: ['Terracotta linen wide-leg trousers', 'Cropped knit cardigan', 'Brown leather sandals', 'Woven crossbody bag'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 99–249' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 149–299' },
        { brand: 'Namshi', url: 'https://en-ae.namshi.com/', price: 'AED 79–199' },
      ],
      stylingTip: 'Layer earthy tones within the same colour family. Add a belt for shape if needed.',
    },
    {
      name: 'Flowy Festival',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop',
      occasion: 'Casual & outdoor',
      tags: ['Free-spirited', 'Dreamy', 'Colourful'],
      pieces: ['Printed maxi dress with tiered skirt', 'Flat gladiator sandals', 'Stacked bangles', 'Fringed tote'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 149–299' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 199–349' },
        { brand: 'Namshi', url: 'https://en-ae.namshi.com/', price: 'AED 99–249' },
      ],
      stylingTip: 'With a busy print, keep footwear simple and neutral. Let the dress lead.',
    },
    {
      name: 'Desert Boho',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
      occasion: 'Travel & casual',
      tags: ['Warm', 'Textured', 'Wanderer'],
      pieces: ['Crochet or embroidered white top', 'Wide-leg rust or khaki trousers', 'Espadrille wedges', 'Rattan bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 129–299' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 79–199' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 149–299' },
      ],
      stylingTip: 'Natural materials like rattan and crochet tell a story. Mix textures freely.',
    },
    {
      name: 'Boho Work Edit',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop',
      occasion: 'Smart casual & work',
      tags: ['Creative', 'Artsy', 'Unique'],
      pieces: ['Printed blouse with volume sleeves', 'Wide-leg tailored trousers', 'Heeled ankle boots', 'Statement earrings'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 149–349' },
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 249–499' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 179–349' },
      ],
      stylingTip: 'Statement earrings can lift a simple outfit into something memorable. Invest in a great pair.',
    },
    {
      name: 'Sunset Maxi',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop',
      occasion: 'Evenings & dinners',
      tags: ['Romantic', 'Golden hour', 'Effortless'],
      pieces: ['Rust or amber maxi dress with slit', 'Heeled leather sandals', 'Hoop earrings', 'Suede mini bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 199–399' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 249–449' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 149–299' },
      ],
      stylingTip: 'A maxi with a slit gives movement without revealing too much. Walk with confidence.',
    },
    {
      name: 'Artisan Knit',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop',
      occasion: 'Everyday casual',
      tags: ['Textured', 'Handcrafted', 'Cosy'],
      pieces: ['Oversized crochet or knit vest', 'Flared jeans or corduroy trousers', 'Platform sandals', 'Leather bucket bag'],
      shopLinks: [
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 99–249' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 129–279' },
        { brand: 'Namshi', url: 'https://en-ae.namshi.com/', price: 'AED 79–199' },
      ],
      stylingTip: 'Chunky knits over a bra top with flared denim is the effortless boho signature look.',
    },
  ],
  glam: [
    {
      name: 'Red Carpet Ready',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop',
      occasion: 'Events & galas',
      tags: ['Show-stopping', 'Luxe', 'Dramatic'],
      pieces: ['Column or floor-length gown', 'Strappy heeled sandals', 'Crystal drop earrings', 'Satin clutch'],
      shopLinks: [
        { brand: 'Net-a-Porter', url: 'https://www.net-a-porter.com/', price: 'AED 900–5000' },
        { brand: 'Farfetch', url: 'https://www.farfetch.com/', price: 'AED 800–6000' },
        { brand: 'Namshi', url: 'https://en-ae.namshi.com/', price: 'AED 299–799' },
      ],
      stylingTip: 'With a statement gown, hair up is always the right choice. It shows the neckline.',
    },
    {
      name: 'Sequin Moment',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop',
      occasion: 'Party & nights out',
      tags: ['Disco', 'Festive', 'Radiant'],
      pieces: ['Sequin mini or midi dress', 'Strappy heeled sandals', 'Small metallic clutch', 'Drop earrings'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 249–549' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 299–649' },
        { brand: 'H&M', url: 'https://www2.hm.com/en_ae/', price: 'AED 199–399' },
      ],
      stylingTip: 'Sequins work day to night. For daytime, pair with a white blazer and flat sandals.',
    },
    {
      name: 'Power Silhouette',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
      occasion: 'Dinners & premieres',
      tags: ['Powerful', 'Structured', 'Elite'],
      pieces: ['Structured strapless or one-shoulder dress', 'Stiletto heels', 'Bold statement earrings', 'Tiny evening bag'],
      shopLinks: [
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 349–699' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 299–599' },
        { brand: 'Net-a-Porter', url: 'https://www.net-a-porter.com/', price: 'AED 700–3500' },
      ],
      stylingTip: 'A structured neckline requires confident posture. Stand tall and let the dress do the talking.',
    },
    {
      name: 'Velvet Luxe',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop',
      occasion: 'Formal evenings',
      tags: ['Opulent', 'Rich', 'Textured'],
      pieces: ['Velvet slip dress or blazer dress', 'Satin strappy heels', 'Chandelier earrings', 'Velvet mini bag'],
      shopLinks: [
        { brand: '& Other Stories', url: 'https://www.stories.com/', price: 'AED 399–799' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 299–599' },
        { brand: 'Farfetch', url: 'https://www.farfetch.com/', price: 'AED 500–2500' },
      ],
      stylingTip: 'Velvet absorbs light rather than reflecting it. Keep accessories metallic for contrast.',
    },
    {
      name: 'Old Hollywood',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop',
      occasion: 'Weddings & galas',
      tags: ['Timeless', 'Cinematic', 'Iconic'],
      pieces: ['Bias-cut satin gown', 'Mules with low block heel', 'Pearl or crystal jewellery', 'Silk gloves (optional)'],
      shopLinks: [
        { brand: 'Net-a-Porter', url: 'https://www.net-a-porter.com/', price: 'AED 800–4500' },
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 299–599' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 349–699' },
      ],
      stylingTip: 'A satin bias-cut moves with the body. Keep the fit true to size — never tight.',
    },
    {
      name: 'Glam Daytime',
      image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop',
      occasion: 'Brunch & daytime',
      tags: ['Elevated', 'Boss energy', 'Luxe'],
      pieces: ['Co-ord in silk or satin', 'Heeled mules', 'Gold jewellery stack', 'Designer-look mini bag'],
      shopLinks: [
        { brand: 'Zara', url: 'https://www.zara.com/ae/', price: 'AED 249–549' },
        { brand: 'Mango', url: 'https://shop.mango.com/ae', price: 'AED 299–599' },
        { brand: 'Charles & Keith', url: 'https://www.charleskeith.com/', price: 'AED 199–399' },
      ],
      stylingTip: 'Silk or satin sets look expensive but are accessible. Iron lightly or use a steamer.',
    },
  ],
}

export function getFallbackOutfits(styleVibe: string): FallbackOutfit[] {
  const vibeKey = styleVibe?.toLowerCase() ?? 'minimal'
  return outfitsByVibe[vibeKey] ?? outfitsByVibe['minimal']
}
