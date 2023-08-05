<template>
  <div class="home_auction_title">
    <h2>
      <router-link :to="{ name: 'Products' }"
        >棒球用品<br />二手拍賣<Icon type="ios-arrow-dropright-circle"
      /></router-link>
    </h2>
    <p>
      走進綠色棒球世界：<br />延續價值的環保二手拍賣專區，<br />讓棒球用品循環再利用。
    </p>
  </div>
  <div class="home_auction_all">
    <ul>
      <li
        v-for="(artist, i) in artists"
        :style="`background-image: url(${artist.backgroundUrl});`"
        role="button"
        :class="active === i ? 'active' : ''"
        @click="() => (active = i)"
      >
        <h2>{{ artist.classigicationName }}</h2>
        <button @click="goToProducts(artist.tag)">
          <Icon type="ios-baseball-outline" />{{ artist.classigicationBtn }}
        </button>
        <div class="content"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      artists: [
        {
          backgroundUrl: require("@/assets/images/index/classification_bat.jpg"),
          classigicationName: "Bat",
          classigicationBtn: "VIEW MORE",
          tag: 1,
        },
        {
          backgroundUrl: require("@/assets/images/index/classification_baseball.jpg"),
          classigicationName: "Baseball",
          classigicationBtn: "VIEW MORE",
          tag: 4,
        },
        {
          backgroundUrl: require("@/assets/images/index/classification_catcher_gear.jpg"),
          classigicationName: "Catcher's Gear",
          classigicationBtn: "VIEW MORE",
          tag: 5,
        },
        {
          backgroundUrl: require("@/assets/images/index/classification_hitter_gear.jpg"),
          classigicationName: "Hitter's Gear",
          classigicationBtn: "VIEW MORE",
          tag: 5,
        },
        {
          backgroundUrl: require("@/assets/images/index/classification_pitcher_gear.jpg"),
          classigicationName: "Pitcher's Gear",
          classigicationBtn: "VIEW MORE",
          tag: 7,
        },
        {
          backgroundUrl: require("@/assets/images/index/classification_accessories.jpg"),
          classigicationName: "Accessories",
          classigicationBtn: "VIEW MORE",
          tag: 3,
        },
      ],
    };
  },

  methods: {
    goToProducts(tag) {
      this.$router.push({ name: "Products", query: { tag } });
    },
  },
};
</script>

<style scoped lang="scss">
.home_auction_title {
  padding: 2rem 4rem 2rem 4rem;
  border-bottom: 3px solid var(--primary-blue);
  & h2 {
    & a {
      font-size: 2.5rem;
      color: var(--primary-blue);
      & i {
        vertical-align: baseline;
        margin-left: 0.5rem;
      }
      & br {
        display: none;
      }
    }
  }
  & p {
    font-size: 1.25rem;
    color: var(--primary-blue);
    & br {
      display: none;
    }
  }
}
.home_auction_all {
  ul {
    display: flex;
    min-height: 600px;
    height: 50vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
    width: 100%;
    min-width: 100%;
    flex-direction: column;

    @media only screen and (min-width: 769px) {
      flex-direction: row;
    }
  }

  li {
    flex: 1;
    display: flex;
    align-items: stretch;
    cursor: pointer;
    transition: all 0.35s ease;
    cursor: pointer;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    overflow: hidden;
    position: relative;
    & h2 {
      color: var(--secondary-blue-4);
      margin: auto;
      z-index: 21;
      writing-mode: vertical-lr;
      font-family: "Montserrat";
      font-size: 2.5rem;
      text-shadow: var(--shadow-heavy);
    }
    & button {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 21;
      width: 13rem;
      font-size: 1.25rem;
      font-family: "Montserrat";
      border-radius: 30px;
      padding: 0.5rem;
      background-color: var(--primary-blue);
      color: #fff;
      border: 1px solid var(--primary-blue);
      display: none;
      & i {
        font-size: 1.75rem;
        font-weight: 500;
        margin-right: 0.5rem;
        vertical-align: sub;
      }
    }
    & button:hover {
      border: 1px solid var(--primary-blue);
      background-color: #fff;
      color: var(--primary-blue);
    }
    &:before {
      content: "";
      position: absolute;
      z-index: 20;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 15, 15, 0.75);
    }

    &.active {
      flex: 6;
      cursor: default;
      & h2 {
        margin-right: 5%;
      }
      & button {
        display: block;
      }
      &:before {
        background: linear-gradient(
          180deg,
          rgba(195, 195, 195, 0) 40%,
          #111111 100%
        );
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .home_auction_title {
    padding: 1.5rem;
    border-bottom: 3px solid var(--primary-blue);
    text-align: center;
    & h2 {
      & a {
        font-size: 2.5rem;
        color: var(--primary-blue);
        & i {
          vertical-align: baseline;
          margin-left: 0.5rem;
        }
        & br {
          display: none;
        }
      }
    }
    & p {
      font-size: 1rem;
      font-weight: 500;
      & br {
        display: none;
      }
    }
  }
  .home_auction_all {
    ul {
      display: flex;
      min-height: 800px;
      height: 850px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      list-style-type: none;
      width: 100%;
      min-width: 100%;
      flex-direction: column;
    }

    li {
      & h2 {
        color: var(--secondary-blue-4);
        margin: auto;
        z-index: 21;
        writing-mode: horizontal-tb;
        font-family: "Montserrat";
        font-size: 2.5rem;
        text-shadow: var(--shadow-heavy);
      }
      & button {
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 21;
        width: 13rem;
        font-size: 1.25rem;
        font-family: "Montserrat";
        border-radius: 30px;
        padding: 0.5rem;
        background-color: var(--primary-blue);
        color: #fff;
        border: 1px solid var(--primary-blue);
        display: none;
        & i {
          font-size: 1.75rem;
          font-weight: 500;
          margin-right: 0.5rem;
          vertical-align: sub;
        }
      }
      & button:hover {
        border: 1px solid var(--primary-blue);
        background-color: #fff;
        color: var(--primary-blue);
      }
      &:before {
        content: "";
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(15, 15, 15, 0.75);
      }

      &.active {
        flex: 6;
        cursor: default;
        & h2 {
          margin: auto;
        }
        & button {
          display: block;
        }
        &:before {
          background: linear-gradient(
            180deg,
            rgba(195, 195, 195, 0) 40%,
            #111111 100%
          );
        }
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .home_auction_title {
    & h2 {
      & a {
        & i {
          display: none;
        }
        & br {
          display: none;
        }
      }
    }
    & p {
      & br {
        display: block;
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .home_auction_all {
    ul {
      display: flex;
      min-height: 750px;
      height: 750px;
    }
  }
}
</style>
