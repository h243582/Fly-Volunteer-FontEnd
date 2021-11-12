<template>
  <!--两列布局-->
  <div class="wrapper tag-item">
    <div class="job-intro">
      <div class="left-img">
        <!-- <img :src="enterprise_pojo.logo" alt="" /> -->
        <img src="~/assets/img/widget-company.png" alt="" />
      </div>
      <div class="middle-intro">
        <div class="name">{{ pojo.jobname }}</div>
        <div class="intro">
          {{ pojo.salary }} / 经验{{ pojo.condition }} / {{ pojo.education }} /{{ pojo.type === 0 ? '兼职' : '全职' }}
        </div>
        <div class="tag">
          <li>Python</li>
          <li>Python</li>
          <li>O2O</li>
          <li>Python</li>
          <li>Python</li>
        </div>
      </div>
      <div class="right-tool">
        <p class="throw"><button class="sui-btn btn-throw">投简历</button></p>
        <button class="sui-btn btn-collect">收藏</button>
        <span>100收藏</span>
        <span>291浏览</span>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="fl left-list">
      <div class="tit">
        <span>职位描述</span>
      </div>
      <div class="content">
        <p>我们提供：</p>
        <p>富有市场竞争力的薪水；</p>
        <p>
          一套程序猿的顶级梦幻装备，
          一台顶级CPU+大内存+SSD台式机+护眼显示屏，一把舒适的人体工程学座椅；
        </p>
        <p>一群聪明欢乐的小伙伴们；</p>
        <p>顶级IT创业公司提供的大平台，丰富的晋升机制；</p>
        <p>提供独立的单身公寓，空调热水。</p>
        <p>提供五险，双休和法定假日休假</p>
        <!-- {{pojo.content1}} -->
      </div>
      <div class="tit">
        <span>职位要求</span>
      </div>
      <div class="content">
        <p>对新技术有好奇心, 学习能力强, 良好的英文资料阅读能力</p>
        <p>熟悉面向对象编程, 有良好的编程⻛格和习惯.</p>
        <p>良好的团队合作精神和沟通能力，勤奋上进</p>
        <p>熟练使用PHP, 熟悉symfony/laravel优先.</p>
        <p>熟悉HTML/CSS/JS, 懂vuejs优先.</p>
        <p>熟悉 Linux/Mac 开发环境</p>
        <p>熟悉 MySQL 数据库，掌握 MongoDB, Redis 等 NoSQL</p>
        <p>熟悉git协作</p>
        <p>*我们是正域团队,，我们正在做一件改变行业的事情，</p>

        <p>如果你激情四射、胆大有料、敢想敢干、协作一流， 立刻加入我们！</p>
        <!-- {{pojo.content2}} -->
      </div>
      <div class="time">发布于1小时前</div>
    </div>
    <div class="fl right-tag">
      <div class="company-job">
        <div class="intro">
          <!-- <img :src="enterprise_pojo.logo" alt="" /> -->
          <img src="~/assets/img/widget-company.png" alt="" />

          <div class="title">{{ enterprise_pojo.name }}</div>
          <div class="content">{{ enterprise_pojo.summary }}</div>
        </div>
        <div class="tag">
          <li v-for="(item, index) in enterprise_pojo.labels.split(',')" :key="index">
            {{ item }}
          </li>
        </div>
        <div class="btns">
          <a
            class="sui-btn btn-home"
            :href="enterprise_pojo.url"
            target="_blank"
            >企业主页</a
          >
          <a
            class="sui-btn btn-position"
            :href="pojo.url"
            target="_blank"
            >{{enterprise_pojo.jobcount}}个职位</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/page-sj-recruit-detail.css";
import recruit from "~/api/recruit";
import enterprise from "~/api/enterprise";
export default {
  asyncData({ params, error }) {
    //嵌套调用---嵌套查询
    return recruit.getById(params.id).then((res) => {
      return enterprise.getById(res.data.data.eid).then((re) => {
        return { pojo: res.data.data, enterprise_pojo: re.data.data };
      });
    });
  },
};
</script>


