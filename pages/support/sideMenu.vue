<template>
  <div class="sideMenu">
    <h2 class="sideMenu__top">고객센터</h2>
    <ul class="sideMenu__inner">
      <li
        v-for="(menu, idx) in menuNames"
        :key="idx"
        class="sideMenu__tit">
        <NuxtLink :to="menu.url">
          <span 
            v-if="menu.new == true"
            class="sideMenu__tit--icon page__icon--new">N</span>
          <span class="sideMenu__tit--inner">
            {{menu.name}}
            <!-- <i class="sideMenu__tit--active active">선택</i> -->
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sideMenu',
    // layout: 'default',
    data: () => ({
      menuNames:[
        {
          name   :'공지사항',
          url    :'/support/board/notice',
          new    :true,
        },
        {
          name   :'민트오션 소식',
          url    :'/support/board/news',
          new    :true,
        },
        {
          name   :'수수료 안내',
          url    :'/support/search/detail',
          new    :false,
        },
        {
          name   :'자주하는 질문',
          url    :'/support/search/home',
          new    :false,
        },
        {
          name   :'1:1문의',
          url    :'/support/board/qna',
          new    :false,
        },
      ]
    }),
    methods: {
    }
  }
</script>
