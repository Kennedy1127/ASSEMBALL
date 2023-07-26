<template>
  <main class="myplayer">
    <header class="myplayer_banner">
      <h1>我的球隊</h1>
      <section class="myplayer_banner_text">
        <h2>
          這是一支名為「猛虎隊」的棒球隊，無論你是年輕或年長，無論你是否有打棒球經驗，只要你有興趣都可以在這邊找到同樣熱愛棒球的人一同出去打棒球。
        </h2>
        <div class="myplayer_banner_text_edit">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </div>
      </section>
    </header>
  </main>
</template>
<style scoped lang="scss">
.myplayer {
  margin: 0 auto;

  &_banner {
    background-image: url(~@/assets/images/myplayer_team/myplayer_banner.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    position: relative;
    z-index: -1;

    h1 {
      font-size: 6rem;
      color: var(--pale-white);
      letter-spacing: 2rem;
      text-shadow: var(--secondary-gray-3) 0.1rem 0.1rem 0.2rem;
    }

    &_text {
      position: absolute;
      top: 100%;
      transform: translateY(-50%);
      width: 50%;
      //   border: 1px solid red;
      padding: 8rem;
      border-radius: 0.5rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(~@/assets/images/myplayer_team/myplayer_text_bgc.jpg);
      &_edit {
        font-size: 2rem;
        padding: 0.5rem 1rem;
        border-radius: 50%;
        color: var(--primary-blue);
        background-color: var(--pale-white);
        position: absolute;
        z-index: 999;
        bottom: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
      }
      h2 {
        color: var(--pale-white);
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
      }
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .myplayer_banner {
    height: 80vh;
  }
  .myplayer_banner h1 {
    font-size: 5rem;
  }
  .myplayer_banner_text h2 {
    font-size: 1rem;
  }
  .myplayer_banner_text {
    padding: 4rem 6rem;
  }
  .myplayer_banner_text_edit {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .myplayer_banner {
    height: 80vh;
  }
  .myplayer_banner h1 {
    font-size: 3rem;
  }
  .myplayer_banner_text h2 {
    font-size: 1rem;
  }
  .myplayer_banner_text {
    padding: 4rem 6rem;
    width: 60%;
  }
  .myplayer_banner_text_edit {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
@media screen and (max-width: 767px) {
  .myplayer_banner {
    height: 80vh;
  }
  .myplayer_banner h1 {
    font-size: 3rem;
  }
  .myplayer_banner_text h2 {
    font-size: 1rem;
  }
  .myplayer_banner_text {
    padding: 2rem 3rem;
    width: 60%;
  }
  .myplayer_banner_text_edit {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
