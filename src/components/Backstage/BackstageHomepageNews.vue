
<template>
 <div class="homePage">
          <div class="homePage_newsKeyword">
            <!-- 首頁最新消息管理 -->

            <div class="homePage_newsKeyword_title">最新消息關鍵字</div>
            <div class="homePage_newsKeyword_enter">
              <!-- 首頁最新消息輸入框 -->
              輸入關鍵字:<input type="text" />
            </div>
            <div class="homePage_newsKeyword_enter">
              輸入超連結:<input type="text" />
              <button class="homePage_newsKeyword_enter_btn"></button>
            </div>

            <div class="homePage_newsKeyword_form">
              <!--最新消息關鍵字表單  -->
              <div class="homePage_newsKeyword_form_title">
                <!--最新消息關鍵字表單標題  -->
                <div class="homePage_newsKeyword_form_title_text">
                  目前關鍵字
                </div>
              </div>
              <div class="homePage_newsKeyword_form_content">
                <div
                  v-for="item in newsKeyword"
                  :key="item.index"
                  class="newsKeyword_item"
                >
                  <button class="newsKeyword_item_del"></button>
                  <div class="newsKeyword_item_text">
                    {{ item.newsKeywordItem }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="homepage_marqueeKeyword">
            <!-- 首頁跑馬燈管理 -->
            <div class="homepage_marqueeKeyword_title">跑馬燈關鍵字</div>
            <div class="homepage_marqueeKeyword_enter">
              <!--  跑馬燈關鍵字輸入框-->
              輸入關鍵字: <input type="text" />
              <div class="homepage_marqueeKeyword_enter_btn"></div>
            </div>
            <!-- 跑馬燈關鍵字表單 -->
            <div class="homepage_marqueeKeyword_form">
              <div class="homepage_marqueeKeyword_form_title">
                <div class="homepage_marqueeKeyword_form_title_text">
                  目前關鍵字
                </div>
              </div>
              <!-- 跑馬燈關鍵字表單內容 -->
              <div class="homePage_marqueeKeyword_form_content">
                <div
                  v-for="item in marqueeKeyword"
                  :key="item.index"
                  class="marqueeKeyword_item"
                >
                  <button class="marqueeKeyword_item_del"></button>
                  <div class="marqueeKeyword_item_text">
                    {{ item.marqueeKeywordItem }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 最新消息卡片-------------------------- -->
          <div class="homePage_card_area">
            <div class="homePage_card">
              <div class="homePage_card_title">最新消息卡片</div>
              <div class="homePage_card_list">標題:<input type="text" /></div>
              <div class="homePage_card_list">日期:<input type="text" /></div>
              <div class="homePage_card_list">
                加入照片:<input type="text" />
                <button class="homePage_card_pic_btn"></button>
              </div>
              <div class="homePage_card_list homePage_card_list_article">
                文章內容:
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button class="homePage_card_send_btn">送出</button>
            </div>
          </div>
        </div>
        
    
</template>





<style scoped lang="scss">

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
        background-color: red;
        border-radius: 8px;
        position: absolute;
        top: 25%;
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

    &_del {
      width: 1rem;
      height: 1rem;
      background-color: red;
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
      background-color: red;
      border-radius: 8px;
      position: absolute;
      top: 25%;
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
      height: 1rem;
      background-color: red;
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
      .homePage_card_pic_btn {
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: red;
        border-radius: 8px;
        top: 25%;
        right: -1.5rem;
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
}</style>
<script>
export default{ data() {
    return {
      newsKeyword: [
        { newsKeywordItem: "＃球隊交易" },
        { newsKeywordItem: "＃MVP候選" },
        { newsKeywordItem: "＃熱門球隊" },
        { newsKeywordItem: "＃傷兵消息" },
        { newsKeywordItem: "＃比賽結果" },
        { newsKeywordItem: "＃紀錄突破" },
        { newsKeywordItem: "＃防禦統計" },
      ],
      marqueeKeyword: [
        { marqueeKeywordItem: "*球隊交易" },
        { marqueeKeywordItem: "*MVP候選" },
        { marqueeKeywordItem: "*熱門球隊" },
        { marqueeKeywordItem: "*傷兵消息" },
        { marqueeKeywordItem: "*比賽結果" },
        { marqueeKeywordItem: "*紀錄突破" },
        { marqueeKeywordItem: "*防禦統計" },
      ],
    };
  },}


</script>