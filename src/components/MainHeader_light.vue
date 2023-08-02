<template>
  <header>
    <nav class="header">
      <div class="wrapper">
        <div class="header_logo">
          <router-link :to="{ name: 'Home' }">
            <img
              src="~@/assets/images/icons/header_logo_dark.svg"
              alt="nav_logo"
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
        <!-- //手機板導覽列 -->
        <div class="mobile">
          <div class="mobile_list">
            <div class="mobile_list_hamburger">
              <div class="mobile_list_hamburger_inner">
                <label class="hamburger" for="hamburger">
                  <input type="checkbox" id="hamburger" />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </div>
            <router-link :to="{ name: 'Home' }">
              <span><font-awesome-icon icon="fa-solid fa-house" /></span>
            </router-link>
            <div class="mobile_list_notify" @click="toggleNotify">
              <span><font-awesome-icon icon="fa-solid fa-bell" /></span>
              <div class="mobile_list_notify_num">{{ notify }}</div>
            </div>
            <div class="mobile_list_member" @click="toggleMember">
              <span><font-awesome-icon icon="fa-solid fa-user" /></span>
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
      navList: {
        recruitment: "球隊徵人",
        shopping: "拍賣專區",
        team: "我的球隊",
        novice: "新手上路",
      },
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
// 桌機版選單
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  background-color: var(--pale-white);
  display: flex;
  justify-content: center;
  z-index: 100;
  box-shadow: var(--shadow-heavy);
  @media all and (max-width: 420px) {
    height: 4.5rem;
    z-index: 49;
    box-shadow: none;
  }
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
      width: 70%;
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
          font-weight: 500;
          padding: 1.25rem;
          border-radius: 0.5rem;
          color: var(--primary-black);
          cursor: pointer;
          transition: all 0.09s ease-in-out;
          & font-awesome-icon {
            font-size: 2rem;
            transition: all 0.09s ease-in-out;
          }
          & > span {
            padding-right: 1rem;
            color: var(--primary-blue);
          }
        }
        & > a:hover {
          background-color: var(--secondary-blue-3);
          color: var(--primary-blue);
        }
        & > a:hover font-awesome-icon {
          color: var(--primary-blue);
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
        transition: all 0.09s ease-in;
        position: relative;
        & > span {
          font-size: 1.5rem;
          color: var(--primary-blue);
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
      & > div:hover {
        background-color: var(--secondary-blue-3);
      }
      & > div:hover span {
        color: var(--primary-blue);
      }
    }
  }
}

//手機板選單

.mobile {
  display: none;
  @media all and (max-width: 420px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    // height: 3rem;
    background-color: var(--pale-white);
    box-shadow: var(--shadow-heavy);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  &_list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 0.5rem 0;
    //漢堡
    &_hamburger {
      border-radius: var(--round);
      &_inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        & label {
          position: relative;
          width: 25px;
          height: 20px;
          background: transparent;
          cursor: pointer;
          display: block;
          & input {
            display: none;
          }
          & span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: var(--primary-blue);
            border-radius: 8px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: all 0.4s ease-in-out;
          }
          & span:nth-of-type(1) {
            top: 0%;
            transform-origin: left center;
          }
          & span:nth-of-type(2) {
            top: 50%;
            width: 60%;
            transform: translateY(-50%);
            transform-origin: left center;
          }
          & span:nth-of-type(3) {
            top: 100%;
            transform-origin: left center;
            transform: translateY(-100%);
          }
          & input:checked ~ span:nth-of-type(1) {
            transform: rotate(45deg);
            top: 0px;
            left: 3px;
          }
          & input:checked ~ span:nth-of-type(2) {
            width: 0%;
            opacity: 0;
            top: 28px;
          }
          & input:checked ~ span:nth-of-type(3) {
            transform: rotate(-45deg);
            top: 18px;
            left: 3px;
          }
        }
      }
    }
    & a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
        padding-bottom: 0.35rem;
      }
    }
    & a:active {
      background-color: var(--secondary-blue-3);
    }
    &_notify {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: relative;
      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
        padding-bottom: 0.35rem;
      }
      &_num {
        position: absolute;
        top: -10%;
        right: -5%;
        width: 22px;
        height: 22px;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--pale-white);
        line-height: 18px;
        border-radius: 50%;
        border: 2px solid var(--pale-white);
        background-color: var(--accent-red);
        font-family: "Montserrat";
      }
    }
    &_notify:active {
      background-color: var(--secondary-blue-3);
    }
    &_member {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
        padding-bottom: 0.35rem;
      }
    }
    &_member:active {
      background-color: var(--secondary-blue-3);
    }
  }
}
</style>
