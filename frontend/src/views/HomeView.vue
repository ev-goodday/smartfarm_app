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
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.layout-dashboard {
  display: flex;
  height: calc(100vh - var(--header-height) - 11px); // 11px는 border-top의 두께
  overflow: hidden;
  background-color: var(--body-bg-color);

  .section-map {
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
}
</style>
