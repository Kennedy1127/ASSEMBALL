<template>
  <section class="ProductPayment">
    <div class="wrapper">
      <div class="ProductPayment_back_btn_link">
        <router-link :to="{ name: 'Products' }">
          <span><font-awesome-icon icon="fa-solid fa-angle-left" /></span>返回
        </router-link>
      </div>
      <div class="ProductPayment_title">
        <div class="block"><span>付款資訊</span></div>
      </div>
      <!-- 表單 -->
      <form
        action=""
        method="post"
        name="ProductPayment"
        class="ProductPayment_form"
        @submit.prevent="submitForm"
      >
        <div class="ProductPayment_form_title">
          <div class="ProductPayment_form_title_project">收件商品</div>
          <div class="ProductPayment_form_title_name">名稱</div>
          <div class="ProductPayment_form_title_price">價格</div>
          <div class="ProductPayment_form_title_date">購買日期</div>
        </div>
        <div
          class="ProductPayment_form_item"
          v-for="item in ProductPaymentItem"
          :key="item.Payment"
        >
          <img :src="item.imgSrc" :alt="ProductPayment_form_item_pic" />
          <div class="ProductPayment_form_item_name">{{ item.name }}</div>
          <div class="ProductPayment_form_item_price">{{ item.price }}</div>
          <div class="ProductPayment_form_item_date">{{ item.date }}</div>
        </div>
        <div class="ProductPayment_form_title">
          <div class="ProductPayment_form_title_recipient">收件人資訊</div>
        </div>
        <div class="ProductPayment_form_phone">
          <label for="phone"><span>*</span>手機號碼：</label>
          <input
            type="text"
            name="ProductPayment_phone"
            id="phone"
            placeholder="請輸入手機號碼(格式：09xx-xxxxxx)"
            v-model="phone"
            maxlength="11"
            pattern="09\d{2}-\d{6}"
            required
          />
        </div>
        <div class="ProductPayment_form_address">
          <label for="address"><span>*</span>收件地址：</label>
          <input
            type="text"
            name="ProductPayment_address"
            id="address"
            placeholder="請輸入詳細地址"
            v-model="address"
            pattern="[^%&',;=?$\x22]+"
            required
          />
        </div>
        <div class="ProductPayment_form_title">
          <div class="ProductPayment_form_title_Payment">付款資訊</div>
        </div>
        <div class="ProductPayment_form_card">
          <div class="ProductPayment_form_card_creditCardNumber">
            <label for="creditCardNumber"><span>*</span>信用卡號：</label>
            <input
              type="text"
              name="ProductPayment_creditCardNumber"
              id="creditCardNumber"
              placeholder="請輸入信用卡號(16碼)"
              v-model="creditCardNumber"
              maxlength="17"
              pattern="^\d{16}$"
              required
            />
          </div>
          <div class="ProductPayment_form_card_creditCardDate">
            <label for="creditCardDate"><span>*</span>到期日：</label>
            <input
              type="text"
              name="ProductPayment_creditCardDate"
              id="creditCardDate"
              v-model="creditCardDate"
              placeholder="(3碼)"
              maxlength="3"
              pattern="^\d{3}$"
              required
            />
          </div>
          <div class="ProductPayment_form_card_creditCardCVV">
            <label for="creditCardNumber"><span>*</span>CVV：</label>
            <input
              type="text"
              name="ProductPayment_creditCardCVV"
              id="creditCardCVV"
              v-model="creditCardCVV"
              placeholder="(3碼)"
              maxlength="3"
              pattern="^\d{3}$"
              required
            />
          </div>
        </div>
        <div class="ProductPayment_form_btn">
          <input type="submit" value="結帳" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
/////////////////////////

export default {
  data() {
    return {
      // 表單資料
      phone: "",
      address: "",
      creditCardNumber: "",
      creditCardDate: "",
      creditCardCVV: "",
      ////////////////////
      ProductPaymentItem: [
        {
          imgSrc: require("@/assets/images/products/ProductPayment_pic1.png"),
          name: "酷炫手套",
          price: "$4,500",
          date: "2023 / 05 / 17",
        },
      ],
    };
  },
  methods: {
    //提交表單
    submitForm() {
      alert("付款資料提交成功！");
      // 表單資料確認
      console.log("手機號碼：", this.phone);
      console.log("收件地址：", this.address);
      console.log("信用卡號：", this.creditCardNumber);
      console.log("到期日：", this.creditCardDate);
      console.log("CVV：", this.creditCardCVV);

      //提交後重置表單資料
      this.phone = "";
      this.address = "";
      this.creditCardNumber = "";
      this.creditCardDate = "";
      this.creditCardCVV = "";
    },
  },
};
</script>

<style lang="scss">
.ProductPayment {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 8rem;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 8rem;
    margin-top: 2rem;
    @media all and (max-width: 420px) {
      padding: 2rem 2rem;
    }
  }
  &_title {
    font-size: 1.5rem;
    display: flex;
    gap: 2rem;
    align-content: end;
    align-items: end;
    color: var(--primary-blue);
    font-weight: 600;
    margin-bottom: 3rem;
    & div {
      border-left: 1rem solid var(--primary-blue);
      & span {
        padding-left: 1.5rem;
      }
    }
  }
  &_back_btn_link {
    margin-bottom: 3rem;
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
  &_form {
    &_title {
      display: flex;
      padding: 0.5rem;
      background-color: var(--secondary-blue-3);
      min-height: 4rem;
      font-size: 1.25rem;
      justify-content: space-evenly;
      margin-bottom: 2rem;
      align-items: center;
      color: var(--secondary-gray-3);
      padding-right: 5rem;
      @media all and (max-width: 420px) {
        padding-right: 0rem;
      }
    }
    &_item {
      display: flex;
      flex-direction: row;
      margin-bottom: 2rem;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.5rem;
      font-size: 1.25rem;
      padding-bottom: 2rem;
      & img {
        width: 89px;
        height: 101px;
        margin-left: 2rem;
      }
      &_name {
        padding-left: 2rem;
      }
      &_price {
        font-weight: 600;
        color: var(--accent-red);
      }
      &_date {
        padding-right: 4rem;
      }
    }
    &_phone {
      display: flex;
      flex-direction: column;
      padding-bottom: 2rem;
      & label {
        font-size: 1.25rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        padding-bottom: 1rem;
        & span {
          color: var(--accent-red);
        }
      }
      & input {
        width: 30%;
        border: none;
        border-radius: var(--round);
        background-color: var(--secondary-blue-4);
        padding: 1rem 0;
        padding-left: 1rem;
        font-size: 1rem;
        @media all and (max-width: 420px) {
          width: 100%;
        }
      }
      & input:focus {
        outline: 2px solid var(--secondary-blue-1);
        background-color: var(--pale-white);
      }
    }
    &_address {
      display: flex;
      flex-direction: column;
      padding-bottom: 0.5rem;
      padding-bottom: 3rem;
      & label {
        font-size: 1.25rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        padding-bottom: 1rem;
        & span {
          color: var(--accent-red);
        }
      }
      & input {
        border: none;
        border-radius: var(--round);
        background-color: var(--secondary-blue-4);
        padding: 1rem 0;
        padding-left: 1rem;
        font-size: 1rem;
      }
      & input:focus {
        outline: 2px solid var(--secondary-blue-1);
        background-color: var(--pale-white);
      }
    }
    &_card {
      display: flex;
      gap: 2rem;
      @media all and (max-width: 420px) {
        flex-direction: column;
        gap: 1rem;
      }
      &_creditCardNumber {
        flex: 2 1 100px;
        display: flex;
        flex-direction: column;
        padding-bottom: 0.5rem;
        padding-bottom: 3rem;
        @media all and (max-width: 420px) {
          padding-bottom: 1rem;
        }
        & label {
          font-size: 1.25rem;
          color: var(--secondary-gray-1);
          font-weight: 400;
          padding-bottom: 1rem;
          & span {
            color: var(--accent-red);
          }
        }
        & input {
          width: 100%;
          border: none;
          border-radius: var(--round);
          background-color: var(--secondary-blue-4);
          padding: 1rem 0;
          padding-left: 1rem;
          font-size: 1rem;
        }
        & input:focus {
          outline: 2px solid var(--secondary-blue-1);
          background-color: var(--pale-white);
        }
      }
      &_creditCardDate {
        display: flex;
        flex-direction: column;
        padding-bottom: 0.5rem;
        padding-bottom: 3rem;
        @media all and (max-width: 420px) {
          padding-bottom: 1rem;
        }
        & label {
          font-size: 1.25rem;
          color: var(--secondary-gray-1);
          font-weight: 400;
          padding-bottom: 1rem;
          & span {
            color: var(--accent-red);
          }
        }
        & input {
          border: none;
          border-radius: var(--round);
          background-color: var(--secondary-blue-4);
          padding: 1rem 0;
          padding-left: 1rem;
          font-size: 1rem;
        }
        & input:focus {
          outline: 2px solid var(--secondary-blue-1);
          background-color: var(--pale-white);
        }
      }
      &_creditCardCVV {
        display: flex;
        flex-direction: column;
        padding-bottom: 0.5rem;
        padding-bottom: 3rem;
        & label {
          font-size: 1.25rem;
          color: var(--secondary-gray-1);
          font-weight: 400;
          padding-bottom: 1rem;
          & span {
            color: var(--accent-red);
          }
        }
        & input {
          border: none;
          border-radius: var(--round);
          background-color: var(--secondary-blue-4);
          padding: 1rem 0;
          padding-left: 1rem;
          font-size: 1rem;
        }
        & input:focus {
          outline: 2px solid var(--secondary-blue-1);
          background-color: var(--pale-white);
        }
      }
    }
    &_btn {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      & input {
        padding: 1rem 6rem;
        border-radius: 2rem;
        color: var(--secondary-gray-1);
        font-weight: 400;
        font-size: 1.25rem;
        letter-spacing: 3px;
        background-color: var(--accent-red);
        color: var(--pale-white);
        font-family: "Noto Sans TC";
        box-shadow: var(--shadow-heavy);
        transition: all 0.09s ease-in-out;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
        cursor: pointer;
      }
      & input:hover {
        background-color: var(--error-yellow);
      }
    }
  }
}
</style>
