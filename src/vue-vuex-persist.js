
const vuexKeeperPlugin = {
  install(Vue, store, needKeepData) {
    window.addEventListener('beforeunload', () => {
      const sessionState = {};
      const localState = {};
      if (needKeepData instanceof Array) { // 数组参数
        Object.keys(needKeepData).forEach((key) => {
          sessionState[key] = store.state[key];
        });
        sessionStorage.setItem('sessionState', JSON.stringify(sessionState));
      } else if (needKeepData.toString() === '[object Object]') { // 对象参数
        Object.keys(needKeepData.session).forEach((key) => {
          sessionState[key] = store.state[key];
        });
        Object.keys(needKeepData.local).forEach((key) => {
          localState[key] = store.state[key];
        });
        sessionStorage.setItem('sessionState', JSON.stringify(sessionState));
        localStorage.setItem('localState', JSON.stringify(localState));
      }
    });
  },
  init(state) {
    let res = { ...state };
    const sessionStateJson = sessionStorage.getItem('sessionState');
    if (sessionStateJson) {
      res = { ...res, ...JSON.parse(sessionStateJson) };
    }
    const localStateJson = localStorage.getItem('localState');
    if (localStateJson) {
      res = { ...res, ...JSON.parse(localStateJson) };
    }
    return res;
  },
};

export default vuexKeeperPlugin;
