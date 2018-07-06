<template>
  <v-app>
    <v-toolbar app color="amber">
      <v-spacer></v-spacer>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-spacer></v-spacer>
    <v-content>
      <Form @addTask="addNewTask" :updateItem="updateItem" />
      <List @removeTask="removeTask" @updateTask="updateTask" :items="items"/>
    </v-content>
  </v-app>
</template>
<script>
import Form from './components/task-form';
import List from './components/task-list';
import api from './api.js';
export default {
  name: 'App',
  components: {
    Form,
    List
  },
  data () {
    return {
      title: 'MEVN - STACK',
      items:[],
      updateItem: {},
      update: false
    }
  },
  methods:{
    addNewTask: async function (task) {
      if(this.update){        
      const response = await api.updateTask(task);
       this.items = this.items.map(item =>{
         if(item._id === task._id){
           item = task;           
         }
         return item
       })
        return this.update = false;
      }
      const response = await api.saveTask(task);   
      this.items.unshift(response.data.result);
    },
    removeTask: async function (taskId) {
      const index = this.items.find( item => item._id === taskId);      
      await api.removeTask(taskId) 
      this.items.splice(index, 1);
    },
    updateTask: async function (task) {      
      this.updateItem = task;
      this.update = true;
    }
  },
  mounted: async function () {
    const result = await api.getAllTask();
    this.items = result.data.result;  
 }
}
</script>
