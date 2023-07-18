<template>
  <div class="recruit_copywritings_paginations">
    <div class="icon" @click="movePage('prev')">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </div>

    <div
      v-for="num in computedCopywritingsPages"
      :key="num"
      :class="{
        recruit_copywritings_pagination: true,
        'recruit_copywritings_pagination--active':
          num + temp === $store.state.copywritingsCurPage,
      }"
      @click="movePage('number', num + temp)"
    >
      {{ num + temp }}
    </div>

    <div
      v-show="
        computedTotalCopywritingsPages > 3 &&
        $store.state.copywritingsCurPage != computedTotalCopywritingsPages
      "
    >
      ...
    </div>

    <div class="icon" @click="movePage('next')">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/copywritings");
      const copywritingsCount = res.data.length;
      this.copywritingsPages =
        copywritingsCount % 6 === 0
          ? copywritingsCount > 6
            ? copywritingsCount / 6
            : 1
          : Math.ceil(copywritingsCount / 6);
    } catch (err) {
      console.error(err);
    }
  },

  data() {
    return {
      copywritingsPages: 0,
    };
  },

  computed: {
    computedTotalCopywritingsPages() {
      return this.copywritingsPages;
    },

    computedCopywritingsPages() {
      return this.copywritingsPages > 3 ? 3 : this.copywritingsPages;
    },

    temp() {
      if (this.$store.state.copywritingsCurPage > 3) {
        return this.$store.state.copywritingsCurPage - 3;
      }

      return 0;
    },
  },

  methods: {
    prevPage() {
      if (this.$store.state.copywritingsCurPage === 1) return;
      this.$store.commit("copywritingsPrevPage");
    },

    nextPage() {
      if (
        this.$store.state.copywritingsCurPage ===
        this.computedTotalCopywritingsPages
      )
        return;
      this.$store.commit("copywritingsNextPage");
    },

    // 進行切換頁碼
    movePage(feature, num = null) {
      feature === "number"
        ? this.$store.commit("copywritingsGoToPage", num)
        : feature === "next"
        ? this.nextPage()
        : this.prevPage();

      // 更換頁碼時，滾動到頂端
      // window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped lang="scss">
.recruit_copywritings {
  &_paginations {
    grid-column: 1/-1;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    font-family: "Noto Sans TC", sans-serif;
  }

  &_pagination {
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
    color: var(--primary-blue);
    padding-right: 0.5rem;
  }
}
</style>
