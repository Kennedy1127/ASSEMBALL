<template>
  <div>
    <section
      class="myplayer_message_popups"
      v-show="$store.state.myplayerPopupsOpen"
    >
      <div class="myplayer_message_overlay" @click="myplayerClose"></div>
      <div class="myplayer_popups">
        <div class="myplayer_popups_title">
          <div class="myplayer_popups_title_avatar">
            <div class="myplayer_popups_title_avatar_pic"></div>
            <div class="myplayer_popups_title_avatar_info">
              <span class="myplayer_popups_title_avatar_account">麥噹噹</span>
              <span class="myplayer_popups_title_avatar_day">-2023.07.02</span>
            </div>
          </div>
          <div class="myplayer_popups_title_dot" @click="myplayer_dot_btn">
            ...
            <div
              class="myplayer_popups_edit_visible"
              v-show="$store.state.myplayerEditOpen"
            >
              <div class="myplayer_popups_title_dot_wrap">
                <div class="myplayer_popups_edit_wrap">
                  <span class="myplayer_popups_dot_edit"
                    ><font-awesome-icon :icon="['fas', 'pen']" /></span
                  ><span class="myplayer_popups_dot_edit">編輯</span>
                </div>
                <div class="myplayer_popups_delete_wrap">
                  <span class="myplayer_popups_dot_delete"
                    ><font-awesome-icon :icon="['fas', 'trash-can']"
                  /></span>
                  <span class="myplayer_popups_dot_delete">刪除</span>
                </div>
                <div class="myplayer_popups_title_dot_triangle"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="myplayer_popups_content">
          <div class="myplayer_popups_content_wrap">
            <h3 class="myplayer_popups_content_wrap_title">
              Title：猛虎隊弟兄讚啦
            </h3>
            <div class="myplayer_popups_content_wrap_text">
              作為這支球隊的球員，我感到無比榮幸和感恩。加入這個球隊是我的夢想成真，我將以全心全意的奉獻和努力來回報這份機會！！每一次踏上球場，我都感受到一種無法言喻的熱血沸騰，我投入每一個瞬間，追求每一個細節的完美，這是我對自己和球隊的責任，我深信只有通過不斷的努力和訓練，我才能夠成為更好的球員。與隊友們的團結合作是我們的力量所在，我們互相鼓勵、互相支持，在困難時刻攜手並肩，我們相信每個人的貢獻都是不可或缺的，只有通過團隊的共同努力，我們才能夠實現更大的成就，球迷的支持是我們的動力源泉，看到他們為我們的表現歡呼和激動，我感到無比感激和自豪。他們的存在讓我們知道，我們不僅為自己而戰，也代表著他們的期望和熱愛，他們的支持讓我們感受到無窮的勇氣和動力，我們將竭盡所能為他們帶來勝利，作為球隊的一員，我以身為一名球員的身份感到自豪，我將以積極的態度和專注的心態，不斷提升自己的能力和技巧，為球隊做出更大的貢獻。我相信我們將共同創造出令人難以忘懷的瞬間，並一起追逐更高的成就。這支球隊已成為我生命中不可或缺的一部分，它不僅是我的夢想，更是我熱愛的運動和家庭。我將永遠保持謙卑和熱情，努力成為球隊的驕傲，並與我的隊友們一起創造屬於我們的傳奇。
            </div>
            <div class="myplayer_popups_content_wrap_message"></div>
          </div>
        </div>
        <div class="myplayer_popups_content_wrap_typing">
          <input type="text" class="myplayer_popups_content_typing_box" />
          <span class="myplayer_popups_content_typing_arrow"
            ><font-awesome-icon :icon="['fas', 'paper-plane']"
          /></span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myplayer_content: false,
      myplayer_message_popups: false,
    };
  },
  methods: {
    myplayerClose() {
      this.$store.commit("myplayerOverlayToggle");
    },
    myplayer_dot_btn() {
      this.$store.commit("myplayerEditToggle");
    },
  },
};
</script>
<style scoped lang="scss">
.myplayer {
  margin: 0 auto;
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
    padding: 12rem 0;
    .myplayer_message_area_card_wrap {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .myplayer_message_more_wrap {
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        .myplayer_message_more_group {
          width: 15rem;
          display: flex;
          justify-content: space-between;
          background-color: var(--primary-blue);
          border: 1px solid black;
          border-radius: 2rem;
          padding: 1rem;
          cursor: pointer;
        }
        .myplayer_message_more {
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--pale-white);
          letter-spacing: 1rem;
        }
        .myplayer_message_more_wrap_right {
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--pale-white);
        }
      }

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
            font-weight: 600;
            padding: 0.5rem;
            color: var(--pale-white);
            font-family: "Montserrat", sans-serif;
            cursor: pointer;
          }
        }
      }
    }
  }
  &_message_popups {
    width: 50%;
    border-radius: 0.5rem;
    position: fixed;
    top: 8rem;
    right: 0;
    bottom: 2rem;
    left: 0;
    margin: auto;
    z-index: 1;
    overflow: auto;

    // border: 1px solid black;
    // height: 600px;
  }
  &_message_overlay {
    position: fixed;
    // display: none;
    z-index: -1;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-black);
  }
  &_popups {
    width: 100%;
    // height: 100%;
    padding: 2rem 1rem 1rem 1rem;
    background-color: var(--secondary-blue-4);
    &_title {
      padding: 1rem 0rem 1rem 0rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: auto;
      // border: 1px solid yellow;
      &_avatar {
        display: flex;
        // border: 1px solid pink;
        &_pic {
          width: 100px;
          height: 100px; //warning
          background-image: url(/src/assets/images/myplayer_team/myplayer_card/player_1.jpg);
          border-radius: 50%;
          background-size: cover;
          background-repeat: no-repeat;
          // border: 1px solid brown;
        }
        &_info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          // border: 1px solid blue;
          padding: 0.5rem;
        }
        &_account {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-blue);
          text-align: center;
          padding-bottom: 1rem;
        }
        &_day {
          font-size: 1.25rem;
          color: var(--primary-blue);
          text-align: center;
        }
      }
      &_dot {
        // width: 150px;
        // height: 150px; //warning
        text-align: center;
        color: var(--primary-blue);
        font-size: 4rem;
        cursor: pointer;
        position: relative;
        display: block;
        transform: translateY(1rem);
        &_wrap {
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 0.5rem;
          position: absolute;
          bottom: 50%;
          right: calc(50% - 50px);
          // right: 10%;
          background-color: var(--primary-blue);
          // border: 1px solid var(--primary-blue);
          .myplayer_popups_edit_wrap {
            display: flex;
            .myplayer_popups_dot_edit {
              font-size: 1rem;
              color: var(--pale-white);
              padding: 1rem 0.5rem 0.5rem 0.5rem;
            }
          }
          .myplayer_popups_delete_wrap {
            display: flex;
            .myplayer_popups_dot_delete {
              font-size: 1rem;
              color: var(--pale-white);
              padding: 0.5rem;
            }
          }
        }
        &_triangle {
          border-right: 15px solid transparent;
          border-left: 15px solid transparent;
          border-bottom: 25px solid var(--primary-blue);
          transform: rotate(180deg);
          position: relative;
          top: 10%;
        }
      }
    }
    &_content {
      // height: 450px;
      background-color: var(--pale-white);
      // border: 1px solid black;
      width: 100%;
      padding: 1.5rem 0rem;
      border-radius: 0.5rem;
      &_wrap {
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &_title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-blue);
          padding: 1.5rem 0rem;
          border-bottom: 2px solid var(--secondary-gray-3);
        }
        &_text {
          font-size: 1.25rem;
          color: var(--primary-blue);
          padding: 1.5rem 0rem;
          height: 15rem;
          overflow: auto;
        }
        &_message {
          width: 100%;
          height: 8rem;
          border-radius: 0.5rem;
          border: 2px solid var(--secondary-blue-1);
          padding: 1.5rem 0rem;
          background-color: var(--secondary-blue-4);
          overflow: auto; // scroll
        }
      }
      &_wrap_typing {
        width: 100%;
        padding-top: 1rem;
        display: flex;
        justify-content: space-around;
        margin-bottom: 5px;
      }
      &_typing_box {
        width: 90%;
        margin: auto;
        border-radius: 3rem;
        font-size: 1rem;
        border: 2px solid var(--secondary-blue-1);
        padding: 1rem;
      }
      &_typing_arrow {
        width: 4rem;
        height: 4rem;
        font-size: 2.5rem;
        text-align: center;
        border-radius: 50%;
        color: var(--primary-blue);
        cursor: pointer;
      }
    }
  }
}
</style>
