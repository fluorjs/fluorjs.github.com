const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ["site/**/*.js", "lib/**/*.js"],
  theme: {},
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "focus-within", "target"],
  },
  plugins: [
    require("tailwindcss-font-inter")({
      importFontFace: true,
    }),
    plugin(({ addVariant, e }) => {
      addVariant("target", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`target${separator}${className}`)}:target`
        })
      })
    }),
  ],
}
