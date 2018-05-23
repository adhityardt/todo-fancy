<template>
  <div class="home">
    <div class="card text-white bg-primary mb-3" style="width: 13rem;" v-for="todo of todos" :key="todo['.key']">
      <div class="card-header">{{todo.date}}</div>
      <div class="card-body">
        <div v-if="todo.status === 'uncomplete'">
          <div class="card-title">{{ todo.todo }}</div>
        </div>
        <div v-else>
          <strike class="card-title">{{ todo.todo }}</strike>
        </div>
      </div>
      <button class="btn btn-success" @click="updateStatus(todo['.key'], 'complete')"><i class="fas fa-check"></i></button>
      <button class="btn btn-danger" @click="deleteTodo(todo['.key'])"><i class="fas fa-times"></i></button>
    </div>
  </div>
</template>

<script>
import { ref } from '../firebase.js'
if (!localStorage.getItem('id')){
  localStorage.setItem('id', '12345')
}
export default {
  name: 'TemplateMainPage',
  firebase: {
    todos: ref.child(localStorage.getItem('id'))
  },
  methods: {
    updateStatus(key,status){
      ref.child(localStorage.getItem('id')).child(key).update({
        status: status
      })
    },
    deleteTodo(key){
      ref.child(localStorage.getItem('id')).child(key).remove()
    }
  }
}
</script>

<style>
.home{
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
</style>
