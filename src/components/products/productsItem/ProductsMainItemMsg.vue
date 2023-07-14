<template>
  <section class="product_message">
    <div class="product_message_title">
      <div class="product_message_title_block"></div>
      <span>{{ productMessage.Title }}</span>
    </div>
    <div class="product_message_area">
      <div
        class="product_message_area_all"
        v-for="item in messageArea"
        :key="item"
      >
        <div class="product_message_area_all_pic">
          <img
            class="product_message_area_all_pic_mark"
            src="~@/assets/images/products/mark.png"
            alt="mark"
          />
          <img
            class="product_message_area_all_pic_user"
            src="~@/assets/images/products/message_pic01.png"
            alt="message_pic01"
          />
        </div>
        <div class="product_message_area_all_text">
          <div class="product_message_area_all_text_name">
            {{ item.name }}
          </div>
          <div class="product_message_area_all_text_all">
            {{ item.textAll }}
          </div>
          <div class="product_message_area_all_text_date">
            <img src="~@/assets/images/products/edit.png" alt="edit" />
            {{ item.date }}
          </div>
        </div>
      </div>
    </div>
    <div class="product_message_importing">
      <div class="product_message_importing_user_pic">
        <img
          src="~@/assets/images/products/importing_pic.png"
          alt="importing_pic"
        />
      </div>
      <div class="product_message_importing_text">
        <textarea
          placeholder="請輸入留言內容......"
          name="comment"
          form="usrform"
        ></textarea>
        <button>送出</button>
      </div>
    </div>
    <div class="product_message_notice">
      <div class="product_message_notice_icon">
        <img src="~@/assets/images/products/notice.png" alt="notice" />
      </div>
      <div class="product_message_notice_text">
        <div class="product_message_notice_text_title">
          {{ noticeText.Title }}
        </div>
        <div class="product_message_notice_text_detail">
          {{ noticeText.Text }}
          <br />
          {{ noticeText.TextTwo }}
          <br />
          {{ noticeText.TextThree }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productMessage: {
        Title: "留言板",
      },
      messageArea: [
        {
          name: "棒球專家小楊",
          textAll:
            "小弟這隻是Louisville slugger木棒，打了大約四年，有些地方碎裂許多，基本上不能打硬球QQ....只能打練習場的軟球了。想約打棒球的也可以約起來ʘ‿ʘ",
          date: "留言日期：2023 / 07 / 06",
        },
        {
          name: "棒球迷阿真",
          textAll: "你好我有興趣！！",
          date: "留言日期：2023 / 07 / 06",
        },
      ],
      noticeText: {
        Title: "請注意：",
        Text: "平台僅供會員自由張貼拍賣訊息。",
        TextTwo:
          "進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、聯絡方式，務必確認完整再行付款，以免產生糾紛。",
        TextThree: "建議用網站匯款方式進行交易，較有保障。",
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
