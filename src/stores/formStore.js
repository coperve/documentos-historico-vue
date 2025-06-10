import { defineStore } from 'pinia'
import { formConfig } from '../assets/formConfig'

// Função para calcular o caminho mais longo
function calculateMaxSteps(config) {
  let maxDepth = 0
  
  function traverse(currentStep, depth) {
    const question = config[currentStep]
    if (!question) {
      if (depth > maxDepth) maxDepth = depth
      return
    }
    
    Object.values(question.options).forEach(option => {
      if (option.next) {
        traverse(option.next, depth + 1)
      } else {
        if (depth + 1 > maxDepth) maxDepth = depth + 1
      }
    })
  }
  
  traverse('pergunta1', 0)
  return maxDepth
}

export const useFormStore = defineStore('form', {
  state: () => ({
    history: ['pergunta1'],
    choices: [null],
    selectedOption: null,
    showFinalResult: false,
    finalResult: ''
  }),
  
  getters: {
    currentQuestion: (state) => {
      const currentStep = state.history[state.history.length - 1]
      return formConfig[currentStep]
    },
    currentStep: (state) => state.history.length,
    maxSteps: () => calculateMaxSteps(formConfig), // Agora como getter
    showBackButton: (state) => state.history.length > 1 || state.showFinalResult,
    showNextButton: (state) => {
      if (state.showFinalResult) return false
      const current = state.history[state.history.length - 1]
      return formConfig[current] && 
             Object.values(formConfig[current].options).some(opt => opt.visible !== false)
    }
  },
  actions: {
    selectOption(optionId) {
      this.selectedOption = optionId
    },
    nextStep() {
      if (!this.selectedOption) return
      
      const currentStep = this.history[this.history.length - 1]
      const currentIndex = this.history.length - 1
      
      this.choices[currentIndex] = this.selectedOption
      
      const nextStep = formConfig[currentStep].options[this.selectedOption].next
      
      if (nextStep) {
        this.history.push(nextStep)
        this.choices.push(null)
        this.selectedOption = null
      } else {
        this.showFinalResult = true
        this.generateFinalResult()
      }
    },
    prevStep() {
      if (this.showFinalResult) {
        this.showFinalResult = false
        this.finalResult = ''
      } else if (this.history.length > 1) {
        this.history.pop()
        this.choices.pop()
        this.selectedOption = this.choices[this.choices.length - 1]
      }
    },
    generateFinalResult() {
      const resultParts = this.choices.map((option, index) => {
        const step = this.history[index]
        const optionData = formConfig[step]?.options?.[option]
        return optionData?.response || []
      })
      
      this.finalResult = '<h5 class="text-primary text-start">Documentos:</h5>' + 
                         resultParts.map(part => `<div>${part}</div>`).join('')
    }
  }
})