<script setup lang="ts">

import IconCaret from "./components/icons/IconCaret.vue";
import SortingModal from "./components/SortingModal.vue";
import {ref, onUnmounted} from "vue";
import NoDataFound from "./components/NoDataFound.vue";
import {generatePeople} from './utils/personGenerator';

const isModalOpen = ref(false);
const people = ref([]);
const selectedPeople = ref<number[]>([]);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
}

// Function to start sorting and generate people
const startSorting = (count) => {
  // debugger
  people.value = generatePeople(count);
  startTimer();
  closeModal();
}

// Timer logic
const timeCount = ref(0);
let timeOut: number | null = null;

const startTimer = () => {
  timeCount.value = 0;
  if (timeOut) clearInterval(timeOut);
  timeOut = setInterval(() => {
    timeCount.value++;
    emit('startTimer', timeCount.value);
  }, 1000);
};

const stopTimer = () => {
  if (timeOut) clearInterval(timeOut);
}

// Cleanup timer when component unmounts
onUnmounted(() => {
  if (timeOut) clearInterval(timeOut);
});
</script>

<template>
  <header class="header-section">
    <div class="container">
      <div class="title-section">
        <h2>Sorting Training System</h2>
        <button @click="openModal" class="btn primary-btn">Start Sorting!</button>
      </div>

    </div>
  </header>

  <main class="container">
    <section class="table-card b-shadow">

      <div class="table-card-head">
        <strong v-show="!timeCount">{{people.length}} people in the list</strong>
        <strong v-show="timeCount" class="chip chip-primary">
          Time start: {{timeCount}}s
        </strong>
<!--        <button v-show="timeCount" class="btn primary-btn" @click="stopTimer">Stop Timer</button>-->
<!--        <strong>{{ selectedPeople }}</strong>-->
      </div>

      <div class="table-card-body" v-show="people.length > 0">
        <div class="table-responsive">
          <table>
            <thead>
            <tr>
              <th>Email</th>
              <th>Potatoes</th>
              <th>Tags</th>
              <th>Full Name</th>
              <th>Location</th>
            </tr>
            </thead>
            <tbody>
            <!-- Example row -->
            <tr v-for="person in people" :key="person.id">
              <td>
                <div class="checkbox-wrap">
                  <div class="checkbox">
                    <input
                        v-model="selectedPeople"
                        type="checkbox"
                        :id="`person-${person.potatoes}`"
                        :value="person.potatoes"
                    />
                    <label :for="`person-${person.potatoes}`">{{ person.email }}</label>
                  </div>
                  <IconCaret class="icon-caret"/>
                </div>
              </td>
              <td>{{person.potatoes}}</td>
              <td><span class="chip chip-gray">Customer</span></td>
              <td>{{person.name}}</td>
              <td>Lithuania</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- No data found -->
      <NoDataFound v-show="people.length <= 0" />
    </section>
  </main>

  <SortingModal :isModalOpen="isModalOpen" @close="closeModal" @start="startSorting"/>
</template>


<style scoped>
/* General container styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Title Section */
.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  gap: 1rem;
}

.title-section h2 {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: bold;
  color: black;
}

/* Table Card */
.table-card {
  background-color: white;
  padding-bottom: 3.125rem;
  border-radius: 0.25rem;
}

.table-card-head {
  text-align: right;
  padding: 1rem;
}

.table-card-head strong {
  color: black;
  font-size: 14px;
}

/* Table Styles */
.table-responsive {
  overflow-x: auto; /* Add horizontal scrolling for small screens */
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  text-align: left;
  font-size: 0.875rem;
}

table th,
table td {
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border-color);
}

thead th {
  border-top: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  color: var(--text-table);
  font-size: 14px;
  font-weight: 400;
}

thead th:first-child {
  border-right: 1px solid var(--border-color);
}

tbody tr > td {
  color: black;
}

tbody tr:hover {
  background-color: var(--bg-gray);
}

tbody tr.table-active {
  background-color: var(--bg-gray);
}

tbody td:first-child {
  border-right: 1px solid var(--border-color);
}

tbody tr:last-child td {
  border-bottom: 1px solid var(--border-color);
}

.chip {
  display: inline-block;
  background-color: var(--chip-gray);
  color: var(--text-table);
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  margin-right: 0.25rem;
}

.chip-gray {background-color: var(--chip-gray);}
.chip-primary {
  background-color: rgba(255, 141, 0, 0.50);
}

.icon-caret {
  color: #999999;
  text-align: right;
  line-height: 20px;
  display: inline-block;
  padding: 3px 5px;
}

/* Checkbox Styles */
.checkbox-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.checkbox input[type="checkbox"] {
  display: none; /* Hide native checkbox */
}

.checkbox label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  line-height: 20px;
}

.checkbox label::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #aaa;
  border-radius: 4px;
  background-color: white;
  transition: all 0.2s;
}

.checkbox label::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 7px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s;
}

.checkbox input[type="checkbox"]:checked + label::before {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
}

.checkbox input[type="checkbox"]:checked + label::after {
  opacity: 1;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .title-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .table-card-head {
    text-align: left;
  }

  .chip {
    margin-bottom: 0.5rem;
  }
}
</style>

