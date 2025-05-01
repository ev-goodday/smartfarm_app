<template>
  <div class="layout">
    <AsideComponent />

    <div class="main-content">
      <HeaderComponent @house-selected="updateSelectedHouse" />
      <div class="content-container">
        <RouterView :selectedHouse="selectedHouse" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AsideComponent from '@/components/common/AsideComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'

import { ref } from 'vue'

const selectedHouse = ref('')

function updateSelectedHouse(house) {
  console.log('Selected house:', house)

  selectedHouse.value = house
  localStorage.setItem('selectedHouse', house)
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: var(--body-bg-color);

  .main-content {
    flex: 1;
    margin-left: var(--aside-width);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .content-container {
      flex: 1;
      overflow: auto;
      padding: 0;
      margin: 0;
      height: calc(100vh - var(--header-height));
    }
  }
}
</style>
