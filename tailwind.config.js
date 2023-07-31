/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-gray": "#212123",
      },
      screens: {
        "3xl": "1700px",
      },
    },
    animation: {
      "typing": "typing 3s steps(18) 1s 1 normal both, blink-caret .75s step-end infinite",
    },
  },
  plugins: [],
};
