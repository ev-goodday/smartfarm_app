<template>
  <div class="profile-view">
    <!-- 로딩 상태 표시 -->
    <div v-if="isLoading" class="loading-state">프로필 정보를 불러오는 중...</div>

    <!-- 프로필 정보 표시 -->
    <div v-else>
      <div class="profile-header">
        <div class="profile-info">
          <div class="profile-avatar">
            <img :src="userProfile.profile_image" alt="프로필 이미지" />
          </div>
          <div class="profile-details">
            <h1>{{ userProfile.name }}</h1>
            <div class="profile-meta">
              <span class="profile-role">{{ userProfile.position }}</span>
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

      <div class="profile-panels">
        <!-- 사용자 정보 패널 -->
        <div class="panel user-info-panel">
          <h2>사용자 정보</h2>
          <div class="info-list">
            <div class="info-item">
              <span class="info-label">이메일</span>
              <span class="info-value">{{ userProfile.email }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">전화번호</span>
              <span class="info-value">{{ userProfile.phone }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">부서</span>
              <span class="info-value">{{ userProfile.department }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">가입일</span>
              <span class="info-value">{{ userProfile.created_at }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">마지막 로그인</span>
              <span class="info-value">{{ userProfile.last_login }}</span>
            </div>
          </div>
        </div>

        <div class="panels-row">
          <!-- 알림 설정 패널 -->
          <div class="panel notification-panel">
            <h2>알림 설정</h2>
            <div class="notification-settings">
              <div class="setting-item">
                <div class="setting-label">
                  <span>이메일 알림</span>
                  <span class="setting-desc">중요 알림을 이메일로 받기</span>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" />
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="setting-item">
                <div class="setting-label">
                  <span>SMS 알림</span>
                  <span class="setting-desc">긴급 알림을 SMS로 받기</span>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" />
                  <span class="toggle-slider"></span>
                </label>
              </div>

              <div class="setting-item">
                <div class="setting-label">
                  <span>브라우저 알림</span>
                  <span class="setting-desc">웹 브라우저 푸시 알림 받기</span>
                </div>
                <label class="toggle-switch">
                  <input type="checkbox" />
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- 담당 센서 패널 -->
          <div class="panel assigned-sensors-panel">
            <h2>담당 센서</h2>
            <div class="sensors-list">
              <div class="sensor-item">
                <div class="sensor-icon">
                  <!-- <img src="" alt=""> -->
                </div>
                <div class="sensor-info">
                  <div class="sensor-name">{{ description }}</div>
                  <div class="sensor-location">{{ location }}</div>
                </div>

                <div class="sensor-status">
                  <span class="status-tooltip"> {{ 온라인 }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 활동 로그 패널 -->
        <div class="panel activity-panel">
          <h2>최근 활동</h2>
          <div class="activity-list">
            <div class="activity-item edit-activity">
              <div class="activity-time">2025-04-01 14:25</div>
              <div class="activity-content">
                <div class="activity-icon edit-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </div>
                <div class="activity-text">온도 센서 #1의 임계값을 수정했습니다.</div>
              </div>
            </div>
            <div class="activity-item login-activity">
              <div class="activity-time">2025-04-01 11:30</div>
              <div class="activity-content">
                <div class="activity-icon login-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                </div>
                <div class="activity-text">시스템에 로그인했습니다.</div>
              </div>
            </div>
            <div class="activity-item alert-activity">
              <div class="activity-time">2025-03-31 17:45</div>
              <div class="activity-content">
                <div class="activity-icon alert-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <div class="activity-text">CO2 센서 알림을 확인했습니다.</div>
              </div>
            </div>
            <div class="activity-item add-activity">
              <div class="activity-time">2025-03-31 16:20</div>
              <div class="activity-content">
                <div class="activity-icon add-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div class="activity-text">새 센서 "조도 센서 #3"을 추가했습니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isLoading = ref(false)

const userProfile = computed(() => ({ ...store.state.user }))

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

  .profile-panels {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .panel {
      background-color: var(--item-bg-white);
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

      h2 {
        margin-top: 0;
        color: #2c3e50;
        font-size: 1.4em;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid var(--body-bg-color);
      }
    }

    .panels-row {
      display: flex;
      gap: 25px;

      & > .panel {
        flex: 1;
      }
    }

    .user-info-panel {
      .info-list {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          border-bottom: 1px solid var(--item-bg-lighter);

          &:last-child {
            border-bottom: none;
          }
          .info-label {
            color: #7f8c8d;
            font-weight: 500;
            font-size: 1em;
          }
          .info-value {
            color: #2c3e50;
            font-size: 1em;
          }
        }
      }
    }

    .notification-panel {
      .notification-settings {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          background-color: var(--item-bg-lighter);
          border-radius: var(--default-border-radius);

          .setting-label {
            display: flex;
            flex-direction: column;
            gap: 5px;

            span {
              color: #2c3e50;
              font-weight: 500;
              font-size: 1em;
            }

            .setting-desc {
              font-size: 0.9em;
              color: #7f8c8d;
              font-weight: normal;
            }
          }

          .toggle-switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 30px;

            input {
              opacity: 0;
              width: 0;
              height: 0;

              &:checked + .toggle-slider {
                background-color: var(--item-green-color);
              }

              &:checked + .toggle-slider::before {
                transform: translateX(30px);
              }
            }

            .toggle-slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              transition: 0.4s;
              border-radius: 34px;
              box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

              &:before {
                position: absolute;
                content: '';
                height: 22px;
                width: 22px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                transition: 0.4s;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              }
            }
          }
        }
      }
    }

    .assigned-sensors-panel {
      .sensors-list {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .sensor-item {
          display: flex;
          align-items: center;
          padding: 15px;
          background-color: var(--item-bg-lighter);
          border-radius: var(--default-border-radius);
          transition: all 0.2s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

          &:hover {
            transform: translateX(5px);
            background-color: var(--item-bg-lighter);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          }

          .sensor-icon {
            width: 48px;
            height: 48px;
            margin-right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--item-bg-white);
            border-radius: 12px;
            padding: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

            img {
              width: 28px;
              height: 28px;
              object-fit: contain;
              transition: all 0.2s ease;
            }
          }

          .sensor-info {
            flex: 1;

            .sensor-name {
              font-weight: 500;
              color: #2c3e50;
              font-size: 1em;
              margin-bottom: 5px;
            }

            .sensor-location {
              font-size: 0.9em;
              color: #7f8c8d;
            }
          }

          .sensor-status {
            position: relative;
            width: 12px;
            height: 12px;
            padding: 5px 10px;
            border-radius: 50%;
            margin-left: 15px;
            cursor: pointer;

            &:hover .status-tooltip {
              opacity: 1;
              visibility: visible;
            }

            &.status-normal {
              background-color: var(--item-green-color);
            }

            &.status-warning {
              background-color: var(--item-orange-color);
            }

            &.status-error {
              background-color: var(--item-red-color);
            }

            .status-tooltip {
              position: absolute;
              right: 20px;
              top: 50px;
              transform: translateY(-50%);
              background-color: rgba(0, 0, 0, 0.8);
              color: white;
              border-radius: 4px;
              font-size: 0.8em;
              white-space: nowrap;
              opacity: 0;
              visibility: hidden;
              transition: all 0.2s ease;
            }
          }
        }
      }
    }
    .activity-panel {
      .activity-list {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .activity-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px;
          background-color: var(--item-bg-lighter);
          border-radius: 12px;
          transition: all 0.2s ease;
          border-left: 4px solid transparent;

          &:hover {
            transform: translateX(5px);
            background-color: #f0f2f5;
          }

          .activity-time {
            font-size: 0.9em;
            color: #7f8c8d;
            display: flex;
            align-items: center;
            gap: 8px;

            &::before {
              content: '';
              display: inline-block;
              width: 6px;
              height: 6px;
              background-color: var(--item-blue-color);
              border-radius: 50%;
            }
          }

          .activity-content {
            display: flex;
            align-items: center;
            gap: 15px;

            .activity-icon {
              width: 45px;
              height: 45px;
              border-radius: 12px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2em;

              &.edit-icon {
                background-color: #e3f2fd;
                color: var(--item-blue-color);
              }

              &.login-icon {
                background-color: #e8f5e9;
                color: var(--item-green-color);
              }

              &.alert-icon {
                background-color: #fff8e1;
                color: var(--item-orange-color);
              }

              &.add-icon {
                background-color: #e8f5e9;
                color: var(--item-green-color);
              }
            }

            .activity-text {
              color: #2c3e50;
              font-size: 1em;
              flex: 1;
              padding: 10px 15px;
              background-color: var(--item-bg-white);
              border-radius: 8px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            }
          }

          &.edit-activity {
            border-left-color: var(--item-blue-color);
            .activity-icon {
              background-color: #e3f2fd;
            }
          }

          &.login-activity {
            border-left-color: var(--item-green-color);
            .activity-icon {
              background-color: #e8f5e9;
            }
          }

          &.alert-activity {
            border-left-color: var(--item-orange-color);
            .activity-icon {
              background-color: #fff8e1;
            }
          }

          &.add-activity {
            border-left-color: var(--item-green-color);
            .activity-icon {
              background-color: #e8f5e9;
            }
          }
        }
      }
    }
  }
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #666;
}
</style>
