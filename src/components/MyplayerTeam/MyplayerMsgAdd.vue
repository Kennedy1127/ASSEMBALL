<template>
  <div class="myplayerMsgAdd">
    <div class="myplayerMsgAdd_wrap">
      <div class="myplayerMsgAdd_wrap_item">
        <div class="myplayerMsgAdd_wrap_title">標題:</div>
        <div class="myplayerMsgAdd_wrap_underline">
          <input
            type="text"
            placeholder="請輸入標題"
            class="myplayerMsgAdd_title_text"
            v-model="title_text"
          />
        </div>
      </div>
      <div class="myplayerMsgAdd_wrap_item">
        <div class="myplayerMsgAdd_wrap_subtitle">內文:</div>
        <div class="myplayerMsgAdd_textBox">
          <textarea
            placeholder="請輸入內容"
            class="myplayerMsgAdd_content"
            v-model="content_text"
          ></textarea>
        </div>
      </div>
      <div class="myplayerMsgAdd_wrap_item">
        <button class="myplayerMsgAdd_confirm" @click="submitData">送出</button>
      </div>
    </div>
  </div>
</template>
<script>
import { auth, timestamp } from "@/firebase/config";
import useStorage from "@/composables/data/useStorage";
import useData from "@/composables/data/useData";
import getData from "@/composables/data/getData";
const { getSubCollectionDocuments, getDocument } = getData();
const { getPicsLink } = useStorage();

export default {
  emits: ["closeOverlay"],

  data() {
    return {
      content_text: "",
      title_text: "",
      status: true,
      myplayer_MsgAdd: [],
    };
  },
  methods: {
    async submitData() {
      const data = {
        text: this.content_text,
        title: this.title_text,
        postdate: timestamp,
        status: true,
        user_id: auth.currentUser.uid,
      };
      this.$store.state.isPending = true;
      // console.log(data);
      const { setDataSubCollection } = useData();
      const id = await setDataSubCollection(
        {
          collectionName: "TEAMS",
          documentId: this.$route.params.id, //you have to change this id
          subCollectionName: "POST",
        },
        data
      );

      this.$emit("closeModal");

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
  },
};
</script>
<style lang="scss">
.myplayerMsgAdd {
  width: 30%;
  border: 1px solid var(--primary-blue);
  border-radius: 0.5rem;
  background-color: var(--pale-white);
  margin: 10rem auto 0rem auto;
  &_wrap {
    // width: 80%;
    margin: auto;
    padding: 1.5rem 0rem;
    // border: 1px solid red;
    &_item {
      display: flex;
      justify-content: center;
      // padding: 0rem 20px;
    }
    &_item:nth-child(2) {
      margin-top: 1rem;
    }
    &_item:nth-child(3) {
      margin-top: 3rem;
    }
    &_title {
      font-size: 1rem;
      color: var(--primary-blue);
    }
    &_underline {
      border-bottom: 1px solid var(--primary-blue);
      margin-left: 1rem;
      // margin: 1rem;
      // padding: 1rem;
    }
    &_subtitle {
      font-size: 1rem;
      color: var(--primary-blue);
    }
  }
  &_textBox {
    border: 1px solid var(--primary-blue);
    margin-left: 1rem;
    padding: 0.5rem;
    height: 400px;
  }
  &_confirm {
    background-color: var(--primary-blue);
    color: var(--pale-white);
    padding: 0.5rem 1.5rem;
    border-radius: 1.5rem;
    transition: 0.3s;
    border: 1px solid transparent;
    &:hover {
      transition: 0.3s;
      background-color: var(--pale-white);
      color: var(--primary-blue);
      border: 1px solid var(--primary-blue);
    }
  }
  &_title_text {
    padding: 0.5rem;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
  &_content {
    width: 100%;
    padding: 1rem;
    height: 100%;
    font-size: 1rem;
    border: none;
    resize: none;
    &:focus {
      outline: none;
    }
  }
}
@media screen and (max-width: 767px) {
  .myplayerMsgAdd {
    width: 80%;
  }
}
</style>
