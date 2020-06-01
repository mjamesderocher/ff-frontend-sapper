export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed5669210f0f1552fa149af',
                  title: 'Sanity Studio',
                  name: 'ff-frontend-sapper-studio',
                  apiId: 'ceca8458-7afa-48f1-80ff-836e1bc510f1'
                },
                {
                  buildHookId: '5ed566921c219d8bf79ae711',
                  title: 'Blog Website',
                  name: 'ff-frontend-sapper',
                  apiId: 'fab548c5-bb97-422e-ae48-a484601f5d83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjamesderocher/ff-frontend-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ff-frontend-sapper.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
