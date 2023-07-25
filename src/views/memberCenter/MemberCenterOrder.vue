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
          v-for="item in memberCenterOrder"
          :key="item.Orderlist"
        >
          <img :src="item.imgSrc" :alt="memberCenterOrder_list_item_pic" />
          <div class="MemberCenter_Order_list_item_name">{{ item.name }}</div>
          <div class="MemberCenter_Order_list_item_seller">
            {{ item.seller }}
          </div>
          <div class="MemberCenter_Order_list_item_price">{{ item.price }}</div>
          <div class="MemberCenter_Order_list_item_date">{{ item.date }}</div>
        </div>
      </div>
      <!-- //頁碼未處理 -->
      <PaginationComponent />
    </div>
  </section>
</template>

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
    }
    &_item {
      display: flex;
      flex-direction: row;
      margin-bottom: 2rem;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.5rem;
      font-size: 1.25rem;
      border-bottom: 2px solid var(--secondary-gray-2);
      padding-bottom: 2rem;
      & img {
        width: 89px;
        height: 101px;
      }
      &_price {
        font-weight: 600;
        color: var(--accent-red);
      }
    }
  }
}
</style>
