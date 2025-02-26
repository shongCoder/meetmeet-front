/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        meet_pink: "#FA1155",
        meet_menu: "#666666",
        meet_text: "#7D8A9F",
        meet_black: "#1C1E22",
        meet_gray: "#E8E8E8",
        meet_light_gray: "#FBF9F9",
        meet_sodomy: "#2E3C52",
        meet_blue: "#4D67EB",
        meet_white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      screens: {
        md: "640px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
