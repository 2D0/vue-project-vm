<template>
  <div class="systemPage page container__inner--max container__inner--padding">
    <div class="systemPage__left">
      <div class="systemPage__img">
        <div class="page__img">
          <img src="~assets/img/picture/account-stop.svg" alt="고객센터">
        </div>
      </div>
    </div><!-- systemPage__left -->
    <div class="systemPage__right">
      <div class="systemPage__write">
        <h2 class="systemPage__write--tit">계정이 정지되었습니다.</h2>
        <div class="systemPage__write--txt">
          이 계정은 일시 정지되었습니다.<br>
          <NuxtLink to="/support/search/detail" class="page__color--error">관련 도움말</NuxtLink>을 참조하여 계정이 일시 정지되는 이유에 대해 알아보세요.
        </div>
      </div>
      <div class="systemPage__btn">
        <NuxtLink to="/support/search/home" class="btn--bigMiddle btn--accept">
          <img src="~assets/img/icons/ico-service.svg" alt="고객센터">
          고객센터 바로 가기
        </NuxtLink>
        <NuxtLink to="#" class="btn--bigMiddle btn--katalk">
          <img src="~assets/img/icons/ico-katalk-ch.svg" alt="플러스 친구">
          민트 오션 플러스 친구 바로 가기
        </NuxtLink>
      </div>
    </div><!-- systemPage__right -->
  </div><!-- systemPage -->
</template>

<script>
  export default {
    name: 'accountSuspension',
    // layout: 'default',
    data: () => ({
    }),
  }
</script>
