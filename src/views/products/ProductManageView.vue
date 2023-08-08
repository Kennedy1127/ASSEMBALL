<template>
  <main class="products_manage">
    <div class="wrapper">
      <div class="products_manage_back_btn_link">
        <router-link :to="{ name: 'Products' }">
          <span> <font-awesome-icon icon="fa-solid fa-angle-left" /> </span>返回
        </router-link>
      </div>

      <div class="products_manage_header">
        <div class="products_manage_header_title">
          <div class="color_block"></div>
          拍賣管理
        </div>

        <div class="products_manage_btn_area">
          <div class="products_manage_btn_area_select">
            <SelectorComponent :options="productDate" placeholder="選擇日期" />
          </div>

          <button class="del_btn">
            <div class="del_btn_text">刪除商品</div>
            <div class="del_btn_img">
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </div>
          </button>
        </div>
      </div>

      <section class="manage_from">
        <div class="manage_item manage_item_header">
          <div class="manage_item_list manage_checkbox">
            <input type="checkbox" id="checkbox" />
          </div>
          <div class="manage_item_list manage_item_title">標題</div>
          <div class="manage_item_list manage_item_price">價格</div>
          <div class="manage_item_list manage_item_date">刊登時間</div>
          <div class="manage_item_list manage_item_icon">留言</div>
          <div class="manage_item_list manage_item_icon">商品修改</div>
        </div>

        <div v-for="item in manage" class="manage_item">
          <div class="manage_item_list manage_checkbox">
            <input type="checkbox" id="checkbox" />
          </div>

          <div class="manage_item_list manage_item_title">
            {{ item.title }}
          </div>

          <div
            class="manage_item_list manage_item_price manage_item_price--red"
          >
            ${{ convertPrice(item.price) }}
          </div>
          <div class="manage_item_list manage_item_date">
            {{ convertDate(item.date.toDate()) }}
            <br />
            {{ convertTime(item.date.toDate()) }}
          </div>
          <div
            class="manage_item_list manage_item_icon manage_item_icon--comment"
          >
            <button>
              <div class="notify">1</div>
              <span>
                <font-awesome-icon
                  icon="fa-solid fa-comment-dots"
                  style="color: #64b1dc"
                />
              </span>
            </button>
          </div>
          <div class="manage_item_list manage_item_icon manage_item_icon--pen">
            <button @click="goEdit(item.product_id)">
              <font-awesome-icon
                icon="fa-solid fa-pen"
                style="color: #1e60cd"
              />
            </button>
          </div>
        </div>
      </section>
      <!-- <PaginationComponent
        :totalPages="computedTotalPages"
        type="BacksideRecruit"
      /> -->
    </div>
  </main>
</template>

<script>
import PaginationComponent from "@/components/utilities/PaginationComponent";
import SelectorComponent from "@/components/utilities/SelectorComponent.vue";

export default {
  components: {
    PaginationComponent,
    SelectorComponent,
  },

  async mounted() {
    const res = await this.$store.dispatch("getProductManage", {
      collectionName: "MEMBERS",
      documentId: this.$store.state.user.id,
      subCollectionName: "PRODUCTMANAGE",
    });

    this.manage = [...res];
  },

  data() {
    return {
      manage: [],
      // manage: [
      //   {
      //     title: "棒球界lv精品球棒帶回家！",
      //     price: 4500,
      //     date: "2023/07/21 18:30:11",
      //   },
      //   {
      //     title: "帥氣二手球衣等待中",
      //     price: 4500,
      //     date: "2023/07/21 18:30:11",
      //   },
      //   {
      //     title: "捕手手套大特價販賣",
      //     price: 4500,
      //     date: "2023/07/21 18:30:11",
      //   },
      //   {
      //     title: "棒球SSR球鞋獨家專賣！",
      //     price: 4500,
      //     date: "2023/07/21 18:30:11",
      //   },
      //   {
      //     title: "可愛粉色球帽大拍賣",
      //     price: 4500,
      //     date: "2023/07/21 18:30:11",
      //   },
      // ],
      // 下拉選單的日期分類
      productDate: [
        {
          id: 1,
          label: "從新到舊",
        },
        {
          id: 2,
          label: "從舊到新",
        },
      ],
    };
  },

  methods: {
    convertPrice(price) {
      return Number(price).toLocaleString();
    },

    convertDate(inputDate) {
      const date = new Date(inputDate);
      return `${date.getFullYear()} / ${String(date.getMonth() + 1).padStart(
        2,
        0
      )} / ${String(date.getDate()).padStart(2, 0)}`;
    },

    convertTime(inputDate) {
      const date = new Date(inputDate);
      return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    },

    goEdit(id) {
      this.$router.push({ name: "ProductPost", query: { id } });
    },
  },
};
</script>

<style scoped lang="scss">
.notify {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  line-height: 23px;
  background-color: var(--accent-red);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
  position: absolute;
  right: 22%;
  top: -10%;
  border: 2px solid #fff;
  font-size: 1rem;
  font-family: "Montserrat";
}

// 分隔線設定
hr {
  color: red;
  background-color: red;
  height: 2px;
  border: none;
}

// 按鈕設定
button {
  background-color: #fff;
  & span {
    font-size: 2rem;
    padding-left: 1rem;
  }
}

// 返回按鈕
.products_manage_back_btn_link {
  margin-bottom: 3rem;

  @media all and (max-width: 420px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 80px;
    margin: 4.5rem 0 0;
    padding: 1rem 1.5rem 1rem 1rem;
    background-color: #fff;
    box-shadow: var(--shadow-light);

    display: flex;
    align-items: center;
  }

  & a {
    display: inline-block;
    color: var(--primary-blue);
    font-size: 1.25rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
    cursor: pointer;

    & span {
      color: var(--primary-blue);
      font-size: 1.25rem;
      padding-right: 0.5rem;
    }
  }
}

.products_manage_back_btn {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  .text {
    color: var(--primary-blue);
    font-size: 1.25rem;
    font-weight: 800;
  }

  .img {
    margin-top: 0.2rem;
  }
}

// 表頭頁首
.products_manage_header_title {
  font-size: 1.5rem;
  display: flex;
  gap: 2rem;
  align-content: end;
  align-items: end;
  color: var(--primary-blue);
  font-weight: 600;

  .color_block {
    width: 1rem;
    height: 2rem;
    background-color: var(--primary-blue);
  }
}

.products_manage_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media all and (max-width: 420px) {
    flex-direction: column;
    margin-bottom: 0rem;

    &_title {
      margin-top: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--secondary-gray-3);
    }
  }
}

.products_manage_btn_area {
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media all and (max-width: 420px) {
    flex-direction: column;
    gap: 2rem;
    order: -1;
  }

  &_select {
    width: 200px;
    height: 60px;

    @media all and (max-width: 420px) {
      width: 100%;
    }

    .selector-component {
      height: 100%;
      width: 100%;
    }
  }

  .del_btn {
    width: 200px;
    height: 60px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: var(--primary-blue);

    font-size: 1.25rem;
    color: white;

    @media all and (max-width: 420px) {
      width: 100%;
      justify-content: center;

      &_img {
        position: relative;
        left: 6rem;
      }
    }
  }
}

.products_manage {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;

  @media all and (max-width: 420px) {
    padding: 0;
  }

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 8rem;

    margin-top: 6rem;

    @media all and (max-width: 420px) {
      margin-top: 9.5rem;
      padding: 2rem 1.5rem;
    }
  }
}

// 表頭
.manage_item_header {
  background-color: #e5effb;
  min-height: 4rem;
  align-items: center;
  color: var(--secondary-gray-3);
  font-size: 1.25rem;
  justify-content: space-evenly;

  @media all and (max-width: 420px) {
    display: none;
  }
}

// 表頭

.manage_item_list {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.25rem;

  @media all and (max-width: 420px) {
    margin: 0;
  }
}

.manage_item {
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-evenly;

  @media all and (max-width: 420px) {
    align-items: initial;
    justify-content: initial;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr;
    align-items: center;
    column-gap: 1.5rem;
    row-gap: 1rem;

    margin-bottom: 0;
    padding: 2rem 0;
    border-bottom: 1px solid var(--secondary-gray-3);

    &:last-child {
      margin-bottom: 2rem;
    }

    &.manage_item_header {
      display: none;
    }

    &_list {
      &.manage_checkbox {
        grid-row: 1 / span 3;
        align-self: start;
      }

      &.manage_item_title {
        grid-column: 2 / -1;
        width: fit-content;
      }

      &.manage_item_price {
        grid-column: 2 / span 1;
      }

      &.manage_item_icon {
        width: fit-content;
        justify-content: initial;

        &--comment {
          grid-column: 3 / span 1;
          grid-row: 2;
        }

        &--pen {
          grid-column: 4 / span 1;
          grid-row: 2;
        }
      }

      &.manage_item_date {
        grid-column: 2 / -1;
        width: fit-content;
      }
    }
  }
}

.manage_item_title {
  width: 15rem;
}

.manage_item_price {
  width: 4rem;

  &--red {
    color: var(--accent-red);
    font-weight: 600;
  }
}

.manage_item_date {
  width: 12rem;
}

.manage_item_icon {
  position: relative;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    font-size: 1.5rem;
  }
  img {
    width: 2rem;
  }
}
</style>
