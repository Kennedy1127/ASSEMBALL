<template>
  <header>
    <nav class="header">
      <div class="wrapper">
        <div class="header_logo">
          <router-link :to="{ name: 'Home' }">
            <img
              src="~@/assets/images/icons/header_logo_light.svg"
              alt="nav_logo_light"
            />
          </router-link>
        </div>
        <div class="header_list">
          <ul>
            <li>
              <router-link :to="{ name: 'Recruitments' }"
                ><span><font-awesome-icon icon="fa-solid fa-flag" /></span>
                球員招募</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Products' }"
                ><span
                  ><font-awesome-icon icon="fa-solid fa-bag-shopping"
                /></span>
                拍賣專區</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'myplayerTeam', params: { id: 1 } }"
                ><span
                  ><font-awesome-icon icon="fa-solid fa-user-group"
                /></span>
                我的球隊</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'rookie' }"
                ><span><font-awesome-icon icon="fa-solid fa-map" /></span>
                新手上路</router-link
              >
            </li>
          </ul>
          <div class="header_list_aside">
            <div @click="toggleNotify">
              <span><font-awesome-icon icon="fa-solid fa-bell" /></span>
              <div class="header_list_aside_notify">{{ notify }}</div>
              <router-link to="/"></router-link>
            </div>
            <div @click="toggleMember">
              <span><font-awesome-icon icon="fa-solid fa-user" /></span>
              <router-link to="/"></router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      notify: "1",
    };
  },
  methods: {
    toggleNotify() {
      this.$emit("toggle_notify");
    },
    toggleMember() {
      this.$emit("toggle_member");
    },
  },
};
</script>

<style scoped lang="scss">
// header {
//   height: 12rem;
// }
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  background-color: var(--primary-blue);
  display: flex;
  justify-content: center;
  z-index: 100;
  .wrapper {
    width: 95%;
    height: 100%;
    max-width: 1550px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media all and (max-width: 420px) {
      justify-content: center;
    }
  }
  &_logo {
    display: flex;
    align-items: center;
    @media all and (max-width: 420px) {
      justify-content: center;
    }
    & a {
      width: 75%;
      & img {
        display: block;
        width: 100%;
      }
    }
  }
  &_list {
    display: flex;
    @media all and (max-width: 420px) {
      display: none;
    }
    & ul {
      display: flex;
      gap: 2rem;
      & li {
        display: flex;
        align-items: center;
        & > a {
          font-size: 1rem;
          padding: 1.25rem;
          border-radius: 0.5rem;
          color: var(--pale-white);
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          & font-awesome-icon {
            font-size: 2rem;
            transition: all 0.15s ease-in-out;
          }
          & > span {
            padding-right: 1rem;
          }
        }
        & > a::after {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          background-color: var(--accent-yellow);
          border-radius: 50%;
          transform: scale(0);
          transition: all 0.15s ease-in-out;
        }
        & > a:hover::after {
          transform: scale(1);
        }
      }
    }
    &_aside {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      padding-left: 2rem;
      & > div {
        padding: 1rem 1.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.15s ease-in;
        position: relative;
        & > span {
          font-size: 1.5rem;
          color: var(--pale-white);
        }
      }
      &_notify {
        position: absolute;
        top: 13%;
        right: 12%;
        width: 25px;
        height: 25px;
        text-align: center;
        font-weight: 600;
        color: var(--pale-white);
        line-height: 23px;
        border-radius: 50%;
        border: 2px solid var(--pale-white);
        background-color: var(--accent-red);
        font-family: "Montserrat";
      }
      & > div::after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: var(--accent-yellow);
        border-radius: 50%;
        transform: scale(0);
        transition: all 0.15s ease-in-out;
        z-index: -1;
      }
      & > div:hover::after {
        transform: scale(1);
      }
    }
  }
}
</style>
