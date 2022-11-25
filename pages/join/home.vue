<template>
  <div class="join page container__inner--mid container__inner--padding">
    <WarningModal
      v-if="warningModal == true"
      @close="closeModal">
    </WarningModal>
    <MoreModal
      v-if="moreModal == true"
      @close="closeModal"
      @agree1="checked1"
      @agree2="checked2"
      @agree3="checked3"
      @agree4="checked4"
      :moreTxt="modalInfo"
      :moreAgree="modalInfo.agree">
    </MoreModal>
    <ModalEmail
      v-if="emailModal == true"
      @emailClose="emailClose"
      @close="closeModal"
      :userEmail="email"
    >
    </ModalEmail>
    <div class="join__top">
      <img  class="join__top--logo" src="~assets/img/logo/logo-round.svg" alt="민트오션">
      <h1 class="page__margin--mid">회원가입</h1>
      <div class="join__top--noti page__margin--mid">
        <img src="~assets/img/icons/ico-hand.svg" alt="경고">
        <span>법인 및 12세 이하 회원님은 서비스 이용이 불가합니다.</span>
      </div>
    </div>
    <div class="join__mid">
      <form 
        @submit.prevent="checkForm"
        action=""
        method="post"
        class="join__writeBox formInfoLayout page__margin--mid">
        <fieldset>
          <input type="hidden" name="xxxx" id="xxxx" value="xxxx" />
          <legend>회원가입</legend>
          <div class="formInfoLayout__input  page__margin--small">
            <span
              v-if="nickActive == true" 
              class="formInfoLayout__input--tit">닉네임</span>
            <div 
              :class="{valid: ableNick == true, unValid: ableNick == false}"
              class="formInfoLayout__write formInfoLayout__write--box">
              <input 
                v-model="nickname"
                type="text"
                name="nickname" 
                placeholder="닉네임"
                maxlength="16"
                :class="{icon: write == true}"
                :disabled="AbleNick()"
                @blur="nickBlur()"
                class="formInfoLayout__write--noIcon">
              <div
                v-if="nickClear == true"
                @click="clearNick"
                class="formInfoLayout__write--inputBtn clear">
                <img src="~assets/img/icons/ico-input-clear.svg" alt="전체 지우기">
              </div>
            </div>
            <span 
              v-if="sameNick == false" 
              class="page__color--error formInfoLayout__input--error">
              중복된 닉네임입니다.
            </span>
            <span 
              v-if="ableNick == false" 
              class="page__color--error formInfoLayout__input--error">
              닉네임은 한글, 영어, 숫자, 띄어쓰기만 가능합니다.
            </span>
          </div>
          <div class="formInfoLayout__input  page__margin--small">
            <span
              v-if="emailActive == true" 
              class="formInfoLayout__input--tit">이메일</span>
            <div 
              :class="{valid: ableEmail == true, unValid: ableEmail == false}"
              class="formInfoLayout__write formInfoLayout__write--box">
              <input 
                v-model="email"
                type="email"
                name="email" 
                placeholder="이메일"
                maxlength="64"
                class="formInfoLayout__write formInfoLayout__write--noIcon"
                :class="{icon: write == true}"
                :disabled="AbleEmail()"
                @blur="emailBlur()">
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
              <input 
                v-model="pass"
                :type="passwordType" 
                name="password"
                placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8-16자)"
                maxlength="16"
                :class="{icon: write == true, secret: password == true}"
                class="formInfoLayout__write--inIcon formInfoLayout__write--noIcon"
                :disabled="AblePass()"
                @blur="passBlur()">
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
              비밀번호는 8-16자의 문자, 숫자, 기호로 입력해 주세요.
            </span>
          </div>
          <div class="formInfoLayout__input  page__margin--small">
            <div 
              :class="{valid: ablePwVerify == true, unValid: ablePwVerify == false}"
              class="formInfoLayout__write formInfoLayout__write--box">
              <input 
                v-model="pwVerify"
                type="password" 
                name="passConfirm"
                placeholder="비밀번호 확인"
                maxlength="16"
                :disabled="AblePassVer()"
                class="formInfoLayout__write--noIcon">
            </div>
            <span 
              v-if="ablePwVerify == false" 
              class="page__color--error formInfoLayout__input--error">
              비밀번호와 비밀번호 확인이 일치하지 않습니다.
            </span>
          </div>
        </fieldset>
        <fieldset class="join__agree agreeLayout page__margin--mid">
          <legend>서비스 정책</legend>
          <h3 class="page__margin--mid">서비스 정책</h3>
          <div class="join__agree--inner ">
            <div class="agreeLayout">
              <div class="agreeLayout__box">
                <div class="agreeLayout__checkLine">
                  <div class="agreeLayout__check">
                    <input 
                      id="agree1" 
                      type="checkbox"
                      v-model="agree1"
                      name="agree1">
                    <span 
                      v-if="error1 == true"
                      class="agreeLayout__essential page__essential">
                      *
                    </span>
                    <label for="agree1">
                      <span
                        :class="{error : error1 == true}"
                        class="agreeLayout__checkBox">
                        체크박스
                      </span>
                      <span>
                        <i class="agreeLayout__check--essen page__color--error">[필수]</i> 서비스 이용동의
                      </span>
                    </label>
                  </div>
                  <button
                    @click="useService"
                    class="agreeLayout__btn" 
                    type="button">
                    전문보기
                  </button>
                </div><!-- agreeLayout__checkLine -->
                <div class="agreeLayout__checkLine">
                  <div class="agreeLayout__check">
                    <input 
                      id="agree2" 
                      type="checkbox"
                      v-model="agree2"
                      name="agree2">
                    <span 
                      v-if="error2 == true"
                      class="agreeLayout__essential page__essential">
                      *
                    </span>
                    <label for="agree2">
                      <span
                        :class="{error : error2 == true}"
                        class="agreeLayout__checkBox">
                        체크박스
                      </span>
                      <span>
                        <i class="agreeLayout__check--essen page__color--error">[필수]</i> 서비스 이용약관 동의
                      </span>
                    </label>
                  </div>
                  <button
                    @click="service"
                    class="agreeLayout__btn" 
                    type="button">
                    전문보기
                  </button>
                </div><!-- agreeLayout__checkLine -->
                <div class="agreeLayout__checkLine">
                  <div class="agreeLayout__check">
                    <input 
                      id="agree3" 
                      type="checkbox"
                      v-model="agree3"
                      name="agree3">
                    <span 
                      v-if="error3 == true"
                      class="agreeLayout__essential page__essential">
                      *
                    </span>
                    <label for="agree3">
                      <span
                        :class="{error : error3 == true}"
                        class="agreeLayout__checkBox">
                        체크박스
                      </span>
                      <span>
                        <i class="agreeLayout__check--essen page__color--error">[필수]</i> 개인정보 처리방침 동의
                      </span>
                    </label>
                  </div>
                  <button
                    @click="privacy"
                    class="agreeLayout__btn" 
                    type="button">
                    전문보기
                  </button>
                </div><!-- agreeLayout__checkLine -->
                <div class="agreeLayout__checkLine">
                  <div class="agreeLayout__check">
                    <input 
                      id="agree4" 
                      type="checkbox"
                      v-model="agree4"
                      name="agree4">
                    <span 
                      v-if="error4 == true"
                      class="agreeLayout__essential page__essential">
                      *
                    </span>
                    <label for="agree4">
                      <span
                        :class="{error : error4 == true}"
                        class="agreeLayout__checkBox">
                        체크박스
                      </span>
                      <span>
                        <i class="agreeLayout__check--select">[선택]</i> 마케팅 정보이용 동의
                      </span>
                    </label>
                  </div>
                  <button
                    @click="marketing"
                    class="agreeLayout__btn" 
                    type="button">
                    전문보기
                  </button>
                </div><!-- agreeLayout__checkLine -->
                <div class="agreeLayout__checkLine">
                  <div class="agreeLayout__check">
                    <input 
                      id="checkAll" 
                      type="checkbox"
                      true-value="true"
                      false-value="false"
                      name="agreeAll">
                    <label 
                      for="checkAll" 
                      @click="allCheck()">
                      <span class="agreeLayout__checkBox">체크박스</span>
                      약관 전체 동의하기
                    </label>
                  </div>
                </div><!-- agreeLayout__checkLine -->
              </div><!-- agreeLayout__box -->
              <div
                v-if="needCheck == true"
                class="agreeLayout__error page__color--error">
                약관에 동의 해주세요!
              </div>
              <div class="agreeLayout__ex">
                개인 정보 제3자 제공 동의, 결제 대행 서비스 이용약관 등 모든 약관에 동의합니다.<br>
                주식회사 민트 오션은 통신판매중개사로서 거래 당사자가 아니며, 사용자가 등록한 상품정보 및 거래에 대한 어떠한 책임도 지지 않습니다.
              </div><!-- seeAgree -->
            </div><!-- agreeLayout -->
          </div><!-- agreeLayout -->
        </fieldset>
        <fieldset class="join__recapcha  page__margin--mid">
          <img src="~assets/img/test/test-reCapcha.svg" alt="구글 리캡차">
        </fieldset>
        <fieldset>
            <legend>회원가입</legend>
            <div class="agreeLayout__btns">
              <input
                @click="checkForm"
                :disabled="ableBtn()"
                :class="{accept: disabled == true}" 
                class="btn--unAcceptLight btn--big page__margin--small" 
                type="submit" 
                value="회원가입"
                >
              <button
                @click="warningModal = true"
                type="button"  
                class="btn--big">
                로그인
              </button>

              <!-- 다음 링크 이동용 임시 버튼 -->
              <NuxtLink to="complete" class="btn--big">다음 페이지(임시버튼)</NuxtLink>
          
            </div>
          </fieldset>
      </form> 
    </div>
    <div class="join__btm">

    </div>
  </div><!-- systemPage -->
</template>

<script>
  import WarningModal  from '@/modal/warning'
  import MoreModal     from '@/modal/more'
  import ModalEmail    from '@/modal/email'
  export default {
    name: 'join',
    // layout: 'default',
    components:{
      WarningModal,   // 회원가입 중단 경고
      MoreModal,      // 전문보기
      ModalEmail      // 이메일 인증
    },
    data: () => ({
      //모달
      modalInfo:{
        tit           :'',
        text          :'',
        btn           :'',
        agree         :'',
      },

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
      sameNick        :null,               // 닉네임 중복 (임시 데이터)
      ableNick        :null,               // 닉네임 중복 검사
      ableEmail       :null,               // 이메일 입력 조건
      ablePw          :null,               // 비밀번호 입력 조건
      ablePwVerify    :null,               // 비밀번호 일치 검사

      // 이벤트
      nickActive      :false,              // 닉네임 입력 감지        
      emailActive     :false,              // 이메일 입력 감지        
      pwActive        :false,              // 비밀번호 입력 감지    
      passwordType    :'password',         // 비밀번호 타입
      write           :true,               // 인풋아이콘 on
      password        :true,               // 비밀번호 아이콘 on
      passClear       :false,              // 비밀번호 아이콘 on
      secret          :false,              // 비밀번호 가리기 on off

      // 동의
      needCheck       :false,              // 필수 동의 체크 안 됐을 때
      error1          :false,              // 필수 동의 체크 안 됐을 때
      error2          :false,              // 필수 동의 체크 안 됐을 때    
      error3          :false,              // 필수 동의 체크 안 됐을 때    
      error4          :false,              // 필수 동의 체크 안 됐을 때    
      agree1          :false,              // 동의1
      agree2          :false,              // 동의2
      agree3          :false,              // 동의3
      agree4          :false,              // 동의4

      //모달
      warningModal    :false,              // 회원가입 취소 경고 모달
      moreModal       :false,              // 전문보기 모달
      emailModal      :false,              // 이메일 인증 모달
    }),
    methods: {
      // 닉네임 ============================================
      // 포커스 온
      nickFocus(){
        // 형식에 안 맞을 경우 전부 리셋
        if(this.ableNick == false){
          this.nickname   = '';
          this.ableNick   = null;
          this.nickClear  = false;}
      },
      // 포커스 아웃
      nickBlur(){
        // 아무 글도 없을 경우 리셋
        if(this.nickname == ''){
          this.ableNick  = null  
          this.nickClear = false}
      },
      AbleNick(){
        // 형식 안 맞을 경우 에러
        let nickVal      = this.nickname; // 벨류
        let returnNick   = /[~!@\#$%<>^&*)]/; // 형식
        
        if(returnNick.test(nickVal) && nickVal != ''){
          this.ableNick  = false }

        // 글자 입력시 x버튼 on, off 
        if(!returnNick.test(nickVal) && this.nickname != ''){
          this.ableNick  = true 
          this.nickClear = true}

        // 아무 글도 없을 경우 리셋
        if(this.nickname != ''){
          this.nickActive = true}
        else if(this.nickname == ''){
          this.ableNick  = null  
          this.nickClear = false
          this.nickActive = false;}
      },
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
        let returnEmail   =             // 이메일 데이터 일치하는지
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
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

      // 비밀번호 ============================================
      // 포커스 온
      passFocus(){
        // 형식에 안 맞을 경우 전부 리셋
        if(this.ablePw == false){
          this.pass    = '';
          this.ablePw  = null;
          this.pwClear = false;
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
        let length      = this.pass.length > 7;

        // 형식 맞으면 통과
        if(returnPass.test(pwVal))
          this.ablePw = true
        // 형식 안 맞을 경우 에러
        else if(!returnPass.test(pwVal) && pwVal != '')
          this.ablePw = false

        // 글자 입력시 x버튼 on, off
        if(pwVal != ''){
          this.pwActive = true;
          this.pwClear  = true
          this.pwActive = true}
        else{
          this.pwActive = false;
          this.pwClear  = false
          this.pwActive = false
          this.ablePw   = null}
      },
      
      // 비밀번호 확인 ============================================
      // 포커스 온
      pwVerFocus(){
        if(this.ablePwVerify == false){
          this.pwVerify     = '';
          this.ablePwVerify = null}
      },
      // 포커스 아웃
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
      // 닉네임 리셋
      clearNick(){
        this.nickname     = '';     // 벨류
        this.ableNick     = null;   // 입력 조건
        this.nickClear   = false;  // 지우기 버튼
      },

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

      // 모달 전문보기
      useService(){
        this.modalInfo.tit  = '서비스 이용동의'
        this.modalInfo.text = '회원가입 서비스 모달입니다.'
        this.modalInfo.btn  = '동의'
        this.modalInfo.agree= 'agree1';
        this.moreModal      = true;
      },
      service(){
        this.modalInfo.tit  = '서비스 이용약관 동의'
        this.modalInfo.text = '회원가입 서비스 이용약관 모달입니다.'
        this.modalInfo.btn  = '동의'
        this.modalInfo.agree= 'agree2';
        this.moreModal      = true;
      },
      privacy(){
        this.modalInfo.tit  = '개인정보 처리방침 동의'
        this.modalInfo.text = '회원가입 개인정보 처리방침 모달입니다.'
        this.modalInfo.btn  = '동의'
        this.modalInfo.agree= 'agree3';
        this.moreModal      = true;
      },
      marketing(){
        this.modalInfo.tit  = '마케팅 정보이용 동의'
        this.modalInfo.text = '회원가입 마케팅 정보이용 모달입니다.'
        this.modalInfo.btn  = '동의'
        this.modalInfo.agree= 'agree4';
        this.moreModal      = true;
      },
      
      // 동의 ============================================
      // 전체동의 체크
      allCheck(){
        this.checkAll = this.checkAll ? false : true;
        this.agree1   = this.checkAll;
        this.agree2   = this.checkAll;
        this.agree3   = this.checkAll;
        this.agree4   = this.checkAll;
      },
      // 모달 끄는 동시에 동의 체크
      checked1(){
        this.agree1     = true;
        this.moreModal  = false;
      },
      checked2(){
        this.agree2     = true;
        this.moreModal  = false;
      },
      checked3(){
        this.agree3     = true;
        this.moreModal  = false;
      },
      checked4(){
        this.agree4     = true;
        this.moreModal  = false;
      },
      // 모달창 끄기
      closeModal(){
        this.moreModal   = false;  // 전문보기 모달 닫기
        this.warningModal= false;  // 알림 모달 끄기
        this.emailModal  = false;
      },
      // 이메일 모달창 끄기
      emailClose(){
        setTimeout(() => {
          this.emailModal = false;
        }, 1200);
      },

      // 폼 버튼 활성화
      ableBtn(){
        let Nick     = this.ableNick     == true;
        let Email    = this.ableEmail    == true;
        let Pw       = this.ablePw       == true;
        let PwVerify = this.ablePwVerify == true;
        let Agree1   = this.agree1       == true;
        let Agree2   = this.agree2       == true;
        let Agree3   = this.agree3       == true;

        if(Nick && Email && Pw && PwVerify && Agree1 && Agree2 && Agree3)
          this.disabled = true;
        else
          this.disabled = false;
      },
      // 폼 버튼 활성화 될 경우 클릭 이벤트
      checkForm(){
        // 이메일 인증 모달 켜기
        if(this.disabled == true){
          this.emailModal = true
        }
      }
    }
  }
</script>
