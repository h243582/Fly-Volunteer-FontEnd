<template>
  <!--账户设置页面-->
  <div class="home-content">
    <div class="activities account-type">
      <h4 class="tit"><span>账户设置</span></h4>
      <div class="account-main">

        <div class="account-person">
          <h3>个人账号</h3>
          <ul class="account-info">
            <li> 
              <span class="gray index">名字</span>
              <span class="info" v-show="!name_input">{{user.nickname}}</span> 
              <form  v-show="name_input"> 
                <input type="text" placeholder="输入姓名" v-model="user.nickname"/> 
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_save()" >保存</button> -
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_input=false" >取消</button>
              </form> 
              <span class="gray edit"  ><a class="fa fa-pencil" aria-hidden="true" v-show="!name_input"  @click="name_edit()" >编辑</a> </span> 
            </li> 
            <li>
              <span class="gray index">性别</span>
              <span class="info" v-show="!name_input">{{ user.sex }}</span>
              <form  v-show="name_input"> 
                <input type="text" placeholder="性别" v-model="user.sex"/>
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_save()" >保存</button> -
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_input=false" >取消</button>
              </form>
              <span class="gray edit" v-show="!name_input"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span>
            </li>
            <li>
              <span class="gray index">Email </span>
              <span class="info" v-show="!name_input">{{ user.email }}</span>
              <form  v-show="name_input">
                <input type="email" placeholder="输入邮箱" v-model="user.email"/>
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_save()" >保存</button> -
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_input=false" >取消</button>
              </form>
              <span class="gray edit" v-show="!name_input"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span>
            </li>
            <li>
              <span class="gray index">手机号码 </span>
              <span class="info" v-show="!name_input">{{ user.mobile }}</span>
              <form  v-show="name_input">
                <input type="phone" placeholder="输入手机号码" v-model="user.mobile" />
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_save()" >保存</button> -
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_input=false" >取消</button>
              </form>
              <span class="gray edit" v-show="!name_input"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span>
            </li>
            <li>
              <span class="gray index">密码 </span>
              <span class="info" v-show="!name_input">******</span>
              <form  v-show="name_input">
                <input type="password" placeholder="输入新的密码" v-model="user.password"/>
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_save()" >保存</button> -
                <button class="sui-btn btn-danger save-btn" type="button"  @click="name_input=false" >取消</button>
              </form>
              <span class="gray edit" v-show="!name_input"><i class="fa fa-pencil" aria-hidden="true"></i> 编辑</span>
            </li>
          </ul>
        </div>

        <div class="account-other">
          <h3>第三方账号</h3>
          <ul class="account-info">
            <li>
              <span class="gray index"
                ><img src="~/assets/img/widget-weixin.png" width="20" />
                微信</span
              >
              <span class="name">已绑定，解绑</span>
              <span class="gray check"
                ><i class="fa fa-square-o" aria-hidden="true"></i>
                公开显示</span
              >
            </li>
            <li>
              <span class="gray index"
                ><img src="~/assets/img/widget-QQ.png" width="20" /> QQ</span
              >
              <span class="name bind">绑定账号</span>
              <span class="gray check"
                ><i class="fa fa-square-o" aria-hidden="true"></i>
                公开显示</span
              >
            </li>
            <li>
              <span class="gray index"
                ><img src="~/assets/img/widget-weibo.png" width="20" /> 新浪微博
              </span>
              <span class="name">已绑定，解绑</span>
              <span class="gray check"
                ><i class="fa fa-square-o" aria-hidden="true"></i>
                公开显示</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  '~/assets/css/page-sj-person-account.css'
import userApi from '@/api/user'
export default {
  asyncData ({ params, error }) {
    return userApi.info().then( res=>{
      return {user: res.data.data }
    })     
  },
  methods:{
    name_edit(){
      this.name_input=true
    },
    name_save(){		
      userApi.saveinfo(user).then(  res=>{
        this.name_input=false	
      })
    }
  },
  data(){
    return {
      name_input:false
    }
  }
}
</script>

<style scoped>
.el_input {
  width: 300px;
}
.el_button {
  margin-left: 350px;
}
</style>
