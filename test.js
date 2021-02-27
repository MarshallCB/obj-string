const { stringifyObject } = require('./dist')

let str = stringifyObject({
  data: {
    list: [0,2,4,6,8],
    nested: {
      value: 4
    }
  },
  method(param){
    console.log(param)
  }
})

console.log(str)