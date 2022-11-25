<template>
  <transition name="submitModal">
    <div class="modal">
      <div class="modal__layout modalSubmit modal--mid">
        <div class="modalSubmit__inner modal__inner">
          <button
            v-if="topCloseBtn == true"
            @click="closeBtn" 
            type="button" 
            class="btn__close modal__close--form"
          >
            <span>닫기</span>
          </button>
          <img class="join__top--logo page__margin--small" src="~assets/img/logo/logo-round.svg" alt="민트오션">
          <div class="page__margin--small">
            <h1 class="modalSubmit__tit">
              이메일 인증
            </h1>
          </div><!-- modal__top -->
          <div class="modalSubmit__cont page__margin--midPlus">
            <div class="modalSubmit__cont--txt">
                {{emailTxt}}
            </div>
          </div>
          <div
            v-if="complete == true"
            class="join__mid">
            <form 
              @submit.prevent="checkForm"
              action=""
              method="post"
              class="join__writeBox formInfoLayout page__margin--mid">
              <fieldset>
              <div class="formInfoLayout__modal page__margin--small">
                <input type="hidden" name="xxxx" id="xxxx" value="xxxx" />
                <legend>이메일 인증</legend>
                <div class="formInfoLayout__input  page__margin--small">
                  <div class="formInfoLayout__modal--input">
                    <div class="formInfoLayout__write formInfoLayout__write--box">
                      <input 
                        :value="userEmail"
                        type="email"
                        name="email" 
                        class="formInfoLayout__write page__color--lightGray"
                        readonly>
                    </div>
                    <input 
                      type="button"
                      @click="reSendBtn()"
                      :disabled="SendBtn()"
                      class="btn--accept btn--modalConfirm"
                      :value="btnName" 
                    >
                  </div>
                </div>
                <div
                  v-if="sendEmail == true"
                  class="formInfoLayout__input">
                  <span class="formInfoLayout__input--tit">인증번호</span>
                  <div class="formInfoLayout__write formInfoLayout__write--box">
                    <input 
                      v-model="number"
                      type="text"
                      name="certificationNumber" 
                      maxlength="6"
                      class="formInfoLayout__write icon"
                      :disabled="AbleCertNum()">
                    <div class="formInfoLayout__write--inputBtn page__color--error">
                      {{timerCount}}
                    </div>
                  </div>
                  <span 
                    v-if="ableNum == false" 
                    class="page__color--error  formInfoLayout__input--error">
                    {{numTxt}}
                  </span>
                </div>
              </div>
              </fieldset>
              <fieldset>
                <legend>확인</legend>
                <div class="modalSubmit__btn modalSubmit__inner btn">
                  <input
                    @click="checkForm" 
                    :disabled="ableBtn()"
                    :class="{accept: disabled == true}" 
                    class="modalSubmit__confirm btn--unAcceptLight btn--big page__margin--small" 
                    type="submit" 
                    value="확인"
                    >
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
  name: 'email',
  props: {
    userEmail:String
  },
  data: () => ({
    emailTxt        :'회원가입을 위해서는 이메일 인증이 필요합니다.', // 메시지
    numTxt          :'인증번호 유효기간이 만료되었습니다. 인증번호를 재전송해 주세요.', // 인증번호 에러 메시지
    complete        :true,          // 입력창 노출 여부
    timerCount      : 30,           // 카운트다운
    number          : '',           // 인증번호
    certifNum       :true,          // 인증번호 (임시 데이터)
    numActive       :false,         // 인증번호 입력 감지
    ableNum         :true,          // 인증번호 입력 조건
    sendEmail       :false,         // 이메일 전송 감지
    emailClear      :false,         // 이메일 지우기 버튼
    write           :true,          // 인풋아이콘 on  
    isFocused       :false,         // 인풋 자동입력
    btnName         :'전송',         // 전송 버튼 이름
    activeSend      :false,         // 전송 버튼 활성화
    disabled        :null,          // 폼 버튼 활성화
    timerCount      :'15:00',       // 타이머 시간
    topCloseBtn     :true           // 상단 닫기 버튼 노출
  }),
  methods: {
    // 인증번호 ============================================
    AbleCertNum(){
      this.number = this.number.replace(/[^-0-9]/g,'');
    },
    // 버튼 ============================================
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    },
    // 전송 버튼
    SendBtn(){
      this.activeSend = true
    },
    // 전송 버튼 활성화
    reSendBtn(){
      if(this.activeSend == true){
        this.btnName    = '재전송';
        this.sendEmail  = true;

        // 디자인을 보기위한 임시 효과입니다.
        setTimeout(() => {
          this.timerCount = '00:00'
          this.ableNum    = false
          this.numTxt     = '인증번호 유효기간이 만료되었습니다. 재전송해 주세요.'
        },2500);
      }
      if(this.ableNum == false){
        this.ableNum    = true
        this.timerCount = '15:00'
        this.number = ''

        setTimeout(() => {
          this.timerCount = '00:00'
          this.ableNum    = false
        },2500);
      }
    },
    // 폼 버튼 활성화
    ableBtn(){
      // 글자 입력시 x버튼 on, off 
      if(this.number.length == 6 && this.ableNum == true){
        this.disabled = true;}
      else{
        this.disabled = null;}
    },
    // 확인 버튼
    checkForm(){
      if(this.disabled == true){
        if(this.certifNum == true){
          this.topCloseBtn = false
          this.emailTxt   = '인증이 완료되었습니다.'
          this.complete   = false
          this.$emit('emailClose')}
        else
          {this.ableNum    = true
          this.numTxt     = '인증번호가 틀렸습니다. 인증번호를 재전송해 주세요.'
        }
      }
    },
  }
}
</script>

<style>

</style>