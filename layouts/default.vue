<template>
  <div id="app" class="">
      <!-- 헤더 시작 ====================== -->
      <header class="header">
          <div class="header--pc header__inner">
            <h1 class="header__logo logo">
              <NuxtLink to="/home">
                <img src="~assets/img/logo/logo-color.svg" alt="메이크트리">
              </NuxtLink>
            </h1>
            <nav class="header__nav">
              <ul>
                <li>
                  <NuxtLink to="/auction/list">
                    Auction
                    <i class="active" ></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/marketPlace/list">
                    Marketplace
                    <i class="active"></i>
                  </NuxtLink>
                </li>
                <li @click="ready">
                  <NuxtLink to="#">
                    My Fans
                    <i class="active" v-if="$route.name == 'myFans'"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/support/board/notice">
                    Support
                    <i class="active"></i>
                  </NuxtLink>
                </li>
              </ul>
            </nav>
            <div v-if="login == false" class="header__login">
              <ul class="header__loginBtns">
                <li><NuxtLink to="/login/home">로그인</NuxtLink></li>
                <li><NuxtLink to="/join/home">회원가입</NuxtLink></li>
              </ul>
              <button class="header__app btn">
                <span class="header__app--app btn--app btn--accept">메이크트리 앱 다운로드</span>
              </button>
            </div>

            <div v-if="login == true" class="header__login">
              <div class="header__login--profile page__img">
                <img :src="userPhoto" :alt="userName">
              </div>
              <div class="header__login--cmt">
                {{userName}} 님, 안녕하세요?
              </div>
              <div class="header__login--active">
                <div class="header__myBtn">
                  <NuxtLink to="/myPage/profile/home" class="header__myBtn--inner btn">
                    <strong class="btn--modalMini">마이페이지</strong> 
                  </NuxtLink>
                </div>
                <ul class="header__subNav">
                  <li><NuxtLink to="/myPage/profile/home" class="header__subNav--tit">My Profile</NuxtLink></li>
                  <li><NuxtLink to="/myPage/table/myNft" class="header__subNav--tit">My NFT</NuxtLink></li>
                  <li><NuxtLink to="/myPage/table/usageHistory" class="header__subNav--tit">이용내역</NuxtLink></li>
                  <li><NuxtLink to="/myPage/table/calculate" class="header__subNav--tit">정산관리</NuxtLink></li>
                  <li><button 
                    @click="login = false"
                    class="header__subNav--tit">로그아웃</button></li>
                  <li><NuxtLink to="/login/home" class="header__subNav--tit">(임시)로그인</NuxtLink></li>
                </ul>
              </div>
            </div>
            
          </div>
          <div class="side__mobile header__inner">
            <!-- <button type="button" class="side__mobile--btn">
              <span class="side__mobile--arrow">
                <i class="side__mobile--arrowTop"></i>
                <i class="side__mobile--arrowBtm"></i>
              </span>
            </button> -->
            <div class="side__mobile--logo">
              <NuxtLink to="/home">
                <img src="~assets/img/logo/logo-bar.svg" alt="메이크트리">
              </NuxtLink>
            </div>
            <div class="side__mobile--nav">
              <nav 
                @click="closeMenu = true"
                class="side__mobile--ham">
                <i></i>
                <i></i>
                <i></i>
              </nav>
              <SideMenu
                :menuOpen  ="closeMenu"
                :searchOn  ="searchActive"
                :login     ="login"
                :userPhoto ="userPhoto"
                :userName  ="userName"
                @close     ="closeBtn"
                @searchBtn ="searchBtn">
              </SideMenu>
            </div>
          </div>
      </header>
      <!-- 헤더 끝 -->



      <!-- 컨텐츠 시작 ====================== -->
      <div class="container container__content">
        <Nuxt/>
      </div>
      <!-- 컨텐츠 끝 -->



      <!-- 푸터 시작 ====================== -->
      <footer class="footer">
          <div class="footer--pc container__inner--max footer__inner">

            <div class="footer__top">
              <div class="footer__left">
                <div class="footer__logo logo">
                  <img src="~assets/img/logo/logo-sky.svg" alt="메이크트리">
                </div>
                <div class="footer__leftTxt">
                  비전이 가득한 메이크트리
                </div>
              </div>
              <div class="footer__right">
                <div class="footer__menu">
                  <div class="footer__menuTxt">
                    <h3>회사</h3>
                    <ul class="footer__menuLIst">
                      <li><a href="/service/provision">이용약관</a></li>
                      <li><a href="/service/privacy">개인정보취급방침</a></li>
                    </ul>
                  </div>
                  <div class="footer__menuTxt">
                    <span class="footer__top_line"></span>
                    <ul class="footer__menuLIst">
                      <li class="footer__menuLIst--bar"><a href="#">제휴문의</a></li>
                    </ul>
                  </div>
                </div>
                <div class="footer__menuTxt">
                  <h3>고객지원</h3>
                  <ul class="footer__menuLIst">
                    <li><a href="/support/search/home">고객센터</a></li>
                    <li><a href="/support/board/notice">공지사항</a></li>
                    <li><a href="/support/search/menu">이용안내</a></li>
                  </ul>
                </div>
                <div class="footer__menuTxt">
                  <h3>공식 커뮤니티</h3>
                  <ul class="footer__menuLIst">
                    <li><a href="#">네이버 블로그</a></li>
                    <li><a href="#">인스타그램</a></li>
                    <li><a href="#">디스코드</a></li>
                    <li><a href="#">카카오톡 오픈채팅</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="footer__info">
              <ul class="footer__infoList">
                <li>메이크트리</li>
                <li>대표 : 이다영</li>
                <li>메일 : maketree0615@gmail.com</li>
                <li>포트폴리오 사이트</li>
              </ul>
            </div>
            <div class="footer__copy">ⓒ 2023. MAKETREE all rights reserved.</div>
          </div>

          <div class="footer__mobile">
            <div class="footer__mobile--inner">
              <ul class="footer__mobile--menu">
                <li>
                  <NuxtLink to="/service/provision">이용약관</NuxtLink>
                </li>
                <li class="footer__mobile--bar">
                  <NuxtLink to="/service/privacy">개인정보취급방침</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/support/search/home">고객센터</NuxtLink>
                </li>
              </ul>
              <div class="footer__mobile--info">
                <span>사업자등록번호 : 123-45-67890</span>
                <span>우주시 뿅뿅구 도로롱마을</span>
                <span class="footer__mobile--name">
                  <i>주식회사 우주별</i>
                  <em></em>
                  <i>대표이사 : 곰돌이</i>
                </span>
              </div>
              <div class="footer__mobile--sns">
                <NuxtLink to="#">
                  <img src="~assets/img/icons/ico-fsns1.svg" alt="네이버 블로그">
                </NuxtLink>
                <NuxtLink to="#">
                  <img src="~assets/img/icons/ico-fsns2.svg" alt="인스타그램">
                </NuxtLink>
                <NuxtLink to="#">
                  <img src="~assets/img/icons/ico-fsns3.svg" alt="디스코드">
                </NuxtLink>
                <NuxtLink to="#">
                  <img src="~assets/img/icons/ico-fsns4.svg" alt="카카오 채널">
                </NuxtLink>
              </div>
              <div class="footer__mobile--copy">
                ⓒ 2023. MAKETREE all rights reserved.
              </div>
            </div>
          </div>
      </footer>
      <!-- 푸터 끝 -->

    <button
      v-if="scY > 300"
      @click="toTop"
      class="scrollTop page__shadow">
      스크롤 탑
      <span class="scrollTop__arrow">
        <i class="scrollTop__arrow--top"></i>
        <i class="scrollTop__arrow--bottom"></i>
      </span>
      <span class="scrollTop__arrow">
        <i class="scrollTop__arrow--top scrollTop__arrow--doubleTop"></i>
        <i class="scrollTop__arrow--bottom scrollTop__arrow--doubleBtm"></i>
      </span>
    </button>

    <Toast></Toast><!-- 토스트 모달 active시 position bottom 0 -->
  </div>
</template>

<script>
    import SideMenu  from '@/blockComponents/sideMenu'// 사이드메뉴
    import Toast     from '@/modal/toast'             // 토스트 모달
    export default {
        name: "defaultLayout",
        components:{
          SideMenu,   // 사이드 메뉴,
          Toast      // 토스트 모달
        },
        data(){
          return{
            login       : true,   // 로그인 했을 시 on
            userPhoto   : require('assets/./img/picture/dayoung-blue.png'), // 로그인 시 유저 사진
            userName    : 'front2d0', // 로그인 시 유저 이름
            closeMenu   : false,  // 사이드 메뉴 of off
            searchActive: false,  // 검색 on off
            scTimer     : 0,      // 검색 on off
            scY         : 0,      //스크롤 높이
          }
        },
        mounted() {
          window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
          // my fans 준비중 alert
          ready(){
            alert('지금은 준비 중입니다.')
          },
          // 사이드 메뉴 닫기
          closeBtn(){
            this.closeMenu    = false
            this.searchActive = false
          },
          // 검색 on off
          searchBtn(){
            if(this.searchActive == false )
              this.searchActive = true 
            else
              this.searchActive = false
          },
          // 스크롤 탑 이벤트
          handleScroll(){
            if (this.scTimer) return;
              this.scTimer   = setTimeout(() => {
                this.scY     = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
              }, 100);
          },
          // 스롤 탑 버튼
          toTop(){
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }
        }
    }
</script>