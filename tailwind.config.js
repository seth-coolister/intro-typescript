/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}*",
  "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui") ],
  daisyui: ["light","dark","cupcake"]
}

