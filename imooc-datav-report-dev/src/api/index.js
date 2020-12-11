import request from '../plugins/http'

export function screenDataRequest() {
  return request({
    url: '/screen/data',
    method: 'get',
    params: {}
  })
}

export function wordcloudRequest() {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: {}
  })
}

export function mapScatterRequest() {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: {}
  })
}
