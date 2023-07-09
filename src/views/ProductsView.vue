<template>
  <main class="products">
    <div class="wrapper">
      <section class="products_breadcrumb">
        <span>
          <router-link to="/">首頁</router-link>
        </span>
        <div class="icon">
          <img
            src="~@/assets/images/icons/arrow-right.png"
            alt="breadcrumb arrow"
          />
        </div>
        <span>
          <router-link to="/products">拍賣專區</router-link>
        </span>
      </section>

      <section class="products_content">
        <aside class="products_aside">
          <ProductsAsideSearch />
          <ProductsAsideTags :productTags="productTags" />
        </aside>

        <main class="products_main">
          <ProductsMainHeader />
          <ProductsMainItems :products="products" />
        </main>
      </section>
    </div>
  </main>
</template>

<script>
import ProductsAsideSearch from '@/components/products/productsAside/ProductsAsideSearch';
import ProductsAsideTags from '@/components/products/productsAside/ProductsAsideTags';
import ProductsMainHeader from '@/components/products/productsItems/ProductsMainHeader';
import ProductsMainItems from '@/components/products/productsItems/ProductsMainItems';

export default {
  components: {
    ProductsAsideSearch,
    ProductsAsideTags,
    ProductsMainHeader,
    ProductsMainItems,
  },
  data() {
    return {
      productTags: [
        { name: '#全部', type: 'all' },
        { name: '#球棒', type: 'bat' },
        { name: '#手套', type: 'glove' },
        { name: '#球衣', type: 'jersey' },
        { name: '#打擊手套', type: 'batting glove' },
        { name: '#球帽', type: 'cap' },
      ],
      products: [
        {
          pro_id: 11,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 02 / 13',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 3500,
          seller: {
            icon: '',
            msg: '再一次感謝親對小店的支持。',
          },
        },
        {
          product_id: 122,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2022 / 12 / 13',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 1500,
          seller: {
            icon: '',
            msg: '多麼焦急的等待就是為了看到現在的結果，親的好評對小店來說是多麼重要，它是對小店服務的肯定，更是對小店工作的默默支持，它不僅激發了小店追求更高標準的潛力，也是對小店最大的報酬，讓小店感覺到一切的付出都是那麼的值得，感謝親的支持，相信小店會做的更好，因為有親。也希望親時刻記得有小店這樣的一位期待者在期待親的再次光臨！',
          },
        },
        {
          product_id: 751,
          imgSrc: '',
          typeName: '手套',
          type: 'glove',
          title: '二手手套販賣中',
          date: '2023 / 01 / 11',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 15600,
          seller: {
            icon: '',
            msg: '再一次感謝親對小店的支持。',
          },
        },
        {
          product_id: 351,
          imgSrc: '',
          typeName: '打擊手套',
          type: 'batting glove',
          title: '二手打擊手套販賣中',
          date: '2023 / 05 / 13',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 3500,
          seller: {
            icon: '',
            msg: '希望親永遠記得小店陪伴在你的身邊。',
          },
        },
        {
          product_id: 461,
          imgSrc: '',
          typeName: '球衣',
          type: 'jersey',
          title: '球衣販賣中',
          date: '2023 / 07 / 03',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 2500,
          seller: {
            icon: '',
            msg: '多麼焦急的等待就是為了看到現在的結果，親的好評對小店來說是多麼重要，它是對小店服務的肯定，更是對小店工作的默默支持，它不僅激發了小店追求更高標準的潛力，也是對小店最大的報酬，讓小店感覺到一切的付出都是那麼的值得，感謝親的支持，相信小店會做的更好，因為有親。也希望親時刻記得有小店這樣的一位期待者在期待親的再次光臨！',
          },
        },
        {
          product_id: 251,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 06 / 04',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 450,
          seller: {
            icon: '',
            msg: '希望親永遠記得小店陪伴在你的身邊。',
          },
        },
        {
          product_id: 1151,
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 02 / 13',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 400,
          seller: {
            icon: '',
            msg: '希望親永遠記得小店陪伴在你的身邊。。',
          },
        },
        {
          product_id: 1551,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 05 / 27',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 500,
          seller: {
            icon: '',
            msg: '多麼焦急的等待就是為了看到現在的結果，親的好評對小店來說是多麼重要，它是對小店服務的肯定，更是對小店工作的默默支持，它不僅激發了小店追求更高標準的潛力，也是對小店最大的報酬，讓小店感覺到一切的付出都是那麼的值得，感謝親的支持，相信小店會做的更好，因為有親。也希望親時刻記得有小店這樣的一位期待者在期待親的再次光臨！',
          },
        },
        {
          product_id: 755,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 03 / 17',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 500,
          seller: {
            icon: '',
            msg: '多麼焦急的等待就是為了看到現在的結果，親的好評對小店來說是多麼重要，它是對小店服務的肯定，更是對小店工作的默默支持，它不僅激發了小店追求更高標準的潛力，也是對小店最大的報酬，讓小店感覺到一切的付出都是那麼的值得，感謝親的支持，相信小店會做的更好，因為有親。也希望親時刻記得有小店這樣的一位期待者在期待親的再次光臨！',
          },
        },
        {
          product_id: 1181,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 03 / 15',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 500,
          seller: {
            icon: '',
            msg: '多麼焦急的等待就是為了看到現在的結果，親的好評對小店來說是多麼重要，它是對小店服務的肯定，更是對小店工作的默默支持，它不僅激發了小店追求更高標準的潛力，也是對小店最大的報酬，讓小店感覺到一切的付出都是那麼的值得，感謝親的支持，相信小店會做的更好，因為有親。也希望親時刻記得有小店這樣的一位期待者在期待親的再次光臨！',
          },
        },
        {
          product_id: 13,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 03 / 15',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 500,
          seller: {
            icon: '',
            msg: '多麼焦急的等待就是為了看到現在的結果，親的好評對小店來說是多麼重要，它是對小店服務的肯定，更是對小店工作的默默支持，它不僅激發了小店追求更高標準的潛力，也是對小店最大的報酬，讓小店感覺到一切的付出都是那麼的值得，感謝親的支持，相信小店會做的更好，因為有親。也希望親時刻記得有小店這樣的一位期待者在期待親的再次光臨！',
          },
        },
        {
          product_id: 1,
          imgSrc: '',
          typeName: '球棒',
          type: 'bat',
          title: '二手球棒販賣中',
          date: '2023 / 03 / 15',
          desc: '使用約2年過保固，盒單都齊全，在手把有小瑕疵但不影響整體外觀與使用，實際練習與比賽次數也不多',
          price: 500,
          seller: {
            icon: '',
            msg: '多麼焦急的等待就是為了看到現在的結果，親的好評對小店來說是多麼重要，它是對小店服務的肯定，更是對小店工作的默默支持，它不僅激發了小店追求更高標準的潛力，也是對小店最大的報酬，讓小店感覺到一切的付出都是那麼的值得，感謝親的支持，相信小店會做的更好，因為有親。也希望親時刻記得有小店這樣的一位期待者在期待親的再次光臨！',
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.products {
  background-color: var(--secondary-blue-4);
  padding: 4rem 0;

  .wrapper {
    background-color: #fff;
    box-shadow: var(--shadow-heavy);
    border-radius: var(--round);
    padding: 3rem 12rem;
  }

  &_breadcrumb {
    margin-bottom: 4rem;
    display: flex;
    gap: 1.5rem;

    font-size: 1.25rem;

    span:first-child a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-underline-offset: 4px;
      // text-decoration-thickness: 2px;
    }
  }

  &_content {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;

    .block {
      width: 4px;
      height: 26px;
      background-color: var(--primary-blue);
    }

    .icon {
      display: flex;
      align-items: center;
    }
  }

  &_main_header_category,
  &_aside_search_title,
  &_aside_tags_title {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1rem;
    font-size: 1.25rem;
  }

  &_aside_search_title,
  &_aside_tags_title {
    border-bottom: 2px solid var(--secondary-gray-2);
    font-weight: 500;
    letter-spacing: 6px;
  }
}
</style>
