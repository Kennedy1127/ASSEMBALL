<template>
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
        <span>
          觀看更多 <font-awesome-icon icon="fa-solid fa-chevron-right"
        /></span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      myplayer_card: [
        {
          id: "1",
          img: require("/src/assets/images/myplayer_team/myplayer_card/player_1.jpg"),
          name: "米奇·哈特森",
        },
        {
          id: "2",
          img: require("/src/assets/images/myplayer_team/myplayer_card/player_2.jpg"),
          name: "約翰·安德森",
        },
        {
          id: "3",
          img: require("/src/assets/images/myplayer_team/myplayer_card/player_3.jpg"),
          name: "傑克·羅賓遜",
        },
        {
          id: "4",
          img: require("/src/assets/images/myplayer_team/myplayer_card/player_4.jpg"),
          name: "賴安·莫里森",
        },
        {
          id: "5",
          img: require("/src/assets/images/myplayer_team/myplayer_card/player_5.jpg"),
          name: "湯米·坎貝爾",
        },
        {
          id: "6",
          img: require("/src/assets/images/myplayer_team/myplayer_card/player_6.jpg"),
          name: "奧斯汀·米勒",
        },
        {
          id: "7",
          img: require("/src/assets/images/myplayer_team/myplayer_card/player_7.jpg"),
          name: "布蘭登·哈珀",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.myplayer {
  margin: 0 auto;
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
        font-weight: 500;
      }
    }
  }
  &_title_wrap {
    display: flex;
    justify-content: space-between;
    width: 10rem;
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
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .myplayer_group_card_name {
    padding: 6rem 0rem 2rem 0.5rem;
    font-size: 1.5rem;
  }
  .myplayer_group_card_more span {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .myplayer_title_wrap h3 {
    font-size: 2rem;
  }
  .myplayer_group_card_name {
    padding: 5rem 0rem 2rem 0.5rem;
    font-size: 1rem;
  }
  .myplayer_group_card_more span {
    font-size: 1rem;
  }
  .myplayer_title_wrap {
    width: 8rem;
  }
}
@media screen and (max-width: 767px) {
  .myplayer_group_card {
    width: 50%;
  }
  .myplayer_group_card_more {
    width: 50%;
  }
  .myplayer_title_wrap h3 {
    font-size: 2rem;
  }
  .myplayer_group_card_name {
    padding: 5rem 0rem 2rem 0.5rem;
    font-size: 1rem;
  }
  .myplayer_group_card_more span {
    font-size: 1rem;
  }
  .myplayer_title_wrap {
    width: 8rem;
  }
}
</style>
