import demo from '@/utils/request/demo.js'

export const demo_ = function (param) {
  return demo.post('/total', {
    param: param
  })
}