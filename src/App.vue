<template>
  <div id="app">
    <BaseLayout/>
  </div>
</template>

<script>
import BaseLayout from '@/components/layouts/BaseLayout';
import { getToken } from '@/utils/auth';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    BaseLayout
  },
  mounted() {
    if (getToken()) {
      this.getIsLogin(true)
    }
  },
  methods: {
    ...mapActions([
      'getIsLogin'
    ]),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4fbfe;
  height: 100vh;
}
</style>
