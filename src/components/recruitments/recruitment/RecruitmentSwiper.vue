<template>
  <div class="recruit_feedback_swiper">
    <swiper
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="index in 5" :key="index">
        <div class="recruit_feedback_swiper_content">
          <div class="recruit_feedback_swiper_icon">
            <img
              src="@/assets/images/recruitment/team-icons/team-icon-1-lg.png"
              alt="team icon"
            />
          </div>
          <div class="recruit_feedback_swiper_name">猛虎隊</div>
          <div class="recruit_feedback_swiper_text">
            這個網路平台真的太好用了！
            它提供了豐富的資源，讓我能快速的找到同樣熱愛棒球的隊友。
          </div>
        </div>
      </swiper-slide>

      <button class="swiper-button-prev">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button class="swiper-button-next">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </swiper>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style scoped lang="scss">
.recruit_feedback_swiper {
  width: 100%;
  height: 100%;

  &_content {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: var(--primary-blue);
  }

  &_name {
    margin: 0.5rem 0 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  &_text {
    max-width: 60%;
    font-size: 1.5rem;
    font-weight: 500;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-prev,
.swiper-button-next {
  width: 50px;
  height: 50px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--primary-blue);
  color: #fff;

  &::after {
    content: "";
  }
}
</style>
