<template>
  <GobackAndTitle :title="title" />

  <div class="recruitment_post">
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
                :src="picSrc"
                alt="userphoto"
                class="recruitment_aside_personalInfo_photo"
              />
            </div>

            <div class="recruitment_post_main_content_personalInfo_text">
              <div class="recruitment_post_main_content_personalInfo_name">
                {{ applyData.user?.lastname + applyData.user?.firstname }}
              </div>
              <div class="recruitment_post_main_content_personalInfo_item">
                <div
                  class="recruitment_post_main_content_personalInfo_item_title"
                >
                  地區:
                </div>
                <div
                  class="recruitment_post_main_content_personalInfo_item_text"
                >
                  {{ applyData.user?.area }}
                </div>
              </div>
              <div class="recruitment_post_main_content_personalInfo_item">
                <div
                  class="recruitment_post_main_content_personalInfo_item_title"
                >
                  信箱:
                </div>
                <div
                  class="recruitment_post_main_content_personalInfo_item_text"
                >
                  {{ applyData.user?.email }}
                </div>
              </div>
              <div class="recruitment_post_main_content_personalInfo_item">
                <div
                  class="recruitment_post_main_content_personalInfo_item_title"
                >
                  經歷:
                </div>
                <div
                  class="recruitment_post_main_content_personalInfo_item_text"
                >
                  <div class="levelbox"></div>
                  <div>{{ getlevelLabel(applyData.user?.exp) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="recruitment_post_main_content_SelfIntroduction">
            <div class="recruitment_post_main_content_SelfIntroduction_title">
              自我介紹
            </div>
            <p class="recruitment_post_main_content_SelfIntroduction_content">
              {{ applyData.text }}
            </p>
          </div>
        </div>
        <div class="recruitment_post_main_content_btn">
          <button
            type="button"
            @click="verifyPassStatus"
            :disabled="applyData.status === 1 || applyData.status === 2"
          >
            確認
          </button>
          <button
            @click="verifyDeclineStatus"
            :disabled="applyData.status === 1 || applyData.status === 2"
          >
            拒絕
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import GobackAndTitle from "@/components/recruitments/backside/GobackAndTitle";
import getData from "@/composables/data/getData";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useData from "@/composables/data/useData";
import useStorage from "@/composables/data/useStorage";
import { timestamp } from "@/firebase/config";

const { getDocument, getUser } = getData();
const { getPicsLink } = useStorage();
const { updateData, setDataSubCollection } = useData();

const title = ref("審核應徵");
const store = useStore();
const route = useRoute();
const router = useRouter();
const picSrc = ref("");

// const computedRenderApply = ref([]);
onMounted(async () => {
  // const data = store.state.ApplyRecords.find(
  //   (apply) => apply.id === route.query.id
  // );

  // if (!data) {
  //   const apply = await getDocument("APPLYS", route.query.id);
  //   // console.log(apply);
  //   const user = await getDocument("MEMBERS", apply.user_id);

  //   // console.log(user);
  //   const res = await getPicsLink(
  //     1,
  //     `images/MEMBERS/${store.state.user?.id}`,
  //     "member"
  //   );
  //   console.log(res);

  //   return (applyData.value = { ...apply, user, res });
  // }

  const apply = await getDocument("APPLYS", route.query.id);
  // console.log(apply);
  const user = await getDocument("MEMBERS", apply.user_id);
  const team = await getDocument("TEAMS", apply.team_id);

  // console.log(user);
  const res = await getPicsLink(1, `images/MEMBERS/${user.id}`, "member");

  picSrc.value = res ? res[0] : require("@/assets/images/icons/main-icon.png");
  applyData.value = { ...apply, user, team };

  // console.log(applyData.value);

  // 帶入user的大頭貼

  // if (!store.state.user?.id) {
  //   user = await getUser();
  // }
  // console.log(applyData.user_id);

  // console.log(picSrc.value);
});

const applyData = ref({});

const getlevelLabel = (exp) => {
  const levels = [
    {
      value: 0,
      label: "初心者",
    },
    {
      value: 1,
      label: "新手",
    },
    {
      value: 2,
      label: "老手",
    },
    {
      value: 3,
      label: "經歷不拘",
    },
  ];

  const levelObject = levels.find((status) => status.value === exp);
  return levelObject ? levelObject.label : "";
};

// 同意應徵者加入
const verifyPassStatus = () => {
  if (applyData.value.status === 1 || applyData.value.status === 2) {
    return;
  }
  updateData(
    { collectionName: "APPLYS", documentId: applyData.value.id },
    { status: 1 }
  );

  setDataSubCollection(
    {
      collectionName: "MEMBERS",
      documentId: applyData.value.user.id,
      subCollectionName: "NOTIFY",
    },
    {
      date: timestamp,
      title: `${applyData.value.team.teamName}邀請您加入`,
      team_id: applyData.value.team_id,
      read: false,
      status: true,
      type: 2,
      apply_id: applyData.value.id,
    }
  );

  alert("已同意應徵者加入!");
  router.push({ name: "recruitmentVerify" });
};

// 拒絕應徵者加入
const verifyDeclineStatus = () => {
  if (applyData.value.status === 1 || applyData.value.status === 2) {
    return;
  }

  updateData(
    { collectionName: "APPLYS", documentId: applyData.value.id },
    { status: -1 }
  );

  setDataSubCollection(
    {
      collectionName: "MEMBERS",
      documentId: applyData.value.user.id,
      subCollectionName: "NOTIFY",
    },
    {
      date: timestamp,
      title: `${applyData.value.team.teamName}拒絕您加入`,
      text: `非常抱歉，${applyData.value.team.teamName}拒絕您加入，您可以嘗試其他的隊伍！`,
      team_id: applyData.value.team_id,
      read: false,
      status: true,
      type: 0,
      apply_id: applyData.value.id,
    }
  );

  alert("已拒絕應徵者加入!");
  router.push({ name: "recruitmentVerify" });
};

// updateData;
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
        padding-right: 2.5rem;
        border-right: 2px solid var(--secondary-gray-2);
      }

      &_personalInfo {
        display: flex;
        gap: 1.5rem;
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
            letter-spacing: 5px;
            font-weight: 500;
          }
        }
        &_pic {
          width: 20rem;
          border-radius: 20rem;
          overflow: hidden;
          margin: auto;
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
        width: 100%;
        // max-width: 32vw;
        font-size: 1.25rem;
        background-color: var(--secondary-blue-4);
        border-radius: var(--round);
      }

      &_btn {
        margin: 0 auto;
        padding-left: 1rem;
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
        button:disabled {
          background-color: rgba(128, 128, 128, 0.18);
          color: var(--split-gray);
        }
      }
    }
  }

  .no-data {
    padding-top: 2rem;
    img {
      width: 100%;
      height: auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .recruitment_post {
    display: block;
    margin: 0;

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
          border: none;
          padding: 0;
        }
        &_entire::after {
          display: none;
        }
        &_SelfIntroduction_content {
          max-width: 80vw;
          margin: auto;
        }
        &_personalInfo {
          display: block;
          &_pic {
            // width: 6rem;
            width: 40vw;
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
          display: flex;
          padding: 0;
          margin: 2rem auto auto auto;
          justify-content: space-around;
          button {
            width: 40%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .recruitment_post_main_content_btn {
    display: block;
    button {
      width: 100%;
    }
  }
}
</style>
