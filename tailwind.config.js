/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      filter: ["hover", "group-hover"],
      grayscale: ["hover", "group-hover"],
      opacity: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
