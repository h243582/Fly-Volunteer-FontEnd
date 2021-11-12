<template>
    <!--我的回答页面-->
    <div class="answers">
        <h4><span>我的回答</span></h4>
        <ul class="answer-list">
            <li v-for="(item,index) in this.replyList" :key="index"><span class="fl good"> <span class="num">1</span> 有用</span> <span class="title"><a
                href="#">{{item.content}}</a></span> <span class="fr date">{{formateDate(item.createtime)}}</span>
                <span class="clearfix"></span></li>
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
    import "~/assets/css/page-sj-person-myanswer.css";
    import problemApi from "@/api/problem";

    export default {
        data(){
            return{
                replyList:[],
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
                return problemApi.getReplyList(this.currentPage,this.pageSize).then((res)=>{
                    this.replyList=res.data.data.rows;
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
