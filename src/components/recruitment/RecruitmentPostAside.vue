<template>
  <div class="recruitment_aside">
    <div class="recruitment_aside_userpic">
      <img src="" alt="" class="recruitment_aside_pic_userphoto" />
    </div>
    <div class="recruitment_aside_list">
      <li><router-link to="/"></router-link>新增職缺</li>
      <li><router-link to="/"></router-link>管理職缺</li>
      <li><router-link to="/"></router-link>審查應徵</li>
      <li><router-link to="/"></router-link>記錄管理</li>
    </div>
    <div class="recruitment_aside_hitterpic">
      <img class="recruitment_aside_hitterpic_img" />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.recruitment_aside {
  width: 25vh;
  height: 100%;
  padding: 4rem 0;
  background-color: var(--secondary-blue-4);
  &_list {
    li {
      list-style: none;
      text-align: center;
      font-size: ;
    }
  }
}
</style>
