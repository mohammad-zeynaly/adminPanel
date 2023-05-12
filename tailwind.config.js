/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    fontFamily: {
      iranYekanRegular: "iran-yekan-regular",
      iranYekanMedium: "iran-yekan-medium",
      iranYekanBold: "iran-yekan-bold",
    },

    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors:{
        primary: "#5867DD",
      },
    },
  },
  plugins: [],
};
