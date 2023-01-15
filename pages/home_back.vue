<template>
  <div class="main container__inner--main">
    <Hooper 
      :settings="hooperSetTop"
      class="main__slider">
      <Slide
        class="main__slide"
        :class="`back${idx + 1}`"
        v-for="(item, idx) in slide"
        :key="idx">
        <NuxtLink :to="item.moreUrl"  class="main__slide--inner container__inner--max">
          <div class="main__slide--left">
            <p class="main__slide--img">
              <img :src="item.img" :alt="item.name">
            </p>
          </div>
          <div
            :class="`main__slide--${item.fontColor}`" 
            class="main__slide--right"
          >
            <p class="main__slide--text">
              <span>{{item.txtTop}}</span>
              <strong>{{item.txtBottom}}</strong>
            </p>
            <!-- <p class="main__slide--more">
              더 보러가기
              <span class="main__slide--btn slide__arrow">
                <i class="slide__arrow--top"></i>
                <i class="slide__arrow--bottom"></i>
              </span>
            </p> -->
          </div>
        </NuxtLink>
      </Slide>
      <HooperPagination slot="hooper-addons"/>
    </Hooper>
    <article class="main__squareItem main__cont container__inner--max">
      <h2>RECOMMEND ITEM</h2>
      <div class="main__squareItem--recommendBack">
        <ul class="main__squareItem--recommend main__squareItem--list">
          <li
            v-for="(item, idx) in recommend.slice(0, 9)"
            :key="idx"
            class="main__squareItem--item">
            <NuxtLink 
              :to="`/marketPlace/detail${item.url}`"
              class="page__img">
              <img :src="item.img" :alt="item.name">
              <span class="main__squareItem--info hover">
                <i class="main__squareItem--name page__split">{{item.name}}</i>
                <i class="main__squareItem--user page__split">{{item.user}}</i>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </article>
    <article class="main__tabItem">
      <div class="container__inner--max">
        <div class="main__tabItem--tab">
          <ul class="main__tabItem--tit">
            <li>
              <span>
                NOTABLE ARTIST
              </span>
            </li>
          </ul>
        </div>
        <div class="main__tabItem--item">
          <Hooper
            v-if="tabId == 0"
            :settings="hooperSetting">
            <Slide 
              v-for="(itemCard, idx) in card1.slice(0, 9)" 
              :key="idx">
              <div class="card">
                <div class="card__inner">
                    <div class="card__topImg">
                      <NuxtLink to="marketPlace/detail" class="card__imgLink page__img page">
                        <img :src="itemCard.itemImgUrl" :alt="itemCard.itemName">
                      </NuxtLink>
                      <span class="card__topImg--icon">
                        <img 
                          v-if="itemCard.kinds == 'photo'"
                          src="~assets/img/icons/ico-card-picture.svg" alt="사진"
                        >
                        <img 
                          v-else-if="itemCard.kinds == 'video'"
                          src="~assets/img/icons/ico-card-video.svg" alt="영상"
                        >
                        <img 
                          v-else-if="itemCard.kinds == 'music'"
                          src="~assets/img/icons/ico-card-music.svg" alt="음악"
                        >
                      </span>
                      <NuxtLink to="marketPlace/detail"  class="main__card--info">
                        <p class="card__name page__split page__shadowTxt">
                          {{itemCard.itemName}}
                        </p>
                      </NuxtLink>
                      <NuxtLink to="/myPage/userItem/home" class="card__user">
                        <p class="card__userImg page__img page__shadowThin">
                          <img :src="itemCard.userImgUrl" :alt="itemCard.userName">
                        </p>
                        <p class="card__userName">
                          {{itemCard.userName}}
                        </p>
                      </NuxtLink>
                      <span to="/marketPlace/detail" class="card__info">
                        <p class="card__price">
                          {{itemCard.itemPrice}}
                          <span>KRW</span>
                        </p>
                      </span>
                    </div>
                </div>
                <NuxtLink to="marketPlace/detail" class="card__back"></NuxtLink>
              </div>
            </Slide>
            <HooperNavigation class="slide__btn" slot="hooper-addons">
              <span class="slide__arrow slide__arrow--left" slot="hooper-prev">
                <i class="slide__arrow--top"></i>
                <i class="slide__arrow--bottom"></i>
              </span>
              <span class="slide__arrow slide__arrow--right" slot="hooper-next">
                <i class="slide__arrow--top"></i>
                <i class="slide__arrow--bottom"></i>
              </span>
            </HooperNavigation>
          </Hooper>
        </div>
      </div>
    </article>
    <article class="main__squareItem--items main__squareItem main__cont container__inner--max">
      <div class="main__squareItem--itemBack">
        <div class="main__squareItem--item">
          <NuxtLink 
            :to="`/marketPlace/detail${itemBox.big.url}`"
            class="page__img">
            <img :src="itemBox.big.img" :alt="itemBox.big.name">
            <span class="main__squareItem--big main__squareItem--info hover">
              <i class="main__squareItem--name page__split">{{itemBox.big.name}}</i>
              <i class="main__squareItem--user page__split">{{itemBox.big.user}}</i>
            </span>
          </NuxtLink>
        </div>
        <ul class="main__squareItem--box main__squareItem--list">
          <li
            v-for="(item, idx) in itemBox.items.slice(0, 4)"
            :key="idx"
            class="main__squareItem--item">
            <NuxtLink 
              :to="`/marketPlace/detail${item.url}`"
              class="page__img">
              <img :src="item.img" :alt="item.name">
              <span class="main__squareItem--info hover">
                <i class="main__squareItem--name page__split">{{item.name}}</i>
                <i class="main__squareItem--user page__split">{{item.user}}</i>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </article>
    <article class="main__btmBanner">
      <NuxtLink to="/marketPlace/list">
        <span class="main__btmBanner--inner container__inner--max">
          <i class="main__btmBanner--txt">오직 메이크트리에서만 만날 수 있는<br> 나만의 특별한 NFT</i>
          <i class="main__btmBanner--btn">더 많은 작품 보러 가기</i>
        </span>
      </NuxtLink>
    </article>
  </div>
</template>

<script>
  import { 
    Hooper, 
    Slide,
    Pagination as HooperPagination,    //슬라이드 페이저
    Navigation  as HooperNavigation,  //슬라이드 화살표
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  export default {
    name: 'home',
    components:{
      Hooper, 
      Slide,
      HooperPagination,
      HooperNavigation
    },
    data: () => ({
      tabId : 0, // 탭 id 초기값
      // 메인 슬라이더 슬라이드 옵션
      hooperSetTop: {
        autoPlay        : true,
        playSpeed       : 3800,
        infiniteScroll  : true,    //무한 스크롤 모드
        wheelControl    : false,   // 스크롤 슬라이드 넘김 방지
      },
      // 메인 슬라이더
      slide:[
        {
          name:'nft 수집',
          img:require('assets/./img/banner/main-bn1.png'),
          txtTop:'풍선 터지듯 사라지는 일회성 덕질은 그만!',
          txtBottom:'메이크트리과 함께하는 NFT 수집',
          moreUrl:'#',
          fontColor:'black',
        },
        {
          name:'수수료 0원',
          img:require('assets/./img/banner/main-bn2.png'),
          txtTop:'세계 최초 수수료 0% NFT 거래소!',
          txtBottom:'수수료 걱정 없는 메이크트리',
          moreUrl:'#',
          fontColor:'white',
        },
        {
          name:'사용 가이드',
          img:require('assets/./img/banner/main-bn3.png'),
          txtTop:'이것만 보면 당신도 NFT 마스터',
          txtBottom:'메이크트리 NFT 사용 가이드!',
          moreUrl:'#',
          fontColor:'black',
        },
      ],
      // 추천 컨텐츠
      recommend:[
        {
          name:'미로인간을 탐험하자',
          user:'미궁',
          img:require('assets/./img/test/test-card2.png'),
          url:'',
        },
        {
          name:'천공의 성 라퓨타',
          user:'퍼플',
          img:require('assets/./img/test/test-card4.png'),
          url:'',
        },
        {
          name:'HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print',
          user:'GHARLIERAGHARLIERAGHARLIERA',
          img:require('assets/./img/test/test-card5.png'),
          url:'',
        },
        {
          name:'HAKAI.PT2_S " Canvas Print',
          user:'GHARLIERA',
          img:require('assets/./img/test/test-card3.png'),
          url:'',
        },
        {
          name:'청소시간은 즐거워 언제나 깨끗하게 청결하게 청소를 합시다.',
          user:'신나는 청소시간',
          img:require('assets/./img/test/test-card1.png'),
          url:'',
        },
        {
          name:'비오는 날이면 외롭고 쓸쓸한 마음',
          user:'빨래',
          img:require('assets/./img/test/test-card7.png'),
          url:'',
        },
        {
          name:'HAKAI.PT2_S " Canvas Print',
          user:'GHARLIERA',
          img:require('assets/./img/test/test-card8.png'),
          url:'',
        },
        {
          name:'HAKAI.PT2_S " Canvas Print',
          user:'GHARLIERA',
          img:require('assets/./img/test/test-card6.png'),
          url:'',
        },
        {
          name:'HAKAI.PT2_S " Canvas Print',
          user:'GHARLIERA',
          img:require('assets/./img/test/test-card4.png'),
          url:'',
        },
        {
          name:'HAKAI.PT2_S " Canvas Print',
          user:'GHARLIERA',
          img:require('assets/./img/test/test-card4.png'),
          url:'',
        },
      ],
      tab:[
        {tit:'WEEKLY BEST'},
        {tit:'HOT ITEM'},
        {tit:'RARE ITEM'},
      ],
      // 탭메뉴 아이템
      card1      : [
        {
          itemName  :'Santa claus appears',
          userName  :'ProdLowell',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card7.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
          kinds     : 'video',
        },
        {
          itemName  :'닿을 수 없는 우리',
          userName  :'LowellStraight',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card9.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
          kinds     : 'video',
        },
        {
          itemName  :'Rockefeller street',
          userName  :'LW1273',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card2.png'),
          itemState :'진행예정',
          kinds     : 'music',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERAGHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card5.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
        {
          itemName  :'PT2_SGHARLIERAGHARLIERA HAKAI.PT2_SGHARLIERAGHARLIERA Rockefeller street',
          userName  :'G1241',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card7.png'),
          userImgUrl:require('assets/./img/test/test-card5.png'),
          itemState :'종료임박',
          kinds     : 'video',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'무야호',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'music',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'애플마우스',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card6.png'),
          userImgUrl:require('assets/./img/test/test-card5.png'),
          itemState :'진행중',
          kinds     : 'video',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
          kinds     : 'music',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card1.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
          kinds     : 'music',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card2.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
          kinds     : 'music',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'photo',
        }
      ],
      card2      : [
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card1.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card2.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
          kinds     : 'photo',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
      ],
      card3      : [
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card1.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
          kinds     : 'video',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card2.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
          kinds     : 'video',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'video',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
          kinds     : 'video',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card1.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
          kinds     : 'music',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card2.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
          kinds     : 'video',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'video',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
          kinds     : 'video',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card1.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card2.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
          kinds     : 'photo',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card1.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card2.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
          kinds     : 'photo',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
      ],
      // 탭 아이템 슬라이드 옵션
      hooperSetting: {
        itemsToShow     : 2,       // 슬라이드 보이는 개수
        centerMode      : true,    // 센터 모드
        //autoPlay        : true,
        playSpeed       : 3800,
        infiniteScroll  : true,    //무한 스크롤 모드
        wheelControl    : false,   // 스크롤 슬라이드 넘김 방지
        breakpoints     : {
          // 슬라이더 반응형 700px
          700: {
            itemsToShow  : 3,
            centerMode   : false,    // 센터 모드
          },
          // 슬라이더 반응형 969px
          969: {
            itemsToShow  : 3,       // 슬라이드 보이는 개수
            centerMode   : false,    // 센터 모드
          }
        }
      },
      // 추천 컨텐츠
      itemBox:{
        big:{
          name:'HAKAI.PT2_S " Canvas Print',
          user:'GHARLIERA',
          img:require('assets/./img/test/test-card9.png'),
          url:'',
        },
        items:[
          {
            name:'미로인간을 탐험하자',
            user:'미궁',
            img:require('assets/./img/test/test-card10.png'),
            url:'',
          },
          {
            name:'천공의 성 라퓨타',
            user:'퍼플',
            img:require('assets/./img/test/test-card11.png'),
            url:'',
          },
          {
            name:'HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print',
            user:'GHARLIERAGHARLIERAGHARLIERA',
            img:require('assets/./img/test/test-card12.png'),
            url:'',
          },
          {
            name:'HAKAI.PT2_S " Canvas Print',
            user:'GHARLIERA',
            img:require('assets/./img/test/test-card13.png'),
            url:'',
          },
          {
            name:'청소시간은 즐거워 언제나 깨끗하게 청결하게 청소를 합시다.',
            user:'신나는 청소시간',
            img:require('assets/./img/test/test-card1.png'),
            url:'',
          },
          {
            name:'비오는 날이면 외롭고 쓸쓸한 마음',
            user:'빨래',
            img:require('assets/./img/test/test-card7.png'),
            url:'',
          }
        ]
      },
    }),
    methods: {
      tabClick(idx){
        this.tabId = idx; // 탭메뉴 인덱스 값 id에 할당

      },
    }
  }
</script>
