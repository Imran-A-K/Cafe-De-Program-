/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        mytheme: {
        
"primary": "#08a573",
        
"secondary": "#799b14",
        
"accent": "#7ac1f4",
        
"neutral": "#191C1F",
        
"base-100": "#4C464E",
        
"info": "#4179C3",
        
"success": "#17A66F",
        
"warning": "#F2A654",
        
"error": "#EF3E49",
        },
      }
    ],
  },
};
