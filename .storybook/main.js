const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  typescript: { reactDocgen: false },

  // pathalias
  webpackFinal: async config => {
    config.resolve.alias["@root"] = path.resolve(__dirname, "../src");
    const rules = config.module.rules;
    const fileLoaderRule = rules.find(rule => rule.test.test(".svg"));
    /**
     * svg는 기본 fileLoader 가 우선순위를 가져서 웹팩 설정이 먹히지 않는 이슈가 있습니다.
     * 하여 svg 파일만 기본 loader를 제외시키는 코드입니다.
     */
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};
