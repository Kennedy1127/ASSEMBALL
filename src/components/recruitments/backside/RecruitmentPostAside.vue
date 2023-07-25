<template>
  <div class="recruitment_aside">
    <div class="recruitment_aside_userpic">
      <img
        src="~@/assets/images/recruitment/team-icons/team-icon-1-lg.png"
        alt="userphoto"
        class="recruitment_aside_userpic_userphoto"
      />
    </div>
    <div class="recruitment_aside_list">
      <li>
        <router-link :to="{ name: 'recruitmentPost' }">新增職缺</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'recruitmentManage' }">管理職缺</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'recruitmentVerify' }">審查應徵</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'recruitmentHistory' }">記錄管理</router-link>
      </li>
    </div>
    <div class="recruitment_aside_hitterpic">
      <img class="recruitment_aside_hitterpic_img" />

      <img
        src="~@/assets/images/recruitment/hitter.png"
        alt="hitter"
        class="recruitment_aside_hitterpic_img"
      />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.recruitment_aside {
  width: 18vw;
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
      // color: var(--secondary-gray-3);
      cursor: pointer;
      a {
        color: var(--secondary-gray-3);
      }
    }

    a:visited,
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
