<template>
  <div class="recruitment_aside">
    <div class="recruitment_aside_userpic">
      <img
        :src="picSrc"
        alt="userphoto"
        class="recruitment_aside_userpic_userphoto"
      />
    </div>
    <div class="recruitment_aside_list">
      <router-link
        :to="{ name: 'recruitmentPost' }"
        :class="{ active: isActiveLink('recruitmentPost') }"
        ><li :class="{ active: isActiveLink('recruitmentPost') }">
          新增職缺
        </li></router-link
      >

      <router-link
        :to="{ name: 'recruitmentManage' }"
        :class="{ active: isActiveLink('recruitmentManage') }"
        ><li :class="{ active: isActiveLink('recruitmentManage') }">
          管理職缺
        </li></router-link
      >

      <router-link
        :to="{ name: 'recruitmentVerify' }"
        :class="{ active: isActiveLink('recruitmentVerify') }"
        ><li :class="{ active: isActiveLink('recruitmentVerify') }">
          審查應徵
        </li></router-link
      >

      <router-link
        :to="{ name: 'recruitmentHistory' }"
        :class="{ active: isActiveLink('recruitmentHistory') }"
      >
        <li :class="{ active: isActiveLink('recruitmentHistory') }">
          記錄管理
        </li></router-link
      >
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

<script>
import getData from "@/composables/data/getData";
import useStorage from "@/composables/data/useStorage";

export default {
  data() {
    return {
      picSrc: "",
    };
  },
  async mounted() {
    const { getPicsLink } = useStorage();
    const { getUser } = getData();
    let user = null;

    if (!this.$store.state.user?.team_id) {
      user = await getUser();
    }

    const res = await getPicsLink(
      1,
      // "images/TEAMS/WDijArOSzukkfqrtkgX2",

      `images/TEAMS/${this.$store.state.user?.team_id || user.team_id}`,
      "team-pic"
    );

    this.picSrc = res[0];
  },

  methods: {
    isActiveLink(routeName) {
      return this.$route.name === routeName;
    },
  },
};
</script>

<style lang="scss">
.recruitment_aside_list li.active {
  background-color: var(--secondary-blue-3);
}
.recruitment_aside_list a.active {
  color: var(--primary-blue);
}

.recruitment_aside {
  width: 18vw;
  height: 100%;
  padding: 4rem 0;
  background-color: var(--secondary-blue-4);

  &_userpic {
    margin: auto;
    // max-width: 80%;
    width: 8rem;
    height: 8rem;
    border-radius: 50rem;
    background-color: #fff;
    overflow: hidden;

    &_userphoto {
      width: 100%;
      height: 100%;
      display: block;
      margin: auto;
    }
  }
  &_list {
    margin: 3rem 0;
    a {
      color: var(--secondary-gray-3);
      font-weight: 500;
      letter-spacing: 1.5px;
      li {
        width: 18vw;
        list-style: none;
        text-align: center;
        font-size: 1.25rem;
        padding: 2rem 0;
        // color: var(--secondary-gray-3);
        cursor: pointer;
      }
    }

    // a:hover,
    // a:focus {
    //   color: var(--primary-blue);
    // }
    // li:hover {
    //   background-color: var(--secondary-blue-3);
    // }
    // li:hover a {
    //   color: var(--primary-blue);
    // }
  }
  &_hitterpic {
    width: 100%;
    overflow: hidden;
    &_img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .recruitment_aside_list li.active {
    background-color: var(--primary-blue);
  }
  .recruitment_aside_list a.active {
    color: var(--pale-white);
  }

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
      // justify-content: space-between;

      a {
        color: var(--pale-white);
        width: 25%;
        font-size: 1rem;
        padding: 0rem;
        color: #000;
        border-right: #fff 1px solid;
        li {
          width: 100%;
          color: var(--pale-white);
        }
        padding: 0;
      }
      a:nth-last-child(1) {
        border: 0;
      }
    }
    // a:hover,
    // a:focus {
    //   color: var(--pale-white);
    // }
    // li:hover {
    //   background-color: var(--primary-blue);
    // }
    // li:hover a {
    //   color: var(--pale-white);
    // }
  }
}
</style>
