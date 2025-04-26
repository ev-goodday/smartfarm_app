<template>
  <div class="layout">
    <AsideComponent />

    <div class="main-content">
      <HeaderComponent />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import AsideComponent from '@/components/common/AsideComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'
</script>

<style></style>
