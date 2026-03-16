/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3ff",
          100: "#d9e3ff",
          500: "#4563ff",
          700: "#2339b7",
        },
      },
    },
  },
  plugins: [],
};
