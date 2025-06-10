<template>
  <div class="step active">
    <p class="fs-5 fw-semibold mb-3">{{ currentQuestion.question }}</p>
    
    <div v-for="(option, id) in currentQuestion.options" :key="id">
      <div v-if="option.visible !== false" class="form-check mb-3">
        <input 
          class="form-check-input" 
          type="radio" 
          :id="id" 
          :value="id" 
          :checked="selectedOption === id"
          @change="$emit('update:selected-option', id)"
        >
        <label class="form-check-label" :for="id" v-html="option.text"></label>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentQuestion: {
    type: Object,
    required: true
  },
  selectedOption: {
    type: String,
    default: null
  }
})

defineEmits(['update:selected-option'])
</script>

<style scoped>
.step {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fw-semibold {
  font-weight: 600 !important;
}
</style>