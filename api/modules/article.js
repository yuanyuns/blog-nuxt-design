export default ({request}) => ({
  GET_ARTICLE_LIST(params) {
    return request({
      url: '/article/showList',
      method: 'get',
      params
    })
  },
  GET_ARTICLE_INFO(params = {}) {
    return request({
      url: '/article/getInfo',
      method: 'get',
      params
    })
  },
  GET_ARCHIVE(params = {}) {
    return request({
      url: '/article/archive',
      method: 'get',
      params
    })
  },
  ADD_LINK(data = {}) {
    return request({
      url: '/link/save',
      method: 'post',
      data
    })
  },
  SHOW_LINK(data = {}) {
    return request({
      url: '/link/showList',
      method: 'get',
      data
    })
  },
  ADD_COMMENT(data = {}) {
    return request({
      url: '/comment/save',
      method: 'post',
      data
    })
  }, SHOW_COMMENT_LIST(data = {}) {
    return request({
      url: '/comment/show',
      method: 'get',
      params: data
    })
  }
})
