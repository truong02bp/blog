<template>
  <div v-for="(task, index) in tasks" :key="index">
    <Task :task="task"/>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "TaskList",
  components: {Task},
  props: {
    tasks: Array
  }
}
</script>

<style scoped>

</style>