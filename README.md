# 个人博客

> 此静态站点项目采用 Gridsome 进行开发，后台数据使用 Strapi 对所需数据进行配置和 Github API 获取 Github 中的数据，项目中使用 GraphQL 访问 Strapi 中的数据

## 代码

- 博客后端代码使用strapi，代码详见：[blog-backend](https://github.com/Eline302/blog-backend)
- 项目静态页面模板参考 [GitHub-Laziji/VBlog]( https://github-laziji.github.io/#/user/new/main) 

## 技术栈

- Vue 2.x
- Gridsome
- strapi
- ElementUI
- GraphQL
- Github API
- Vercel

## 功能实现

- 开源项目列表与详情
- 博客列表与详情
- 粉丝列表与详情
- 关注人列表与详情

## 项目部署

Strapi 部署在 [ucloud](https://passport.ucloud.cn/#login) 服务器上中，服务器中使用 mySql 数据库，Gridsome 则使用 [Vercel](https://vercel.com/login) 进行自动化部署

页面访问地址：https://vblog-gridsome-eta.vercel.app/

## 脚本

- 启动项目

```js
$ npm run develop
```

- 项目打包

```js
$ npm run build
```
