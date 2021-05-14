# Vue Query Sync

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm package](https://img.shields.io/npm/v/vue-query-sync.svg)](https://www.npmjs.org/package/vue-query-sync) [![downloads](https://img.shields.io/npm/dt/vue-query-sync.svg)](https://www.npmjs.com/package/vue-query-sync) [![size](https://img.shields.io/bundlephobia/minzip/vue-query-sync)](https://www.npmjs.com/package/vue-query-sync)

A Vue2.x directive to update your query strings after each input and sync your input elements with your search bar to having refresh-proof forms.

<img src="https://raw.githubusercontent.com/kaangokdemir/vue-query-sync/master/example/example.gif"/>

## Installation

```bash
npm i vue-query-sync
```

## Dependencies

- VueJs 2.6.x
- Vue Router 3.x

## Usage

```js
import VueQuerySync from 'vue-query-sync'
Vue.use(VueQuerySync)

// or

Vue.directive('query', VueQuerySync)
```

```html
// Automatically adds ?state=myValue query after typing.
<input v-query="country" />

// Automatically adds ?city=myValue query after typing.
<input v-query="price" />
```

### For More, please check the [Example](./example/App.vue)

## Build

```bash
npm run build
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Contributors

Kaan Gökdemir - Author ([@kaangokdemir](https://twitter.com/kaangokdemir)) - [kaangokdemir.com](https://kaangokdemir.com)

## License

MIT
