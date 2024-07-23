import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require('path');
const tailwindcss = require('../tailwind.config');
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    // builder: "webpack5",
  },
  "webpackFinal": async (config) => {
    config?.module?.rules?.push({
        test: /\.css$/,
        use: [
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        implementation: 'postcss',
                        plugins: {
                            tailwindcss,
                        }
                    },
                },
            },
        ],
        include: path.resolve(__dirname, '../'),
    });
    config.resolve = {
      ...config.resolve,
      alias: {
          ...config.resolve?.alias,
          '@': '../resources/js',
      }
  }
  return config;
}
};
export default config;
