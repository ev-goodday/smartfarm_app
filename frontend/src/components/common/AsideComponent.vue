<template>
  <aside>
    <div class="logo">
      <h1>스마트팜</h1>
    </div>
    <div class="menu">
      <RouterLink to="/" class="menu-item">
        <!-- <img src="" alt=""> // 아이콘 영역 -->
        <span>홈</span>
      </RouterLink>

      <RouterLink to="/chart" class="menu-item">
        <!-- <img src="" alt=""> // 아이콘 영역 -->
        <span>차트</span>
      </RouterLink>

      <RouterLink to="/detail" class="menu-item">
        <!-- <img src="" alt=""> // 아이콘 영역 -->
        <span>상세정보</span>
      </RouterLink>
    </div>

    <div class="bottom-menu">
      <RouterLink to="/setting" class="menu-item">
        <!-- <img src="" alt=""> // 아이콘 영역 -->
        <span>설정</span>
      </RouterLink>
    </div>
  </aside>
</template>

<script></script>

<style lang="scss" scoped>
aside {
  width: 150px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.03);
  z-index: 10;
  display: flex;
  flex-direction: column;

  .logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f8f9fa;
    }

    h1 {
      display: block;
      width: 45px;
      height: 45px;
      text-indent: -9999px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: var(--);
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
    gap: 20px;
    flex: 1;

    .menu-item {
      margin-bottom: 5px;
      text-decoration: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px 0;
      border-radius: var(--default-border-radius);
      color: #7f8c8d;
      transition: all 0.2s ease;

      img {
        filter: opacity(0.7);
        transition: all 0.2s ease;
      }

      span {
        margin-top: 8px;
        font-size: 12px;
        text-align: center;
      }

      &:hover {
        background-color: var(--item-bg-lighter);
        transform: translateY(-2px);
        color: var(--item-blue-color);

        img {
          filter: opacity(1) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));
        }
      }

      &.router-link-active {
        background-color: var(--item-bg-lighter);
        color: var(--item-blue-color);
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

        img {
          filter: opacity(1) drop-shadow(0 2px 3px rgba(52, 152, 219, 0.3));
        }
      }
    }
  }

  .bottom-menu {
    padding: 15px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .menu-item {
      margin-bottom: 5px;
      text-decoration: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px 0;
      border-radius: var(--default-border-radius);
      color: #7f8c8d;
      transition: all 0.2s ease;

      img {
        filter: opacity(0.7);
        transition: all 0.2s ease;
      }

      span {
        margin-top: 8px;
        font-size: 12px;
        text-align: center;
      }

      &:hover {
        background-color: var(--item-bg-lighter);
        transform: translateY(-2px);
        color: var (--item-blue-color);

        img {
          filter: opacity(1) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));
        }
      }

      &.router-link-active {
        background-color: var(--item-bg-lighter);
        color: var(--item-blue-color);
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

        img {
          filter: opacity(1) drop-shadow(0 2px 3px rgba(52, 152, 219, 0.3));
        }
      }
    }
  }
}
</style>
