/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "background-image": "url('/header-bg.svg')",
      }),
    },
    backgroundSize: {
      cover: "cover",
      contain: "contain",
    },
    backgroundRepeat: {
      "no-repeat": "no-repeat",
    },
    backgroundAttachment: {
      fixed: "fixed",
    },
  },
  plugins: [],
};
