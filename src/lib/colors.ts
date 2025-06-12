export interface PaintFinish {
  code: string;
  description: string;
  sheenLevel: string;
  color: string;
  rgb?: string;
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
    name: "Standard Colours",
    description: "Core architectural finishes engineered for superior durability and exceptional aesthetics",
    finishes: [
      {
        code: "FWH",
        description: "Doric Pearl White",
        sheenLevel: "Gloss",
        color: "#FBFCFC",
        rgb: "rgb(251, 252, 252)",
        duluxMatch: "Dulux Vivid White™",
        lightReflectanceValue: 89,
        notes: "Premium white with exceptional coverage and UV resistance. Features advanced light-diffusing technology."
      },
      {
        code: "FPR",
        description: "Doric Primrose",
        sheenLevel: "Gloss",
        color: "#FFF8E1",
        rgb: "rgb(255, 248, 225)",
        duluxMatch: "Dulux Fair Bianca™",
        lightReflectanceValue: 85,
        notes: "Warm cream undertones ideal for heritage applications, featuring advanced UV-stable pigments and superior opacity."
      },
      {
        code: "FAG",
        description: "Doric APO Grey",
        sheenLevel: "Satin",
        color: "#9E9E9E",
        rgb: "rgb(158, 158, 158)",
        duluxMatch: "Dulux Tranquil Retreat™",
        lightReflectanceValue: 42,
        notes: "Versatile architectural grey with balanced light reflection. Engineered for consistent coverage and weathering performance."
      },
      {
        code: "FSI",
        description: "Doric Silver",
        sheenLevel: "Satin",
        color: "#C0C0C0",
        rgb: "rgb(192, 192, 192)",
        colorbondMatch: "Metallic Silver",
        lightReflectanceValue: 62,
        notes: "Premium metallic silver finish with enhanced durability. Features excellent color retention and resistance to environmental factors."
      },
      {
        code: "FWO",
        description: "Doric Woodland Grey",
        sheenLevel: "Satin",
        color: "#7A7B6D",
        rgb: "rgb(122, 123, 109)",
        colorbondMatch: "Woodland Grey®",
        lightReflectanceValue: 32,
        notes: "Sophisticated grey-green tone with excellent UV stability. Ideal for architectural features requiring subtle natural tones."
      },
      {
        code: "FSB",
        description: "Doric Custom Black",
        sheenLevel: "Satin",
        color: "#2C2C2C",
        rgb: "rgb(44, 44, 44)",
        duluxMatch: "Black Satin™",
        lightReflectanceValue: 6,
        notes: "Advanced light absorption technology with exceptional durability and a smooth, uniform finish."
      },
      {
        code: "FSBC",
        description: "Doric Black Satin",
        sheenLevel: "Satin",
        color: "#1A1A1A",
        rgb: "rgb(26, 26, 26)",
        lightReflectanceValue: 4,
        notes: "Superior coverage and excellent scratch resistance. Perfect for contemporary architectural applications."
      },
      {
        code: "FFM",
        description: "Doric Flat Matt Black",
        sheenLevel: "Matt",
        color: "#0F0F0F",
        rgb: "rgb(15, 15, 15)",
        lightReflectanceValue: 3,
        notes: "Ultra-low reflection matt black for architectural features requiring minimal light reflection."
      },
      {
        code: "FSU",
        description: "Doric Surfmist",
        sheenLevel: "Matt",
        color: "#F2F2F2",
        rgb: "rgb(242, 242, 242)",
        colorbondMatch: "Surfmist®",
        lightReflectanceValue: 78,
        notes: "Light, neutral finish with superior heat reflection properties. Perfect for large exterior surfaces and energy-efficient designs."
      },
      {
        code: "FMM",
        description: "Doric Monument",
        sheenLevel: "Matt",
        color: "#4A4A4A",
        rgb: "rgb(74, 74, 74)",
        colorbondMatch: "Monument®",
        lightReflectanceValue: 12,
        notes: "Deep, contemporary grey with excellent opacity. Provides striking contrast and architectural definition."
      }
    ]
  },
  {
    name: "Popular Colours",
    description: "Contemporary finishes designed for modern architectural applications",
    finishes: [
      {
        code: "FMG",
        description: "Doric Magnolia",
        sheenLevel: "Gloss",
        color: "#F7F5F3",
        rgb: "rgb(247, 245, 243)",
        duluxMatch: "Dulux Magnolia™",
        lightReflectanceValue: 82,
        notes: "Elegant off-white with subtle warm undertones. Features excellent coverage and self-leveling properties."
      },
      {
        code: "FBW",
        description: "Doric White Birch",
        sheenLevel: "Gloss",
        color: "#F5F5DC",
        rgb: "rgb(245, 245, 220)",
        duluxMatch: "Dulux Antique White USA™",
        lightReflectanceValue: 80,
        notes: "Warm white finish with subtle cream undertones. Features excellent coverage and self-leveling properties."
      },
      {
        code: "FJA",
        description: "Doric Jasper",
        sheenLevel: "Satin",
        color: "#B8860B",
        rgb: "rgb(184, 134, 11)",
        lightReflectanceValue: 35,
        notes: "Rich golden-brown tone with advanced color stability. Ideal for creating warm, inviting architectural features."
      },
      {
        code: "FMS",
        description: "Doric Stone Beige",
        sheenLevel: "Matt",
        color: "#D2B48C",
        rgb: "rgb(210, 180, 140)",
        lightReflectanceValue: 58,
        notes: "Natural stone-inspired finish with excellent durability. Perfect for contemporary and heritage applications."
      },
      {
        code: "FHB",
        description: "Doric Brown",
        sheenLevel: "Satin",
        color: "#8B4513",
        rgb: "rgb(139, 69, 19)",
        lightReflectanceValue: 25,
        notes: "Deep, rich brown with superior color depth. Features excellent weathering and fade resistance."
      },
      {
        code: "FDG",
        description: "Doric Dark Grey",
        sheenLevel: "Matt",
        color: "#696969",
        rgb: "rgb(105, 105, 105)",
        lightReflectanceValue: 20,
        notes: "Deep charcoal finish with excellent coverage. Ideal for creating bold architectural statements."
      },
      {
        code: "FNC",
        description: "Doric Charcoal",
        sheenLevel: "Satin",
        color: "#36454F",
        rgb: "rgb(54, 69, 79)",
        lightReflectanceValue: 15,
        notes: "Premium charcoal finish with advanced mar resistance. Perfect for high-traffic architectural elements."
      },
      {
        code: "FUS",
        description: "Doric Ultra Silver",
        sheenLevel: "Satin",
        color: "#BCC6CC",
        rgb: "rgb(188, 198, 204)",
        lightReflectanceValue: 65,
        notes: "High-performance metallic silver with exceptional brightness. Features superior scratch and wear resistance."
      },
      {
        code: "FAV",
        description: "Doric Silver Grey",
        sheenLevel: "Matt",
        color: "#A8A8A8",
        rgb: "rgb(168, 168, 168)",
        lightReflectanceValue: 45,
        notes: "Versatile grey with balanced reflectivity. Excellent for modern architectural applications."
      },
      {
        code: "FME",
        description: "Doric Merino",
        sheenLevel: "Satin",
        color: "#F5F5DC",
        rgb: "rgb(245, 245, 220)",
        duluxMatch: "Dulux Merino™",
        lightReflectanceValue: 80,
        notes: "Soft, neutral white with excellent coverage. Features advanced stain resistance and easy maintenance."
      },
      {
        code: "FDU",
        description: "Doric Dune",
        sheenLevel: "Satin",
        color: "#C19A6B",
        rgb: "rgb(193, 154, 107)",
        lightReflectanceValue: 48,
        notes: "Warm sandy tone with excellent color stability. Perfect for creating natural, earthy aesthetics."
      }
    ]
  },
  {
    name: "Pearl Finishes",
    description: "Premium metallic finishes with advanced light-reflecting properties",
    finishes: [
      {
        code: "FCI",
        description: "Doric Citi Pearl",
        sheenLevel: "Pearl Matt",
        color: "#E8E8E8",
        rgb: "rgb(232, 232, 232)",
        lightReflectanceValue: 70,
        notes: "Sophisticated pearl finish with subtle metallic undertones. Features advanced light-diffusing technology."
      },
      {
        code: "FIP",
        description: "Doric Silver Pearl",
        sheenLevel: "Pearl Satin",
        color: "#C0C0C0",
        rgb: "rgb(192, 192, 192)",
        duluxMatch: "Silver Pearl™",
        lightReflectanceValue: 65,
        notes: "High-performance metallic finish with advanced light-diffusing technology. Provides exceptional depth and shimmer."
      },
      {
        code: "FMU",
        description: "Doric Metallic Pearl",
        sheenLevel: "Pearl Matt",
        color: "#D4AF37",
        rgb: "rgb(212, 175, 55)",
        lightReflectanceValue: 45,
        notes: "Premium metallic finish with advanced color-shift technology. Delivers rich metallic appearance with durability."
      },
      {
        code: "FEP",
        description: "Doric Pewter Pearl",
        sheenLevel: "Pearl Satin",
        color: "#8B8680",
        rgb: "rgb(139, 134, 128)",
        lightReflectanceValue: 35,
        notes: "Sophisticated pewter finish with subtle pearl undertones. Perfect for contemporary architectural applications."
      }
    ]
  },
  {
    name: "Texture Finishes",
    description: "Specialized coatings with unique tactile and visual properties",
    finishes: [
      {
        code: "FPT",
        description: "Doric Pearl White Texture",
        sheenLevel: "Matt",
        color: "#FAFAFA",
        rgb: "rgb(250, 250, 250)",
        lightReflectanceValue: 85,
        notes: "Advanced textured finish with integrated aggregate technology. Provides excellent surface hiding and weathering properties."
      },
      {
        code: "FST",
        description: "Doric Silver Texture",
        sheenLevel: "Matt",
        color: "#C0C0C0",
        rgb: "rgb(192, 192, 192)",
        lightReflectanceValue: 60,
        notes: "Sophisticated textured silver finish with enhanced durability. Features unique tactile properties and excellent UV resistance."
      },
      {
        code: "FMB",
        description: "Doric Monument Texture",
        sheenLevel: "Matt",
        color: "#4A4A4A",
        rgb: "rgb(74, 74, 74)",
        lightReflectanceValue: 12,
        notes: "Deep textured grey with excellent opacity and superior weathering properties. Perfect for architectural features."
      },
      {
        code: "FEB",
        description: "Doric Ebony Black Texture",
        sheenLevel: "Matt",
        color: "#1C1C1C",
        rgb: "rgb(28, 28, 28)",
        lightReflectanceValue: 4,
        notes: "Ultra-deep black textured finish with advanced light absorption. Features exceptional durability and tactile properties."
      }
    ]
  },
  {
    name: "Chrome Finishes",
    description: "High-performance metallic finishes for premium applications",
    finishes: [
      {
        code: "FHC",
        description: "Shadow Chrome Matt",
        sheenLevel: "Matt",
        color: "#A8A8A8",
        rgb: "rgb(168, 168, 168)",
        lightReflectanceValue: 45,
        notes: "Sophisticated chrome effect with matte finish. Features advanced metallic pigments and superior scratch resistance."
      },
      {
        code: "FLC",
        description: "Classic Chrome Matt",
        sheenLevel: "Matt",
        color: "#B8B8B8",
        rgb: "rgb(184, 184, 184)",
        lightReflectanceValue: 55,
        notes: "Traditional chrome finish with modern durability. Provides excellent reflectivity and superior color stability."
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