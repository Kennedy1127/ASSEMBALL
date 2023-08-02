<template>
  <main class="myplayer_gallery">
    <div class="myplayer_gallery_return">
      <div class="myplayer_gallery_return_wrap">
        <div class="myplayer_gallery_return_arrow">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
        <router-link to="/myplayerTeam/" class="myplayer_gallery_return_word"
          >返回</router-link
        >
      </div>
      <div class="myplayer_gallery_return_delete">
        <button class="myplayer_gallery_return_delete_confirm">確認刪除</button>
        <button class="myplayer_gallery_return_delete_icon">
          <font-awesome-icon :icon="['fas', 'trash-can']" />
        </button>
      </div>
    </div>
    <div class="myplayer_gallery_content">
      <label for="addPhoto" class="myplayer_gallery_content_add"> </label>
      <input
        type="file"
        id="addPhoto"
        ref="fileInput"
        @change="handleFileSelect"
      />

      <!-- <div class="myplayer_gallery_content_add_icon">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </div> -->
      <div
        class="myplayer_gallery_content_pic"
        v-for="item in myplayerGalleryCard"
        :key="item.id"
        v-bind:style="{ backgroundImage: `url('${item.myGalleryPic}')` }"
      >
        <input type="checkbox" class="myplayer_gallery_content_pic_checkbox" />
      </div>
    </div>
    <div class="myplayer_gallery_pagination">
      <PaginationComponent v-if="isVisible" />
    </div>
    <!-- <MyplayerPhotoPopus v-if="isVisible" /> -->
    <OverlayComponent type="TeamGallery" v-if="isVisible" />
  </main>
</template>
<script>
// "components/products/productsItems/ProductsMainPagination";
//  import ProductsMainPagination from "@components/products/productsItems/ProductsMainPagination";
// import ProductsMainPagination from "@components/products/productsItems/ProductsMainPagination";
import PaginationComponent from "@/components/utilities/PaginationComponent.vue";
import MyplayerPhotoPopus from "@/components/MyplayerTeam/MyplayerPhotoPopus.vue";
import OverlayComponent from "@/components/utilities/OverlayComponent.vue";

// const photoId = ref(null);
export default {
  components: {
    PaginationComponent,
    MyplayerPhotoPopus,
    OverlayComponent,
  },
  data() {
    return {
      myplayerGalleryCard: [
        {
          id: "1",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_1.jpg"),
        },
        {
          id: "2",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_2.jpg"),
        },
        {
          id: "3",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_3.jpg"),
        },
        {
          id: "4",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_4.jpg"),
        },
        {
          id: "5",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_5.jpg"),
        },
        {
          id: "6",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_6.jpg"),
        },
        {
          id: "7",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_7.jpg"),
        },
        {
          id: "8",
          myGalleryPic: require("../assets/images/myplayer_team/myplayerGallery/myAlbum_8.jpg"),
        },
      ],
      isVisible: false,
    };
  },
  methods: {
    openFileExplorer() {
      this.$refs.fileInput.click();
    },

    // Handle the selected file
    handleFileSelect(event) {
      const selectedFile = event.target.files[0];
    },

    previewImage(file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataURL = event.target.result;
      };
      reader.readAsDataURL(file);
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
    &_delete {
      width: 13rem;
      display: flex;
      justify-content: space-between;
      &_confirm {
        font-size: 1.5rem;
        color: var(--pale-white);
        background-color: var(--primary-blue);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        // margin-right: 1rem;
      }
      &_icon {
        font-size: 2rem;
        padding: 0.5rem 1rem;
        background-color: var(--primary-blue);
        border-radius: 0.5rem;
        color: var(--pale-white);
      }
    }
  }
  &_content {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
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
@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .myplayer_gallery_content_add {
    padding: 6rem 0rem;
  }
  .myplayer_gallery_content_pic {
    padding: 18rem 0rem 0.5rem 0.5rem;
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
}
</style>
