<template>
  <div class="layout">
    <!-- header -->
    <section class="page-header">
        <div
          v-for="(item, index) in randomIcon"
          :key="`ri${index}`"
          :style="`position: absolute; top:${item.top}px; left:${item.left}px; z-index:1;`"
        >
          <font :style="`font-size: ${item.size}px;color:#fff;`">
            <b>♪</b>
          </font>
        </div>
        <h1 class="project-name">Eline302</h1>
        <h2 class="project-tagline">Eline302 的个人博客</h2>
        <a :href="`https://github.com/${username}`" class="btn" target="_blank">GitHub主页</a>
        <a :href="`https://github.com/${username}/vblog-gridsome`" class="btn" target="_blank">博客源码</a>
    </section>
    <section class="blogger-info">
        <el-card shadow="never" :body-style="{ padding: '0px' }">
            <el-row>
                <el-col :span="10">
                    <el-menu
                      @select="selectTopbar"
                      :default-active="topbar.active"
                      mode="horizontal"
                      menu-trigger="click"
                    >
                        <el-submenu index="#more">
                          <template slot="title">了解博主</template>
                          <el-menu-item index="#githubHome">github主页</el-menu-item>
                          <el-menu-item index="#blog">其他博客</el-menu-item>
                        </el-submenu>
                        <el-submenu index="#webSites" v-if="webSites.length>0">
                          <template slot="title">其他网站</template>
                          <el-menu-item
                            v-for="(item,index) in webSites"
                            :index="`#webSites-${index}`"
                            :key="`#webSites${index}`"
                          >
                            {{item.name}}
                          </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :span="12" style="text-align: right;">
                    <div style="font-size: 20px;color:#606266;margin-top: 5px">
                        <b>{{ username }}</b>
                    </div>
                    <div style="color:#606266;">
                        <i class="el-icon-location"></i>&nbsp;深圳
                        <br>
                    </div>
                </el-col>
                <el-col :span="2" style="text-align: center; cursor: pointer;">
                    <img v-popover:bigAvatar :src="avatarUrl" class="avatar" >
                    <el-popover ref="bigAvatar" placement="top-start" :title="username" width="200" trigger="hover">
                        <i class="el-icon-star-on"></i>&emsp;苗
                        <br>
                        <i class="el-icon-location"></i>&emsp;shenzhen china
                        <br>
                        <img :src="avatarUrl" style="width: 200px;height: 200px;">
                    </el-popover>
                </el-col>
            </el-row>
        </el-card>
    </section>
    <section class="main-content">
      <el-row>
        <el-col :span="6" style="padding-right:10px">
          <Sidebar />
        </el-col>
        <el-col :span="18" style="padding-left:10px">
          <transition name="fade" appear>
            <main>
              <slot />
            </main>
          </transition>
        </el-col>
      </el-row>
    </section>
    <!-- footer -->
    <section>
      <Footer/>
    </section>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { randomInt } from '@/utils/util'
export default {
  name: 'DefaultLayout',
  components: { Sidebar, Footer },
  data () {
    return {
      webSites: [],
      randomIcon: [],
      topbar: {
        active: '',
      },
      username: 'Eline302',
      avatarUrl: 'https://eline302.github.io/images/cat.jpg',
      blog:'https://eline302.github.io'
    }
  },
  mounted() {
      this.$nextTick(() => {
          setInterval(this.listenMusic, 1000)
      })
      let width = window.innerWidth
      for (let i = 0; i < 12; i++) {
          let temp = {}
          let left = randomInt(10, width - 310)
          if(left > width / 2 - 150){
              left += 300
          }
          temp.left = left
          temp.top = randomInt(20, 300)
          temp.size = randomInt(20, 40)
          this.randomIcon.push(temp)
      }
  },
    methods: {
    selectTopbar(index) {
      //取消菜单选中状态
      this.topbar.active = this.topbar.active == "" ? " " : ""
      switch (index) {
        case "#githubHome":
          window.open(`https://github.com/${this.username}`)
          break
        case "#blog":
          if (this.blog) {
              window.open((this.blog.match(/https?:\/\//i)?'':'https://') + this.blog)
          } else {
              this.$message({
                  message: '博主没有其他博客',
                  type: 'info'
              })
          }
          break
        default:
          if(/#webSites-\d+/.test(index)){
            let i = parseInt(index.split('-')[1])
            let url = this.webSites[i].url
            window.open((url.match(/https?:\/\//i)?'':'https://') + url)
          }
          break
      }
    },
  }
}
</script>

<style scoped>
a {
  color: #1e6bb8;
}
.default-layout {
  min-width: 1200px;
}
.page-header {
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-color: #fff;
  background-image: linear-gradient(120deg, rgb(38, 144, 249), rgb(252, 45, 45));
}
.blogger-info {
  position: relative;
  z-index: 2;
  margin: auto;
  margin-top: -30px;
  width: 64rem;
}
.blogger-info .el-menu.el-menu--horizontal {
  border-bottom: none;
}

.project-name {
  font-size: 3.25rem;
  margin-top: 0;
  margin-bottom: 0.1rem;
}

.project-tagline {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: normal;
  opacity: 0.7;
}

.btn:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

a:hover {
  text-decoration: underline;
}

a:active,
a:hover {
  outline: 0;
}

.btn {
  padding: 0.75rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}

a {
  color: #1e6bb8;
  text-decoration: none;
}

.btn+.btn {
  margin-left: 1rem;
}

.avatar {
  margin-top: 4px;
  margin-right: 10px;
  width: 52px;
  height: 52px;
  border-radius: 5px;
  border: 1px solid #EBEEF5
}

.main-content {
  max-width: 64rem;
  padding: 30px 0px 30px 0px;
  margin: 0 auto;
  font-size: 1.1rem;
  word-wrap: break-word;
  min-height: 800px;
}

.main-content .el-menu {
  border-right: none;
}

.page-footer {
  max-width: 67rem;
  margin: 0 auto;
  font-size: 12px !important;
  color: #586069 !important;
  word-wrap: break-word;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
