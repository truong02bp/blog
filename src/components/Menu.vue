<template>
  <div>
    <div v-for="(task, index) in tasks" :key = "index">
      <input type="checkbox" v-model = "task.done"> {{ task.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
        tasks: [
          {name : "ABC", done : true},
          {name : "DEF", done : false},
          {name : "XYZ", done : true},
        ]
    }
  }
}
</script>

<style scoped>

</style>