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

Vue.use(vueVuexPersist, store, [options]);
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

## API

options参数可选，当没有传入options参数时候，默认会将全部state缓存，生命周期为session，即使用sessionStorage存储。
```javascript
// persist all state
Vue.use(vueVuexPersist, store);
```
options为数组时，会将数组中的每一项缓存，生命周期为session。
```javascript
Vue.use(vueVuexPersist, store, ['state1', 'state2']);
```

options也可以为对象，对象包括session,local属性，分别代表了state的缓存生命周期
```javascript
Vue.use(vueVuexPersist, store, {
  session: ['state1', 'state2'],
  local: ['state3', 'state4']
});
```



## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, gaoge
