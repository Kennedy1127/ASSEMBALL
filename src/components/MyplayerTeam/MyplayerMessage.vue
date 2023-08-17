<template>
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
        v-for="(item, index) in $store.state.myplayerMessageCard.slice(
          0,
          visiblePosts
        )"
        :key="item.id"
      >
        <div class="myplayer_message_avatar_wrap">
          <div
            class="myplayer_message_avatar"
            v-bind:style="{ backgroundImage: `url('${item.avatar}')` }"
          ></div>
          <div class="myplayer_message_name">{{ item.name }}</div>
        </div>
        <div class="myplayer_message_area_content_wrap">
          <div class="myplayer_message_area_title">{{ item.title }}</div>
          <div class="myplayer_message_area_text">
            {{ item.text }}
          </div>
        </div>
        <div class="myplayer_message_area_more_wrap">
          <div class="myplayer_message_area_day">
            {{ item.postdate }}
          </div>
          <div
            class="myplayer_message_area_more"
            @click="myplayer_message_more_btn(item)"
          >
            more
          </div>
        </div>
        <input type="checkbox" class="myplayer_message_area_checkbox" />
      </div>
      <div
        class="myplayer_message_more_wrap"
        v-if="visiblePosts < $store.state.myplayerMessageCard.length"
      >
        <div class="myplayer_message_more_group" @click="showMorePosts">
          <div class="myplayer_message_more">觀看更多</div>
          <div class="myplayer_message_more_wrap_right">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </div>
        </div>
      </div>
    </div>
    <div class="myplayer_message_editPen">
      <div class="myplayer_message_editPen_wrap" @click="editPenVisible">
        <font-awesome-icon
          :icon="['fas', 'plus']"
          class="myplayer_message_editPen_item"
        />
      </div>
    </div>
  </section>
  <OverlayComponent
    type="msgPopups"
    :msgData="msgData"
    v-if="isVisible"
    @closeOverlay="closeOverlay"
  />
  <OverlayComponent
    type="MsgAdd"
    v-if="isShowup"
    @closeOverlay="closeEditPen"
  />
</template>
<script>
import useStorage from "@/composables/data/useStorage";
import OverlayComponent from "../utilities/OverlayComponent.vue";
import getData from "@/composables/data/getData";
const { getSubCollectionDocuments, getDocument } = getData();
const { getPicsLink } = useStorage();
export default {
  components: {
    OverlayComponent,
  },
  async mounted() {
    this.$store.state.isPending = true;
    const posts = await getSubCollectionDocuments(
      {
        collectionName: "TEAMS",
        documentId: this.$route.params.id,
        subCollectionName: "POST",
      },
      [],
      ["postdate"],
      true
    );

    for (let i = 0; i < posts.length; i++) {
      const member = await getDocument("MEMBERS", posts[i].user_id);
      posts[i].name = member.lastname + member.firstname;

      const pics = await getPicsLink(
        1,
        `images/MEMBERS/${posts[i].user_id}`,
        "member"
      );

      posts[i].avatar = pics
        ? pics[0]
        : require("@/assets/images/icons/main-icon.png");
    }

    this.$store.state.myplayerMessageCard = [...posts];

    const options = { year: "numeric", month: "numeric", day: "numeric" };
    for (const item of this.$store.state.myplayerMessageCard) {
      const timestamp = {
        seconds: item.postdate.seconds,
        nanoseconds: item.postdate.nanoseconds,
      };
      const postdate = new Date(timestamp.seconds * 1000);
      item.postdate = postdate.toLocaleDateString(undefined, options);
    }
    this.$store.state.isPending = false;
  },

  emits: ["openPopup"],

  data() {
    return {
      myplayer_message_card: [
        // {
        //   id: "1",
        //   avatar: require("/src/assets/images/myplayer_team/myplayer_card/player_1.jpg"),
        //   account: "咖里梵",
        //   title: "猛虎隊弟兄讚啦",
        //   typing_text:
        //     "作為這支球隊的球員，我感到無比榮幸和感恩。加入這個球隊是我的夢想成真，我將以全心全意的奉獻和努力來回報這份機會。每一次踏上球場，我都感受到一種無法言喻的熱血沸騰，我投入每一個瞬間，追求每一個細節的完美，這是我對自己和球隊的責任，我深信只有通過不斷的努力和訓練，我才能夠成為更好的球員。與隊友們的團結合作是我們的力量所在",
        //   day: "-2023.07.02",
        //   more: "more",
        // },
        // {
        //   id: "2",
        //   avatar: require("/src/assets/images/myplayer_team/myplayer_card/player_2.jpg"),
        //   account: "麥噹噹",
        //   title: "謝謝大家~~",
        //   typing_text:
        //     "球迷們的熱情和支持是我們最大的動力。他們的歡呼和呐喊，能夠點燃我們心中的火焰，讓我們更加堅定地奮鬥。我將竭盡所能，用最好的表現回報球迷們的愛戴！",
        //   day: "-2023.06.30",
        //   more: "more",
        // },
        // {
        //   id: "3",
        //   avatar: require("/src/assets/images/myplayer_team/myplayer_card/player_3.jpg"),
        //   account: "和寶王",
        //   title: "進步神速的原因",
        //   typing_text:
        //     "在球場上，每一次揮棒、每一次守備，我都能感受到那份純粹的快樂和投入，無論是在勝利的時刻還是挫折的時刻，我都堅信著自己的能力，並且從每一次的比賽中學習和成長。球迷們的熱情和支持是我們最大的動力，他們的歡呼和呐喊，能夠點燃我們心中的火焰，讓我們更加堅定地奮鬥！我將竭盡所能，用最好的表現回報球迷們的愛戴，他們的存在使我們更加意識到自己的責任和使命，作為球隊的一員，我知道自己身上肩負著巨大的責任和期望，我會不斷挑戰自己，追求卓越，努力成為球隊的關鍵人物。我相信通過團隊的努力和合作，我們能夠創造出屬於我們的傳奇。",
        //   day: "-2023.06.28",
        //   more: "more",
        // },
        // {
        //   id: "4",
        //   avatar: require("/src/assets/images/myplayer_team/myplayer_card/player_4.jpg"),
        //   account: "珍茱乃茶",
        //   title: "走了 打球阿!!",
        //   typing_text:
        //     "作為這支球隊的球員，我感到非常榮幸和幸福。每一次穿上球衣，踏上球場，我都能感受到那份獨特的熱情和自豪。這是我夢寐以求的機會，我將用盡全力去追逐我的棒球夢想。與我的隊友們一起訓練和比賽是一種難以言喻的榮幸。我們彼此相互激勵，相互扶持，共同成長。在球場上，我們不僅是球隊，更是一個充滿著友誼和團結的家庭。我相信這份團隊精神和凝聚力將使我們在每一場比賽中更加強大，球迷們是我們的力量源泉，，他們的支持和歡呼聲為我們帶來無限的動力和信心。在球場上，我能夠感受到他們對我們的熱愛和期待，這激勵著我們不斷超越自我，追求卓越。我們將竭盡所能，用最好的表現回報他們對我們的支持，作為球隊的一員，我將以積極的態度和無懈可擊的努力，追求卓越。我將不斷提升自己的技能和戰術知識，為球隊帶來穩定的表現",
        //   day: "-2023.06.22",
        //   more: "more",
        // },
        // {
        //   id: "5",
        //   avatar: require("/src/assets/images/myplayer_team/myplayer_card/player_5.jpg"),
        //   account: "考肉梵",
        //   title: "教練我想打球",
        //   typing_text:
        //     "作為這支球隊的球員，我感到充滿自豪和自信。每一次穿上球衣，踏上球場，我都能感受到那份無法言喻的激情和動力，這是我熱愛棒球的真正魅力。在球場上，我不僅是一個球員，更是一個戰士，我以無懼的勇氣和決心投身於比賽，每一分每一秒都充滿著渴望勝利的熱血，我不僅代表自己，更代表著這支球隊的榮譽和價值。與我的隊友們一起奮鬥是一種特別的連結和情誼，我們相互扶持，共同成長，共同進步，在球場上，我們彼此信任，彼此依賴，共同攜手戰勝困難，取得勝利，我相信這份團隊合作的力量能夠讓我們無往不利，球迷們是我們最強大的後盾，他們的支持和愛戴給予我們無盡的勇氣和動力，每一次看到他們在看台上為我們歡呼，我都感到無比感激和振奮，我們將竭盡所能，為他們帶來驕傲和成就，因為他們就是我們的第十二人",
        //   day: "-2023.06.22",
        //   more: "more",
        // },
        // {
        //   id: "6",
        //   avatar: require("/src/assets/images/myplayer_team/myplayer_card/player_4.jpg"),
        //   account: "珍茱乃茶",
        //   title: "走了 打球阿!!",
        //   typing_text:
        //     "作為這支球隊的球員，我感到非常榮幸和幸福。每一次穿上球衣，踏上球場，我都能感受到那份獨特的熱情和自豪。這是我夢寐以求的機會，我將用盡全力去追逐我的棒球夢想。與我的隊友們一起訓練和比賽是一種難以言喻的榮幸。我們彼此相互激勵，相互扶持，共同成長。在球場上，我們不僅是球隊，更是一個充滿著友誼和團結的家庭。我相信這份團隊精神和凝聚力將使我們在每一場比賽中更加強大，球迷們是我們的力量源泉，，他們的支持和歡呼聲為我們帶來無限的動力和信心。在球場上，我能夠感受到他們對我們的熱愛和期待，這激勵著我們不斷超越自我，追求卓越。我們將竭盡所能，用最好的表現回報他們對我們的支持，作為球隊的一員，我將以積極的態度和無懈可擊的努力，追求卓越。我將不斷提升自己的技能和戰術知識，為球隊帶來穩定的表現",
        //   day: "-2023.06.22",
        //   more: "more",
        // },
        // {
        //   id: "7",
        //   avatar: require("/src/assets/images/myplayer_team/myplayer_card/player_5.jpg"),
        //   account: "考肉梵",
        //   title: "教練我想打球",
        //   typing_text:
        //     "作為這支球隊的球員，我感到充滿自豪和自信。每一次穿上球衣，踏上球場，我都能感受到那份無法言喻的激情和動力，這是我熱愛棒球的真正魅力。在球場上，我不僅是一個球員，更是一個戰士，我以無懼的勇氣和決心投身於比賽，每一分每一秒都充滿著渴望勝利的熱血，我不僅代表自己，更代表著這支球隊的榮譽和價值。與我的隊友們一起奮鬥是一種特別的連結和情誼，我們相互扶持，共同成長，共同進步，在球場上，我們彼此信任，彼此依賴，共同攜手戰勝困難，取得勝利，我相信這份團隊合作的力量能夠讓我們無往不利，球迷們是我們最強大的後盾，他們的支持和愛戴給予我們無盡的勇氣和動力，每一次看到他們在看台上為我們歡呼，我都感到無比感激和振奮，我們將竭盡所能，為他們帶來驕傲和成就，因為他們就是我們的第十二人",
        //   day: "-2023.06.22",
        //   more: "more",
        // },
      ],
      visiblePosts: 6,
      additionalPosts: 6,
      isVisible: false,
      isShowup: false,
      msgData: {},
    };
  },

  methods: {
    closeOverlay() {
      this.$store.state.myplayerEditOpen = false;
      this.isVisible = false;
    },
    closeEditPen() {
      this.isShowup = false;
    },
    myplayer_message_more_btn(data) {
      this.msgData = data;
      this.isVisible = true;
    },
    showMorePosts() {
      if (this.visiblePosts < this.$store.state.myplayerMessageCard.length) {
        this.visiblePosts += this.additionalPosts;
      }
    },
    editPenVisible() {
      this.isShowup = true;
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
    display: flex;
    background-color: var(--secondary-blue-3);
    padding: 12rem 0;
    .myplayer_message_area_card_wrap {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // overflow: scroll;
      .myplayer_message_more_wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .myplayer_message_more_group {
          width: 15rem;
          display: flex;
          justify-content: center;
          background-color: var(--primary-blue);
          border-radius: 2rem;
          padding: 1rem 1.5rem;
          border: 1px solid transparent;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            transition: 0.3s;
            opacity: 0.8;
            border: 1px solid var(--primary-blue);
          }
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
        padding: 1rem;
        margin-bottom: 12rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: var(--round);
        box-shadow: var(--shadow-wide);

        &:nth-child(even) {
          // margin-top: 2.5rem;
          position: relative;
          top: 3.5rem;
        }

        .myplayer_message_avatar_wrap {
          width: 12.5rem;
          position: absolute;
          bottom: 100%;
          right: calc(50% - 100px);
          transform: translateY(50%);

          .myplayer_message_avatar {
            width: 12.5rem;
            height: 12.5rem;
            border-radius: 50%;
            // background-image: url(../assets/images/myplayer_team/myplayer_card/player_1.jpg);
            background-repeat: no-repeat;
            background-size: cover;
          }
          .myplayer_message_name {
            width: 12.5rem;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-blue);
            text-align: center;
            padding-top: 2rem;
          }
        }
        .myplayer_message_area_content_wrap {
          width: 80%;
          margin: 0 auto;
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
            color: var(--input-label-gray);
            margin: 1rem;
            text-indent: 2em;
            display: -webkit-box;
            -webkit-line-clamp: 10;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            white-space: normal;
            overflow: hidden;
          }
        }
        .myplayer_message_area_more_wrap {
          // border: 1px solid red;
          width: 80%;
          margin: auto;
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
            transition: 0.3s;
            &:hover {
              color: var(--primary-blue);
              background-color: var(--pale-white);
              border: 1px solid var(--primary-blue);
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
  &_message_editPen {
    // background-color: purple;
    margin-right: 2rem;
    &_wrap {
      position: sticky;
      top: 150px;
      right: 10px;
    }
    &_item {
      width: 2rem;
      height: 2rem;
      background-color: var(--pale-white);
      color: var(--primary-blue);
      padding: 1rem;
      border-radius: 50%;
      display: block;
      cursor: pointer;
      transition: 0.3s;
    }
    &_item:hover {
      background-color: var(--primary-blue);
      color: var(--pale-white);
      transition: 0.3s;
    }
  }
  &_message_area_checkbox {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    appearance: none;
    border: 1px solid var(--primary-blue);
    position: absolute;
    right: 10px;
    display: none;

    &:checked::after {
      content: "✓";
      font-size: 2rem;
      font-weight: 600;
      color: var(--primary-blue);
      position: absolute;
      right: 2.5px;
      top: -12.5px;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap
    .myplayer_message_name {
    width: 10.5rem;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-blue);
    text-align: center;
    padding-top: 2rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap {
    width: 10.5rem;
    position: absolute;
    bottom: 100%;
    right: calc(50% - 5.25rem);
    transform: translateY(50%);
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap
    .myplayer_message_avatar {
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_area_more_wrap
    .myplayer_message_area_more {
    margin-right: 0.5rem;
  }
  .myplayer_message_area {
    padding: 3rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .myplayer_message_area {
    padding: 2.5rem;
  }
  .myplayer_message_area .myplayer_message_title_wrap {
    width: 10rem;
  }
  .myplayer_message_area
    .myplayer_message_title_wrap
    .myplayer_message_area_title {
    font-size: 2rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap
    .myplayer_message_name {
    width: 10.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-blue);
    text-align: center;
    padding-top: 1.5rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap {
    width: 10.5rem;
    position: absolute;
    bottom: 100%;
    right: calc(50% - 5.25rem);
    transform: translateY(50%);
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap
    .myplayer_message_avatar {
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_area_more_wrap
    .myplayer_message_area_more {
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card {
    padding: 1rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_more_wrap
    .myplayer_message_more_group {
    width: 12rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_more_wrap
    .myplayer_message_more {
    font-size: 1rem;
  }
}

@media screen and (max-width: 767px) {
  .myplayer_message_area {
    padding: 2rem;
  }
  .myplayer_message_area_content .myplayer_message_area_card_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .myplayer_message_area .myplayer_message_title_wrap {
    width: 10rem;
  }
  .myplayer_message_area
    .myplayer_message_title_wrap
    .myplayer_message_area_title {
    font-size: 2rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap
    .myplayer_message_name {
    width: 10.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-blue);
    text-align: center;
    padding-top: 1.5rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap {
    width: 10.5rem;
    position: absolute;
    bottom: 100%;
    right: calc(50% - 5.25rem);
    transform: translateY(50%);
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_avatar_wrap
    .myplayer_message_avatar {
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_area_more_wrap
    .myplayer_message_area_more {
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    transform: translateY(30px);
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card {
    padding: 1rem;
    width: 100%;
    &:nth-child(even) {
      // margin-top: 2.5rem;
      position: relative;
      top: 0rem;
    }
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_more_wrap
    .myplayer_message_more_group {
    width: 12rem;
    padding: 1rem 0.5rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_more_wrap {
    width: 60%;
    padding: 0rem 0.5rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_more_wrap
    .myplayer_message_more {
    font-size: 1rem;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_area_more_wrap
    .myplayer_message_area_day {
    font-size: 1px;
    transform: translateY(-20px);
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_area_content_wrap
    .myplayer_message_area_text {
    display: -webkit-box;
    margin-top: 1rem;
    padding: 0;
    font-size: 1rem;
    color: var(--primary-blue);
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .myplayer_message_area_content
    .myplayer_message_area_card_wrap
    .myplayer_message_area_card
    .myplayer_message_area_more_wrap {
    padding: 2rem 0rem 3rem 0rem;
  }
  .myplayer_message_editPen {
    margin: 0;
    &_item,
    &_trash {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
