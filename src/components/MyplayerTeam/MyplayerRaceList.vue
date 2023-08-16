<template>
  <section class="myplayer_function_group">
    <!-- <div class="myplayer_function_group_calendar_wrap">
      <div class="myplayer_function_title_wrap">
        <div class="myplayer_function_rect"></div>
        <h3>賽程表</h3>
      </div>
      <div class="myplayer_function_calendar">
        <VCalendar
          class="myplayer_function_calendar_vue vc-header vc-title"
          expanded
        />
      </div>
    </div> -->
    <MyplayerCalendar />
    <div class="myplayer_function_group_race_wrap">
      <div class="myplayer_function_title_wrap">
        <div class="myplayer_function_rect"></div>
        <h3>戰績表</h3>
      </div>
      <div class="myplayer_function_race_list">
        <div
          class="myplayer_function_race_package"
          v-for="item in $store.state.myplayerRaceList"
          :key="item.id"
        >
          <div class="myplayer_function_race_title_wrap">
            <div class="myplayer_function_race_title_time">日期</div>
            <div class="myplayer_function_race_title_name">
              <div class="myplayer_function_race_title_team1">
                {{ item.homename }}
              </div>
              <div class="myplayer_function_race_title_team2">
                {{ item.hostname }}
              </div>
            </div>
          </div>
          <div class="myplayer_function_race_item">
            <div class="myplayer_function_race_item_day">
              {{ item.gamedate }}
              <div class="myplayer_function_race_edit">
                <font-awesome-icon
                  v-if="
                    editCommentId !== item.id &&
                    authID === $store.state.myplayerTeam.user_id
                  "
                  :icon="['fas', 'trash-can']"
                  class="icon icon--pen"
                  @click="openEditComment(item.id)"
                />
                <font-awesome-icon
                  v-if="editCommentId === item.id"
                  class="icon icon--check"
                  :icon="['fas', 'check']"
                  @click="confirmItem(item.id)"
                />
                <font-awesome-icon
                  v-if="editCommentId === item.id"
                  class="icon icon--xmark"
                  :icon="['fas', 'xmark']"
                  @click="cancelItem(item.id)"
                />
              </div>
            </div>

            <div class="myplayer_function_race_item_name">
              <div class="myplayer_function_race_item_team1">
                <div
                  class="myplayer_function_race_item_logo1"
                  v-bind:style="{
                    backgroundImage: `url('${
                      item.pics
                        ? item.pics[0]
                        : require('@/assets/images/icons/main-icon.png')
                    }')`,
                  }"
                ></div>
                <div class="myplayer_function_race_item_score1">
                  {{ item.homescore }}
                </div>
              </div>
              <div class="myplayer_function_race_item_contest">
                <div class="myplayer_function_race_item_versus">vs</div>
                <div class="myplayer_function_race_item_colon">:</div>
              </div>
              <div class="myplayer_function_race_item_team2">
                <div
                  class="myplayer_function_race_item_logo2"
                  v-bind:style="{
                    backgroundImage: `url('${
                      item.pics
                        ? item.pics[1]
                        : require('@/assets/images/icons/main-icon.png')
                    }')`,
                  }"
                ></div>
                <div class="myplayer_function_race_item_score2">
                  {{ item.hostscore }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="myplayer_function_race_editPen"
        @click="myplayerRaceEditToggle"
      >
        <font-awesome-icon
          :icon="['fas', 'plus']"
          class="myplayer_function_race_editPen_item"
        />
      </div>
    </div>
  </section>
  <OverlayComponent
    type="RaceType"
    v-if="isVisible"
    @closeOverlay="isVisible = false"
  />
</template>

<script>
import MyplayerRaceEdit from "@/components/MyplayerTeam/MyplayerRaceEdit.vue";
import OverlayComponent from "../utilities/OverlayComponent.vue";
import MyplayerCalendar from "@/components/MyplayerTeam/MyplayerCalendar";
import useStorage from "@/composables/data/useStorage";
import getData from "@/composables/data/getData";
import { auth } from "@/firebase/config";
// import { remove } from "@vue/shared";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const { getSubCollectionDocuments } = getData();
const { getPicsLink } = useStorage();

export default {
  async mounted() {
    const res = await getSubCollectionDocuments({
      collectionName: "TEAMS",
      documentId: this.$route.params.id,
      subCollectionName: "GAME",
    });

    for (let i = 0; i < res.length; i++) {
      const pics = await getPicsLink(
        2,
        `images/TEAMS/${this.$route.params.id}/GAME/${res[i].id}`,
        "teamLogoPic"
      );

      res[i].pics = pics;
    }

    this.$store.state.myplayerRaceList = res;
  },

  components: {
    MyplayerCalendar,
    MyplayerRaceEdit,
    OverlayComponent,
  },
  data() {
    return {
      myplayer_race_list: [],
      editMode: false,
      editCommentId: null,
      editComment: null,
      isVisible: false,
      authID: auth.currentUser.uid,
    };
  },
  methods: {
    myplayerRaceEditToggle() {
      this.isVisible = true;
    },
    submitData() {
      this.isVisible = !this.isVisible;
    },
    openEditComment(id) {
      this.editMode = true;
      this.editCommentId = id;
    },
    async confirmItem(id) {
      await deleteDoc(doc(db, "TEAMS", this.$route.params.id, "GAME", id));
      const index = this.$store.state.myplayerRaceList.findIndex(
        (race) => race.id === id
      );
      this.$store.state.myplayerRaceList.splice(index, 1);
    },

    cancelItem() {
      this.editCommentId = null;
    },
  },
};
</script>
<style lang="scss">
.myplayer {
  margin: 0 auto;
}
.myplayer_function_group {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8rem;
}
// .myplayer_function_group_calendar_wrap {
//   width: 47.5%;
// }
// .vc-title {
//   background-color: aqua;
// }
.myplayer_function_title_wrap {
  display: flex;
  justify-content: space-between;
  width: 12.5rem;
  padding-bottom: 8rem;
}

.myplayer_function_title_wrap h3 {
  font-size: 2.5rem;
  color: var(--primary-blue);
  font-weight: 700;
}

.myplayer_function_rect {
  width: 1rem;
  background-color: var(--primary-blue);
}

.myplayer_function_group_race_wrap {
  width: 47.5%;
  position: relative;
  // flex: 1;
}
.myplayer_function_title_wrap {
  display: flex;
  justify-content: space-between;
  width: 12.5rem;
  padding-bottom: 8rem;
}
.myplayer_function_rect {
  width: 1rem;
  background-color: var(--primary-blue);
}
h3 {
  font-size: 2.5rem;
  color: var(--primary-blue);
  font-weight: 700;
}
.myplayer_function_race_list {
  width: 100%;
  height: 37.5rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-button {
    background: transparent;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-blue-1);
    border-radius: 1rem;
    // width: 10px;
  }
}
.myplayer_function_race_title_wrap {
  width: 100%;
  display: flex;
}
.myplayer_function_race_title_time {
  width: 30%;
  text-align: center;
  background-color: var(--primary-blue);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--pale-white);
}
.myplayer_function_race_title_name {
  width: 70%;
  display: flex;
  justify-content: space-between;
  background-color: var(--error-yellow);
}
.myplayer_function_race_title_team1 {
  width: 40%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--pale-white);
}
.myplayer_function_race_title_team2 {
  width: 40%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--pale-white);
}

.myplayer_function_race_item {
  // border: 1px solid orange;
  // background-color: orange;
  height: 33.333333%;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
}

.myplayer_function_race_item_day {
  width: 30%;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-blue);
  // padding: 5rem 0rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // border: 1px solid black;
}
.myplayer_function_race_edit {
  position: absolute;
  right: 0.5rem;
  transform: translateY(100%);
  cursor: pointer;
}
.myplayer_function_race_item_name {
  width: 70%;
  // border: 1px solid black;
  display: flex;
}
.myplayer_function_race_item_team1 {
  width: 40%;
  // border: 1px solid black;
  padding: 1rem;
}
.myplayer_function_race_item_logo1 {
  width: 6rem;
  height: 6rem;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  border: 3px solid var(--primary-blue);
  border-radius: 50%;
}
.myplayer_function_race_item_score1 {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  color: var(--accent-red);
  font-weight: 700;
}

.myplayer_function_race_item_contest {
  width: 20%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
// border: 1px solid black;
.myplayer_function_race_item_versus {
  width: 100%;
  height: 40%;
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-blue);
}
.myplayer_function_race_item_colon {
  text-align: center;
  height: 40%;
  font-size: 2.5rem;
  color: var(--primary-blue);
}

.myplayer_function_race_item_team2 {
  width: 40%;
  padding: 1rem;
}
// border: 1px solid black;
.myplayer_function_race_item_logo2 {
  width: 6rem;
  height: 6rem;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid var(--primary-blue);
  border-radius: 50%;
}
.myplayer_function_race_item_score2 {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  color: var(--accent-red);
  font-weight: 700;
}
.myplayer_function_race_editPen {
  position: absolute;
  right: 0px;
  top: 0px;
  &_item {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    padding: 1rem;
    color: var(--primary-blue);
    background-color: var(--pale-white);
    border-radius: 50%;
    border: 1px solid var(--primary-blue);
    cursor: pointer;
    transition: 0.3s;
  }
  &_item:hover {
    transition: 0.3s;
    color: var(--pale-white);
    background-color: var(--primary-blue);
  }
}

@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .myplayer_function_race_item_logo1 {
    width: 4rem;
    height: 4rem;
  }
  .myplayer_function_race_item_logo2 {
    width: 4rem;
    height: 4rem;
  }
  .myplayer_function_race_list {
    height: 30rem;
  }
  .myplayer_function_race_item_team1 {
    padding: 1rem 1rem 0rem 1rem;
  }
  .myplayer_function_race_item_team2 {
    padding: 1rem 1rem 0rem 1rem;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .myplayer_function_title_wrap h3 {
    font-size: 2rem;
    width: 8rem;
  }
  .myplayer_function_race_title_time {
    font-size: 1rem;
  }
  .myplayer_function_race_title_team1 {
    font-size: 1rem;
  }
  .myplayer_function_race_title_team2 {
    font-size: 1rem;
  }
  .myplayer_function_race_item_day {
    font-size: 1.5rem;
  }
  .myplayer_function_race_item_versus {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .myplayer_function_race_item_colon {
    font-size: 1.5rem;
    transform: translateY(10px);
  }
  .myplayer_function_race_item_logo1 {
    width: 4rem;
    height: 4rem;
  }
  .myplayer_function_race_item_logo2 {
    width: 4rem;
    height: 4rem;
  }
  .myplayer_function_race_list {
    height: 28rem;
  }
  .myplayer_function_race_item_team1 {
    padding: 1rem 0.5rem 0rem 0.5rem;
  }
  .myplayer_function_race_item_team2 {
    padding: 1rem 0.5rem 0rem 0.5rem;
  }
  .myplayer_function_race_item_score1 {
    font-size: 2rem;
  }
  .myplayer_function_race_item_score2 {
    font-size: 2rem;
  }
}
@media screen and (max-width: 767px) {
  .myplayer_function_group {
    display: flex;
    flex-direction: column;
  }
  .myplayer_function_group_race_wrap {
    width: 100%;
  }
  .myplayer_function_title_wrap h3 {
    font-size: 2rem;
    width: 8rem;
  }
  .myplayer_function_race_title_time {
    font-size: 1rem;
  }
  .myplayer_function_race_title_team1 {
    font-size: 1rem;
  }
  .myplayer_function_race_title_team2 {
    font-size: 1rem;
  }
  .myplayer_function_race_item_day {
    font-size: 1.5rem;
  }
  .myplayer_function_race_item_versus {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .myplayer_function_race_item_colon {
    font-size: 1.5rem;
    transform: translateY(10px);
  }
  .myplayer_function_race_item_logo1 {
    width: 4rem;
    height: 4rem;
  }
  .myplayer_function_race_item_logo2 {
    width: 4rem;
    height: 4rem;
  }
  .myplayer_function_race_list {
    height: 28rem;
  }
  .myplayer_function_race_item_team1 {
    padding: 1rem 0.5rem 0rem 0.5rem;
  }
  .myplayer_function_race_item_team2 {
    padding: 1rem 0.5rem 0rem 0.5rem;
  }
  .myplayer_function_race_item_score1 {
    font-size: 2rem;
  }
  .myplayer_function_race_item_score2 {
    font-size: 2rem;
  }
  .myplayerRaceEdit {
    width: 80%;
    margin: 6rem auto;
  }
  .myplayer_function_title_wrap {
    padding-bottom: 5rem;
  }
}
</style>
