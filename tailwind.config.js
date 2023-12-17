/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        caro1: "url('/images/carousel4.jpg')",
        caro2: "url('/images/carousel2.jpg')",
        caro3: "url('/images/explore.png')",
        projects: "url('/images/projects.jpg')",
        countries: "url('/images/countries.jpg')",
        reg: "url('/images/volunteer.jpg')",
        shop: "url('/images/shop.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rale: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      sm: "640px", // Small screens (e.g., smartphones)
      md: "900px", // Medium screens (e.g., tablets)
      // md: "1024px", // Medium screens (e.g., tablets)
      lg: "1400px", // Large screens (e.g., laptops)
      // xl: "1280px", // Extra-large screens (e.g., desktops)
      "2xl": "1536px", // 2x extra-large screens (e.g., large desktops)
    },
  },
  plugins: [],
};
