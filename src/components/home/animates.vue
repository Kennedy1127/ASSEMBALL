<template>
  <ul>
    <li
      v-for="(artist, i) in artists"
      :style="`background-image: url(${artist.backgroundUrl});`"
      role="button"
      :class="active === i ? 'active' : ''"
      @click="() => (active = i)"
    >
      <div class="content"></div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      artists: [
        {
          backgroundUrl: "https://assets.codepen.io/152347/dom-dolla.jpg",
        },
        {
          backgroundUrl: "https://assets.codepen.io/152347/crooked-colours.jpg",
        },
        {
          backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg",
        },
        {
          backgroundUrl: "https://assets.codepen.io/152347/allday.jpg",
        },
        {
          backgroundUrl: "https://assets.codepen.io/152347/boo-seeka.jpg",
        },
        {
          backgroundUrl: "https://assets.codepen.io/152347/running-touch.jpg",
        },
      ],
    };
  },

  methods: {
    nextSlide() {
      if (this.active <= this.artists.length) {
        this.active = this.active += 1;
      }
    },
    prevSlide() {
      if (this.active > 0) {
        this.active = this.active + -1;
      }
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  min-height: 750px;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
}

li {
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.75);
  }

  &.active {
    flex: 6;
    cursor: default;

    &:before {
      background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
    }
  }
}
</style>
