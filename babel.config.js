module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { "ssr": true, "displayName": true }],
    "inline-react-svg",
    [
      "module-resolver",
      {
        "alias": {
          "@static": "./public",
          "@components": "./src/components",
          "@utils": "./src/utils"
        }
      }
    ]
  ]
};
