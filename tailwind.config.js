module.exports = {
  purge: ["site/**/*.js", "lib/**/*.js"],
  theme: {},
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "focus-within"],
  },
  plugins: [
    require("tailwindcss-font-inter")({
      importFontFace: true,
    }),
  ],
}
