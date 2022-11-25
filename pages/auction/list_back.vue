<template>
  <div class="auction listPage container__inner--padding">
      <article class="page__overHidden">
        <div class="listPage__slider container__inner--max">
          <Hooper 
            :settings="hooperSetting" 
            class="listPage__slider--inner"
          >
            <Slide
              v-for="item in slide"
              :key="item.id" 
              class="listPage__slide"
            >
              <NuxtLink to="detail" class="listPage__slide--inner">
                <div class="listPage__img">
                  <p class="page__img">
                    <img :src="item.imgUrl" :alt="item.name">
                  </p>
                </div>
                <div class="listPage__left">
                  <div class="listPage__txt">
                    <div class="salePage__state itemState">
                      <span class="itemState--start" v-if="item.state == '진행중'">진행중</span>
                      <span class="itemState--expect" v-else-if="item.state == '진행예정'">진행예정</span>
                      <span class="itemState--hurry" v-else-if="item.state == '종료임박'">종료임박</span>
                      <span class="itemState--end" v-else-if="item.state == '종료'">종료</span>
                    </div>
                    <div class="listPage__tit salePage__tit page__split">
                      {{item.name}}
                    </div>
                    <div class="listPage__user">
                      <p class="listPage__user--img page__img page__shadow">
                        <img :src="item.userImgUrl" :alt="item.userName">
                      </p>
                      <p class="listPage__user--name">
                        {{item.userName}}
                      </p>
                    </div>
                  </div>
                  <div class="listPage__num">
                    <div class="listPage__time">
                      <span class="listPage__num--tit">남은시간</span>
                      <p class="listPage__time--clock">{{item.time}}</p>
                    </div>
                    <div class="listPage__price">
                      <span class="listPage__num--tit">현재가</span>
                      <p class="listPage__price--num">{{item.price}}<span>KRW</span></p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
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
      </article><!-- listPage__cont -->

      <article class="listPage__cont listPage__cont--back auction__cont">
        <div class="container__inner--max">
          <div class="listPage__cont--top page__margin--mid">
            <NuxtLink to="../marketPlace/list" class="listPage__cont--tit">
              <span>진행중</span>
              <img src="~assets/img/icons/ico-graph.svg" alt="진행중">
              <!-- <img src="~assets/img/icons/ico-arrow.svg" alt="화살표"> -->
            </NuxtLink>
            <div class="page__search">
              <div class="modalNftList__search--inner page__search--inner">
                <input type="text" placeholder="검색어를 입력해주세요.">
                <NuxtLink
                  to="/marketPlace/list"
                >
                  <span class="page__img">
                    <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
          <ul class="itemList__cards">
            <li 
              v-for="(itemCard, idx) in card1.slice(0, 9)" 
              :key="idx.id" 
              class="auction__ing itemList__card"
            >
              <div class="card">
                <div class="card__inner">
                    <!-- <div class="card__itemState itemState">
                      <span class="itemState--start" v-if="itemCard.itemState == '진행중'">진행중</span>
                      <span class="itemState--expect" v-else-if="itemCard.itemState == '진행예정'">진행예정</span>
                      <span class="itemState--hurry" v-else-if="itemCard.itemState == '종료임박'">종료임박</span>
                      <span class="itemState--end" v-else-if="itemCard.itemState == '종료'">종료</span>
                    </div> -->
                    <NuxtLink to="detail" class="card__topImg page">
                      <div class="page__img">
                        <img :src="itemCard.itemImgUrl" :alt="itemCard.itemName">
                      </div>
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
                    </NuxtLink>
                    <div class="card__topTit">
                      <NuxtLink to="detail" class="card__name page__split">
                        {{itemCard.itemName}}
                      </NuxtLink>
                      <button class="btn__ico" @click="likeBtn(idx, $event)">
                        <div>
                          <img class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                          <img class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                        </div>
                      </button>
                    </div>
                    <NuxtLink to="/myPage/userItem/home" class="card__user page">
                      <p class="card__userImg page__img page__shadowThin">
                        <img :src="itemCard.userImgUrl" :alt="itemCard.userName">
                      </p>
                      <p class="card__userName">
                        {{itemCard.userName}}
                      </p>
                    </NuxtLink>
                    <NuxtLink to="detail" class="card__info">
                      <p 
                        v-if="itemCard.itemState == '진행중'"
                        class="card__time card__time--ing">
                        {{itemCard.itemTime}}
                      </p>
                      <p 
                        v-else-if="itemCard.itemState == '진행예정'"
                        class="card__time card__time--soon">
                        {{itemCard.itemTime}}
                      </p>
                      <p 
                        v-else-if="itemCard.itemState == '종료임박'"
                        class="card__time card__time--hurry">
                        {{itemCard.itemTime}}
                      </p>
                      <p 
                        v-else-if="itemCard.itemState == '종료'"
                        class="card__time card__time--end">
                        판매 종료된 아이템 입니다.
                      </p>
                      <p 
                        v-else-if="itemCard.itemState == ''"
                        class="card__time card__time--infinity">
                        팜매 기간이 없는 아이템 입니다.
                      </p>
                      <p class="card__price">
                        {{itemCard.itemPrice}}
                        <span>KRW</span>
                      </p>
                    </NuxtLink>
                  </div>
                <NuxtLink to="detail" class="card__back"></NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </article><!-- listPage__cont -->
      <article class="listPage__cont container__inner--max auction__cont">
        <NuxtLink to="../marketPlace/list" class="listPage__cont--tit page__margin--mid">
          <span>진행예정</span>
          <img src="~assets/img/icons/ico-soon.svg" alt="화살표">
          <!-- <img src="~assets/img/icons/ico-arrow.svg" alt="화살표"> -->
        </NuxtLink>
        <ul class="itemList__cards">
          <li 
            v-for="(itemCard, idx) in card1.slice(0, 6)" 
            :key="idx.id" 
            class="auction__soon itemList__card"
          >
            <div class="card">
              <div class="card__inner">
                  <!-- <div class="card__itemState itemState">
                    <span class="itemState--start" v-if="itemCard.itemState == '진행중'">진행중</span>
                    <span class="itemState--expect" v-else-if="itemCard.itemState == '진행예정'">진행예정</span>
                    <span class="itemState--hurry" v-else-if="itemCard.itemState == '종료임박'">종료임박</span>
                    <span class="itemState--end" v-else-if="itemCard.itemState == '종료'">종료</span>
                  </div> -->
                  <NuxtLink to="detail" class="card__topImg page">
                    <div class="page__img">
                      <img :src="itemCard.itemImgUrl" :alt="itemCard.itemName">
                    </div>
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
                  </NuxtLink>
                  <div class="card__topTit">
                    <NuxtLink to="detail" class="card__name page__split">
                      {{itemCard.itemName}}
                    </NuxtLink>
                    <button class="btn__ico" @click="likeBtn(idx, $event)">
                      <div>
                        <img class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                        <img class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                      </div>
                    </button>
                  </div>
                  <NuxtLink to="/myPage/userItem/home" class="card__user page">
                    <p class="card__userImg page__img page__shadowThin">
                      <img :src="itemCard.userImgUrl" :alt="itemCard.userName">
                    </p>
                    <p class="card__userName">
                      {{itemCard.userName}}
                    </p>
                  </NuxtLink>
                  <NuxtLink to="detail" class="card__info">
                    <p 
                      v-if="itemCard.itemState == '진행중'"
                      class="card__time card__time--ing">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '진행예정'"
                      class="card__time card__time--soon">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료임박'"
                      class="card__time card__time--hurry">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료'"
                      class="card__time card__time--end">
                      판매 종료된 아이템 입니다.
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == ''"
                      class="card__time card__time--infinity">
                      팜매 기간이 없는 아이템 입니다.
                    </p>
                    <p class="card__price">
                      {{itemCard.itemPrice}}
                      <span>KRW</span>
                    </p>
                  </NuxtLink>
                </div>
                <NuxtLink to="detail" class="card__back"></NuxtLink>
            </div>
          </li>
        </ul>
      </article><!-- listPage__cont -->
      <article class="listPage__cont container__inner--max">
        <NuxtLink to="../marketPlace/list" class="listPage__cont--tit page__margin--mid">
          <span>종료임박</span>
          <img src="~assets/img/icons/ico-clock.svg" alt="화살표">
          <!-- <img src="~assets/img/icons/ico-arrow.svg" alt="화살표"> -->
        </NuxtLink>
        <ul class="itemList__cards">
          <li 
            v-for="(itemCard, idx) in card1.slice(0, 9)" 
            :key="idx.id" 
            class="auction__end itemList__card"
          >
            <div class="card">
              <div class="card__inner">
                  <!-- <div class="card__itemState itemState">
                    <span class="itemState--start" v-if="itemCard.itemState == '진행중'">진행중</span>
                    <span class="itemState--expect" v-else-if="itemCard.itemState == '진행예정'">진행예정</span>
                    <span class="itemState--hurry" v-else-if="itemCard.itemState == '종료임박'">종료임박</span>
                    <span class="itemState--end" v-else-if="itemCard.itemState == '종료'">종료</span>
                  </div> -->
                  <NuxtLink to="detail" class="card__topImg page">
                    <div class="page__img">
                      <img :src="itemCard.itemImgUrl" :alt="itemCard.itemName">
                    </div>
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
                  </NuxtLink>
                  <div class="card__topTit">
                    <NuxtLink to="detail" class="card__name page__split">
                      {{itemCard.itemName}}
                    </NuxtLink>
                    <button class="btn__ico" @click="likeBtn(idx, $event)">
                      <div>
                        <img class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                        <img  class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                      </div>
                    </button>
                  </div>
                  <NuxtLink to="/myPage/userItem/home" class="card__user page">
                    <p class="card__userImg page__img page__shadowThin">
                      <img :src="itemCard.userImgUrl" :alt="itemCard.userName">
                    </p>
                    <p class="card__userName">
                      {{itemCard.userName}}
                    </p>
                  </NuxtLink>
                  <NuxtLink to="detail" class="card__info">
                    <p 
                      v-if="itemCard.itemState == '진행중'"
                      class="card__time card__time--ing">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '진행예정'"
                      class="card__time card__time--soon">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료임박'"
                      class="card__time card__time--hurry">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료'"
                      class="card__time card__time--end">
                      판매 종료된 아이템 입니다.
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == ''"
                      class="card__time card__time--infinity">
                      팜매 기간이 없는 아이템 입니다.
                    </p>
                    <p class="card__price">
                      {{itemCard.itemPrice}}
                      <span>KRW</span>
                    </p>
                  </NuxtLink>
                </div>
                <NuxtLink to="detail" class="card__back"></NuxtLink>
            </div>
          </li>
        </ul>
      </article><!-- listPage__cont -->
  </div><!-- marketPlace -->
</template>

<script>
  import { 
    Hooper, 
    Slide,
    Navigation  as HooperNavigation  //슬라이드 화살표
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  
  export default {
    name : 'auctionList',
    // layout: 'default',
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    data: () => ({
      // 아이템 기본 정보
      slide      : [
        {
          name      :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName  :'GHARLIERA',                                 // 판매자 이름
          price     :'60,142',                                    // 아이템 가격
          time      :'01D : 13 : 47 : 30',                        // 아이템 남은 시간
          imgUrl    :require('assets/./img/test/auction-bn1.png'),           // 아이템 이미지
          userImgUrl:require('assets/./img/test/test-card8.png'),           // 판매 유저 이미지
          state     :'진행중',                                      // 판매 상태
          likeCount :'1,829',                                     // 좋아요 수
        },
        {
          name      :'알콜 소독',                                   // 아이템 이름
          userName  :'신나신나',                                     // 판매자 이름
          price     :'60,142',                                    // 아이템 가격
          time      :'00D : 13 : 47 : 30',                        // 아이템 남은 시간
          imgUrl    :require('assets/./img/test/auction-bn2.png'),           // 아이템 이미지
          userImgUrl:require('assets/./img/test/test-card8.png'),           // 판매 유저 이미지
          state     :'진행중',                                      // 판매 상태
          likeCount :'1,829',                                     // 좋아요 수
        },
        {
          name      :'안녕하세여',                                   // 아이템 이름
          userName  :'무야호',                                      // 판매자 이름
          price     :'60,142',                                    // 아이템 가격
          time      :'03D : 13 : 47 : 30',                        // 아이템 남은 시간
          imgUrl    :require('assets/./img/test/auction-bn3.png'),           // 아이템 이미지
          userImgUrl:require('assets/./img/test/test-card8.png'),           // 판매 유저 이미지
          state     :'진행중',                                      // 판매 상태
          likeCount :'1,829',                                     // 좋아요 수
        },
      ],

      // 판매자의 다른 아이템 카드
      card1      : [
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card5.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행중',
          kinds     : 'photo',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card7.png'),
          userImgUrl:require('assets/./img/test/test-card5.png'),
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
          kinds     : 'music',
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
          kinds     : 'music',
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

      // 슬라이드 옵션
      hooperSetting: {
        itemsToShow     : 1,       // 슬라이드 보이는 개수
        centerMode      : true,    // 센터 모드
        //autoPlay        : true,
        playSpeed       : 3800,
        infiniteScroll  : true,    //무한 스크롤 모드
        wheelControl    : false,   // 스크롤 슬라이드 넘김 방지
        breakpoints     : {
          // 슬라이더 반응형 969px
          969: {
            centerMode   : false,
          }
        }
      },

      // 기능
      setPageActive     : false,  // 좋아요 버튼  -> 페이지
    }),
    methods : {
      // 좋아요 버튼  -> 페이지
      pageLike(){
        this.setPageActive = !this.setPageActive
      },
      // 좋아요 버튼  -> 카드
      likeBtn(idx, event){
        event.target.classList.toggle('active');
      }
    }
  }
</script>
