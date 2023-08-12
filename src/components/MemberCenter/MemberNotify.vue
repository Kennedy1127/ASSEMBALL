<template>
  <div class="Member_notify">
    <div
      class="Member_notify_join"
      v-for="item in $store.getters.userNotifysJoin"
      :key="item.join"
    >
      <div class="Member_notify_join_title">
        <span><font-awesome-icon icon="fa-solid fa-user" /></span>
        {{ item.title }}
      </div>
      <div class="Member_notify_join_content">
        {{ item.text }}
      </div>
    </div>

    <div
      class="Member_notify_order"
      v-for="item in $store.getters.userNotifysOrder"
      :key="item.order"
    >
      <div class="Member_notify_order_title">
        <span><font-awesome-icon icon="fa-solid fa-file-pen" /></span
        >{{ item.title }}
      </div>
      <div class="Member_notify_order_content">
        {{ item.text }}
      </div>
    </div>

    <div
      class="Member_notify_team"
      v-for="item in $store.getters.userNotifysTeam"
      :key="item.team"
    >
      <img
        :src="item.pic || require('@/assets/images/icons/main-icon.png')"
        alt="Member_notify_team_pic"
      />
      <div class="Member_notify_team_aside">
        <div class="Member_notify_team_aside_title">{{ item.title }}</div>
        <div class="Member_notify_team_aside_btn">
          <button @click="submitJoin(item)">確定</button>
          <button @click="submitReject(item)">拒絕</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useData from "@/composables/data/useData";
import { auth } from "@/firebase/config";
const { updateDataSubCollection } = useData();

export default {
  mounted() {
    this.$store.state.userNotifys.forEach((notify) => {
      updateDataSubCollection(
        {
          collectionName: "MEMBERS",
          documentId: auth.currentUser.uid,
          subCollectionName: "NOTIFY",
          subDocumentId: notify.id,
        },
        {
          read: true,
        }
      );
    });
  },

  data() {
    return {
      MemberNotifyJoin: [],
      MemberNotifyOrder: [],
      MemberNotifyTeam: [],
    };
  },

  methods: {
    submitJoin(data) {
      console.log(data);

      this.$store.state.userNotifys
        .filter((notify) => notify.type === 2)
        .forEach((notify) => {
          updateDataSubCollection(
            {
              collectionName: "MEMBERS",
              documentId: auth.currentUser.uid,
              subCollectionName: "NOTIFY",
              subDocumentId: notify.id,
            },
            {
              status: false,
            }
          );
        });
    },

    submitReject(data) {
      updateDataSubCollection(
        {
          collectionName: "MEMBERS",
          documentId: auth.currentUser.uid,
          subCollectionName: "NOTIFY",
          subDocumentId: data.id,
        },
        {
          status: false,
        }
      );

      const index = this.MemberNotifyTeam.findIndex(
        (notify) => notify.id === data.id
      );
      this.MemberNotifyTeam.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.Member_notify {
  position: fixed;
  z-index: 100;
  top: 6.5rem;
  left: 73.9%;
  border-radius: var(--round);
  box-shadow: var(--shadow-heavy);
  width: 100%;
  max-width: 25%;
  max-height: 100%;
  background-color: var(--pale-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.5rem;
  @media all and (max-width: 420px) {
    max-width: 100%;
    max-height: 90vh;
    left: 0;
    z-index: 48;
    top: 4.2rem;
    overflow: auto;
    padding-top: 1rem;
    padding-bottom: 4rem;
  }
  &_join {
    position: relative;
    width: 100%;
    height: 6rem;
    cursor: pointer;
    transition: all 0.09s ease-in-out;
    padding: 0.5rem;
    &_title {
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      & > span {
        padding-right: 0.5rem;
        color: var(--primary-blue);
      }
    }
    &_content {
      padding-left: 0.5rem;
      font-size: 0.875rem;
      color: var(--secondary-gray-1);
    }
  }
  &_join:hover {
    background-color: var(--secondary-blue-4);
  }
  &_order {
    position: relative;
    width: 100%;
    // max-width: 374px;
    height: 6rem;
    cursor: pointer;
    transition: all 0.09s ease-in-out;
    padding: 0.5rem;
    &_title {
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      & > span {
        padding-right: 0.5rem;
        color: var(--error-yellow);
      }
    }
    &_content {
      padding-left: 0.5rem;
      font-size: 0.875rem;
      color: var(--secondary-gray-1);
    }
  }
  &_order:hover {
    background-color: var(--secondary-blue-4);
  }
  &_team {
    position: relative;
    width: 100%;
    // max-width: 374px;
    height: 6rem;
    display: flex;
    flex-direction: row;
    transition: all 0.09s ease-in-out;
    cursor: pointer;
    padding: 0.5rem;
    & img {
      width: 65px;
      height: 65px;
      margin: 0.5rem;
    }
    &_aside {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      &_title {
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
      }
      &_btn {
        display: flex;
        gap: 1rem;
        padding-left: 0.5rem;
        padding-bottom: 0.5rem;
        & button:nth-child(1) {
          padding: 0.5rem 1rem;
          border-radius: var(--round);
          color: var(--secondary-gray-1);
          font-weight: 400;
          letter-spacing: 1.5px;
          background-color: var(--success-green);
          color: var(--pale-white);
          font-family: "Noto Sans TC";
          box-shadow: var(--shadow-heavy);
          transition: all 0.09s ease-in-out;
        }
        & button:nth-child(1):hover {
          background-color: rgb(30, 186, 90);
        }
        & button:nth-child(2) {
          padding: 0.5rem 1rem;
          border-radius: var(--round);
          color: var(--secondary-gray-1);
          font-weight: 600;
          font-family: "Noto Sans TC";
          background-color: var(--secondary-blue-3);
          letter-spacing: 1.5px;
          transition: all 0.09s ease-in-out;
        }
        & button:nth-child(2):hover {
          background-color: var(--secondary-blue-2);
        }
      }
    }
  }
  &_team:hover {
    background-color: var(--secondary-blue-4);
  }
}
</style>
