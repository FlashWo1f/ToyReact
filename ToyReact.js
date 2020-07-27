class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(vchild) {
    vchild.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
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
  createElement(type, attributes, ...children) {
    let element
    if (typeof type === 'string') {
      // example: div span 他们的type会是'div' 'span'
      element = new ElementWrapper(type)
    } else {
      // 如果不是 那就是自定义组件 那么 new 本身即可
      element = new type
    }
    // let element = document.createElement(type)
    for(let name in attributes) {
      // element[name] = attributes[name]   wrong
      element.setAttribute(name, attributes[name])
    }
    for(let child of children) {
      // 如果是纯文本就创建一个 createTextNode
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      element.appendChild(child)
    }
    return element
  },
  render(vdom, element) {
    vdom.mountTo(element)
    // element.appendChild(vdom)
  }
}