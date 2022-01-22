<template>
  <div style="display: flex; align-items: center">
    <input type="checkbox" v-model="isDone">
    <p style="margin-left: 20px;" :class="{done: isDone}">{{ task["name"] }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data(){
    return {
      isDone: false
    }
  }
}
</script>

<style scoped>
.done {
  color: green;
}
</style>