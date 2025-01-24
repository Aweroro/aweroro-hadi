/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',  
        accent: '#3B82F6',   
        secondary: '#9333EA', 
        text: '#E5E7EB',      
      },
    },
  },
  plugins: [],
}
