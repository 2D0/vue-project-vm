<template>
  <div>
    <div class="pager">
      <div class="pager__btn">
        <button class="pager__arrow">
            첫 번째 페이지 버튼
          <span class="pager__doubleFirst">
            <i class="pager__doubleFirst--top pager__arrow--top"></i>
            <i class="pager__doubleFirst--bottom pager__arrow--bottom"></i>
          </span>
          <span class="pager__doubleLast">
            <i class="pager__doubleLast--top pager__arrow--top"></i>
            <i class="pager__doubleLast--bottom pager__arrow--bottom"></i>
          </span>
        </button>
        <button class="pager__arrow">
            이전 페이지 버튼
          <i class="pager__arrow--top"></i>
          <i class="pager__arrow--bottom"></i>
        </button>
      </div>
      <ul class="pager__num">
        <li 
          v-for="(item, idx) in pager"
          :key="idx"
          class="pager__btn pager__num--web">
          <NuxtLink to="/">{{idx + 1 }}</NuxtLink>
        </li>
      </ul>
      <ul class="pager__num pager__num--tablet">
        <li 
          v-for="(item, idx) in pager.slice(0, 5)"
          :key="idx"
          class="pager__btn">
          <NuxtLink to="/">{{idx + 1 }}</NuxtLink>
        </li>
      </ul>
      <ul class="pager__num pager__num--mobile">
        <li 
          v-for="(item, idx) in pager.slice(0, 3)"
          :key="idx"
          class="pager__btn">
          <NuxtLink to="/">{{idx + 1 }}</NuxtLink>
        </li>
      </ul>
      <div class="pager__btn">
        <button class="pager__arrow pager__arrow--right">
          다음페이지 버튼
          <i class="pager__arrow--top"></i>
          <i class="pager__arrow--bottom"></i>
        </button>
        <button class="pager__arrow pager__arrow--right">
          마지막 페이지 버튼
          <span class="pager__doubleFirst">
            <i class="pager__doubleFirst--top pager__arrow--top"></i>
            <i class="pager__doubleFirst--bottom pager__arrow--bottom"></i>
          </span>
          <span class="pager__doubleLast">
            <i class="pager__doubleLast--top pager__arrow--top"></i>
            <i class="pager__doubleLast--bottom pager__arrow--bottom"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pager',
  props:{
  },
  data: () => ({
    pager: [
      {num:''},{num:''},{num:''},{num:''},{num:''},{num:''},{num:''},{num:''},{num:''}
    ]
  }),
  methods: {
  }
}
</script>

<style>

</style>