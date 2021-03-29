/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol'
// import 'core-js/es6/object'
// import 'core-js/es6/function'
// import 'core-js/es6/parse-int'
// import 'core-js/es6/parse-float'
// import 'core-js/es6/number'
// import 'core-js/es6/math'
// import 'core-js/es6/string'
// import 'core-js/es6/date'
// import 'core-js/es6/array'
// import 'core-js/es6/regexp'
// import 'core-js/es6/map'
// import 'core-js/es6/weak-map'
// import 'core-js/es6/set'
// import 'core-js/es6/promise'
// import 'core-js/es6/reflect'
// import 'core-js/es7/symbol'
// import 'core-js/es7/array'
// import 'core-js/es7/object'
// import 'core-js/es7/map'
// import 'core-js/es7/set'
// import 'classlist.js'
// import 'raf/polyfill'


//import for core-js version >3
import 'core-js/es/array'
import 'core-js/es/object'
import 'core-js/es/function'
import 'core-js/es/parse-float'
import 'core-js/es/parse-int'
import 'core-js/es/number'
import 'core-js/es/math'
import 'core-js/es/string'
import 'core-js/es/date'
import 'core-js/es/regexp'
import 'core-js/es/reflect'
import 'core-js/es/symbol'
import 'core-js/es/map'
import 'core-js/es/weak-map'
import 'core-js/es/set'

import 'classlist.js'
import 'raf/polyfill'

/***************************************************************************************************
 * CUSTOM POLYFILLS
 */

// Internet Explorer 10 & 11
if (typeof document['documentMode'] === 'number') {
  // eslint-disable-next-line
  Object.prototype[Symbol.toStringTag] = Object.prototype[Symbol.toStringTag]
}

// "dataset" polyfill for Internet Explorer 10
// SOURCE: https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/Element/prototype/dataset/polyfill.js
if (document['documentMode'] === 10) {
  Object.defineProperty(Element.prototype, 'dataset', {
    get: function() {
      const element = this
      const attributes = this.attributes
      const map = {}

      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i]

        if (attribute && attribute.name && (/^data-\w[\w-]*$/).test(attribute.name)) {
          const name = attribute.name
          const value = attribute.value

          const propName = name.substr(5).replace(/-./g, function (prop) {
            return prop.charAt(1).toUpperCase()
          })

          Object.defineProperty(map, propName, {
            enumerable: true,
            get: function() {
              return this.value
            }.bind({value: value || ''}),
            set: function setter(name, value) {
              if (typeof value !== 'undefined') {
                this.setAttribute(name, value)
              } else {
                this.removeAttribute(name)
              }
            }.bind(element, name)
          })
        }
      }

      return map
    }
  })
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(css) {
    let node = this
    while (node) {
      if (node.matches(css)) return node
      else node = node.parentElement
    }
    return null
  }
}

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}
