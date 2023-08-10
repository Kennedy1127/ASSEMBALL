<template>
  <div class="lottie">
    <div ref="bodyAnimation" class="back">
      <div class="text">
        Loading
        <div class="preloader">
          <div class="circ1"></div>
          <div class="circ2"></div>
          <div class="circ3"></div>
          <div class="circ4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import loading from "@/assets/loading/loading_fit.json";

export default {
  name: "lottie",
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.bodyAnimation, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loading, // the path to the animation json
    });
  },
};
</script>

<style scoped lang="scss">
.lottie {
  background-color: var(--primary-blue);
  width: 100%;
  height: 100vh;
  .back {
    width: 75vw;
    height: 75vh;
    margin: auto;
    position: relative;
    top: calc(100vh - 900px);
    @media all and (max-width: 420px) {
      width: 100%;
      height: 100vh;
      position: static;
    }
    .text {
      position: absolute;
      color: #ffffff;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 10px;
      bottom: 16.5%;
      left: 44%;
      display: flex;
      align-items: flex-end;
      @media all and (max-width: 420px) {
      }
      .preloader {
        padding-left: 0.5rem;
        display: flex;
        gap: 0.5rem;
        padding-bottom: 0.5rem;
        > div {
          background-color: #ffffff;
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 50%;
          display: inline-block;
          animation: stretchdelay 1s infinite ease-in-out;
        }
        > div:nth-child(1) {
          animation-delay: 0;
        }
        > div:nth-child(2) {
          animation-delay: 0.1s;
        }
        > div:nth-child(3) {
          animation-delay: 0.2s;
        }
        > div:nth-child(4) {
          animation-delay: 0.3s;
        }
      }
    }
  }
}

.preloader .circ2 {
  animation-delay: 0.1s;
}

.preloader .circ3 {
  animation-delay: 0.2s;
}

.preloader .circ4 {
  animation-delay: 0.3s;
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-10px);
  }
}
</style>
