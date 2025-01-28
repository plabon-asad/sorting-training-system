<script setup lang="ts">
import {defineProps, defineEmits} from 'vue'
import IconCross from "./icons/IconCross.vue";

// Props to receive `isModalOpen` and control
defineProps({
  isModalOpen: Boolean,
})

// Emits to notify parent when modal closes
defineEmits(['close'])
</script>

<template>
  <div v-if="isModalOpen" class="modal-wrap">
    <div class="modal b-shadow">
      <div class="modal-header">
        <h2 class="modal-title">How many people?</h2>
        <IconCross @click="$emit('close')"/>
      </div>
      <div class="modal-body">
        <div class="sorting-form">
          <label>Enter a number of how many people you want to add to the list.</label>
          <input
              type="number"
              min="20"
              max="100"
              class="w-full p-2 border rounded"
          />
          <!--          <div class="text text-warning">Minimum number should be 20</div>-->
          <!--          <div class="text text-danger">Maximum number should be 100</div>-->
          <!--          <div class="text text-success">Maximum number should be 100</div>-->
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn" @click="$emit('close')">Cancel</button>
        <button class="btn primary-btn">Start</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-wrap {
  display: flex;
  inset: 0;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.modal {
  background-color: white;
  width: 27.313rem;
  border-radius: 0.2rem;
  animation: fadeIn 0.3s ease;
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

.modal-wrap .modal .modal-header {
  padding: 1rem;
  border-bottom: 2px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.modal-wrap .modal .modal-header .modal-title {
  color: black;
  font-size: 1.125rem;
  font-weight: bold;

}

.modal-wrap .modal .modal-body {
  padding: 1rem 1rem 3.5rem;
  border-bottom: 2px solid var(--border-color);
}

.modal-wrap .modal .modal-body .sorting-form label {
  color: var(--text-table);
  font-size: 13px;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.modal-wrap .modal .modal-body .sorting-form input {
  border: 1px solid var(--border-color);
  margin-bottom: 0.5rem;
}

.modal-wrap .modal .modal-footer {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

/* Validation text design */
.text {
  color: var(--text-table);
  font-size: 13px;
}

.text-warning {
  color: var(--primary-color)
}

.text-danger {
  color: darkred
}

.text-success {
  color: darkgreen
}

</style>
