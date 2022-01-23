<template>
  <div>
    <input type="text" v-model="task" style="height:30px; width:300px"/>
    <button type="submit" style="height:35px; width:80px; margin-left:30px" @click="addTask(task)">Add task</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AddTask",
  data() {
    return {
      task: ""
    }
  },
  methods: {
    ...mapActions(['addTask'])
  }
}
</script>

<style scoped>

</style>