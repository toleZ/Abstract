/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        abstract: {
          "4C5FD5": "#4C5FD5",
          dadbf1: "#dadbf1",
          "000000": "#000000",
          fff: "#fff",
          "191a1b": "#191a1b",
        },
      },
      fontFamily: {
        "gt-america": "GT America",
      },
    },
  },
  plugins: [],
};
