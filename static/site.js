// Convert bibliography citation links.
const fixBibRefs = () => {
  const bibStem = window.location.pathname
        .split('/')
        .filter(s => s.length > 0)
        .map(s => '..')
        .join('/')
        + '/references/#'
  Array.from(document.querySelectorAll('a[href=BIB]'))
    .forEach(node => {
      const cites = node.textContent
	    .split(',')
	    .filter(content => content.length > 0)
	    .map(content => `<a href="${bibStem}${content}" class="citation">${content}</a>`)
      const newNode = document.createElement('span')
      newNode.innerHTML = '[' + cites.join(',') + ']'
      node.parentNode.replaceChild(newNode, node)
    })
}

// Perform transformations once page has loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  fixBibRefs()
})
