<template>
    <div class="aside">
    <!-- 後台側邊欄 -->
    <div class="side_list">首頁管理</div>
    <div class="side_list">會員名單</div>
    <div class="side_list">檢舉內容</div>
    <div class="side_list">創立球隊請求</div>
    <div class="side_list">管理員名單</div>
  </div>
</template>
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
    width: 115px;
    height: 42px;
    background-color: var(--secondary-blue-2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
}
</style>
