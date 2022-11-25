<template>
  <div class="support page container__inner--max container__inner--padding">
    <div class="support__box">
      <div class="support__sideMenu">
        <h1 class="page__tit--big">
          <!-- <span class="web">고객센터</span> -->
          <span class="mobile">공지사항</span>
        </h1>
        <SideMenu></SideMenu>
      </div>
      <div class="support__cont">
        <div class="support__top">
          <div class="page__search">
            <div class="page__search--inner page__search--inner">
              <input type="text" placeholder="검색어를 입력해주세요.">
              <button
                type="button"
              >
              <span class="page__img">
                <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
              </span>
              </button>
            </div>
          </div>
        </div>
        <div class="table itemTable page__margin--mid">
          <div class="itemTable__inner">
            <table
              v-if="id == 0"
              class="support__web page__tableLayout itemTable__layout table__layout"
            >
                <thead>
                  <th class="table__info--70 page__table--inner">제목</th>
                  <th class="table__info--20">게시일</th>
                  <th class="table__info--10">조회수</th>
                </thead>
                <tbody class="table__layout--scrollNone">
                  <tr
                    v-for="item in noticeList.slice(0, 10)"
                    :key="item.id"
                    class="page__tableLayout--list small"
                    :class="{active: item.notice == true}"
                  >
                    <td class="table__info--70 page__table--inner page__split">
                      <NuxtLink to="detail" class="table__layout--name">
                        <img
                        v-if="item.notice == true"
                        src="~assets/img/icons/ico-notice.svg" alt="공지"
                        class="table__notice--icon">
                        {{item.title}}
                      </NuxtLink>
                    </td>
                    <td class="table__info--20">
                      <NuxtLink to="detail">{{item.date}}</NuxtLink>
                    </td>
                    <td class="table__info--10">
                      <NuxtLink to="detail">{{item.count}}</NuxtLink>
                    </td>
                  </tr>
                </tbody>
            </table>
            <ul class="support__mobile">
              <li 
                v-for="item in noticeList.slice(0, 10)"
                :key="item.id"
                class="support__mobile--list">
                <NuxtLink to="detail" class="support__mobile--box">
                  <span class="support__mobile--right">
                    <i class="support__mobile--tit  page__split">{{item.title}}</i>
                    <i class="support__mobile--date">{{item.date}}</i>
                  </span>
                  <span class="support__mobile--left">{{item.count}}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <Pager></Pager>
      </div>
    </div>
  </div>
</template>

<script>
  import SideMenu from '../sideMenu'            // 고객센터 사이드 메뉴
  import Pager    from '@/blockComponents/pager'// 페이저
  export default {
    name: 'supportNotice',
    // layout: 'default',
    components: {
      SideMenu, // 고객센터 사이드 메뉴
      Pager     // 페이저
    },
    data: () => ({
      id      : 0,

      // nft 리스트
      noticeList: [
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
          notice:true,
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
          notice:true,
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
          notice:true,
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
        {
          title :'안녕하세요 민트오셥입니다. 감사합니다. 떙큐',
          date  :'2022.03.01',
          count :'3330',
        },
      ]
    }),
    methods: {
    }
  }
</script>
