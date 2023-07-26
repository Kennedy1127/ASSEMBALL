<template>
  <div class="Backstage_header">
    <!-- 後台頁首 -->
    <div class="Backstage_header_logo">
      <img src="~@/assets/images/Backstage/Backstagelogo.png" />
    </div>
    <div class="Backstage_header_title">檢舉內容</div>
  </div>
</template>

<style scoped lang="scss">
.Backstage_header {
  //頁首
  position: relative;
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
    position: absolute;
    top: 5rem;
    left: 40rem;
    color: var(--primary-black);
    font-size: 2rem;
    width: 287px;
    height: 67px;
    background-color: var(--accent-yellow);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
}
</style>
