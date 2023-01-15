<template>
  <div class="join page container__inner--mid container__inner--padding">
    <div class="join__top container__inner--small">
      <img  class="join__top--logo" src="~assets/img/logo/logo-round.svg" alt="메이크트리">
      <h1 class="join__top--complete">
          비밀번호 재설정이 완료되었습니다.
      </h1>
    </div>
    <div class="join__slide">
      <Hooper
        :settings="hooperSetting" 
      >
        <Slide
          v-for="item in nft"
          :key="item.id"
          class="join__slide--img"
        >
          <NuxtLink to="/marketPlace/detail">
            <div class="join__slide--inner page__img">
              <img :src="item.img" :alt="item.itemName">
            </div>
          </NuxtLink>
        </Slide>
        <HooperNavigation class="slide__btn slide__nft" slot="hooper-addons">
          <span class="slide__arrow slide__arrow--left" slot="hooper-prev">
            <i class="slide__nft--top"></i>
            <i class="slide__nft--bottom"></i>
          </span>
          <span class="slide__arrow slide__arrow--right" slot="hooper-next">
            <i class="slide__nft--top"></i>
            <i class="slide__nft--bottom"></i>
          </span>
        </HooperNavigation>
      </Hooper>
    </div>
    <div class="page__margin--mid container__inner--small">
      <NuxtLink to="../home" class="btn--big btn--accept">
        로그인하러 가기
      </NuxtLink>
    </div>
  </div><!-- systemPage -->
</template>

<script>
  import { 
    Hooper, 
    Slide,
    Navigation  as HooperNavigation  //슬라이드 화살표
  } from 'hooper';
  import MoreModal    from '@/modal/more'
  export default {
    name: 'loginComplete',
    // layout: 'default',
    components:{
      Hooper,
      Slide,
      HooperNavigation,
      MoreModal
    },
    data: () => ({
      // nftList
      nft: [
        {
          itemName:'아이템1',
          img:require('assets/./img/test/test-card7.png')
        },
        {
          itemName:'아이템1',
          img:require('assets/./img/test/test-card5.png')
        },
        {
          itemName:'아이템1',
          img:require('assets/./img/test/test-card8.png')
        },
        {
          itemName:'아이템1',
          img:require('assets/./img/test/test-card3.png')
        },
      ],
      hooperSetting: {
        itemsToShow     : 1,                                  // 슬라이드 보이는 개수
        centerMode      : true,                              // 센터 모드
        autoPlay        : true,                              // 자동 
        playSpeed       : 4000,                              // 슬라이드 속도
        infiniteScroll  : true                                //무한 스크롤 모드
      },
    }),
    methods: {
    }
  }
</script>
