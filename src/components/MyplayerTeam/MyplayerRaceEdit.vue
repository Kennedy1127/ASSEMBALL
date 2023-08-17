<template>
  <section class="myplayerRaceEdit">
    <div class="myplayerRaceEdit_time">
      <!-- <div class="myplayerRaceEdit_time_race"> -->
      <!-- <div class="myplayerRaceEdit_time_race_word">1. :</div> -->
      <!-- </div> -->
      <!-- <div class="myplayerRaceEdit_underline">
        <input
          type="text"
          class="myplayerRaceEdit_time_type"
          placeholder="請輸入時間"
        />
      </div> -->
    </div>
    <div class="myplayerRaceEdit_num">1.</div>
    <div class="myplayerRaceEdit_name">
      <div class="myplayerRaceEdit_name_team1">
        <div class="myplayerRaceEdit_name_team1_num">(1)比賽時間</div>
      </div>
      <div class="myplayerRaceEdit_underline">
        <input
          type="text"
          class="myplayerRaceEdit_name_team_type"
          placeholder="ex:8/13"
          oninput="this.value=this.value.replace(/[^0-9/]+/g, '')"
          maxlength="4"
          v-model="gamedate"
          required
        />
      </div>
    </div>
    <div class="myplayerRaceEdit_num">2.</div>
    <div class="myplayerRaceEdit_name">
      <div class="myplayerRaceEdit_name_team1">
        <div class="myplayerRaceEdit_name_team1_num">(1) 隊伍名稱:</div>
      </div>
      <div class="myplayerRaceEdit_underline">
        <input
          type="text"
          class="myplayerRaceEdit_name_team_type"
          placeholder="請輸入名稱"
          oninput="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"
          maxlength="10"
          v-model="homename"
          required
        />
      </div>
    </div>
    <div class="myplayerRaceEdit_name">
      <div class="myplayerRaceEdit_name_team1">
        <div class="myplayerRaceEdit_name_team1_num">(2) 隊伍分數:</div>
      </div>
      <div class="myplayerRaceEdit_underline">
        <input
          type="text"
          class="myplayerRaceEdit_name_team_type"
          placeholder="請輸入分數"
          maxlength="2"
          v-model="homescore"
          oninput="this.value=this.value.replace(/[^0-9]+/,'')"
          required
        />
      </div>
    </div>
    <div class="myplayerRaceEdit_num">3.</div>
    <div class="myplayerRaceEdit_name">
      <div class="myplayerRaceEdit_name_team1">
        <div class="myplayerRaceEdit_name_team1_num">(1) 隊伍名稱:</div>
      </div>
      <div class="myplayerRaceEdit_underline">
        <input
          type="text"
          class="myplayerRaceEdit_name_team_type"
          placeholder="請輸入名稱"
          oninput="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')"
          maxlength="10"
          v-model="hostname"
          required
        />
      </div>
    </div>
    <div class="myplayerRaceEdit_name">
      <div class="myplayerRaceEdit_name_team1">
        <div class="myplayerRaceEdit_name_team1_num">(2) 隊伍分數:</div>
      </div>
      <div class="myplayerRaceEdit_underline">
        <input
          type="text"
          class="myplayerRaceEdit_name_team_type"
          placeholder="請輸入分數"
          maxlength="2"
          v-model="hostscore"
          oninput="this.value=this.value.replace(/[^0-9]+/,'')"
          required
        />
      </div>
    </div>
    <div class="myplayerRaceEdit_num">4.</div>
    <div class="myplayerRaceEdit_name">
      <div class="myplayerRaceEdit_name_team1">
        <div class="myplayerRaceEdit_name_team1_num">(1) 主隊伍隊徽:</div>
      </div>
      <div class="myplayerRaceEdit_underline">
        <input
          type="file"
          accept="image/*"
          class="myplayerRaceEdit_name_team_type"
          @change="handleFileChange($event, 'home')"
          required
        />
      </div>
    </div>
    <div class="myplayerRaceEdit_name">
      <div class="myplayerRaceEdit_name_team1">
        <div class="myplayerRaceEdit_name_team1_num">(2) 客隊伍隊徽:</div>
      </div>
      <div class="myplayerRaceEdit_underline">
        <input
          type="file"
          accept="image/*"
          class="myplayerRaceEdit_name_team_type"
          @change="handleFileChange($event, 'host')"
          required
        />
      </div>
    </div>
    <div class="myplayerRaceEdit_btn">
      <button class="myplayerRaceEdit_submit" @click="submitData">送出</button>
    </div>

    <!-- <div class="myplayerRaceEdit_score1"></div>
    <div class="myplayerRaceEdit_name2"></div>
    <div class="myplayerRaceEdit_score2"></div> -->
  </section>
</template>
<script>
import useStorage from "@/composables/data/useStorage";
import useData from "@/composables/data/useData";
import { timestamp } from "@/firebase/config";

export default {
  emits: ["closeModal"],
  data() {
    return {
      homename: "",
      gamedate: "",
      homescore: "",
      hostname: "",
      hostscore: "",
      homepic: null,
      hostpic: null,
    };
  },

  methods: {
    handleFileChange(event, condition) {
      if (condition === "home") {
        this.homepic = event.target.files[0];
      } else if (condition === "host") {
        this.hostpic = event.target.files[0];
      }
    },
    async submitData() {
      this.$store.state.isPending = true;
      const data = {
        gamedate: this.gamedate,
        homename: this.homename,
        homescore: this.homescore,
        hostname: this.hostname,
        hostscore: this.hostscore,
        status: true,
      };

      if (!this.homepic || !this.hostpic) {
        return;
      }

      const { setDataSubCollection } = useData();
      const id = await setDataSubCollection(
        {
          collectionName: "TEAMS",
          documentId: `${this.$route.params.id}`, //you have to change this id
          subCollectionName: "GAME",
        },
        data,
        [this.homepic, this.hostpic],
        "teamLogoPic"
      );

      const { getPicsLink } = useStorage();
      const res = await getPicsLink(
        2,
        `images/TEAMS/${this.$route.params.id}/GAME/${id}`, //you have to change this id
        "teamLogoPic"
      );

      data.pics = res;
      this.$store.state.myplayerRaceList.unshift(data);
      this.gamedate = "";
      this.homename = "";
      this.homescore = "";
      this.hostname = "";
      this.hostscore = "";
      this.homepic = null;
      this.hostpic = null;
      this.$emit("closeModal");
      this.$store.state.isPending = false;
    },
  },
};
</script>
<style lang="scss">
.myplayerRaceEdit {
  width: 30%;
  background-color: var(--pale-white);
  margin: 2rem auto;

  border: 1px solid var(--primary-blue);
  border-radius: 1rem;
  padding: 2rem 0rem 1rem 0rem;
  &_time {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    // background-color: green;
    margin: auto;
    padding-bottom: 2rem;
    &_race {
      display: flex;

      width: 50%;
      color: var(--primary-blue);
      font-size: 1.5rem;
    }
  }
  .myplayerRaceEdit_underline {
    border-bottom: 1px solid var(--primary-blue);
    width: 50%;
  }
  .myplayerRaceEdit_time_type {
    width: 100%;
    background-color: transparent;
    border: 0px solid;
    font-size: 1rem;
    padding: 0.5rem;
  }
  .myplayerRaceEdit_num {
    width: 80%;
    margin: auto;
    color: var(--primary-blue);
    font-size: 1.5rem;
  }
  .myplayerRaceEdit_name {
    width: 100%;
    margin: auto;
    color: var(--primary-blue);
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .myplayerRaceEdit_name_team_type {
    width: 100%;
    background-color: transparent;
    border: 0px solid;
    font-size: 1rem;
    padding: 0.5rem;
    &:focus {
      outline: none;
    }
  }
  .myplayerRaceEdit_btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1.5rem 0rem 1rem 0rem;
  }
  .myplayerRaceEdit_submit {
    width: 20%;
    margin: auto;
    font-size: 1rem;
    padding: 0.5rem;
    color: var(--primary-blue);
    background-color: var(--pale-white);
    border: 1px solid var(--primary-blue);
    border-radius: 1.5rem;
    transition: 0.3s;
  }
  .myplayerRaceEdit_submit:hover {
    transition: 0.3s;
    color: var(--pale-white);
    background-color: var(--primary-blue);
  }
}
</style>
