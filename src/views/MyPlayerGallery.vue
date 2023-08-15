<template>
  <main class="myplayer_gallery">
    <div class="myplayer_gallery_return">
      <div class="myplayer_gallery_return_wrap">
        <div class="myplayer_gallery_return_arrow">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
        <router-link
          :to="{ name: 'myplayerTeam', params: { id: $route.params.id } }"
          class="myplayer_gallery_return_word"
          >返回</router-link
        >
      </div>
    </div>
    <div class="myplayer_gallery_content">
      <label for="addPhoto" class="myplayer_gallery_content_add"> </label>
      <input
        type="file"
        id="addPhoto"
        accept="image/*"
        ref="fileInput"
        @change="handleFileChange"
      />

      <div
        class="myplayer_gallery_content_pic"
        v-for="item in myplayerGalleryCard"
        :key="item.id"
        v-bind:style="{ backgroundImage: `url('${item.myGalleryPic}')` }"
        @click="openPic(item.id)"
      >
        <input type="checkbox" class="myplayer_gallery_content_pic_checkbox" />
      </div>
    </div>

    <OverlayComponent
      type="TeamGallery"
      v-if="isVisible"
      @closeOverlay="isVisible = false"
      @goToRight="goToRight"
      @goToLeft="goToLeft"
      :sendPic="sendPic"
      :curIndex="curIndex"
    />
  </main>
</template>
<script>
import MyplayerPhotoPopus from "@/components/MyplayerTeam/MyplayerPhotoPopus.vue";
import OverlayComponent from "@/components/utilities/OverlayComponent.vue";
import useStorage from "@/composables/data/useStorage";
// const photoId = ref(null);
export default {
  async mounted() {
    console.log(this.$route.params.id);
    // this.$route.params.id
    this.$store.state.isPending = true;
    const { getAllPics } = useStorage();
    const teamPic = await getAllPics(
      `images/TEAMS/${this.$route.params.id}/gallery`
    );

    // console.log(teamPic);

    teamPic.forEach((el, i) => {
      this.myplayerGalleryCard[i] = {
        id: i + 1,
        myGalleryPic: el,
      };
    });
    this.$store.state.isPending = false;
  },
  components: {
    MyplayerPhotoPopus,
    OverlayComponent,
  },
  data() {
    return {
      myplayerGalleryCard: [],
      isVisible: false,
      sendPic: null,
      curIndex: 5,
      pic: null,
      showUp: false,
    };
  },
  methods: {
    // openFileExplorer() {
    //   this.$refs.fileInput.click();
    // },
    async handleFileChange(event) {
      this.pic = event.target.files[0];

      // console.log(this.pic);
      // this.$route.params.id
      const { uploadPic, getAllPics } = useStorage();
      await uploadPic(
        `images/TEAMS/${this.$route.params.id}/gallery/${this.pic.name}`,
        this.pic
      );

      const teamPic = await getAllPics(
        `images/TEAMS/${this.$route.params.id}/gallery`
      );

      console.log(teamPic);

      teamPic.forEach((el, i) => {
        this.myplayerGalleryCard[i] = {
          id: i + 1,
          myGalleryPic: el,
        };
      });

      // if (selectedFile) {
      //   this.previewImage(selectedFile);
      // }
    },

    // previewImage(file) {
    //   const reader = new FileReader();
    //   reader.onload = (event) => {
    //     const dataURL = event.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
    openPic(id) {
      this.isVisible = true;

      const selectedCard = this.myplayerGalleryCard.find((card) => {
        return card.id === id;
      });
      this.sendPic = selectedCard.myGalleryPic;
      this.curIndex = id;
    },
    goToRight() {
      if (this.curIndex === this.myplayerGalleryCard.length) return;
      this.curIndex++;
      // console.log(this.curIndex);

      const selectedCard = this.myplayerGalleryCard.find((card) => {
        return card.id === this.curIndex;
      });
      this.sendPic = selectedCard.myGalleryPic;
    },
    goToLeft() {
      if (this.curIndex === 1) return;
      this.curIndex--;

      // console.log(this.curIndex);

      const selectedCard = this.myplayerGalleryCard.find((card) => {
        return card.id === this.curIndex;
      });
      this.sendPic = selectedCard.myGalleryPic;
    },
  },
};
</script>

<style lang="scss" scoped>
.myplayer_gallery {
  width: 100%;
  background-image: url(../assets/images/myplayer_team/myplayerBgc.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 14rem 0rem 12rem 0rem;
  &_return {
    width: 80%;
    margin: auto;
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    // background-color: red;
    &_wrap {
      width: 8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
    &_arrow {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-blue);
    }
    &_word {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-blue);
      padding-left: 3rem;
    }
  }
  &_content {
    width: 80%;
    margin: auto;
    display: flex;
    // justify-content: space-between;
    gap: 76px;
    flex-wrap: wrap;
    box-sizing: border-box;
    input {
      position: absolute;
      width: 100%;
      cursor: pointer;
      z-index: 1;
      display: none;
    }
    &_add {
      width: 30%;
      margin: 0rem 0rem 1rem 0rem;
      padding: 8rem 0rem;
      border: 3px dashed var(--secondary-blue-2);
      cursor: pointer;
      border-radius: 0.5rem;
      background-image: url(../assets/images/myplayer_team/Vector.png);
      background-size: 15%;
      background-position-x: calc(50%);
      background-position-y: calc(50%);
      background-repeat: no-repeat;
      position: relative;
      // position: relative;
      // &_icon {
      //   text-align: center;
      //   font-size: 4rem;
      //   color: var(--primary-blue);
      //   position: absolute;
      // }
    }
    &_pic {
      width: 30%;
      padding: 20rem 0rem 0.5rem 0.5rem;
      margin-bottom: 1rem;
      border: none;
      background-repeat: no-repeat;
      background-size: cover;
      border: 1px solid black;
      display: flex;
      justify-content: flex-start;
      align-items: end;
      cursor: pointer;
      &_checkbox {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        appearance: none;
        border: 1px solid var(--primary-blue);
        position: relative;
        display: none;

        &:checked::after {
          // background-color: var(--accent-red);
          content: "✓";
          font-size: 2rem;
          font-weight: 600;
          color: var(--primary-blue);
          position: absolute;
          right: 2.5px;
          top: -12.5px;
        }
      }
    }
  }
  &_pagination {
    width: 80%;
    margin: 8rem auto 0rem auto;
    height: 20px;
  }
}
@media screen and (min-width: 1441px) and (max-width: 1600px) {
  .myplayer_gallery_content {
    gap: 45px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .myplayer_gallery_content_add {
    padding: 6rem 0rem;
  }
  .myplayer_gallery_content_pic {
    padding: 18rem 0rem 0.5rem 0.5rem;
  }
  .myplayer_gallery_content {
    gap: 38px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .myplayer_gallery_content_add {
    padding: 4rem 0rem;
  }
  .myplayer_gallery_content_pic {
    padding: 16rem 0rem 0.5rem 0.5rem;
  }
  .myplayer_gallery_return_delete {
    width: 12rem;
  }

  .myplayer_gallery_return_delete_confirm {
    font-size: 1.5rem;
  }
  .myplayer_gallery_return_delete_icon {
    font-size: 1.5rem;
  }
  .myplayer_gallery_content {
    gap: 38px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .myplayer_gallery_content_pic {
    padding: 10rem 0rem 0.5rem 0.5rem;
  }
  .myplayer_gallery_content_add {
    padding: 5rem 0rem;
  }
  .myplayer_gallery_content {
    gap: 30px;
  }
}
@media screen and (min-width: 421px) and (max-width: 768px) {
  .myplayer_gallery_content_pic {
    padding: 6rem 0rem 0.5rem 0.5rem;
  }
  .myplayer_gallery_content_add {
    padding: 3rem 0rem;
  }
  .myplayer_gallery_content {
    gap: 15px;
  }
}
@media screen and (max-width: 420px) {
  .myplayer_gallery_return_wrap {
    width: initial;
  }
  .myplayer_gallery_return_word {
    font-size: 1rem;
    padding-left: 1rem;
  }
  .myplayer_gallery_return_delete_confirm {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  .myplayer_gallery_return_delete_icon {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }
  .myplayer_gallery_content_add_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(60%);
    font-size: 3rem;
  }
  .myplayer_gallery_return_delete {
    width: 11rem;
  }
  .myplayer_gallery_content_add {
    width: 45%;
    padding: 0;
  }
  .myplayer_gallery_content_pic {
    width: 45%;
    padding: 6rem 0rem 0.5rem 0.5rem;
  }
  .myplayer_gallery_content {
    justify-content: space-between;
    gap: 0;
  }
}
</style>
