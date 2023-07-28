<template>
  <GobackAndTitle :title="title" />

  <div class="recruitment_post">
    <section class="recruitment_post_aside">
      <!-- <aside class="recruitment_post_aside"> -->
      <RecruitmentPostAside />
      <!-- </aside> -->
    </section>
    <main class="recruitment_post_main">
      <section class="recruitment_post_breadcrumb">
        <router-link :to="{ name: 'recruitmentVerify' }">
          <font-awesome-icon
            icon="fa-solid fa-chevron-left"
            style="color: var(--primary-blue)"
          />
          返回</router-link
        >
      </section>
      <div class="recruitment_post_main_title">
        <div class="block"></div>
        <div>審核應徵</div>
      </div>
      <div class="recruitment_post_main_content">
        <div class="recruitment_post_main_content_entire">
          <div class="recruitment_post_main_content_personalInfo">
            <div class="recruitment_post_main_content_personalInfo_pic">
              <img
                src="~@/assets/images/recruitment/applicant/applicant-1.jpg"
                alt="userphoto"
                class="recruitment_aside_personalInfo_photo"
              />
            </div>

            <div class="recruitment_post_main_content_personalInfo_text">
              <div class="recruitment_post_main_content_personalInfo_name">
                David Wang
              </div>
              <div class="recruitment_post_main_content_personalInfo_item">
                <div
                  class="recruitment_post_main_content_personalInfo_item_title"
                >
                  地區 :
                </div>
                <div
                  class="recruitment_post_main_content_personalInfo_item_text"
                >
                  台中市
                </div>
              </div>
              <div class="recruitment_post_main_content_personalInfo_item">
                <div
                  class="recruitment_post_main_content_personalInfo_item_title"
                >
                  信箱 :
                </div>
                <div
                  class="recruitment_post_main_content_personalInfo_item_text"
                >
                  davidwang2023@gmail.com
                </div>
              </div>
              <div class="recruitment_post_main_content_personalInfo_item">
                <div
                  class="recruitment_post_main_content_personalInfo_item_title"
                >
                  經歷 :
                </div>
                <div
                  class="recruitment_post_main_content_personalInfo_item_text"
                >
                  <div class="levelbox"></div>
                  <div>初新者</div>
                </div>
              </div>
            </div>
          </div>
          <div class="recruitment_post_main_content_SelfIntroduction">
            <div class="recruitment_post_main_content_SelfIntroduction_title">
              自我介紹
            </div>
            <p class="recruitment_post_main_content_SelfIntroduction_content">
              您好！我叫David，希望能加入這支棒球隊！<br /><br />
              我對棒球充滿熱情，剛接觸棒球1年多的時間。我擅長打擊打擊，也樂意學習其他位置。我是一個積極態度的球員，喜歡團隊合作，並願意盡力幫助隊友。在球場上，我努力執行指示，並全力以赴。希望能和大家一起成長、取得出色的成績，謝謝！
            </p>
          </div>
        </div>
        <div class="recruitment_post_main_content_btn">
          <button>確認</button>
          <button>拒絕</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import GobackAndTitle from "@/components/recruitments/backside/GobackAndTitle";
import RecruitmentPostAside from "@/components/recruitments/backside/RecruitmentPostAside";
import RecruitmentSearchbar from "@/components/recruitments/backside/RecruitmentSearchbar";
import RecruitmentTable from "@/components/recruitments/backside/RecruitmentTable";
import ProductsMainPagination from "@/components/products/productsItems/ProductsMainPagination";
export default {
  data() {
    return {
      title: "審核應徵",
    };
  },

  components: {
    GobackAndTitle,
    RecruitmentPostAside,
    RecruitmentSearchbar,
    RecruitmentTable,
    ProductsMainPagination,
  },
};
</script>

<style lang="scss">
.recruitment_post {
  margin-top: 6rem;
  display: flex;
  &_breadcrumb {
    margin-bottom: 4rem;
    display: flex;
    gap: 1.5rem;

    font-size: 1.25rem;

    a {
      color: var(--primary-blue);
    }

    span:first-child a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
      // text-decoration-thickness: 2px;
    }
  }
  &_main {
    width: 100%;
    padding: 2rem 5rem;
    // background-color: red;
    & > div {
      margin-bottom: 3rem;
    }
    &_title {
      display: flex;
      gap: 1.5rem;
      padding-bottom: 1rem;
      font-size: 2rem;
      color: var(--primary-blue);
      font-weight: 600;
      .block {
        width: 1rem;
        background-color: var(--primary-blue);
      }
    }
    &_content {
      display: flex;
      width: 100%;
      &_entire {
        width: 70%;
        color: #535666;
        position: relative;
      }
      &_entire::after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        width: 2px;
        background-color: var(--secondary-gray-2);
      }
      &_personalInfo {
        display: flex;
        gap: 3rem;
        margin-bottom: 1rem;
        // width: 100%;
        &_text {
          width: 100%;
        }
        &_text > div {
          margin: 1rem 0;
        }
        &_item {
          display: flex;
          width: 100%;

          &_title {
            width: 10%;
            font-weight: 500;
          }
        }
        &_pic {
          width: 20rem;
          border-radius: 20rem;
          overflow: hidden;
          img {
            display: block;
            margin: auto;
            width: 100%;
            height: auto;
          }
        }
        &_name {
          font-size: 1.5rem;
          font-weight: 700;
        }
        &_item {
          font-size: 1.25rem;
          color: #535666;

          .levelbox {
            width: 1.5rem;
            height: 1.5rem;
            background-color: #ffc0c0;
          }
        }
        &_item {
          &_text {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        }
      }
      &_SelfIntroduction_title {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      &_SelfIntroduction_content {
        padding: 2rem;
        max-width: 32vw;
        font-size: 1.25rem;
        background-color: var(--secondary-blue-4);
        border-radius: var(--round);
      }

      &_btn {
        margin-left: 6rem;
        button {
          display: block;
          width: 10rem;
          height: 3rem;
          font-size: 1.5rem;
          font-weight: 500;
          border-radius: 10px;
          margin-bottom: 3rem;
        }
        button:nth-child(1) {
          background-color: var(--primary-blue);
          color: var(--pale-white);
        }
        button:nth-child(2) {
          background-color: var(--secondary-blue-2);
          color: var(--secondary-gray-1);
        }
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .recruitment_post {
    display: block;
    margin: 0;
    &_aside {
      // TODO:在思考要不要把側邊欄拿掉(設計圖原本有)
      // display: none;
    }
    &_breadcrumb {
      display: none;
    }
    &_main {
      padding: 2rem;
      &_title {
        display: none;
      }
      &_content {
        display: block;
        &_entire {
          width: 100%;
        }
        &_entire::after {
          display: none;
        }
        &_SelfIntroduction_content {
          max-width: 80vw;
        }
        &_personalInfo {
          display: block;
          &_pic {
            // width: 6rem;
            width: 80vw;
            margin: auto;
            margin-bottom: 2rem;
          }
          &_item {
            &_title {
              width: fit-content;
              margin-right: 0.5rem;
            }
          }
          &_item:nth-child(3) {
            display: block;
          }
        }
        &_btn {
          margin-top: 2rem;
          margin: 2rem auto auto auto;
          button {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
