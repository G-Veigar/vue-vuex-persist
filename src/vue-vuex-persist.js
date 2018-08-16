
const vuexKeeperPlugin = {
  install(Vue, store, options) {
    window.addEventListener('beforeunload', () => {
      const sessionState = {};
      const localState = {};
      if (!options) {
        Object.keys(store.state).forEach((key) => {
          sessionState[key] = store.state[key];
        });
        sessionStorage.setItem('sessionState', JSON.stringify(sessionState));
      } else if (options instanceof Array) { // Array options
        Object.keys(options).forEach((key) => {
          sessionState[key] = store.state[key];
        });
        sessionStorage.setItem('sessionState', JSON.stringify(sessionState));
      } else if (options.toString() === '[object Object]') { // Object options
        options.session.forEach((key) => {
          sessionState[key] = store.state[key];
        });
        options.local.forEach((key) => {
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
