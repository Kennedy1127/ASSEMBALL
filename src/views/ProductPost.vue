<template>
  <div class="product_post_wrap">
    <div class="goback">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />返回
    </div>
    <div class="product_post">
      <div class="product_post_caution">
        <div class="product_post_caution_icon">
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
        </div>
        <div class="product_post_caution_content">
          <div class="product_post_caution_content_title">請注意：</div>
          <p class="product_post_caution_content_text">
            平台僅供會員自由張貼拍賣訊息。<br />
            進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、
            聯絡方式，務必確認完整再行付款，以免產生糾紛。<br />
            建議用網站匯款方式進行交易，較有保障。
          </p>
        </div>
      </div>

      <div class="product_post_info">
        <div class="product_post_info_title">
          <div class="block"></div>
          <div>上傳基本資訊</div>
        </div>
        <div class="product_post_info_splitline"></div>
        <div class="product_post_info_content">
          <div class="product_post_info_content_formlist">
            <div class="product_post_info_content_formlist_item">
              <label
                for="product_post_productname"
                class="product_post_info_content_formlist_inputlabel"
                ><span class="requiredMark">*</span>商品名稱：
              </label>
              <label
                for="product_post_produccategory"
                class="product_post_info_content_formlist_inputlabel"
                ><span class="requiredMark">*</span>類別：
              </label>
            </div>
            <div class="product_post_info_content_formlist_text">
              <input
                type="text"
                id="product_post_productname"
                class="product_post_info_content_formlist_input"
              />
              <select id="product_post_produccategory"></select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.product_post_wrap {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  .goback {
    font-size: 1.5rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    // width: 100%;
    max-width: 1600px;
    margin: auto;
  }
  .product_post {
    background-color: var(--pale-white);
    padding: 4rem 0;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    padding: 100px 100px;
    display: flex;
    gap: 4.5rem;
    &_caution {
      width: 18vw;
      background-color: var(--secondary-blue-3);
      padding: 1.5rem;
      border-radius: 0.5rem;
      &_icon {
        color: var(--primary-blue);
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      &_content {
        padding: 1rem;
        margin: auto;
        background-color: var(--pale-white);
        border-radius: 0.5rem;
        &_title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--caution-red);
          font-weight: medium;
        }
        &_text {
          font-size: 1rem;
          line-height: 1.75;
        }
      }
    }
    &_info {
      &_title {
        display: flex;
        gap: 1.5rem;
        padding-bottom: 1rem;
        font-size: 2rem;
        color: var(--primary-blue);
        .block {
          width: 1rem;
          background-color: var(--primary-blue);
        }
      }
      &_content {
        &_formlist {
          display: flex;
          gap: 1rem;
          &_inputlabel {
            display: block;
            width: 200px;
            text-align: right;
            font-size: 1.25rem;
            color: var(--input-label-gray);
            margin-bottom: 4rem;

            &_item {
              display: flex;
              gap: 1.5rem;
            }
          }
          &_input {
            width: 36rem;
            border-radius: 10px;
            height: 3rem;
            font-size: 1.25rem;
            padding: 0.5rem;
            background-color: var(--secondary-blue-4);
            // var(--secondary-blue-4);
            border: 0;
            // color: var(--secondary-blue-1);
            margin-bottom: 4rem;
          }
          &_input:focus {
            outline: 2px var(--secondary-blue-1) solid;
          }
        }
        &_text {
          margin-bottom: 60px;
        }
        &_splitline {
          width: 100%;
          height: 1px;
          background-color: var(--split-gray);
          margin: 2rem 0;
        }
      }
    }
  }
}
</style>
