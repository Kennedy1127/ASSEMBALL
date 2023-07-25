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
          v-for="item in myplayer_race_list"
          :key="item.id"
        >
          <div class="myplayer_function_race_title_wrap">
            <div class="myplayer_function_race_title_time">日期</div>
            <div class="myplayer_function_race_title_name">
              <div class="myplayer_function_race_title_team1">
                {{ item.team1 }}
              </div>
              <div class="myplayer_function_race_title_team2">
                {{ item.team2 }}
              </div>
            </div>
          </div>
          <div class="myplayer_function_race_item">
            <div class="myplayer_function_race_item_day">
              {{ item.day }}
              <div class="myplayer_function_race_edit">
                <font-awesome-icon :icon="['fas', 'pen']" />
              </div>
            </div>
            <div class="myplayer_function_race_item_name">
              <div class="myplayer_function_race_item_team1">
                <div
                  class="myplayer_function_race_item_logo1"
                  v-bind:style="{ backgroundImage: `url('${item.logo1}')` }"
                ></div>
                <div class="myplayer_function_race_item_score1">
                  {{ item.score1 }}
                </div>
              </div>
              <div class="myplayer_function_race_item_contest">
                <div class="myplayer_function_race_item_versus">vs</div>
                <div class="myplayer_function_race_item_colon">:</div>
              </div>
              <div class="myplayer_function_race_item_team2">
                <div
                  class="myplayer_function_race_item_logo2"
                  v-bind:style="{ backgroundImage: `url('${item.logo2}')` }"
                ></div>
                <div class="myplayer_function_race_item_score2">
                  {{ item.score2 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyplayerCalendar from "@/components/MyplayerTeam/MyplayerCalendar";
export default {
  components: {
    MyplayerCalendar,
  },
  data() {
    return {
      myplayer_race_list: [
        {
          id: "1",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "07/05",
          logo1: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_2.png"),
          score1: 1,
          score2: 3,
        },
        {
          id: "2",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "07/02",
          logo1: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_3.png"),
          score1: 2,
          score2: 4,
        },
        {
          id: "3",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "07/01",
          logo1: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_3.png"),
          score1: 1,
          score2: 4,
        },
        {
          id: "4",
          team1: "猛虎隊",
          team2: "銀箭隊",
          day: "06/25",
          logo1: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_1.png"),
          logo2: require("/src/assets/images/myplayer_team/myplayer_team_logo/team_logo_2.png"),
          score1: 1,
          score2: 2,
        },
      ],
    };
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
}
</style>
