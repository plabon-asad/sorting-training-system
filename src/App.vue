<script setup lang="ts">

import IconCaret from "./components/icons/IconCaret.vue";
import SortingModal from "./components/SortingModal.vue";
import {ref} from "vue";

// Reactive state to control modal
const isModalOpen = ref(false);

// Function to open modal
const openModal = () => {
  isModalOpen.value = true;
};

// Function to close modal
const closeModal = () => {
  isModalOpen.value = false;
}
</script>

<template>
  <header class="">
    <div class="container">
      <div class="title-section">
        <h2>Sorting Training System</h2>
        <button @click="openModal" class="btn primary-btn">Start sorting!</button>
      </div>
    </div>
  </header>
  <main class="container">
    <div class="table-card b-shadow">
      <div class="table-card-head">
        <strong>20 people in the list </strong>
      </div>
      <div class="table-card-body">
        <table>
          <thead>
          <tr>
            <th>Email</th>
            <th>Potatoes</th>
            <th>Tags</th>
            <th>Full name</th>
            <th>Location</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>
              <div class="checkbox-wrap">
                <div class="checkbox">
                  <input type="checkbox" checked="checked" id="vehicle1" name="vehicle1" value="Bike">
                  <label for="vehicle1"> juozas@bybosas.lt</label>
                </div>
                <IconCaret class="icon-caret"/>
              </div>
            </td>
            <td>10</td>
            <td><span class="chip-gray">Customers</span></td>
            <td>Juozas Bybosas</td>
            <td>Lithuania</td>
          </tr>
          <tr class="table-active">
            <td>
              <div class="checkbox-wrap">
                <div class="checkbox">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                  <label for="vehicle1"> juozas@bybosas.lt</label>
                </div>
                <IconCaret class="icon-caret"/>
              </div>
            </td>
            <td>10</td>
            <td><span class="chip-gray">Customers</span></td>
            <td>Juozas Bybosas</td>
            <td>Lithuania</td>
          </tr>
          <tr>
            <td>
              <div class="checkbox-wrap">
                <div class="checkbox">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                  <label for="vehicle1"> juozas@bybosas.lt</label>
                </div>
                <IconCaret class="icon-caret"/>
              </div>
            </td>
            <td>10</td>
            <td>
              <span class="chip-gray">Customers</span>
              <span class="chip-gray">VIP</span>
            </td>
            <td>Juozas Bybosas</td>
            <td>Lithuania</td>
          </tr>

          </tbody>


        </table>
      </div>
    </div>
  </main>

  <SortingModal :isModalOpen="isModalOpen" @close="closeModal" />

</template>

<style scoped>
.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 36px 0;

  //border: 1px solid black;
}

.title-section h2 {
  font-size: 32px;
  font-weight: bold;
  color: black;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Card of table */
.table-card {
  background-color: white;
  padding-bottom: 50px;
  border-radius: 4px;
}

.table-card .table-card-head {
  text-align: right;
  padding: 1rem;
}

.table-card-head strong {
  color: black;
  font-size: 14px;
}

/* Table design */

table {
  width: 100%;
  text-align: left;
  background-color: white;
}

table, th, td {
  border-top: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  //color: red;
  color: var(--text-table);
  font-size: 14px;
  font-weight: 400;

}

table tbody tr > td {
  color: black
}

table tbody > tr:last-child {
  border-bottom: 1px solid var(--border-color);
}

table thead > tr > th:first-child {
  border-right: 1px solid var(--border-color);
}

table tbody > tr > td:first-child {
  border-right: 1px solid var(--border-color);
}

table tbody > tr:hover {
  background-color: var(--bg-gray);
}

td > .checkbox-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

td > .checkbox-wrap .checkbox {
  display: table;
}

td > .checkbox-wrap .checkbox input, td > .checkbox-wrap .checkbox label {
  cursor: pointer;
}

td > .checkbox-wrap .checkbox input {
  display: table-cell;
  vertical-align: middle;
  margin-right: 1rem;
}

.icon-caret {
  color: #999999;
  text-align: right;
  line-height: 20px;
  display: inline-block;
  padding: 3px 5px;
}

.chip-gray {
  color: var(--text-table);
  background-color: var(--chip-gray);
  margin: 5px;
  padding: 5px 8px;
  border-radius: 20px;
  font-size: 13px;
}

.table-active {
  background-color: var(--bg-gray);
}

/* Checkbox design */
/* Hide the native checkbox */
.checkbox-wrap .checkbox input[type="checkbox"] {
  display: none;
}

/* Custom checkbox box */
.checkbox-wrap .checkbox label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  line-height: 20px;
}

/* Create the checkbox box */
.checkbox-wrap .checkbox label::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #aaa;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.2s;
}

/* Add the custom checkmark (tick) */
.checkbox-wrap .checkbox label::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 7px;
  width: 6px;
  height: 12px;
  border: solid white; /* Color of the tick */
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s;
}

/* When checkbox is checked */
.checkbox-wrap .checkbox input[type="checkbox"]:checked + label::before {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
}

.checkbox-wrap .checkbox input[type="checkbox"]:checked + label::after {
  opacity: 1;
}

.display-none {
  display: none;
}
</style>
