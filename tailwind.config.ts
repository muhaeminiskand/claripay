// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Dark Blue
          light: '#3B82F6',   // Light Blue
        },
        secondary: {
          DEFAULT: '#0D9488', // Teal
          light: '#14B8A6',   // Light Teal
        },
        accent: {
          service1: '#FBBF24', // Accent color for Service 1
          service2: '#FCA5A1', // Accent color for Service 2
          service3: '#818CF8', // Accent color for Service 3
        },
        background: {
          DEFAULT: '#1F2937',  // Background color for dark mode
        },
        text: {
          DEFAULT: '#FFFFFF',   // Text color for dark mode
        }
      }
    }
  }
}

export default config
