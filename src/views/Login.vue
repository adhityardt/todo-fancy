<template>
  <div>
    <h1>Login Page</h1>
    <TemplateLogin/>
  </div>
</template>

<script>
import TemplateLogin from '@/components/TemplateLogin.vue'
export default {
  name: 'Login',
  components: {TemplateLogin},
  beforeCreate () {
    if (localStorage.getItem('token')) {
      this.$router.push({name: 'mainpage'})
    }
  }
}
</script>

<style>

</style>
