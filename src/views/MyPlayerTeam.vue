<template>
  <main class="myplayer">
    <MyplayerBanner></MyplayerBanner>

    <MyplayerCard />

    <MyplayerRaceList />

    <MyplayerGallery />

    <div ref="myplayerComments">
      <MyplayerMessage />
    </div>

    <MyplayerPopups />
  </main>
</template>
<script>
import MyplayerBanner from "@/components/MyplayerTeam/MyplayerBanner";
import MyplayerCard from "@/components/MyplayerTeam/MyplayerCard";
import MyplayerRaceList from "@/components/MyplayerTeam/MyplayerRaceList";
import MyplayerGallery from "@/components/MyplayerTeam/MyplayerGallery";
import MyplayerMessage from "@/components/MyplayerTeam/MyplayerMessage";
import MyplayerPopups from "@/components/MyplayerTeam/MyplayerPopups";
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

  methods: {
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
