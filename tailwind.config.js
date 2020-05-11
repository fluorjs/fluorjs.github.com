module.exports = {
  purge: ["site/**/*.js"],
  theme: {},
  variants: {},
  plugins: [
    require("tailwindcss-font-inter")({
      importFontFace: true,
    }),
  ],
}
