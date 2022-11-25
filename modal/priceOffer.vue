<template>
  <transition name="priceOffer">
    <div class="modal">
      <div class="priceOffer modal__layout modalSubmit modal--mid">
        <div class="modalSubmit__inner modal__inner">
          <!-- <button
            v-if="topCloseBtn == true"
            @click="closeBtn" 
            type="button" 
            class="btn__close modal__close--form"
          >
            <span>닫기</span>
          </button> -->
          <div class="page__margin--small">
            <h1 class="modalSubmit__tit">
              가격 제안
            </h1>
          </div><!-- modal__top -->
          <div 
            v-if="complete == true"
            class="modalSubmit__cont page__margin--midPlus">
            <div class="modalSubmit__cont--txt">
                {{price}}원 제안이 완료되었습니다.
            </div>
          </div>
          <div
            v-if="complete == false"
            class="join__mid">
            <form 
              @submit.prevent="checkForm"
              action=""
              method="post"
              class="join__writeBox formInfoLayout">
              <fieldset>
              <input type="hidden" name="xxxx" id="xxxx" value="xxxx" />
              <div class="formInfoLayout__modal page__margin--small">
                <legend>가격 제안</legend>
                <div class="priceOffer__modal formInfoLayout__input  page__margin--small">
                  <h2 class="priceOffer__modal--subTit">제안가 (KRW)</h2>
                  <span class="priceOffer__modal--subTxt">
                    <strong>5,000KRW</strong> 이상의 금액을 입력해 주세요.
                  </span>
                  <div class="priceOffer__input formBorderLayout__priceBox page__margin--mid">
                    <input 
                      v-model="price"
                      type="text" 
                      name="price"
                      placeholder="5,000원 이상 금액을 등록해주세요.">
                    <span class="formBorderLayout__priceBox--unit">KRW</span>
                  </div>
                  <div class="priceOffer__modal--guide page__margin--mid">
                    <h3>주의사항</h3>
                    <ul>
                      <li>1. 가격제안에 대한 주의사항들</li>
                      <li>2. 가격제안에 대한 주의사항들 가격제안에 대한 주의사항들</li>
                    </ul>
                  </div>
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
                    value="가격 제안 신청"
                    >
                </div>
                <button
                  @click="closeBtn"
                  type="button"
                  class="btn--big"
                >취소</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div
        @click="closeBtn"
        class="modal__back"
      >
        배경
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'priceOffer',
  props: {
    userEmail:String
  },
  data: () => ({
    price           :'',            // 가격 제안 금액
    complete        :false,          // 가격 입력창 노출 여부
    disabled        :null,          // 폼 버튼 활성화
    topCloseBtn     :true,          // 상단 닫기 버튼 노출
  }),
  methods: {
    // 버튼 ============================================
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    },
    // 폼 버튼 활성화
    ableBtn(){
      if(this.price >= 5000 && this.price != ''){
        this.disabled = true
      }else{
        this.disabled = null
      }
    },
    // 확인 버튼
    checkForm(){
      if(this.disabled == true){
        this.complete = true
        this.$emit('confirm')
      }
    },
  },
  watch: {
    price(val){
      const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
      if(rang.exec(val) !== null) this.price = val.replace(/[^0-9]/g,'');
      if(isNaN(parseFloat(val)))  this.price = '';
    }
  }
}
</script>

<style>

</style>