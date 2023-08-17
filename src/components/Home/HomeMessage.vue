<template>
  <div class="home_message_title">
    <h2>
      <router-link
        :to="{ name: 'myplayerTeam', params: { id: '5KhosRZOJ7TmLfECUb5D' } }"
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
    <div
      class="home_message_all_text"
      v-for="item in visibleMessageText"
      :key="item.id"
    >
      <div class="home_message_all_text_header">
        <h3>
          <router-link
            :to="{
              name: 'myplayerTeam',
              params: { id: '5KhosRZOJ7TmLfECUb5D' },
            }"
            >{{ item.title }}</router-link
          >
        </h3>
        <span class="home_message_all_text_header_date">
          {{ item.postdate }}
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
          <Icon type="ios-arrow-dropright-circle" />更多
        </button>
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
  async mounted() {
    const allData = await this.$store.dispatch("getMyplayerTeam");
    console.log(allData);
    this.messageText = allData.teamPostData;

    const options = { year: "numeric", month: "numeric", day: "numeric" };
    for (const item of this.messageText) {
      const timestamp = {
        seconds: item.postdate.seconds,
        nanoseconds: item.postdate.nanoseconds,
      };
      const postdate = new Date(timestamp.seconds * 1000);
      item.postdate = postdate.toLocaleDateString(undefined, options);
    }
    this.visibleMessageText = this.messageText.slice(0, this.displayLimit);
  },
  data() {
    return {
      messageText: [],
      displayLimit: 5,
      visibleMessageText: [],
    };
  },
  methods: {
    // goToMyPlayerTeam(id) {
    //   this.$router.push({
    //     name: "myplayerTeam",
    //     query: { scrollToComments: true },
    //   });
    // },
    goToMyPlayerTeam(id) {
      // 使用 Vue Router 的 push 方法進行導航，並在回調函式中執行滾動操作
      this.$router.push({
        name: "myplayerTeam",
        params: { id }, // 使用 params 而不是 query
        query: { scrollToComments: true },
      });
    },
    toggleMessageText() {
      if (this.displayLimit === 5) {
        const shuffledArray = [...this.messageText];
        this.shuffleArray(shuffledArray);
        this.visibleMessageText = shuffledArray.slice(0, this.displayLimit);
      } else {
        this.displayLimit = 5;
        this.visibleMessageText = this.messageText.slice(0, this.displayLimit);
      }
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
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
    z-index: 0;
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
        transition: 0.3s;
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
        transition: 0.3s;
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
      transition: 0.3s;
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
      transition: 0.3s;
    }
  }
}
@media screen and (max-width: 1920px) {
  .home_message_all {
    &_pic {
      @keyframes round {
        0% {
          transform: translate(0, 0px);
        }
        100% {
          transform: translate(-25px, 0);
        }
      }
      &_img {
        & img {
          width: 37%;
          position: absolute;
          top: 0;
          left: 2rem;
        }
      }
      @keyframes meaasge {
        0% {
          transform: translate(0, 0px);
        }
        100% {
          transform: translate(0, -25px);
        }
      }
    }
    &_text {
      margin-right: 4rem;
    }
    &_btn {
      margin: 3rem 4rem 1rem 2rem;
    }
  }
}
@media screen and (max-width: 1600px) {
  .home_message_all {
    &_pic {
      &_img {
        & img {
          width: 40%;
          position: absolute;
          top: 1rem;
          left: 2rem;
        }
      }
    }
    &_text {
      margin-right: 3rem;
    }
    &_btn {
      margin: 3rem 3rem 1rem 2rem;
    }
  }
}
@media screen and (max-width: 1400px) {
  .home_message_all {
    &_pic {
      &_img {
        & img {
          width: 45%;
          position: absolute;
          top: 1rem;
          left: 0rem;
        }
      }
    }
    &_text {
      margin-right: 2rem;
    }
    &_btn {
      margin: 3rem 2rem 1rem 2rem;
    }
  }
}
@media screen and (max-width: 1280px) {
  .home_message_all {
    padding-left: 0rem;
    &_pic {
      &_img {
        & img {
          width: 45%;
          position: absolute;
          top: 3rem;
          left: -1.5rem;
        }
      }
    }
    &_text {
      margin-right: 1rem;
    }
    &_btn {
      margin: 3rem 1rem 1rem 2rem;
    }
  }
}
@media screen and (max-width: 1024px) {
  .home_message_all {
    display: flex;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    &_pic {
      &_round--1 {
        width: 250px;
        height: 250px;
        top: 5rem;
        left: -2rem;
      }
      &_round--2 {
        bottom: 2rem;
        left: 17%;
      }
      &_round--3 {
        width: 300px;
        height: 300px;
        right: -4rem;
        top: 1rem;
      }
      &_img {
        display: none;
      }
    }
    &_text {
      margin: auto;
      z-index: 100;
      width: 90%;
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
}
@media screen and (max-width: 768px) {
  .home_message_title {
    padding: 1.5rem;
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
      &_round--1 {
        width: 250px;
        height: 250px;
        top: 50%;
        left: -2rem;
      }
      &_round--2 {
        display: none;
      }
      &_round--3 {
        width: 300px;
        height: 300px;
        right: -4rem;
        top: 1rem;
      }
    }
    &_text {
      width: 90%;
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
