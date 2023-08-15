/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mb: {
        width: "500px",
      },
      // => @media (min-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xxl: "1280px",
      // => @media (min-width: 1280px) { ... }

      /* xxl: "1365px", */
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
