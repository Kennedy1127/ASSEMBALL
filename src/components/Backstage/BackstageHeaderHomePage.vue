<template>
  <div class="Backstage_header">
      <!-- 後台頁首 -->
      <div class="Backstage_header_logo">
        <img src="~@/assets/images/Backstage/Backstagelogo.png" />
      </div>
      <div class="Backstage_header_title">首頁管理</div>
      <button @click="doChange('BackstageHomepageNews')" class="Backstage_header_list">首頁最新消息</button>
      <button @click="doChange('BackstageHomepageProducts')" class="Backstage_header_list">首頁商品</button>
      <button @click="doChange('BackstageRecruitmentArticle')" class="Backstage_header_list">首頁徵人文章</button>
  
    </div>
</template>

<script>
export default {
  methods: {
    doChange(pageName) {
      this.$emit("doChange", pageName); //$emit(方法, 回傳值給父元件)
    },
    doChangeHeader(HeaderName) {
      this.$emit("doChangeHeader", HeaderName); //$emit(方法, 回傳值給父元件)
    },
  },
};

</script>

<style scoped lang="scss">
.Backstage_header {
  //頁首
  padding: 2rem;
  width: 100%;
  background-color: var(--primary-blue);
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  .Backstage_header_logo {
    margin-left: 0;
  }
  .Backstage_header_title {
    display: flex;
    align-items: center;
    color: var(--primary-black);
    font-size: 2rem;
  }
  .Backstage_header_list {
    width: 115px;
    height: 44px;
    border-radius: 8px;
    font-size: 1rem;
    background-color: var(--secondary-blue-2);
  }

}</style>