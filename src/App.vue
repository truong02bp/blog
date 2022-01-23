<template>
  <div class="container">
    <AddTask/>
    <ListTask/>
  </div>
</template>

<script>
import AddTask from "@/components/AddTask";
import ListTask from "@/components/ListTask";
export default {
  name: 'App',
  data() {
    return {
      tasks: []
    }
  },
  components: {
    AddTask,
    ListTask
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
