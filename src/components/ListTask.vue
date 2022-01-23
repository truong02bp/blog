<template>
  <div>
    <div v-for="(task,index) in tasks" :key="index" class="box">
      <input type="checkbox" style="margin-right: 30px"/>
      <p>{{ task.task }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ListTask",
  computed: {
    ...mapGetters(['tasks'])
  }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
}
</style>