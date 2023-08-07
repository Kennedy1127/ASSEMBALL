<template>
  <div
    class="myplayer_photo"
    :style="{ backgroundImage: 'url(' + currentPhoto.img + ')' }"
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
  data() {
    return {
      photos: [
        {
          img: require("/src/assets/images/myplayer_team/myplayerGallery/myAlbum_1.jpg"),
        },
        {
          img: require("/src/assets/images/myplayer_team/myplayerGallery/myAlbum_2.jpg"),
        },
        {
          img: require("/src/assets/images/myplayer_team/myplayerGallery/myAlbum_3.jpg"),
        },
      ],
      currentPhotoIndex: 0,
    };
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentPhotoIndex];
    },
  },
  methods: {
    nextPhoto() {
      if (this.currentPhotoIndex < this.photos.length - 1) {
        this.currentPhotoIndex++;
      }
      this.$emit("goToRight");
    },
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
      }
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
</style>
