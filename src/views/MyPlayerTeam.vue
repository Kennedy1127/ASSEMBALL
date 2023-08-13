<template>
  <main class="myplayer">
    <MyplayerBanner></MyplayerBanner>

    <MyplayerCard />

    <MyplayerRaceList />

    <MyplayerGallery />

    <div ref="myplayerComments">
      <MyplayerMessage @openPopup="openPopup" />
    </div>

    <MyplayerPopups :postData="postData" />
  </main>
</template>
<script>
import MyplayerBanner from "@/components/MyplayerTeam/MyplayerBanner";
import MyplayerCard from "@/components/MyplayerTeam/MyplayerCard";
import MyplayerRaceList from "@/components/MyplayerTeam/MyplayerRaceList";
import MyplayerGallery from "@/components/MyplayerTeam/MyplayerGallery";
import MyplayerMessage from "@/components/MyplayerTeam/MyplayerMessage";
import MyplayerPopups from "@/components/MyplayerTeam/MyplayerPopups";
import { auth } from "@/firebase/config";

export default {
  components: {
    MyplayerBanner,
    MyplayerCard,
    MyplayerRaceList,
    MyplayerGallery,
    MyplayerMessage,
    MyplayerPopups,
  },
  mounted() {
    this.$store.dispatch("getMyplayerTeam");
    const scrollToComments = this.$route.query.scrollToComments;

    if (scrollToComments) {
      setTimeout(() => {
        const myplayerCommentsElement = this.$refs.myplayerComments;

        if (myplayerCommentsElement) {
          const verticalOffset = -90; // 調整這個數值來改變垂直方向的偏移
          const currentPosition = window.scrollY;
          const targetPosition =
            myplayerCommentsElement.offsetTop + verticalOffset;
          const scrollDistance = targetPosition - currentPosition;

          window.scrollBy({
            top: scrollDistance,
            left: 0,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  },
  data() {
    return {
      postData: {},
    };
  },

  methods: {
    openPopup(data) {
      console.log(data);
      this.postData = { ...data };
    },
    test() {
      console.log("test");
      console.log(this.$refs.myplayerComments);
      this.$refs.myplayerComments.scrollIntoView();

      setTimeout(() => {
        console.log("test aaa");
        this.$refs.myplayerComments.scrollIntoView();
      }, 100);
    },
  },
};
</script>

<style lang="scss">
.myplayer {
  margin: 0 auto;
}
</style>
