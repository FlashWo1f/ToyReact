class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    if (name.match(/^on([\s\S]+)$/)) {
      // RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
      const event = RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase())
      this.root.addEventListener(event, value)
    }
    if (name === 'className')
      name = 'class'
    this.root.setAttribute(name, value)
  }
  appendChild(vchild) {
    vchild.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

export class Component {
  constructor() {
    this.children = []
    // 用 Object.create(null) 创建出来的对象 比较干净  没有 原型 没有 那些 toString 的方法
    this.props = Object.create(null)
  }
  setAttribute(name, value) {
    this.props[name] = value
    this[name] = value
  }
  mountTo(parent) {
    let vdom = this.render()
    vdom.mountTo(parent)
  }
  appendChild(vchild) {
    console.log('append', vchild)
    this.children.push(vchild)
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

export let ToyReact = {
  // 简单的 createElement
  // 2. 按照 MyComponent 的例子来说的话, MyComponent 标签内 标签 作为下面的children。
  createElement(type, attributes, ...children) {
    console.log("children", type, attributes, children)
    let element
    if (typeof type === 'string') {
      // example: div span 他们的type会是'div' 'span'
      element = new ElementWrapper(type)
    } else {
      // 如果不是 那就是自定义组件 那么 new 本身即可
      // 3. type: MyComponent, element = new MyComponent
      element = new type
    }
    // let element = document.createElement(type)
    // 4. 将name="a" id="spa" 以 props 的形式传入 MyComponent( props 未实现 )
    for(let name in attributes) {
      // element[name] = attributes[name]   wrong
      element.setAttribute(name, attributes[name])
    }
    const insertChildren = (children) => {
      for(let child of children) {
        if (typeof child === 'object' && child instanceof Array) {
          insertChildren(child)
        } else {
            // 如果是纯文本就创建一个 createTextNode, feat: 不是Component 全部toString 处理  比如说 {true}
            // 如果 下面三个类都不是的话 都转成字符去处理
          if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper)) {
            child = String(child)
          }
          if (typeof child === 'string') {
            child = new TextWrapper(child)
          }
          // 把children插入this.children
          element.appendChild(child)
          console.log("ele", element)
        }
      }
    }
    insertChildren(children)
    return element
  },
  render(vdom, element) {
    vdom.mountTo(element)
    // element.appendChild(vdom)
  }
}