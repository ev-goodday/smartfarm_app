<template>
  <header class="header">
    <div class="wrapper">
      <nav class="main-nav">
        <div class="service-tile">스마트팜 관리 시스템</div>
        <div>선택된 하우스 :</div>
        <select class="house-select">
          <option value="1">하우스 선택</option>
          <option value="2">하우스 1</option>
          <option value="3">하우스 2</option>
        </select>
        <RouterLink to="/profile" class="profile-link" />
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  height: 60px;
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
