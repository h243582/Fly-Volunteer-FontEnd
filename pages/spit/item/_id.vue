<template>
  <div class="wrapper">
    <!--引用组件-->
    <!--两列布局-->
    <div class="wrapper tc-detail">
        <div class="fl left-list">
            <div class="tc-detail">
                <!-- 标题区 -->
                <div class="detail-tit">
                    <div class="detail-author">
                         <a href="javascript:;">{{pojo.nickname}}</a> 发布
                    </div>
                    <div class="detail-content" v-html='pojo.content'></div>
                    <img src="~/assets/img/widget-tc-detail.png" alt="" />
                    <div class="detail-tool">
                        <ul>
                            <li><span class="star"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{pojo.thumbup}}</span></li>
                            <li><a href="#" data-toggle="modal" data-target="#shareModal"><i class="fa fa-share-alt" aria-hidden="true"></i> {{pojo.share}}</a></li>
                            <li><a href="#" @click="replyDialogVisible=true;content=''" class="comment"><i class="fa fa-commenting" aria-hidden="true"></i> {{pojo.comment}}</a></li>
                        </ul>
                    </div>
                </div> 

                <!-- 评论区 -->
                <div class="comment-area">
                    <div class="comment-tit">
                        <span>评论</span>
                    </div>
                    <ul class="comment-list">
                        <li v-for="(item,index) in commentlist.rows" :key="index">
                            <div class="item-photo">
                                <img src="~/assets/img/widget-widget-photo.png" alt="" />
                            </div>
                            <div class="item-content">
                                <p class="author"><a href="javascript:;">{{item.nickname}}</a> 发布</p>
                                <p class="content" v-html='item.content'></p>
                            </div>
                            <div class="item-thumb">
                                <div><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{item.thumbup}}</div>
                            </div>
                        </li>            
                    </ul>
                    <!-- 分页条 -->
                    <div class="block" style="margin-left:20px">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page=this.currentPage
                            :page-sizes="[5,10,20,50]"
                            :page-size=this.pageSize
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="commentlist.total">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>

        <!-- 匿名吐槽 -->
        <div class="fl right-tag">
            <div class="block-btn">
                <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
                <a class="sui-btn btn-block btn-share" href="../submit" target="_blank">发吐槽</a>
            </div>
        </div>

        <!-- 回复弹窗 -->
        <el-dialog
            title="评论"
            :visible.sync="replyDialogVisible"
            width="40%"  >
            <div class="quill-editor" 
                :content="content"
                v-quill:myQuillEditor="editorOption"
                @change="onEditorChange($event)">
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="replyDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doReply">提 交</el-button>
            </span>
        </el-dialog>    

        <div class="clearfix"></div>
    </div>
</div>
</template>
<script>
import '~/assets/css/page-sj-spit-detail.css'
import axios from 'axios'
import spitApi from '@/api/spit'
export default {
    asyncData ({ params, error }) {
       return axios.all([spitApi.findById(params.id),spitApi.commentList(params.id, 1, 10)]).then(
          axios.spread(function(pojo,commentlist){
              return {pojo:pojo.data.data,commentlist:commentlist.data.data}
          })
       )
    },
    data(){
        return{
            currentPage:1,
            pageSize:5,
            total:0,
            replyDialogVisible: false,
            content: '说点什么呢？',
            editorOption: {
                // some quill options
                modules: {
                    toolbar: [
                    [{ 'size': ['small', false, 'large'] }],
                    ['bold', 'italic'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['link', 'image']
                    ]
                }
            }
        }
    },
    methods: {
        //评论弹窗，提交回复方法
        doReply() {
            spitApi.save({content: this.content, parentid: this.pojo.id}).then( res =>{
                if(res.data.flag){
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    });
                    this.replyDialogVisible = false //关闭窗口
                }else{
                    this.$message({
                        message: '提交出错',
                        type: 'error'
                    });
                }
            })
        },
        //点赞
        thumbup: function(id){
            spitApi.thumbup(id).then( res => {
                 if(res.data.flag){
                     alert('ok'+id);
                 }
            })
        },
        query(){
            spitApi.commentList(this.pojo.id, this.currentPage, this.pageSize).then((res)=>{
                this.commentlist=res.data.data;
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
        },
        //评论弹窗内容
        onEditorChange({ editor, html, text }) {
            console.log('editor change!', editor, html, text)
            this.content = html
        }
    }
}
</script>
<style scoped>
    .quill-editor {
        min-height: 200px;
        max-height: 400px;
        overflow-y: auto;
    }
</style>
