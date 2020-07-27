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
