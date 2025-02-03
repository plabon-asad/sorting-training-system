<script setup>
const props = defineProps({
  message: {
    type: String,
    default: 'No data found to sorting.',
  },
  color: {
    type: String,
    default: 'var(--primary-color)',
  },
});
</script>
<template>
  <div class="no-data" :style="{ color: color }">
    {{ message }}
  </div>
</template>
<style scoped>
.no-data {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

}
</style>