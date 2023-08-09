<template>
  <section class="test">
    <div class="wrapper">
      <div>
        <router-link :to="{ name: 'Home' }">我是前台</router-link>
        <router-link :to="{ name: 'BackstageLogin' }">我是後台</router-link>
     
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.test {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;
  padding-top: 8rem;
  &_backlink {
    width: 100%;
    padding: 0 8rem;
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
  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 8rem;
    margin-top: 2rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10rem;
      a:nth-child(1) {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: var(--primary-blue);
        text-align: center;
        line-height: 300px;
        color: #fff;
        font-size: 3rem;
      }
      a:nth-child(1):hover {
        background-color: var(--accent-red);
      }
      a:nth-child(2) {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: var(--primary-blue);
        text-align: center;
        line-height: 300px;
        color: #fff;
        font-size: 3rem;
      }
      a:nth-child(2):hover {
        background-color: var(--success-green);
      }
    }
  }
}
</style>
