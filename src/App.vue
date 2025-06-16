<template>
  <div id="app">
    <div id="form-container" class="shadow-sm">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <img v-for="(logo, idx) in appConfig.logos" :key="idx" :src="logo.src" :alt="logo.alt" :style="logo.style" />
      </div>

      <h3 class="mb-4 fw-semibold text-dark">
        {{ appConfig.mainTitle }}
      </h3>

      <!-- Apenas mostra o título da etapa se NÃO for o resultado final -->
      <h4 v-if="!showFinalResult" id="etapaTitulo" class="mb-4 pb-2 border-bottom text-primary text-start">
        Etapa {{ currentStep }} de {{ maxSteps }}
      </h4>

      <QuestionStep v-if="!showFinalResult" :current-question="currentQuestion" :selected-option="selectedOption"
        @update:selected-option="selectOption" />

      <ResultDisplay v-else :result="finalResult" />

      <div class="d-flex justify-content-start gap-2 mt-4">
        <button v-if="showBackButton" @click="prevStep" class="btn btn-secondary">
          Anterior
        </button>
        <button v-if="showNextButton && !showFinalResult" @click="nextStep" class="btn btn-primary"
          :disabled="!selectedOption">
          Próximo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { appConfig } from '@/assets/appConfig'
import QuestionStep from '@/components/QuestionStep.vue'
import ResultDisplay from '@/components/ResultDisplay.vue'
import { useFormStore } from '@/stores/formStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useFormStore()

// Destructure state and getters
const {
  currentQuestion,
  currentStep,
  showBackButton,
  showNextButton,
  selectedOption,
  showFinalResult,
  finalResult,
  maxSteps
} = storeToRefs(store)


// Destructure actions
const { selectOption, nextStep, prevStep } = store
</script>
<style scoped>
@import '@/assets/styles.css';
</style>