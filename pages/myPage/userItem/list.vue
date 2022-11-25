<template>
  <div class="myNft page container__inner--max container__inner--padding">
    <div class="myPage__topProfile">
      <div class="myPage__profileImg">
        <div class="page__img">
          <img
          v-if="userImgUrl != ''"
          :src="userImgUrl" 
          :alt="userName">
          <img
          v-else-if="userImgUrl === '' || userImgUrl === null || userImgUrl === undefined"
          src="~assets/img/icons/ico-no-profile.svg" 
          :alt="프로필사진">
        </div>
      </div>
      <div class="myPage__nickname page__margin--small">{{userName}}</div>
    </div>
    <div class="page__search page__search--user">
      <div class="myPage__search page__search--inner">
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
    <div class="myPage__nftMenu">
      <div class="myPage__tabMenu tabMenu page__margin--mid">
        <ul class="myPage__tabMenu--tit tabMenu__tit user">
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
        <div class="myNft__tabMenu--bar tabMenu__bar">
          <div 
            id="tabActive" 
            class="myNft__tabMenu--active tabMenu__bar--active tabMenu__bar--active3"
            :style="`left:${33.333333 * id}%`"
          ></div>
        </div>
      </div><!-- myPage__tabMenu -->
      <div class="table itemTable">
        <div class="itemTable__inner">
          <div class="table__web">
            <table
              v-if="id == 0"
              class="myNft__tableLayout itemTable__layout table__layout"
            >
                <thead>
                  <th class="table__info--10"></th>
                  <th class="table__info--40">이름</th>
                  <th class="table__info--20">판매자</th>
                  <th class="table__info--10">에디션</th>
                  <th class="table__info--20">체결가</th>
                </thead>
                <tbody
                  :class="{blank: collection == 0}">
                  <tr
                    v-if="collection == 0">
                    <td>NFT 컬렉션이 없습니다.</td>
                  </tr>
                  <tr
                    v-for="item in collection"
                    :key="item.id"
                  >
                    <td class="table__info--10 itemTable__imgBox">
                      <div class="itemTable__img page__img">
                        <img :src="item.itemImgUrl" :alt="item.itemName">
                      </div>
                    </td>
                    <td class="table__info--40 page__split page__text--left page__table--inner">
                      <NuxtLink to="/marketPlace/detail">{{item.itemName}}</NuxtLink>
                    </td>
                    <td class="table__info--20 page__split">
                      <NuxtLink to="/myPage/userItem/home">{{item.userName}}</NuxtLink>
                    </td>
                    <td class="table__info--10 table__info--edition">{{item.edition}}st</td>
                    <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                  </tr>
                </tbody>
            </table>
            <table
              v-if="id == 1"
              class="myNft__tableLayout itemTable__layout table__layout"
            >
                <thead>
                  <th class="table__info--10"></th>
                  <th class="table__info--40">이름</th>
                  <th class="table__info--20">판매자</th>
                  <th class="table__info--10">에디션</th>
                  <th class="table__info--20">체결가</th>
                </thead>
                <tbody
                  :class="{blank: sale == 0}">
                  <tr
                    v-if="sale == 0">
                    <td>판매중인 NFT가 없습니다.</td>
                  </tr>
                  <tr
                    v-for="item in sale"
                    :key="item.id"
                  >
                    <td class="table__info--10 itemTable__imgBox">
                      <div class="itemTable__img page__img">
                        <img :src="item.itemImgUrl" :alt="item.itemName">
                      </div>
                    </td>
                    <td class="table__info--40 page__split page__text--left page__table--inner">
                      <NuxtLink to="/marketPlace/detail">{{item.itemName}}</NuxtLink>
                    </td>
                    <td class="table__info--20 page__split">
                      <NuxtLink to="/myPage/userItem/home">{{item.userName}}</NuxtLink>
                    </td>
                    <td class="table__info--10 table__info--edition">{{item.edition}}st</td>
                    <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                  </tr>
                </tbody>
            </table>
            <table
              v-if="id == 2"
              class="myNft__tableLayout itemTable__layout table__layout"
            >
                <thead>
                  <th class="table__info--10"></th>
                  <th class="table__info--40">이름</th>
                  <th class="table__info--20">판매자</th>
                  <th class="table__info--10">에디션</th>
                  <th class="table__info--20">체결가</th>
                </thead>
                <tbody
                  :class="{blank: like == 0}">
                  <tr
                    v-if="like == 0">
                    <td>좋아하는 NFT가 없습니다.</td>
                  </tr>
                  <tr
                    v-for="item in like"
                    :key="item.id"
                  >
                    <td class="table__info--10 itemTable__imgBox">
                      <div class="itemTable__img page__img">
                        <img :src="item.itemImgUrl" :alt="item.itemName">
                      </div>
                    </td>
                    <td class="table__info--40 page__split page__text--left page__table--inner">
                      <NuxtLink to="/marketPlace/detail">{{item.itemName}}</NuxtLink>
                    </td>
                    <td class="table__info--20 page__split">
                      <NuxtLink to="/myPage/userItem/home">{{item.userName}}</NuxtLink>
                    </td>
                    <td class="table__info--10 table__info--edition">{{item.edition}}st</td>
                    <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                  </tr>
                </tbody>
            </table>
          </div>
          <div class="table__mobile">
            <ul 
              v-if="id == 0"
              class="itemTable__toggle">
              <li
              v-if="collection == 0"
              class="table__blank"
              >
              <div>보유중인 NFT가 없습니다.</div>
              </li>
              <li
                v-for="(item, idx) in collection"
                :key="idx"
                class="itemTable__toggle--list"
              >
                <div 
                  @click="toggleBtn(idx)"
                  class="itemTable__toggle--tit">
                  <p class="itemTable__toggle--img itemTable__img page__img">
                    <img :src="item.itemImgUrl" :alt="item.itemName">
                  </p>
                  <p class="itemTable__toggle--name page__split">{{item.itemName}}</p>
                </div>
                <div
                  :class="{active: listId == idx}"
                  class="itemTable__toggle--info">
                  <NuxtLink to="/marketPlace/detail" class="itemTable__toggle--txt">
                    <dl>
                      <dt>판매자</dt>
                      <dd>{{item.userName}}</dd>
                    </dl>
                    <dl>
                      <dt>에디션</dt>
                      <dd>{{item.edition}}st</dd>
                    </dl>
                    <dl>
                      <dt>체결가</dt>
                      <dd>{{item.price}} <span>KRW</span></dd>
                    </dl>
                  </NuxtLink>
                </div>
              </li>
            </ul>
            <ul 
              v-if="id == 1"
              class="itemTable__toggle">
              <li
              v-if="sale == 0"
              class="table__blank"
              >
              <div>판매중인 NFT가 없습니다.</div>
              </li>
              <li
                v-for="(item, idx) in sale"
                :key="idx"
                class="itemTable__toggle--list"
              >
                <div 
                  @click="toggleBtn(idx)"
                  class="itemTable__toggle--tit">
                  <p class="itemTable__toggle--img itemTable__img page__img">
                    <img :src="item.itemImgUrl" :alt="item.itemName">
                  </p>
                  <p class="itemTable__toggle--name page__split">{{item.itemName}}</p>
                </div>
                <div
                  :class="{active: listId == idx}"
                  class="itemTable__toggle--info">
                  <NuxtLink to="/marketPlace/detail" class="itemTable__toggle--txt">
                    <dl>
                      <dt>판매자</dt>
                      <dd>{{item.userName}}</dd>
                    </dl>
                    <dl>
                      <dt>에디션</dt>
                      <dd>{{item.edition}}st</dd>
                    </dl>
                    <dl>
                      <dt>체결가</dt>
                      <dd>{{item.price}} <span>KRW</span></dd>
                    </dl>
                  </NuxtLink>
                </div>
              </li>
            </ul>
            <ul 
              v-if="id == 2"
              class="itemTable__toggle">
              <li
              v-if="like == 0"
              class="table__blank"
              >
              <div>좋아하는 NFT가 없습니다.</div>
              </li>
              <li
                v-for="(item, idx) in like"
                :key="idx"
                class="itemTable__toggle--list"
              >
                <div 
                  @click="toggleBtn(idx)"
                  class="itemTable__toggle--tit">
                  <p class="itemTable__toggle--img itemTable__img page__img">
                    <img :src="item.itemImgUrl" :alt="item.itemName">
                  </p>
                  <p class="itemTable__toggle--name page__split">{{item.itemName}}</p>
                </div>
                <div
                  :class="{active: listId == idx}"
                  class="itemTable__toggle--info">
                  <NuxtLink to="/marketPlace/detail" class="itemTable__toggle--txt">
                    <dl>
                      <dt>판매자</dt>
                      <dd>{{item.userName}}</dd>
                    </dl>
                    <dl>
                      <dt>에디션</dt>
                      <dd>{{item.edition}}st</dd>
                    </dl>
                    <dl>
                      <dt>체결가</dt>
                      <dd>{{item.price}} <span>KRW</span></dd>
                    </dl>
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div> 
      </div><!-- modalNftList__table -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userItemList',
    // layout: 'default',
    data: () => ({
      id        : 0,
      listId    : 0,
      userImgUrl:require('assets/./img/test/test-card1.png'), // 유저 이미지
      userName  :'우유좋아',                                 // 닉네임

      // 탭메뉴 이름
      tabMenu : [
        { 
          name  : 'Collection',
          icon  : require('assets/./img/icons/ico-nft-tab1.svg')
        },
        { 
          name  : 'Sale',
          icon  : require('assets/./img/icons/ico-nft-tab2.svg')
        },
        { 
          name  : 'Like',
          icon  : require('assets/./img/icons/ico-nft-tab3.svg')
        }
      ],

      // nft 리스트
      collection: [
        {
          itemName         :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',// 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card3.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',// 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card4.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card5.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',// 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card6.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',// 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card7.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',// 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card8.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print HAKAI.PT2_S Canvas Print',// 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card3.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card7.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card6.png'),   // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        
      ],
      sale      : [
        /* {
          itemName         :'222222',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        }, */
      ],
      like      : [
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card5.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card6.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card7.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card3.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card4.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card5.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card6.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card7.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card8.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card3.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card7.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card6.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
      ],
      see       : [
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card8.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card3.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card7.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card6.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card5.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card6.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
        {
          itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
          userName         :'GHARLIERA',                                 // 판매자 이름
          itemImgUrl       :require('assets/./img/test/test-card7.png'),           // 아이템 이미지
          edition          :'11',                                        // 에디션
          price            :'250,900',                                   // 금액
        },
      ],
    }),
    methods: {
      // 탭 클릭시 효과
      tab(idx){
        this.id     = idx // id 에 index 값으로 할당
        this.listId = null
      },
      // 아이템 정보 토글 버튼
      toggleBtn(idx){
        this.listId = idx;
      },
    }
  }
</script>
