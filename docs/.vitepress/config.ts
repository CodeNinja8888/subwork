import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Subwork",
  description: "Minimum Viable Community in Julian Alps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Web3 coworking in Slovenia',
        items: [
          { text: 'Home', link: '/home' },
          { text: 'Bookings', link: '/booking' },
          { text: 'Polkadot Bled Hackathon', link: '/polkadot-bled-hackathon' },
          { text: 'Long Term Stay Hints', link: '/long-term-stay-hints' },
          { text: 'Archive', link: '/archive' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
