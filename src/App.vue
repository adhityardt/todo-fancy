<template>
  <div id="app">
    <div v-if="!getToken()" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
      return {
        isLogin: true
      }
    },
    methods: {
      getToken () {
        return localStorage.getItem('token')
      }
    },
    beforeCreate () {
      if (!localStorage.getItem('id')) {
        localStorage.setItem('id', '12345')
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
