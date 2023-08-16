<template>
  <div>
    <section class="myplayer_message_popups">
      <div class="myplayer_popups">
        <div class="myplayer_popups_title">
          <div class="myplayer_popups_title_avatar">
            <div
              class="myplayer_popups_title_avatar_pic"
              v-bind:style="{ backgroundImage: `url('${msgData.avatar}')` }"
            ></div>
            <div class="myplayer_popups_title_avatar_info">
              <span class="myplayer_popups_title_avatar_account">{{
                msgData.name
              }}</span>
              <span class="myplayer_popups_title_avatar_day">{{
                msgData.postdate
              }}</span>
            </div>
          </div>
          <div
            class="myplayer_popups_title_dot"
            @click="myplayer_dot_btn"
            v-if="
              authID === msgData.user_id ||
              authID === $store.state.myplayerTeam.user_id
            "
          >
            ...
            <div
              class="myplayer_popups_edit_visible"
              v-show="$store.state.myplayerEditOpen"
            >
              <div class="myplayer_popups_title_dot_wrap">
                <div class="myplayer_popups_edit_wrap">
                  <span class="myplayer_popups_dot_edit"></span>
                </div>
                <div
                  class="myplayer_popups_delete_wrap"
                  @click="confirmItem(msgData.id)"
                >
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
              {{ msgData.title }}
            </h3>
            <textarea class="myplayer_popups_content_wrap_text">
              {{ msgData.text }}
            </textarea>
            <div class="myplayer_popups_content_wrap_message" ref="messageWrap">
              <p v-for="message in messages" :key="message">{{ message }}</p>
            </div>
          </div>
        </div>
        <div class="myplayer_popups_content_wrap_typing">
          <input
            type="text"
            placeholder="請輸入留言內容......"
            class="myplayer_popups_content_typing_box"
            v-model="inputText"
            @keyup.enter="sendMessage"
          />
          <span class="myplayer_popups_content_typing_arrow"
            ><font-awesome-icon
              :icon="['fas', 'paper-plane']"
              @click="sendMessage"
          /></span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { doc, deleteDoc } from "firebase/firestore";
import { auth } from "@/firebase/config";
import { db } from "@/firebase/config";
export default {
  props: { postData: { type: Object, default: {} }, msgData: {} },
  data() {
    return {
      myplayer_content: false,
      myplayer_message_popups: false,
      editMode: true,
      editCommentId: null,
      editComment: null,
      inputText: "",
      messages: [],
      authID: auth.currentUser.uid,
    };
  },
  methods: {
    myplayer_dot_btn() {
      this.$store.commit("myplayerEditToggle");
    },
    sendMessage() {
      if (this.inputText.trim() !== "") {
        this.messages.push(this.inputText);
        this.inputText = "";
      }
    },
    async confirmItem(id) {
      await deleteDoc(doc(db, "TEAMS", this.$route.params.id, "POST", id));
      const index = this.$store.state.myplayerMessageCard.findIndex(
        (myplayerMsg) => myplayerMsg.id === id
      );
      this.$store.state.myplayerMessageCard.splice(index, 1);
      this.$emit("closeModal");
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
  // &_message_overlay {
  // position: fixed;
  // // display: none;
  // z-index: -1;
  // top: 0;
  // right: 0;
  // width: 100%;
  // height: 100%;
  // background-color: var(--overlay-black);
  // }
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
          border-radius: 50%;
          background-size: cover;
          background-repeat: no-repeat;
          // border: 1px solid brown;
        }
        &_info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
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
        user-select: none;
        cursor: pointer;
        position: relative;
        display: block;
        transform: translateY(1rem);
        &_wrap {
          width: 100px;
          height: 70px;
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
          border: 1px solid transparent;
          height: 15rem;
          overflow: auto;
          &:focus {
            outline: none;
          }
        }
        &_message {
          width: 100%;
          height: 8rem;
          border-radius: 0.5rem;
          border: 2px solid var(--secondary-blue-1);
          padding: 1.5rem 1.5rem;
          background-color: var(--secondary-blue-4);
          overflow: auto; // scroll
        }
      }
      &_wrap_typing {
        width: 100%;
        padding-top: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 5px;
      }
      &_typing_box {
        width: 90%;
        margin: auto;
        border-radius: 3rem;
        font-size: 1rem;
        border: 2px solid var(--secondary-blue-1);
        padding: 1rem;
        &:focus {
          outline: none;
        }
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
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .myplayer_popups_content_wrap_title {
    font-size: 1.5rem;
  }
  .myplayer_popups_title_avatar_account {
    font-size: 1.5rem;
  }
  .myplayer_popups_title_dot {
    font-size: 2.5rem;
  }
  .myplayer_popups_title_avatar_day {
    font-size: 1rem;
  }
  .myplayer_popups_content_wrap_text {
    font-size: 1rem;
    padding: 1rem 0rem;
  }
}
@media screen and (max-width: 767px) {
  .myplayer_popups_content_wrap_title {
    font-size: 1rem;
  }
  .myplayer_popups_title_avatar_account {
    font-size: 1rem;
  }
  .myplayer_popups_title_dot {
    font-size: 2.5rem;
  }
  .myplayer_popups_title_avatar_day {
    font-size: 0.5rem;
  }
  .myplayer_popups_content_wrap_text {
    font-size: 1rem;
    height: 10rem;
  }
  .myplayer_message_popups {
    width: 80%;
    margin: 0rem auto 3rem auto;
  }
  .myplayer_popups_title_avatar_pic {
    width: 80px;
    height: 80px;
  }
  .myplayer_popups_title_dot_wrap
    .myplayer_popups_edit_wrap
    .myplayer_popups_dot_edit {
    font-size: 0.8rem;
  }
  .myplayer_popups_title_dot_wrap
    .myplayer_popups_delete_wrap
    .myplayer_popups_dot_delete {
    font-size: 0.8rem;
  }
  .myplayer_popups_title_dot_wrap {
    width: 80px;
    height: 80px;
    right: calc(50% - 30px);
    bottom: 65%;
  }
  .myplayer_popups {
    padding: 1rem;
  }
  .myplayer_popups_content_typing_arrow {
    font-size: 2rem;
  }
  .myplayer_popups_title_avatar_info {
    text-wrap: nowrap;
    padding: 0rem;
  }
}
</style>
