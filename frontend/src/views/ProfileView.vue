<template>
  <div class="profile-view">
    <div v-if="isLoading" class="loading-state">프로필 정보를 불러오는 중...</div>

    <div v-else>
      <div class="profile-header">
        <div class="profile-info">
          <div class="profile-avatar">
            <!-- <img :src="user.avatar" alt="User Avatar" /> -->
          </div>
          <div class="profile-details">
            <h1>{{ 이름 }}</h1>
            <div class="profile-meta">
              <span class="profile-role">{{ 포지션 }}</span>
            </div>
          </div>
        </div>
        <div class="profile-actions">
          <button class="action-btn">
            <!-- <img src="" alt=""> -->
            프로필 수정
          </button>
          <button class="action-btn">
            <!-- <img src="" alt=""> -->
            설정
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isLoading = ref(false)

onMounted(async () => {
  try {
    await store.dispatch('user/fetchUserDevices')
  } catch (error) {
    console.error('디바이스 로딩 실패:', error)
  }
})
</script>

<style lang="scss" scoped>
.profile-view {
  padding: 20px;
  background-color: var(--body-bg-color);

  .profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    background-color: var(--item-bg-white);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    .profile-info {
      display: flex;
      align-items: center;
      gap: 25px;

      .profile-avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border: 3px solid white;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .profile-details {
        h1 {
          margin: 0 0 10px 0;
          color: #2c3e50;
          font-size: 1.8em;
        }

        .profile-meta {
          display: flex;
          gap: 20px;
          align-items: center;

          .profile-role {
            color: #7f8c8d;
            font-size: 1.1em;
            padding: 5px 15px;
            background-color: #f8f9fa;
            border-radius: 20px;
          }

          .profile-status {
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 1em;
            font-weight: 500;
          }
        }
      }
    }

    .profile-actions {
      display: flex;
      gap: 15px;

      .action-btn {
        padding: 8px 10px;
        background-color: var(--item-bg-white);
        border: 1px solid #ddd;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s ease;
        font-size: 0.95em;

        &:hover {
          background-color: var(--item-bg-lighter);
          transform: translateY(-2px);
        }

        i {
          font-size: 1.1em;
        }
      }
    }
  }
}
</style>
