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
import copywritingSwiperCard from "@/components/recruitments/copywriting/copywritingSwiperCard.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    copywritingSwiperCard,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
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
