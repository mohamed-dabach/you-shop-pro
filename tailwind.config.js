/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // custom colors
        primary: "#30c7b5",
        secondary: "#00ac97",
        "semi-white": "#f3f6f3",
        "semi-black": "#14261c",
        "semi-gray": "#4f5655",
      },
    },
  },
  plugins: [],
};
