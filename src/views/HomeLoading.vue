<template>
  <div class="lottie">
    <div ref="bodyAnimation" class="back">
      <div>Loading...</div>
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
.back {
  background-color: var(--primary-blue);
  width: 100%;
  height: 100vh;
  position: relative;
  div {
    position: absolute;
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 10px;
    bottom: 16.5%;
    left: 44%;
  }
}
</style>
