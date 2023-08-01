<template>
  <section class="MemberCenter_Order">
    <div class="wrapper">
      <!-- <div class="MemberCenter_Order_backlink">
        <router-link to="/">
          <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
        </router-link>
      </div> -->
      <div class="MemberCenter_Order_title">
        <div class="block"><span>購買紀錄</span></div>
      </div>
      <div class="MemberCenter_Order_list">
        <div class="MemberCenter_Order_list_title">
          <div class="MemberCenter_Order_list_title_project">商品</div>
          <div class="MemberCenter_Order_list_title_name">名稱</div>
          <div class="MemberCenter_Order_list_title_seller">賣家</div>
          <div class="MemberCenter_Order_list_title_price">價格</div>
          <div class="MemberCenter_Order_list_title_date">日期</div>
        </div>
        <div
          class="MemberCenter_Order_list_item"
          v-for="item in computedRenderMemberCenterOrderManage"
          :key="item.Orderlist"
        >
          <img :src="item.member_icon" :alt="memberCenterOrder_list_item_pic" />
          <div class="MemberCenter_Order_list_item_name">
            {{ item.member_firstName }}
          </div>
          <div class="MemberCenter_Order_list_item_seller">
            {{ item.member_lastName }}
          </div>
          <div class="MemberCenter_Order_list_item_price">
            {{ item.member_area }}
          </div>
          <div class="MemberCenter_Order_list_item_date">
            <span>購買日期：</span>{{ item.member_exp }}
          </div>
        </div>
      </div>
      <!-- //頁碼未處理 -->
      <PaginationComponent
        :totalPages="computedTotalPages"
        type="BacksideRecruit"
      />
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

//把抓到的內容放進表格內
const store = useStore();
onMounted(() => {
  store.dispatch("getMemberCenterOrderManage"); //用index.js的 action 要用dispatch
});
// 一頁放幾個項目
const computedRenderMemberCenterOrderManage = computed(() => {
  const start = store.state.isMobile
    ? (store.state.curPage - 1) * 4
    : (store.state.curPage - 1) * 5;
  const end = store.state.isMobile
    ? store.state.curPage * 4
    : store.state.curPage * 5;
  return store.state.MemberCenterOrderManage.slice(start, end);
});
const computedTotalPages = computed(() => {
  // 計算總頁數
  if (store.state.MemberCenterOrderManage.length === 0) return 1;
  const len = store.state.MemberCenterOrderManage.length; //state :return的東西
  return store.state.isMobile
    ? len % 4 === 0 // 手機
      ? len > 4
        ? len / 4
        : 1
      : Math.ceil(len / 4)
    : len % 5 === 0 // 桌機板
    ? len > 5
      ? len / 5
      : 1
    : Math.ceil(len / 5);
});
</script>

<script>
import PaginationComponent from "@/components/utilities/PaginationComponent";

export default {
  components: {
    PaginationComponent,
  },
  props: ["totalPages"],
  data() {
    return {
      lastPage: this.$props.totalPages,
      memberCenterOrder: [
        {
          imgSrc: require("@/assets/images/MemberCenter/MemberCenterOrder_pic01.png"),
          name: "酷炫手套",
          seller: "麥當當",
          price: "$4,500",
          date: "2023 / 05 / 17",
        },
        {
          imgSrc: require("@/assets/images/MemberCenter/MemberCenterOrder_pic02.png"),
          name: "酷炫鞋子",
          seller: "麥當當",
          price: "$4,500",
          date: "2023 / 05 / 17",
        },
        {
          imgSrc: require("@/assets/images/MemberCenter/MemberCenterOrder_pic03.png"),
          name: "酷炫球棒",
          seller: "麥當當",
          price: "$4,500",
          date: "2023 / 05 / 17",
        },
        {
          imgSrc: require("@/assets/images/MemberCenter/MemberCenterOrder_pic04.png"),
          name: "可愛手套",
          seller: "麥當當",
          price: "$4,500",
          date: "2023 / 05 / 17",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.MemberCenter_Order {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 8rem;
  &_backlink {
    width: 100%;
    padding: 0 8rem;
    margin: auto;
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
  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 8rem;
    margin-top: 2rem;
    @media all and (max-width: 420px) {
      padding: 2rem 2rem;
    }
  }
  &_title {
    font-size: 1.5rem;
    display: flex;
    gap: 2rem;
    align-content: end;
    align-items: end;
    color: var(--primary-blue);
    font-weight: 600;
    margin-bottom: 2rem;
    @media all and (max-width: 420px) {
      padding-bottom: 2rem;
      border-bottom: 2px solid var(--secondary-gray-2);
    }
    & div {
      border-left: 1rem solid var(--primary-blue);
      & span {
        padding-left: 1.5rem;
      }
    }
  }
  &_list {
    &_title {
      display: flex;
      padding: 0.5rem;
      background-color: var(--secondary-blue-3);
      min-height: 4rem;
      font-size: 1.25rem;
      justify-content: space-evenly;
      margin-bottom: 2rem;
      align-items: center;
      color: var(--secondary-gray-3);
      padding-right: 5rem;
      @media all and (max-width: 420px) {
        flex-direction: row;
        padding-right: 0;
        display: none;
      }
    }

    &_item {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.5rem;
      font-size: 1.25rem;
      border-bottom: 2px solid var(--secondary-gray-2);
      padding-bottom: 2rem;
      @media all and (max-width: 420px) {
        align-items: flex-start;
        flex-direction: column;
      }
      & img {
        width: 89px;
        height: 101px;
      }
      &_price {
        font-weight: 600;
        color: var(--accent-red);
      }
      &_date {
        @media all and (max-width: 420px) {
          padding-top: 1rem;
        }
        & span {
          display: none;
          @media all and (max-width: 420px) {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
