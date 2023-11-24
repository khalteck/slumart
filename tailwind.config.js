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
    },
  },
  plugins: [],
};
