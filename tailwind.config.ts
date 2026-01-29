import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Premium Color System - Deep Navy, Pure White, Gold Accent
        navy: {
          50: '#f8fafc',   // Lightest hint (backgrounds)
          100: '#f1f5f9',  // Very light (subtle backgrounds)
          200: '#e2e8f0',  // Light (borders, disabled states)
          300: '#cbd5e1',  // Medium light (muted text)
          400: '#94a3b8',  // Medium (secondary text)
          500: '#64748b',  // Base gray (body text)
          600: '#475569',  // Dark gray (important text)
          700: '#334155',  // Darker (headings)
          800: '#1e293b',  // Very dark (strong emphasis)
          900: '#0f172a',  // Near black (primary dark)
          950: '#020617',  // True black (maximum contrast)
        },
        gold: {
          50: '#fffbeb',   // Lightest tint
          100: '#fef3c7',  // Very light
          200: '#fde68a',  // Light
          300: '#fcd34d',  // Medium light
          400: '#fbbf24',  // Base gold (primary accent)
          500: '#f59e0b',  // Rich gold (hover states)
          600: '#d97706',  // Dark gold (active states)
          700: '#b45309',  // Darker
          800: '#92400e',  // Very dark
          900: '#78350f',  // Darkest
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],       // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'base': ['1rem', { lineHeight: '1.75rem' }],     // 16px - increased line-height
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '2rem' }],       // 20px
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '3.5rem' }],       // 48px
        '6xl': ['3.75rem', { lineHeight: '4rem' }],      // 60px
        '7xl': ['4.5rem', { lineHeight: '4.75rem' }],    // 72px
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.75',
        'loose': '2',
      },
      maxWidth: {
        'prose': '65ch',  // Optimal reading width
        'content': '75ch',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
