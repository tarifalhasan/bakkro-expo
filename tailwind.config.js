/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          primary: "#E97400",
          secondary: "#3A3A47",
          border: "#E1E1E1",
        },
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
