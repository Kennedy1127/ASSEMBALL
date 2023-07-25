<template>
  <div class="paginations">
    <div class="arrow-icon" @click="movePage('prev')">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </div>

    <div
      v-for="num in computedRenderPages"
      :key="num"
      :class="{
        pagination: true,
        'pagination--active': num + computedTemp === computedCurPage,
      }"
      @click="movePage('number', num + computedTemp)"
    >
      {{ num + computedTemp }}
    </div>

    <div
      v-show="computedTotalPages > 3 && computedCurPage != computedTotalPages"
    >
      ...
    </div>

    <div class="arrow-icon" @click="movePage('next')">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const computedCurPage = computed(
  () => store.state[`${props.type}CurPage`] || 1
);
const computedTotalPages = computed(() => props.totalPages || 1);
const computedRenderPages = computed(() =>
  computedTotalPages.value > 3 ? 3 : computedTotalPages.value
);
const computedTemp = computed(() =>
  computedCurPage.value > 3 ? computedCurPage.value - 3 : 0
);

const prevPage = () => {
  if (computedCurPage.value === 1) return;
  store.commit("paginationPrevPage", props.type);
};

const nextPage = () => {
  if (computedCurPage.value === computedTotalPages.value) return;
  store.commit("paginationNextPage", props.type);
};

const movePage = (feature, num = null) => {
  feature === "number"
    ? store.commit("paginationGoToPage", { num, type: props.type })
    : feature === "next"
    ? nextPage()
    : prevPage();

  if (store.state.isMobile || route.name === "Products") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
.arrow-icon {
  cursor: pointer;
  color: var(--primary-blue);
  padding-right: 0.5rem;
}

.paginations {
  grid-column: 1/-1;
  align-self: end;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  font-family: "Noto Sans TC", sans-serif;
}

.pagination {
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
