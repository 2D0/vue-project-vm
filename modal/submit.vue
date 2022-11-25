<template>
  <transition name="submitModal">
    <div class="modal">
      <div class="modal__layout modalSubmit modal--mid">
        <div class="modalSubmit__inner modal__inner">
          <div class="page__margin--small">
            <h1 
              v-if="submitComplete == true"
              class="modalSubmit__tit"
            >
              제출완료
            </h1>
            <h1 
              v-if="submitComplete == false"
            class="modalSubmit__tit">제출실패</h1>
          </div><!-- modal__top -->
          <div class="modalSubmit__box">
            <div class="modalSubmit__cont">
              <div class="modalSubmit__cont--txt">
                <div 
                  v-if="submitComplete == true"
                  class="modalSubmit__cont--alert"
                >
                  정산 정보 제출이 정상적으로 완료되었습니다.
                </div>
                <div
                  v-if="submitComplete == false"
                  class="modalSubmit__cont--alert"
                >
                  정산 정보 제출이 실패하였습니다.
                </div>
                <div
                  v-if="submitComplete == false"
                  class="modalSubmit__cont--error page__color--error"
                >
                  사유 : 출금 금액 부족
                </div>
              </div>
            </div><!-- modalSubmit__cont -->
            <div class="modalSubmit__cont">
                <div class="modalSubmit__cont--reason page__margin--mid">
                  <h3>유의사항</h3>
                  <ul>
                    <li>1. 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내내용내용내용내용내용내용내용내용</li>
                    <li>2. 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내</li>
                    <li>3. 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내</li>
                  </ul>
                </div>
                <div class="modalSubmit__btn modalSubmit__inner btn">
                  <button
                  @click="completeBtn" 
                  type="button" 
                  class="modalSubmit__confirm btn--accept btn--big"
                  >
                    확인
                  </button>
                </div><!-- modalSubmit__bottom -->
            </div>
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
  name: 'submit',
  data: () => ({
    submitComplete : true,
  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('closeModal')
    },
    // 확인 버튼
    completeBtn(){
      this.$emit('complete')
    }
  }
}
</script>

<style>

</style>