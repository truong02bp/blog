<template>
  <div>
    <input type="text" v-model="task" style="margin-right: 20px; height: 30px; width: 300px">
    <button type="submit" style="height: 35px; width: 80px" @click="onSubmit">Add task</button>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  props: {
    addTask: Function,
  },
  data() {
    return {
      task: ""
    }
  },
  methods: {
    onSubmit() {
      this.$props.addTask(this.task);
      this.task = "";
    }
  }
}
</script>

<style scoped>
</style>