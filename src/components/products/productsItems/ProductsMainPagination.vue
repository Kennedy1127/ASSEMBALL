<template>
  <div class="products_main_paginations">
    <div class="icon" @click="movePage('prev')">
      <img src="~@/assets/images/icons/arrow-left.png" alt="arrow-left icon" />
    </div>

    <div
      v-for="num in 3"
      :key="num"
      :class="{
        products_main_pagination: true,
        'products_main_pagination--active': num + temp === curPage,
      }"
      @click="movePage('number', num + temp)"
    >
      {{ num + temp }}
    </div>

    <div v-show="curPage != lastPage">...</div>

    <div class="icon" @click="movePage('next')">
      <img
        src="~@/assets/images/icons/arrow-right.png"
        alt="arrow-right icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["totalPages"],

  data() {
    return {
      curPage: 1,
      lastPage: this.$props.totalPages,
    };
  },

  computed: {
    temp() {
      if (this.curPage > 3) {
        return this.curPage - 3;
      }

      return 0;
    },
  },

  methods: {
    prevPage() {
      if (this.curPage === 1) return;
      this.curPage--;
    },

    nextPage() {
      if (this.curPage === this.$props.totalPages) return;
      this.curPage++;
    },

    // 進行切換頁碼
    movePage(feature, num = null) {
      feature === "number"
        ? (this.curPage = num)
        : feature === "next"
        ? this.nextPage()
        : this.prevPage();

      this.$emit("changePage", this.curPage);

      // 更換頁碼時，滾動到頂端
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped lang="scss">
.products_main_paginations {
  margin-top: 6rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  font-family: "Noto Sans TC", sans-serif;
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

.icon {
  cursor: pointer;
}
</style>
