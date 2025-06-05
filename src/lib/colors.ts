export interface PaintFinish {
  code: string;
  description: string;
  sheenLevel: string;
  color: string;
  duluxMatch?: string;
  colorbondMatch?: string;
  lightReflectanceValue?: number;
  notes?: string;
}

export interface ColorGroup {
  name: string;
  description: string;
  finishes: PaintFinish[];
}

export const paintFinishes: ColorGroup[] = [
  {
    name: "Standard Colors",
    description: "Core architectural finishes engineered for superior durability and exceptional aesthetics",
    finishes: [
      {
        code: "FWH",
        description: "Doric Pearl White",
        sheenLevel: "Gloss",
        color: "#FFFFFF",
        duluxMatch: "Dulux Vivid White™",
        lightReflectanceValue: 89,
        notes: "Premium white with exceptional coverage and UV resistance, featuring advanced light-diffusing technology for a flawless, uniform appearance. Ideal for architectural facades and high-visibility areas."
      },
      {
        code: "FPR",
        description: "Doric Primrose",
        sheenLevel: "Gloss",
        color: "#FFFBE6",
        duluxMatch: "Dulux Fair Bianca™",
        lightReflectanceValue: 85,
        notes: "Warm undertones ideal for heritage applications, featuring advanced UV-stable pigments and superior opacity. Provides excellent coverage with self-leveling properties."
      },
      {
        code: "FAG",
        description: "Doric APO Grey",
        sheenLevel: "Satin",
        color: "#A8A8A8",
        duluxMatch: "Dulux Tranquil Retreat™",
        colorbondMatch: "Shale Grey™",
        lightReflectanceValue: 45,
        notes: "Versatile architectural grey with balanced light reflection properties. Engineered for consistent coverage and excellent weathering performance."
      },
      {
        code: "FSI",
        description: "Doric Silver",
        sheenLevel: "Satin",
        color: "#C0C0C0",
        colorbondMatch: "Metallic Silver",
        lightReflectanceValue: 62,
        notes: "Premium metallic silver finish with enhanced durability. Features excellent color retention and resistance to environmental factors."
      },
      {
        code: "FWO",
        description: "Doric Woodland Grey",
        sheenLevel: "Satin",
        color: "#8B8B83",
        colorbondMatch: "Woodland Grey®",
        lightReflectanceValue: 35,
        notes: "Sophisticated grey-green tone with excellent UV stability. Ideal for architectural features requiring subtle natural tones."
      },
      {
        code: "FSB",
        description: "Doric Satin Black",
        sheenLevel: "Satin",
        color: "#1C1C1C",
        duluxMatch: "Black Satin™",
        lightReflectanceValue: 4.58,
        notes: "Rich, sleek satin black with advanced light absorption technology. Features exceptional durability and a smooth, uniform finish that resists fingerprints and marks."
      },
      {
        code: "FFM",
        description: "Doric Flat Matt Black",
        sheenLevel: "Matt",
        color: "#0D0D0D",
        lightReflectanceValue: 3,
        notes: "Ultra-low reflection for architectural features"
      },
      {
        code: "FSU",
        description: "Doric Surfmist",
        sheenLevel: "Matt",
        color: "#E6E6E6",
        colorbondMatch: "Surfmist®",
        lightReflectanceValue: 80,
        notes: "Light, neutral finish with superior heat reflection properties. Perfect for large exterior surfaces and energy-efficient designs."
      },
      {
        code: "FMM",
        description: "Doric Monument",
        sheenLevel: "Matt",
        color: "#4A4A4A",
        colorbondMatch: "Monument®",
        lightReflectanceValue: 12,
        notes: "Deep, contemporary grey with excellent opacity. Provides striking contrast and architectural definition."
      }
    ]
  },
  {
    name: "Popular Colors",
    description: "Contemporary finishes designed for modern architectural applications",
    finishes: [
      {
        code: "FMG",
        description: "Doric Monument Grey",
        sheenLevel: "Satin",
        color: "#7C7C7C",
        duluxMatch: "Monument™",
        lightReflectanceValue: 25,
        notes: "Premium architectural grey with advanced color stability and weather resistance. Engineered for superior coverage and excellent touch-up properties."
      },
      {
        code: "FBW",
        description: "Doric White Birch",
        sheenLevel: "Gloss",
        color: "#F5F5DC",
        duluxMatch: "Dulux Antique White USA™",
        lightReflectanceValue: 80,
        notes: "Warm white finish with subtle cream undertones. Features excellent coverage and self-leveling properties."
      },
      {
        code: "FJA",
        description: "Doric Jasper",
        sheenLevel: "Satin",
        color: "#D2691E",
        lightReflectanceValue: 38,
        notes: "Rich terracotta tone with advanced color stability. Ideal for creating warm, inviting architectural features."
      },
      {
        code: "FMS",
        description: "Doric Stone Beige",
        sheenLevel: "Matt",
        color: "#D2B48C",
        lightReflectanceValue: 58,
        notes: "Natural stone-inspired finish with excellent durability. Perfect for contemporary and heritage applications."
      },
      {
        code: "FHB",
        description: "Doric Brown",
        sheenLevel: "Satin",
        color: "#8B4513",
        lightReflectanceValue: 25,
        notes: "Deep, rich brown with superior color depth. Features excellent weathering and fade resistance."
      },
      {
        code: "FDG",
        description: "Doric Dark Grey",
        sheenLevel: "Matt",
        color: "#696969",
        lightReflectanceValue: 20,
        notes: "Deep charcoal finish with excellent coverage. Ideal for creating bold architectural statements."
      },
      {
        code: "FNC",
        description: "Doric Charcoal",
        sheenLevel: "Satin",
        color: "#36454F",
        lightReflectanceValue: 15,
        notes: "Premium charcoal finish with advanced mar resistance. Perfect for high-traffic architectural elements."
      },
      {
        code: "FUS",
        description: "Doric Ultra Silver",
        sheenLevel: "Satin",
        color: "#BCC6CC",
        lightReflectanceValue: 65,
        notes: "High-performance metallic silver with exceptional brightness. Features superior scratch and wear resistance."
      },
      {
        code: "FAV",
        description: "Doric Silver Grey",
        sheenLevel: "Matt",
        color: "#A8A8A8",
        lightReflectanceValue: 45,
        notes: "Versatile grey with balanced reflectivity. Excellent for modern architectural applications."
      },
      {
        code: "FME",
        description: "Doric Merino",
        sheenLevel: "Satin",
        color: "#F5F5DC",
        duluxMatch: "Dulux Merino™",
        lightReflectanceValue: 80,
        notes: "Soft, neutral white with excellent coverage. Features advanced stain resistance and easy maintenance."
      },
      {
        code: "FDU",
        description: "Doric Dune",
        sheenLevel: "Satin",
        color: "#C19A6B",
        lightReflectanceValue: 48,
        notes: "Warm sandy tone with excellent color stability. Perfect for creating natural, earthy aesthetics."
      },
      {
        code: "FPB",
        description: "Doric Pearl Bronze",
        sheenLevel: "Pearl",
        color: "#5C4E42",
        duluxMatch: "Bronze Pearl™",
        lightReflectanceValue: 18,
        notes: "Sophisticated metallic finish with advanced pearl pigments for depth and dimension. Features excellent mar resistance and color retention."
      }
    ]
  },
  {
    name: "Pearl Finishes",
    description: "Premium metallic finishes with advanced light-reflecting properties",
    finishes: [
      {
        code: "FPS",
        description: "Doric Pearl Silver",
        sheenLevel: "Pearl",
        color: "#E8E8E8",
        duluxMatch: "Silver Pearl™",
        lightReflectanceValue: 75,
        notes: "High-performance metallic finish with advanced light-diffusing technology. Provides exceptional depth and a sophisticated shimmering effect."
      },
      {
        code: "FPG",
        description: "Doric Pearl Gold",
        sheenLevel: "Pearl",
        color: "#C5B358",
        duluxMatch: "Gold Pearl™",
        lightReflectanceValue: 55,
        notes: "Premium metallic finish featuring advanced color-shift technology. Delivers a rich, warm golden appearance with excellent durability."
      }
    ]
  },
  {
    name: "Texture Finishes",
    description: "Specialized coatings with unique tactile and visual properties",
    finishes: [
      {
        code: "FTS",
        description: "Doric Texture Stone",
        sheenLevel: "Matt",
        color: "#D2D2D2",
        duluxMatch: "Stone Effect™",
        lightReflectanceValue: 65,
        notes: "Advanced textured finish with integrated aggregate technology. Provides excellent surface hiding and weathering properties."
      },
      {
        code: "FTR",
        description: "Doric Texture Ripple",
        sheenLevel: "Matt",
        color: "#E5E5E5",
        duluxMatch: "Ripple Effect™",
        lightReflectanceValue: 70,
        notes: "Unique ripple-effect finish with self-leveling properties. Features excellent durability and UV resistance."
      }
    ]
  },
  {
    name: "Chrome Finishes",
    description: "High-performance metallic finishes for premium applications",
    finishes: [
      {
        code: "FCP",
        description: "Doric Chrome Polished",
        sheenLevel: "High Gloss",
        color: "#E8E8E8",
        duluxMatch: "Chrome Effect™",
        lightReflectanceValue: 85,
        notes: "Ultra-high gloss chrome finish with advanced metallic pigments. Provides exceptional reflectivity and superior scratch resistance."
      },
      {
        code: "FCB",
        description: "Doric Chrome Brushed",
        sheenLevel: "Satin",
        color: "#D4D4D4",
        duluxMatch: "Brushed Metal™",
        lightReflectanceValue: 65,
        notes: "Sophisticated brushed metal effect with directional grain technology. Features excellent mar resistance and color stability."
      }
    ]
  }
];

export const getColorGroup = (groupName: string): ColorGroup | undefined => {
  return paintFinishes.find(group => group.name === groupName);
};

export const getFinishByCode = (code: string): PaintFinish | undefined => {
  for (const group of paintFinishes) {
    const finish = group.finishes.find(f => f.code === code);
    if (finish) return finish;
  }
  return undefined;
};

export const getSimilarColors = (code: string): PaintFinish[] => {
  const finish = getFinishByCode(code);
  if (!finish) return [];
  
  // Convert hex to RGB and calculate color similarity
  const rgb = hexToRgb(finish.color);
  if (!rgb) return [];

  const similar: PaintFinish[] = [];
  for (const group of paintFinishes) {
    for (const f of group.finishes) {
      if (f.code === code) continue;
      const otherRgb = hexToRgb(f.color);
      if (otherRgb && isColorSimilar(rgb, otherRgb)) {
        similar.push(f);
      }
    }
  }
  return similar;
};

// Helper functions for color manipulation
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const isColorSimilar = (
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number }
): boolean => {
  const threshold = 30; // Adjust this value to change similarity sensitivity
  return Math.abs(color1.r - color2.r) < threshold &&
         Math.abs(color1.g - color2.g) < threshold &&
         Math.abs(color1.b - color2.b) < threshold;
}; 