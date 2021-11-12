<template>
    <div class="questions">
        <h4><span>我的文章</span></h4>
        <ul class="question-list">
            <li v-for="(item,index) in this.articleList" :key="index"><span class="fl good" ><span class="num">{{item.thumbup}}</span> 点赞</span> <span class="title">
                <nuxt-link :to="'/article/channel/item/'+item.id">
                    {{item.title}}
                </nuxt-link>
            </span> <span class="fr date">{{formateDate(item.createtime)}}</span> <span class="clearfix"></span></li>
        </ul>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page=this.currentPage
                :page-sizes="[5,10,20,50]"
                :page-size=this.pageSize
                layout="total, sizes, prev, pager, next, jumper"
                :total=this.total>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import "~/assets/css/page-sj-person-myquestion.css";
    import articleApi from "@/api/article";

    export default {
        data(){
            return{
                articleList:[],
                currentPage:1,
                pageSize:5,
                total:0,
            }
        },
        mounted(){
            this.query();
        },
        methods:{
            formateDate(datetime) {
                function addDateZero(num) {
                    return (num < 10 ? "0" + num : num);
                }
                let d = new Date(datetime);
                let formatdatetime =  addDateZero(d.getMonth() + 1) + '月' + addDateZero(d.getDate()) + '日';
                return formatdatetime;
            },

            query(){
                articleApi.getMyArticles(this.currentPage,this.pageSize).then(res=>{
                    this.articleList=res.data.data.rows;
                    this.total=res.data.data.total;
                }) ;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize=val;
                this.query();
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage=val;
                this.query();
            }
        },
    }
</script>

<style scoped>

</style>
