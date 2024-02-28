/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {
      colors: {
        "black": "#00001A",
        "gray": "#5E607A",
        "orange":"#F15D51",
        "yellow":"#E9AA52",
        "light-gary":"#C5C6CE",
      },
    },
  },
  plugins: [],
};
