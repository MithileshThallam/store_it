import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '100': '#27AE60',  // Slightly darker green
          DEFAULT: '#2ECC71' // Primary Green
        },
        red: '#E74C3C',   // Adjusted red tone
        error: '#C0392B',
        green: '#2ECC71', // Matches the brand
        blue: '#3498DB',  // Kept a neutral blue
        pink: '#F1948A',  // Softer pink
        orange: '#E67E22', // Adjusted orange tone
        light: {
          '100': '#2C3E50',  // Dark text color
          '200': '#95A5A6',  // Gray text
          '300': '#ECF0F1',  // Light gray
          '400': '#FFFFFF'   // Pure white background
        },
        dark: {
          '100': '#121212',  // Dark mode primary background
          '200': '#1C1C1C'
        },
        background: 'hsl(var(--background, 0 0% 100%))', // White background
        foreground: 'hsl(var(--foreground, 210 50% 15%))', // Dark text for contrast
        card: {
          DEFAULT: 'hsl(var(--card, 0 0% 100%))',  // White card
          foreground: 'hsl(var(--card-foreground, 210 50% 15%))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
          foreground: 'hsl(var(--popover-foreground, 210 50% 15%))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary, 145 63% 49%))', // Green
          foreground: 'hsl(var(--primary-foreground, 0 0% 100%))' // White text
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 145 58% 43%))',
          foreground: 'hsl(var(--secondary-foreground, 0 0% 100%))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 210 40% 96%))',
          foreground: 'hsl(var(--muted-foreground, 210 10% 30%))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, 160 50% 40%))',
          foreground: 'hsl(var(--accent-foreground, 0 0% 100%))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, 0 75% 50%))',
          foreground: 'hsl(var(--destructive-foreground, 0 0% 100%))'
        },
        border: 'hsl(var(--border, 210 15% 85%))',
        input: 'hsl(var(--input, 210 15% 85%))',
        ring: 'hsl(var(--ring, 145 63% 49%))',
        chart: {
          '1': 'hsl(var(--chart-1, 145 63% 49%))',
          '2': 'hsl(var(--chart-2, 145 58% 43%))',
          '3': 'hsl(var(--chart-3, 160 50% 40%))',
          '4': 'hsl(var(--chart-4, 45 100% 51%))',
          '5': 'hsl(var(--chart-5, 0 75% 50%))'
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"]
      },
      boxShadow: {
        'drop-1': '0px 10px 30px 0px rgba(46, 204, 113, 0.1)',
        'drop-2': '0 8px 30px 0 rgba(46, 204, 113, 0.3)',
        'drop-3': '0 8px 30px 0 rgba(46, 204, 113, 0.1)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
