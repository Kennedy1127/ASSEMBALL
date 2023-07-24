<template>
  <main class="products_manage">
    <div class="wrapper">
      <!--網頁白色部分 -->

      <!-- <a class="products_manage_back_btn_link" href="#">
        <button class="products_manage_back_btn">
          <div class="img">
            <img src="~@/assets/images/icons/arrow-left.png" />
          </div>
          <div class="text">返回</div>
        </button>
      </a> -->
      <div class="products_manage_back_btn_link">
        <router-link :to="{ name: 'Products' }">
          <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
        </router-link>
      </div>
      <div class="products_manage_header">
        <!--消息管理頁首 -->
        <div class="products_manage_header_title">
          <div class="color_block"></div>
          拍賣管理
        </div>
        <div class="products_manage_btn_area">
          <button class="set_time_btn">
            <div class="set_time_btn_text">刊登時間</div>
            <div class="set_time_btn_img">
              <img src="~@/assets/images/icons/arrow-light-blue.png" />
            </div>
          </button>
          <button class="del_btn">
            <div class="del_btn_text">刪除商品</div>
            <div class="del_btn_img">
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </div>
          </button>
        </div>
      </div>
      <!-- 表單 -->
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
            ${{ item.price }}
          </div>
          <div class="manage_item_list manage_item_date">
            {{ item.date }}
          </div>
          <div class="manage_item_list manage_item_icon">
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
          <div class="manage_item_list manage_item_icon">
            <button>
              <font-awesome-icon
                icon="fa-solid fa-pen"
                style="color: #1e60cd"
              />
            </button>
          </div>
        </div>
        <!-- 頁碼 -->
        <PaginationComponent />
      </section>
      <!-- 表單 -->
    </div>
  </main>
</template>
<script>
import PaginationComponent from "@/components/utilities/PaginationComponent";
export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      manage: [
        {
          title: "棒球界lv精品球棒帶回家！",
          price: 4500,
          date: "2023/07/21 18:30:11",
        },
        {
          title: "帥氣二手球衣等待中",
          price: 4500,
          date: "2023/07/21 18:30:11",
        },
        {
          title: "捕手手套大特價販賣",
          price: 4500,
          date: "2023/07/21 18:30:11",
        },
        {
          title: "棒球SSR球鞋獨家專賣！",
          price: 4500,
          date: "2023/07/21 18:30:11",
        },
        {
          title: "可愛粉色球帽大拍賣",
          price: 4500,
          date: "2023/07/21 18:30:11",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
// 通知數字

.wrapper {
  margin-top: 6rem;
}
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
  }
}

// 返回按鈕
.products_manage_back_btn_link {
  margin-bottom: 3rem;
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
}

.products_manage_btn_area {
  display: flex;
  justify-content: space-between;

  .set_time_btn {
    font-size: 1.25rem;
    margin-right: 2rem;
    width: 183px;
    height: 44px;
    align-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    border: var(--secondary-blue-2) solid;
    display: flex;
    border-radius: 10px;
    justify-content: space-between;

    &_text {
      color: var(--secondary-gray-3);
    }
  }

  .del_btn {
    font-size: 1.25rem;
    width: 183px;
    height: 44px;
    align-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    background-color: var(--primary-blue);
  }
}

.products_manage {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 8rem;
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
}

// 表頭

.manage_item_list {
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.25rem;
}

.manage_item {
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-evenly;
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
