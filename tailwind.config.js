/** @type {import('tailwindcss').Config} */
export default {
  // Que archivos llevaran taildwind o css
  content: ["index.html", "./src/**/*.jsx"],  //Para deploy
  //content: ["./index.html", "./src/**/*.jsx"], 
  theme: {
    extend: {
      colors: {
        
      }
    },
  },
  plugins: [],
}

