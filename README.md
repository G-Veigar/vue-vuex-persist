# vue-vuex-persist
> vuex持久化插件, Persist Vuex state by Web Storage

基于beforeunload事件，而不是vuex插件，比传统持久化方案效率更高。

## Installation
```
npm install vue-vuex-persist
```

## Usage

### 第一步：注册vue插件

```javascript
import Vue from 'vue';
// vuex store
import store from './store';
import vueVuexPersist from 'vue-vuex-persist';

Vue.use(vueVuexPersist, store, [options]);
```
### 第二步：混合state, 并实例化Store对象

```javascript
import vueVuexPersist from 'vue-vuex-persist';

// 默认state的定义
const state = {
  // state
};

// 调用vueVuexPersist.init(state)，将缓存的state属性，覆盖掉默认state属性, 得到一个混合后的state
const hybridState = vueVuexPersist.init(state);

export default new Vuex.Store({
  state: hybridState,
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
