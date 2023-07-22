<template>
  <section class="myplayer_album">
    <div class="myplayer_album_title_wrap">
      <div class="myplayer_album_rect"></div>
      <h3 class="myplayer_album_title">相簿</h3>
    </div>
    <router-link to="/MyplayerGallery" class="myplayer_album_gallery">
      <div class="myplayer_album_gallery_text">觀看更多</div>
    </router-link>
  </section>
</template>
<style scoped lang="scss">
.myplayer {
  margin: 0 auto;
  &_album {
    width: 100%;
    &_title_wrap {
      margin: auto;
      display: flex;
      justify-content: space-between;
      width: 10rem;
      padding-bottom: 4rem;
      .myplayer_album_rect {
        width: 1rem;
        background-color: var(--primary-blue);
      }
      .myplayer_album_title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-blue);
      }
    }
    .myplayer_album_gallery {
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(../../assets/images/myplayer_team/gallery.jpg);
      filter: contrast(50%);
      filter: brightness(40%);
      transition: 0.3s;
      cursor: pointer;

      &_text {
        font-size: 4rem;
        font-weight: 500;
        color: var(--secondary-gray-2);
        text-align: center;
        padding: 10rem 0rem;
        letter-spacing: 1.25rem;
        text-shadow: var(--secondary-gray-1) 0.1rem 0.1rem 0.2rem;
      }
    }
    .myplayer_album_gallery:hover {
      filter: contrast(0);
      filter: brightness(80%);
      transition: 0.3s;
    }
    .myplayer_album_gallery_text:hover {
      color: var(--pale-white);
    }
  }
}
</style>
