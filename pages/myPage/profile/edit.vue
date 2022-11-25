<template>
  <div class="myPage page container__inner--mid container__inner--padding">
    <ConfirmModal
      v-if="confirmModal == true"
      :modalTxt="text"
      @close="close"
    ></ConfirmModal>
    <div class="myPage__info page__margin--big">
      <div class="myPage__profileImg page__margin--mid">
        <div class="myPage__img page__img">
          <img
          v-if="userImgUrl != ''"
          :src="userImgUrl" 
          :alt="userName">
          <img
          v-else-if="userImgUrl === '' || userImgUrl === null || userImgUrl === undefined"
          src="~assets/img/icons/ico-no-profile.svg" 
          alt="프로필사진">
        </div>
      </div>
      <button
        @click="editPhoto"
        type="button" class="myPage__editBtn btn--edit btn--unAccept"
      >사진변경</button>
      <form 
        @submit.prevent="checkForm"
        action=""
        method="post"
        class="myPage__writeBox formInfoLayout page__margin--mid"
      >
        <fieldset>
          <legend>프로필 입력</legend>
          <div class="formInfoLayout__input page__margin--small">
            <span
              v-if="emailActive == true" 
              class="formInfoLayout__input--tit">이메일</span>
            <div 
              :class="{valid: ableEmail == true, unValid: ableEmail == false}"
              class="formInfoLayout__write formInfoLayout__write--box">
              <img src="~assets/img/icons/ico-man-gray.svg" alt="이메일">
              <input 
                v-model="email"
                type="email"
                name="email" 
                placeholder="이메일"
                class="formInfoLayout__write"
                :class="{icon: write == true}"
                :disabled="AbleEmail()">
              <div
                v-if="emailClear == true"
                @click="clearEmail"
                class="formInfoLayout__write--inputBtn clear">
                <img src="~assets/img/icons/ico-input-clear.svg" alt="전체 지우기">
              </div>
            </div>
            <span 
              v-if="ableEmail == false" 
              class="page__color--error formInfoLayout__input--error">
              이메일 주소를 확인해주세요.
            </span>
          </div>
          <div class="formInfoLayout__write formInfoLayout__write--box  page__margin--small">
            <img src="~assets/img/icons/ico-introduce.svg" alt="소개">
            <input 
              v-model="introduce"
              type="text" 
              name="introduce"
              placeholder="소개"
            >
          </div>
          <div
          :class="{active : snsOn == true}"
          class="myPage__snsBox">
            <div class="myPage__badgeBox--inner">
              <ul
                :settings="hooperSetting"
                class="myPage__badge myPage__sns"
              >
                <li
                  v-for="(item, idx) in snsList"
                  :key="idx"
                  @click="selectSns(idx, $event)"
                  class="">
                  <p 
                    :class="{active : selectIdx == item.idx}"
                    class="myPage__badge--img "
                  >
                    <img :src="item.img" :alt="item.name">
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="formInfoLayout__write formInfoLayout__write--box">
            <img :src="snsImg" alt="소개">
            <input 
              v-model="sns"
              type="text" 
              name="sns"
              :placeholder="snsName"
              @click="snsClick"
            >
          </div>

        </fieldset>
      </form>
      <!-- <div class="myPage__badgeBox page__margin--mid">
        <p class="myPage__badgeBox--tit page__margin--small">노출될 뱃지</p>
        <div class="myPage__badgeBox--back page__shadow">
          <div class="myPage__badgeBox--inner">
            <Hooper
              :settings="hooperSetting"
              class="myPage__badge"
            >
              <Slide
                v-for="(badge, idx) in badgeList"
                :key="idx"
                @click="selectBadge(idx, $event)"
                class="myPage__badge--">
                <p 
                  :class="{active : selectIdx == badge.idx}"
                  class="myPage__badge--img"
                >
                  <img :src="badge.img" :alt="badge.name">
                  <span class="myPage__badge--count">
                    {{idx + 1}}
                  </span>
                </p>
              </Slide>
              <HooperNavigation slot="hooper-addons" class="myPage__badge--nav"></HooperNavigation>
            </Hooper>
          </div>
        </div>
      </div> -->
      <button
        @click="checkForm"
        :disabled="ableBtn()"
        :class="{accept: disabled == true}" 
        class="btn--big btn--unAcceptLight" 
        type="button"
      >
        저장
      </button>
    </div><!-- myPage__info -->
  </div>
</template>

<script>
  import ConfirmModal from '@/modal/confirm'    // 확인 모달
  import { 
    Hooper, 
    Slide,
    Navigation  as HooperNavigation  //슬라이드 화살표
  } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: 'profileEdit',
    // layout: 'default',
    components: {
      ConfirmModal,
      Hooper, 
      Slide,
      HooperNavigation 
    },
    data: () => ({
      // 프로필 기본 정보
      userImgUrl    :require('assets/./img/test/test-user.png'),// 아이템 이미지
      profilePhotoOn:false,  // 프로필 등록
      count         :1,
      sns           :'',     // sns 입력 초기화
      selectIdx     :null,   // 선택 인덱스 초기화
      confirmModal  :false,  // 확인 모달
      text          :'',     // 모달 메시지
      disabled      :false,  // 프로필 수정 버튼 활성화
      snsOn         :false,
      snsName       :'sns 선택',
      snsImg        :require('assets/./img/icons/ico-web.svg'),
      // sns
      snsList:[
        {
          img:require('assets/./img/icons/ico-sns-insta.svg'),
          name:'인스타그램',
          idx:0,
        },
        {
          img:require('assets/./img/icons/ico-sns-twitter.svg'),
          name:'트위터',
          idx:1,
        },
        {
          img:require('assets/./img/icons/ico-sns-tictok.svg'),
          name:'틱톡',
          idx:2,
        },
        {
          img:require('assets/./img/icons/ico-sns-naver.svg'),
          name:'네이버 블로그',
          idx:3,
        },
      ],
      // 뱃지
      badgeList     :[
        {
          img       :require('assets/./img/badge/ico-badge1.png'),
          name      :'새싹',
          idx       : 0,
        },
        {
          img       :require('assets/./img/badge/ico-badge2.png'),
          name      :'꽃',
          idx       : 1,
        },
        {
          img       :require('assets/./img/badge/ico-badge3.png'),
          name      :'저울',
          idx       : 2,
        },
        {
          img       :require('assets/./img/badge/ico-badge1.png'),
          name      :'저울',
          idx       : 3,
        },
        {
          img       :require('assets/./img/badge/ico-badge2.png'),
          name      :'저울',
          idx       : 4,
        },
        {
          img       :require('assets/./img/badge/ico-badge3.png'),
          name      :'저울',
          idx       : 5,
        },
        {
          img       :require('assets/./img/badge/ico-badge1.png'),
          name      :'저울',
          idx       : 6,
        },
        {
          img       :require('assets/./img/badge/ico-badge1.png'),
          name      :'저울',
          idx       : 3,
        },
        {
          img       :require('assets/./img/badge/ico-badge2.png'),
          name      :'저울',
          idx       : 4,
        },
        {
          img       :require('assets/./img/badge/ico-badge3.png'),
          name      :'저울',
          idx       : 5,
        },
        {
          img       :require('assets/./img/badge/ico-badge1.png'),
          name      :'저울',
          idx       : 6,
        },
        {
          img       :require('assets/./img/badge/ico-badge2.png'),
          name      :'저울',
          idx       : 7,
        }
      ],
      hooperSetting: {
        itemsToShow     : 4,      // 슬라이드 보이는 개수
        infiniteScroll  : true,    //무한 스크롤 모드
        breakpoints     : {
          // 슬라이더 반응형 969px
          400: {
            itemsToShow   : 5,
          },
          500: {
            itemsToShow   : 6,
          },
          600: {
            itemsToShow   : 7,
          },
          768: {
            itemsToShow   : 8,
          }
        }
      },

      // 인풋 벨류
      email         : '',     // 이메일
      introduce     : '',     // 자기소개

      // 버튼
      emailClear    :false,   // 이메일 지우기 버튼

      // 조건 검사
      disabled      :false,   // 폼 버튼 활성화
      ableEmail     :null,    // 이메일 입력 조건

      // 이벤트
      emailActive   :false,   // 이메일 입력 감지         
      isFocused     :false,   // 자동입력
      write         :true,    // 인풋아이콘 on
    }),
    methods: {
      // 이메일 ============================================
      // 포커스 온
      emailFocus(){
        // 입력시 제목 on
        this.emailActive = true;

        // 형식에 안 맞을 경우 전부 리셋
        if(this.ableEmail == false){
          this.email      = '';
          this.ableEmail  = null;
          this.emailClear = false;
          this.emailActive = false;}
      },
      AbleEmail(){
        let emVal         = this.email; // 벨류
        let returnEmail   =             // 이메일 데이터 일치하는지
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        // 형식 안 맞을 경우 에러
        if(!returnEmail.test(emVal) && emVal != '')
          this.ableEmail  = false
        // 형식 맞으면 통과
        else if(returnEmail.test(emVal))
          this.ableEmail  = true
        // 아무 글도 없을 경우 리셋
        else if(emVal == '')
          this.ableEmail  = null

        // 글자 입력시 x버튼 on, off 
        if(emVal != ''){
          this.emailClear = true
          this.emailActive = true;}
        else{
          this.emailClear = false 
          this.emailActive = false;}
      },

      // 버튼 ============================================
      // 이메일 리셋
      clearEmail(){
        this.email        = '';     // 벨류
        this.ableEmail    = null;   // 입력 조건
        this.emailClear   = false;  // 지우기 버튼
      },
      // 사진변경 버튼
      editPhoto(){
        this.text = '사진이 변경되었습니다.'
        this.confirmModal = true;
        setTimeout(() => {
          this.confirmModal = false;
        }, 1200);
      },
      // sns 선택시 active
      selectSns(idx, event){
        let clear = this.sns = ''
        this.selectIdx = idx;
        if(idx == 0){
          this.snsName = '인스타그램을 입력해주세요.';
          this.snsImg = require('assets/./img/icons/ico-sns1.svg');
          clear}
        else if(idx == 1){
          this.snsName = '트위터를 입력해주세요.'
          this.snsImg = require('assets/./img/icons/ico-sns2.svg');
          clear}
        else if(idx == 2){
          this.snsName = '틱톡을 입력해주세요'
          this.snsImg = require('assets/./img/icons/ico-sns3.svg');
          clear}
        else if(idx == 3){
          this.snsName = '네이버 블로그를 입력해주세요'
          this.snsImg = require('assets/./img/icons/ico-sns4.svg');
          clear}
        
      },
      snsClick(){
        this.snsOn == false ? this.snsOn = true : this.snsOn = false
      },
      // 뱃지 선택시 active
      selectBadge(idx, event){
        
        //this.count += 1
        let activeClass = event.target.classList.contains('active')

        if(!activeClass){
          this.count++
        } else if(activeClass){
          this.count--
        }

        if(this.count < 4){
          event.target.classList.toggle('active')
        }
      },
      close(){
        this.confirmModal = false
      },

      // 프로필 수정 버튼 활성화
      ableBtn(){
        // 이메일 형식
        if(this.ableEmail == true)
          this.disabled = true
        else
          this.disabled = false
      },
      // 이메일 유효성 검사
      checkForm(){
        // 이메일 형식
        if(this.disabled == true){
          
          this.text = '프로필이 저장되었습니다.'
          this.confirmModal = true;
          setTimeout(() => {
            this.confirmModal = false;
          }, 1200);}
      },
    }
  }
</script>
