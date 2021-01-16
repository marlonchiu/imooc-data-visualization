import request from '../libs/http'

export function screenMobileRequest () {
  return request({
    url: '/screen/mobile',
    method: 'get',
    params: {}
  })
}
