<template>
  <div class="products_main_header">
    <div class="products_main_header_category">
      <span>類別</span>
      <div class="block"></div>
      <span>全部</span>
    </div>

    <div class="products_main_header_features">
      <div class="products_main_header_feature">
        <router-link to="/">
          <div class="icon">
            <img src="~@/assets/images/icons/plus.png" alt="plus icon" />
          </div>
          刊登商品
        </router-link>
      </div>

      <div class="products_main_header_feature">
        <router-link to="/">
          <div class="icon">
            <img
              src="~@/assets/images/icons/pencil-alt.png"
              alt="pencil-alt icon"
            />
          </div>
          商品管理
        </router-link>

        <div class="products_main_header_feature_notify">99+</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products_main_header {
  display: flex;
  justify-content: space-between;

  &_features {
    display: flex;
    gap: 2rem;
  }

  &_feature {
    position: relative;

    a {
      display: flex;
      align-items: center;
      gap: 3rem;

      width: 200px;
      height: 50px;
      padding: 1rem;
      border: 2px solid var(--secondary-blue-2);
      background-color: transparent;
      border-radius: 10px;

      font-size: 1.25rem;
      font-weight: 500;
      color: var(--primary-blue);
    }

    &:first-child {
      a {
        border: none;
        background-color: var(--primary-blue);
        color: #fff;
      }
    }

    &_notify {
      position: absolute;
      top: 0;
      right: 0;

      transform: translate(50%, -50%);

      width: 45px;
      height: 30px;
      border-radius: 27px;
      background-color: var(--accent-red);

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 14px;
      font-weight: 600;
      color: #fff;
    }
  }
}
</style>
