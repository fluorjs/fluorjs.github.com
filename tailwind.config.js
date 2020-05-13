module.exports = {
  purge: ["site/**/*.js", "lib/**/*.js"],
  theme: {},
  variants: {},
  plugins: [
    require("tailwindcss-font-inter")({
      importFontFace: true,
    }),
  ],
}
