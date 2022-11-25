<template>
  <div class="login page container__inner--mid container__inner--padding">
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
          <legend>비밀번호 재설정</legend>
          <div class="formInfoLayout__input  page__margin--small">
            <span
              v-if="emailActive == true" 
              class="formInfoLayout__input--tit">이메일</span>
            <div 
              :class="{valid: ableEmail == true, unValid: ableEmail == false}"
              class="formInfoLayout__write formInfoLayout__write--box"
            >
              <input 
                v-model="email"
                type="email"
                name="email" 
                placeholder="이메일"
                class="formInfoLayout__write formInfoLayout__write--noIcon"
                :class="{icon: write == true}"
                :disabled="AbleEmail()"
                @blur="emailBlur()"
              >
              <div
                v-if="emailActive == true"
                @click="clearEmail"
                class="formInfoLayout__write--inputBtn clear"
              >
                <img src="~assets/img/icons/ico-input-clear.svg" alt="전체 지우기">
              </div>
            </div>

            <!-- ========== 유효한 이메일이 아닌 경우 ========== -->
            <span 
              v-if="ableEmail == false" 
              class="formInfoLayout__input--error page__color--error"
            >
              이메일 주소를 확인해주세요.
            </span>
            <!-- ========== 유효한 이메일이 아닌 경우 ========== -->

          </div>
          <div class="formInfoLayout__input  page__margin--small">
            <span
              v-if="pwActive == true" 
              class="formInfoLayout__input--tit">비밀번호</span>
            <div 
              :class="{valid: ablePw == true, unValid: ablePw == false}"
              class="formInfoLayout__write formInfoLayout__write--box"
            >
              <input 
                v-model="pass"
                :type="passwordType" 
                name="password"
                placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8-16자)"
                maxlength="16"
                :class="{icon: write == true, secret: password == true}"
                class="formInfoLayout__write--inIcon formInfoLayout__write--noIcon"
                :disabled="AblePass()"
                @blur="passBlur()"
              >
              <div
                v-if="pwActive == true"
                @click="clearPassword"
                class="formInfoLayout__write--inputBtn clear"
              >
                <img src="~assets/img/icons/ico-input-clear.svg" alt="전체 지우기">
              </div>

              <label>
                <div
                  @click="secretToggle" 
                  class="formInfoLayout__write--inputBtn secret"
                >
                  <img 
                    v-if="secret == true"
                    src="~assets/img/icons/ico-secret-on.svg" alt="비밀번호 가리기"
                  >
                  <img
                    v-else
                    src="~assets/img/icons/ico-secret-off.svg" alt="비밀번호 오픈"
                  >
                </div>
              </label>
            </div>
            <span 
              v-if="ablePw == false" 
              class="formInfoLayout__input--error page__color--error"
            >
              비밀번호는 8-16자의 문자, 숫자, 기호로 입력해 주세요.
            </span>
          </div>
          <div class="formInfoLayout__input  page__margin--small">
            <div 
              :class="{valid: ablePwVerify == true, unValid: ablePwVerify == false}"
              class="formInfoLayout__write formInfoLayout__write--box"
            >
              <input 
                v-model="pwVerify"
                type="password" 
                name="passConfirm"
                placeholder="비밀번호 확인"
                maxlength="16"
                class="formInfoLayout__write--noIcon"
                :disabled="AblePassVer()"
              >
            </div>
            <span 
              v-if="ablePwVerify == false" 
              class="formInfoLayout__input--error page__color--error"
            >
              비밀번호가 일치하지 않습니다.
            </span>
          </div>
        </fieldset>
        <fieldset>
          <legend>비밀번호 재설정 버튼</legend>
          <div class="agreeLayout__btns container__inner--mid">
            <input
              :disabled="ableBtn()"
              :class="{accept: disabled == true}" 
              class="btn--unAcceptLight btn--big page__margin--small" 
              type="submit" 
              value="비밀번호 재설정"
            >
          </div>
          
          <!-- 다음 링크 이동용 임시 버튼 -->
          <NuxtLink to="complete" class="btn--big">다음 페이지(임시버튼)</NuxtLink>
        </fieldset>
      </form> 
    </div>
  </div><!-- systemPage -->
</template>

<script>
  export default {
    name: 'passReset',
    // layout: 'default',
    components:{
    },
    data: () => ({
      // 벨류
      nickname        : '',                // 닉네임
      email           : '',                // 이메일
      pass            : '',                // 비밀번호
      pwVerify        : '',                // 비밀번호 확인

      // 버튼
      emailActive      :false,              // 이메일 지우기 버튼
      pwActive         :false,              // 비밀번호 지우기 버튼

      // 조건 검사
      disabled        :false,              // 폼 버튼 활성화
      ableEmail       :null,               // 이메일 입력 조건
      ablePw          :null,               // 비밀번호 입력 조건
      ablePwVerify    :null,               // 비밀번호 일치 검사

      // 이벤트
      passwordType    :'password',         // 비밀번호 타입
      write           :true,               // 인풋아이콘 on
      password        :true,               // 비밀번호 아이콘 on
      passClear       :false,              // 비밀번호 아이콘 on
      secret          :false,              // 비밀번호 가리기 on off

    }),
    methods: {
      // 이메일 ============================================
      // 포커스 온
      emailFocus(){
        // 형식에 안 맞을 경우 전부 리셋
        if(this.ableEmail == false){
          this.email      = '';
          this.ableEmail  = null;
          this.emailActive = false;}
      },
      // 포커스 아웃
      emailBlur(){
        let emVal         = this.email; // 벨류

        // 아무 글도 없을 경우 리셋
        if(emVal == '')
          this.ableEmail  = null   

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
        

        // 글자 입력시 x버튼 on, off 
        if(emVal != '')
          this.emailActive = true
        else
          this.emailActive = false
      },
      // 비밀번호 ============================================
      // 포커스 온
      passFocus(){
        // 형식에 안 맞을 경우 전부 리셋
        if(this.ablePw == false){
          this.pass    = '';
          this.ablePw  = null;
          this.pwActive = false;}
      },
      // 포커스 아웃
      passBlur(){
        // 아무 글도 없을 경우 리셋
        if(this.pass == '')
          this.ablePw = null
      },
      AblePass(){
        let pwVal       = this.pass;  // 벨류
        let returnPass  =             // 문자, 숫자, 특수문자, 최소 8자리 조건
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

        // 형식 맞으면 통과
        if(returnPass.test(pwVal))
          this.ablePw = true
        // 형식 안 맞을 경우 에러
        else if(!returnPass.test(pwVal) && pwVal != '')
          this.ablePw = false

        // 글자 입력시 x버튼 on, off
        if(pwVal != '')
          this.pwActive = true
        else
          this.pwActive = false
      },
      // 비밀번호 확인 ============================================
      // 포커스 온
      pwVerFocus(){
        if(this.ablePwVerify == false){
          this.pwVerify     = '';
          this.ablePwVerify = null}
      },
      AblePassVer(){
        let password   = this.pass.valueOf()      // 비밀번호 벨류 가져오기
        let passVer    = this.pwVerify.valueOf()  // 비밀번호 확인 벨류 가져오기
        let pwVerBlank = this.pass != '';         // 비밀번호 입력 여부
        let pwBlank    = this.pwVerify != '';     // 비밀번호 확인 입력 여부

        // 비밀번호가 일치하는 경우
        if(password == passVer && pwVerBlank && pwBlank){
          this.ablePwVerify = true}
        // 비밀번호가 일치하지 않는 경우
        else if(password != passVer && pwVerBlank && pwBlank){
          this.ablePwVerify = false}
      },
      // 버튼 ============================================
      // 이메일 리셋
      clearEmail(){
        this.email        = '';     // 벨류
        this.ableEmail    = null;   // 입력 조건
        this.emailActive   = false;  // 지우기 버튼
      },

      // 비밀번호 리셋
      clearPassword(){
        this.pass         = '';     // 비밀번호 벨류
        //this.pwVerify     = '';     // 비밀번호 확인 벨류
        this.ablePw       = null    // 비밀번호 조건
        this.pwActive      = false;  // 비밀번호 지우기 버튼
        //this.ablePwVerify = null;   // 비밀번호 일치 검사
      },

      // 비밀번호 시크릿
      secretToggle(){
        if(this.secret == true){
          this.secret       = false;
          this.passwordType = 'password'
        }else{
          this.secret       = true;
          this.passwordType = 'text'} 
      },
    
      ableBtn(){
        let Email = this.ableEmail    == true;
        let Pw    = this.ablePw       == true;
        let PwVer = this.ablePwVerify == true;

        if(Email && Pw && PwVer)
          this.disabled = true
        else
          this.disabled = false
      },
      // 폼 체크
      checkForm(){
        // 이메일 조건
        let emailVal = this.ableEmail
        if(emailVal == false || emailVal == null || this.email =='')
          this.ableEmail   = false;

        // 비밀번호 조건
        let pwVal = this.ablePw
        if(pwVal  == false || pwVal == null || this.pass == '')
          this.ablePw  = false;

        // 비밀번호 확인 조건
        let pwVerifyVal = this.ablePwVerify
        if(pwVerifyVal  == false || pwVerifyVal == null || this.pwVerify == '')
          this.ablePwVerify = false;
      },      
    }
  }
</script>
