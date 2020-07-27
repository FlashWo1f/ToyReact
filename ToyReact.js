export let ToyReact = {
  createElement(type, attributes, ...children) {
    let element = document.createElement(type)
    for(let name in attributes) {
      // element[name] = attributes[name]   wrong
      element.setAttribute(name, attributes[name])
    }
    for(let child in children) {

    }
    return element
  }
}