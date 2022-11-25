<template>
  <transition name="moreModal">
      <div class="side__mobile--nav">
        <div
            :class="{active: menuOpen}"
            class="side__mobile--sideMenu page__shadow">
          <div
            v-if="login"
          >
            <div class="side__mobile--login">
              <div class="side__mobile--profile page__img">
                <img :src="userPhoto" :alt="userName">
              </div>
              {{userName}} 님, 안녕하세요? 
            </div>
            <div
              @click="myPage"
              class="side__action">
              <button class="side__action--btn">
                <p class="side__action--tit">
                  <img src="~assets/img/icons/ico-myPage.svg" alt="마이페이지">
                  <span>My Page</span>
                </p>
                <p 
                  :class="{active: myMenuActive == true}"
                  class="side__more--arrow">
                  <i class="side__more--top"></i>
                  <i class="side__more--bottom"></i>
                </p>
              </button>
            </div>
            <ul
              :style="myMenuActive == true ? `height:${45 * myMenu.length}px` : 'height:0'"
              class="side__mobile--menuList side__mobile--toggle">
              <li
                @click="closeBtn"
                v-for="(item, idx) in myMenu"
                :key="idx">
                <NuxtLink :to="item.url" class="side__my side__mobile--menu">
                  <span>{{item.name}}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div
            v-else
            @click="closeBtn"
            class="side__mobile--login">
            <NuxtLink to="/login/home">로그인</NuxtLink>
          </div>
          <div
            class="side__action side__action--search">
            <button 
              @click="searchBtn"
              class="side__action--btn">
              <p class="side__action--tit">
                <img src="~assets/img/icons/ico-nav0.svg" alt="검색창">
                <span>Search</span>
              </p>
              <p 
                :class="{active: searchOn == true}"
                class="side__more--arrow">
                <i class="side__more--top"></i>
                <i class="side__more--bottom"></i>
              </p>
            </button>
            <div
                :style="searchOn ? 'padding:3px 0 7px;' : 'height:0'"
                class="side__search">
              <div class="side__search--inner">
                <input
                  v-model="search"
                  type="text"
                  placeholder="검색어를 입력해주세요."
                >
                <div
                  @click="closeBtn">
                  <NuxtLink
                    to="/marketPlace/list"
                    class="page__img">
                      <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <ul class="side__mobile--menuList">
            <li
              @click="closeBtn">
              <NuxtLink to="/auction/list" class="side__mobile--menu">
                <img src="~assets/img/icons/ico-nav1.svg" alt="Auction">
                <span>Auction</span>
                <!-- <img src="~assets/img/icons/ico-nav1.svg" alt="Auction"> -->
              </NuxtLink>
            </li>
            <li
              @click="closeBtn">
              <NuxtLink to="/marketPlace/list" class="side__mobile--menu">
                <img src="~assets/img/icons/ico-nav2.svg" alt="Marketplace">
                <span>Marketplace</span>
                <!-- <img src="~assets/img/icons/ico-nav2.svg" alt="Marketplace"> -->
              </NuxtLink>
            </li>
            <li
              @click="ready">
              <NuxtLink to="#" class="side__mobile--menu">
                <img src="~assets/img/icons/ico-nav3.svg" alt="MyFans">
                <span>MyFans</span>
                <!-- <img src="~assets/img/icons/ico-nav3.svg" alt="MyFans"> -->
              </NuxtLink>
            </li>
            <li>
              <div
                @click="support"
                class="side__action">
                <button class="side__action--btn">
                  <p class="side__action--tit">
                    <img src="~assets/img/icons/ico-nav4.svg" alt="Support">
                    <span>support</span>
                  </p>
                  <p 
                    :class="{active: supportActive == true}"
                    class="side__more--arrow">
                    <i class="side__more--top"></i>
                    <i class="side__more--bottom"></i>
                  </p>
                </button>
              </div>
              <ul
                :style="supportActive == true ? `height:${45 * supportMenu.length}px` : 'height:0'"
                class="side__mobile--menuList side__mobile--toggle">
                <li
                  @click="closeBtn"
                  v-for="(item, idx) in supportMenu"
                  :key="idx">
                  <NuxtLink :to="item.url" class="side__my side__mobile--menu">
                    <span>{{item.name}}</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          @click="closeBtn"
          :class="{active: menuOpen}"
          class="side__mobile--back"
        >
          배경
        </div>
      </div>
  </transition>
</template>

<script>
export default {
  name: 'sideMenu',
  props:{
    login       :Boolean, // 로그인 여부
    userPhoto   :String,  // 로그인 시 유저 사진
    userName    :String,  // 유저 이름
    menuOpen    :Boolean, // 사이드 메뉴 on off
    searchOn    :Boolean, // 검색 on off
  },
  data: () => ({
    search       : '',     // 검색 인풋
    myMenuActive :false,   // 마이 메뉴 on off
    supportActive:false,   // 서포트 메뉴 on off
    myMenu:[              // 마이 메뉴 리스트
      {
        name:'My Profile',
        url :'/myPage/profile/home'
      },
      {
        name:'My NFT',
        url :'/myPage/table/myNft'
      },
      {
        name:'이용내역',
        url :'/myPage/table/usageHistory'
      },
      {
        name:'정산관리',
        url :'/myPage/table/calculate'
      },
      {
        name:'로그아웃',
        url:'#'
      },
      {
        name:'로그인(임시 버튼)',
        url:'/login/home'
      },
    ],
    supportMenu:[
      {
        name:'공지사항',
        url :'/support/board/notice'
      },
      {
        name:'민트오션 소식',
        url :'/support/board/news'
      },
      {
        name:'수수료 안내',
        url :'/support/search/detail'
      },
      {
        name:'자주하는 질문',
        url :'/support/search/home'
      },
      {
        name:'1:1문의',
        url :'/support/board/qna'
      },
    ],
  }),
  methods: {
    // my fans 준비중 alert
    ready(){
      alert('지금은 준비 중입니다.')
    },
    // 마이 페이지 열기
    myPage(){
      this.myMenuActive == true ?
      this.myMenuActive =  false:
      this.myMenuActive =  true;
    },
    // 마이 페이지 열기
    support(){
      this.supportActive == true ?
      this.supportActive =  false:
      this.supportActive =  true;
    },
    // 서포트 열기

    // 검색 on off
    searchBtn(){
      this.$emit('searchBtn')
    },
    // 메뉴 닫기 버튼
    closeBtn(){
      this.$emit('close')
    },
  }
}
</script>

<style>

</style>