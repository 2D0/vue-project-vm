<template>
  <div class="supportSearch page">
    <div class="supportSearch__top">
      <div class="supportSearch__top--inner page__search container__inner--max">
        <div class="supportSearch__top--txt">
          알고 싶은 내용을 검색해주세요.
        </div>
        <div class="supportSearch__top--search page__search--inner page__search--inner">
          <input type="text" placeholder="검색어를 입력해주세요.">
          <NuxtLink to="result">
            <span class="page__img">
              <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="container__inner--max container__inner--padding">
      <h1 class="page__tit--big page__margin--big">자주하는 질문</h1>
      <ul class="supportSearch__cont">
        <li class="supportSearch__cont--menu">
          <NuxtLink to="menu" class="supportSearch__cont--tit">
            <div class="supportSearch__cont--img page__img">
              <p>
                <img src="~assets/img/icons/ico-support1.svg" alt="이용안내">
              </p>
            </div>
            <span>이용안내</span>
          </NuxtLink>
          <div class="supportSearch__cont--list">
            <ul>
              <li
                v-for="(item, idx) in info.slice(0, 4)"
                :key="idx">
                <NuxtLink to="detail" class="page__split">{{item.tit}}</NuxtLink>
              </li>
            </ul>
            <NuxtLink
              v-if="info.length >= 5"
              to="menu"
              class="supportSearch__cont--plus">
              <span class="page__plus">플러스</span>
              더보기
            </NuxtLink>
          </div>
        </li>
        <li class="supportSearch__cont--menu">
          <NuxtLink to="menu" class="supportSearch__cont--tit">
            <div class="supportSearch__cont--img page__img">
              <p>
                <img src="~assets/img/icons/ico-support2.svg" alt="출금">
              </p>
            </div>
            <span>출금</span>
          </NuxtLink>
          <div class="supportSearch__cont--list">
            <ul>
              <li
                v-for="(item, idx) in withdraw.slice(0, 4)"
                :key="idx">
                <NuxtLink to="detail" class="page__split">{{item.tit}}</NuxtLink>
              </li>
            </ul>
            <NuxtLink
              v-if="withdraw.length >= 5"
              to="menu"
              class="supportSearch__cont--plus">
              <span class="page__plus">플러스</span>
              더보기
            </NuxtLink>
          </div>
        </li>
        <li class="supportSearch__cont--menu">
          <NuxtLink to="menu" class="supportSearch__cont--tit">
            <div class="supportSearch__cont--img page__img">
              <p>
                <img src="~assets/img/icons/ico-support3.svg" alt="수수료 안내">
              </p>
            </div>
            <span>수수료 안내</span>
          </NuxtLink>
          <div class="supportSearch__cont--list">
            <ul>
              <li
                v-for="(item, idx) in incentive.slice(0, 4)"
                :key="idx">
                <NuxtLink to="detail" class="page__split">{{item.tit}}</NuxtLink>
              </li>
            </ul>
            <NuxtLink
              v-if="incentive.length >= 5"
              to="menu"
              class="supportSearch__cont--plus">
              <span class="page__plus">플러스</span>
              더보기
            </NuxtLink>
          </div>
        </li>
        <li class="supportSearch__cont--menu">
          <NuxtLink to="menu" class="supportSearch__cont--tit">
            <div class="supportSearch__cont--img page__img">
              <p>
                <img src="~assets/img/icons/ico-support4.svg" alt="NFT 구매">
              </p>
            </div>
            <span>NFT 구매</span>
          </NuxtLink>
          <div class="supportSearch__cont--list">
            <ul>
              <li
                v-for="(item, idx) in buy.slice(0, 4)"
                :key="idx">
                <NuxtLink to="detail" class="page__split">{{item.tit}}</NuxtLink>
              </li>
            </ul>
            <NuxtLink
              v-if="buy.length >= 5"
              to="menu"
              class="supportSearch__cont--plus">
              <span class="page__plus">플러스</span>
              더보기
            </NuxtLink>
          </div>
        </li>
        <li class="supportSearch__cont--menu">
          <NuxtLink to="menu" class="supportSearch__cont--tit">
            <div class="supportSearch__cont--img page__img">
              <p>
                <img src="~assets/img/icons/ico-support5.svg" alt="서비스 이용">
              </p>
            </div>
            <span>서비스 이용</span>
          </NuxtLink>
          <div class="supportSearch__cont--list">
            <ul>
              <li
                v-for="(item, idx) in service.slice(0, 4)"
                :key="idx">
                <NuxtLink to="detail" class="page__split">{{item.tit}}</NuxtLink>
              </li>
            </ul>
            <NuxtLink
              v-if="service.length >= 5"
              to="menu"
              class="supportSearch__cont--plus">
              <span class="page__plus">플러스</span>
              더보기
            </NuxtLink>
          </div>
        </li>
        <li class="supportSearch__cont--menu">
          <NuxtLink to="menu" class="supportSearch__cont--tit">
            <div class="supportSearch__cont--img page__img">
              <p>
                <img src="~assets/img/icons/ico-support6.svg" alt="가입 탈퇴">
              </p>
            </div>
            <span>가입 탈퇴</span>
          </NuxtLink>
          <div class="supportSearch__cont--list">
            <ul>
              <li
                v-for="(item, idx) in delMember.slice(0, 4)"
                :key="idx">
                <NuxtLink to="detail" class="page__split">{{item.tit}}</NuxtLink>
              </li>
            </ul>
            <NuxtLink
              v-if="delMember.length >= 5"
              to="menu"
              class="supportSearch__cont--plus">
              <span class="page__plus">플러스</span>
              더보기
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SideMenu from '../sideMenu'        // 고객센터 사이드 메뉴
  export default {
    name: 'supportQna',
    // layout: 'default',
    components: {
      SideMenu
    },
    data: () => ({
      info:[
        {tit:'계정을 어떻게 생성하나요?'},
        {tit:'비밀번호를 분실하였습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
        {tit:'결제를 어떻게 하나요?'},
        {tit:'결제를 어떻게 하나요?'},
        {tit:'결제를 어떻게 하나요?'},
        {tit:'결제를 어떻게 하나요?'}
      ],
      withdraw:[
        {tit:'계정을 어떻게 생성하나요?'},
        {tit:'비밀번호를 분실하였습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
        {tit:'결제를 어떻게 하나요?'}
      ],
      incentive:[
        {tit:'계정을 어떻게 생성하나요?'},
        {tit:'비밀번호를 분실하였습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
      ],
      buy:[
        {tit:'계정을 어떻게 생성하나요?'},
        {tit:'비밀번호를 분실하였습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
        {tit:'결제를 어떻게 하나요?'},
        {tit:'결제를 어떻게 하나요?'},
        {tit:'결제를 어떻게 하나요?'}
      ],
      service:[
        {tit:'계정을 어떻게 생성하나요?'},
      ],
      delMember:[
        {tit:'계정을 어떻게 생성하나요?'},
        {tit:'비밀번호를 분실하였습니다.'},
        {tit:'제 계정이 해킹을 당했습니다.'},
        {tit:'결제를 어떻게 하나요?'}
      ],
    }),
    methods:{
    }
  }
</script>
