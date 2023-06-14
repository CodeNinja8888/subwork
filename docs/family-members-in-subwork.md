# Family Members in SubWork

![subwork_hacker](pics/subwork_hacker_zoom.png)

Current coworkers are among top class web3 startups and AI experimentators

companies
---
- developer from [hydradx](https://hydradx.io/) and [basilisk](https://bsx.fi/)
- founders of [kodaDot - most popular open source nft marketplace](https://kodadot.xyz)
  - [yangwao](https://twitter.com/yangwao)
  - [vikiival](https://twitter.com/vikiival)
- [poppyseedDev](https://twitter.com/poppyseeddev) doing her Rust courses, recently got accepted to Polkadot Blockchain Academy at Berkley, US
- various fund managers
- hotdesking clients among local family office
- regional and neighbourhood corporate members


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yangwao.png',
    name: 'matej yangwao',
    title: 'co-founder KodaDot',
    links: [
      { icon: 'github', link: 'https://github.com/yangwao' },
      { icon: 'twitter', link: 'https://twitter.com/yangwao' }
    ]
  },
  {
    avatar: 'https://www.github.com/vikiival.png',
    name: 'viki val',
    title: 'co-founder KodaDot',
    links: [
      { icon: 'github', link: 'https://github.com/vikiival' },
      { icon: 'twitter', link: 'https://twitter.com/vikiival' }
    ]
  },
  {
    avatar: 'https://www.github.com/poppyseeddev.png',
    name: 'aurora poppyseed',
    title: 'founder rust courses & gpt projects',
    links: [
      { icon: 'github', link: 'https://github.com/poppyseeddev' },
      { icon: 'twitter', link: 'https://twitter.com/poppyseeddev' }
    ]
  },
  {
    avatar: 'https://www.github.com/vgantchev.png',
    name: 'valery',
    title: 'founder & runtime at Basilisk & HydraDX',
    links: [
      { icon: 'github', link: 'https://github.com/vgantchev' },
      { icon: 'twitter', link: 'https://twitter.com/cl0w5' }
    ]
  },
]
</script>

![subwork_family](pics/subwork_family.png)

brogrammers
---

say hello to our awesome coworkers and enjoy000rs of Bled

<VPTeamMembers size="medium" :members="members" />