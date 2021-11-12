<template>
    <div>
        昵称:<input v-model="name">
        <button @click="connect">登录聊天室</button>
        发送给：
        <input v-model="message.to">
        消息：<input v-model="message.message">
        <button @click="send">发送</button>
        接受到消息：
        <div v-html="info">
        </div>
    </div>
</template>
<script>
    import SockJS from "sockjs-client"
    import Stomp from "stompjs"
    export default {
        data(){
            return {
                name:"",
                stompClient:null ,
                message:{
                    from:"from",
                    to:'',
                    message:''
                },
                info:""
            }
        },
        methods:{
            //登录到聊天室
            connect(){
                let socket=new SockJS('http://localhost:9013/tensquare')
                this.stompClient = Stomp.over(socket)
                //登录到聊天室的用户id
                this.stompClient.connect( {"from": this.name}, this.onConnected);
            },
            onConnected(frame) {
                this.stompClient.subscribe('/topic/send', this.callback)
                //this.stompClient.subscribe('/ximala/topic/send', this.callback)
            },
            callback(msg){
                let body= JSON.parse(msg.body)
                this.info += "<br>"+body.date+"  "+ body.message
            },
            send(){
                this.stompClient.send("/app/send", {}, JSON.stringify(this.message));
            }
        }
    }
</script>
