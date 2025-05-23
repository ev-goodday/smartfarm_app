<template>
  <header class="header">
    <div class="wrapper">
      <nav class="main-nav">
        <div class="service-tile">스마트팜 관리 시스템</div>
        <div>선택된 하우스 :</div>
        <select class="house-selector" v-model="selectedHouseId">
          <option value="">하우스 선택</option>
          <option v-for="(house, index) in houses" :key="index" :value="index">
            {{ house.name }}
          </option>
        </select>
        <RouterLink to="/profile" class="profile-link" :style="profileStyle" />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const houses = computed(() => store.state.house.houses)
const selectedHouseId = computed({
  get: () => store.state.house.selectedHouse || '',
  set: (value) => handleHouseChange(value),
})

const profileStyle = computed(() => ({
  backgroundImage: `url(${store.state.user.profile_image})`,
}))

const handleHouseChange = (value) => {
  console.log('선택된 ID:', value)

  const house = houses.value[value]

  store.dispatch('house/selectHouse', house)
}

onMounted(async () => {
  try {
    await store.dispatch('house/fetchHouses')
  } catch (error) {
    console.error('하우스 목록 로딩 실패:', error)
  }
})
</script>

<style lang="scss" scoped>
header {
  height: var(--header-height);
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);

  .wrapper {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .main-nav {
      display: flex;
      align-items: center;
      width: 100%;

      .service-tile {
        flex: 1;
        font-size: 1.1em;
        font-weight: bold;
        color: #2c3e50;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          color: #3498db;
        }
      }
      .house-selector {
        margin-left: 10px;
        background-color: var(--item-bg-lighter);
        border: none;
        border-radius: var(--default-border-radius);
        padding: 8px 15px;
        font-size: 0.9em;
        color: #2c3e50;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

        &:hover {
          background-color: #eff2f7;
          transform: translateY(-2px);
        }

        &:focus {
          outline: none;
          background-color: #eff2f7;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
      }

      option {
        padding: 8px;
        background-color: var(--item-bg-white);
        color: #2c3e50;
      }

      .profile-link {
        width: 38px;
        height: 38px;
        margin-left: 15px;
        padding: 5px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border: 3px solid white;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}
</style>
