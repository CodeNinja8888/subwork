import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links = []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  // generates sitemap
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://subwork.xyz/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
  
  // transformHead({ assets }) {
  //   // adjust the regex accordingly to match your font
  //   const myFontFile = assets.find(file => /Raleway-Light\.\w+\.ttf/)
  //   if (myFontFile) {
  //     return [
  //       [
  //         'link',
  //         {
  //           rel: 'preload',
  //           href: myFontFile,
  //           as: 'font',
  //           type: 'font/ttf',
  //           crossorigin: ''
  //         }
  //       ]
  //     ]
  //   }
  // },
  lastUpdated: true,
  title: "Subwork",
  description: "Minimum Viable Community in Julian Alps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/kodadot/subwork/edit/main/docs/:path'
    },
    footer: {
      message: 'VitePress generated at SubWork, some pictures from Unsplash',
      copyright: 'Copyright © 2023-present SubWork membas'
    },
    nav: [
      { text: 'SubWork', link: '/' },
      { text: 'coworking space', link: '/home' },
      { text: 'location', link: '/location-of-subwork' },
      { text: 'telegram', link: 'https://t.me/+VoZsr7MEds84ZjQ0' },
      { text: 'leave us review', link: 'https://g.page/r/CWs7EEKFN9-zEBE/review' }
    ],

    sidebar: [
      {
        text: 'web3 coworking space',
        items: [
          { text: 'amenities', link: '/amenities-in-coworking-space' },
          { text: 'contact', link: '/contact' },
          { text: 'why bled', link: '/why-did-we-choose-bled' },
          { text: 'who we are', link: '/who-we-are' },
          { text: 'building up space', link: '/building-up-space' },
        ],
      },
      {
        text: 'what can I do in Bled?',
        collapsed: true,
        items: [
          { text: 'sport activities', link: '/sports-activities-around-bled' },
          { text: 'mountain peaks and cabins', link: '/mountain-peaks-and-alpine-cabins'},
          { text: 'surroundings', link: '/surroundings'}
        ]
      },
      {
        text: 'coworkers',
        collapsed: true,
        items: [
          { text: 'membership', link: '/membership' },
          { text: 'family members', link: '/family-members-in-subwork' },
          { text: 'company retreat', link: '/company-retreat' },
          { text: 'partner with SubWork', link: '/partner-with-coworking-space-subwork'},
        ]
      },
      {
        text: 'accommodation & transportation',
        collapsed: true,
        items: [
          { text: 'location of SubWork', link: '/location-of-subwork' },
          { text: 'accomodation', link: '/hotels-hostels-in-bled' },
          { text: 'transportation', link: '/transportation-to-subwork-bled-slovenia' },
          { text: 'coming by car', link: '/coming-by-car-to-subwork-bled' },
          { text: 'long term stay in bled', link: '/long-term-stay-in-bled' },
        ]
      },
      {
        text: 'working in SubWork',
        collapsed: true,
        items: [
          { text: 'governance', link: '/rules-for-coworkers'},
          { text: 'booking desk and meeting room', link: '/booking-desk-and-meeting-room-in-subwork' },
        ]
      }
    ],

    socialLinks: [
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
      },
      { icon: 'github', link: 'https://github.com/kodadot/subwork' }
    ]
  }
})
  