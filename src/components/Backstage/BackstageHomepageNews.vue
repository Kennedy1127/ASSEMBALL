<template>
  <div class="homePage">
    <div class="homePage_newsKeyword">
      <!-- 首頁最新消息管理 -->

      <div class="homePage_newsKeyword_title">最新消息關鍵字</div>
      <div class="homePage_newsKeyword_enter">
        <!-- 首頁最新消息輸入框 -->
        輸入關鍵字:<input type="text" v-model="AddnewsText" />
      </div>
      <div class="homePage_newsKeyword_enter">
        輸入超連結:<input type="text" v-model="AddnewsLink" />
        <button
          @click="AddNewsKeywordItem"
          class="homePage_newsKeyword_enter_btn"
        >
          <font-awesome-icon icon="fa-solid fa-circle-plus" />
        </button>
      </div>

      <div class="homePage_newsKeyword_form">
        <!--最新消息關鍵字表單  -->
        <div class="homePage_newsKeyword_form_title">
          <!--最新消息關鍵字表單標題  -->
          <div class="homePage_newsKeyword_form_title_text">目前關鍵字</div>
        </div>
        <div class="homePage_newsKeyword_form_content">
          <div
            v-for="(item, index) in NewsKeyword"
            :key="item.id"
            class="newsKeyword_item"
          >
            <button
              @click="removeNews(index, item)"
              class="newsKeyword_item_del"
            >
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </button>

            <div class="newsKeyword_item_text">
              {{ item.KeyWord }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 首頁跑馬燈管理 -->
    <!-- <div class="homepage_marqueeKeyword">
      <div class="homepage_marqueeKeyword_title">跑馬燈關鍵字</div>
      <div class="homepage_marqueeKeyword_enter">
  
        輸入關鍵字: <input type="text" v-model="AddMarquee" />
        <button
          @click="AddMarqueeKeywordItem"
          class="homepage_marqueeKeyword_enter_btn"
        >
          <font-awesome-icon icon="fa-solid fa-circle-plus" />
        </button>
      </div>

      <div class="homepage_marqueeKeyword_form">
        <div class="homepage_marqueeKeyword_form_title">
          <div class="homepage_marqueeKeyword_form_title_text">目前關鍵字</div>
        </div>
 
        <div class="homePage_marqueeKeyword_form_content">
          <div
            v-for="(item, index) in MarqueeKeyword"
            :key="item.Id"
            class="marqueeKeyword_item"
          >
            <button
              @click="removeMarquee(index)"
              class="marqueeKeyword_item_del"
            >
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </button>
            <div class="marqueeKeyword_item_text">
              {{ item.KeyWord }}
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 最新消息卡片-------------------------- -->
    <div class="homePage_card_area">
      <div class="homePage_card">
        <div class="homePage_card_title">最新消息卡片</div>
        <div class="homePage_card_list">
          欄位:<input type="text" :value="CurrentPos" />
          <ul class="NewsCard_menu" v-if="NewsCardPosMenuShow">
            <li
              v-for="(item, index) in NewsCardPos"
              :key="item.pos"
              @click="updatePos(item.pos, item.id)"
            >
              {{ item.pos }}
            </li>
          </ul>
          <button @click="NewsCardPosMenu" class="menu_btn" ref="Pos">
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </button>
        </div>
        <div class="homePage_card_list">
          標題:<input type="text" v-model="TitleText" />
        </div>
        <div class="homePage_card_list">
          副標題:<input type="text" v-model="SubTitleText" />
        </div>
        <div class="homePage_card_list">
          照片:<input
            type="file"
            class="pic_file"
            id="UploadPic"
            accept="image/*"
            @change="ChangePic"
          />
        </div>
        <div class="homePage_card_list">
          內文照片:<input
            type="file"
            class="pic_file"
            id="UploadSubPic"
            accept="image/*"
            @change="ChangeSubPic"
          />
        </div>
        <div class="homePage_card_list homePage_card_list_article">
          文章內容:
          <textarea cols="30" rows="10" v-model="ArticleText"></textarea>
        </div>
        <button class="homePage_card_send_btn" @click="AddNewsCard()">
          送出
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
input {
  border: var(--primary-black) solid;
}
.homePage {
  //首頁管理
  &_newsKeyword {
    //最新消息關鍵字
    display: flex;

    flex-direction: column;
    align-content: center;
    align-items: center;

    gap: 2rem;
    &_title {
      color: var(--primary-black);
      font-size: 1.25rem;
      margin-left: 1.5rem;
      font-weight: 500;
    }
    &_enter {
      font-size: 1.25rem;
      font-weight: 300;
      position: relative;
      input {
        margin-left: 1rem;
        border-radius: 8px;
      }
      .homePage_newsKeyword_enter_btn {
        width: 1rem;
        height: 1rem;
        color: var(--primary-blue);
        border-radius: 8px;
        font-size: 1.25rem;
        position: absolute;
        top: 0;
        right: -1.5rem;
      }
    }
    &_form {
      width: 600px;

      margin-left: 10rem;
      background-color: var(--secondary-blue-2);
      border: var(--primary-black) solid;
      &_title {
        width: 100%;
        height: 47px;
        background-color: var(--primary-blue);
        border-bottom: var(--primary-black) solid;
        padding: 0.5rem;
        &_text {
          font-size: 1.25rem;
          margin-left: 2rem;
          font-weight: 500;
        }
      }
    }
  }
}
//最新消息關鍵字表單內容
.homePage_newsKeyword_form_content {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  .newsKeyword_item {
    border: var(--primary-black) solid;
    width: 172px;
    height: 33px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.5rem;
    position: relative;

    &_del {
      width: 1rem;
      // height: 1rem;
      color: var(--primary-black);
      background-color: var(--secondary-blue-2);
      font-size: 1rem;
    }
    &_text {
      font-size: 1.25rem;
      margin-left: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-weight: 500;
      color: var(--secondary-gray-1);
    }
  }
}

//跑馬燈關鍵字
.homepage_marqueeKeyword {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  gap: 2rem;
  &_title {
    color: var(--primary-black);
    font-size: 1.25rem;
    margin-left: 1.5rem;
    font-weight: 500;
  }
  &_enter {
    font-size: 1.25rem;
    font-weight: 300;
    position: relative;
    input {
      margin-left: 1rem;

      border-radius: 8px;
    }
    .homepage_marqueeKeyword_enter_btn {
      width: 1rem;
      height: 1rem;
      color: var(--primary-blue);
      font-size: 1.25rem;
      border-radius: 8px;
      position: absolute;
      top: 0;
      right: -1.5rem;
    }
  }
  &_form {
    width: 600px;
    margin-left: 10rem;
    background-color: var(--secondary-blue-2);
    border: var(--primary-black) solid;
    &_title {
      width: 100%;
      height: 47px;
      background-color: var(--primary-blue);
      border-bottom: var(--primary-black) solid;
      padding: 0.5rem;
      &_text {
        font-size: 1.25rem;
        margin-left: 2rem;
        font-weight: 500;
      }
    }
  }
}
//跑馬燈關鍵內容
.homePage_marqueeKeyword_form_content {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  .marqueeKeyword_item {
    border: var(--primary-black) solid;
    width: 172px;
    height: 33px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.5rem;

    &_del {
      width: 1rem;

      background-color: var(--secondary-blue-2);
      color: var(--primary-black);
      font-size: 1rem;
    }
    &_text {
      font-size: 1.25rem;
      margin-left: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      font-weight: 500;
      color: var(--secondary-gray-1);
    }
  }
}
//最新消息卡片
.homePage_card_area {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  .homePage_card {
    display: flex;
    flex-direction: column;
    align-content: end;
    align-items: end;
    &_title {
      margin-right: 25%;
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    &_list {
      margin-top: 1rem;
      position: relative;
      .menu_btn {
        position: absolute;
        top: 0.15rem;
        right: 0.5rem;
        background-color: var(--pale-white);
        color: var(--primary-black);
      }
      .NewsCard_menu {
        position: absolute;
        width: 300px;
        right: 0;
        top: 1.5rem;
        border: var(--primary-black) solid;
        background-color: var(--pale-white);
        z-index: 1;
        li {
          text-align: center;
        }
        li:hover {
          cursor: pointer;
          background-color: var(--secondary-gray-2);
        }
      }
      .homePage_card_pic_btn {
        position: absolute;
        width: 1rem;
        height: 1rem;
        font-size: 1.25rem;
        border-radius: 8px;
        top: 0;
        right: -1.5rem;
      }
      .pic_file {
        border: none;
        border-radius: 0px;
      }

      input {
        border-radius: 8px;
        width: 300px;
        height: 30px;
        margin-left: 1rem;
      }
      &_article {
        display: flex;
        // margin-bottom: 2rem;
        textarea {
          margin-left: 1rem;
          width: 300px;
          height: 200px;
          border: solid;
        }
      }
    }
    .homePage_card_send_btn {
      margin-top: 2rem;
      background-color: var(--accent-yellow);
      border-radius: 4px;
      width: 68px;
      height: 27px;
    }
  }
}
</style>

<script>
import { db } from "@/firebase/config"; //引入data base
import {
  addDoc,
  doc,
  getDoc,
  addDocs,
  deleteDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
} from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "view-ui-plus";
import useStorage from "@/composables/data/useStorage";
// const MarqueeKeywordDefault = [
//   { Id: "1", marqueeKeywordItem: "*球隊交易" },
//   { Id: "2", marqueeKeywordItem: "*MVP候選" },
//   { Id: "3", marqueeKeywordItem: "*熱門球隊" },
//   { Id: "4", marqueeKeywordItem: "*傷兵消息" },
//   { Id: "5", marqueeKeywordItem: "*比賽結果" },
//   { Id: "6", marqueeKeywordItem: "*紀錄突破" },
//   { Id: "7", marqueeKeywordItem: "*防禦統計" },
// ];
export default {
  data() {
    return {
      AddnewsText: "",
      AddnewsLink: "",
      AddMarquee: "",
      NewsKeyword: [],
      NewsCard: [],

      ArticleText: "",
      TitleText: "",
      SubTitleText: "",
      PicFile: "",
      SubFile: "",
      HaveNewsPic: "",
      HaveNewsSubPic: "",

      NewsCardPos: [],
      CurrentPos: 0,
      CurrentId: "V1Ted65d78HD8JPFL79q",
      NewsCardPosMenuShow: false,
      // NewsKeyword: [
      //   {
      //     Id: "1",
      //     KeyWord: "#WBC",
      //     Link: "https://www.youtube.com/watch?v=JwaztJhIisU&t=628s",
      //   },
      //   {
      //     Id: "2",
      //     KeyWord: "#精彩時刻",
      //     Link: "https://www.youtube.com/watch?v=2K90w_xYRFo",
      //   },
      //   {
      //     Id: "3",
      //     KeyWord: "#完全比賽",
      //     Link: "https://www.youtube.com/watch?v=7OfBXJYb6Jc&t=76s",
      //   },
      //   {
      //     Id: "4",
      //     KeyWord: "#張育誠",
      //     Link: "https://www.youtube.com/watch?v=60W-E3tq-34",
      //   },
      //   {
      //     Id: "5",
      //     KeyWord: "#大谷翔平",
      //     Link: "https://www.youtube.com/watch?v=yT0_dxTJs48&t=178s",
      //   },
      // ],

      MarqueeKeyword: [
        { Id: "1", KeyWord: "滑球" },
        { Id: "2", KeyWord: "投手教學" },
        { Id: "3", KeyWord: "Mike Trout" },
        { Id: "4", KeyWord: "打擊技巧" },
        { Id: "5", KeyWord: "二手商品" },
        { Id: "6", KeyWord: "商品出清" },
      ],
    };
  },
  methods: {
    updatePos(e, x) {
      this.CurrentPos = e;
      this.CurrentId = x;

      // console.log(e, x);
    },
    CloseMenu(e) {
      // console.log("e.target.closest", 111);
      if (e.target.closest(".menu_btn") === this.$refs.Pos) {
        this.NewsCardPosMenuShow = true;
      } else {
        this.NewsCardPosMenuShow = false;
      }
    },
    async AddNewsKeywordItem() {
      //新增最新消息關鍵字
      if (this.AddnewsText === "") {
        alert("請輸入關鍵字");
      } else {
        this.NewsKeyword.splice(0,this.NewsKeyword.length);//先將data內陣列清空
        //新增至NewsKeyword陣列內
        // let v = this.NewsKeyword.length;
        // this.NewsKeyword.push({
        //   KeyWord: this.AddnewsText,
        //   link: this.AddnewsLink,
        //   id: NewsKeywordCollection.id,
        //   order: v,
        // });
        const NewsKeywordCollection = doc(collection(db, "NEWSKEYWORD")); //新增至firebase
        const NewKeyword = {
          KeyWord: this.AddnewsText,
          Link: this.AddnewsLink,
          id: NewsKeywordCollection.id,
    
        };
        // console.log("index", this.NewsKeyword.order);
        console.log("id", this.NewsKeyword.id);
        // this.NewsKeyword.sort(function (a, b) {
        //     return a.order - b.order; // 升序排序
        //   });
        await setDoc(
          NewsKeywordCollection, //選擇集合
          NewKeyword, //新增資料
          NewsKeywordCollection.id //該筆資料id
        );
     
        this.GetData();//重新將firebase上的資料抓至陣列中
        this.resetNewsInput();
      }
    },
    NewsCardPosMenu() {
      this.NewsCardPos = this.NewsCard.map((e) => ({ pos: e.pos, id: e.id }));
      this.NewsCardPosMenuShow = !this.NewsCardPosMenuShow;
    },

    AddMarqueeKeywordItem() {
      //新增跑馬燈關鍵字
      if (this.AddMarquee === "") {
        alert("請輸入關鍵字");
      } else {
        let v = this.MarqueeKeyword.length;
        this.MarqueeKeyword.push({
          Id: v + 1,
          marqueeKeywordItem: this.AddMarquee,
        });
        this.resetMarqueeInput();
      }
    },

    resetNewsInput() {
      //把input清空
      this.AddnewsText = "";
      this.AddnewsLink = "";
    },
    resetMarqueeInput() {
      //把input清空
      this.AddMarquee = "";
    },
    async removeNews(e, item) {
      // console.log(id);
      //移除最新消息關鍵字

      const NewsKeywordCollection = doc(db, "NEWSKEYWORD", item.id);
      console.log("index", e);
      console.log("item", item);

      this.NewsKeyword.splice(e, 1); //從NewsKeyword移除

      await deleteDoc(NewsKeywordCollection); //從資料庫移除
    },
    removeMarquee(e) {
      //移除跑馬燈關鍵字
      this.MarqueeKeyword.splice(e, 1);
    },
    //從firebase引入NEWSKEYWORD資料
    async GetData() {
      try {
        const KeyWordCollection = collection(db, "NEWSKEYWORD"); // 取得集合
        const KeyWordDocuments = await getDocs(KeyWordCollection); // 取得集合內的所有物件
        KeyWordDocuments.forEach((x) => {
          // console.log("x.data",x.data());//陣列內的某一物件
          // console.log("x",x)
          const data = { ...x.data(), data_id: x.id }; //將x.data()拆開並塞入新屬性data_id:x.id後重新組成物件
          // console.log("data",data)
          this.NewsKeyword.push(data); // 物件轉陣列
        });
      } catch (err) {
        alert(err);
      }
    },
    //從firebase引入News資料
    async GetCardData() {
      try {
        const CardCollection = collection(db, "NEWS"); // 取得集合
        const CardDocuments = await getDocs(CardCollection); // 取得集合內的所有物件
        CardDocuments.forEach((x) => {
          // console.log(x.data());
          this.NewsCard.push(x.data()); // 物件轉陣列
        });
      } catch (err) {
        alert(err);
      }
    },

    //     AddData(){
    //  //Products的資料上傳到firebase
    //         const NewsKeywordCollection = collection(db, "NEWSKEYWORD");
    //         this.NewsKeyword.forEach(x =>
    //         {

    //          const docRef = addDoc(NewsKeywordCollection, x)//
    //           // console.log("資料", docRef);
    //         })
    // }

    ChangePic(e) {
      this.PicFile = e.target.files[0];
      this.HaveNewsPic = "1";
      // console.log("圖片", this.PicFile);
    },
    ChangeSubPic(e) {
      this.SubPicFile = e.target.files[0];
      this.HaveNewsSubPic = "1";
      // console.log("圖片2", this.SubPicFile);
    },
    async AddNewsCard() {
      if (
        this.HaveNewsPic != "" &&
        this.HaveNewsSubPic != "" &&
        this.ArticleText != "" &&
        this.TitleText != "" &&
        this.SubTitleText != ""
      ) {
        console.log("判斷");
        const { setPics } = useStorage(); //拉useStorage的setPics來用
        const NewsPic = await setPics("images/NEWS", [this.PicFile], "NewsPic"); //傳入(路徑,檔案,檔案名稱)並傳至資料庫,返回該檔案的urls[]
        const NewsSubPic = await setPics(
          "/images/NEWS",
          [this.SubPicFile],
          "NewsSubPic"
        ); //傳入(路徑,檔案,檔案名稱)並傳至資料庫,返回該檔案的urls[]
        //console.log("sss",NewsPic)

        //編輯最新消息卡片
        const NewsCardCollection = doc(db, "NEWS", this.CurrentId);
        await updateDoc(NewsCardCollection, {
          date: serverTimestamp(),
          pic: NewsPic[0],
          popup_pic: NewsSubPic[0],
          pos: this.CurrentPos,
          id: this.CurrentId,
          // text: "在這支球隊中，一位年輕的新秀球員嶄露頭角，成為了球隊的新希望。雖然他在球隊中賽龍躍馬，但他卻展現出了驚人的天賦和實力。他的出現為整個球隊注入了新的生機和能量。這位新秀球員不僅在守備上做得出色，而且在攻擊方面也表現出色。他總能在關鍵時刻挺身而出，帶領球隊向勝利進軍。在他的帶領下，球隊的整體實力也得到了提升，成績有了明顯的進步。儘管他還很年輕，但這位新秀球員已經成為球迷心中的寵兒。他們期待著他未來更加耀眼的表現，相信他將成為球隊的核心球員，帶領球隊走向更多的勝利。",
          // title: "新秀耀眼！",
          // title_breakpoint: "年輕球員成為球隊的希望",
          text: this.ArticleText,
          title: this.TitleText,
          title_breakpoint: this.SubTitleText,
        });
      } else {
        alert("內容不可為空");
        return;
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.CloseMenu);
    // this.AddData();
    this.GetData();
    this.GetCardData();
  },
};
</script>
