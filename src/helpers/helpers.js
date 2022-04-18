// UTILITY FUNCTION FOR APPENDING ONE OR MORE NODES TO A PARENT
export function appendChildren(parent, children) {
  for (let index = 0; index < children.length; index++) {
    parent.appendChild(children[index]);
  }
}

export function addClassToNodes (nodes, className) {
    nodes.forEach(node => {
        node.classList.add(className);
    });
}