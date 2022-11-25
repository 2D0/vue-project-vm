<template>
  <transition name="stopJoin">
    <div class="modal">
      <div class="modal__layout modal--mid modal--auto modalSubmit">
        <div class="modalSubmit__inner">
          <div class="modal__top modal__inner page__margin--big">
            <h1 class="modalSubmit__tit">알림</h1>
            <button
              @click="closeBtn" 
              type="button" 
              class="btn__close modal__close"
            >
              <span>닫기</span>
            </button>
          </div><!-- modal__top -->
            <div class="modalSubmit__cont--txt modal__inner page__margin--big">
                회원가입을 완료하지 않았습니다.<br>
                회원가입을 중단하시겠습니까?
            </div>
            <div class="modalMore__bottom--half modal__inner modalMore__inner btn">
              <NuxtLink
                to="/login/home"
                class="btn--error btn--half lineHeight"
              >
                예, 중단합니다.
              </NuxtLink>
              <button
                @click="closeBtn" 
                type="button" 
                class="btn--accept btn--half"
              >
                돌아가기
              </button>
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
  name: 'stopJoin',
  data: () => ({
    submitComplete : true,
  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    },
  }
}
</script>

<style>

</style>