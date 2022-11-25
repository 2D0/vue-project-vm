<template>
  <div class="support page container__inner--max container__inner--padding">
    <BasicModal
      v-if="basicModal == true"
      :helpBtn="select"
      @close="close"
    ></BasicModal>
    <div class="listPage__cont--top">
      <div class="support__nav">
        <NuxtLink to="home" class="support__nav--home">Ocean Support</NuxtLink>
        <NuxtLink to="menu" class="support__nav--second">{{navTit}}</NuxtLink>
        <span class="support__nav--now">{{navNow}}</span>
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
    <div class="">
      <div class="boardDetail page__margin--mid">
        <div class="boardDetail__inner">
          <div class="boardDetail__top">
            <div class="boardDetail__top--tit">{{board.tit}}</div>
            <div class="boardDetail__top--info">
              <span class="boardDetail__top--date">{{board.date}}</span>
              <span class="boardDetail__top--count">조회수 {{board.count}}</span>
            </div>
          </div>
          <div class="boardDetail__cont">
            <div class="boardDetail__cont--txt">{{board.txt}}</div>
          </div>
        </div>
      </div>
      <div class="boardDetail__rateIt">
        <span class="boardDetail__rateIt--tit page__margin--small">{{goodCount}}명에게 도움 되었습니다.</span>
        <div class="boardDetail__rateIt--btn">
          <button 
            @click="goodBtn"
            class="btn--stuff btn--accept">
            <img src="~assets/img/icons/ico-good.svg" alt="좋아요">
          </button>
          <button
            @click="badBtn"
            class="btn--stuff btn--unAccept">
            <img src="~assets/img/icons/ico-bad.svg" alt="싫어요">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BasicModal from '@/modal/basic'    // 확인 모달
  import SideMenu from '../sideMenu'        // 고객센터 사이드 메뉴
  
  export default {
    name: 'supportDetail',
    // layout: 'default',
    components: {
      BasicModal,
      SideMenu
    },
    data: () => ({
      basicModal : false,
      select    : true,
      navTit     :'이용안내',
      navNow     :'출금',
      goodCount  :'64',
      board:{
        tit   :'코인을 보유하고 있는데 왜 출금이 안 되나요?',
        date  :'2022.03.22',
        count :'32561',
        txt   :'아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.',
      }
    }),
    methods: {
      goodBtn(){
        this.basicModal = true;
        setTimeout(() => {
          this.basicModal = false;
        }, 1200)
        this.select     = true
      },
      badBtn(){
        this.basicModal = true;
        setTimeout(() => {
          this.basicModal = false;
        }, 1200)
        this.select     = false
      },
      close(){
        this.basicModal = true
      }
    }
  }
</script>
