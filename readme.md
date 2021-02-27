<h1 align="center">obj-string</h1>
<div align="center">
  <a href="https://npmjs.org/package/obj-string">
    <img src="https://badgen.now.sh/npm/v/obj-string" alt="version" />
  </a>
  <a href="https://bundlephobia.com/result?p=obj-string">
    <img src="https://img.badgesize.io/MarshallCB/obj-string/main/es.js?compression=brotli" alt="install size" />
  </a>
</div>

<div align="center">Convert objects to strings for code generation</div>

---

## Usage

See all valid object properties and limitations [here](https://github.com/WebReflection/stringified-handler#usage--limitations)

```js
import { stringifyObject } from 'obj-string'

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
```

---

## References

Code heavily inspired by [`stringified-handler`](https://github.com/WebReflection/stringified-handler)

---

## License

MIT © [Marshall Brandt](https://m4r.sh)
