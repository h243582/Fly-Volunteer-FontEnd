import request from '@/utils/request';

export default {
    // 分页查询
    page(page,size) {   
        return request({
          url: `/spit/search/${page}/${size}`,
          method: 'get'
        })
    },
    // 根据条件分页查询
    getListByPagination(currentPage, pageSize, searchMap) {
        return request({
            url: `/spit/search/${currentPage}/${pageSize}`,
            method: "post",
            data: searchMap,
        });
    },
    findById(id) {
        return request({
            url: `/spit/${id}`,
            method: "get",
        });
    },
    /*评论列表*/
    commentList(id, page, size) {
        return request({
            url:`/spit/comment/${id}/${page}/${size}`,
            method: "get",
        });
    },
    /*点赞 */
    thumbup(id) {
        return request({
            url: `/spit/thumbup/${id}`,
            method: "put",
        });
    },
    /*发布吐槽*/
    save(pojo) {
        return request({
            url: "/spit",
            method: "post",
            data: pojo
        });
    },

    //查询热门吐槽列表
    getHotSpits(){
        return new request({
           url:"/spit/hotSpits",
           method:"get",
        });
    }
}

