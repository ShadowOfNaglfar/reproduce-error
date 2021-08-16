<template>
{{Entity.day}}
<button @click="toNextDay">End</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const Entity = computed(() => {
  return store.state.Entity;
});
</script>

<script>
export default {
  methods: {
    toNextDay() {
      this.Entity.day++;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
