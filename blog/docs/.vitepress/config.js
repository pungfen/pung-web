const sidebar = {
  bookmark: [
    {
      text: 'YARN',
      children: [{ text: '源', link: '/bookmark/yarn/switch-mirrors' }]
    }
  ]
}

module.exports = {
  title: 'PUNG - 我是菜鸟。',

  description: 'It is pung blog',

  themeConfig: {
    logo: '/logo.png',
    docsDir: 'docs',
    lastUpdated: '上次编辑',
    sidebar: {
      '/bookmark': sidebar.bookmark
    }
  }
}
