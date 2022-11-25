<template>
  <transition name="loginModal">
    <div class="modal">
      <div class="modal__layout modalSubmit modal--mid">
        <div class="modalSubmit__inner modal__inner">
          <div class="join__top">
            <img  class="join__top--logo page__margin--small" src="~assets/img/logo/logo-round.svg" alt="민트오션">
            <div class="join__top--txt">
              <img src="~assets/img/icons/ico-http-no.svg" alt="http 금지">
              로그인하는 사이트의 주소가<br> 아래와 같은지 꼭 확인해주시기 바랍니다.
            </div>
            <div class="login__top--noti">
              <p class="login__top--notiBar">
                <img src="~assets/img/icons/ico-login-rock.svg" alt="경고">
                <em></em>
                <span>http<i class="page__color--error">s</i>://www.mint-ocean.com</span>
              </p>
              <span>자물쇠와 ‘<i class="page__color--error">s</i>’를 확인하세요.</span>
            </div>
          </div>
          <div class="join__mid">
            <form 
              @submit.prevent="checkForm"
              action=""
              method="post"
              class="join__writeBox formInfoLayout page__margin--mid"
            >
              <fieldset>
                <input type="hidden" name="xxxx" id="xxxx" value="xxxx" />
                <legend>로그인</legend>
                <div class="formInfoLayout__input  page__margin--small">
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
                      :disabled="AbleEmail()"
                      >
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
                <div class="formInfoLayout__input  page__margin--small">
                  <span
                    v-if="pwActive == true" 
                    class="formInfoLayout__input--tit">비밀번호</span>
                  <div 
                    :class="{valid: ablePw == true, unValid: ablePw == false}"
                    class="formInfoLayout__write formInfoLayout__write--box">
                    <img src="~assets/img/icons/ico-rock-gray.svg" alt="소개">
                    <input 
                      v-model="pass"
                      :type="passwordType" 
                      name="password"
                      placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8-16자)"
                      maxlength="16"
                      :class="{icon: write == true, secret: password == true}"
                      class="formInfoLayout__write--inIcon"
                      :disabled="AblePass()"
                      >
                    <div
                      v-if="pwClear == true"
                      @click="clearPassword"
                      class="formInfoLayout__write--inputBtn clear">
                      <img src="~assets/img/icons/ico-input-clear.svg" alt="전체 지우기">
                    </div>

                    <label>
                      <div
                        @click="secretToggle" 
                        class="formInfoLayout__write--inputBtn secret">
                        <img 
                          v-if="secret == true"
                          src="~assets/img/icons/ico-secret-on.svg" alt="비밀번호 가리기">
                        <img
                          v-else
                          src="~assets/img/icons/ico-secret-off.svg" alt="비밀번호 오픈">
                      </div>
                    </label>
                  </div>
                  <span 
                    v-if="ablePw == false" 
                    class="page__color--error formInfoLayout__input--error">
                    이메일 또는 비밀번호를 확인해주세요.
                  </span>
                </div>
              </fieldset>
              <fieldset>
                <legend>로그인 유지</legend>
                <div class="login__check page__margin--mid">
                  <div class="agreeLayout__check">
                    <input id="keepLogin" type="checkbox" name="keepLogin"> 
                      <label for="keepLogin">
                        <span class="agreeLayout__checkBox">체크박스</span> 
                        <span>로그인 상태 유지</span>
                    </label>
                  </div>
                  <NuxtLink to="password/sendMail" class="page__color--gray login__find--pass">비밀번호를 잊으셨나요?</NuxtLink>
                </div>
              </fieldset>
              <fieldset>
                <legend>로그인</legend>
                <div class="agreeLayout__btns">
                  <input
                    @click="checkForm"
                    :disabled="ableBtn()"
                    :class="{accept: disabled == true}"  
                    class="btn--unAcceptLight btn--big page__margin--small" 
                    type="submit" 
                    value="로그인"
                  >
                  <NuxtLink to="/join/home"  class="btn--big">
                    회원가입
                  </NuxtLink>
                </div>
              </fieldset>
            </form> 
          </div>
        </div>
      </div>
      <div
        @click = "closeBtn"
        class="modal__back"
      >
        배경
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loginModal',
  props: {
  },
  data: () => ({
        // 벨류
      nickname        : '',                // 닉네임
      email           : '',                // 이메일
      pass            : '',                // 비밀번호
      pwVerify        : '',                // 비밀번호 확인

      // 버튼
      nickClear       :false,              // 닉네임 지우기 버튼
      emailClear      :false,              // 이메일 지우기 버튼
      pwClear         :false,              // 비밀번호 지우기 버튼

      // 조건 검사
      disabled        :false,              // 폼 버튼 활성화
      sameNick        :true,               // 닉네임 중복 (임시 데이터)
      ableNick        :null,               // 닉네임 중복 검사
      ableEmail       :null,               // 이메일 입력 조건
      ablePw          :null,               // 비밀번호 입력 조건
      ablePwVerify    :null,               // 비밀번호 일치 검사

      // 이벤트
      emailActive     :false,              // 이메일 입력 감지        
      pwActive        :false,              // 비밀번호 입력 감지
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
      // 비밀번호 ============================================
      // 포커스 온
      passFocus(){
        // 형식에 안 맞을 경우 전부 리셋
        if(this.ablePw == false){
          this.pass    = '';
          this.ablePw  = null;
          this.pwClear = false;}
      },
      AblePass(){
        let pwVal       = this.pass;  // 벨류
        let returnPass  =             // 형식
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

        // 형식 안 맞을 경우 에러
        if(!returnPass.test(pwVal) && pwVal != '')
          this.ablePw = false
        // 형식 맞으면 통과
        else if(returnPass.test(pwVal))
          this.ablePw = true

        // 글자 입력시 x버튼 on, off
        if(this.pass != ''){
          //this.ablePw   = true;
          this.pwClear  = true;
          this.pwActive = true;}
        else{
          this.pwClear  = false;
          this.pwActive = false;}
      },
      // 버튼 ============================================
      // 이메일 리셋
      clearEmail(){
        this.email        = '';     // 벨류
        this.ableEmail    = null;   // 입력 조건
        this.emailClear   = false;  // 지우기 버튼
      },

      // 비밀번호 리셋
      clearPassword(){
        this.pass         = '';     // 비밀번호 벨류
        this.pwVerify     = '';     // 비밀번호 확인 벨류
        this.ablePw       = null    // 비밀번호 조건
        this.pwClear      = false;  // 비밀번호 지우기 버튼
        this.ablePwVerify = null;   // 비밀번호 일치 검사
      },

      // 비밀번호 시크릿
      secretToggle(){
        if(this.secret == true){
          this.secret = false;
          this.passwordType = 'password'
        }else{
          this.secret = true;
          this.passwordType = 'text'} 
      },
      // 폼 버튼 활성화
      ableBtn(){
        let Email = this.ableEmail == true;
        let Pw    = this.ablePw    == true;

        if(Email && Pw)
          this.disabled = true;
        else
          this.disabled = false;
      },
      // 폼 버튼 활성화 후 비밀번호 형식 조건 체크
      checkForm(){
        let vm = this
        if(vm.disabled == true){
          let pwVal      = vm.pass;  // 벨류
          let returnPass =           // 형식
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

          // 형식 안 맞을 경우 에러
          if(!returnPass.test(pwVal) && pwVal != '')
            {vm.ablePw = false}
        }
      }
    }
}
</script>

<style>

</style>