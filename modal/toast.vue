<template>
  <transition name="toastModal">
    <div class="toastModal page__shadow">
      <div class="toastModal__inner">
          <div class="toastModal__txt">
            {{msg}}
          </div>
          <div class="toastModal__btn">
            <button
            @click="agreeBtn" 
            type="button" 
            >
              실명인증
            </button>
            <span class="toastModal__btn--bar">바</span>
            <button
            @click="closeBtn" 
            type="button" 
            class=""
            >
              닫기
            </button>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'more',
  components:{
  },
  props: {
    moreTxt:Object
  },
  data: () => ({
    msg      :'회원님은 현재 1레벨입니다. 거래 및 내 지갑 활성화를 위해서는 실명인증(레벨 2)이 필요합니다.',
  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    },
    // 모달창 전문보기 동의 버튼
    agreeBtn(){
      this.$emit('agree')
    }
  }
}
</script>

<style>

</style>