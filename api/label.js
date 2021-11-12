import request from '@/utils/request';
import {getUser} from '@/utils/auth';

export default {
    updated (pojo) {
        return request({
            url: `/base/label/${pojo.id}`,
            method: "put",
            data: pojo,
        });
    },
    list(){
        return request({
            url: "/label/list",
            method: "get",
        });
    },
    getLabelByPage(page, size) {
        return request({
            url: `label/search/${page}/${size}`,
            method: "post",
        });
    },
    /*推荐标签*/
    hotLabel() {
        return request({
            url: "label/toplist",
            method: "get",
        });
    },
    /*热门标签*/
    hotList(){
        return request({
            url: "label/hotlist",
            method: "get"
        });
    },
    //全部标签列表
    allList(){
        return request({
           url:"label",
            method:"get"
        });
    },
    findById(lid){
        return request({
            url:`label/${lid}`,
            method:"get",
        });
    }
}


