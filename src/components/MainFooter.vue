<template>
  <footer>
    <div class="footer">
      <div class="wrapper">
        <div class="footer_logo">
          <router-link to="/">
            <img
              src="~@/assets/images/icons/footer_logo_light.svg"
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
                ><span
                  ><font-awesome-icon icon="fa-solid fa-user-group"
                /></span>
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
  </footer>
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
  background-color: var(--primary-blue);
  width: 100%;
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
    padding-bottom: 2rem;
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
