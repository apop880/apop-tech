export function clickOutside(node, target) {
  
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        if (event.target.className.indexOf(target) < 0) {
          node.dispatchEvent(
            new CustomEvent('click_outside', node)
          )
        }
      }
    }
  
      document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
      }
  }