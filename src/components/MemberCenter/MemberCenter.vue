<template>
  <div class="MemberCenter">
    <div class="MemberCenter_member">
      <img
        class="MemberCenter_member_pic"
        :src="
          MemberCenterMember.imgSrc ||
          require('@/assets/images/icons/main-icon.png')
        "
        alt="MemberCenter_member_pic"
      />
      <div class="MemberCenter_member_name">{{ dynamicTitle }}</div>
    </div>
    <div class="MemberCenter_list">
      <ul>
        <li>
          <div @click="enterPersonal">
            <span
              ><font-awesome-icon
                icon="fa-solid fa-user"
                style="color: #f87171" /></span
            >會員資料
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'MemberCenterOrder' }">
            <span
              ><font-awesome-icon
                icon="fa-solid fa-file-lines"
                style="color: #fbbf24" /></span
            >訂單管理</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'MemberCenterApplication' }">
            <span
              ><font-awesome-icon
                icon="fa-solid fa-address-card"
                style="color: #4ad180" /></span
            >應徵模板</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'MemberCenterCreateteam' }"
            @click="stopEnterTeam"
          >
            <span
              ><font-awesome-icon
                icon="fa-solid fa-flag"
                style="color: #1e60cd" /></span
            >創立球隊</router-link
          >
        </li>
      </ul>
    </div>
    <div class="MemberCenter_signout" @click="clearUserData">
      <button>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 登出
      </button>
    </div>
    <div class="MemberCenter_btn">
      <router-link :to="{ name: 'Register' }">
        <button>註冊</button>
      </router-link>
      <router-link :to="{ name: 'Login' }">
        <button>登入</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  //抓會員資料
  async mounted() {
    // const res = await this.$store.dispatch("getMemberCenter");
    // console.log(res);
    console.log(this.$store.state.user);
  },

  data() {
    return {
      MemberCenterMember: {
        imgSrc: this.$store.state.user.picUrls[0],
        // title: this.$store.state.user.firstname,
      },
    };
  },
  methods: {
    enterPersonal() {
      this.$emit("enter_personal");
    },
    clearUserData() {
      this.$emit("clear_userdata");
    },
    stopEnterTeam() {
      this.$emit("stopEnter_Team");
    },
  },
  computed: {
    //姓氏 + 名字
    dynamicTitle() {
      if (this.$store.state.user) {
        const firstname = this.$store.state.user.firstname
          ? this.$store.state.user.firstname
          : "";
        const lastname = this.$store.state.user.lastname
          ? this.$store.state.user.lastname
          : "";
        return `${lastname}${firstname}`;
      } else {
        return ""; // 如果 this.$store.state.user 為 null，直接返回空字串
      }
    },
  },
};
</script>

<style scoped lang="scss">
.MemberCenter {
  position: fixed;
  z-index: 100;
  top: 6.5rem;
  left: 73.9%;
  border-radius: var(--round);
  box-shadow: var(--shadow-heavy);
  width: 100%;
  max-width: 25%;
  background-color: var(--pale-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  @media all and (max-width: 420px) {
    max-width: 100%;
    height: 90vh;
    left: 0;
    z-index: 48;
    top: 4.2rem;
    overflow: auto;
    // padding-bottom: 5rem;
    padding-top: 3rem;
  }
  &_member {
    position: relative;
    margin: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (max-width: 420px) {
      margin: 0;
    }
    & img {
      width: 60%;
    }
    &_name {
      padding-top: 1rem;
      text-align: center;
      color: var(--primary-blue);
      font-size: 1rem;
      font-weight: 700;
    }
  }
  &_list {
    width: 100%;
    & ul {
      width: 100%;
      & li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        & > div {
          width: 100%;
          padding: 1.25rem;
          color: var(--primary-blue);
          text-align: center;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.09s ease-in-out;
          border-radius: var(--round);
          margin: 0.5rem;
          cursor: pointer;
          & span {
            padding-right: 1rem;
          }
        }
        & a {
          width: 100%;
          padding: 1.25rem;
          color: var(--primary-blue);
          text-align: center;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.09s ease-in-out;
          border-radius: var(--round);
          margin: 0.5rem;
          & span {
            padding-right: 1rem;
          }
        }
        & a:hover {
          background-color: var(--secondary-blue-3);
        }
        & div:hover {
          background-color: var(--secondary-blue-3);
        }
      }
    }
  }
  &_btn {
    display: flex;
    gap: 2rem;
    display: none;
    a:nth-child(1) {
      button {
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: 1.5px;
        background-color: var(--pale-white);
        border: 2px solid var(--primary-blue);
        color: var(--primary-blue);
        font-family: "Noto Sans TC";
        box-shadow: var(--shadow-heavy);
        transition: all 0.09s ease-in-out;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
      }
      button:hover {
        background-color: var(--secondary-blue-3);
      }
    }
    a:nth-child(2) {
      button {
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        color: var(--pale-white);
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 1.5px;
        background-color: var(--primary-blue);
        color: var(--pale-white);
        font-family: "Noto Sans TC";
        box-shadow: var(--shadow-heavy);
        transition: all 0.09s ease-in-out;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
        border: 2px solid var(--primary-blue);
      }
      button:hover {
        background-color: var(--secondary-blue-1);
        border: 2px solid var(--secondary-blue-1);
      }
    }
  }
  &_signout {
    & button {
      padding: 0.5rem 1.5rem;
      border-radius: 2rem;
      color: var(--secondary-gray-1);
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 1.5px;
      background-color: var(--secondary-blue-2);
      color: var(--pale-white);
      font-family: "Noto Sans TC";
      box-shadow: var(--shadow-heavy);
      transition: all 0.09s ease-in-out;
      margin-bottom: 1.5rem;
      margin-top: 1rem;
    }
    & button:hover {
      background-color: var(--primary-blue);
    }
  }
}
</style>
