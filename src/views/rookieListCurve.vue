<template>
  <main class="rookieListCurve">
    <div class="wrapper">
      <!--網頁白色部分 -->
      <div class="bread_crumbs">
        <!--麵包屑 -->
        <router-link :to="{ name: 'rookie' }">新手上路 </router-link>
        <div class="bread_crumbs_arrow">
          <span> <font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
        </div>
        投手教學系列
      </div>
      <div class="rookieListCurve_title">
        <!--大標題 -->
        <div class="rookieListCurve_title_color_block"></div>
        {{ type }} - {{ title }}
      </div>
      <div class="rookieListCurve_container">
        <!--包住內容跟圖片的容器 -->
        <div class="rookieListCurve_textArea">
          <!--文字區域  -->
          <div
            v-for="item in teachingList"
            :key="item.index"
            class="rookieListCurve_content"
          >
            <!--文字段落  -->
            {{ item.Paragraph }}
          </div>
        </div>
        <div class="rookieListCurve_imgArea">
          <!--圖片區域  -->
          <div class="curve_img">
            <img src="~@/assets/images/rookie/curve.png" />
          </div>

          <div class="player_img">
            <img src="~@/assets/images/rookie/player.png" />
          </div>
        </div>
      </div>
      <hr />
      <div class="rookieListCurve_video">
        <iframe
          width="80%"
          height="100%"
          src="https://www.youtube.com/embed/AfuaiiWOGCs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      type: "投手教學系列",
      title: "曲球",
      teachingList: [
        {
          Paragraph:
            "握球時食指與中指握在球的外側縫線處，出手時藉著手腕的順時針方向旋轉與手指的向下施力，使球造成旋轉，進而產生水平向分力，加上重力的作用，球會像畫出一道弧線般向打者的外角下墜。 ",
        },
        {
          Paragraph:
            "曲球的旋轉，幾乎是與直球相反；直球是讓球由下往上旋轉，而曲球則是讓球從上往下旋轉。在姆指壓住四線快速球投法的一條縫線後，食指與中指去扣住正對面的縫線。球在出手時，就像栓緊汽水的瓶蓋一般旋轉，在球離手前，姆指應該要高過食指，讓球由上往下轉。 ",
        },
        {
          Paragraph:
            "對於1.上肩、2.四分之三投法、3.側投、4.下勾等不同放球點(出手的位置)，曲球分別是由1.上往下快速地掉落、2.往右打者的外角下墜、3.往右打者的外角大幅度水平偏移、4.在變化路徑中會有一段具有真正的上飄但最後又會因為受到地心引力影響而下墜，在投曲球的時候，手腕旋轉的力量怎麼轉移到球的旋轉上，是曲球投得成功與否的關鍵。 但是在投手投出曲球時，常會在握球的深淺與放球點做一些變化，讓曲球也出現球速差異，通常變化幅度越大的曲球，球速會越慢，出現失投球的機會也會較高。在放球點上改變，也會讓曲球的變化路徑在橫向與下墜比例上不同。 ",
        },
        {
          Paragraph:
            "原理:如果是以高壓出手方式來投曲球，假設我們將從投手角度來看，我們會發現球是呈現12往6點鐘方向（12→6）正旋（旋轉軸3-9）。",
        },
        {
          Paragraph:
            "如果我們是從一壘的視角觀察從投手丘投往本壘的快速球我們可以發現球是往下旋轉（順時針旋轉）。此刻我們更深入探討，流體從左往右流向球時，由流體力學角度利用風洞實驗來觀察流場變化，以柏努力定律（Bernoulli’s Theory）解釋此現象，我們會發覺球體下方呈現的流線較密（代表球體下方有較多流線（流體）經過），這表示球體下半部壓力較小，在要達成瞬間力平衡狀態下，自然會讓球產生一個向下的作用力:馬格納斯力(Magnus force)。由於這股力量和地心引力的方向相同，下墜速度是所有球種中最快。 ",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.bread_crumbs {
  //麵包屑
  display: flex;
  align-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  color: var(--primary-black);
  padding-bottom: 3rem;

  a {
    display: block;
    font-size: 1.25rem;
    color: var(--primary-blue);
    text-decoration: underline;
    text-underline-offset: 4px;
    padding-bottom: 0.2rem;
    @media screen and (max-width: 420px) {
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
  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
}

.rookieListCurve {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 10rem;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 4rem 5rem;

    position: relative;
    @media screen and (max-width: 420px) {
      padding: 2rem;
    }
  }
}
.rookieListCurve_title {
  //大標題
  margin-right: 1rem;
  display: flex;
  gap: 2rem;
  font-size: 2rem;
  color: var(--primary-blue);
  font-weight: 600;
  &_color_block {
    width: 1rem;
    height: 3rem;
    background-color: var(--primary-blue);
  }
  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
    gap: 1rem;
    &_color_block {
      width: 1rem;
      height: 2.5rem;
    }
  }
}

.rookieListCurve_container {
  gap: 6rem;
  display: flex;
  padding: 2rem;
  margin-top: 3rem;
  position: relative;
  @media screen and (max-width: 420px) {
    padding: 1rem;
  }
  .rookieListCurve_textArea {
    //文字區域
    width: 60%;
    @media screen and (max-width: 420px) {
      width: 100%;
    }
    .rookieListCurve_content {
      //文字段落
      color: var(--secondary-gray-1S);
      font-size: 1.25rem;
      margin-bottom: 3rem;
      @media screen and (max-width: 420px) {
        font-size: 1rem;
      }
    }
  }
  .rookieListCurve_imgArea {
    //圖片區域
    gap: 8rem;
    width: 40%;
    display: flex;
    position: sticky;
    top: 100px;
    max-height: 600px;
    flex-direction: column;
    align-items: center;
    align-content: center;
    @media screen and (max-width: 420px) {
      display: none;
    }
    .curve_img {
      width: 50%;

      img {
        width: 100%;
      }
    }
    .player_img {
      width: 80%;
      img {
        width: 100%;
      }
    }
  }
}
.rookieListCurve_video {
  margin-top: 12rem;
  display: flex;
  width: 100%;
  height: 40rem;
  justify-content: center;

  @media screen and (max-width: 420px) {
    margin-top: 3rem;
    width: 100%;
    height: 12rem;
  }
}
hr {
  margin-top: 8rem;
  color: var(--secondary-gray-3);
  @media screen and (max-width: 420px) {
    margin-top: 1rem;
  }
}
</style>
