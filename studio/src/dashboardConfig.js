export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb556902ea1be15d082f405',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1v7tpj83',
                  apiId: 'f866bf84-a7ad-4708-9739-52a71f0cbe94'
                },
                {
                  buildHookId: '5fb55690deb96014a342da05',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-77o65ztk',
                  apiId: 'c9556241-ba91-4217-8d15-c781c37bac29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hack89/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-77o65ztk.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
