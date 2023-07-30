<template>
  <div class="home_message_title">
    <h2>
      <router-link :to="{ name: 'myplayerTeam' }"
        >交流留言板<Icon type="ios-arrow-dropright-circle"
      /></router-link>
    </h2>
    <p>
      連結熱愛棒球的全球大家庭，一同分享熱情、討論戰術，共同創造無限棒球樂趣！
    </p>
  </div>
  <div class="home_message_all">
    <div class="home_message_all_pic">
      <div
        class="home_message_all_pic_round home_message_all_pic_round--1"
      ></div>
      <div
        class="home_message_all_pic_round home_message_all_pic_round--2"
      ></div>
      <div
        class="home_message_all_pic_round home_message_all_pic_round--3"
      ></div>
      <div class="home_message_all_pic_img">
        <img
          class="home_message_all_pic_img_phone"
          src="~@/assets/images/index/home_message_phone.png"
          alt="phone"
        />
        <img
          class="home_message_all_pic_img_messading"
          src="~@/assets/images/index/home_message_messaging.png"
          alt="messaging"
        />
        <img
          class="home_message_all_pic_img_people"
          src="~@/assets/images/index/home_message_people.png"
          alt="people"
        />
      </div>
    </div>
    <div v-if="showMessageTextFirst" style="z-index: 2">
      <div class="home_message_all_text" v-for="item in messageText">
        <div class="home_message_all_text_header">
          <h3>
            <router-link :to="{ name: 'myplayerTeam' }">{{
              item.title
            }}</router-link>
          </h3>
          <span class="home_message_all_text_header_date">
            {{ item.date }}
          </span>
          <span
            :class="{
              home_message_all_text_header_tag: true,
              'home_message_all_text_header_tag--new': item.tag === 'NEW',
            }"
          >
            {{ item.tag }}
          </span>
        </div>
        <div class="home_message_all_text_section">
          <span class="home_message_all_text_section_text">
            {{ item.text }}
          </span>
          <button
            @click="goToMyPlayerTeam(item.id)"
            class="home_message_all_text_section_btn"
          >
            <Icon type="ios-arrow-dropright-circle" />{{ item.btn }}
          </button>
        </div>
      </div>
    </div>
    <div v-else-if="showMessageTextSecond" style="z-index: 2">
      <div class="home_message_all_text" v-for="item in messageTextReplace">
        <div class="home_message_all_text_header">
          <h3>
            <router-link :to="{ name: 'myplayerTeam' }">{{
              item.title
            }}</router-link>
          </h3>
          <span class="home_message_all_text_header_date">
            {{ item.date }}
          </span>
          <span
            :class="{
              home_message_all_text_header_tag: true,
              'home_message_all_text_header_tag--new': item.tag === 'NEW',
            }"
          >
            {{ item.tag }}
          </span>
        </div>
        <div class="home_message_all_text_section">
          <span class="home_message_all_text_section_text">
            {{ item.text }}
          </span>
          <button
            @click="goToMyPlayerTeam(item.id)"
            class="home_message_all_text_section_btn"
          >
            <Icon type="ios-arrow-dropright-circle" />{{ item.btn }}
          </button>
        </div>
      </div>
    </div>
    <div v-else style="z-index: 2">
      <div class="home_message_all_text" v-for="item in messageTextReplaceTwo">
        <div class="home_message_all_text_header">
          <h3>
            <router-link :to="{ name: 'myplayerTeam' }">{{
              item.title
            }}</router-link>
          </h3>
          <span class="home_message_all_text_header_date">
            {{ item.date }}
          </span>
          <span
            :class="{
              home_message_all_text_header_tag: true,
              'home_message_all_text_header_tag--new': item.tag === 'NEW',
            }"
          >
            {{ item.tag }}
          </span>
        </div>
        <div class="home_message_all_text_section">
          <span class="home_message_all_text_section_text">
            {{ item.text }}
          </span>
          <button
            @click="goToMyPlayerTeam(item.id)"
            class="home_message_all_text_section_btn"
          >
            <Icon type="ios-arrow-dropright-circle" />{{ item.btn }}
          </button>
        </div>
      </div>
    </div>
    <div class="home_message_all_btn">
      <button @click="toggleMessageText">
        <Icon type="ios-baseball-outline" />VIEW MORE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessageTextFirst: true,
      showMessageTextSecond: false,
      messageText: [
        {
          title: "紐約野馬隊投手表現",
          date: "2023/04/28",
          tag: "HOT",
          text: "有沒有人對本週的比賽結果感到意外？我覺得野馬隊的表現真是出人意料，他們的投手表現......",
          btn: "更多",
          id: "1",
        },
        {
          title: "如何提升棒球技術？",
          date: "2023/06/18",
          text: "對於棒球訓練和技術提升有沒有什麼好的建議？我最近在練習打擊，想聽聽大家的經驗分享......",
          btn: "更多",
          id: "1",
        },
        {
          title: "球隊部署技巧分享",
          date: "2023/07/21",
          tag: "HOT",
          text: "對於這個球隊的戰術部署有什麼看法嗎？我覺得教練在換投手的時機上有待改進，有時候明......",
          btn: "更多",
          id: "1",
        },
        {
          title: "這個賽季最熱門的球隊？",
          date: "2023/07/28",
          tag: "NEW",
          text: "哪支球隊在這個賽季的戰績最令你驚艷？我覺得小熊隊從開季以來一直保持穩定的表現，實......",
          btn: "更多",
          id: "1",
        },
        {
          title: "棒球書籍和紀錄片推薦",
          date: "2023/05/14",
          text: "大家有沒有推薦的棒球書籍或紀錄片？想要深入了解棒球歷史和名人堂球員的故事！",
          btn: "更多",
          id: "1",
        },
      ],
      messageTextReplace: [
        {
          title: "球場的美食評比",
          date: "2023/06/18",
          text: "上次在新莊棒球場吃到超美味的熱狗，還有其他球場的美食值得嘗試嗎？大家來分享一下自己的球場美食經驗！",
          btn: "更多",
          id: "1",
        },
        {
          title: "2023賽季球隊前景",
          date: "2023/08/01",
          tag: "HOT",
          text: "我覺得紐約小熊球隊今年的陣容非常強大，有望在賽季中取得突破性的表現！",
          btn: "更多",
          id: "1",
        },
        {
          title: "最新賽事天使隊戰績分析",
          date: "2023/08/11",
          tag: "NEW",
          text: "天使隊這此的戰績需要改進，應該更加關注防守。大家對此有什麼看法？",
          btn: "更多",
          id: "1",
        },
        {
          title: "球迷見面會安排",
          date: "2023/07/14",
          tag: "HOT",
          text: "我建議波士頓爆豪克應該組織一次球迷見面會，讓我們更加接近球隊，有什麼好的建議嗎？",
          btn: "更多",
          id: "1",
        },
        {
          title: "如何治癒比賽情緒？",
          date: "2023/08/19",
          tag: "NEW",
          text: "雖然這次公牛隊輸掉了比賽，心情沮喪了一陣子，但我相信下一場他們會反彈，各位球迷們一起加油吧！",
          btn: "更多",
          id: "1",
        },
      ],
      messageTextReplaceTwo: [
        {
          title: "球場風采攝影",
          date: "2023/07/08",
          text: "大家有沒有拍到球場內外美麗的風景或球員帥氣動作的瞬間？快上傳到球隊相簿分享給球迷們一起欣賞吧！",
          btn: "更多",
          id: "1",
        },
        {
          title: "國際棒球文化交流",
          date: "2023/08/03",
          tag: "NEW",
          text: "台灣的棒球文化與其他國家的球隊文化有何異同？一起來探討各自的獨特之處吧！",
          btn: "更多",
          id: "1",
        },
        {
          title: "2023最佳魅力球員是誰？",
          date: "2023/08/01",
          text: "你們心目中最有魅力的球員是誰？一起來投票選出球隊的風采代表！",
          tag: "NEW",
          btn: "更多",
          id: "1",
        },
        {
          title: "二手棒球裝備和收藏分享",
          date: "2023/07/22",
          tag: "HOT",
          text: "有沒有什麼好的棒球裝備推薦？棒球迷們快來分享一下你們的使用心得或者是多年的珍貴收藏吧～",
          btn: "更多",
          id: "1",
        },
        {
          title: "討論球場安全的重要",
          date: "2023/06/28",
          text: "球場的安全措施是否到位？大家有沒有什麼建議來提高球場的安全性？分享你對球場安全措施的建議和改進想法吧！",
          btn: "更多",
          id: "1",
        },
      ],
    };
  },
  methods: {
    goToMyPlayerTeam(id) {
      // 使用 $router.push 進行路由導航
      this.$router.push({ name: "myplayerTeam", params: { id } });
    },
    toggleMessageText() {
      if (this.showMessageTextFirst) {
        this.showMessageTextFirst = false;
        this.showMessageTextSecond = true;
      } else if (this.showMessageTextSecond) {
        this.showMessageTextSecond = false;
      } else {
        this.showMessageTextFirst = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home_message_title {
  padding: 2rem 4rem 2rem 4rem;
  border-bottom: 3px solid var(--primary-blue);
  & h2 {
    & a {
      font-size: 2.5rem;
      color: var(--primary-blue);
      & i {
        vertical-align: baseline;
        margin-left: 0.5rem;
      }
    }
  }
  & p {
    font-size: 1.25rem;
    color: var(--primary-blue);
  }
}
.home_message_all {
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  &_pic {
    &_round {
      position: absolute;
      border-radius: 50%;
      animation: round;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    &_round--1 {
      width: 300px;
      height: 300px;
      background-color: var(--secondary-blue-3);
      left: -2rem;
      top: 2rem;
      animation-duration: 3.5s;
    }
    &_round--2 {
      width: 150px;
      height: 150px;
      bottom: 4rem;
      left: 30%;
      background-color: var(--secondary-blue-1);
      animation-duration: 2.5s;
    }
    &_round--3 {
      width: 350px;
      height: 350px;
      right: 2rem;
      top: 2rem;
      background-color: var(--secondary-blue-4);
      animation-duration: 3s;
    }
    @keyframes round {
      0% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(-18px, 0);
      }
    }
    &_img {
      & img {
        width: 40%;
        position: absolute;
        top: 0;
        left: 2rem;
      }
      &_phone {
        animation: meaasge;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-duration: 4s;
      }
      &_messading {
        animation: meaasge;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-duration: 3s;
      }
      &_people {
        animation: meaasge;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-duration: 3.5s;
      }
    }
    @keyframes meaasge {
      0% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(0, -20px);
      }
    }
  }
  &_text {
    margin-left: auto;
    margin-right: 2rem;
    z-index: 100;
    width: 56%;
    color: var(--primary-blue);
    border-bottom: 2px solid var(--secondary-blue-1);
    &_header {
      display: flex;
      align-items: end;
      margin-top: 1rem;
      & h3 {
        font-size: 1.5rem;
        & a {
          color: var(--primary-blue);
        }
      }
      &_date {
        font-size: 1.25rem;
        margin-left: 1rem;
      }
      &_tag {
        width: 3.5rem;
        font-size: 1rem;
        margin-left: 1rem;
        background-color: var(--caution-red);
        color: #fff;
        border-radius: var(--round);
        text-align: center;
        font-family: "Montserrat";
      }
      &_tag--new {
        background-color: var(--error-yellow);
      }
    }
    &_section {
      display: flex;
      justify-content: space-between;
      padding-bottom: 1rem;
      &_text {
        width: 85%;
        font-size: 1rem;
        margin-top: 0.5rem;
        color: var(--secondary-gray-1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &_btn {
        width: 6rem;
        height: 2rem;
        border-radius: 30px;
        border: 1px solid var(--primary-blue);
        background-color: #fff;
        color: var(--primary-blue);
        & i {
          font-size: 1rem;
          margin-right: 0.25rem;
        }
      }
      &_btn:hover {
        border: 1px solid var(--primary-blue);
        background-color: var(--primary-blue);
        color: #fff;
        vertical-align: middle;
      }
    }
  }
  &_btn {
    margin: 3rem 2rem 1rem 2rem;
    text-align: right;
    & button {
      width: 13rem;
      font-size: 1.25rem;
      font-family: "Montserrat";
      border-radius: 30px;
      padding: 0.5rem;
      background-color: var(--primary-blue);
      color: #fff;
      border: 1px solid var(--primary-blue);
      & i {
        font-size: 1.75rem;
        font-weight: 500;
        margin-right: 0.5rem;
        vertical-align: sub;
      }
    }
    & button:hover {
      border: 1px solid var(--primary-blue);
      background-color: #fff;
      color: var(--primary-blue);
    }
  }
}
@media screen and (max-width: 420px) {
  .home_message_title {
    padding: 1rem;
    text-align: center;
    & h2 {
      & a {
        font-size: 2.5rem;
        color: var(--primary-blue);
        & i {
          vertical-align: baseline;
          margin-left: 0.75rem;
        }
      }
    }
    & p {
      font-size: 1rem;
      font-weight: 500;
      color: var(--primary-blue);
    }
  }
  .home_message_all {
    display: flex;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow: hidden;
    &_pic {
      &_round {
        position: absolute;
        border-radius: 50%;
        animation: round;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
      &_round--1 {
        width: 180px;
        height: 180px;
        background-color: var(--secondary-blue-3);
        left: -2rem;
        top: 30rem;
        animation-duration: 3.5s;
      }
      &_round--2 {
        display: none;
      }
      &_round--3 {
        width: 250px;
        height: 250px;
        right: -10%;
        top: 2rem;
        background-color: var(--secondary-blue-4);
        animation-duration: 3s;
      }
      @keyframes round {
        0% {
          transform: translate(0, 0px);
        }
        100% {
          transform: translate(-18px, 0);
        }
      }
      &_img {
        display: none;
      }
    }
    &_text {
      width: 100%;
      margin: auto;
      z-index: 1;
      color: var(--primary-blue);
      border-bottom: 2px solid var(--secondary-blue-1);
      &_header {
        display: flex;
        flex-wrap: wrap;
        align-items: end;
        margin-top: 1rem;
        & h3 {
          font-size: 1.5rem;
          width: 100%;
          & a {
            color: var(--primary-blue);
          }
        }
        &_date {
          font-size: 1.25rem;
          margin-left: 0rem;
        }
        &_tag {
          width: 3.5rem;
          font-size: 1rem;
          margin-left: 1rem;
          background-color: var(--caution-red);
          color: #fff;
          border-radius: var(--round);
          text-align: center;
          font-family: "Montserrat";
        }
      }
      &_section {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;
        &_text {
          width: 85%;
          font-size: 1rem;
          margin-top: 0.5rem;
          color: var(--secondary-gray-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    &_btn {
      margin: auto;
      margin-top: 1.25rem;
      margin-bottom: 1rem;
      text-align: right;
      & button {
        width: 13rem;
        font-size: 1.25rem;
        font-family: "Montserrat";
        border-radius: 30px;
        padding: 0.5rem;
        background-color: var(--primary-blue);
        color: #fff;
        border: 1px solid var(--primary-blue);
        & i {
          font-size: 1.75rem;
          font-weight: 500;
          margin-right: 0.5rem;
          vertical-align: sub;
        }
      }
      & button:hover {
        border: 1px solid var(--primary-blue);
        background-color: #fff;
        color: var(--primary-blue);
      }
    }
  }
}
</style>
