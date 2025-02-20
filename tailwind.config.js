/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "inter, monospace",
    },
    extend: {
      container: {
        center: true,
        screens: {
          xs: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        padding: {
          DEFAULT: "1rem",
        },
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
