<template>
  <div class="support page container__inner--max container__inner--padding">
    <div class="support__box">
      <div class="support__sideMenu">
        <h1 class="page__tit--big">
          <!-- <span class="web">고객센터</span> -->
          <span class="mobile">{{boardName}}</span>
        </h1>
        <SideMenu></SideMenu>
      </div>
      <div class="support__cont">
        <div class="support__top">
          <div class="page__search">
            <div class="page__search--inner page__search--inner">
              <input type="text" placeholder="검색어를 입력해주세요.">
              <button
                type="button"
              >
              <span class="page__img">
                <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
              </span>
              </button>
            </div>
          </div>
        </div>
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
        <NuxtLink to='notice' class="btn--goMini btn--subUnAccept">목록</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  import SideMenu from '../sideMenu'        // 고객센터 사이드 메뉴
  export default {
    name: 'supportNotice',
    // layout: 'default',
    components: {
      SideMenu
    },
    data: () => ({
      id       : 0,
      boardName:'공지사항',
      board:{
        tit   :'민트 오션 오픈 이벤트 안내',
        date  :'2022.03.22',
        count :'32561',
        txt   :'내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
      }

      // nft 리스트
    }),
    methods: {
    }
  }
</script>
