<template>
  <div class="copywriting_swiper">
    <swiper
      :spaceBetween="48"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="modules"
      :breakpoints="{
        420: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 48,
        },
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <CopywritingSwiperCard :copywriting="slide" />
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

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import CopywritingSwiperCard from "@/components/recruitments/copywriting/CopywritingSwiperCard.vue";
import getData from "@/composables/data/getData";
import { watchEffect, ref } from "vue";

const props = defineProps(["role"]);
const modules = ref([Navigation, Pagination]);
const { getDocument, getDocuments } = getData();

const slides = ref([]);

watchEffect(async () => {
  if (props.role !== undefined) {
    const res = await getDocuments("COPYWRITINGS", [
      ["role", "==", props.role],
    ]);

    for (let i = 0; i < res.length; i++) {
      const team = await getDocument("TEAMS", res[i].team_id);
      slides.value.push({
        ...res[i],
        team_name: team.teamName,
        team_intro: team.intro,
      });
    }
  }
});
</script>

<style scoped lang="scss">
.copywriting_swiper {
  position: relative;
}

.swiper {
  margin: 0 4rem;

  @media all and (max-width: 420px) {
    margin: 0 1rem;
  }
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

  @media all and (max-width: 420px) {
    left: -2rem;
  }
}

.swiper-button-next {
  right: 0;
  left: initial;

  @media all and (max-width: 420px) {
    right: -2rem;
  }
}
</style>
