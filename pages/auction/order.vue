<template>
  <div class="saleItem page container__inner--max container__inner--padding">
    <MoreModal
      @close="closeModal"
      @agree1="checked1"
      :moreTxt="modalInfo"
      v-if="moreModal == true"
    >
    </MoreModal>
    <NftListModal
      @close="closeModal"
      @selected="selectedItem"
      v-if="nftList == true"
    >
    </NftListModal>
      <h1 class="page__tit page__margin--mid">입찰하기</h1>
      <div class="saleItem__itemImg">
        <div class="saleItem__itemImgInner container__inner--mid">
          <div class="page__img">
            <img :src="itemImgUrl" :alt="itemName">
          </div>
        </div>
      </div>
      <article class="saleItem__itemInfo">
        <div class="container__inner--mid">
          <div class="saleItem__itemBox">
            <div class="page__tit--small">작품 정보</div>
            <div class="saleItem__itemBox--name">{{itemName}}</div>
            <div class="saleItem__itemBox--user">
              <div class="saleItem__itemBox--userImg page__img page__shadowThin">
                <img :src="userImgUrl" :alt="userName">
              </div>
              <div class="saleItem__itemBox--userName">{{userName}}</div>
            </div>
            <div class="saleItem__itemBoxLine">
              <div class="saleItem__itemBox--edition">
                {{NowEdition}}st
                <span>Edition</span>
              </div>
              <div class="saleItem__itemBox--price">
                <div class="saleItem__itemBox--priceTit">
                  현재가
                </div>
                <div class="saleItem__itemBox--priceNum">
                  {{nowPrice}}
                  <span>KRW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="saleItem__form formBorderLayout">
        <form
          @submit.prevent="checkForm"
          action=""
          method="post"
        >
          <fieldset>
            <legend>정보입력</legend>
            <div class="container__inner--mid">
              <div class="formBorderLayout__lineCont page__margin--mid">
                <div class="formBorderLayout__lineCont--tit formBorderLayout__lineCont--txt">
                  입찰가
                </div>
                <div class="formBorderLayout__priceBox">
                  <input
                    @input="onlyNum"
                    :value="price"
                    name="price"
                    type="text" 
                    placeholder="현재가 이상 금액을 등록해주세요."
                  >
                  <span class="formBorderLayout__priceBox--unit">KRW</span>
                </div>
              </div>
              <div class="formBorderLayout__pay">
                <div class="formBorderLayout__lineCont--tit formBorderLayout__lineCont--txt page__margin--small">
                  결제방식 선택
                </div>
                <div class="formBorderLayout__paySelect">
                  <div class="formBorderLayout__paySelect--radio">
                    <input 
                      id="pay1" 
                      type="radio" 
                      name="pay"
                      checked="checked"
                      >
                    <label for="pay1" class="formBorderLayout__paySelect--btn btn--big btn--unAcceptLight">
                      신용카드
                    </label>
                  </div>
                  <div class="formBorderLayout__paySelect--radio">
                    <input 
                      id="pay2" 
                      type="radio" 
                      name="pay"
                      >
                    <label for="pay2" class="formBorderLayout__paySelect--btn btn--big btn--unAcceptLight">결제수단1(테스트)</label>
                  </div>
                  <div class="formBorderLayout__paySelect--radio">
                    <input 
                      id="pay3" 
                      type="radio" 
                      name="pay"
                      >
                    <label for="pay3" class="formBorderLayout__paySelect--btn btn--big btn--unAcceptLight">결제수단2(테스트)</label>
                  </div>
                </div>
                <div class="formBorderLayout__subTit">
                  해외(달러) 결제, 암호화폐 결제 시 수수료에 따라 결제금액이 변경될 수 있습니다.
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="agreeLayout">
            <legend>동의 항목</legend>
            <div class="container__inner--mid">
              <div class="agreeLayout">
                <div class="agreeLayout__box">
                  <div class="agreeLayout__checkLine">
                    <div class="agreeLayout__check">
                      <input 
                        id="agree1" 
                        type="checkbox"
                        v-model="agree1"
                        name="agree1"
                      >
                      <span 
                        v-if="error1 == true"
                        class="agreeLayout__essential page__essential"
                      >
                        *
                      </span>
                      <label for="agree1">
                        <span
                          :class="{error : error1 == true}"
                          class="agreeLayout__checkBox"
                        >
                          체크박스
                        </span>
                        <span>
                          NFT는 블록체인 기술 특성상, 성공적으로 거래된 구매에 대해 
                          청약철회 및 취소가 되지 않음에 동의합니다.
                        </span>
                      </label>
                    </div>
                    <button
                      @click="moreModal = true"
                      class="agreeLayout__btn" 
                      type="button"
                    >
                      전문보기
                    </button>
                  </div><!-- agreeLayout__checkLine -->
                  <div class="agreeLayout__checkLine">
                    <div class="agreeLayout__check">
                      <input 
                        id="checkAll" 
                        type="checkbox"
                        true-value="true"
                        false-value="false"
                        name="agreeAll"
                      >
                      <label 
                        for="checkAll" 
                        @click="allCheck()"
                      >
                        <span class="agreeLayout__checkBox">체크박스</span>
                        약관 전체 동의하기
                      </label>
                    </div>
                  </div><!-- agreeLayout__checkLine -->
                </div><!-- agreeLayout__box -->
                <div
                  v-if="needCheck == true"
                  class="agreeLayout__error page__color--error"
                >
                  약관에 동의 해주세요!
                </div>
                <div class="agreeLayout__ex">
                  개인 정보 제3자 제공 동의, 결제 대행 서비스 이용약관 등 모든 약관에 동의합니다.<br>
                  주식회사 민트 오션은 통신판매중개사로서 거래 당사자가 아니며, 사용자가 등록한 상품정보 및 거래에 대한 어떠한 책임도 지지 않습니다.
                </div><!-- seeAgree -->
              </div><!-- agreeLayout -->
            </div><!-- agreeLayout -->
          </fieldset>
          <fieldset>
            <legend>데이터 전송</legend>
            <div class="saleItem__btn container__inner--mid">
              <button
                @click="back"
                class="btn--unAcceptLine btn--mini"
              >
                취소하기
              </button>
              <input
                @click="checkForm" 
                :disabled="ableBtn()" 
                :class="{accept: disabled == true}" 
                class="btn--unAcceptLight btn--middle"
                type="submit" 
                value="결제하기">
            </div>
          </fieldset>
        </form>
      </article><!-- saleItem__form -->
  </div>
</template>

<script>
  import MoreModal    from '@/modal/more'
  
  export default {
    name: 'auctionBid',
    // layout: 'default',
    components:{
      MoreModal,                                            // 전문보기 모달 컴포넌트
    },
    data: () => ({
      // 모달 메시지
      modalInfo:{
        tit            :'옥션 모달',
        text           :'옥션페이지 전문보기 내용',
        btn            :'동의',
        agree          :'agree1'
      },
      Num:'agree1',

      // 아이템 기본 정보
      itemName          :'HAKAI.PT2_S Canvas Print',        // 아이템 이름
      userName          :'GHARLIERA',                       // 판매자 이름
      itemImgUrl        :require('assets/./img/test/test-card1.png'), // 아이템 이미지
      userImgUrl        :require('assets/./img/test/test-card8.png'), // 판매 유저 이미지
      NowEdition        :'1',                               // 현재 에디션
      nowPrice          :'1,250,900',                       // 현재 금액

      // 데이터 값들
      price             : '',                               // 가격 input
      agree1            : false,                            // 동의1
      moreModal         : false,                            // 전문보기 모달
      nftList           : false,                            // nft 리스트 모달
      needCheck         : false,                            // 필수 동의 체크 안 됐을 때
      error1            : false,                            // 필수 동의 체크 안 됐을 때
      disabled          : false,                            // 버튼 활성화 조건
    }),
    methods: {
      // 취소하기 (뒤로가기)
      back() {  
        this.$router.go(-1);
      },
      // 전체동의 체크
      allCheck(){
        this.checkAll   = this.checkAll ? false : true;
        this.agree1     = this.checkAll;
      },
      // 모달창 끄기
      closeModal(){
        this.moreModal  = false;  // 전문보기 모달창 닫기
      },
      // 모달 끄는 동시에 동의 체크
      checked1(){
        this.agree1     = true;
        this.moreModal  = false;
      },
      // 가격 input 숫자만 입력 가능하게
      onlyNum(e){
        this.price = e.target.value;
      },
      // 폼 버튼 활성화
      ableBtn(){
        let price       = this.price != ''                // 금액 입력 여부
        let check1      = this.agree1 == true             // 동의 체크
        let nowPriceNum = this.nowPrice.replace(/,/g,''); // 현재 가격
            nowPriceNum = Number(nowPriceNum);

        price && check1 && this.price > nowPriceNum
        ? this.disabled = true
        : this.disabled = false
      },
      // 폼 전송 조건
      checkForm(){
        // 입찰가가 현재 금액보다 작을 경우
        if(this.disabled == true)
          alert('결제하기 페이지로 이동');
      },
    },
    watch: {
      // 가격 input 숫자만 입력 가능하게
      price(val){
        const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
        if(rang.exec(val) !== null) this.price = val.replace(/[^0-9]/g,'');
        if(isNaN(parseFloat(val)))  this.price = '';
        //this.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    }
  }
</script>
