<template>
  <div class="result-container">
    <div v-html="result"></div>
  </div>
</template>

<script setup>
defineProps({
  result: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.result-container {
  animation: fadeIn 0.3s ease;
}

.result-container a {
  text-decoration: underline;
  color: #0d6efd;
}

.result-container a:hover {
  text-decoration: none;
}
</style>