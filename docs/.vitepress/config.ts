import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Subwork",
  description: "Minimum Viable Community in Julian Alps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'SubWork', link: '/' },
      { text: 'Coworking Space in Bled, Slovenia in beautiful nature', link: '/home' },
      { text: 'location', link: '/location-of-subwork' },
      { text: 'telegram chat', link: 'https://t.me/+VoZsr7MEds84ZjQ0' }
    ],

    sidebar: [
      {
        text: 'Web3 coworking in Slovenia',
        items: [
          { text: 'Home', link: '/home' },
          { text: 'Polkadot Bled Hackathon', link: '/polkadot-bled-hackathon' },
          { text: 'Long Term Stay Hints', link: '/long-term-stay-hints' },
          { text: 'Building-up-space', link: '/building-up-space' },
        ],
      },
      {
        text: 'Coworkers',
        items: [
          { text: 'Membership', link: '/membership' },
          { text: 'Bookings', link: '/booking' },
          { text: 'Family Members', link: '/family-members-in-subwork' },
        ]
      },
      {
        text: 'Transportation',
        items: [
          { text: 'Location of SubWork', link: '/location'},
          { text: 'Transportation', link: '/transportation-to-subwork-bled-slovenia'},
          { text: 'Comming by car', link: '/coming-by-car-to-subwork-bled'},

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kodadot/subwork' },
      { icon: 'twitter', link: 'https://twitter.com/subworkbled' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757z"/></svg>'
        },
        link: 'https://t.me/+VoZsr7MEds84ZjQ0'
      },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M31.969 26.984c-.401-2.572-5.163-.593-5.459-3.411c-.417-4 5.531-12.615 5.063-15.964c-.417-3.005-2.453-3.64-4.219-3.677c-1.715-.025-2.167.245-2.745.584c-.339.192-.817.577-1.484-.057c-.443-.423-.745-.713-1.208-1.089c-.24-.192-.62-.432-1.261-.525c-.629-.099-1.463 0-1.984.219c-.532.229-.937.625-1.369 1c-.433.375-1.532 1.599-2.548 1.145c-.448-.192-1.948-.943-3.031-1.405c-2.084-.901-5.093.557-6.183 2.489C3.926 9.157.745 20.428.254 21.913c-1.077 3.333 1.381 6.052 4.683 5.895c1.401-.067 2.333-.572 3.213-2.181c.511-.928 5.308-13.448 5.667-14.057c.261-.432 1.125-1.005 1.855-.636c.735.38.88 1.161.771 1.896c-.183 1.193-3.557 8.839-3.693 9.699c-.219 1.473.48 2.285 2.011 2.369c1.043.052 2.089-.317 2.912-1.88c.464-.871 5.797-11.557 6.265-12.271c.521-.781.937-1.043 1.475-1.011c.411.02 1.061.125.9 1.353c-.161 1.209-4.452 9.043-4.9 10.959c-.605 2.573.801 5.167 3.124 6.308c1.48.728 7.959 1.968 7.433-1.371z"/></svg>'
        },
        link: 'https://meetup.com/subwork'
      }
    ]
  }
})
  