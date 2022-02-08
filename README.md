void-elements
==============

### :memo: Object of "void elements" defined by the HTML Standard

Exports an `Object` of "void element" node names as defined by the HTML spec.

The list is programatically generated from the [latest WHATWG HTML Standard](https://html.spec.whatwg.org/multipage/syntax.html#void-elements).

[![npm version](https://img.shields.io/npm/v/void-elements.svg?style=flat)](https://www.npmjs.org/package/@achmadk/void-elements)

:wrench: Usage
-----
### 1. node.js
```js
const voidElements = require('@achmadk/void-elements');

assert(!voidElements['span'], '<span> is not a void element');
assert(voidElements['img'], '<img> is a void element');
```

### 2. vite js (if have error importing `void-elements`)
```js
import { defineConfig } from 'vite'

export default defineConfig({
  // rest of your vite configuration
  resolve: {
    alias: [
      // another aliases
      {
        find: 'void-elements',
        replacement: '@achmadk/void-elements'
      }
    ]
  }
})
```

License
-------

MIT
