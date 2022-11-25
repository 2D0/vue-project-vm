<template>
  <div class="usageHistory page container__inner--max container__inner--padding">
    <h1 class="page__tit--big tabMenu">이용내역</h1>
    <div class="usageHistory__nftMenu">
      <div class="usageHistory__tabMenu tabMenu page__margin--mid">
        <ul class="usageHistory__tabMenu--tit tabMenu__tit">
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
        <div class="usageHistory__tabMenu--bar tabMenu__bar">
          <div 
            class="usageHistory__tabMenu--active tabMenu__bar--active tabMenu__bar--active5"
            :style="`left:${20 * id}%`">
          </div>
        </div>
      </div><!-- myPage__tabMenu -->
      <div class="table itemTable">
        <div class="itemTable__inner">
          <table
            v-if="id == 0"
            class="usageHistory__tableLayout itemTable__layout table__layout"
          >
              <thead>
                <th class="table__info--20">발행일</th>
                <th class="table__info--30">작품명</th>
                <th class="table__info--20">창작자</th>
                <th class="table__info--30">TXID</th>
              </thead>
              <tbody
                :class="{blank: publication == 0}">
                <tr
                  v-if="publication == 0">
                  <td>NFT 컬렉션이 없습니다.</td>
                </tr>
                <tr
                  v-for="(item, idx) in publication"
                  :key="idx"
                >
                  <td class="table__info--20">{{item.date}}</td>
                  <td class="table__info--30 page__split page__text--left page__table--inner">{{item.itemName}}</td>
                  <td class="table__info--20">{{item.creator}}</td>
                  <td class="table__info--30 page__split">{{item.TXID}}</td>
                </tr>
              </tbody>
          </table>
          <table
            v-if="id == 1"
            class="usageHistory__tableLayout itemTable__layout table__layout"
          >
              <thead>
                <th class="table__info--20">거래일</th>
                <th class="table__info--30">작품명</th>
                <th class="table__info--10">판매자</th>
                <th class="table__info--10">구매자</th>
                <th class="table__info--20">TXID</th>
              </thead>
              <tbody
                :class="{blank: deal == 0}">
                <tr
                  v-if="deal == 0">
                  <td>판매중인 NFT가 없습니다.</td>
                </tr>
                <tr
                  v-for="(item, idx) in deal"
                  :key="idx"
                >
                  <td class="table__info--20">{{item.date}}</td>
                  <td class="table__info--30 page__split page__text--left page__table--inner">{{item.itemName}}</td>
                  <td class="table__info--10">{{item.creator}}</td>
                  <td class="table__info--10">{{item.buyer}}</td>
                  <td class="table__info--20 page__split">{{item.TXID}}</td>
                </tr>
              </tbody>
          </table>
          <table
            v-if="id == 2"
            class="usageHistory__tableLayout itemTable__layout table__layout"
          >
              <thead>
                <th class="table__info--20">거래일</th>
                <th class="table__info--30">작품명</th>
                <th class="table__info--10">판매자</th>
                <th class="table__info--10">구매자</th>
                <th class="table__info--20">발행 이벤트</th>
              </thead>
              <tbody
                :class="{blank: gift == 0}">
                <tr
                  v-if="gift == 0">
                  <td>좋아하는 NFT가 없습니다.</td>
                </tr>
                <tr
                  v-for="(item, idx) in gift"
                  :key="idx"
                >
                  <td class="table__info--20">{{item.date}}</td>
                  <td class="table__info--30 page__split page__text--left page__table--inner">{{item.itemName}}</td>
                  <td class="table__info--10">{{item.creator}}</td>
                  <td class="table__info--10">{{item.buyer}}</td>
                  <td class="table__info--20 page__split">{{item.event}}</td>
                </tr>
              </tbody>
          </table>
          <table
            v-if="id == 3"
            class="usageHistory__tableLayout itemTable__layout table__layout"
          >
              <thead>
                <th class="table__info--20">거래일</th>
                <th class="table__info--40">작품명</th>
                <th class="table__info--20">결제금액</th>
                <th class="table__info--10">결제방식</th>
                <th class="table__info--10">결제상태</th>
              </thead>
              <tbody
                :class="{blank: pay == 0}">
                <tr
                  v-if="pay == 0">
                  <td>최근 본 NFT가 없습니다.</td>
                </tr>
                <tr
                  v-for="(item, idx) in pay"
                  :key="idx"
                >
                  <td class="table__info--20">{{item.date}}</td>
                  <td class="table__info--40 page__split">{{item.itemName}}</td>
                  <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                  <td class="table__info--10">{{item.pay}}</td>
                  <td class="table__info--10">{{item.state}}</td>
                </tr>
              </tbody>
          </table>
          <table
            v-if="id == 4"
            class="usageHistory__tableLayout itemTable__layout table__layout"
          >
              <thead>
                <th class="table__info--15">날짜</th>
                <th class="table__info--40">작품명</th>
                <th class="table__info--20">구매 희망금액</th>
                <th class="table__info--5">에디션</th>
                <th class="table__info--20">구매희망유저</th>
                <th class="table__info--10">상태</th>
              </thead>
              <tbody
                :class="{blank: proposal == 0}">
                <tr
                  v-if="proposal == 0">
                  <td>최근 본 NFT가 없습니다.</td>
                </tr>
                <tr
                  v-for="(item, idx) in proposal"
                  :key="idx"
                >
                  <td class="table__info--15">{{item.date}}</td>
                  <td class="table__info--40 page__split page__text--left page__table--inner">{{item.itemName}}</td>
                  <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                  <td class="table__info--5 table__info--edition">{{item.edition}}st</td>
                  <td class="table__info--20">{{item.wishUser}}</td>
                  <td class="table__info--10">{{item.state}}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div><!-- modalNftList__table -->

      <div class="table__mobile">
        <div
            v-if="id == 0">
          <ul class="itemTable__toggleTop">
            <li class="itemTable__toggle--date">발행일</li>
            <li class="itemTable__toggle--itemName">작품명</li>
          </ul>
          <ul class="itemTable__toggle itemTable__toggle--cont">
            <li
              v-if="publication == 0"
              class="table__blank">
              <div>발행된 NFT가 없습니다.</div>
            </li>
            <li
              v-for="(item, idx) in publication"
              :key="idx"
              class="itemTable__toggle--list"
            >
              <div 
                @click="toggleBtn(idx)"
                class="itemTable__toggle--tit">
                <p class="itemTable__toggle--date">
                  {{item.date}}
                </p>
                <p class="itemTable__toggle--itemName page__split page__text--left page__table--inner">
                  {{item.itemName}}
                </p>
              </div>
              <div
                :class="{active: listId == idx}"
                class="itemTable__toggle--info use">
                <div class="itemTable__toggle--txt">
                  <dl>
                    <dt>창작자</dt>
                    <dd>{{item.creator}}</dd>
                  </dl>
                  <dl>
                    <dt>TXID</dt>
                    <dd class="page__split">{{item.TXID}}</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
            v-if="id == 1">
          <ul class="itemTable__toggleTop">
            <li class="itemTable__toggle--date">거래일</li>
            <li class="itemTable__toggle--itemName">작품명</li>
          </ul>
          <ul class="itemTable__toggle itemTable__toggle--cont">
            <li
              v-if="deal == 0"
              class="table__blank">
              <div>거래내역이 없습니다.</div>
            </li>
            <li
              v-for="(item, idx) in deal"
              :key="idx"
              class="itemTable__toggle--list"
            >
              <div 
                @click="toggleBtn(idx)"
                class="itemTable__toggle--tit">
                <p class="itemTable__toggle--date">
                  {{item.date}}
                </p>
                <p class="itemTable__toggle--itemName page__split page__text--left page__table--inner">
                  {{item.itemName}}
                </p>
              </div>
              <div
                :class="{active: listId == idx}"
                class="itemTable__toggle--info use">
                <div class="itemTable__toggle--txt">
                  <dl>
                    <dt>판매자</dt>
                    <dd>{{item.seller}}</dd>
                  </dl>
                  <dl>
                    <dt>구매자</dt>
                    <dd class="page__split">{{item.buyer}}</dd>
                  </dl>
                  <dl>
                    <dt>TXID</dt>
                    <dd class="page__split">{{item.TXID}}</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
            v-if="id == 2">
          <ul class="itemTable__toggleTop">
            <li class="itemTable__toggle--date">거래일</li>
            <li class="itemTable__toggle--itemName">작품명</li>
          </ul>
          <ul class="itemTable__toggle itemTable__toggle--cont">
            <li
              v-if="gift == 0"
              class="table__blank">
              <div>선물내역이 없습니다.</div>
            </li>
            <li
              v-for="(item, idx) in gift"
              :key="idx"
              class="itemTable__toggle--list"
            >
              <div 
                @click="toggleBtn(idx)"
                class="itemTable__toggle--tit">
                <p class="itemTable__toggle--date">
                  {{item.date}}
                </p>
                <p class="itemTable__toggle--itemName page__split page__text--left page__table--inner">
                  {{item.itemName}}
                </p>
              </div>
              <div
                :class="{active: listId == idx}"
                class="itemTable__toggle--info use">
                <div class="itemTable__toggle--txt">
                  <dl>
                    <dt>판매자</dt>
                    <dd>{{item.seller}}</dd>
                  </dl>
                  <dl>
                    <dt>구매자</dt>
                    <dd class="page__split">{{item.buyer}}</dd>
                  </dl>
                  <dl>
                    <dt>발생 이벤트</dt>
                    <dd class="page__split">{{item.event}}</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
            v-if="id == 3">
          <ul class="itemTable__toggleTop">
            <li class="itemTable__toggle--date">거래일</li>
            <li class="itemTable__toggle--itemName">서비스명</li>
          </ul>
          <ul class="itemTable__toggle itemTable__toggle--cont">
            <li
              v-if="pay == 0"
              class="table__blank">
              <div>결제내역이 없습니다.</div>
            </li>
            <li
              v-for="(item, idx) in pay"
              :key="idx"
              class="itemTable__toggle--list"
            >
              <div 
                @click="toggleBtn(idx)"
                class="itemTable__toggle--tit">
                <p class="itemTable__toggle--date">
                  {{item.date}}
                </p>
                <p class="itemTable__toggle--itemName page__split page__text--left page__table--inner">
                  {{item.itemName}}
                </p>
              </div>
              <div
                :class="{active: listId == idx}"
                class="itemTable__toggle--info use">
                <div class="itemTable__toggle--txt">
                  <dl>
                    <dt>결제금액</dt>
                    <dd>{{item.price}} <span>KRW</span></dd>
                  </dl>
                  <dl>
                    <dt>결제방식</dt>
                    <dd class="page__split">{{item.pay}}</dd>
                  </dl>
                  <dl>
                    <dt>결제상태</dt>
                    <dd class="page__split">{{item.state}}</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
            v-if="id == 4">
          <ul class="itemTable__toggleTop">
            <li class="itemTable__toggle--date">거래일</li>
            <li class="itemTable__toggle--itemName">작품명</li>
          </ul>
          <ul class="itemTable__toggle itemTable__toggle--cont">
            <li
              v-if="proposal == 0"
              class="table__blank">
              <div>제안내역이 없습니다.</div>
            </li>
            <li
              v-for="(item, idx) in proposal"
              :key="idx"
              class="itemTable__toggle--list"
            >
              <div 
                @click="toggleBtn(idx)"
                class="itemTable__toggle--tit">
                <p class="itemTable__toggle--date">
                  {{item.date}}
                </p>
                <p class="itemTable__toggle--itemName page__split page__text--left page__table--inner">
                  {{item.itemName}}
                </p>
              </div>
              <div
                :class="{active: listId == idx}"
                class="itemTable__toggle--info use">
                <div class="itemTable__toggle--txt">
                  <dl>
                    <dt>구매 희망금액</dt>
                    <dd>{{item.price}} <span>KRW</span></dd>
                  </dl>
                  <dl>
                    <dt>에디션</dt>
                    <dd class="page__split">{{item.edition}}st</dd>
                  </dl>
                  <dl>
                    <dt>구매희망 유저</dt>
                    <dd class="page__split">{{item.wishUser}}</dd>
                  </dl>
                  <dl>
                    <dt>결제상태</dt>
                    <dd class="page__split">{{item.state}}</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'usageHistory',
    // layout: 'default',
    data: () => ({
      id              : 0,     // 초기 아이디 값
      listId          : 0,     // 테이블 리스트 아이디 값

      // 탭메뉴 이름
      tabMenu : [
        { 
          name        : '발행',
          icon        : require('assets/./img/icons/ico-use1.svg')
        },
        { name        : '거래',
          icon        : require('assets/./img/icons/ico-use2.svg')
        },
        { name        : '선물',
          icon        : require('assets/./img/icons/ico-use3.svg')
        },
        { name        : '결제',
          icon        : require('assets/./img/icons/ico-use4.svg')
        },
        { name        : '제안',
          icon        : require('assets/./img/icons/ico-use5.svg')
        }
      ],

      // 발행내역 리스트
      publication: [ 
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas Print',                               // 아이템 이름
          creator     :'Canvas',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자',                               // 아이템 이름
          creator     :'무야호 할아버지 귀여워',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas Print',                               // 아이템 이름
          creator     :'Canvas',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자',                               // 아이템 이름
          creator     :'무야호 할아버지 귀여워',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas Print',                               // 아이템 이름
          creator     :'Canvas',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자',                               // 아이템 이름
          creator     :'무야호 할아버지 귀여워',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas Print',                               // 아이템 이름
          creator     :'Canvas',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자',                               // 아이템 이름
          creator     :'무야호 할아버지 귀여워',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas Print',                               // 아이템 이름
          creator     :'Canvas',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자',                               // 아이템 이름
          creator     :'무야호 할아버지 귀여워',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas PrintHAKAI.PT2_S Canvas Print',                               // 아이템 이름
          creator     :'Canvas',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2021.08.15 14:38',                           // 발행일
          itemName    :'알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자',                               // 아이템 이름
          creator     :'무야호 할아버지 귀여워',                                     // 창작자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
      ],

      // 거래내역 리스트
      deal: [
        {
          date        :'2022.01.17 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas Print',                   // 아이템 이름
          creator     :'만세',                                       // 창작자
          buyer       :'하모니카',                                   // 구매자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2022.01.17 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas Print',                   // 아이템 이름
          creator     :'만세',                                       // 창작자
          buyer       :'하모니카',                                   // 구매자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2022.01.17 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas Print',                   // 아이템 이름
          creator     :'만세',                                       // 창작자
          buyer       :'하모니카',                                   // 구매자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2022.01.17 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas Print',                   // 아이템 이름
          creator     :'만세',                                       // 창작자
          buyer       :'하모니카',                                   // 구매자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2022.01.17 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas Print',                   // 아이템 이름
          creator     :'만세',                                       // 창작자
          buyer       :'하모니카',                                   // 구매자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
        {
          date        :'2022.01.17 14:38',                           // 발행일
          itemName    :'HAKAI.PT2_S Canvas Print',                   // 아이템 이름
          creator     :'만세',                                       // 창작자
          buyer       :'하모니카',                                   // 구매자
          TXID        :'agdkajgdajgl151353gadskdja1142351glkdjslkg', // TXID
        },
      ],

      // 선물내역 리스트
      gift: [
        {
          date         :'2022.03.17 14:38',                          // 발행일
          itemName     :'깨끗하고 맑은 하늘',                         // 아이템 이름
          creator      :'니모',                                      // 창작자
          buyer        :'샘물',                                      // 구매자
          event        :'첫구매 이벤트',                              // 발생 이벤트
        },
        {
          date         :'2022.03.17 14:38',                          // 발행일
          itemName     :'깨끗하고 맑은 하늘',                         // 아이템 이름
          creator      :'니모',                                      // 창작자
          buyer        :'샘물',                                      // 구매자
          event        :'첫구매 이벤트',                              // 발생 이벤트
        },
        ],

      // 결제내역 리스트
      pay : [
        /* {
          date         :'2022.03.15 14:38',                          // 발행일
          itemName     :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          price        :'112,110',                                   // 결제금액
          pay          :'카드결제',                                   // 결제방식
          state        :'결제완료',                                   // 결제상태
        } */
        ],

      // 제안내역 리스트
      proposal : [
        {
          date         :'2022.01.29 14:38',                           // 발행일
          itemName     :'알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자 알콜 소독 신나신나 깨끗하게 닦자닦자',                                 // 아이템 이름
          price        :'50,110',                                     // 희망금액
          edition      :'11',                                         // 에디션
          wishUser     :'짱구는 못말려',                               // 구매희먕 유저
          state        :'결제완료',                                    // 결제상태
        },
        {
          date         :'2022.01.29 14:38',                           // 발행일
          itemName     :'새하얀 이불',                                 // 아이템 이름
          price        :'50,110',                                     // 희망금액
          edition      :'11',                                         // 에디션
          wishUser     :'짱구는 못말려',                               // 구매희먕 유저
          state        :'결제완료',                                    // 결제상태
        }
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
