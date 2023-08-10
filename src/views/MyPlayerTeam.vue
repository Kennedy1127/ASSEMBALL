<template>
  <main class="myplayer">
    <MyplayerBanner></MyplayerBanner>

    <MyplayerCard />

    <MyplayerRaceList />

    <MyplayerGallery />

    <MyplayerMessage @openPopup="openPopup" />
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
    // console.log(this.$route);
    // isAdmin = auth.currentUser.uid === teamData.user_id
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
  },
};
</script>

<style lang="scss">
.myplayer {
  margin: 0 auto;
}
</style>
