import { Scale } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        'uni-green': '#093304',
        'uni-yellow': '#b78910',
        'uni-beige': '#fbf7d5',
        'uni-green2': '#0f5a08',
        'uni-green2-light': '#709c1f'
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slidleft: {
          from: {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slidright: {
          from: {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        appear: {
          '0%': {
            opacity: 0,
            transform: 'scale(1)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        cbounce: {
          '0%, 100%': { transform: 'translateY(-35%)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        slidein100: 'slidein 1s ease 0ms',
        slidein200: 'slidein 2s ease 0ms',
        slidein300: 'slidein 3s ease 0ms',
        slidein400: 'slidein 4s ease 0ms',
        slidein500: 'slidein 5s ease 0ms',
        slidein600: 'slidein 6s ease 0ms',
        slidein700: 'slidein 7s ease 0ms',
        slidleft800: 'slidleft 1s ease 0ms',
        slideright800: 'slidright 2s ease 0ms',
        appear: 'appear 1s linear forwards animation-timeline:view() animation-range: entry 0 cover 40% ',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        cbounce: 'cbounce 4s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};