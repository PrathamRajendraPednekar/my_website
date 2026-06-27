/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040810",
        navy: "#0a0f1e",
        'accent-blue': "#4f8ef7",
        'accent-violet': "#7c3aed",
        text: "#e8edf5",
        muted: "#8892a4",
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
