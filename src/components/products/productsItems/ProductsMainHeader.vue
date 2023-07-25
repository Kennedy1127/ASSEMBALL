<template>
  <div class="products_main_header">
    <div class="products_main_header_category">
      <span>類別</span>
      <div class="block"></div>
      <span>全部</span>
    </div>

    <div class="products_main_header_features">
      <div class="products_main_header_feature">
        <router-link :to="{ name: 'ProductPost' }">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </div>
          刊登商品
        </router-link>
      </div>

      <div class="products_main_header_feature">
        <router-link :to="{ name: 'ProductsManage' }">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
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
      transition: all 0.09s ease-in-out;

      font-size: 1.25rem;
      font-weight: 500;
      color: var(--primary-blue);
    }
    // a:hover {
    //   background-color: var(--secondary-blue-4);
    // }

    &:first-child {
      a {
        border: none;
        background-color: var(--primary-blue);
        color: #fff;
      }
      // a:hover {
      //   background-color: var(--secondary-blue-1);
      // }
    }

    &_notify {
      position: absolute;
      top: 0;
      right: 0;

      transform: translate(50%, -50%);

      width: 55px;
      height: 30px;
      border-radius: 27px;
      background-color: var(--accent-red);

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 14px;
      font-weight: 600;
      color: #fff;
      border: 3px solid #fff;
      transition: all 0.09s ease-in-out;
    }
  }
}
</style>
