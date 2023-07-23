<template>
  <div class="footer">
    <div class="footer_animation">
      <div class="footer_animation_baseball">
        <img src="~@/assets/images/index/baseball.png" alt="baseball" />
      </div>
      <div class="footer_animation_catcher">
        <img src="~@/assets/images/index/catcher.png" alt="catcher" />
      </div>
      <div class="footer_animation_pitcher">
        <img src="~@/assets/images/index/pitcher.png" alt="pitcher" />
      </div>
    </div>
    <div class="wrapper">
      <div class="footer_logo">
        <router-link to="/">
          <img
            src="~@/assets/images/icons/home_footer_logo_light.svg"
            alt="footer_logo_light"
          />
        </router-link>
      </div>
      <div class="footer_list">
        <ul>
          <li>
            <router-link to="/"
              ><span><font-awesome-icon icon="fa-solid fa-flag" /></span>
              球隊徵人</router-link
            >
          </li>
          <li>
            <router-link to="/products"
              ><span
                ><font-awesome-icon icon="fa-solid fa-bag-shopping"
              /></span>
              拍賣專區</router-link
            >
          </li>
          <li>
            <router-link to="/"
              ><span><font-awesome-icon icon="fa-solid fa-user-group" /></span>
              我的球隊</router-link
            >
          </li>
          <li>
            <router-link to="/"
              ><span><font-awesome-icon icon="fa-solid fa-map" /></span>
              新手上路</router-link
            >
          </li>
        </ul>
        <div class="footer_list_followicon">
          <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
          <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
          <span><font-awesome-icon icon="fa-solid fa-calendar-days" /></span>
        </div>
      </div>
      <div class="footer_detail">
        <div>
          {{ footerDetail }}<br />
          {{ footerDetails }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerDetail:
        "本網站為緯育TibaMe_前端設計工程師班第83期學員專題成果作品,本平台僅供學習、展示之用。",
      footerDetails:
        "若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,緯育公司概不負責，若有侵權疑慮，您可以私訊緯育Tibame，後續會由專人協助處理。",
      navList: {
        recruitment: "球隊徵人",
        shopping: "拍賣專區",
        team: "我的球隊",
        novice: "新手上路",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-image: url(~@/assets/images/background/background_footprint.png);
  background-size: 100%;
  background-repeat: no-repeat;
  &_animation {
    display: flex;
    justify-content: space-between;
    position: relative;
    &_baseball {
      width: 3%;
      position: absolute;
      right: 8%;
      top: -1%;
      animation: baseball 2s cubic-bezier(0, 0.1, 1, 0.99);
      animation-iteration-count: infinite;
      animation-direction: alternate;
      & img {
        width: 100%;
      }
    }
    @keyframes baseball {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(-600%, -100px);
      }
      50% {
        transform: translate(-1200%, -130px);
      }
      75% {
        transform: translate(-1800%, -100px);
      }
      100% {
        transform: translate(-2500%, 50px);
      }
    }

    &_catcher {
      width: 13%;
      margin-left: 5%;
      animation: catcher 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-delay: 0.5s;

      & img {
        width: 100%;
      }
      @keyframes catcher {
        0% {
          transform: rotate(-10deg);
        }
        100% {
          transform: rotate(-50deg);
        }
      }
    }
    &_pitcher {
      width: 15%;
      margin-right: 8%;
      animation: pitcher 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      & img {
        width: 100%;
      }
    }
    @keyframes pitcher {
      0% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(-10deg);
      }
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 2000px;
  }
  &_logo {
    padding: 2.25rem 0 2.25rem 0;
    display: flex;
    align-items: center;
    & img {
      cursor: pointer;
      height: 80%;
    }
  }
  &_list {
    display: flex;
    & ul {
      display: flex;
      gap: 1rem;
      & li {
        display: flex;
        align-items: center;
        padding: 1rem;
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
    &_followicon {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 2rem;
      & > span {
        font-size: 1.25rem;
        padding: 0.25rem 0.75rem;
        border-radius: 50%;
        color: var(--pale-white);
        transition: all 0.09s ease-in;
        cursor: pointer;
      }
      & > span:hover {
        color: var(--primary-blue);
        background-color: var(--accent-yellow);
      }
    }
  }
  &_detail {
    width: 100%;
    background-color: var(--primary-black);
    color: var(--secondary-gray-2);
    font-size: 0.875rem;
    font-weight: 400;
    padding: 3rem 2rem;
    text-align: center;
  }
}
</style>
