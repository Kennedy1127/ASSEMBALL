<template>
  <div class="MemberCenter">
    <div class="MemberCenter_member">
      <img
        class="MemberCenter_member_pic"
        :src="MemberCenterMember.imgSrc"
        :alt="MemberCenter_member_pic"
      />
      <div class="MemberCenter_member_name">{{ MemberCenterMember.title }}</div>
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
          <router-link :to="{ name: 'MemberCenterCreateteam' }">
            <span
              ><font-awesome-icon
                icon="fa-solid fa-flag"
                style="color: #1e60cd" /></span
            >創立球隊</router-link
          >
        </li>
      </ul>
    </div>
    <div class="MemberCenter_signout">
      <button>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> 登出
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MemberCenterMember: {
        imgSrc: require("@/assets/images/MemberCenter/MemberCenter_pic01.png"),
        title: "棒球專家小楊",
      },
    };
  },
  methods: {
    enterPersonal() {
      this.$emit("enter_personal");
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
  &_member {
    position: relative;
    margin: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
