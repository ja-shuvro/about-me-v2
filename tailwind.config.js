/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
        body: ['var(--font-body)'],
      },
      colors: {
        void: '#020408',
        plasma: '#00f5ff',
        ember: '#ff6b35',
        neural: '#7c3aed',
        signal: '#00ff88',
        ghost: 'rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}
