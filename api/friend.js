import request from '@/utils/request'

export default {
    /*推荐好友列表，暂时先返回异性列表*/
    list() {
        return  request({
            url: `/friend/list`,
            method: 'get'
        });
    },
    //返回我的好友列表
    mylist(){
        return new request({
            url:"/friend/mylist",
            method:"get",
        });
    },
    //查询我的喜欢和被喜欢
    getLove(){
        return request({
           url: "/friend/getLove",
            method: "get",
        });
    },
    //喜欢,type=1是喜欢，type=0就是不喜欢了
    like(id,type) {
        return request({
            url: `/friend/like/${id}/${type}`,
            method: 'put'
        })
    },
    //我的消息列表
    mylist() {
        return request({
            url: `/friend/mylist`,
            method: 'get'
        })
    },
    //返回交友模块的前三个用户的活动
    findTop3(){
      return new request({
          url:"/friend/findTop3",
          method: "get"
      })  ;
    },
    //为我推荐的异性的匹配度高的交友列表
    commendList(page,size){
        return new request({
           url:`/friend/commend/${page}/${size}`,
           method:"get",
        });
    },
    //热门好友排行榜
    getHotGaths(){
        return new request({
           url:`/friend/hotGaths`,
           method:"get"
        });
    }
}
