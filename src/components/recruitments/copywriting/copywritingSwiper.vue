<template>
  <div class="copywriting_swiper">
    <swiper
      :slidesPerView="4"
      :spaceBetween="48"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="index in 8" :key="index">
        <copywritingSwiperCard />
      </swiper-slide>
    </swiper>

    <button class="swiper-button-prev">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </button>
    <button class="swiper-button-next">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import copywritingSwiperCard from "@/components/recruitments/copywriting/copywritingSwiperCard.vue";
import { computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
    copywritingSwiperCard,
  },

  setup() {
    const store = useStore();

    const defaultCopywritings = ref([
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
      {
        copywriting_id: 98,
        copywriting_role: 5,
        copywriting_exp: 1,
        copywriting_team_name: "勇士隊",
        copywriting_area: "花蓮縣",
      },
    ]);

    const computedCopywritings = computed(() =>
      store.state.copywritingsCount === 0
        ? [...defaultCopywritings.value]
        : store.state.copywritings
            .filter((copywriting) => copywriting.copywriting_role === 5)
            .slice(0, 8)
    );

    return {
      modules: [Navigation, Pagination],
      computedCopywritings,
    };
  },
};
</script>

<style scoped lang="scss">
.copywriting_swiper {
  position: relative;
}

.swiper {
  margin: 0 4rem;
}

.swiper-button-prev,
.swiper-button-next {
  width: 45px;
  height: 45px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--primary-blue);

  color: #fff;

  &::after {
    content: "";
  }
}

.swiper-button-prev {
  right: initial;
  left: 0;
}

.swiper-button-next {
  right: 0;
  left: initial;
}
</style>
