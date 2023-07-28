<template>
  <main class="Backstage">
    
    <!-- 首頁header -->
    <BackstageHeaderHomePage v-if="ChangeHeader === 'BackstageHeaderHomePage'" @doChange="doChange" />
   <!-- 首頁header -->

   <!-- 檢舉頁面header -->
   <BackstageHeaderReportPage v-if="ChangeHeader === 'BackstageHeaderReportPage'" />
   <!-- 檢舉頁面header -->

   <!-- 創建球隊header -->
   <BackstageHeaderCreate v-if="ChangeHeader === 'BackstageHeaderCreate'" />
   <!-- 創建球隊header -->

   <!-- 會員名單header -->
   <BackstageHeaderMember v-if="ChangeHeader === 'BackstageHeaderMember'" />
   <!-- 會員名單header -->

   <!-- 管理員名單header -->
   <BackstageHeaderManager v-if="ChangeHeader === 'BackstageHeaderManager'" />
   <!-- 管理員名單header -->

    <div class="container">
      <!-- 左邊欄 -->
      <Backstageaside @doChange="doChange"  @doChangeHeader="doChangeHeader" />
      <!-- 左邊欄 -->

      <!-- 後台管理內容--------------------------------- -->
      <div v-if="ChangePage === 'BackstageHomepageNews'" class="Backstage_page">
        <!-- 後台首頁最新消息管理 -->
        <BackstageHomepageNews />
        <!-- 後台首頁最新消息管理 -->
      </div>

      <div
        v-if="ChangePage === 'BackstageHomepageProducts'"
        class="Backstage_page"
      >
        <!-- 後台首頁商品管理 -->
        <BackstageHomepageProducts />
        <!-- 後台首頁商品管理 -->
      </div>

      <div
        v-if="ChangePage === 'BackstageRecruitmentArticle'"
        class="Backstage_page"
      >
        <!-- 後台首頁徵人文章管理 -->
        <BackstageRecruitmentArticle />
        <!-- 後台首頁徵人文章管理 -->
      </div>

      <div v-if="ChangePage === 'BackstageReport'" class="Backstage_page">
        <!-- 後台檢舉內容 -->
        <BackstageReport />
        <!-- 後台檢舉內容 -->
      </div>

      <div v-if="ChangePage === 'BackstageCreate'" class="Backstage_page">
        <!-- 後台創建球隊請求 -->
        <BackstageCreate />
        <!-- 後台創建球隊請求 -->
      </div>

      <div v-if="ChangePage === 'BackstageMember'" class="Backstage_page">
        <!-- 後台球員名單 -->
        <BackstageMember />
        <!-- 後台球員名單 -->
      </div>

      <div v-if="ChangePage === 'BackstageManager'" class="Backstage_page">
        <!-- 後台管理員名單 -->
        <BackstageManager />
        <!-- 後台管理員名單 -->
      </div>
    </div>
  </main>
</template>
<script>
import BackstageHeaderReportPage from "@/components/Backstage/BackstageHeaderReportPage.vue";
import BackstageHeaderHomePage from "@/components/Backstage/BackstageHeaderHomePage.vue";
import BackstageHeaderCreate from "@/components/Backstage/BackstageHeaderCreate.vue";
import BackstageHeaderMember from "@/components/Backstage/BackstageHeaderMember.vue";
import BackstageHeaderManager from "@/components/Backstage/BackstageHeaderManager.vue";
import Backstageaside from "@/components/Backstage/Backstageaside.vue";
import BackstageHomepageNews from "@/components/Backstage/BackstageHomepageNews.vue";
import BackstageHomepageProducts from "@/components/Backstage/BackstageHomepageProducts.vue";
import BackstageRecruitmentArticle from "@/components/Backstage/BackstageRecruitmentArticle.vue";
import BackstageReport from "@/components/Backstage/BackstageReport.vue";
import BackstageCreate from "@/components/Backstage/BackstageCreate.vue";
import BackstageMember from "@/components/Backstage/BackstageMember.vue";
import BackstageManager from "@/components/Backstage/BackstageManager.vue";

export default {
  data() {
    return {
      ChangePage: "BackstageHomepageNews",
      ChangeHeader:"BackstageHeaderHomePage"
    };
  },
  components: {
    BackstageHeaderHomePage,
    BackstageHeaderMember,
    BackstageHeaderManager,
    BackstageHeaderReportPage,
    BackstageHeaderCreate,
    Backstageaside,
    BackstageHomepageNews,
    BackstageHomepageProducts,
    BackstageRecruitmentArticle,
    BackstageReport,
    BackstageCreate,
    BackstageMember,
    BackstageManager,
  },
  methods: {
    doChange(pageName) {
      //把改頁面事件註冊給子組件
      this.ChangePage = pageName; //ChangePage改成pageName
    
    },
    doChangeHeader(HeaderName) {
      //把改頁面事件註冊給子組件
  
      this.ChangeHeader = HeaderName;
    },
   
  },
};
</script>
<style scoped lang="scss">
.Backstage {
  background-color: var(--secondary-blue-4);
  width: 100%;
  .container {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    position: relative;
    display: flex;
  }
}
//

.Backstage_page {
  width: 85%;
  padding: 4rem 0;
}
</style>
