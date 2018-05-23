<template>
  <div>
    <div class="topnav">
      <a class="active" @click="doLogout" style="cursor:pointer">Log Out</a>
      <a data-toggle="modal" data-target="#myModal" style="cursor:pointer" class="post">
        <span class="glyphicon glyphicon-pencil"></span>Add Todo List</a>
      <!-- <a class="active" @click="newArticle">Post Article</a> -->
    </div>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>To-do:</label>
              <input type="text" class="form-control" v-model="todo">
            </div>
            <div class="form-group">
              <label>Due date:</label>
              <input type="date" class="form-control" v-model="date">
            </div>
            <button type="submit" class="btn btn-warning" @click="postTodo()" data-dismiss="modal">POST</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '../firebase'
export default {
  name: 'TopNavBar',
  data () {
    return {
      todo: '',
      date: ''
    }
  },
  methods: {
    doLogout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('user')
      localStorage.removeItem('email')
      this.$router.push({name: 'home'})
    },
    postTodo () {
      let self = this
      console.log(localStorage.getItem('id'))
      ref.child(localStorage.getItem('id')).push({
        todo: self.todo,
        date: self.date,
        status: 'uncomplete'
      })
      this.todo = ''
      this.date = ''
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

.topnav a.post {
  float: left;
  background-color: #4CAF50;
  color: white;
}
</style>
