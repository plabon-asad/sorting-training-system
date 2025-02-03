<script setup lang="ts">
import {ref, computed, onUnmounted} from 'vue'
import IconCross from "./icons/IconCross.vue";

// Props to receive `isModalOpen` and control
defineProps({
  isModalOpen: Boolean,
})

// Emits to notify parent when modal closes and timer starts
defineEmits(['close', 'start', 'startTimer']);

const peopleCount = ref(null);
const errorMessage = ref('');

// Validation function
const validateInput = () => {
  if (peopleCount.value <= 20 || peopleCount.value >= 100) {
    errorMessage.value = "Accept a number between 20 and 100.";
  } else {
    errorMessage.value = "";
  }
};

// Disable button if input is invalid
const isStartDisabled = computed(() => peopleCount.value <= 20 || peopleCount.value >= 100);






</script>

<template>
  <div
      v-if="isModalOpen"
      class="modal-wrap"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
  >
    <div class="modal b-shadow">
      <div class="modal-header">
        <h2 id="modal-title" class="modal-title">How many people?</h2>
        <!-- Add aria-label for accessibility -->
        <button @click="$emit('close')" class="close-btn" aria-label="Close modal">
          <IconCross/>
        </button>
      </div>
      <div class="modal-body">
        <div class="sorting-form">
          <label id="modal-desc">Enter a number of how many people you want to add to the list.</label>
          <input
              type="number"
              min="21"
              max="99"
              v-model.number="peopleCount"
              @input="validateInput"
          />
          <div class="text text-warning" v-if="errorMessage">{{ errorMessage }}</div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn" @click="$emit('close')">Cancel</button>
        <button class="btn primary-btn"
                @click="$emit('start', peopleCount)" :disabled="isStartDisabled">Start
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* General modal styles */
.modal-wrap {
  display: flex;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.modal {
  background-color: white;
  width: 90%; /* Use percentage for responsiveness */
  max-width: 500px; /* Limit the modal width on larger screens */
  border-radius: 0.2rem;
  animation: fadeIn 0.3s ease;
  padding: 1rem; /* Add padding for mobile devices */
  box-sizing: border-box;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.modal-title {
  color: black;
  font-size: 1.125rem;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.close-btn:focus {
  outline: 2px solid var(--primary-color); /* Add focus outline */
}

.primary-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Body */
.modal-body {
  margin-bottom: 1rem;
  border-bottom: 2px solid #Eee;
  padding-bottom: 2.5rem;
}

.sorting-form label {
  color: var(--text-table);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: block;
}

.sorting-form input {
  border: 1px solid var(--border-color);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 0.5rem;
}

.input-warning {
  border-color: var(--primary-color);
}

/* Footer */
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  border: none;
}

.primary-btn {
  background-color: var(--primary-color);
  color: white;
}

.primary-btn:hover {
  background-color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 640px) {
  .modal {
    width: 100%; /* Full width on mobile */
    max-width: none;
    margin: 0 1rem; /* Add horizontal margin */
  }

  .modal-footer {
    flex-direction: column; /* Stack buttons on smaller screens */
    gap: 0.75rem;
  }
}
</style>

