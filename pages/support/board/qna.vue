<template>
  <div class="support page container__inner--max container__inner--padding">
    <div class="support__box">
      <div class="support__sideMenu">
        <h1 class="page__tit--big">
          <!-- <span class="web">고객센터</span> -->
          <span class="mobile">1:1 문의</span>
        </h1>
        <SideMenu></SideMenu>
      </div>
      <div class="support__cont">
        <div class="support__top">
          <div class="page__search page__margin--mid">
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
        <div class="support__chat">
          <div class="support__chatList">
            <div class="support__chatList--img">
              <img src="~assets/img/picture/chat1.png" alt="앱실행">
            </div>
            <ul class="support__chatList--txtBox">
              <li class="support__chatList--txt">
                <span class="support__chatList--num">1</span>
                <span class="support__chatList--comment">카카오톡 앱 실행 후 하단의 채팅 메뉴(말풍선)를 선택합니다.</span>
              </li>
              <li class="support__chatList--txt">
                <span class="support__chatList--num">2</span>
                <span class="support__chatList--comment">채팅 메뉴 상단의 돋보기 버튼을 클릭합니다.</span>
              </li>
            </ul>
          </div>
          <div class="support__chatList">
            <div class="support__chatList--img">
              <img src="~assets/img/picture/chat2.png" alt="검색">
            </div>
            <ul class="support__chatList--txtBox">
              <li class="support__chatList--txt">
                <span class="support__chatList--num">3</span>
                <span class="support__chatList--comment">검색창에 ＇민트오션＇을 검색합니다.</span>
              </li>
              <li class="support__chatList--txt">
                <span class="support__chatList--num">4</span>
                <span class="support__chatList--comment">민트오션 채널을 선택합니다.</span>
              </li>
            </ul>
          </div>
          <div class="support__chatList">
            <div class="support__chatList--img">
              <img src="~assets/img/picture/chat3.png" alt="채널추가">
            </div>
            <ul class="support__chatList--txtBox">
              <li class="support__chatList--txt">
                <span class="support__chatList--num">5</span>
                <span class="support__chatList--comment">민트오션 채널을 추가하고 채팅하기 버튼을 클릭합니다.</span>
              </li>
            </ul>
          </div>
          <div class="support__chatList">
            <div class="support__chatList--img">
              <img src="~assets/img/picture/chat4.png" alt="채팅">
            </div>
            <ul class="support__chatList--txtBox">
              <li class="support__chatList--txt">
                <span class="support__chatList--num">6</span>
                <span class="support__chatList--comment">닉네임 및 휴대전화 번호 뒤 4자리를 입력 후 상담을 시작합니다.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideMenu from '../sideMenu'        // 고객센터 사이드 메뉴
  export default {
    name: 'supportQna',
    // layout: 'default',
    components: {
      SideMenu
    },
    data: () => ({
      id      : 0,

    }),
    methods: {
    }
  }
</script>
