// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GopherBundle',
  tagline: 'GopherBundle 构建工具，基于 esbuild 实现',
  favicon: 'img/logo.png',

  url: 'https://qweijiaq.github.io',
  baseUrl: '/fe-bundle/',

  organizationName: 'wj-fe',
  projectName: 'wj-fe-bundle',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'wj-fe logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'GopherBundle',
          },
          {
            href: 'https://github.com/qweijiaq/fe-bundle',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档说明',
            items: [
              {
                label: '完整功能',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/qweijiaq/fe-bundle',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} wj-fe tools, Inc. Built with Pony Wei.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
