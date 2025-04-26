<template>
  <div class="layout">
    <AsideComponent />

    <div class="main-content">
      <HeaderComponent />
      <div class="content-container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import AsideComponent from '@/components/common/AsideComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f7fa;

  .main-content {
    flex: 1;
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .content-container {
      flex: 1;
      overflow: auto;
      padding: 0;
      margin: 0;
      height: calc(100vh - 60px);
    }
  }
}
</style>
