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
    <div class="support__menu page__margin--mid">
      <div class="support__menu--tit">
        <h1 class="page__tit--big">'{{searchName}}'검색 결과</h1>
        <div class="support__menu--count">
          총 {{list.length}} 개의 상품이 검색 되었습니다.
        </div>
      </div>
      <ul class="support__menu--list">
        <li
          v-for="item in list.slice(0, 20)"
          :key="item"
          class="support__result">
          <div class="support__result--top">
            <NuxtLink to="detail" class="support__result--tit page__split page__color--blue">{{item.tit}}</NuxtLink>
            <div class="page__color--lightGray">{{goodCount}}명에게 도움 되었습니다.</div>
          </div>
          <div>
            <div class="support__result--nav">
              <span class="support__result--home">Ocean Support</span>
              <span class="support__result--second">{{item.navTit}}</span>
              <span>{{item.navNow}}</span>
            </div>
            <span class="">{{item.data}}</span>
          </div>
          <div class="support__result--write page__split">{{item.write}}</div>
        </li>
      </ul>
    </div>
    <Pager></Pager>
  </div>
</template>

<script>
  import SideMenu from '../sideMenu'        // 고객센터 사이드 메뉴
  import Pager    from '@/blockComponents/pager'// 페이저
  export default {
    name: 'supportMenu',
    // layout: 'default',
    components: {
      SideMenu,
      Pager
    },
    data: () => ({
      navTit      :'검색결과',
      navNow      :'출금',
      searchName  :'코인',
      searchCount :'155',
      goodCount   :'64',
      list:[
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 ',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 ',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 ',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 ',
        },
        {
          tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
          navTit:'이용안내',
          navNow:'출금',
          date  :'2022.03.22 ',
          write :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디',
        },
        ],
        pager: [
          {num:''},{num:''},{num:''},{num:''},{num:''}
        ]
      }),
    methods: {
    }
  }
</script>
