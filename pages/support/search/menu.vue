<template>
  <div class="support page container__inner--max container__inner--padding">
    <div class="listPage__cont--top">
      <div class="support__nav">
        <NuxtLink to="home" class="support__nav--home">Ocean Support</NuxtLink>
        <NuxtLink to="menu" class="support__nav--now">{{navTit}}</NuxtLink>
      </div>
    </div>
      <div class="page__search">
        <div class="modalNftList__search--inner page__search--inner">
          <input type="text" placeholder="검색어를 입력해주세요.">
          <NuxtLink
            to="result"
          >
            <span class="page__img">
              <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
            </span>
          </NuxtLink>
        </div>
      </div>
    <div class="support__menu">
      <div class="support__menu--tit">
        <h1 class="page__tit--big tabMenu page__margin--mid">{{menuTit}}</h1>
      </div>
      <ul class="support__menu--list">
        <li
          v-for="item in list"
          :key="item"
          class="support__menu--name">
          <NuxtLink to="detail">{{item.tit}}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SideMenu from '../sideMenu'        // 고객센터 사이드 메뉴
  export default {
    name: 'supportMenu',
    // layout: 'default',
    components: {
      SideMenu
    },
    data: () => ({
      navTit   :'이용안내',
      menuTit  :'이용안내',
      goodCount:'64',
      list:[
        {tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?'},
        {tit   :'비밀번호를 분실하였습니다.'},
        {tit   :'제 계정이 해킹을 당했습니다.'},
        {tit   :'결제를 어떻게 하나요?'},
        {tit   :'제가 가진 NFT를 판매할 수 있나요?'},
        ]
      }),
    methods: {
    }
  }
</script>
