<template>
  <div>
    <header>
      <div class="wrapper">
        <div class="sui-navbar">
          <div class="navbar-inner">
            <a href="index-logined.html" class="sui-brand"><img src="~/assets/img/game_bwlb3.png" width="50" alt="社交"/></a>
            <ul class="sui-nav">
              <router-link tag="li" to="/" active-class="active" exact><a>首页</a></router-link>
              <router-link tag="li" to="/qa" active-class="active"><a>问答</a></router-link>
              <router-link tag="li" to="/gathering" active-class="active"><a>活动</a></router-link>
              <router-link tag="li" to="/friend" active-class="active"><a>交友</a></router-link>
              <router-link tag="li" to="/spit" active-class="active"><a>吐槽</a></router-link>
              <router-link tag="li" to="/recruit" active-class="active"><a>招聘</a></router-link>

            </ul>
            <form class="sui-form sui-form pull-left">
              <input type="text" placeholder="输入关键词..."/>
              <span class="btn-search fa fa-search"></span>
            </form>
            <div class="sui-nav pull-right info" v-if="user.token===undefined">
              <a href="/login" target="a" class="btn-login">
                <el-button type="info" style="margin:15px">登入</el-button>
              </a>
            </div>
            <!-- 已登入时，显示用户名和头像 -->
            <div class="sui-nav pull-right info" v-if="user.name!==undefined">
              <li>
                <router-link to="/manager" class="notice">
                  <el-button type="primary" plain>{{ user.name }}</el-button>
                </router-link>
              </li>
              <li><a href="/manager" class="homego">
                <el-avatar shape="square" :size="50" :src="user.avatar"></el-avatar>
              </a>
                <!--                <img :src="user.avatar" width="50px" height="50px" :alt="user.name"/>-->
              </li>
              <li><a @click="logout">
                <el-button type="danger">注销</el-button>
              </a></li>

            </div>

          </div>
        </div>
      </div>
    </header>
    <nuxt/>


    <!-- 尾部 -->
    <footer>
      <!--底部版权-->
      <div class="footer">
        <div class="wrapper">
          <div class="footer-bottom">
            <div class="link">
              <dl>
                <dt>网站相关</dt>
                <dd>关于我们</dd>
                <dd>服务条款</dd>
                <dd>帮助中心</dd>
                <dd>编辑器语法</dd>
              </dl>
              <dl>
                <dt>常用链接</dt>
                <dd>飞飞飞飞</dd>
                <dd>你好特别</dd>
              </dl>
              <dl>
                <dt>联系我们</dt>
                <dd>联系我们</dd>
                <dd>加入我们</dd>
                <dd>建议反馈</dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd>微博</dd>
                <dd>twitter</dd>
              </dl>

              <div class="xuke">
                <h3>内容许可</h3>
                <p>除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p>
                <p>本站由 飞飞 提供更新服务</p>
              </div>
            </div>


            <p class="Copyright">Copyright © 2017 飞飞飞飞社区 当前版本 0.0.1</p>
          </div>
        </div>
      </div>

    </footer>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import {getUser, removeUser} from '@/utils/auth'
import userApi from '@/api/user'

export default {
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.user = getUser()
  },
  methods: {
    logout() {
      userApi.logout().then(res => {
      })
      removeUser()//清除登陆用户信息
      location.href = '/login'
    }
  }
}
</script>
