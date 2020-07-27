export let ToyReact = {
  createElement(type, attributes, ...children) {
    let element = document.createElement(type)
    for(let name in attributes) {
      // element[name] = attributes[name]   wrong
      element.setAttribute(name, attributes[name])
    }
    for(let child of children) {
      // 如果是纯文本就创建一个 createTextNode
      if (typeof child === 'string') {
        child = document.createTextNode(child)
      }
      element.appendChild(child)
    }
    return element
  }
}