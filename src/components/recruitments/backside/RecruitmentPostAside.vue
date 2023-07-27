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

    a:hover,
    a:focus {
      color: var(--primary-blue);
    }
    li:hover {
      background-color: var(--secondary-blue-3);
    }
    li:hover a {
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
@media screen and (max-width: 420px) {
  .recruitment_aside {
    width: 100%;
    padding: 0;
    background-color: var(--secondary-blue-1);

    &_hitterpic,
    &_userpic {
      display: none;
    }

    &_list {
      margin: auto;
      display: flex;
      justify-content: space-between;
      li {
        width: 25%;
        font-size: 1rem;
        padding: 1.5rem 0.5rem;
        color: #000;
        border-right: #fff 1px solid;
        a {
          color: var(--pale-white);
        }
      }
      li:nth-last-child(1) {
        border: 0;
      }
    }
    a:hover,
    a:focus {
      color: var(--pale-white);
    }
    li:hover {
      background-color: var(--primary-blue);
    }
    li:hover a {
      color: var(--pale-white);
    }
  }
}
</style>
