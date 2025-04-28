<template>
  <div class="layout-dashboard">
    <!-- 지도 섹션 -->
    <section class="section-map">
      <div class="section-map__view"></div>
      <ul class="section-map__indicators">
        <li class="indicator-item">
          <div class="sensor-card">
            <div class="sensor-card__header">
              <div class="sensor-card__title">
                <div class="sensor-card_icon">
                  <!-- <img src="" alt=""> -->
                </div>

                <div class="sensor-card__label">습도</div>
              </div>
            </div>
            <div>
              <div class="sensor-card__value">
                30
                <span>%</span>
              </div>
              <div class="sensor-card__description">습도가 너무 높습니다.</div>
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
            <RouterLink>
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
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.layout-dashboard {
  display: flex;
  height: calc(100vh - var(--header-height) - 11px); // 11px는 border-top의 두께
  overflow: hidden;
  background-color: var(--body-bg-color);

  .section-map,
  .section-sensor {
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
}
</style>
