<template>
  <div class="myPage page container__inner--max container__inner--padding">
    <div class="myPage__info">
      <div 
        v-if="profilePhotoOn == true"
        class="myPage__profileImg page__margin--mid"
      >
        <div class="page__img">
          <img :src="userImgUrl" :alt="userName">
        </div>
      </div>
      <div 
        v-if="profilePhotoOn == false"
        class="myPage__profileImg page__margin--mid"
      >
        <div class="page__img">
          <img src="~assets/img/icons/ico-man-gray.svg" alt="프로필 이미지 등록하기">
        </div>
      </div>
      <div class="myPage__nickname page__margin--small">{{userName}}</div>
      <div class="myPage__comment page__margin--small">{{comment}}</div>
      <div class="myPage__sns page__margin--small">
        <div class="myPage__sns--img">
          <img 
            v-if="snsName == '인스타그램'" 
            src="~assets/img/icons/ico-sns-insta.svg" 
            :alt="snsName">
          <img 
            v-if="snsName == '네이버'" 
            src="~assets/img/icons/ico-sns-naver.svg" 
            :alt="snsName">
          <img 
            v-if="snsName == '틱톡'" 
            src="~assets/img/icons/ico-sns-tictok.svg" 
            :alt="snsName">
          <img 
            v-if="snsName == '트위터'" 
            src="~assets/img/icons/ico-sns-twitter.svg" 
            :alt="snsName">
        </div>
        <div class="myPage__sns--url">{{snsUrl}}</div>
      </div>
      <!-- <ul class="myPage__badge--inner page__margin--mid">
        <li
          v-for="badge in badgeList"
          :key="badge.id"
        >
          <p class=" myPage__badge--img page__img">
            <img :src="badge.img" :alt="badge.name">
          </p>
        </li>
      </ul> -->
      <NuxtLink to="edit" class="myPage__editBtn btn--edit btn--sub">
        프로필 수정
      </NuxtLink>
    </div><!-- myPage__info -->
    <div class="myPage__nftMenu">
      <div class="myPage__tabMenu tabMenu page__margin--mid">
        <ul class="myPage__tabMenu--tit tabMenu__tit">
          <li
            v-for="(item, idx) in tabMenu"
            :key="idx"
            @click="tab(idx)"
          >
            <button type="button" class="imgBtn">
              <img :src="item.icon" :alt="item.name">
              {{item.name}}
            </button>
          </li>
        </ul>
        <div class="myPage__tabMenu--bar tabMenu__bar">
          <div 
          class="myPage__tabMenu--active tabMenu__bar--active tabMenu__bar--active4"
          :style="`left:${25 * id}%`"
          ></div>
        </div>
      </div>
      <div
        v-if="id == 0 && collection == 0"
        class="myPage__noNft"
      > 
        <p class="myPage__noNft--txt">
          NFT 컬렉션이 없습니다.
        </p>
      </div><!-- myPage__noNft -->
      <Hooper
        v-if="id == 0 && collection != 0"
        :settings="hooperSetting" 
        class="myPage__slide slide"
      >
        <Slide
          v-for="(item, idx) in collection" 
          :key="idx"
        >
              <div @click.stop="$router.push('/marketPlace/detail')" class="card">
                <div class="card__inner">
                    <!-- <div class="card__itemState itemState">
                      <span class="itemState--start" v-if="item.itemState == '진행중'">진행중</span>
                      <span class="itemState--expect" v-else-if="item.itemState == '진행예정'">진행예정</span>
                      <span class="itemState--hurry" v-else-if="item.itemState == '종료임박'">종료임박</span>
                      <span class="itemState--end" v-else-if="item.itemState == '종료'">종료</span>
                    </div> -->
                    <div to="detail" class="card__topImg page">
                      <div class="page__img">
                        <img :src="item.itemImgUrl" :alt="item.itemName">
                      </div>
                      <span class="card__topImg--icon">
                        <img 
                          v-if="item.kinds == 'photo'"
                          src="~assets/img/icons/ico-card-picture.svg" alt="사진"
                        >
                        <img 
                          v-else-if="item.kinds == 'video'"
                          src="~assets/img/icons/ico-card-video.svg" alt="영상"
                        >
                        <img 
                          v-else-if="item.kinds == 'music'"
                          src="~assets/img/icons/ico-card-music.svg" alt="음악"
                        >
                      </span>
                    </div>
                    <div class="card__topTit">
                      <div to="detail" class="card__name page__split">
                        {{item.itemName}}
                      </div>
                      <button class="btn__ico" @click.stop="likeBtn(idx, $event)">
                        <div>
                          <img class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                          <img class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                        </div>
                      </button>
                    </div>
                    <div class="card__user page">
                      <p class="card__userImg page__img page__shadowThin">
                        <img :src="item.userImgUrl" :alt="item.userName">
                      </p>
                      <p  @click.stop="$router.push('/myPage/userItem/home')" class="card__userName">
                        {{item.userName}}
                      </p>
                    </div>
                    <div to="detail" class="card__info">
                      <p 
                        v-if="item.itemState == '진행중'"
                        class="card__time card__time--ing">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '진행예정'"
                        class="card__time card__time--soon">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '종료임박'"
                        class="card__time card__time--hurry">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '종료'"
                        class="card__time card__time--end">
                        판매 종료된 아이템 입니다.
                      </p>
                      <p 
                        v-else-if="item.itemState == ''"
                        class="card__time card__time--infinity">
                        팜매 기간이 없는 아이템 입니다.
                      </p>
                      <p class="card__price">
                        {{item.itemPrice}}
                        <span>KRW</span>
                      </p>
                    </div>
                </div>
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
      </Hooper><!-- myPage__slide -->
      <div
        v-if="id == 1 && sale == 0"
        class="myPage__noNft"
      > 
        <p class="myPage__noNft--txt">
          판매중인 NFT가 없습니다.
        </p>
      </div><!-- myPage__noNft -->
      <Hooper
        v-if="id == 1 && sale != 0"
        :settings="hooperSetting" 
        class="myPage__slide slide"
      >
        <Slide
          v-for="item in sale" 
          :key="item.id"
        >
        <div class="card">
            <div class="card__inner">
                <div class="card__itemState itemState">
                  <span class="itemState--start" v-if="item.itemState == '진행중'">진행중</span>
                  <span class="itemState--expect" v-else-if="item.itemState == '진행예정'">진행예정</span>
                  <span class="itemState--hurry" v-else-if="item.itemState == '종료임박'">종료임박</span>
                  <span class="itemState--end" v-else-if="item.itemState == '종료'">종료</span>
                </div>
                <NuxtLink :to="item.typeUrl" class="card__topImg page">
                  <div class="page__img">
                    <img :src="item.itemImgUrl" :alt="item.itemName">
                  </div>
                  <span class="card__topImg--icon">
                    <img 
                      v-if="item.kinds == 'photo'"
                      src="~assets/img/icons/ico-card-picture.svg" alt="사진"
                    >
                    <img 
                      v-else-if="item.kinds == 'video'"
                      src="~assets/img/icons/ico-card-video.svg" alt="영상"
                    >
                    <img 
                      v-else-if="item.kinds == 'music'"
                      src="~assets/img/icons/ico-card-music.svg" alt="음악"
                    >
                  </span>
                </NuxtLink>
                <div class="card__topTit">
                  <NuxtLink :to="item.typeUrl" class="card__name page__split">
                    {{item.itemName}}
                  </NuxtLink>
                  <button class="btn__ico" @click="SaleLike(idx, $event)">
                    <div>
                      <img :class="{active:setActive}" class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                      <img :class="{active:setActive}" class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                    </div>
                  </button>
                </div>
                <NuxtLink to="/myPage/userItem/home" class="card__user page">
                  <p class="card__userImg page__img page__shadowThin">
                    <img :src="item.userImgUrl" :alt="item.userName">
                  </p>
                  <p class="card__userName">
                    {{item.userName}}
                  </p>
                </NuxtLink>
                <NuxtLink to="/marketPlace/detail" class="card__info">
                  <p
                    v-if="item.itemState == '진행중'"
                    class="card__time card__time--ing">
                    {{item.itemTime}}
                  </p>
                  <p
                    v-else-if="item.itemState == '진행예정'"
                    class="card__time card__time--soon">
                    {{item.itemTime}}
                  </p>
                  <p
                    v-else-if="item.itemState == '종료임박'"
                    class="card__time card__time--hurry">
                    {{item.itemTime}}
                  </p>
                  <p
                    v-else-if="item.itemState == '종료'"
                    class="card__time card__time--end">
                    판매 종료된 아이템 입니다.
                  </p>
                  <p
                    v-else-if="item.itemState == ''"
                    class="card__time card__time--infinity">
                    팜매 기간이 없는 아이템 입니다.
                  </p>
                  <p class="card__price">
                    {{item.itemPrice}}
                    <span>KRW</span>
                  </p>
                </NuxtLink>
              </div>
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
      </Hooper><!-- myPage__slide -->
      <div
        v-if="id == 2 && like == 0"
        class="myPage__noNft"
      > 
        <p class="myPage__noNft--txt">
          좋아하는 NFT가 없습니다.
        </p>
      </div><!-- myPage__noNft -->
      <Hooper
        v-if="id == 2 && like != 0"
        :settings="hooperSetting" 
        class="myPage__slide slide"
      >
        <Slide
          v-for="item in like" 
          :key="item.id"
        >
        <div class="card">
            <div class="card__inner">
                <div class="card__itemState itemState">
                  <span class="itemState--start" v-if="item.itemState == '진행중'">진행중</span>
                  <span class="itemState--expect" v-else-if="item.itemState == '진행예정'">진행예정</span>
                  <span class="itemState--hurry" v-else-if="item.itemState == '종료임박'">종료임박</span>
                  <span class="itemState--end" v-else-if="item.itemState == '종료'">종료</span>
                </div>
                <NuxtLink :to="item.typeUrl" class="card__topImg page">
                  <div class="page__img">
                    <img :src="item.itemImgUrl" :alt="item.itemName">
                  </div>
                  <span class="card__topImg--icon">
                    <img 
                      v-if="item.kinds == 'photo'"
                      src="~assets/img/icons/ico-card-picture.svg" alt="사진"
                    >
                    <img 
                      v-else-if="item.kinds == 'video'"
                      src="~assets/img/icons/ico-card-video.svg" alt="영상"
                    >
                    <img 
                      v-else-if="item.kinds == 'music'"
                      src="~assets/img/icons/ico-card-music.svg" alt="음악"
                    >
                  </span>
                </NuxtLink>
                <div class="card__topTit">
                  <NuxtLink :to="item.typeUrl" class="card__name page__split">
                    {{item.itemName}}
                  </NuxtLink>
                  <button class="btn__ico" @click="likeBtn(idx, $event)">
                    <div>
                      <img :class="{active:setActive}" class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                      <img :class="{active:setActive}" class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                    </div>
                  </button>
                </div>
                <NuxtLink to="/myPage/userItem/home" class="card__user page">
                      <p class="card__userImg page__img page__shadowThin">
                        <img :src="item.userImgUrl" :alt="item.userName">
                      </p>
                      <p class="card__userName">
                        {{item.userName}}
                      </p>
                    </NuxtLink>
                <NuxtLink to="/marketPlace/detail" class="card__info">
                      <p 
                        v-if="item.itemState == '진행중'"
                        class="card__time card__time--ing">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '진행예정'"
                        class="card__time card__time--soon">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '종료임박'"
                        class="card__time card__time--hurry">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '종료'"
                        class="card__time card__time--end">
                        판매 종료된 아이템 입니다.
                      </p>
                      <p 
                        v-else-if="item.itemState == ''"
                        class="card__time card__time--infinity">
                        팜매 기간이 없는 아이템 입니다.
                      </p>
                      <p class="card__price">
                        {{item.itemPrice}}
                        <span>KRW</span>
                      </p>
                    </NuxtLink>
              </div>
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
      </Hooper><!-- myPage__slide -->
      <div
        v-if="id == 3 && view == 0"
        class="myPage__noNft"
      > 
        <p class="myPage__noNft--txt">
          최근 본 NFT가 없습니다.
        </p>
      </div><!-- myPage__noNft -->
      <Hooper
        v-if="id == 3 && view != 0"
        :settings="hooperSetting" 
        class="myPage__slide slide"
      >
        <Slide
          v-for="item in view" 
          :key="item.id"
        >
        <div class="card">
            <div class="card__inner">
                <div class="card__itemState itemState">
                  <span class="itemState--start" v-if="item.itemState == '진행중'">진행중</span>
                  <span class="itemState--expect" v-else-if="item.itemState == '진행예정'">진행예정</span>
                  <span class="itemState--hurry" v-else-if="item.itemState == '종료임박'">종료임박</span>
                  <span class="itemState--end" v-else-if="item.itemState == '종료'">종료</span>
                </div>
                <NuxtLink :to="item.typeUrl" class="card__topImg page">
                  <div class="page__img">
                    <img :src="item.itemImgUrl" :alt="item.itemName">
                  </div>
                  <span class="card__topImg--icon">
                    <img 
                      v-if="item.kinds == 'photo'"
                      src="~assets/img/icons/ico-card-picture.svg" alt="사진"
                    >
                    <img 
                      v-else-if="item.kinds == 'video'"
                      src="~assets/img/icons/ico-card-video.svg" alt="영상"
                    >
                    <img 
                      v-else-if="item.kinds == 'music'"
                      src="~assets/img/icons/ico-card-music.svg" alt="음악"
                    >
                  </span>
                </NuxtLink>
                <div class="card__topTit">
                  <NuxtLink :to="item.typeUrl" class="card__name page__split">
                    {{item.itemName}}
                  </NuxtLink>
                  <button class="btn__ico" @click="latelyLike(idx, $event)">
                    <div>
                      <img :class="{active:setActive}" class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                      <img :class="{active:setActive}" class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                    </div>
                  </button>
                </div>
                <NuxtLink to="/myPage/userItem/home" class="card__user page">
                      <p class="card__userImg page__img page__shadowThin">
                        <img :src="item.userImgUrl" :alt="item.userName">
                      </p>
                      <p class="card__userName">
                        {{item.userName}}
                      </p>
                    </NuxtLink>
                <NuxtLink to="/marketPlace/detail" class="card__info">
                      <p 
                        v-if="item.itemState == '진행중'"
                        class="card__time card__time--ing">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '진행예정'"
                        class="card__time card__time--soon">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '종료임박'"
                        class="card__time card__time--hurry">
                        {{item.itemTime}}
                      </p>
                      <p 
                        v-else-if="item.itemState == '종료'"
                        class="card__time card__time--end">
                        판매 종료된 아이템 입니다.
                      </p>
                      <p 
                        v-else-if="item.itemState == ''"
                        class="card__time card__time--infinity">
                        팜매 기간이 없는 아이템 입니다.
                      </p>
                      <p class="card__price">
                        {{item.itemPrice}}
                        <span>KRW</span>
                      </p>
                    </NuxtLink>
              </div>
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
      </Hooper><!-- myPage__slide -->
      <div class="myPage__nftBtn">
        <NuxtLink
            v-if="hasNft == true" 
            to="../table/myNft"
            class="btn--bigSub btn--sub"
        >
          NFT 목록 더 보기
        </NuxtLink>
        <NuxtLink
            v-if="hasNft == false" 
            to="../marketPlace/sale"
            class="btn--bigSub btn--sub"
        >
          NFT 판매하기
        </NuxtLink>
      </div><!-- myPage__nftBtn -->
    </div>
  </div>
</template>

<script>
  import { 
    Hooper, 
    Slide,
    Navigation  as HooperNavigation  //슬라이드 화살표
  } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: 'profile',
    // layout: 'default',
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    data: () => ({
      // 프로필 기본 정보
      id                :0,                          // 초기 아이디 값
      userImgUrl        :require('assets/./img/picture/dayoung-blue.png'),// 아이템 이미지
      userName          :'front2d0',                 // 닉네임
      comment           :'공부가 취미입니다만?',          // 소개
      snsImgUrl         :require('assets/./img/test/test-card1.png'),// sns 이미지
      snsUrl            :'instagram.com/a1234567890',// sns 주소
      snsName           :'인스타그램',                  // sns 이름
      hasNft            : true,                      // nft 슬라이드 내용 
      profilePhotoOn    : true,                      // 프로필 사진
      tabActive         :'',
      // 탭메뉴 이름
      tabMenu : [
        { 
          name  : 'Collection',
          icon  : require('assets/./img/icons/ico-nft-tab1.svg')
        },
        { 
          name  : 'Sale',
          icon  : require('assets/./img/icons/ico-nft-tab2.svg')
        },
        { 
          name  : 'Like',
          icon  : require('assets/./img/icons/ico-nft-tab3.svg')
        },
        { 
          name  : 'View',
          icon  : require('assets/./img/icons/ico-nft-tab4.svg')
        }
      ],

      // 뱃지
      badgeList :[
        {
          img           :require('assets/./img/badge/ico-badge1.png'),
          name          :'새싹'
        },
        {
          img           :require('assets/./img/badge/ico-badge2.png'),
          name          :'꽃'
        },
        {
          img           :require('assets/./img/badge/ico-badge3.png'),
          name          :'저울'
        }
      ],
      // 아이템 기본 정보
      collection : [
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'60,142',
          itemTime      :'01D:13:47:30',
          itemImgUrl    :require('assets/./img/test/test-card3.png'),
          userImgUrl    :require('assets/./img/test/test-card5.png'),
          itemState     :'종료',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'video',
        },
        {
          itemName      :'HAKAI.PT2_S',
          userName      :'GHARLIERA',
          itemPrice     :'50,000',
          itemTime      :'03D:11:49:30',
          itemImgUrl    :require('assets/./img/test/test-card1.png'),
          userImgUrl    :require('assets/./img/test/test-card2.png'),
          itemState     :'진행중',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'100,000',
          itemTime      :'00D:09:21:08',
          itemImgUrl    :require('assets/./img/test/test-card6.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'종료임박',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'1,000,000',
          itemTime      :'2022.04.02 PM.12:00',
          itemImgUrl    :require('assets/./img/test/test-card4.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'진행예정',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'60,142',
          itemTime      :'01D:13:47:30',
          itemImgUrl    :require('assets/./img/test/test-card7.png'),
          userImgUrl    :require('assets/./img/test/test-card5.png'),
          itemState     :'종료',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S',
          userName      :'GHARLIERA',
          itemPrice     :'50,000',
          itemTime      :'03D:11:49:30',
          itemImgUrl    :require('assets/./img/test/test-card8.png'),
          userImgUrl    :require('assets/./img/test/test-card2.png'),
          itemState     :'진행중',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'100,000',
          itemTime      :'00D:09:21:08',
          itemImgUrl    :require('assets/./img/test/test-card6.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'종료임박',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'1,000,000',
          itemTime      :'2022.04.02 PM.12:00',
          itemImgUrl    :require('assets/./img/test/test-card8.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'진행예정',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        }
      ],
      sale : [
        /* {
          itemName      :'HAKAI.PT2_S',
          userName      :'GHARLIERA',
          itemPrice     :'50,000',
          itemTime      :'03D:11:49:30',
          itemImgUrl    :require('assets/./img/test/test-card8.png'),
          userImgUrl    :require('assets/./img/test/test-card2.png'),
          itemState     :'진행중',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'100,000',
          itemTime      :'00D:09:21:08',
          itemImgUrl    :require('assets/./img/test/test-card6.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'종료임박',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'1,000,000',
          itemTime      :'00D:03:00:30',
          itemImgUrl    :require('assets/./img/test/test-card7.png'),
          userImgUrl    :require('assets/./img/test/test-card5.png'),
          itemState     :'진행예정',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'60,142',
          itemTime      :'01D:13:47:30',
          itemImgUrl    :require('assets/./img/test/test-card7.png'),
          userImgUrl    :require('assets/./img/test/test-card5.png'),
          itemState     :'종료',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S',
          userName      :'GHARLIERA',
          itemPrice     :'50,000',
          itemTime      :'03D:11:49:30',
          itemImgUrl    :require('assets/./img/test/test-card8.png'),
          userImgUrl    :require('assets/./img/test/test-card2.png'),
          itemState     :'진행중',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'100,000',
          itemTime      :'00D:09:21:08',
          itemImgUrl    :require('assets/./img/test/test-card6.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'종료임박',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'1,000,000',
          itemTime      :'2022.04.02 PM.12:00',
          itemImgUrl    :require('assets/./img/test/test-card2.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'진행예정',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        } */
      ],
      like : [
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'100,000',
          itemTime      :'00D:09:21:08',
          itemImgUrl    :require('assets/./img/test/test-card6.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'종료임박',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'1,000,000',
          itemTime      :'2022.04.02 PM.12:00',
          itemImgUrl    :require('assets/./img/test/test-card7.png'),
          userImgUrl    :require('assets/./img/test/test-card5.png'),
          itemState     :'진행예정',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'60,142',
          itemTime      :'01D:13:47:30',
          itemImgUrl    :require('assets/./img/test/test-card7.png'),
          userImgUrl    :require('assets/./img/test/test-card5.png'),
          itemState     :'종료',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        },
        {
          itemName      :'HAKAI.PT2_S',
          userName      :'GHARLIERA',
          itemPrice     :'50,000',
          itemTime      :'03D:11:49:30',
          itemImgUrl    :require('assets/./img/test/test-card8.png'),
          userImgUrl    :require('assets/./img/test/test-card2.png'),
          itemState     :'진행중',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'100,000',
          itemTime      :'00D:09:21:08',
          itemImgUrl    :require('assets/./img/test/test-card6.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'종료임박',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'video',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'1,000,000',
          itemTime      :'2022.04.02 PM.12:00',
          itemImgUrl    :require('assets/./img/test/test-card5.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'진행예정',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'photo',
        }
      ],
      view : [
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'60,142',
          itemTime      :'01D:13:47:30',
          itemImgUrl    :require('assets/./img/test/test-card7.png'),
          userImgUrl    :require('assets/./img/test/test-card5.png'),
          itemState     :'종료',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S',
          userName      :'GHARLIERA',
          itemPrice     :'50,000',
          itemTime      :'03D:11:49:30',
          itemImgUrl    :require('assets/./img/test/test-card8.png'),
          userImgUrl    :require('assets/./img/test/test-card2.png'),
          itemState     :'진행중',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'100,000',
          itemTime      :'00D:09:21:08',
          itemImgUrl    :require('assets/./img/test/test-card6.png'),
          userImgUrl    :require('assets/./img/test/test-card3.png'),
          itemState     :'종료임박',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'video',
        },
        {
          itemName      :'HAKAI.PT2_S Canvas Print',
          userName      :'GHARLIERA',
          itemPrice     :'1,000,000',
          itemTime      :'2022.04.02 PM.12:00',
          itemImgUrl    :require('assets/./img/test/test-card4.png'),
          userImgUrl    :require('assets/./img/test/test-card1.png'),
          itemState     :'진행예정',
          typeUrl       :'../../marketPlace/detail',
          kinds         : 'music',
        }
      ],
      hooperSetting: {  
        centerMode      : true,                              // 센터 모드
        infiniteScroll  : true,                              // 무한 스크롤 모드
        wheelControl    : false,                             // 스크롤 슬라이드 넘김 방지
        breakpoints     : {
          // 슬라이더 반응형 1040px,
          500: { 
            itemsToShow  : 2,                                // 슬라이드 보이는 개수
          },
          970: { 
            itemsToShow  : 3,                                // 슬라이드 보이는 개수
          }
        }
      },
      setActive         : false,                             // 좋아요 버튼  -> 페이지
    }),
    methods: {
      // 좋아요 버튼  -> 카드
      collectionLike(idx, event){
        event.target.classList.toggle('active');
      },
      SaleLike(idx, event){
        event.target.classList.toggle('active');
      },
      likeBtn(idx, event){
        event.target.classList.toggle('active');
      },
      latelyLike(idx, event){
        event.target.classList.toggle('active');
      },
      // 탭 클릭시 효과
      tab(idx){
        this.id = idx // 탭 액티브에 idx 만큼 곱해서 거리 측정 후 바 이동
      }
    }
  }
</script>
