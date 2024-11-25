import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "AREA",
  description: "AREA Documentation",
  base: '/',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Server', link: '/server' },
      { text: 'Client', link: '/client' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          {
            text: 'Installation',
            items: [
              { text: 'Docker', link: '/installation/docker' },
              { text: 'From Source', link: '/installation/source' }
            ],
            link: '/installation'
          }
        ]
      },
      {
        text: 'Server',
        items: [
          { text: 'API', link: '/server/api' },
          { text: 'Database', link: '/server/database' },
          { text: 'Build', link: '/server/build' },
        ]
      },
      {
        text: 'Client',
        items: [
          { text: 'Technical Stack', link: '/client/stack' },
          { text: 'Build', link: '/client/build' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'http://github.com/AREA-equipe' }
    ]
  }
})
