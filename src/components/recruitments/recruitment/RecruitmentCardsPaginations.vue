<template>
  <div class="recruit_copywritings_paginations">
    <div class="icon" @click="movePage('prev')">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </div>

    <div
      v-for="num in renderPages"
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
      v-show="totalPages > 3 && $store.state.copywritingsCurPage != totalPages"
    >
      ...
    </div>

    <div class="icon" @click="movePage('next')">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPages() {
      return this.$store.getters.copywritingsPages;
    },

    renderPages() {
      return this.totalPages > 3 ? 3 : this.totalPages;
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
      if (this.$store.state.copywritingsCurPage === this.totalPages) return;
      this.$store.commit("copywritingsNextPage");
    },

    movePage(feature, num = null) {
      feature === "number"
        ? this.$store.commit("copywritingsGoToPage", num)
        : feature === "next"
        ? this.nextPage()
        : this.prevPage();
    },
  },
};
</script>

<style scoped lang="scss">
.recruit_copywritings {
  &_paginations {
    grid-column: 1/-1;
    align-self: end;

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
