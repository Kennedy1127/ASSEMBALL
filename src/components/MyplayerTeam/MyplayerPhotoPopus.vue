<template>
  <div
    class="myplayer_photo"
    :style="{
      backgroundImage: `url('${computedPic}')`,
    }"
  >
    <div class="myplayer_photo_rightArrow" @click="nextPhoto">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
    <div class="myplayer_photo_leftArrow" @click="prevPhoto">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["sendPic", "curIndex"],
  emits: ["goToRight", "goToLeft"],

  computed: {
    computedPic() {
      return this.$props.sendPic;
    },
  },
  methods: {
    nextPhoto() {
      this.$emit("goToRight");
    },
    prevPhoto() {
      this.$emit("goToLeft");
    },
  },
};
</script>
<style lang="scss" scoped>
.myplayer_photo {
  width: 800px;
  height: 600px;
  margin: auto;
  background-color: var(--pale-white);
  position: relative;
  top: calc(50% - 300px);
  background-repeat: no-repeat;
  background-size: cover;
  &_rightArrow {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    border-radius: 50%;
    color: var(--primary-blue);
    background-color: var(--pale-white);
    cursor: pointer;
    position: absolute;
    top: calc(50% - 2rem);
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primary-blue);
    transform: translateX(120%);
  }
  &_leftArrow {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    border-radius: 50%;
    color: var(--primary-blue);
    background-color: var(--pale-white);
    cursor: pointer;
    position: absolute;
    top: calc(50% - 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--primary-blue);
    transform: translateX(-120%);
  }
}
@media screen and (max-width: 767px) {
  .myplayer_photo {
    width: 250px;
    height: 200px;
    margin: 10rem auto 0rem auto;
  }
  .myplayer_photo_rightArrow {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    top: calc(50% - 1rem);
  }
  .myplayer_photo_leftArrow {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    top: calc(50% - 1rem);
  }
}
</style>
