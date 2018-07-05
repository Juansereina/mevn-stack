<template>
  <v-app>
    <v-toolbar app color="amber">
      <v-spacer></v-spacer>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-spacer></v-spacer>
    <v-content>
      <Form @addTask="addNewTask" />
      <List :items="items"/>
    </v-content>
  </v-app>
</template>
<script>
import Form from './components/task-form';
import List from './components/task-list';

export default {
  name: 'App',
  components: {
    Form,
    List
  },
  data () {
    return {
      title: 'MEVN - STACK',
      items:[]
    }
  },
  methods:{
    addNewTask: function (task){
      this.items.push(task);
    }
  }
}
</script>
