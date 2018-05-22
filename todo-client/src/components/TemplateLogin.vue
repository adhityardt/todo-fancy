<template>
  <div>
     <div class="col-md-5" style="background-color: white; padding: 60px; border: 1px solid #e6e6e6;">
      <h3 class="text-center" style="margin-top:0">Blog</h3>
      <p class="text-center" style="color:#999;font-weight:700;font-size:17px;line-height:20px;">Sign In to see and post articles.</p>
      <div class="form-group">
        <input type="text" class="form-control" v-model="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-default" @click="checkLoginStatus" style="width:100%;background-color:#3897f0;color:white;"><b>Sign In</b></button>
        <facebook-login class="button" appId="472735733142228" @login="getUserData" > </facebook-login>
      </div>
      <p class="text-center" style="color:#999;font-weight:700;font-size:14px;line-height:18px;">
          By signing up, you agree to our <br> <b style="color:#000">Terms</b> & <b style="color:#000">Privacy Policy</b>.
      </p>
      <br>
      <p class="text-center">
          New to Blog? <a @click="changeToRegister" style="cursor: pointer;">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import facebookLogin from 'facebook-login-vuejs'
import axios from 'axios'
export default {
  name: 'TemplateLogin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components:{
    facebookLogin
  },
  methods: {
    checkLoginStatus () {
      let self = this
      axios
        .post('http://localhost:3000/users/login', {
          username: this.email,
          password: this.password
        })
        .then( function (response) {
          if (response.data.token){
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', response.data.fullname)
            localStorage.setItem('email', response.data.username)
            localStorage.setItem('id', response.data.id)
            self.$router.push({name: 'mainpage'})
          }
        })
        .catch( function (err) {
          console.log(err)
        })
    },
    changeToRegister () {
      this.$router.push({name: 'home'})
    },
    getUserData () {
      let self = this
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          FB.api('/me', { fields: [ 'name', 'email' ] }, function(data) {
            axios
              .post('https://safe-plains-12311.herokuapp.com/loginfacebook', {
                full_name: data.name,
                username: data.name,
                email: data.email,
                password: 'Abc12345'
              })
              .then(result => {
                console.log(result);
                if (result.data.token) {
                  localStorage.setItem('token', result.data.token)
                  localStorage.setItem('id', result.data.user.id)
                  localStorage.setItem('username', result.data.user.username)
                  localStorage.setItem('role', result.data.user.role)
                  localStorage.setItem('email', result.data.user.email)
                  
                  window.location.reload()
                }
              })
              .catch(err => {
                console.log(err)
              })
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
