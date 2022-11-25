<template>
  <transition name="moreModal">
    <div class="modal">
      <div class="modal__layout modalMore modal--mid">
        <div class="modalMore__inner">
          <div class="modal__top modal__inner">
            <h1 class="modalMore__tit">{{moreTxt.tit}}</h1>
            <button
              @click="closeBtn" 
              type="button" 
              class="btn__close modal__close"
            >
              <span>닫기</span>
            </button>
          </div>
          <div class="modalMore__cont">
            <div class="modal__inner">
              {{moreTxt.text}}
            </div>
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
            @click="agreeBtn" 
            type="button" 
            class="modalMore__confirm btn--accept btn--modalMini"
            >
              {{moreTxt.btn}}
            </button>
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
  name: 'more',
  props: {
    moreTxt:Object,
  },
  data: () => ({
      stopBtn  : false,   // 오늘하루 보지 않기 버튼
      stopCheck: [],      // 버튼 체크
    }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    },
    // 모달 끄는 동시에 동의 체크
    agreeBtn(){
      
      switch (this.moreTxt.agree) {
        case 'agree1':
          this.$emit('agree1')
          break;

        case 'agree2':
          this.$emit('agree2')
          break;

        case 'agree3':
          this.$emit('agree3')
          break;

        case 'agree4':
          this.$emit('agree4')
          break;

        default:
          console('값 없음')
          break;
      }
    }
  }
}
</script>

<style>

</style>