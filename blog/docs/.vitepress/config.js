const sidebar = {
  bookmark: [
    {
      text: 'YARN',
      children: [{ text: '源', link: '/bookmark/yarn/switch-mirrors' }]
    },
    {
      text: 'GIT',
      children: [{ text: 'SSH', link: '/bookmark/git/ssh-keygen' }]
    },
    {
      text: 'MARKDOWN',
      children: [{ text: 'markdown-it-emoji', link: '/bookmark/markdown/markdown-it-emoji' }]
    }
  ],
  article: [{ text: 'webpack', link: '/article/webpack/split-chunks' }],
  web: [
    { text: '官方', link: '/web/official' },
    { text: '好看的', link: '/web/beautiful' },
    { text: '超棒的', link: '/web/wonderful' }
  ]
}

const nav = [
  { text: '收藏', link: '/bookmark/yarn/switch-mirrors', activeMatch: '^/bookmark/' },
  { text: '文章', link: '/article/webpack/split-chunks', activeMatch: '^/article/' },
  { text: '网站', link: '/web/beautiful', activeMatch: '^/web' },
  { text: 'Github', link: 'https://github.com/pungfen' }
]

module.exports = {
  title: 'PUNG - 我是菜鸟。',

  description: 'It is pung blog',

  themeConfig: {
    logo: '/logo.png',
    docsDir: 'docs',
    lastUpdated: '上次编辑',
    sidebar: {
      '/bookmark': sidebar.bookmark,
      '/article': sidebar.article,
      '/web': sidebar.web
    },
    nav
  }
}
