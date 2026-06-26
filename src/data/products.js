// =============================================
// Lumeira Handcrafted Candles
// Product Catalog
// Version: 1.0.0
// =============================================

const products = [
  {
    id: 1,
    slug: "pillar-candle",
    name: "Pillar Candle",
    category: "Signature",
    image: "/images/products/pillar-candles.png",

    prices: [
      {
        label: "Small",
        value: 15
      },
      {
        label: "Large",
        value: 22
      },
      {
        label: "Bundle",
        value: 35
      }
    ],

    shortDescription:
      "Elegant handcrafted pillar candle perfect for gifting and home décor.",

    featured: true,
    badge: "Bundle"
  },

  {
    id: 2,
    slug: "boat-candle",
    name: "Boat Candle",
    category: "Decorative",
    image: "/images/products/hero.png",

    prices: [
      {
        label: "Standard",
        value: 35
      }
    ],

    shortDescription:
      "A beautiful bundle of handcrafted pillar candles.",

    featured: true,
  },

  {
    id: 3,
    slug: "mini-bouquet",
    name: "Mini Bouquet",
    category: "Bouquets",
    image: "/images/products/mini-bouquet.png",

    prices: [
      {
        label: "Single",
        value: 12
      }
    ],

    shortDescription:
      "A charming floral-inspired candle bouquet.",

    featured: false
  },

  {
    id: 4,
    slug: "pot-bouquet",
    name: "Reusable Pot Bouquet",
    category: "Bouquets",
    image: "/images/products/pot-bouquet.png",

    prices: [
      {
        label: "Single",
        value: 22
      }
    ],

    shortDescription:
      "Reusable decorative candle bouquet in an elegant pot.",

    featured: false
  },

  {
    id: 5,
    slug: "bouquet-box",
    name: "Bouquet Box",
    category: "Bouquets",
    image: "/images/products/bouquet-box.png",

    prices: [
      {
        label: "One Box",
        value: 22
      }
    ],

    shortDescription:
      "A luxury boxed candle bouquet ready for gifting."
  },

  {
    id: 6,
    slug: "rainbow-candle",
    name: "Rainbow Candle",
    category: "Decorative",
    image: "/images/products/rainbow-candle.png",

    prices: [
      {
        label: "Standard",
        value: 18
      }
    ],

    shortDescription:
      "Modern rainbow-shaped decorative candle."
  },

  {
    id: 7,
    slug: "teddy-bear",
    name: "Teddy Bear Candle",
    category: "Decorative",
    image: "/images/products/teddy.png",

    prices: [
      {
        label: "Single",
        value: 7
      }
    ],

    shortDescription:
      "Cute handcrafted teddy bear candle."
  },

  {
    id: 8,
    slug: "bowl-candle",
    name: "Bowl Candle",
    category: "Decorative",
    image: "/images/products/bowl.png",

    prices: [
      {
        label: "Standard",
        value: 25
      }
    ],

    shortDescription:
      "Luxury bowl candle with elegant finish.",
    featured: false
  },

  {
    id: 9,
    slug: "boat-candle",
    name: "Boat Candle",
    category: "Decorative",
    image: "/images/products/hero.png",

    prices: [
      {
        label: "Standard",
        value: 35
      }
    ],

    shortDescription:
      "Premium handcrafted boat candle."
  },

  {
    id: 10,
    slug: "red-pillar-pair",
    name: "Red Pillar Candle Pair",
    category: "Signature",
    image: "/images/products/red-pillar.png",

    prices: [
      {
        label: "Pair",
        value: 18
      }
    ],

    shortDescription:
      "Decorative pair of handcrafted red pillar candles."
  },

  {
    id: 11,
    slug: "ribbed-taper-candle",
    name: "Ribbed Taper + Bubble Candle",
    category: "Decorative",
    image: "/images/products/scented-ribbed.png",

    prices: [
      {
        label: "Single Ribbed Taper",
        value: 8
      },
      {
        label: "Ribbed Taper Pair",
        value: 15
      },
      {
        label: "Bubble Candle",
        value: 9
      }
    ],

    shortDescription:
      "Minimalist bubble candle.",
    badge: "Bundle",
    featured: true
  },

  {
    id: 12,
    slug: "knot-candle",
    name: "Knot Candle",
    category: "Decorative",
    image: "/images/products/knot.png",

    prices: [
      {
        label: "Small",
        value: 13
      }
    ],

    shortDescription:
      "Modern knot candle with elegant styling."
  },

  {
    id: 13,
    slug: "geometric-candle",
    name: "Geometric Candle",
    category: "Decorative",
    image: "/images/products/geometric.png",

    prices: [
      {
        label: "Medium",
        value: 22
      },
      {
        label: "Large",
        value: 35
      },
      {
        label: "Bundle",
        value: 52
      }
    ],

    shortDescription:
      "Luxury geometric decorative candle.",
    badge: "Bundle"
  },

  {
    id: 14,
    slug: "french-taper",
    name: "French Taper Candles",
    category: "Dining",

    image: "/images/products/french-taper.png",

    prices: [
      {
        label: "Pair",
        value: 12
      }
    ],

    shortDescription:
      "Elegant French taper candles."
  }
];

export default products;