# vue-vuex-persist
> vuex持久化插件

## Installation
```
npm install vue-vuex-persist
```

## Usage

```javascript
import Vue from 'vue';
// vuex store
import store from './store';
import vueVuexPersist from 'vue-vuex-persist';

Vue.use(vueVuexPersist, store, keepInStoreState);
```

```javascript
import vueVuexPersist from 'vue-vuex-persist';

const defaultState = {
  // state
};

const state = vueVuexPersist.init(defaultState);

export default new Vuex.Store({
  state,
  mutations: {
    // mutations
  },
  actions: {
    // actions
  },
})
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, gaoge
