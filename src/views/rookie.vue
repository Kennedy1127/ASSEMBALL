<template>
  <main class="rookie">
    <div class="wrapper">
      <div class="bread_crumbs">
        <!--麵包屑 -->
        <router-link :to="{ name: 'Home' }">首頁 </router-link>
        <!-- 首頁 -->
        <div class="bread_crumbs_arrow">
          <span> <font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
        </div>
        新手上路
      </div>
      <div class="rookie_title">
        <div class="color_block"></div>
        新手上路
      </div>

      <div class="rookie_area">
        <!-- 新手上路區域 -->

        <div class="rookie_decorate">
          <!-- 左邊圖跟標題 -->
          <div class="rookie_area_poster">
            <!-- 新手上路大字報 -->
            Rookie
            <span> Area</span>
          </div>
          <div class="hitter_img">
            <img src="~@/assets/images/rookie/hitter.png" />
          </div>
        </div>
        <!-- 教學清單區域--------------------------------- -->
        <div class="rookie_teaching_container">
          <button @click="pageup" class="change_page_btn_up">
            <font-awesome-icon icon="fa-solid fa-circle-chevron-up" />
          </button>
          <div
            v-for="item in currentList"
            :key="item.index"
            class="rookie_teaching"
          >
            <!-- 教學清單 -->
            <div class="rookie_teaching_list">
              <router-link to="rookie/rookieListCurve">
                <div class="rookie_teaching_list_title">
                  <!-- 清單標題 -->
                  <div class="rookie_teaching_list_title_arrow">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                  </div>
                  {{ item.type }} - {{ item.title }}
                </div>

                <div class="rookie_teaching_list_content">
                  <!-- 清單內文 -->
                  {{ item.content }}
                </div>

                <button class="rookie_teaching_list_more_btn">More</button>
              </router-link>
            </div>
          </div>
          <button @click="pagedown" class="change_page_btn_down">
            <font-awesome-icon icon="fa-solid fa-circle-chevron-down" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      page: 1, //存放現在頁碼
      perPage: 3, //一頁顯示幾筆
      teaching: [
        {
          type: "投手教學系列",
          title: "曲球",
          content:
            "握球時食指與中指握在球的外側縫線處，出手時藉著手腕的順時針方向旋轉與手指的向下施力，使球造成旋轉，進而產生水平向分力，加上重力的作用，球會像畫出一道弧線般向打者的外角下墜。 曲球的旋轉，幾乎是與直球相反；直球是讓球由下往上旋轉，而曲球則是讓球從上往下旋轉。在姆指壓住四線快速球投法的一條縫線後，食指與中指去扣住正對面的縫線。球在出手時，就像栓緊汽水的瓶蓋一般旋轉，在球離手前，姆指應該要高過食指，讓球由上往下轉。 對於1.上肩、2.四分之三投法、3.側投、4.下勾等不同放球點(出手的位置)，曲球分別是由1.上往下快速地掉落、2.往右打者的外角下墜、3.往右打者的外角大幅度水平偏移、4.在變化路徑中會有一段具有真正的上飄但最後又會因為受到地心引力影響而下墜，在投曲球的時候，手腕旋轉的力量怎麼轉移到球的旋轉上，是曲球投得成功與否的關鍵。 但是在投手投出曲球時，常會在握球的深淺與放球點做一些變化，讓曲球也出現球速差異，通常變化幅度越大的曲球，球速會越慢，出現失投球的機會也會較高。在放球點上改變，也會讓曲球的變化路徑在橫向與下墜比例上不同。 ",
        },
        {
          type: "投手教學系列",
          title: "滑球",
          content:
            "食指與中指放在球的外側，手掌稍微轉向側面，放球時手指向下扣。產生向外側急速下墜的位移。著名的滑球投手有三振率紀錄保持人蘭迪．強森（Randy Johnson）、2012年進軍美國職棒的臺灣投手陳偉殷和中華職棒的陽建福。 ",
        },
        {
          type: "投手教學系列",
          title: "指叉球",
          content:
            "將食指和中指叉開，夾住球的兩側，拇指握住球的下方，降低球的轉速，帶來較大幅度的下沉。日本人將這種球稱為「20世紀最後的魔球」。此球路最具代表的人物是以龍捲風式投法享譽棒球界的野茂英雄，此外2012年再度復出的克萊門斯（Roger Clemens）、旅日選手郭李建夫、郭源治等，也都是此球路的佼佼者。",
        },
        {
          type: "打者教學系列",
          title: "如何挑選一支適合自己的球棒",
          content:
            "喜歡從事棒壘球運動的朋友或許都有過買球棒的經驗，球棒分不同長度、重量、木頭材質、品牌，根據國外網站統計，多數 MLB 球員使用的球棒品牌便多達 11 種以上，一支動輒好幾千元的球棒，要如何在琳瑯滿目的選擇中選擇一支最適合自己的呢？.....",
        },
        {
          type: "投手教學系列",
          title: "如何投球",
          content:
            "想要投出有力量的球，放球(球離開手)的瞬間要將最大的力量傳達到手指。因此在球離開手的瞬間之前，手腕、手指不要放入多餘的力道。握球並不是緊緊握住，而是要想像是抓著雞蛋一樣，輕輕地拿著它。只要球不會從手掉落的力道就行了。 ",
        },
        {
          type: "投手教學系列",
          title: "四縫線快速球",
          content:
            "將食指和中指放在縫線上，拇指放在正下方，投出時手指向下扣，使球產生向內的旋轉。球在作用力合成下，會產生向右下角的位移。美國棒球三振紀錄保持人諾蘭．萊恩（Nolan Ryan）、芝加哥小熊隊的投手麥可．鮑登（Michael Bowden）和臺灣棒球好手王建民都相當擅長此種球路。 ",
        },
        {
          type: "投手教學系列",
          title: "卡特球",
          content:
            "食指與中指握在縫線最窄的地方，手指偏離中心部位，投出球路偏斜的快速球。在作用力影響下，球會向左下角飄移。使用此種球路的球員有洋基隊的守護神李維拉（Mariano Rivera）、安迪．派提特（Andy Pettitte）、達比修有和中職的潘威倫。",
        },
        {
          type: "投手教學系列",
          title: "伸卡球",
          content:
            "法類似2縫線快速球，食指和中指放在縫線最窄的地方，食指發出較多的力，產生更大幅度的側移與下沉。這就是王建民最有名的球路，此外，曾在美聯和國聯皆獲得賽揚獎殊榮的哈勒戴（Roy Halladay）也相當擅於此球路。 ",
        },
        {
          type: "投手教學系列",
          title: "變速球",
          content:
            "食指與拇指指間接觸成圓形，再用剩下的3指握住球，投出快速球的球路。但是由於球的轉速降低，而出現指叉球的效果。有名的投手有旅美的日籍投手井川慶和張誌家。",
        },
      ],
    };
  },
  computed: {
    currentList() {
      //回傳頁碼對應的三筆索引值的資料組成的陣列
      return this.teaching.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {
    pageup() {
      if (this.page != 1) {
        this.page--;
      }
    },
    pagedown() {
      if (this.page != this.teaching.length / this.perPage) {
        console.log("陣列長度", this.teaching.length / this.perPage);
        this.page++;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.rookie {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 4rem 5rem;
    margin-top: 6rem;

    @media screen and (max-width: 420px) {
      padding: 1.5rem;
    }
  }
}

.bread_crumbs {
  //麵包屑
  display: flex;
  align-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  color: var(--primary-black);
  @media all and (max-width: 420px) {
    font-size: 1rem;
  }

  a {
    display: block;
    font-size: 1.25rem;
    color: var(--primary-blue);
    text-decoration: underline;
    text-underline-offset: 4px;
    padding-bottom: 0.2rem;
    @media all and (max-width: 420px) {
      font-size: 1rem;
    }
  }

  .bread_crumbs_arrow {
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    span {
      color: var(--primary-blue);
    }
  }
}

.rookie_title {
  //新手上路標題
  margin-top: 3rem;
  display: flex;
  align-items: end;
  align-content: end;
  gap: 2rem;
  font-size: 2rem;
  color: var(--primary-blue);
  font-weight: 600;
  @media all and (max-width: 420px) {
    font-size: 1.75rem;
  }

  .color_block {
    width: 15px;
    height: 50px;
    background-color: var(--primary-blue);
    @media all and (max-width: 420px) {
      height: 40px;
    }
  }
}

.rookie_area {
  //新手上路區域

  display: flex;
  margin-top: 3rem;
  position: relative;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 420px) {
    display: block;
    margin-top: 3rem;
  }
}
.rookie_decorate {
  .rookie_area_poster {
    //新手上路大字報
    margin-top: 3rem;
    font-size: 4rem;
    position: relative;
    color: var(--primary-blue);
    font-weight: 600;
    @media screen and (max-width: 420px) {
      font-size: 3rem;
    }
    span {
      bottom: -6rem;
      right: 2rem;
      position: absolute;
    }

    margin-bottom: 3rem;
  }

  .hitter_img {
    margin-top: 8rem;
    @media screen and (max-width: 420px) {
      position: relative;
      margin-top: 4rem;
      right: 3rem;
    }
    img {
      width: 80%;
      padding-bottom: 2rem;
    }
  }
}

.rookie_teaching_container {
  //教學清單容器
  display: flex;
  flex-direction: column;
  width: 50%;

  position: relative;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
}

.change_page_btn_up {
  //教學清單頁面向上切換按鈕
  font-size: 2.5rem;
  color: var(--primary-blue);
  position: absolute;
  top: -4rem;
  right: 1.5rem;
  background-color: var(--pale-white);
}

.change_page_btn_down {
  //教學清單頁面向下切換按鈕
  font-size: 2.5rem;
  background-color: var(--pale-white);
  color: var(--primary-blue);
  position: absolute;
  bottom: -3rem;
  right: 1.5rem;
  @media screen and (max-width: 420px) {
    bottom: -1rem;
  }
}
.rookie_teaching {
  position: relative;
  width: 100%;

  .rookie_teaching_list {
    //教學清單
    padding-bottom: 2rem;
    position: relative;
    margin-bottom: 3rem;
    border-bottom: var(--secondary-gray-3) solid;
    width: 100%;

    @media screen and (max-width: 420px) {
      position: relative;
    }

    &_title {
      //清單標題
      color: var(--primary-blue);
      font-size: 1.5rem;
      position: relative;
      font-weight: 600;
      @media screen and (max-width: 420px) {
        margin-left: 2rem;
      }

      &_arrow {
        position: absolute;
        left: -2rem;
      }
    }

    &_content {
      font-size: 1.25rem;
      color: var(--secondary-gray-1);
      width: 100%;
      margin-top: 1rem;
      max-height: 6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    //內文
    &_more_btn {
      position: absolute;
      right: 0;
      font-size: 1rem;
      color: var(--primary-blue);
      font-weight: 600;
      background-color: #fff;
    }
  }
}

.background_baseball {
  z-index: 0;
  left: 0;
  bottom: 0;
  position: absolute;
}
</style>
