import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component {
  render() {
    return <div>
      <div>{this.children}</div>
      <div>{true}??</div>
      <span>hello </span>
      <span>world!</span>
    </div>
  }
}

let a = <MyComponent name="a" id="spa">
  <div>hahah</div>
</MyComponent>
// document.body.appendChild(a)
ToyReact.render(
  a,
  document.body
)
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
