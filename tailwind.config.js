module.exports = {
  purge: ["src/**/*.html"],
  theme: {},
  variants: {},
  plugins: [
    require("tailwindcss-font-inter")({
      importFontFace: true,
    }),
  ],
}
