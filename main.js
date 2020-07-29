import { ToyReact, Component } from './ToyReact.js'


class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
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
const b = <Board />
// document.body.appendChild(a)
ToyReact.render(
  b,
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
