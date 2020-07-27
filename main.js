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

// var a = _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
//   name: "a"
// });