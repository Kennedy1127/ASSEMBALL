<template>
  <section class="product_main_detail">
    <div class="product_main_detail_pic">
      <img
        src="~@/assets/images/products/productdetail_pic1.png"
        alt="productdetail_pic1"
      />
      <div class="product_main_detail_pic_all">
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
        <div class="product_main_detail_pic_all_small">
          <img
            src="~@/assets/images/products/productdetail_smallpic1.png"
            alt="productdetail_pic1"
          />
        </div>
      </div>
    </div>
    <div class="product_main_detail_content">
      <div class="product_main_detail_content_title">
        <span>{{ productDetail.Title }}</span>
      </div>
      <div
        class="product_main_detail_content_body"
        v-for="item in productDetailBody"
        :key="item"
      >
        {{ item.title }}{{ item.text }}
      </div>
      <div class="detail_footer">
        <div class="detail_price">{{ productDetail.Price }}</div>
        <button>我要購買</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productDetail: {
        Title: "棒球界LV精品球棒",
        Price: "NT$4,500",
      },
      productDetailBody: [
        { title: "刊登日期 : ", text: "2023/07/06" },
        { title: "類別 : ", text: "球棒" },
        { title: "刊登者 : ", text: "棒球專家小羊" },
        { title: "縣市 : ", text: "新北市" },
        { title: "Email : ", text: "hawhaw052@gmail.com" },
        { title: "Phone : ", text: "0953299481" },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
