<template>
  <div class="recruitment_aside">
    <div class="recruitment_aside_userpic">
      <<<<<<< HEAD
      <img src="" alt="" class="recruitment_aside_pic_userphoto" />
      =======
      <img
        src="~@/assets/images/recruitment/team-icons/team-icon-1-lg.png"
        alt="userphoto"
        class="recruitment_aside_userpic_userphoto"
      />
      >>>>>>> Sherry
    </div>
    <div class="recruitment_aside_list">
      <li><router-link to="/"></router-link>新增職缺</li>
      <li><router-link to="/"></router-link>管理職缺</li>
      <li><router-link to="/"></router-link>審查應徵</li>
      <li><router-link to="/"></router-link>記錄管理</li>
    </div>
    <div class="recruitment_aside_hitterpic">
      <<<<<<< HEAD
      <img class="recruitment_aside_hitterpic_img" />
      =======
      <img
        src="~@/assets/images/recruitment/hitter.png"
        alt="hitter"
        class="recruitment_aside_hitterpic_img"
      />
      >>>>>>> Sherry
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.recruitment_aside {
  width: 25vw;
  height: 100%;
  padding: 4rem 0;
  background-color: var(--secondary-blue-4);

  &_userpic {
    margin: auto;
    width: 10rem;
    height: 10rem;
    border-radius: 10rem;
    background-color: #fff;
    overflow: hidden;
    &_userphoto {
      width: 10rem;
      height: 10rem;
    }
  }
  &_list {
    margin: 3rem 0;
    li {
      list-style: none;
      text-align: center;
      font-size: 1.25rem;
      padding: 1.5rem 0;
      color: var(--secondary-gray-3);
      cursor: pointer;
    }
    li:hover {
      background-color: var(--secondary-blue-3);
      color: var(--primary-blue);
    }
  }
  &_hitterpic {
    width: 100%;
    overflow: hidden;
    &_img {
      width: 100%;
    }
  }
}
</style>
