<template>
  <div class="product_post_wrap">
    <div class="goback">
      <router-link to="/">
        <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
      </router-link>
    </div>
    <div class="product_post">
      <div class="product_post_caution">
        <div class="product_post_caution_icon">
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
        </div>
        <div class="product_post_caution_content">
          <div class="product_post_caution_content_title">請注意：</div>
          <p class="product_post_caution_content_text">
            平台僅供會員自由張貼拍賣訊息。<br /><br />
            進行交易時，確實比對貨品規格是否符合，並留下對方真實姓名(最好記下身分證字號)、
            聯絡方式，務必確認完整再行付款，以免產生糾紛。<br /><br />
            建議用網站匯款方式進行交易，較有保障。
          </p>
        </div>
      </div>

      <div class="product_post_info">
        <slot name="title">
          <div class="product_post_info_title">
            <div class="block"></div>
            <div>上傳基本資訊</div>
          </div>
        </slot>

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
              <label
                for="product_post_loation"
                class="product_post_info_content_formlist_inputlabel"
                >所在縣市：
              </label>
              <label
                for="product_post_price"
                class="product_post_info_content_formlist_inputlabel"
                ><span class="requiredMark">*</span>價錢：
              </label>
              <label
                for="product_post_email"
                class="product_post_info_content_formlist_inputlabel"
                ><span class="requiredMark">*</span>Email：
              </label>
              <label
                for="product_post_phone"
                class="product_post_info_content_formlist_inputlabel"
                ><span class="requiredMark">*</span>電話：
              </label>
              <label
                for="product_post_image"
                class="product_post_info_content_formlist_inputlabel"
                ><span class="requiredMark">*</span>商品圖片：
              </label>
              <label
                for="product_post_comment"
                class="product_post_info_content_formlist_inputlabel"
                ><span class="requiredMark">*</span>賣家留言：
              </label>
            </div>
            <div class="product_post_info_content_formlist_text">
              <input
                type="text"
                id="product_post_productname"
                class="product_post_info_content_formlist_input"
                maxlength="10"
                value
              />
              <!-- <selector-primary :options="options" value="currentCategory" @update-category="currentCategory = $event" /> -->
              <!-- <selector-primary :options="options2" value="currentLocation" @update-category="currentLocation = $event" /> -->

              <!-- selector-primary.vue
              emit('update-category', value) -->
              <select id="product_post_produccategory"></select>
              <select id="product_post_loation"></select>
              <input
                type="text"
                id="product_post_price"
                class="product_post_info_content_formlist_input"
              />
              <input
                type="email"
                id="product_post_email"
                class="product_post_info_content_formlist_input"
              />
              <input
                type="tel"
                id="product_post_phone"
                class="product_post_info_content_formlist_input"
              />
              <!-- <div class="product_post_info_content_formlist_inputfile">
                <font-awesome-icon icon="fa-solid fa-image" />
                <font-awesome-icon icon="fa-regular fa-circle-plus" />

                <input
                  type="file"
                  id="product_post_image"
                  class="product_post_info_content_formlist_input"
                />
              </div> -->
              <label for="product_post_image"
                ><img
                  src="~@/assets/images/MemberCenter/MemberCenter_Personal_pic.svg"
                  alt="MemberCenter_Personal_pic"
                />上傳商品圖片
                <input type="file" id="product_post_image" />
              </label>
              <textarea
                id="roduct_post_comment"
                cols="60"
                rows="10"
                maxlength="100"
                value
              ></textarea>
              <div class="product_post_info_content_formlist_btn">
                <button>取消</button>
                <button>刪除商品</button>
                <button>刊登商品</button>
              </div>
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
  padding-top: 8rem;
  .goback {
    font-size: 1.5rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    // width: 100%;
    max-width: 1200px;
    margin: auto;
    & a {
      display: inline-block;
      color: var(--primary-blue);
      font-size: 1.25rem;
      font-weight: 500;
      padding-bottom: 0.5rem;
      cursor: pointer;
      & span {
        color: var(--primary-blue);
        font-size: 1.25rem;
        padding-right: 0.5rem;
      }
    }
  }
  .product_post {
    background-color: var(--pale-white);
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 4rem 0;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    padding: 4rem 12rem;
    display: flex;
    gap: 4.5rem;
    @media screen and (max-width: 1600px) {
      padding: 4rem rem;
    }
    @media screen and (max-width: 1500px) {
      padding: 4rem 6rem;
    }
    @media screen and (max-width: 1400px) {
      padding: 4rem 1.5rem;
    }
    &_caution {
      width: 100%;
      height: 100%;
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
          font-weight: 500;
        }
        &_text {
          font-size: 1rem;
          line-height: 1.75;
          // white-space: pre-wrap;
          text-align: left;
        }
      }
    }
    &_info {
      &_title {
        display: flex;
        gap: 1.5rem;
        padding-bottom: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-blue);
        border-bottom: 2px solid var(--secondary-gray-2);
        margin-bottom: 3rem;
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
            .requiredMark {
              color: var(--caution-red);
            }

            &_item {
              display: flex;
              gap: 1.5rem;
            }
          }
          &_inputlabel:nth-child(7) {
            margin-bottom: 12rem;
          }

          &_input {
            width: 100%;
            border-radius: 10px;
            height: 3rem;
            font-size: 1.25rem;
            padding: 0.5rem;
            background-color: var(--secondary-blue-4);
            caret-color: var(--secondary-blue-1);

            // var(--secondary-blue-4);
            border: 0;
            // color: var(--secondary-blue-1);
            margin-bottom: 3rem;
            padding-left: 1rem;
          }
          // &_input::placeholder {
          //   text-align: right;
          //   line-height: 25rem;
          // } 先不用這個
          &_input:focus {
            outline: 2px var(--secondary-blue-1) solid;
            background-color: var(--pale-white);
          }
          &_text {
            margin-bottom: 60px;
            display: flex;
            flex-direction: column;
            select {
              width: 14rem;
              border-radius: 10px;
              border: 2px solid var(--secondary-blue-1);
              color: var(--secondary-blue-1);
              font-size: 1.5rem;
              outline: 0;
              margin-bottom: 3.5rem;
            }
            #product_post_image {
              display: none;
            }
            & label {
              display: flex;
              flex-direction: column;
              text-align: center;
              color: var(--secondary-blue-1);
              border: 2px dashed var(--secondary-blue-1);
              padding: 1.5rem;
              max-width: 12rem;
              cursor: pointer;
              & img {
                padding: 1rem;
                padding-left: 1.5rem;
                width: 8rem;
              }
              & input {
                display: none;
              }
            }
            & label:hover {
              background-color: var(--secondary-blue-4);
            }
            textarea {
              font-size: 1.25rem;
              line-height: 1.75;
              outline: 0;
              background-color: var(--secondary-blue-4);
              border: 0;
              border-radius: 10px;
              padding: 0.5rem;
              caret-color: var(--secondary-blue-1);
              padding-left: 1rem;
              margin-top: 2.5rem;
            }
            textarea:focus {
              outline: 2px var(--secondary-blue-1) solid;
              background-color: var(--pale-white);
            }
            button {
              width: 10rem;
              height: 3rem;
              border-radius: 10px;
            }
          }
          &_inputfile {
            width: 10rem;
            height: 10rem;
            flex-shrink: 0;
            border: 2px dashed var(--secondary-blue-1);
            color: var(--secondary-blue-1);
            font-size: 5rem;
            text-align: center;
            line-height: 9rem;
            margin-bottom: 3.5rem;
            .svg-inline--fa.fa-plus {
              color: var(--primary-blue);
              margin-bottom: -0.5rem;
              font-size: 2rem;
              margin-left: -1rem;
              stroke: #fff;
            }
          }
          &_btn {
            margin-top: 2rem;
            display: flex;
            justify-content: flex-end;
            gap: 2rem;
            font-size: 1.25rem;
            & button:nth-child(n) {
              border-radius: 10px;
              font-weight: 500;
              border: 0;
            }
            & button:nth-child(1) {
              border: 2px solid;
              border-color: var(--secondary-gray-3);
              color: var(--secondary-gray-3);
              background-color: #fff;
            }
            & button:nth-child(2) {
              background-color: var(--error-yellow);
              color: var(--secondary-gray-1);
              border: 0;
            }
            & button:nth-child(3) {
              background-color: var(--primary-blue);
              color: var(--pale-white);
            }
          }
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
