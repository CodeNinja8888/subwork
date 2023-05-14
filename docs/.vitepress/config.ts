import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Subwork",
  description: "Minimum Viable Community in Julian Alps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Main', link: '/' },
      { text: 'Home', link: '/home' },
      { text: 'Meetup', link: 'https://meetup.com/subwork'},
      { text: 'Telegram', link: 'https://t.me/+VoZsr7MEds84ZjQ0' }
    ],

    sidebar: [
      {
        text: 'Web3 coworking in Slovenia',
        items: [
          { text: 'Home', link: '/home' },
          { text: 'Bookings', link: '/booking' },
          { text: 'Polkadot Bled Hackathon', link: '/polkadot-bled-hackathon' },
          { text: 'Long Term Stay Hints', link: '/long-term-stay-hints' },
          { text: 'Building-up-space', link: '/building-up-space' },
          { text: 'Companies', link: '/companies' },
          { text: 'Coming by car', link: '/coming-by-car-to-subwork-bled'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kodadot/subwork' },
      { icon: 'twitter', link: 'https://twitter.com/subworkbled' },
      { icon: 'meetup', link: 'https://meetup.com/subwork' },
      { icon: 'telegram', link: 'https://t.me/+VoZsr7MEds84ZjQ0' }
    ]
  }
})
