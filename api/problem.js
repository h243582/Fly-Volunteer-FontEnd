import request from '@/utils/request';


export default {
    list(type, label, page, size) {
        return request({
            url: `/problem/${type}/${label}/${page}/${size}`,
            method: "get",
        });
    },
    /*推荐问题列表*/
    commendList(page,size){
        return request({
            url: `/problem/commendlist/${page}/${size}`  ,
            method: "get",
        });
    },
    //根据问题id查询
    getById(id) {
        return request({
            url: `/problem/${id}`,
            method: "get",
        });
    },
    save(pojo) {
        return request({
            url: "/problem",
            method: "post",
            data: pojo
        });
    },
    //返回前几个推荐问题
    getCommentListTop(num){
        return request({
           url:`/problem/top/${num}` ,
            method:"get",
        });
    },
    //根据问题id查询对应的标签id
    getLabelId(id){
        return request({
           url:`/problem/label/${id}`,
           method:"get",
        });
    },
    //查询我的回答列表
    getReplyList(page,size){
        return request({
           url:`reply/list/${page}/${size}`,
            method:"get",
        });
    },
    //查询我的问题列表
    getProblemList(page,size){
        return request({
           url:`/problem/search/${page}/${size}`,
            method:"post",
        });
    }
}

