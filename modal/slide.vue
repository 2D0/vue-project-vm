<template>
  <transition name="moreModal">
    <div class="modal">
      <div class="modal__layout modalMore modal--mid page__shadow">
        <div class="modalMore__inner">
          <div class="modalMore__slide">
            <Hooper
              :settings="hooperSetting">
              <Slide
                v-for="item in nft"
                :key="item.id"
                class="join__slide--img">
                <NuxtLink to="/">
                  <div class="modalMore__slide--inner page__img">
                    <img :src="item.img" :alt="item.itemName">
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
          <div class="modalMore__bottom modalMore__inner btn">
            <div
              v-if="stopBtn == true"
              class="agreeLayout__check modalMore__stopCheck">
              <input 
                id="stopCheck" 
                type="checkbox"
                v-model="stopCheck"
                name="stopCheck">
              <label for="stopCheck">
                <span
                  class="agreeLayout__checkBox">
                  체크박스
                </span>
                <span>
                  오늘 하루 열지 않기
                </span>
              </label>
            </div>
            <button
            @click="closeBtn" 
            type="button" 
            class="modalMore__confirm btn--accept btn--modalMini"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
      <div
        @click ="closeBtn"
        class="modal__back"
      >
        배경
      </div>
    </div>
  </transition>
</template>

<script>
  import { 
    Hooper, 
    Slide,
    Navigation  as HooperNavigation  //슬라이드 화살표
  } from 'hooper';
export default {
  name: 'more',
  components:{
    Hooper,
    Slide,
    HooperNavigation
  },
  data: () => ({
    stopBtn  : true,   // 오늘하루 보지 않기 버튼
    stopCheck: [],      // 버튼 체크
    nft: [
      {
        itemName:'아이템1',
        img:require('assets/./img/test/test-card7.png')
      },
      {
        itemName:'아이템1',
        img:require('assets/./img/test/test-card8.png')
      },
      {
        itemName:'아이템1',
        img:require('assets/./img/test/test-card2.png')
      },
      {
        itemName:'아이템1',
        img:require('assets/./img/test/test-card5.png')
      },
    ],
    hooperSetting: {
      itemsToShow     : 1,                                 // 슬라이드 보이는 개수
      centerMode      : true,                              // 센터 모드
      autoPlay        : true,                              // 자동 
      playSpeed       : 4000,                              // 슬라이드 속도
      infiniteScroll  : true                               //무한 스크롤 모드
    },
  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>