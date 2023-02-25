module.exports = {
  ignoreFiles: ["**/public/index.html"],
  extends: [
    "stylelint-config-rational-order-fix",
    "stylelint-config-html",
    "stylelint-config-standard-scss",
  ],
  plugins: ["stylelint-order", "stylelint-config-rational-order-fix/plugin"],
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": true,
      },
    ],
    "declaration-empty-line-before": [
      "always",
      { ignore: ["after-declaration"], except: ["first-nested"] },
    ],
    "rule-empty-line-before": [
      "always-multi-line",
      { except: ["first-nested"] },
    ],
    "color-hex-length": "long",
    "selector-class-pattern": /\w+/,
    "at-rule-no-unknown": null,
    "selector-id-pattern": null,
  },
}
