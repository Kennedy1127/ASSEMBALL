<template>
  <main class="myplayer">
    <header class="myplayer_banner">
      <h1>我的球隊</h1>
      <section class="myplayer_banner_text">
        <h2>
          這是一支名為「猛虎隊」的棒球隊，無論你是年輕或年長，無論你是否有打棒球經驗，只要你有興趣都可以在這邊找到同樣熱愛棒球的人一同出去打棒球。
        </h2>
      </section>
    </header>
    <section class="myplayer_group">
      <div class="myplayer_title_wrap">
        <div class="myplayer_title_wrap_rect"></div>
        <h3>球員</h3>
      </div>
      <div class="myplayer_group_card_wrap">
        <div
          class="myplayer_group_card"
          v-for="item in myplayer_card"
          :key="item.id"
        >
          <div
            class="myplayer_group_card_pic"
            v-bind:style="{ backgroundImage: `url('${item.img}')` }"
          >
            <div class="myplayer_group_card_name">{{ item.name }}</div>
          </div>
        </div>
        <div class="myplayer_group_card_more">
          <span
            >觀看更多 <font-awesome-icon icon="fa-solid fa-chevron-right"
          /></span>
        </div>
      </div>
    </section>
    <section class="myplayer_function_group">
      <div class="myplayer_function_group_calendar_wrap">
        <div class="myplayer_funtion_title_wrap">
          <div class="myplayer_function_title_rect"></div>
          <h3>賽程表</h3>
        </div>
        <div class="myplayer_function_calendar"></div>
      </div>
      <div class="myplayer_function_group_race_wrap"></div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      myplayer_card: [
        {
          id: "1",
          img: require("../assets/images/myplayer_team/myplayer_card/player_1.jpg"),
          name: "米奇·哈特森",
        },
        {
          id: "2",
          img: require("../assets/images/myplayer_team/myplayer_card/player_2.jpg"),
          name: "約翰·安德森",
        },
        {
          id: "3",
          img: require("../assets/images/myplayer_team/myplayer_card/player_3.jpg"),
          name: "傑克遜·羅賓遜",
        },
        {
          id: "4",
          img: require("../assets/images/myplayer_team/myplayer_card/player_4.jpg"),
          name: "賴安·莫里森",
        },
        {
          id: "5",
          img: require("../assets/images/myplayer_team/myplayer_card/player_5.jpg"),
          name: "湯米·坎貝爾",
        },
        {
          id: "6",
          img: require("../assets/images/myplayer_team/myplayer_card/player_6.jpg"),
          name: "奧斯汀·米勒",
        },
        {
          id: "7",
          img: require("../assets/images/myplayer_team/myplayer_card/player_7.jpg"),
          name: "布蘭登·哈珀",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.myplayer {
  max-width: 1600px;
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
      background-image: url(~@/assets/images/myplayer_team/myplayer_text_bgc.jpg);

      h2 {
        color: var(--pale-white);
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
      }
    }
  }
  &_group {
    width: 80%;
    margin: auto;
    padding: 15rem 0rem 12rem 0rem;
    // background-color: red;
    &_card_wrap {
      display: flex;
      flex-wrap: wrap;
    }
    &_card {
      width: 25%;
      padding: 0.5rem;
    }
    &_card_pic {
      background-size: cover;
      background-repeat: no-repeat;
      filter: contrast(50%);
      filter: brightness(40%);
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        filter: contrast(100%);
        filter: brightness(100%);
        box-shadow: var(--shadow-wide);
      }
    }
    &_card_name {
      padding: 10rem 0rem 3rem 0.5rem;
      color: var(--pale-white);
      font-size: 2rem;
    }
    &_card_more {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25%;

      span {
        font-size: 2rem;
        color: var(--primary-blue);
        cursor: pointer;
      }
    }
  }
  &_title_wrap {
    display: flex;
    justify-content: space-between;
    width: 10%;
    padding-bottom: 8rem;

    &_rect {
      width: 1rem;
      background-color: var(--primary-blue);
    }
    h3 {
      font-size: 2.5rem;
      color: var(--primary-blue);
      font-weight: 700;
    }
  }
  .myplayer_function_group {
    width: 80%;
    margin: auto;
    display: flex;
    border: 1px solid red;
    &_calendar_wrap {
      width: 50%;
      background-color: aquamarine;
    }
    &_title_wrap {
      width: 50%;
      background-color: green;
      overflow: scroll;
    }
  }
}
</style>
