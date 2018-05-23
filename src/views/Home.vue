<template>
  <div class="home">
    <TemplateSignup/>
  </div>
</template>

<script>
import TemplateSignup from '@/components/TemplateSignup.vue'
import { db } from '../firebase'
export default {
  name: 'SignUp',
  data () {
    return {
      student: '',
      dataStudents: []
    }
  },
  components: {
    TemplateSignup
  },
  beforeCreate () {
    if(localStorage.getItem('token')){
      this.$router.push({name:'mainpage'})
    }
  }
}
</script>
