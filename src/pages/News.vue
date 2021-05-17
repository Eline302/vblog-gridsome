<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card class="card" shadow="never"  v-for="(gist,index) in $page.allGist.edges" :key="gist.node.id">
        <div slot="header">
          <span>{{gist.node.title}}</span>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{gist.node.created_at}}
          <br> 更新 {{gist.node.updated_at}}
        </div>
        <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
          <pre style="font-family: '微软雅黑'">{{gist.node.description}}</pre>
        </div>
        <div v-html="mdToHtml(gist.node.content)" class="markdown-body" style="padding-top: 20px"></div>
      </el-card>
       <!-- Pager -->
      <Pager :info="$page.allGist.pageInfo" class="page-number"/>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int){
  allGist:allStrapiGist(perPage: 5, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title,
        content,
        created_at,
        updated_at
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt();
export default {
  name: 'News',
  components: {
    Pager
  },
  metaInfo: {
    title: '最新动态'
  },
  methods:{
    mdToHtml(markdown){
     return md.render(markdown);
    }
  }
  // computed: {
  //   gist () {
  //     const { edges } = this.$page.allGist
      
  //     if (edges.length === 0) {
  //       return {}
  //     }
  //     return edges[0].node
  //   }
  // }
}
</script>
<style scoped>
.card{
   min-height: 400px;
    margin-bottom: 20px;
}
.page-number a{
  margin:0 10px;
  padding:0 11px;
  color:#212529;
}
.page-number .active{
  background-color: #ccc;
  color: #fff;
}
</style>
