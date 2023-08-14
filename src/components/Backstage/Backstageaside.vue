<template>
  <div class="aside">
    <!-- 後台側邊欄 -->

    <button
      class="side_list"
      @click="
        doChange('BackstageHomepageNews'),
          doChangeHeader('BackstageHeaderHomePage')
      "
    >
      首頁管理
    </button>
    <button
      class="side_list"
      @click="
        doChange('BackstageMember'), doChangeHeader('BackstageHeaderMember')
      "
    >
      會員名單
    </button>

    <button
      class="side_list"
      @click="
        doChange('BackstageReport'), doChangeHeader('BackstageHeaderReportPage')
      "
    >
      檢舉內容
    </button>
    <button
      class="side_list"
      @click="
        doChange('BackstageCreate'), doChangeHeader('BackstageHeaderCreate')
      "
    >
      創立球隊請求
    </button>

    <button
      class="side_list"
      @click="
        doChange('BackstageManager'), doChangeHeader('BackstageHeaderManager')
      "
    >
      管理員名單
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

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
.aside {
  //側邊選單
  background-color: var(--primary-blue);
  width: 15%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 1rem;

  .side_list {
    width: 150px;
    height: 60px;
    font-size: 1.25rem;
    background-color: var(--secondary-blue-2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
   
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}
</style>
