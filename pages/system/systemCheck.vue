<template>
  <div class="systemPage page container__inner--max container__inner--padding">
    <div class="systemPage__left">
      <div class="systemPage__img">
        <div class="page__img">
          <img src="~assets/img/picture/system-check.svg" alt="고객센터">
        </div>
      </div>
    </div><!-- systemPage__left -->
    <div class="systemPage__right">
      <div class="systemPage__write">
        <h2 class="systemPage__write--tit">현재 시스템 점검 중입니다.</h2>
        <div class="systemPage__write--txt">
          보다 안정적인 서비스를 제공해드리기 위해 시스템 점검을 진행 중입니다.<br>
          자세한 사항은 고객센터에서 확인해 주시기 바랍니다.
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
    name: 'systemCheck',
    // layout: 'default',
    data: () => ({
    }),
  }
</script>
