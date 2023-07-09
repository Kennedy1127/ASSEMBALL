<template>
  <div class="products_main_paginations">
    <div class="products_main_pagination products_main_pagination--active">
      1
    </div>
    <div class="products_main_pagination">2</div>
    <div class="products_main_pagination">3</div>
    <div class="products_main_pagination">...</div>
    <div class="icon">
      <img
        src="~@/assets/images/icons/arrow-right.png"
        alt="arrow-right icon"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.products_main_paginations {
  margin-top: 6rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  font-family: 'Noto Sans TC', sans-serif;
}

.products_main_pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 8px;

  font-size: 1.25rem;

  &--active {
    color: #fff;
    background-color: var(--error-yellow);
  }

  cursor: pointer;
}
</style>
