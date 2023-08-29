/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('../public/assets/img/parallaxPhoto/1.png')",
        hero2: "url('../public/assets/img/parallaxPhoto/2.png')",
        hero3: "url('../public/assets/img/parallaxPhoto/3.png')",
        hero4: "url('../public/assets/img/parallaxPhoto/4.png')",
        hero5: "url('../public/assets/img/parallaxPhoto/5.png')",
        hero6: "url('../public/assets/img/parallaxPhoto/6.png')",
        parallax1: "url('../public/assets/img/parallaxHero/layout1.png')",
        parallax2: "url('../public/assets/img/parallaxHero/Layout2.png')",
        parallax3: "url('../public/assets/img/parallaxHero/layout3.png')",
        parallax45: "url('../public/assets/img/parallaxHero/layout45.png')",
        parallax67: "url('../public/assets/img/parallaxHero/layout67.png')",
      },
      colors: {
        biru: "#228BE6",
        "grey-base": "#F1F3F5",
        dark: "#4A4A4A",
        "grey-mid": "#868E96",
        "grey-light": "#D9D9D9",
        hijau: "#40C057",
        bg1: "#45301C",
        bg2: "#FEAD02",
        bg3: "#45301C",
        bg4: "#FEAD02",
        bg5: "#45301C",
        bg6: "#FEAD02",
      },
      fontSize: {
        h1: "36px",
        h2: "24px",
        h3: "14px",
        base: "14px",
        active: "14px",
        secondary: "12px",
      },
      fontWeight: {
        h1: "700",
        h2: "600",
        h3: "600",
        base: "400",
        active: "500",
      },
      textColor: {
        "black-base": "#414B55",
        "grey-mid": "#868E96",
        "grey-light": "#ADB5BD",
        "dark-main": "#4A4A4A",
        "grey-base": "#F1F3F5",
      },
      backgroundColor: {
        "grey-base": "#F1F3F5",
        "blue-base": "#228be6",
      },
      borderColor: {
        "grey-base": "#F1F3F5",
        "grey-light": "#D9D9D9",
      },
      boxShadow: {
        "shadow-1": "0px 7px 64px rgba(65, 47, 87, 0.12)",
        "shadow-2": [
          "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "0px 7px 64px rgba(65, 47, 87, 0.07)",
        ],
        "shadow-3": "0px 7px 64px rgba(65, 47, 87, 0.23)",
        "shadow-4": "0px 6.11px 55.89px rgba(65, 47, 87, 0.12)",
      },
      dropShadow: {
        "shadow-1": "0px 7px 64px rgba(65, 47, 87, 0.12)",
        "shadow-2": [
          "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "0px 7px 64px rgba(65, 47, 87, 0.07)",
        ],
        "shadow-3": "0px 7px 64px rgba(65, 47, 87, 0.23)",
        "shadow-4": "0px 6.11px 55.89px rgba(65, 47, 87, 0.12)",
      },
    },
  },
  plugins: [],
};
