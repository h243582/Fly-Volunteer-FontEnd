
<template>
<!--  <section class="container">-->
<!--    <div class="wrapper release-tc">-->
<!--        <div class="release-box">-->
<!--            <h3>发布吐槽</h3>-->
<!--            <div class="quill-editor"-->
<!--                :content="content"-->
<!--                @change="onEditorChange($event)"-->
<!--                @blur="onEditorBlur($event)"-->
<!--                @focus="onEditorFocus($event)"-->
<!--                @ready="onEditorReady($event)"-->
<!--                v-quill:myQuillEditor="editorOption">-->
<!--            </div>-->
<!--            <div class="btns" >-->
<!--                <el-button type="danger" style="margin:10px" @click="doSubmit">发布</el-button>-->
<!--            </div>-->
<!--            <div class="clearfix"></div>-->
<!--        </div>-->
<!--    </div>-->
<!--  </section>-->

  <!--两列布局-->
  <div class="wrapper release-tc">
    <div class="release-box">
      <h3>发布吐槽</h3>
      <div class="editor">
        <textarea name="editor2"></textarea>
        <div class="btns">
          <button class="sui-btn btn-danger btn-release">发布</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>

import spitApi from '@/api/spit'
// import {quillRedefine} from 'vue-quill-editor-upload'  图片上传服务器组件


  export default {
    data () {
      return {
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
    // created () {
    //   this.editorOption = quillRedefine({
    //     // 图片上传的设置
    //     uploadConfig: {
    //       action: 'http://localhost:3000/upload', // 必填参数 图片上传地址
    //       // 必选参数 res是一个函数，函数接收的response为上传成功时服务器返回的数据
    //       // 你必须把返回的数据中所包含的图片地址 return 回去
    //       res: (response) => {
    //       return response.info
    //       },
    //       name: 'img' // 图片上传参数名
    //     }
    //   })
    // },
    mounted() {
      console.log('app init, my quill insrance object is:', this.myQuillEditor)
    },
    methods: {
        doSubmit() {
            spitApi.save(this.content,0).then( res =>{
                if(res.data.flag){
                    this.$message({
                            message: '发布成功',
                            type: 'success'
                    })
                    this.$router.push('/spit')
                }
            })
        },
        onEditorBlur(editor) {
            console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        },
        onEditorChange({ editor, html, text }) {
            console.log('editor change!', editor, html, text)
            this.content = html
        }
    }
  }
</script>

<style  scoped>
    /* .container {
        width: 80%;
        margin: 0 auto;
        padding: 50px 0;
    } */

    .quill-editor {
        min-height: 200px;
        max-height: 400px;
        overflow-y: auto;
    }
</style>

