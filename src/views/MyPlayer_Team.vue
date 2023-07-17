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
        <div class="myplayer_function_title_wrap">
          <div class="myplayer_function_rect"></div>
          <h3>賽程表</h3>
        </div>
        <div class="myplayer_function_calendar"></div>
      </div>
      <div class="myplayer_function_group_race_wrap">
        <div class="myplayer_function_title_wrap">
          <div class="myplayer_function_rect"></div>
          <h3>戰績表</h3>
        </div>
        <div class="myplayer_function_race_list">
          <div
            class="myplayer_function_race_package"
            v-for="item in myplayer_race_list"
            :key="item.id"
          >
            <div class="myplayer_function_race_title_wrap">
              <div class="myplayer_function_race_title_time">日期</div>
              <div class="mypalyer_function_race_title_name">
                <div class="myplayer_function_race_title_team1">
                  {{ item.team1 }}
                </div>
                <div class="myplayer_function_race_title_team2">
                  {{ item.team2 }}
                </div>
              </div>
            </div>
            <div class="myplayer_function_race_item">
              <div class="myplayer_function_race_item_day">{{ item.day }}</div>
              <div class="myplayer_function_race_item_name">
                <div class="myplayer_function_race_item_team1">
                  <div
                    class="myplayer_function_race_item_logo1"
                    v-bind:style="{ backgroundImage: `url('${item.logo1}')` }"
                  ></div>
                  <div class="myplayer_function_race_item_score1">
                    {{ item.score1 }}
                  </div>
                </div>
                <div class="myplayer_function_race_item_contest">
                  <div class="myplayer_function_race_item_versus">vs</div>
                  <div class="myplayer_function_race_item_colon">:</div>
                </div>
                <div class="myplayer_function_race_item_team2">
                  <div
                    class="myplayer_function_race_item_logo2"
                    v-bind:style="{ backgroundImage: `url('${item.logo2}')` }"
                  ></div>
                  <div class="myplayer_function_race_item_score2">
                    {{ item.score2 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="myplayer_album">
      <div class="myplayer_album_title_wrap">
        <div class="myplayer_album_rect"></div>
        <h3 class="myplayer_album_title">相簿</h3>
      </div>
      <div class="myplayer_album_gallery">
        <div class="myplayer_album_gallery_text">觀看更多</div>
      </div>
    </section>
    <section class="myplayer_message_area">
      <div class="myplayer_message_title_wrap">
        <div class="myplayer_message_area_rect"></div>
        <h3 class="myplayer_message_area_title">討論區</h3>
      </div>
    </section>
    <section class="myplayer_message_area_content">
      <div class="myplayer_message_area_card_wrap">
        <div
          class="myplayer_message_area_card"
          v-for="item in myplayer_message_card"
          :key="item.id"
        >
          <div class="myplayer_message_avatar_wrap">
            <div
              class="myplayer_message_avatar"
              v-bind:style="{ backgroundImage: `url('${item.avatar}')` }"
            ></div>
            <div class="myplayer_message_name">{{ item.account }}</div>
          </div>
          <div class="myplayer_message_area_content_wrap">
            <div class="myplayer_message_area_title">{{ item.title }}</div>
            <div class="myplayer_message_area_text">
              {{ item.typing_text }}
            </div>
          </div>
          <div class="myplayer_message_area_more_wrap">
            <div class="myplayer_message_area_day">{{ item.day }}</div>
            <div class="myplayer_message_area_more">{{ item.more }}</div>
          </div>
        </div>
      </div>
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
          name: "傑克·羅賓遜",
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
      myplayer_race_list: [
        {
          id: "1",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "07/05",
          logo1: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_2.png"),
          score1: 1,
          score2: 3,
        },
        {
          id: "2",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "07/02",
          logo1: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_3.png"),
          score1: 2,
          score2: 4,
        },
        {
          id: "3",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "07/01",
          logo1: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_3.png"),
          score1: 1,
          score2: 4,
        },
        {
          id: "4",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "06/25",
          logo1: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("../assets/images/myplayer_team/myplayer_team_logo/team_logo_2.png"),
          score1: 1,
          score2: 2,
        },
      ],
      myplayer_message_card: [
        {
          id: "1",
          avatar: require("../assets/images/myplayer_team/myplayer_card/player_1.jpg"),
          account: "咖里梵",
          title: "猛虎隊弟兄讚啦",
          typing_text:
            "作為這支球隊的球員，我感到無比榮幸和感恩。加入這個球隊是我的夢想成真，我將以全心全意的奉獻和努力來回報這份機會。每一次踏上球場，我都感受到一種無法言喻的熱血沸騰，我投入每一個瞬間，追求每一個細節的完美，這是我對自己和球隊的責任，我深信只有通過不斷的努力和訓練，我才能夠成為更好的球員。與隊友們的團結合作是我們的力量所在",
          day: "-2023.07.02",
          more: "more",
        },
        {
          id: "2",
          avatar: require("../assets/images/myplayer_team/myplayer_card/player_2.jpg"),
          account: "麥噹噹",
          title: "謝謝大家~~",
          typing_text:
            "球迷們的熱情和支持是我們最大的動力。他們的歡呼和呐喊，能夠點燃我們心中的火焰，讓我們更加堅定地奮鬥。我將竭盡所能，用最好的表現回報球迷們的愛戴！",
          day: "-2023.06.30",
          more: "more",
        },
        {
          id: "3",
          avatar: require("../assets/images/myplayer_team/myplayer_card/player_3.jpg"),
          account: "和寶王",
          title: "進步神速的原因",
          typing_text:
            "在球場上，每一次揮棒、每一次守備，我都能感受到那份純粹的快樂和投入，無論是在勝利的時刻還是挫折的時刻，我都堅信著自己的能力，並且從每一次的比賽中學習和成長。球迷們的熱情和支持是我們最大的動力，他們的歡呼和呐喊，能夠點燃我們心中的火焰，讓我們更加堅定地奮鬥！我將竭盡所能，用最好的表現回報球迷們的愛戴，他們的存在使我們更加意識到自己的責任和使命，作為球隊的一員，我知道自己身上肩負著巨大的責任和期望，我會不斷挑戰自己，追求卓越，努力成為球隊的關鍵人物。我相信通過團隊的努力和合作，我們能夠創造出屬於我們的傳奇。",
          day: "-2023.06.28",
          more: "more",
        },
        {
          id: "4",
          avatar: require("../assets/images/myplayer_team/myplayer_card/player_4.jpg"),
          account: "珍茱乃茶",
          title: "走了 打球阿!!",
          typing_text:
            "作為這支球隊的球員，我感到非常榮幸和幸福。每一次穿上球衣，踏上球場，我都能感受到那份獨特的熱情和自豪。這是我夢寐以求的機會，我將用盡全力去追逐我的棒球夢想。與我的隊友們一起訓練和比賽是一種難以言喻的榮幸。我們彼此相互激勵，相互扶持，共同成長。在球場上，我們不僅是球隊，更是一個充滿著友誼和團結的家庭。我相信這份團隊精神和凝聚力將使我們在每一場比賽中更加強大，球迷們是我們的力量源泉，，他們的支持和歡呼聲為我們帶來無限的動力和信心。在球場上，我能夠感受到他們對我們的熱愛和期待，這激勵著我們不斷超越自我，追求卓越。我們將竭盡所能，用最好的表現回報他們對我們的支持，作為球隊的一員，我將以積極的態度和無懈可擊的努力，追求卓越。我將不斷提升自己的技能和戰術知識，為球隊帶來穩定的表現",
          day: "-2023.06.22",
          more: "more",
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
      background-repeat: no-repeat;
      background-size: cover;
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
  .myplayer_function_group {
    width: 80%;
    margin: auto;
    display: flex;
    padding-bottom: 8rem;
    // border: 1px solid red;
    &_calendar_wrap {
      width: 50%;
      .myplayer_function_title_wrap {
        display: flex;
        justify-content: space-between;
        width: 12.5rem;
        padding-bottom: 8rem;

        h3 {
          font-size: 2.5rem;
          color: var(--primary-blue);
          font-weight: 700;
        }
      }
      .myplayer_function_rect {
        width: 1rem;
        background-color: var(--primary-blue);
      }
    }
    &_race_wrap {
      width: 50%;
      flex: 1;
      .myplayer_function_title_wrap {
        display: flex;
        justify-content: space-between;
        width: 12.5rem;
        padding-bottom: 8rem;
      }
      .myplayer_function_rect {
        width: 1rem;
        background-color: var(--primary-blue);
      }
      h3 {
        font-size: 2.5rem;
        color: var(--primary-blue);
        font-weight: 700;
      }
      .myplayer_function_race_list {
        width: 100%;
        height: 600px;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 1rem;
        }
        &::-webkit-scrollbar-button {
          background: transparent;
          display: none;
        }
        &::-webkit-scrollbar-thumb {
          background-color: var(--secondary-blue-1);
          border-radius: 1rem;
        }
        .myplayer_function_race_title_wrap {
          width: 100%;
          display: flex;
          .myplayer_function_race_title_time {
            width: 30%;
            text-align: center;
            background-color: var(--primary-blue);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--pale-white);
          }
          .mypalyer_function_race_title_name {
            width: 70%;
            display: flex;
            justify-content: space-between;
            background-color: var(--error-yellow);
            .myplayer_function_race_title_team1 {
              width: 40%;
              text-align: center;
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--pale-white);
            }
            .myplayer_function_race_title_team2 {
              width: 40%;
              text-align: center;
              font-size: 1.5rem;
              font-weight: 700;
              color: var(--pale-white);
            }
          }
        }
        .myplayer_function_race_item {
          // border: 1px solid orange;
          // background-color: orange;
          height: 33.333333%;
          box-sizing: border-box;
          width: 100%;
          display: flex;
          align-items: center;

          &_day {
            width: 30%;
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-blue);
            // padding: 5rem 0rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            // border: 1px solid black;
          }
          &_name {
            width: 70%;
            // border: 1px solid black;
            display: flex;
            .myplayer_function_race_item_team1 {
              width: 40%;
              // border: 1px solid black;
              padding: 1rem;
              .myplayer_function_race_item_logo1 {
                width: 6rem;
                height: 6rem;
                background-repeat: no-repeat;
                background-size: cover;
                margin: auto;
                border: 3px solid var(--primary-blue);
                border-radius: 50%;
              }
              .myplayer_function_race_item_score1 {
                width: 100%;
                text-align: center;
                font-size: 2.5rem;
                color: var(--accent-red);
                font-weight: 700;
              }
            }
            .myplayer_function_race_item_contest {
              width: 20%;
              padding: 1rem;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              // border: 1px solid black;
              .myplayer_function_race_item_versus {
                width: 100%;
                height: 40%;
                text-align: center;
                font-size: 2.5rem;
                color: var(--primary-blue);
              }
              .myplayer_function_race_item_colon {
                text-align: center;
                height: 40%;
                font-size: 2.5rem;
                color: var(--primary-blue);
              }
            }
            .myplayer_function_race_item_team2 {
              width: 40%;
              padding: 1rem;
              // border: 1px solid black;
              .myplayer_function_race_item_logo2 {
                width: 6rem;
                height: 6rem;
                margin: auto;
                background-repeat: no-repeat;
                background-size: cover;
                border: 3px solid var(--primary-blue);
                border-radius: 50%;
              }
              .myplayer_function_race_item_score2 {
                width: 100%;
                text-align: center;
                font-size: 2.5rem;
                color: var(--accent-red);
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
  &_album {
    width: 100%;
    &_title_wrap {
      margin: auto;
      display: flex;
      justify-content: space-between;
      width: 10rem;
      padding-bottom: 4rem;
      .myplayer_album_rect {
        width: 1rem;
        background-color: var(--primary-blue);
      }
      .myplayer_album_title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-blue);
      }
    }
    .myplayer_album_gallery {
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(../assets/images/myplayer_team/gallery.jpg);
      filter: contrast(50%);
      filter: brightness(40%);
      transition: 0.3s;
      cursor: pointer;

      &_text {
        font-size: 4rem;
        font-weight: 500;
        color: var(--secondary-gray-2);
        text-align: center;
        padding: 10rem 0rem;
        letter-spacing: 1.25rem;
        text-shadow: var(--secondary-gray-1) 0.1rem 0.1rem 0.2rem;
      }
    }
    .myplayer_album_gallery:hover {
      filter: contrast(0);
      filter: brightness(80%);
      transition: 0.3s;
    }
    .myplayer_album_gallery_text:hover {
      color: var(--pale-white);
    }
  }
  &_message_area {
    width: 100%;
    background-color: var(--primary-blue);
    padding: 3.5rem;
    .myplayer_message_title_wrap {
      width: 12.5rem;
      display: flex;
      justify-content: space-between;
      margin-left: 2.5rem;

      .myplayer_message_area_rect {
        width: 1rem;
        background-color: var(--pale-white);
      }
      .myplayer_message_area_title {
        color: var(--pale-white);
        font-size: 2.5rem;
      }
    }
  }
  &_message_area_content {
    width: 100%;
    background-color: var(--secondary-blue-3);
    padding: 30vh 0;
    .myplayer_message_area_card_wrap {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .myplayer_message_area_card {
        width: 45%;
        background-color: var(--pale-white);
        padding: 2rem;
        margin-bottom: 12rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:nth-child(even) {
          // margin-top: 2.5rem;
          position: relative;
          top: 3.5rem;
        }

        .myplayer_message_avatar_wrap {
          width: 200px;
          position: absolute;
          bottom: 100%;
          right: calc(50% - 100px);
          transform: translateY(50%);

          .myplayer_message_avatar {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            // background-image: url(../assets/images/myplayer_team/myplayer_card/player_1.jpg);
            background-repeat: no-repeat;
            background-size: cover;
          }
          .myplayer_message_name {
            width: 200px;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-blue);
            text-align: center;
            padding-top: 2rem;
          }
        }
        .myplayer_message_area_content_wrap {
          width: 80%;
          margin: auto;
          padding-top: 10rem;
          // border: 1px solid black;
          .myplayer_message_area_title {
            width: 100%;
            font-size: 1.5rem;
            font-weight: 500;
            padding-bottom: 1.5rem;
            color: var(--primary-blue);
            border-bottom: 2px solid var(--secondary-gray-3);
          }
          .myplayer_message_area_text {
            font-size: 1rem;
            color: var(--primary-blue);
            padding: 1.5rem 0rem;
          }
        }
        .myplayer_message_area_more_wrap {
          // border: 1px solid red;
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          padding: 1rem;

          .myplayer_message_area_day {
            width: 33.33333%;
            text-align: center;
            font-size: 0.875rem;
            line-height: 3rem;
            color: var(--primary-blue);
          }
          .myplayer_message_area_more {
            width: 33.3333%;
            text-align: center;
            font-size: 1.25rem;
            background-color: var(--primary-blue);
            border-radius: 2rem;
            padding: 0.5rem;
            color: var(--pale-white);
            font-family: "Montserrat", sans-serif;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
