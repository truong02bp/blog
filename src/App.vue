<template>
  <div class="container">
    <AddTask :add-task=addTask style="margin-bottom: 20px"/>
    <TaskList :tasks="tasks"/>
  </div>
</template>

<script>
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  data() {
    return {
      tasks: []
    }
  },
  components: {
    TaskList,
    AddTask
  },
  methods: {
    addTask(task) {
      this.tasks.push({"name": task, "done": false});
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: start;
  width: 100vw;
  height: 100vh;
  margin-top: 100px;
  margin-left: 500px;
}
</style>
