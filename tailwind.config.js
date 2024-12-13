/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: "forum",
      },
      colors: {
        fg: "#ad8d50",
        back: "#242925",
        back_1: "#333834",
      },
      backgroundImage: {
        custom_image: "url('/public/building.jpg')",
      },
    },
  },
  plugins: [],
};
