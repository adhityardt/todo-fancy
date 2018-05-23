
<template>
<div class="container">
  <div class="row" style="justify-content: center;">
    <div class="col" style="background-color: white; padding: 60px; border: 1px solid #e6e6e6;">
      <h3 class="text-center" style="margin-top:0">Todo</h3>
      <p class="text-center" style="color:#999;font-weight:700;font-size:17px;line-height:20px;">Sign up to post and see your personal todo list</p>
      <div class="form-group">
        <input type="text" class="form-control" v-model="fullname" placeholder="Full Name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-default" @click="registerUser" style="width:100%;background-color:#3897f0;color:white;"><b>Sign Up</b></button>
      </div>
      <p class="text-center" style="color:#999;font-weight:700;font-size:14px;line-height:18px;">
          By signing up, you agree to our <br> <b style="color:#000">Terms</b> & <b style="color:#000">Privacy Policy</b>.
      </p>
      <br>
      <p class="text-center">
          Have an account? <a @click="changeLogin" style="cursor: pointer;">Log in</a>
      </p>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'TemplateSignup',
  data () {
    return {
      fullname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser () {
      let self = this
      axios 
        .post('https://mysterious-sierra-38399.herokuapp.com/users/register', {
        fullname: self.fullname,
				username: self.email,
				password: self.password
        })
        .then(response => {
          if(response.data.result !== undefined) {
            self.$router.push({name: 'login'})
          }
        })
        .catch(err => {
          console.log(err)
        })
      
    },
    changeLogin () {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style>

</style>
