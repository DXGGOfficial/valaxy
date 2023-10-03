import process from 'node:process'
import { defineValaxyConfig } from 'valaxy'
import type { PressTheme } from 'valaxy-theme-press'
import { addonAlgolia } from 'valaxy-addon-algolia'

const COMMIT_ID = process.env.CF_PAGES_COMMIT_SHA || process.env.COMMIT_REF
const commitRef = COMMIT_ID?.slice(0, 8) || 'dev'

const safelist = [
  'i-ri-home-line',

  'i-ri-github-line',
]

export default defineValaxyConfig<PressTheme.Config>({
  siteConfig: {
    title: 'Valaxy',
    url: 'https://valaxy.site',
    description: 'Valaxy Site Docs',

    search: {
      enable: true,
      type: 'algolia',
    },
  },

  addons: [
    addonAlgolia({
      appId: '7MV77DWO4A',
      apiKey: '9b9438ca112ab7c044c985c2daa1190b',
      indexName: 'valaxysite',
    }),
  ],

  theme: 'press',
  themeConfig: {
    logo: '/favicon.svg',
    sidebar: ['getting-started', 'guide', 'config', 'migration', 'built-ins', 'third', 'custom', 'theme', 'addon', 'dev'],
    socialLinks: [
      { icon: 'i-ri-github-line', link: 'https://github.com/YunYouJun/valaxy' },
    ],
    nav: [
      {
        text: 'menu.guide',
        items: [
          {
            text: 'menu.getting-started',
            link: '/guide/getting-started',
          },
          {
            text: 'menu.migrate-from-other',
            link: '/migration/',
          },
        ],
      },
      {
        text: 'menu.theme',
        items: [
          {
            text: 'menu.use-a-theme',
            link: '/themes/use',
          },
          {
            text: 'menu.write-a-theme',
            link: '/themes/write',
          },
          {
            text: 'menu.themes-gallery',
            link: '/themes/gallery',
          },
        ],
      },
      {
        text: 'menu.addon',
        items: [
          {
            text: 'menu.why-need-addons',
            link: '/addons',
          },
          {
            text: 'menu.use-an-addon',
            link: '/addons/use',
          },
          {
            text: 'menu.write-an-addon',
            link: '/addons/write',
          },
          {
            text: 'menu.addons-gallery',
            link: '/addons/gallery',
          },
        ],
      },
    ],

    footer: {
      message: `Released under the MIT License. (<a href="https://github.com/YunYouJun/valaxy/commit/${commitRef}" target="_blank" alt=${commitRef}>${commitRef}</a>)`,
      copyright:
        'Copyright © 2022-present <a href="https://github.com/YunYouJun" target="_blank">YunYouJun</a> & <a href="https://github.com/YunYouJun/valaxy/graphs/contributors" target="_blank">Valaxy Contributors</a>',
    },
  },

  vite: {
    base: '/',
  },
  unocss: {
    safelist,
  },

  markdown: {
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
      },
      warning: {
        icon: 'i-carbon-warning-alt',
      },
      danger: {
        icon: 'i-carbon-warning',
      },
      info: {
        text: 'i-carbon-information',
      },
    },

    // theme: 'material-theme-palenight',
  },
})
