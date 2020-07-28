## 极客时间 ToyReact
```
npm init 
npm install webpack -D
npm i @babel/preset-env -D
npm i @babel/core -D
npm i webpack webpack-cli -g 
<!-- 配置环境变量 -->
webpack
<!-- 生成 dist/main.js -->
npm i @babel/plugin-transform-react-jsx -D
```


```js
import { ToyReact } from './ToyReact.js'

let a = <div name="a" id="spa">
  <span>hello</span>
  <span>world</span>
  <span>!</span>
</div>
console.log('main.js;', a)
document.body.appendChild(a)
/**
 * @编译
 */

//  四次 调用 ToyReact.createElement 跟 React 是一样的
/*
var a = ToyReact.createElement("div", {
  name: "a",
  id: "spa"
}, 
  ToyReact.createElement("span", null, "hello"), 
  ToyReact.createElement("span", null, "world"), 
  ToyReact.createElement("span", null, "!")
);
console.log('main.js;', a);
document.body.appendChild(a);
*/
```

## createElement

createElement 中用到什么，就在 ElementWrapper 等类中去实现什么， 这是一个相对应的关系

## Component
```js
export class Component {
  setAttribute(name, value) {
    this[name] = value
  }
  mountTo(parent) {
    let vdom = this.render()
    vdom.mountTo(parent)
  }
}
// 在 组件中 引入 Component 去 继承  把公共方法解耦出来
```

## 重要方法

```
setAttribute
appendChild
mountTo
```