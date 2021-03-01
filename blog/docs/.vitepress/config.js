const sidebar = {
  bookmark: [
    {
      text: 'YARN',
      children: [{ text: '源', link: '/bookmark/yarn/switch-mirrors' }]
    },
    {
      text: 'GIT',
      children: [{ text: 'SSH', link: '/bookmark/git/ssh-keygen' }]
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
