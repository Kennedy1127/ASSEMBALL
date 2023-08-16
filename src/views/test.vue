<template>
  <section class="test">
    <div class="title">ASSEMBALL</div>
    <div class="wrap"></div>
    <div class="btn">
      <router-link :to="{ name: 'HomeLoading' }">前台</router-link>
      <router-link :to="{ name: 'BackstageLogin' }">後台</router-link>
    </div>
  </section>
  <div class="detail">
    <div>
      {{ footerDetail }}<br />
      {{ footerDetails }}
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
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 5rem;
  font-weight: 700;
  font-family: "Montserrat";
  letter-spacing: 20px;
  padding-bottom: 4rem;
  color: var(--pale-white);
  @media all and (max-width: 420px) {
    font-size: 2.25rem;
    letter-spacing: 5px;
    position: absolute;
    top: 3rem;
  }
}

.test {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--pale-white);
  background-image: url(@/assets/loading/test_back.jpg);
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  @media all and (max-width: 420px) {
    // width: 100vw;
  }
  .wrap {
    padding: 14rem 28rem;
    border-radius: 8px;
    box-shadow: var(--shadow-heavy);
    // background-color: var(--pale-white);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    opacity: 0.5;
    @media all and (max-width: 420px) {
      display: none;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    position: absolute;
    z-index: 10;
    opacity: 1;
    padding-top: 10rem;
    @media all and (max-width: 420px) {
      flex-direction: column;
      gap: 5rem;
      padding-bottom: 1rem;
    }
    a:nth-child(1) {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: var(--pale-white);
      color: var(--primary-blue);
      text-align: center;
      line-height: 300px;
      font-weight: 500;
      font-size: 3rem;
      transition: all 0.3s ease-in;
      opacity: 0.9;
      @media all and (max-width: 420px) {
        flex-direction: column;
        gap: 2rem;
        width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 2rem;
      }
    }
    a:nth-child(1):hover {
      background-color: var(--accent-pink);
      background-image: url(@/assets/loading/test_ball.svg);
      // transform: rotate(45deg);
      background-position: 25% 85%;
      background-size: 20%;
      background-repeat: no-repeat;
    }
    a:nth-child(2) {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      // background-color: var(--primary-blue);
      background-color: var(--pale-white);
      color: var(--primary-blue);
      text-align: center;
      line-height: 300px;
      font-weight: 500;
      // color: var(--pale-white);
      font-size: 3rem;
      transition: all 0.3s ease-in;
      opacity: 0.9;
      @media all and (max-width: 420px) {
        flex-direction: column;
        gap: 2rem;
        width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 2rem;
      }
    }
    a:nth-child(2):hover {
      // background-color: var(--success-green);
      background-color: var(--accent-yellow);
      background-image: url(@/assets/loading/test_ball.svg);
      background-position: 25% 85%;
      background-size: 20%;
      background-repeat: no-repeat;
    }
  }
}

.detail {
  width: 100%;
  background-color: var(--primary-black);
  color: var(--secondary-gray-2);
  font-size: 0.875rem;
  font-weight: 400;
  padding: 3rem 2rem;
  text-align: center;
  & div {
    @media all and (max-width: 420px) {
      text-align: left;
      padding-bottom: 0.5rem;
    }
  }
}
</style>
