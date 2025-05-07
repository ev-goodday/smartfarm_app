<template>
  <div class="layout-dashboard">
    <!-- 지도 섹션 -->
    <section class="section-map">
      <div class="section-map__view">
        <div v-if="selectedHouse" class="house-indicator">선택된 하우스: {{ getHouseName }}</div>
      </div>
      <!-- <div class="section-map__view"></div> -->
      <ul class="section-map__indicators">
        <li class="indicator-item" v-for="(sensor, index) in filteredSensors" :key="index">
          <div class="sensor-card">
            <div class="sensor-card__header">
              <div class="sensor-card__title">
                <div class="sensor-card_icon">
                  <!-- <img src="" alt=""> -->
                </div>
                <div class="sensor-card__label">{{ sensor.name }}</div>
              </div>
            </div>
            <div>
              <div class="sensor-card__value">
                {{ sensor.value }}
                <span>{{ sensor.unit }}</span>
              </div>
              <div class="sensor-card__description">{{ sensor.description }}</div>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="section-sensor">
      <div class="section-content">
        <!-- 센서 총 개수 카드 -->
        <div class="device-card">
          <div class="device-card__header">
            <div class="device-card__title">Device</div>
            <RouterLink to="/detail" class="device-card__link">
              <!-- <img src="" alt=""> -->
            </RouterLink>
          </div>
          <div class="device-card__content">
            <div class="device-card__item">
              <span class="device-card__label">Sensor</span>
              <span class="device-card__value">6</span>
            </div>
            <div class="device-card__item">
              <span class="device-card__label">Camera</span>
              <span class="device-card__value">5</span>
            </div>
          </div>
        </div>

        <div class="content-body">
          <div class="sensor-card">
            <div class="sensor-card__header">
              <span class="sensor-card__status-indicator"></span>
              <div class="sensor-card__title">습도센서-201</div>
            </div>
            <div class="sensor-card__meta">
              <span>HUMI-Y200</span> &middot; <span>습도 센서</span>
            </div>
            <div class="sensor-card__alert">
              [습도센서-201] 측정값(82.00%)이 최대 임계값(80.00%)을 초과했습니다.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 모니터링 섹션 -->
    <section class="section-monitor">
      <div class="section-content">
        <!-- 카메라 섹션 -->
        <div class="monitor-camera">
          <div class="monitor-camera__header">
            <div class="monitor-camera__title">
              <span>Camera 1</span>
            </div>
            <div class="monitor-camera__link">
              <img src="" alt="" />
            </div>
          </div>
          <div class="monitor-camera__image">
            <img src="" alt="" />
          </div>
          <div class="monitor-camera__actions">
            <button class="action-button">
              <img src="" alt="" />
            </button>
            <button class="action-button">
              <img src="" alt="" />
            </button>
            <button class="action-button">
              <img src="" alt="" />
            </button>
            <button class="action-button">
              <img src="" alt="" />
            </button>
          </div>
        </div>

        <!-- 작업 섹션 -->
        <div class="monitor-tasks">
          <div class="monitor-tasks__header">
            <div class="monitor-tasks__title">
              <span>Task</span>
            </div>
            <div class="monitor-tasks__progress">
              <span>40%</span>
              <span>2/5 Task Completed</span>
            </div>
          </div>
          <div class="monitor-tasks__list">
            <!-- 작업 항목 -->
            <div class="task-item task-item--completed">
              <div class="task-item__header">
                <span class="task-item__title">자동 관수 작업</span>
                <span class="task-item__status">
                  <!-- <img src="" alt="" /> -->
                </span>
              </div>
              <div class="task-item__body">
                <span class="task-item__description">
                  토양 수분 센서 기반 스마트 관수 시스템 가동
                </span>
                <span class="task-item__time">06:30 AM - 07:00 AM</span>
              </div>
            </div>

            <div class="task-item task-item--pending">
              <div class="task-item__header">
                <span class="task-item__title">환경 제어</span>
                <span class="task-item__status">
                  <!-- <img src="" alt="" /> -->
                </span>
              </div>
              <div class="task-item__body">
                <span class="task-item__description">
                  온실 내부 온도 및 습도 최적화를 위한 환기 시스템 작동
                </span>
                <span class="task-item__time">10:00 AM - 10:30 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import store from '@/store'
import { ref, computed } from 'vue'

const selectedHouse = computed(() => store.state.house.selectedHouse)

const sensorsData = ref({
  11: [
    { name: '온도', value: 25, unit: '°C', description: '적정 온도를 유지하고 있습니다.' },
    { name: '습도', value: 65, unit: '%', description: '습도가 적정 수준입니다.' },
    { name: '토양 수분', value: 42, unit: '%', description: '토양 수분이 적절합니다.' },
  ],
  12: [
    { name: '온도', value: 28, unit: '°C', description: '온도가 약간 높습니다.' },
    { name: '습도', value: 82, unit: '%', description: '습도가 너무 높습니다.' },
    { name: 'CO2', value: 680, unit: 'ppm', description: 'C02 농도가 정상입니다.' },
  ],
  13: [
    { name: '온도', value: 22, unit: '°C', description: '온도가 약간 낮습니다.' },
    { name: '습도', value: 55, unit: '%', description: '습도가 적정 수준입니다.' },
    { name: '조도', value: 5400, unit: 'lxu', description: '조도가 충분합니다.' },
  ],
})

const filteredSensors = computed(() => {
  if (!selectedHouse.value?.house_id) return []
  return sensorsData.value[selectedHouse.value?.house_id] || []
})

const getHouseName = computed(() => {
  if (!selectedHouse.value) return ''
  return selectedHouse.value?.name
})
</script>

<style lang="scss" scoped>
.layout-dashboard {
  display: flex;
  height: calc(100vh - var(--header-height) - 11px); // 11px는 border-top의 두께
  overflow: hidden;
  background-color: var(--body-bg-color);

  .section-map,
  .section-sensor,
  .section-monitor {
    flex: 1;
    margin: 5px 5px 0 5px;
    border-radius: var(--default-border-radius);
  }

  .section-map {
    margin-left: 10px;

    &__view {
      width: 850px;
      height: 370px;
      margin-bottom: 10px;
      border-radius: var(--default-border-radius);
      background: url();
      background-color: var(--home-bg-color);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    &__indicators {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;

      .indicator-item {
        height: 220px;
        border-radius: var(--default-border-radius);

        .sensor-card {
          width: 100%;
          height: 100%;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          border-radius: var(--default-border-radius);
          background-color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

          &__header {
            display: flex;
            justify-content: space-between;
          }

          &__title {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          &__icon {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 24px;
              height: 24px;
            }
          }

          &__label {
            font-weight: 600;
            font-size: 1.1em;
            color: #1e293b;
          }

          &__link {
            width: 32px;
            height: 32px;
            background-color: #f1f5f9;
            border-radius: var(--default-border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
              background-color: #e2e8f0;
            }
          }

          &__value {
            font-size: 2.8em;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 10px;

            & > span {
              color: #64748b;
              font-weight: normal;
              font-size: 0.9em;
            }
          }

          &__description {
            font-size: 0.85em;
            color: #64748b;
            line-height: 1.4;
          }
        }
      }
    }
  }

  .section-sensor {
    background-color: var(--home-bg-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    .section-content {
      display: flex;
      flex-direction: column;
      height: calc(100% - 30px);
      gap: 15px;
      padding: 15px;

      .device-card {
        border-radius: var(--default-border-radius);
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: #ffffff;
        padding: 15px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

        &__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        &__title {
          font-size: 1.1em;
          font-weight: bold;
          color: #1e293b;
        }

        &__link {
          width: 32px;
          height: 32px;
          background-color: #f1f5f9;
          border-radius: var(--default-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;

          &:hover {
            background-color: #e2e8f0;
          }
        }

        &__content {
          display: flex;
          justify-content: space-between;
        }

        &__item {
          display: flex;
          flex-direction: column;
        }

        &__label {
          font-size: 0.85em;
          color: #64748b;
          margin-bottom: 4px;
        }

        &__value {
          font-size: 1.2em;
          font-weight: bold;
          color: #1e293b;
        }
      }

      .content-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: auto;

        .sensor-card {
          padding: 15px;
          border-radius: var(--default-border-radius);
          background-color: var(--item-bg-white);
          display: flex;
          flex-direction: column;
          gap: 15px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

          &--normal {
            border-left: 5px solid var(--item-blue-color); // 파란색 (info/normal)
          }

          &--warning {
            border-left: 5px solid var(--item-orange-color); // 주황색
          }

          &--error {
            border-left: 5px solid var(--item-red-color); // 빨간색
          }

          &__header {
            display: flex;
            align-items: center;
            gap: 10px;

            .sensor-card__status-indicator {
              width: 10px;
              height: 10px;
              border-radius: 50%;

              &--green {
                background-color: var(--item-blue-color);
              }

              &--orange {
                background-color: var(--item-orange-color);
              }

              &--yellow {
                background-color: var(--item-red-color);
              }
            }

            .sensor-card__title {
              font-size: 1em;
              font-weight: bold;
              color: #1e293b;
            }
          }

          &__meta {
            font-size: 0.9em;
            color: #64748b;
            margin-top: auto;
            display: flex;
            gap: 5px;

            span {
              font-weight: normal;
            }
          }

          &__alert {
            padding: 8px 5px;
            font-size: 0.85em;
            color: var(--item-blue-color);
            background-color: #f2f5fe;
            border-radius: var(--default-border-radius);
            display: flex;
            align-items: center;

            &:before {
              content: '☑︎';
              margin-right: 5px;
              font-size: 1.2em;
            }

            &--warning {
              color: var(--item-orange-color);
              background-color: #fef6e7;

              &:before {
                content: '⚠︎';
                margin-right: 5px;
                font-size: 1.2em;
              }
            }

            &--error {
              color: var(--item-red-color);
              background-color: #fef2f2;

              &:before {
                content: '✖︎';
                margin-right: 5px;
                font-size: 1.2em;
              }
            }
          }

          &__value {
            font-size: 2.8em;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 10px;

            & > span {
              color: #64748b;
              font-weight: normal;
              font-size: 0.9em;
            }
          }
        }
      }
    }
  }

  .section-monitor {
    margin-right: 10px;
    .section-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;
      overflow: hidden;

      .monitor-camera {
        background-color: #f8fafc;
        border-radius: var(--default-border-radius);
        padding: 15px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

        &__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        &__title {
          display: flex;
          align-items: center;
          font-size: 1.1em;
          font-weight: bold;
          color: #1e293b;
        }

        &__link {
          width: 32px;
          height: 32px;
          border-radius: var(--default-border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background-color: #f1f5f9;
          transition: all 0.2s ease;

          &:hover {
            background-color: #e2e8f0;
          }
        }

        &__image {
          width: 100%;
          height: 330px;
          border-radius: var(--default-border-radius);
          background-color: #f1f5f9;
          overflow: hidden;
          margin-bottom: 10px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &__actions {
          display: flex;
          gap: 5px;

          .action-button {
            padding: 8px;
            border: none;
            border-radius: var(--default-border-radius);
            background-color: #f1f5f9;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
              background-color: #e2e8f0;
            }

            & > img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }

      .monitor-tasks {
        flex: 1;
        overflow-y: auto;
        min-height: 0;
        border-radius: var (--default-border-radius);
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: var(--home-bg-color);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

        &__header {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        &__title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.1em;
          font-weight: bold;
          color: #1e293b;
        }

        &__progress {
          display: flex;
          justify-content: space-between;

          span {
            &:first-child {
              font-weight: bold;
              color: var(--item-blue-color);
            }
            &:last-child {
              font-size: 0.9em;
              color: #64748b;
            }
          }
        }

        &__list {
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;

          .task-item {
            padding: 12px;
            border-radius: var (--default-border-radius);
            background-color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

            &--completed {
              border-left: 5px solid var(--item-blue-color);
              background-color: #ffffff;

              .task-item__status img {
                filter: invert(45%) sepia(98%) saturate(1234%) hue-rotate(199deg) brightness(97%)
                  contrast(96%);
              }
            }

            &--pending {
              border-left: 5px solid #cbd5e1;
              background-color: #ffffff;

              .task-item__status img {
                filter: brightness(0);
              }
            }

            &__header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 8px;
            }

            &__body {
              display: flex;
              flex-direction: column;
              gap: 4px;
            }

            &__title {
              font-size: 1em;
              font-weight: bold;
              color: #1e293b;
            }

            &__status {
              cursor: pointer;
              img {
                width: 24px;
                height: 24px;
              }
            }

            &__description {
              font-size: 0.85em;
              color: #64748b;
            }

            &__time {
              font-size: 0.8em;
              color: #64748b;
            }
          }
        }
      }
    }
  }
}

.house-indicator {
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: var(--default-border-radius);
  font-weight: bold;
  margin: 10px;
}
</style>
