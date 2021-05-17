// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  icon: {
    favicon: './src/favicon.png'
  },
  pathPrefix: '/vblog-gridsome',
  plugins: [
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     // 数据类型
    //     typeName: 'BlogPost',
    //     // 文件路径
    //     path: './content/blog/**/*.md',
    //   }
    // },
    {
      use: '@gridsome/source-strapi',
      options: {
        // 接口地址
        apiURL: process.env.GRIDSOME_API_URL,
        // 查询限制，做多1000，默认是100
        queryLimit: 1000,
        // 查询数据类型（表）
        contentTypes: ['gist','project','following','follower'],
        // singleTypes: ['general'],
        // 单个节点
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // 受保护的数据需要登录
        // loginData: {
        //   identifier: 'eline',
        //   password: '123456'
        // }
      }
    }
  ],
  templates: {
    StrapiGist: [
      {
        path: '/gist/:id',
        component: './src/templates/gist.vue'
      }
    ]
  },
  // templates:{
  //   // 集合的名称：Strapi+contentTypes中表名
  //   StrapiPost:[
  //     {
  //       path:'/post/:id',
  //       component:'./src/templates/Post.vue'
  //     }
  //   ],
  //   StrapiTag:[
  //     {
  //       path:'/tag/:id',
  //       component:'./src/templates/Tag.vue'
  //     }
  //   ]
  // }
}
