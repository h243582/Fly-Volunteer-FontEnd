<template>
   <div class="wrapper qa-content"> 
   <div class="fl left-list"> 
    <div class="tab-content"> 
     <div id="index" class="tab-pane active"> 
      <div class="tab-bottom-line"> 
       <ul class="sui-nav nav-tabs"> 
        <li :class="type=='newlist'?'active':''"><a @click="findList('newlist')">最新回答</a></li> 
        <li :class="type=='hotlist'?'active':''"><a href="#hot" @click="findList('hotlist')">热门回答</a></li> 
        <li :class="type=='waitlist'?'active':''"><a href="#wait" @click="findList('waitlist')">等待回答</a></li> 
       </ul> 
       <div class="qa-list"> 
        <div class="tab-content"> 
         <div id="new" class="tab-pane active"> 
          <ul class="detail-list"> 
           <li class="qa-item" v-for="(item,index) in list.rows" :key="index" > 
            <div class="fl record"> 
             <div class="number"> 
              <div class="border useful"> 
               <p class="usenum">{{item.thumbup}}</p> 
               <p>有用</p> 
              </div> 
              <div class="border answer"> 
               <p class="ansnum">{{item.reply}}</p> 
               <p>回答</p> 
              </div> 
             </div> 
            </div> 
            <div class="fl info"> 
             <div class="question"> 
              <p class="author"><span class="name">{{item.replyname}}</span><span>{{item.updatetime}}</span>回复</p> 
              <p class="title"><a href="./qa-detail.html" target="_blank">{{item.title}}</a></p> 
             </div> 
             <div class="other"> 
              <ul class="fl sui-tag"> 
               <li v-for="(item,index) in 'item.labels.split(',')'" :key="index">{{item}}</li>           
              </ul> 
              <div class="fr brower"> 
               <p>浏览量 {{item.visits}} | {{item.createtime}} 来自 <a href="#">{{item.nickname}} </a></p> 
              </div> 
             </div> 
            </div> 
            <div class="clearfix"></div> </li>            
          </ul>           
         </div>  
        </div> 
       </div> 
      </div> 
     </div> 
     <div id="php" class="tab-pane">
       php 
     </div> 
     <div id="js" class="tab-pane">
       Javascript 
     </div> 
     <div id="python" class="tab-pane">
       python 
     </div> 
     <div id="java" class="tab-pane">
       java 
     </div> 
    </div> 
   </div> 
   <div class="fl right-tag"> 
    <div class="block-btn"> 
     <p>今天，有什么好东西要和大家分享么?</p> 
     <a class="sui-btn btn-block btn-share" href="./qa-submit.html" target="_blank">发布分享</a> 
    </div> 
    <div class="hot-tags"> 
     <div class="head"> 
      <h3 class="title">热门标签</h3> 
     </div> 
     <div class="tags"> 
      <ul class="sui-tag"> 
       <li>Php</li> 
       <li>Javascript</li> 
       <li>Gif</li> 
       <li>Java</li> 
       <li>C#</li> 
       <li>iOS</li> 
       <li>C++</li> 
      </ul> 
     </div> 
    </div> 
   </div> 
   <div class="clearfix"></div> 
  </div> 
</template>
<script>
import '~/assets/css/page-sj-qa-logined.css'
import problemApi from '@/api/problem'
export default {
  asyncData({params,error}){
      return problemApi.list('newlist',params.label,1,10).then( res =>{
           return {list:  res.data.data,  labelId:params.label}
      })
  },
  data(){
    return {type:'newlist'}
  },
  methods:{
    findList(type){
      this.type = type
      problemApi.list(type,this.labelId,1,10).then( res =>{
           this.list= res.data.data
      })
    }
  }
}
</script>
