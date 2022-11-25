<template>
  <transition name="nftList">
    <div class="modalNftList modal">
      <div class="modal__layout modalNftList__inner container__inner--max page">
          <div class="modal__top modal__inner page__margin--small">
            <h1 class="modalMore__tit">소유중인 NFT</h1>
            <button
              @click="closeBtn" 
              type="button" 
              class="btn__close modal__close"
            >
              <span>닫기</span>
            </button>
          </div><!-- modal__top -->
          <div class="modalNftList__search page__search modal__inner page__margin--small">
            <div class="modalNftList__search--inner page__search--inner">
              <input type="text" placeholder="검색어를 입력해주세요.">
              <button
                type="button"
              >
              <span class="page__img">
                <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
              </span>
              </button>
            </div>
          </div><!-- modalNftList__search -->

        <div class="modalNftList__table table itemTable">
          <div class="modalNftList__tableInner itemTable__inner">
            <table class="modalNftList__tableLayout itemTable__layout table__layout">
                <thead>
                  <th class="table__info--10"></th>
                  <th class="table__info--40">이름</th>
                  <th class="table__info--20">판매자</th>
                  <th class="table__info--10">에디션</th>
                  <th class="table__info--20">체결가</th>
                </thead>
                <tbody>
                  <tr
                    v-if="tableItemList == 0"
                    class="table__blank"
                  >
                    <td>보유중인 NFT가 없습니다.</td>
                  </tr>
                  <tr
                    v-for="item in tableItemList"
                    :key="item.id"
                    @click="selectItem"
                  >
                    <td class="table__info--10 itemTable__imgBox">
                      <div class="itemTable__img page__img">
                        <img :src="item.itemImgUrl" :alt="item.itemName">
                      </div>
                    </td>
                    <td class="table__info--40 page__text--left page__table--innerpage__split">{{item.itemName}}</td>
                    <td class="table__info--20 page__split">{{item.userName}}</td>
                    <td class="table__info--10 table__info--edition">{{item.edition}}st</td>
                    <td class="table__info--20">{{item.price}} <span>KRW</span></td>
                  </tr>
                </tbody>
            </table>
            <ul class="itemTable__toggle">
              <li
              v-if="tableItemList == 0"
              class="table__blank"
            >
              <div>보유중인 NFT가 없습니다.</div>
            </li>
              <li
                v-for="(item, idx) in tableItemList"
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
                  @click="selectItem"
                  :class="{active: listId == idx}"
                  class="itemTable__toggle--info">
                  <div class="itemTable__toggle--txt">
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
                  </div>
                  <div class="itemTable__toggle--btn">
                    선택하기
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div><!-- modal -->


      <div
        @click="closeBtn"
        class="modal__back"
      >
        배경
      </div><!-- modal__back -->
    </div>
  </transition>
</template>

<script>
  export default {
    name : 'nftList',
    // layout: 'default',
    data: () => ({
      listId       : 0,       // 리스트 아이디
      toggleOn     : false,   // 토글 on off
      tableItemList: [
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
      ]
    }),
    methods: {
      // 아이템 정보 토글 버튼
      toggleBtn(idx){
        this.listId = idx;
      },
      // 아이템 선택 버튼
      selectItem(){
        this.$emit('selected')
      },
      // 모달창 닫기 버튼
      closeBtn(){
        this.$emit('close');
      }
    }
  }
</script>
