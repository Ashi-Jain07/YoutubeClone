/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '104': '600px'
      },
    screens: {
      'md2': '890px',
      'lsm': '475px',
      'lg+': '1145px'
    }
    },
  },
  plugins: [],
}

