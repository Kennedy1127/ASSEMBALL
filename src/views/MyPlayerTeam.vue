<template>
  <main class="myplayer">
    <MyplayerBanner></MyplayerBanner>

    <MyplayerCard />

    <MyplayerRaceList />

    <MyplayerGallery />

    <MyplayerMessage />
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
    this.$store.dispatch("getMyplayerTeam");
    // console.log(this.$route);
  },
};
</script>

<style lang="scss">
.myplayer {
  margin: 0 auto;
}
</style>
