<template>
  <main class="myplayer_gallery">
    <div class="myplayer_gallery_return">
      <div class="myplayer_gallery_return_wrap">
        <div class="myplayer_gallery_return_arrow">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
        <router-link to="/myplayerTeam" class="myplayer_gallery_return_word"
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
      <div class="myplayer_gallery_content_add">
        <div class="myplayer_gallery_content_add_icon">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </div>
      </div>
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
      <!-- <ProductsMainPagination /> -->
    </div>
  </main>
</template>
<script>
// "components/products/productsItems/ProductsMainPagination";
//  import ProductsMainPagination from "@components/products/productsItems/ProductsMainPagination";
// import ProductsMainPagination from "@components/products/productsItems/ProductsMainPagination";
export default {
  components: {
    // ProductsMainPagination,
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
    };
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
      width: 15rem;
      display: flex;
      justify-content: space-between;
      &_confirm {
        font-size: 2rem;
        color: var(--pale-white);
        background-color: var(--primary-blue);
        padding: 0.5rem;
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
    &_add {
      width: 30%;
      margin: 0rem 0rem 1rem 0rem;
      padding: 8rem 0rem;
      border: 3px dashed var(--secondary-blue-2);
      cursor: pointer;
      border-radius: 0.5rem;
      &_icon {
        text-align: center;
        font-size: 4rem;
        color: var(--primary-blue);
      }
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
    border: 1px solid black;
  }
}
</style>
