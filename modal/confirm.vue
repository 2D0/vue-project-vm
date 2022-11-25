<template>
  <transition name="basic">
    <div class="modal modalBasic">
      <div class="modalBasic__inner modal__layout modal--small modal--auto">
        <div class="modalSubmit__inner">
          <div class="modal__inner page__margin--mid">
            <h1 class="modalSubmit__tit">알림</h1>
          </div><!-- modal__top -->
            <div class="modalSubmit__cont--imgTxt modal__inner">
                {{modalTxt}}
            </div>
          </div>
      </div>
      <div>
        
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
  name: 'confirm',
  props:{
    modalTxt: String
  },
  data: () => ({
  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>