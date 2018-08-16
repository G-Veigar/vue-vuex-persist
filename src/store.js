// eslint-disable-next-line
import Vue from 'vue';
// eslint-disable-next-line
import Vuex from 'vuex';
import vueVuexPersist from './vue-vuex-persist';

Vue.use(Vuex);

// 需要保存的state
const keepInStoreState = {
  // 生命周期为session的state
  session: {
    sessionState: 'old',
  },
  // 生命周期为local的state
  local: {
    localState: 'old',
  },
};

const superState = {
  session: Object.keys(keepInStoreState.session),
  local: Object.keys(keepInStoreState.local),
};

// 普通state
const baseStore = {
  normalState: 'old',
};

// 原始state
const combineState = {
  ...keepInStoreState.session,
  ...keepInStoreState.local,
  ...baseStore,
};

// 真正的state
const state = vueVuexPersist.init(combineState);

export default new Vuex.Store({
  state,
  mutations: {
    // eslint-disable-next-line
    setSessionState(state, name) {
      // eslint-disable-next-line
      state.sessionState = name
    },
    // eslint-disable-next-line
    setLocalState(state, name) {
      // eslint-disable-next-line
      state.localState = name
    },
    // eslint-disable-next-line
    setNormalState(state, name) {
      // eslint-disable-next-line
      state.normalState = name
    },
  },
  actions: {

  },
});

export { superState };
