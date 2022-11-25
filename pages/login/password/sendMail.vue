<template>
  <div class="login page container__inner--mid container__inner--padding">
    <ConfirmModal
      v-if="moreModal == true"
      @close="closeModal"
      :modalTxt="text"
    >
    </ConfirmModal>
    <div class="join__top">
      <img  class="join__top--logo" src="~assets/img/logo/logo-round.svg" alt="민트오션">
      <h1 class="page__margin--small">비밀번호 재설정</h1>
      <div class="join__top--txt page__margin--mid">
        <span>계정으로 사용하고 있는 이메일 주소를 입력해 주세요.</span>
      </div>
    </div>
    <div class="join__mid">
      <form 
        @submit.prevent="checkForm"
        action=""
        method="post"
        class="join__writeBox formInfoLayout page__margin--mid"
      >
        <fieldset class="page__margin--mid">
          <legend>이메일 입력</legend>
          <div class="formInfoLayout__input  page__margin--small">
            <div 
              :class="{valid: ableEmail == true, unValid: ableEmail == false}"
              class="formInfoLayout__write formInfoLayout__write--box"
            >
              <img src="~assets/img/icons/ico-man-gray.svg" alt="이메일">
              <input 
                v-model="email"
                type="email"
                name="email"
                placeholder="이메일"
                class="formInfoLayout__write"
                :class="{icon: write == true}"
                :disabled="AbleEmail()"
                @blur="emailBlur()"
              >
              <div
                v-if="emailClear == true"
                @click="clearEmail"
                class="formInfoLayout__write--inputBtn clear"
              >
                <img src="~assets/img/icons/ico-input-clear.svg" alt="전체 지우기">
              </div>
            </div>
            <span 
              v-if="ableEmail == false" 
              class="page__color--error formInfoLayout__input--error"
            >
              이메일 주소를 확인해주세요.
            </span>
          </div>
        </fieldset>
        <fieldset>
          <legend>비밀번호 재발송 버튼</legend>
          <div class="agreeLayout__btns container__inner--mid">
            <input 
              :disabled="ableBtn()"
              :class="{accept: disabled == true}" 
              class="btn--unAcceptLight btn--big page__margin--small" 
              type="submit" 
              value="비밀번호 재설정 메일 발송"
            >
          </div>

          <!-- 다음 링크 이동용 임시 버튼 -->
          <NuxtLink to="reset" class="btn--big">다음 페이지(임시버튼)</NuxtLink>
        </fieldset>
      </form> 
    </div>
  </div><!-- systemPage -->
</template>

<script>
  import ConfirmModal from '@/modal/confirm'    // 확인 모달
  export default {
    name: 'sendMail',
    // layout: 'default',
    components:{
      ConfirmModal
    },
    data: () => ({
      // 벨류
      email           :'',                // 이메일

      // 모달
      moreModal       :false,             // 모달 노출
      text            :'메일을 발송하였습니다.', // 모달 메시지

      // 버튼
      disabled        :false,              // 폼 버튼 활성화
      emailClear      :false,              // 이메일 지우기 버튼

      // 조건 검사
      ableEmail       :null,               // 이메일 입력 조건

      // 이벤트
      write           :true,               // 인풋아이콘 on
    }),
    methods: {
      // 이메일 ============================================
      // 포커스 온
      emailFocus(){
        // 형식에 안 맞을 경우 전부 리셋
        if(this.ableEmail == false){
          this.email      = '';
          this.ableEmail  = null;
          this.emailClear = false;}
      },
      // 포커스 아웃
      emailBlur(){
        let emVal         = this.email; // 벨류
        let returnEmail   =             // 형식 ()
        /^[a-zA-Z0-9+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        // 형식 안 맞을 경우 에러
        if(!returnEmail.test(emVal) && emVal != '')
          this.ableEmail  = false

      },
      // 폼 버튼 활성화
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
    
      ableBtn(){
        if(this.ableEmail == true)
        this.disabled = true
        else
        this.disabled = false
      },
      // 폼 체크
      checkForm(){
        // 조건 맞으면 모달 뜨고전부 리셋
        if(this.disabled == true){
          this.moreModal   = true
          setTimeout(() => {
            this.moreModal = false
          }, 1200);
          this.email       = '';
          this.ableEmail   = null;
          this.emailClear  = false;
        }
      },
      // 모달 닫기 버튼
      closeModal(){
        this.moreModal     = false
      },
    }
  }
</script>
