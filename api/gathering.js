import request from '@/utils/request'

const api_name = 'gathering'
export default {
  page(page, size) {   
    return request({
      url: `/${api_name}/search/${page}/${size}`,
      method: 'post'
    })
  },
  findById(id) {
    return request({
      url: `/${api_name}/${id}`,
      method: 'get'
    })
  }
}