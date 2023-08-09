<template>
  <div class="RecruitmentArticle">
    <div class="RecruitmentArticle_window">
      <!-- 視窗header -->
      <div class="RecruitmentArticle_window_header">
        <div class="RecruitmentArticle_window_header_title">徵人文章清單</div>
        <button class="icon_reset" @click="Reset">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <div class="RecruitmentArticle_window_header_search">
          <input type="text" placeholder="搜尋" v-model="SearchText" />
          <button @click="updateSearch" class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <!-- 表格 -->
      <div class="RecruitmentArticle_table">
        <table class="RecruitmentArticle_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_name">球隊名稱</td>
            <td class="table_row_area">
              <ul class="table_row_area_menu" v-if="AreaMenuShow">
                <li
                  v-for="(item, index) in AreaArray"
                  :key="index"
                  @click="updateArea(item.Area)"
                >
                  {{ item.Area }}
                </li>
              </ul>
              地區
              <button @click="AreaMenu" class="table_row_menu" ref="Area">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_position">
              <ul class="table_row_position_menu" v-if="PositionMenuShow">
                <li
                  v-for="(item, index) in PositionArray"
                  :key="index"
                  @click="updatePosition(item.Position)"
                >
                  {{ item.Position }}
                </li>
              </ul>
              需求位置
              <button
                @click="PositionMenu"
                class="table_row_menu"
                ref="Position"
              >
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_date">
              <ul class="table_row_date_menu" v-if="DateMenuShow">
                <li
                  v-for="(item, index) in DateArray"
                  :key="index"
                  @click="updateDate(item.Date)"
                >
                  {{ item.Date }}
                </li>
              </ul>
              上架日期
              <button @click="DateMenu" class="table_row_menu" ref="Date">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_focus">
              <ul class="table_row_focus_menu" v-if="FocusMenuShow">
                <li
                  v-for="(item, index) in FocusArray"
                  :key="index"
                  @click="updateFocus(item.Focus)"
                >
                  {{ item.Focus }}
                </li>
              </ul>
              焦點文章 {{ focusNum }} /5
              <button @click="FocusMenu" class="table_row_menu" ref="Focus">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in ArticleList"
            :key="item.Id"
            class="table_row"
          >
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>
            <td class="table_row_area">
              {{ convertFont(item.Area) }}
            </td>
            <td class="table_row_position">{{ convertFont(item.Position) }}</td>
            <td class="table_row_date">{{ convertFont(item.Date) }}</td>
            <td class="table_row_focus">
       

              <input
                v-if="item.Focus"
                type="checkbox"
                checked
                @click="handleFocusChange(item, $event)"
                name="Focus"
              />
              <input
                v-else
                type="checkbox"
                @click="handleFocusChange(item, $event)"
                name="Focus"
              />
            </td>
          </tr>
        </table>
        <button class="btn_up" @click="pageup">
          <font-awesome-icon icon="fa-solid fa-angle-up" />
        </button>
        <button class="btn_down" @click="pagedown">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </button>
        <button class="btn_send">送出</button>
      </div>
    </div>

    <!-- 球隊留言清單 -->
    <div class="TeamMessage_window">
      <!-- 視窗header -->
      <div class="TeamMessage_window_header">
        <div class="TeamMessage_window_header_title">球隊留言清單</div>
        <button class="icon_reset" @click="TeamMessageReset">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <div class="TeamMessage_window_header_search">
          <input
            type="text"
            placeholder="搜尋"
            v-model="TeamMessageSearchText"
          />
          <button class="icon" @click="updateTeamMessageSearch">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <!-- 表格 -->
      <div class="TeamMessage_table">
        <table class="TeamMessage_table_form">
          <!-- 表頭 -->
          <tr class="table_row">
            <td class="table_row_name">球隊名稱</td>
            <td class="table_row_member">留言者</td>
            <td class="table_row_date">
              <ul class="table_row_date_menu" v-if="TeamMessageDateMenuShow">
                <li
                  v-for="(item, index) in TeamMessageDateArray"
                  :key="index"
                  @click="updateTeamMessageDate(item.Date)"
                >
                  {{ item.Date }}
                </li>
              </ul>
              上架日期
              <button
                @click="TeamMessageDateMenu"
                class="table_row_menu"
                ref="TeamMessageDate"
              >
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
            <td class="table_row_content">留言內容</td>
            <td class="table_row_focus">
              <ul class="table_row_focus_menu" v-if="TeamMessageFocusMenuShow">
                <li
                  v-for="(item, index) in TeamMessageFocusArray"
                  :key="index"
                  @click="updateTeamMessageFocus(item.Focus)"
                >
                  {{ item.Focus }}
                </li>
              </ul>
              焦點文章 {{ TeamMessageFocusNum }} /5
              <button
                @click="TeamMessageFocusMenu"
                class="table_row_menu"
                ref="TeamMessageFocus"
              >
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </td>
          </tr>
          <!-- 資料內容 -->
          <tr
            v-for="(item, index) in TeamMessageList"
            :key="index"
            class="table_row"
          >
            <td class="table_row_name">{{ convertFont(item.Name) }}</td>
            <td class="table_row_area">
              {{ convertFont(item.Member) }}
            </td>
            <td class="table_row_position">{{ convertFont(item.Date) }}</td>
            <td class="table_row_date">{{ convertFont(item.Content) }}</td>
            <td class="table_row_focus">
      

              <input
                v-if="item.Focus"
                type="checkbox"
                checked
                @click="handleTeamMessageFocusChange(item, $event)"
                name="Focus"
              />
              <input
                v-else
                type="checkbox"
                @click="handleTeamMessageFocusChange(item, $event)"
                name="Focus"
              />
            </td>
          </tr>
        </table>
        <button class="btn_up" @click="TeamMessagePageup">
          <font-awesome-icon icon="fa-solid fa-angle-up" />
        </button>
        <button class="btn_down" @click="TeamMessagePagedown">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </button>
        <button class="btn_send">送出</button>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase/config"; //引入data base
import { addDoc, doc, getDoc, addDocs } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      page: 1,
      perPage: 17,
      TeamMessagePage: 1,
      TeamMessagePerPage: 17,
      Article: [],
      TeamMessage: [],
      // Article: [
      //   {
      //     Id: "1",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "2",
      //     Name: "烈水鷹",
      //     Area: "台中",
      //     Position: "補手",
      //     Date: "2023/07/05",
      //     Focus: false,
      //   },

      //   {
      //     Id: "3",
      //     Name: "烈火鷹",
      //     Area: "台南",
      //     Position: "左外野手",
      //     Date: "2023/07/05",
      //     Focus: false,
      //   },

      //   {
      //     Id: "4",
      //     Name: "烈火鷹",
      //     Area: "台東",
      //     Position: "一壘手",
      //     Date: "2023/07/05",
      //     Focus: false,
      //   },

      //   {
      //     Id: "5",
      //     Name: "烈火鷹",
      //     Area: "金門",
      //     Position: "二壘手",
      //     Date: "2023/07/07",
      //     Focus: false,
      //   },

      //   {
      //     Id: "6",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "三壘手",
      //     Date: "2023/08/04",
      //     Focus: false,
      //   },

      //   {
      //     Id: "7",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "中外野手",
      //     Date: "2023/07/24",
      //     Focus: false,
      //   },
      //   {
      //     Id: "8",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "右外野手",
      //     Date: "2023/07/08",
      //     Focus: false,
      //   },
      //   {
      //     Id: "9",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "10",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "11",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "12",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },

      //   {
      //     Id: "13",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "14",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "15",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "16",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "17",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "18",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "19",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "20",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "21",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "22",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "23",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "24",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "25",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "26",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "27",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "28",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "投手",
      //     Date: "2023/07/04",
      //     Focus: false,
      //   },
      //   {
      //     Id: "29",
      //     Name: "烈火鷹",
      //     Area: "台北",
      //     Position: "游擊手",
      //     Date: "2023/12/04",
      //     Focus: false,
      //   },
      // ],
      // TeamMessage: [
      //   {
      //     Id: "1",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content:
      //       "留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容",
      //     Focus: false,
      //   },
      //   {
      //     Id: "2",
      //     Name: "烈水鷹",
      //     Member: "來福",
      //     Date: "2023/07/05",
      //     Content:
      //       "留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "3",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/05",
      //     Content:
      //       "留言內容留言內容留言內容留言內容留言內容留言內容留言內容留言內容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "4",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/05",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "5",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/05",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "6",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/14",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "7",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/14",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "8",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/14",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "9",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/24",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "10",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/24",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "11",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/24",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "12",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/24",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "13",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "14",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "15",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "16",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "17",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "18",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "19",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "20",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "21",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "22",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/08",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "23",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/08/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "24",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/08/04",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "25",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "26",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "27",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "28",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "29",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "30",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "31",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "32",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "33",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      //   {
      //     Id: "34",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "222222222222222222222222222222222",

      //     Focus: false,
      //   },
      //   {
      //     Id: "35",
      //     Name: "烈火鷹",
      //     Member: "來福",
      //     Date: "2023/07/04",
      //     Content: "3333333333333333333333333333容",

      //     Focus: false,
      //   },
      // ],
      AreaArray: [], //地區種類陣列(存放每一種地區並排除重複的)
      PositionArray: [],
      DateArray: [],
      FocusArray: [],

      TeamMessageDateArray: [],
      TeamMessageFocusArray: [],

      AreaMenuShow: false, //切換是否顯示下拉式選單
      PositionMenuShow: false,
      DateMenuShow: false,
      FocusMenuShow: false,

      TeamMessageDateMenuShow: false,
      TeamMessageFocusMenuShow: false,

      currentArea: 0, //當前篩選地區
      currentPosition: 0,
      currentDate: 0,
      currentFocus: 0,
      currentSearch: "",

      currentTeamMessageDate: 0,
      currentTeamMessageFocus: 0,
      currentTeamMessageSearch: "",
    };
  },
  computed: {
    focusNum() {
      //focus被勾了幾個
      return this.Article.filter((v) => v.Focus).length; //返回Article中Focus的項目組成的陣列的長度
    },
    TeamMessageFocusNum() {
      return this.TeamMessage.filter((v) => v.Focus).length;
    },
    ArticleFilterArea() {
      //篩選地區
      if (this.currentArea == 0) return this.Article; //還沒篩選時回傳所有資料
      return this.Article.filter((v) => v.Area == this.currentArea); //篩選現在點擊到的地區
    },
    ArticleFilterPosition() {
      //篩選位置
      if (this.currentPosition == 0) return this.ArticleFilterArea;
      return this.ArticleFilterArea.filter(
        (v) => v.Position == this.currentPosition
      ); //篩選現在點擊到的位置
    },
    ArticleFilterDate() {
      //篩選日期
      if (this.currentDate == 0) return this.ArticleFilterPosition;
      return this.ArticleFilterPosition.filter(
        (v) => v.Date == this.currentDate
      ); //篩選現在點擊到的日期
    },
    ArticleFilterFocus() {
      if (this.currentFocus === 0) return this.ArticleFilterDate;
      return this.ArticleFilterDate.filter((v) => v.Focus == this.currentFocus);
    },
    ArticleFilterSearch() {
      if (this.currentSearch == "") return this.ArticleFilterFocus;
      return this.ArticleFilterFocus.filter((v) =>
        v.Name.includes(this.currentSearch)
      );
    },
    ArticleList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.ArticleFilterSearch.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },

    TeamMessageFilterDate() {
      //篩選日期
      if (this.currentTeamMessageDate == 0) return this.TeamMessage;
      return this.TeamMessage.filter(
        (v) => v.Date == this.currentTeamMessageDate
      ); //篩選現在點擊到的日期
    },

    TeamMessageFilterFocus() {
      if (this.currentTeamMessageFocus === 0) return this.TeamMessageFilterDate;
      return this.TeamMessageFilterDate.filter(
        (v) => v.Focus == this.currentTeamMessageFocus
      );
    },
    TeamMessageFilterSearch() {
      if (this.currentTeamMessageSearch == "")
        return this.TeamMessageFilterFocus;
      return this.TeamMessageFilterFocus.filter((v) =>
        v.Name.includes(this.currentTeamMessageSearch)
      );
    },

    TeamMessageList() {
      //回傳頁碼對應的十筆索引值的資料組成的陣列
      return this.TeamMessageFilterSearch.slice(
        (this.TeamMessagePage - 1) * this.TeamMessagePerPage,
        this.TeamMessagePage * this.TeamMessagePerPage
      );
    },
  },
  methods: {
    handleFocusChange(focus, e) {
      e.preventDefault(); //阻止checkbox預設行為
      const index = this.Article.findIndex((v) => v.Id === focus.Id);
      //用findIndex方法返回=當前點到checkbox的物件id之索引值
      // console.log("當前物件索引值",index)

      if (this.Article[index].Focus || this.focusNum < 5)
        //用index的索引值來查找Products中的ProductsFocus是否為true
        this.Article[index].Focus = !this.Article[index].Focus;
    },
    handleTeamMessageFocusChange(focus, e) {
      e.preventDefault(); //阻止checkbox預設行為
      const index = this.TeamMessage.findIndex((v) => v.Id === focus.Id);
      if (this.TeamMessage[index].Focus || this.TeamMessageFocusNum < 5)
        this.TeamMessage[index].Focus = !this.TeamMessage[index].Focus;
    },
    CloseMenu(e) {
      if (e.target.closest(".table_row_menu") === this.$refs.Area) {
        //點擊到的物件=ref時開啟選單
        this.AreaMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Position) {
        this.PositionMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Date) {
        this.DateMenuShow = true;
      } else if (e.target.closest(".table_row_menu") === this.$refs.Focus) {
        this.FocusMenuShow = true;
      } else {
        //點擊到的物件不=ref時關閉選單
        this.AreaMenuShow = false;
        this.PositionMenuShow = false;
        this.DateMenuShow = false;
        this.FocusMenuShow = false;
      }
    },

    AreaMenu() {
      const AreaSet = new Set(this.Article.map((item) => item.Area));
      this.AreaArray = Array.from(AreaSet).map((item) => ({ Area: item })); //將set資料放進陣列
      this.AreaMenuShow = !this.AreaMenuShow;
    },
    PositionMenu() {
      const PositionSet = new Set(this.Article.map((item) => item.Position));
      this.PositionArray = Array.from(PositionSet).map((item) => ({
        Position: item,
      })); //將set資料放進陣列
      this.PositionMenuShow = !this.PositionMenuShow;
    },
    DateMenu() {
      const DateSet = new Set(this.Article.map((item) => item.Date));
      this.DateArray = Array.from(DateSet).map((item) => ({ Date: item })); //將set資料放進陣列
      this.DateMenuShow = !this.DateMenuShow;
    },
    TeamMessageDateMenu() {
      const TeamMessageDateSet = new Set(this.TeamMessage.map((e) => e.Date));
      this.TeamMessageDateArray = Array.from(TeamMessageDateSet).map((e) => ({
        Date: e,
      }));
      this.TeamMessageDateMenuShow = !this.TeamMessageDateMenuShow;
    },

    TeamMessageFocusMenu() {
      const TeamMessageFocusSet = new Set(this.TeamMessage.map((e) => e.Focus));
      this.TeamMessageFocusArray = Array.from(TeamMessageFocusSet).map((e) => ({
        Focus: e,
      }));
      this.TeamMessageFocusMenuShow = !this.TeamMessageFocusMenuShow;
    },
    TeamMessageCloseMenu(e) {
      if (e.target.closest(".table_row_menu") === this.$refs.TeamMessageDate) {
        //點擊到的物件=ref時開啟選單
        this.TeamMessageDateMenuShow = true;
      } else if (
        e.target.closest(".table_row_menu") === this.$refs.TeamMessageFocus
      ) {
        this.TeamMessageFocusMenuShow = true;
      } else {
        //點擊到的物件不=ref時關閉選單
        this.TeamMessageDateMenuShow = false;
        this.TeamMessageFocusMenuShow = false;
      }
    },
    FocusMenu() {
      const FocusSet = new Set(this.Article.map((item) => item.Focus));
      this.FocusArray = Array.from(FocusSet).map((item) => ({ Focus: item })); //將set資料放進陣列
      this.FocusMenuShow = !this.FocusMenuShow;
    },
    updateArea(a) {
      //把currentArea改成AreaArray對應項目的Area
      this.currentArea = a;
    },
    updatePosition(a) {
      this.currentPosition = a;
    },
    updateDate(a) {
      this.currentDate = a;
    },
    updateTeamMessageDate(a) {
      this.currentTeamMessageDate = a;
    },
    updateTeamMessageFocus(a) {
      this.currentTeamMessageFocus = a;
    },
    updateFocus(a) {
      this.currentFocus = a;
    },
    updateSearch() {
      this.currentSearch = this.SearchText;
      this.SearchText = "";
    },
    updateTeamMessageSearch() {
      this.currentTeamMessageSearch = this.TeamMessageSearchText;
    },
    Reset() {
      this.currentTeamMessageDate = 0;
      this.currentFocus = 0;
      this.currentDate = 0;
      this.currentPosition = 0;
      this.currentArea = 0;
      this.currentSearch = "";
    },
    TeamMessageReset() {
      (this.currentTeamMessageDate = 0),
        (this.currentTeamMessageFocus = 0),
        (this.currentTeamMessageSearch = "");
    },

    convertFont(str) {
      if(!str){
        return
      };
      //限制資料字數
      if (str.length > 10) {
        return str.slice(0, 10) + "...";
      } else {
        return str;
      }
    },
    // focuscheckChange(item) {
    //   //焦點商品checkbox切換
    //   item.ProductsFocus = !item.ProductsFocus;
    // },
    // topcheckChange(item) {
    //   //TOP商品checkbox切換
    //   item.ProductsTop = !item.ProductsTop;
    // },
    pageup() {
      if (this.page != 1) {
        //往上換頁
        this.page--;
      }
    },
    pagedown() {
      //往下換頁
      if (this.page < this.Article.length / this.perPage) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.page++;
      }
    },
    TeamMessagePageup() {
      if (this.TeamMessagePage != 1) {
        //往上換頁
        this.TeamMessagePage--;
      }
    },
    TeamMessagePagedown() {
      //往下換頁
      if (
        this.TeamMessagePage <
        this.TeamMessage.length / this.TeamMessagePerPage
      ) {
        // console.log("陣列長度", this.Products.length / this.perPage);
        this.TeamMessagePage++;
      }
    },

    //從firebase引入資料
    async GetData() {
      try {
        const ArticleCollection = collection(db, "BACKSTAGEARTICLE"); // 取得集合
        const ArticleDocuments = await getDocs(ArticleCollection); // 取得集合內的所有物件
        ArticleDocuments.forEach((x) => {
          // console.log(x.data());
          this.Article.push(x.data()); // 物件轉陣列
        });

        const TeamMessageCollection = collection(db, "BACKSTAGETEAMMESSAGE"); // 取得集合
        const TeamMessageDocuments = await getDocs(TeamMessageCollection); // 取得集合內的所有物件
        TeamMessageDocuments.forEach((x) => {
          // console.log(x.data());
          this.TeamMessage.push(x.data()); // 物件轉陣列
        });
      } catch (err) {
        alert(err);
      }
    },

    // AddArticleData() {
    //   //Article的資料上傳到firebase
    //   const ArticleCollection = collection(db, "BACKSTAGEARTICLE"); // 將ArticleCollection設定為BACKSTAGEARTICLE集合
    //   this.Article.forEach(
    //     (
    //       x //將Article資料逐筆新增至firebase
    //     ) => {
    //       //const docRef =
    //       addDoc(ArticleCollection, x); //
    //       // console.log("資料", docRef);
    //     }
    //   );
    // },
    // AddTeamMessageData() {
    //   //TeamMessage的資料上傳到firebase
    //   const TeamMessageCollection = collection(db, "BACKSTAGETEAMMESSAGE");
    //   this.TeamMessage.forEach(
    //     (
    //       x //將TeamMessage資料逐筆新增至firebase
    //     ) => {
    //       //const docRef =
    //       addDoc(TeamMessageCollection, x); //
    //       // console.log("資料", docRef);
    //     }
    //   );
    // },
  },
  mounted() {
    window.addEventListener("click", this.CloseMenu); //監聽如果任意位置有被點擊觸發CloseMenu
    window.addEventListener("click", this.TeamMessageCloseMenu);
    this.GetData();
    // this.AddArticleData();
    //  this.AddTeamMessageData();
  },
};
</script>
<style scoped lang="scss">
.RecruitmentArticle {
  width: 100%;
  padding: 10rem;
  &_window {
    //視窗
    width: 100%;
    height: 853px;
    background-color: var();
    border: var(--primary-black) solid;

    &_header {
      //視窗header
      padding: 1rem;
      width: 100%;
      background-color: var(--primary-blue);
      height: 111px;
      border-bottom: var(--primary-black) solid;
      display: flex;
      justify-content: space-between;
      position: relative;
      &_title {
        //視窗header標題
        font-size: 2.5rem;
        font-weight: 400;
        margin-left: 2rem;
      }
      .icon_reset {
        font-size: 1.5rem;
        color: var(--primary-black);
        position: absolute;
        top: 2rem;
        width: 2rem;
        height: 2rem;
        background-color: var(--primary-blue);
        right: 0.5rem;
        cursor: pointer;
      }
      &_search {
        //視窗header搜尋
        position: relative;
        margin-right: 2rem;
        input {
          width: 200px;
          border: var(--secondary-blue-2) solid;
          padding: 1rem;
          height: 63px;
          border-radius: var(--round);
          background-color: var(--secondary-blue-4);
          font-size: 1.25rem;
          font-weight: 400;
        }
        input:focus {
          background-color: var(--pale-white);
          outline: 2px solid var(--secondary-blue-1);
        }

        .icon {
          font-size: 1.5rem;
          color: var(--primary-blue);
          position: absolute;
          top: 40%;
          right: 1.25rem;
          transform: translateY(-50%);
          background-color: var(--pale-white);
        }
      }
    }
    .RecruitmentArticle_table {
      //表格
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 5rem;
      &_form {
        width: 100%;
        border-collapse: collapse;
        .table_row {
          //表格橫排

          width: 100%;
          //表格欄位設定
          td {
            white-space: nowrap; /* 不换行 */
            border: var(--primary-black) solid;
            background-color: var(--secondary-blue-2);
            text-align: center;
            font-size: 1rem;
            height: 2rem;
            button {
              background-color: var(--secondary-blue-2);
              color: var(--primary-blue);
            }
          }
          //個別欄位設定
          &_name {
            width: 20%;
          }
          &_area {
            width: 15%;
            position: relative;
            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 7rem;
              overflow: scroll;
              overflow-x: hidden;
              z-index: 1;
              li {
                padding: 0.1rem;
              }
              li:hover {
                cursor: pointer;
                background-color: var(--secondary-gray-2);
              }
            }
          }
          &_position {
            width: 20%;
            position: relative;
            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 7rem;
              overflow: scroll;
              overflow-x: hidden;
              z-index: 1;
              li {
                padding: 0.1rem;
              }
              li:hover {
                cursor: pointer;
                background-color: var(--secondary-gray-2);
              }
            }
          }
          &_date {
            width: 15%;
            position: relative;
            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 7rem;
              overflow: scroll;
              overflow-x: hidden;
              z-index: 1;
              li {
                padding: 0.1rem;
              }
              li:hover {
                cursor: pointer;
                background-color: var(--secondary-gray-2);
              }
            }
          }
          &_focus {
            width: 15%;
            position: relative;
            &_menu {
              top: 2rem;
              position: absolute;
              width: 100%;
              background-color: var(--pale-white);
              border-radius: 8px;
              height: 3rem;
              overflow: scroll;
              overflow-x: hidden;
              z-index: 1;
              li {
                padding: 0.1rem;
              }
              li:hover {
                cursor: pointer;
                background-color: var(--secondary-gray-2);
              }
            }
          }
        }
      }

      .btn_up {
        //往上換頁按鈕
        position: absolute;
        width: 40px;
        height: 40px;
        right: 4rem;
        top: 1rem;
        color: var(--primary-blue);
        font-size: 1.5rem;
        background-color: var(--pale-white);
      }
      .btn_down {
        //往下換頁按鈕
        position: absolute;
        width: 40px;
        height: 40px;
        right: 4rem;
        bottom: 1rem;
        color: var(--primary-blue);
        background-color: var(--pale-white);
        font-size: 1.5rem;
      }
      .btn_send {
        //送出按鈕
        position: absolute;
        width: 107px;
        height: 40px;
        border-radius: 8px;
        background-color: var(--accent-yellow);
        font-size: 1.25rem;
        bottom: 1rem;
        right: 40%;
      }
    }
  }
}

//球隊留言

.TeamMessage_window {
  //視窗
  margin-top: 10rem;
  width: 100%;
  height: 853px;
  background-color: var();
  border: var(--primary-black) solid;

  &_header {
    //視窗header
    padding: 1rem;
    width: 100%;
    background-color: var(--primary-blue);
    height: 111px;
    border-bottom: var(--primary-black) solid;
    display: flex;
    justify-content: space-between;
    position: relative;

    &_title {
      //視窗header標題
      font-size: 2.5rem;
      font-weight: 400;
      margin-left: 2rem;
    }
    .icon_reset {
      font-size: 1.5rem;
      color: var(--primary-black);
      position: absolute;
      top: 2rem;
      width: 2rem;
      height: 2rem;
      background-color: var(--primary-blue);
      right: 0.5rem;
      cursor: pointer;
    }
    &_search {
      //視窗header搜尋
      position: relative;
      margin-right: 2rem;
      input {
        width: 200px;
        border: var(--secondary-blue-2) solid;
        padding: 1rem;
        height: 63px;
        border-radius: var(--round);
        background-color: var(--secondary-blue-4);
        font-size: 1.25rem;
        font-weight: 400;
      }
      input:focus {
        background-color: var(--pale-white);
        outline: 2px solid var(--secondary-blue-1);
      }

      .icon {
        font-size: 1.5rem;
        color: var(--primary-blue);
        position: absolute;
        top: 40%;
        right: 1.25rem;
        transform: translateY(-50%);
        background-color: var(--pale-white);
      }
    }
  }
  .TeamMessage_table {
    //表格
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5rem;
    &_form {
      width: 100%;
      border-collapse: collapse;
      .table_row {
        //表格橫排

        width: 100%;
        //表格欄位設定
        td {
          white-space: nowrap; /* 不换行 */
          border: var(--primary-black) solid;
          background-color: var(--secondary-blue-2);
          text-align: center;
          font-size: 1rem;
          height: 2rem;
          button {
            background-color: var(--secondary-blue-2);
            color: var(--primary-blue);
          }
        }
        //個別欄位設定
        &_name {
          width: 20%;
        }
        &_member {
          width: 10%;
        }
        &_date {
          width: 15%;
          position: relative;
          &_menu {
            top: 2rem;
            position: absolute;
            width: 100%;
            background-color: var(--pale-white);
            border-radius: 8px;
            height: 7rem;
            overflow: scroll;
            overflow-x: hidden;
            z-index: 1;
            li {
              padding: 0.1rem;
            }
            li:hover {
              cursor: pointer;
              background-color: var(--secondary-gray-2);
            }
          }
        }
        &_content {
          width: 30%;
          position: relative;
        }
        &_focus {
          width: 15%;
          position: relative;
          &_menu {
            top: 2rem;
            position: absolute;
            width: 100%;
            background-color: var(--pale-white);
            border-radius: 8px;
            height: 3rem;
            overflow: scroll;
            overflow-x: hidden;
            z-index: 1;
            li {
              padding: 0.1rem;
            }
            li:hover {
              cursor: pointer;
              background-color: var(--secondary-gray-2);
            }
          }
        }
      }
    }

    .btn_up {
      //往上換頁按鈕
      position: absolute;
      width: 40px;
      height: 40px;
      right: 4rem;
      top: 1rem;
      color: var(--primary-blue);
      font-size: 1.5rem;
      background-color: var(--pale-white);
    }
    .btn_down {
      //往下換頁按鈕
      position: absolute;
      width: 40px;
      height: 40px;
      right: 4rem;
      bottom: 1rem;
      color: var(--primary-blue);
      background-color: var(--pale-white);
      font-size: 1.5rem;
    }
    .btn_send {
      //送出按鈕
      position: absolute;
      width: 107px;
      height: 40px;
      border-radius: 8px;
      background-color: var(--accent-yellow);
      font-size: 1.25rem;
      bottom: 1rem;
      right: 40%;
    }
  }
}
</style>
