/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // indigo-500
          dark: '#4F46E5',    // indigo-600
          light: '#A5B4FC',   // indigo-300
        },
        neutral: {
          DEFAULT: '#F9FAFB', // gray-50
          dark: '#111827',    // gray-900
          text: '#1F2937',    // gray-800
        },
      },
    },
  },
  plugins: [],
}