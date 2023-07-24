<template>
  <div class="products_no-results">
    <div class="products_no-results_img">
      <img src="~@/assets/images/recruitment/no-results.svg" alt="" />
    </div>
    <p>商品不見了QQ...請重新整理頁面喔！</p>
  </div>
</template>

<style scoped lang="scss">
.products_no-results {
  flex: 1;
  margin: 1.5rem 0;

  &_img {
    display: flex;
    justify-content: center;
  }

  p {
    color: var(--secondary-gray-3);
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
