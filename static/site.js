// Create table of contents.
const createToc = () => {
  const div = document.querySelector('div#toc')
  const nodes = Array.from(document.querySelectorAll('h2'))
        .filter(node => !node.classList.contains('lede'))
  console.log('NODES', nodes.length)
  if (! nodes.length) {
    div.classList.remove('dropdown-content')
    div.parentNode.classList.add('disabled')
  }
  else {
    const text = nodes
          .map(node => `<a href="#${node.id}"><span class="nowrap">${node.textContent}</span></a>`)
          .join('<br/>')
    div.innerHTML = text
  }
}

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

// Convert figure references.
const fixFigRefs = () => {
  const lookup = new Map()
  const figs = Array.from(document.querySelectorAll('figure'))
        .forEach((node, i) => {
          lookup.set(node.getAttribute('id'), i+1)
          const caption = node.querySelector('figcaption')
          caption.textContent = `Figure ${i+1}: ${caption.textContent}`
        })
  Array.from(document.querySelectorAll('a[href=FIG]'))
    .forEach(node => {
      if (lookup.has(node.textContent)) {
        node.setAttribute('href', `#${node.textContent}`)
        node.textContent = `Figure ${lookup.get(node.textContent)}`
      }
      else {
        node.setAttribute('href', '#FIXME')
        node.textContent = `Figure FIXME`
      }
    })
}

// Perform transformations once page has loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  createToc()
  fixBibRefs()
  fixFigRefs()
})
