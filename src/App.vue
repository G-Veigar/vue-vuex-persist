<template>
  <div id="app">
    <h1>vue-vuex-persist</h1>
    <p>sessionState: {{sessionState}} <button @click="set('setSessionState')">set new</button> </p>
    <p>localState: {{localState}} <button @click="set('setLocalState')">set new</button></p>
    <p>normalState: {{normalState}} <button @click="set('setNormalState')">set new</button></p>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState(['sessionState', 'localState', 'normalState']),
  },
  methods: {
    ...mapMutations(['setSessionState', 'setLocalState', 'setNormalState']),
    set(mutation) {
      this[mutation]('new!!!');
    },
    reset() {
      this.setSessionState('old');
      this.setLocalState('old');
      this.setNormalState('old');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
