<template>
  <div class="myPage__tabMenu tabMenu page__margin--mid">
    <ul class="myPage__tabMenu--tit tabMenu__tit">
      <li
        @click="tap1()"
      >
        <button type="button">NFT 컬렉션</button>
      </li>
      <li
        @click="tap2()"
      >
        <button type="button">판매중 NFT</button>
      </li>
      <li
        @click="tap3()"
      >
        <button type="button">좋아하는 NFT</button>
      </li>
      <li
        @click="tap4()"
      >
        <button type="button">최근 본 NFT</button>
      </li>
    </ul>
    <div class="myPage__tabMenu--bar tabMenu__bar">
      <div class="myPage__tabMenu--active tabMenu__bar--active tabMenu__bar--active4"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'samplePage',
    // layout: 'default',
    data: () => ({
      message: 'Hello World!',
    }),
  }
</script>
