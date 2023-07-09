<template>
  <div class="products_aside_search">
    <div class="products_aside_search_title">
      <div class="block"></div>
      <div>搜尋</div>
    </div>

    <div class="products_aside_search_input">
      <input type="text" placeholder="輸入關鍵字" />
      <div class="icon">
        <img src="~@/assets/images/icons/search.png" alt="search icon" />
      </div>
    </div>

    <div class="products_aside_search_filter">
      <div class="products_aside_search_filter_dropdown">
        <span>上架日期 新-->舊</span>
        <div class="icon">
          <img
            src="~@/assets/images/icons/arrow-down.png"
            alt="arrow-down icon"
          />
        </div>
      </div>
      <!-- <div class="products_aside_search_filter_content"></div> -->
    </div>

    <div class="products_aside_search_button">
      <button>
        <div class="icon">
          <img
            src="~@/assets/images/icons/arrow-circle-right.png"
            alt="arrow-circle-right icon"
          />
        </div>
        搜索
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products_aside_search {
  &_input {
    margin-top: 1.5rem;
    position: relative;

    input {
      width: 100%;
      border: none;
      padding: 1.25rem 1rem;
      border-radius: var(--round);
      background-color: var(--secondary-blue-4);

      font-size: 1rem;
      font-weight: 400;

      &::placeholder {
        color: var(--secondary-gray-3);
      }
    }

    .icon {
      position: absolute;
      top: 50%;
      right: 1.25rem;
      transform: translateY(-50%);

      pointer-events: none;
    }
  }

  &_filter {
    margin-top: 1.5rem;

    &_dropdown {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 1.5px;
      padding: 1.25rem 1rem;
      border-radius: var(--round);
      border: 2px solid var(--secondary-blue-2);

      position: relative;
      cursor: pointer;
      .icon {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
      }
    }
  }

  &_button {
    margin-top: 2rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      width: 150px;
      height: 50px;
      margin: 0 auto;
      border-radius: 35px;
      background-color: var(--primary-blue);

      font-family: inherit;
      font-size: 1.25rem;
      letter-spacing: 6px;
      color: #fff;
    }
  }
}
</style>
