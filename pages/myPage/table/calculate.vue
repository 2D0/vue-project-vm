<template>
  <div class="calcPage page container__inner--max container__inner--padding">
    <h1 class="page__tit--big tabMenu">정산관리</h1>
    <div class="calcPage__nftMenu">
      <div class="calcPage__tabMenu tabMenu">
        <ul class="calcPage__tabMenu--tit tabMenu__tit">
          <li
            v-for="(item, idx) in tabMenu"
            :key="idx"
            @click="tab(idx)"
          >
            <button type="button" class="imgBtn">
              <img :src="item.icon" :alt="item.name">
              {{item.name}}
            </button>
          </li>
        </ul>
        <div class="calcPage__tabMenu--bar tabMenu__bar">
          <div 
            class="calcPage__tabMenu--active tabMenu__bar--active tabMenu__bar--active2"
            :style="`left:${50 * id}%`">
          </div>
        </div>
      </div><!-- calcPage__tabMenu -->
      <div class="calcPage__info">
        <div class="calcPage__info--inner">
          <div class="calcPage__infoLeft">
            <div class="calcPage__price">
              <p class="calcPage__price--tit calcPage__price--margin">보유금액 : </p>
              <p class="calcPage__price--num">{{totalPrice}} <span>KRW</span></p>
            </div>
            <div class="calcPage__price">
              <p class="calcPage__price--tit">총 정산된 금액 : </p>
              <p class="calcPage__price--num">{{totalCalcPrice}} <span>KRW</span></p>
            </div>
          </div>
          <div class="calcPage__infoRight">
            <NuxtLink to="withdrawal" class="calcPage__btn btn--goMini btn--sub">출금신청</NuxtLink>
          </div>
        </div>
        <div class="calcPage__noti page__color--error">
          주의사항 : 출금은 영업일 기준 2일이 소요되며 출금 수수료가 1,000원 발생합니다.<br>
          (예 : 금요일 출금 신청시 화요일 18시 출금완료)
        </div>
      </div>
      <ul class="table itemTable">
        <li class="itemTable__inner">
          <table
              v-if="id == 0"
              class="usageHistory__tableLayout itemTable__layout table__layout"
          >
            <thead>
              <th class="table__info--15">요청시간</th>
              <th class="table__info--25">요청계좌</th>
              <th class="table__info--20">거래금액</th>
              <th class="table__info--10">수수료</th>
              <th class="table__info--20">정산금액</th>
              <th class="table__info--10">처리결과</th>
            </thead>
            <tbody
                :class="{blank: calc == 0}">
              <tr
                v-if="calc == 0">
                <td>정산된 NFT가 없습니다.</td>
              </tr>
              <tr
                v-for="item in calc"
                :key="item.id"
              >
                <td class="table__info--15">{{item.time}}</td>
                <td class="table__info--25">{{item.accountTit}} {{item.accountNum}}</td>
                <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                <td class="table__info--10">{{item.incentive}} <span>KRW</span></td>
                <td class="table__info--20">{{item.calcPrice}} <span>KRW</span></td>
                <td class="table__info--10">{{item.state}}</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li class="itemTable__inner">
          <table
              v-if="id == 1"
              class="usageHistory__tableLayout itemTable__layout table__layout"
          >
            <thead>
              <th class="table__info--15">요청시간</th>
              <th class="table__info--25">요청계좌</th>
              <th class="table__info--20">거래금액</th>
              <th class="table__info--10">수수료</th>
              <th class="table__info--20">정산금액</th>
              <th class="table__info--10">처리결과</th>
            </thead>
            <tbody
                :class="{blank: info == 0}">
              <tr
                v-if="info == 0">
                <td>정산된 NFT가 없습니다.</td>
              </tr>
              <tr
                v-for="item in info"
                :key="item.id"
              >
                <td class="table__info--15">{{item.time}}</td>
                <td class="table__info--25">{{item.accountTit}} {{item.accountNum}}</td>
                <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                <td class="table__info--10">{{item.incentive}} <span>KRW</span></td>
                <td class="table__info--20">{{item.calcPrice}} <span>KRW</span></td>
                <td class="table__info--10">{{item.state}}</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul><!-- calcPage__cont -->
      <div class="table__mobile">
        <ul class="itemTable__toggleTop">
          <li class="itemTable__toggle--half">요청시간</li>
          <li class="itemTable__toggle--half">결제금액</li>
        </ul>
        <ul 
          v-if="id == 0"
          class="itemTable__toggle itemTable__toggle--cont">
          <li
            v-if="calc == 0"
            class="table__blank">
            <div>정산된 NFT가 없습니다.</div>
          </li>
          <li
            v-for="(item, idx) in calc"
            :key="idx"
            class="itemTable__toggle--list"
          >
            <div 
              @click="toggleBtn(idx)"
              class="itemTable__toggle--tit">
              <p class="itemTable__toggle--half">
                {{item.time}}
              </p>
              <p class="itemTable__toggle--half">
                {{item.price}} <span>KRW</span>
              </p>
            </div>
            <div
              :class="{active: listId == idx}"
              class="itemTable__toggle--info calc">
              <div class="itemTable__toggle--txt">
                <dl>
                  <dt>요청계좌</dt>
                  <dd>{{item.accountTit}} : {{item.accountNum}}</dd>
                </dl>
                <dl>
                  <dt>수수료</dt>
                  <dd>{{item.incentive}} <span>KRW</span></dd>
                </dl>
                <dl>
                  <dt>정산금액</dt>
                  <dd>{{item.price}} <span>KRW</span></dd>
                </dl>
                <dl>
                  <dt>처리결과</dt>
                  <dd>{{item.state}}</dd>
                </dl>
              </div>
            </div>
          </li>
        </ul>
        <ul 
          v-if="id == 1"
          class="itemTable__toggle itemTable__toggle--cont">
          <li
            v-if="info == 0"
            class="table__blank">
            <div>정산된 NFT가 없습니다.</div>
          </li>
          <li
            v-for="(item, idx) in info"
            :key="idx"
            class="itemTable__toggle--list"
          >
            <div 
              @click="toggleBtn(idx)"
              class="itemTable__toggle--tit">
              <p class="itemTable__toggle--half">
                {{item.time}}
              </p>
              <p class="itemTable__toggle--half">
                {{item.price}} <span>KRW</span>
              </p>
            </div>
            <div
              :class="{active: listId == idx}"
              class="itemTable__toggle--info calc">
              <div class="itemTable__toggle--txt">
                <dl>
                  <dt>요청계좌</dt>
                  <dd>{{item.accountTit}} : {{item.accountNum}}</dd>
                </dl>
                <dl>
                  <dt>수수료</dt>
                  <dd>{{item.incentive}} <span>KRW</span></dd>
                </dl>
                <dl>
                  <dt>정산금액</dt>
                  <dd>{{item.price}} <span>KRW</span></dd>
                </dl>
                <dl>
                  <dt>처리결과</dt>
                  <dd>{{item.state}}</dd>
                </dl>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'calculate',
    // layout: 'default',
    data: () => ({
      id               :0,                   // 초기 아이디 값
      listId           :0,                   // 테이블 리스트 아이디 값
      totalPrice       :'1,250,000',         // 보유 금액
      totalCalcPrice   :'2,900',             // 총 정산 된 금액
      toggleOn         : false,   // 토글 on off

      // 탭메뉴 이름
      tabMenu : [
        { 
          name         : '정산관리',
          icon  : require('assets/./img/icons/ico-calc.svg')
        },
        { 
          name         : '개인정산정보',
          icon  : require('assets/./img/icons/ico-calcInfo.svg')
        }
      ],
      // 정산관리 리스트
      calc : [ 
        {
          time         :'2021.01.19 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2022.02.25 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.03.26 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.08.19 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.01.19 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2022.02.25 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.03.26 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.08.19 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.01.19 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2022.02.25 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.03.26 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.08.19 14:38',   // 요청시간
          accountTit   :'하나은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'112,250,000',        // 결제금액
          incentive    :'1,000',              // 수수료
          calcPrice    :'112,251,000',        // 정산금액
          state        :'결제완료',             // 처리결과
        },
      ],
      // 개인정산정보 리스트
      info : [ 
        /* {
          time         :'2022.01.14 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.06.14 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2022.03.25 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.04.02 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2022.01.14 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.06.14 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2022.03.25 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        },
        {
          time         :'2021.04.02 18:38',   // 요청시간
          accountTit   :'기업은행',             // 요청계좌 은행
          accountNum   :'12345678945612',     // 요청계좌 번호
          price        :'2,250,000',          // 결제금액
          incentive    :'3,000',              // 수수료
          calcPrice    :'2,253,000',          // 정산금액
          state        :'결제완료',             // 처리결과
        }, */
      ]
      }),
      methods: {
        // 탭 클릭시 효과
        tab(idx){
          this.id     = idx          // id 에 index 값으로 할당
          this.listId = null         // 다른 탭 누를시 리스트 index 초기화
        },
        // 아이템 정보 토글 버튼
        toggleBtn(idx){
          this.listId = idx;
        },
      }
  }
</script>
