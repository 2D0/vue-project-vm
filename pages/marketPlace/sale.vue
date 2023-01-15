<template>
  <div class="saleItem page container__inner--max container__inner--padding">
    <MoreModal
      v-if="moreModal == true"
      @close="closeModal"
      @agree1="checked1"
      @agree2="checked2"
      :moreTxt="modalInfo"
    >
    </MoreModal>
    <NftListModal
      v-if="nftList == true"
      @close="closeModal"
      @selected="selectedItem"
    >
    </NftListModal>
    <ConfirmModal
      v-if="confirmModal == true"
      :modalTxt="text"
      @close="closeModal"
    ></ConfirmModal>
      <h1 class="page__tit page__margin--mid">NFT 마켓 판매</h1>
      <div
        v-if="showItem == false"
        class="card saleItem__addItem"
      >
        <button
          @click="nftList = true"
          type="button" 
          class="card__inner saleItem__addBtn"
        >
          <span class="saleItem__addBtnIn">
            <i class="saleItem__addBtnIn--img"><img src="~assets/img/icons/ico-card-plus.svg" alt="item plus"></i>
            <i class="saleItem__addBtnIn--tit">Add NFT</i>
          </span>
        </button>
      </div><!-- saleItem__addItem -->
      <div
        v-if="showItem == true" 
        class="saleItem__itemImg"
      >
        <div class="saleItem__itemImgInner container__inner--mid">
          <button 
            @click="showItem = false" 
            type="button" 
            class="btn__close saleItem__itemImg--close"
          >
            <span>취소</span>
          </button>
          <div class="page__img">
            <img :src="itemImgUrl" :alt="itemName">
          </div>
        </div>
      </div>
      <div
        v-if="showItem == true"
        class="saleItem__itemInfo"
      >
        <div class="container__inner--mid">
          <div class="saleItem__itemCont">
            <div class="page__tit--small">작품 제목</div>
            <div class="saleItem__itemCont--tit">{{itemName}}</div>
          </div>
          <div class="saleItem__itemCont">
            <div class="page__tit--small">작품 설명</div>
            <div class="saleItem__itemCont--txt">{{itemComment}}</div>
          </div>
        </div>
      </div>
      <div class="saleItem__form formBorderLayout">
        <form
          @submit.prevent="checkForm"
          action=""
          method="post"
        >
          <fieldset>
            <legend>정보입력</legend>
            <div class="container__inner--mid">
              <div class="formBorderLayout__cont">
                <div class="formBorderLayout__tit">판매자 의견</div>
                <input id="com" name="comment" type="text" maxlength="30" placeholder="30자 이내로 적어주세요.">
              </div>
              <div class="formBorderLayout__cont">
                <div class="formBorderLayout__tit">판매 금액(KRW)<span class="page__essential">*</span></div>
                <div class="formBorderLayout__subTit"></div>
                <input
                  @input="onlyNum"
                  :value="price"
                  type="text"
                  name="price" 
                  placeholder="5,000원 이상 금액을 등록해주세요."
                >
              </div>
              <div class="formBorderLayout__cont">
                <div class="formBorderLayout__tit">판매 기간 설정<span class="page__essential">*</span></div>
                <div class="formBorderLayout__subTit"></div>
                <input type="text" name="date" readonly placeholder="날짜를 선택해 주세요.">
                <!-- <Calendar></Calendar> -->
                <!-- <DatePicker
                  locale="ko"
                  title-position="center"
                  color="#999"
                  v-model="endDate"
                  @input="clickEndDate()"
                  :model-config="modeConfig"
                  is-required
                ></DatePicker> -->
                <!-- <input type="date" max="2032-03-01" name="date" placeholder="날짜를 선택해 주세요."> -->
              </div>
              <div class="formBorderLayout__cont">
                <div class="formBorderLayout__tit">수수료</div>
                <div class="formBorderLayout__subTit">작품 판매 시 서비스 수수료와 결제수수료를 제외한 금액은 정산관리 메뉴에서 확인하실 수 있습니다.</div>
                <input 
                  v-if="incentive == false"
                  type="text"
                  name="incentive" 
                  value="현재는 수수료 무료 이벤트 중입니다." 
                  readonly
                >
                <input
                  v-else-if="incentive == true"
                  type="text"
                  name="incentive"  
                  value="수수료" 
                  readonly
                >
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
                        <span>NFT 판매를 위한 정보 수집 및 이용에 동의합니다.</span>
                      </label>
                    </div>
                    <button
                      @click="infoBtn"
                      class="agreeLayout__btn" 
                      type="button"
                    >
                      전문보기
                    </button>
                  </div><!-- agreeLayout__checkLine -->
                  <div class="agreeLayout__checkLine">
                    <div class="agreeLayout__check">
                      <input
                        id="agree2" 
                        type="checkbox"
                        v-model="agree2"
                        name="agree2"
                      >
                      <span 
                        v-if="error2 == true"
                        class="agreeLayout__essential page__essential"
                      >
                        *
                      </span>
                      <label for="agree2">
                        <span
                          :class="{error : error2 == true}"
                          class="agreeLayout__checkBox"
                        >
                          체크박스
                        </span>
                        <span>NFT 판매시 유의사항을 확인하였으며, 하단 내용에 동의합니다.</span>
                      </label>
                    </div>
                    <button
                      @click="notice"
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
                        name="agreeALl"
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
                  주식회사 메이크트리은 통신판매중개사로서 거래 당사자가 아니며, 사용자가 등록한 상품정보 및 거래에 대한 어떠한 책임도 지지 않습니다.
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
                value="등록하기">
            </div>
          </fieldset>
        </form>
      </div><!-- saleItem__form -->
  </div>
</template>

<script>
  import MoreModal    from '@/modal/more'
  import NftListModal from '@/modal/nftList'
  import ConfirmModal from '@/modal/confirm' // 확인 모달
  //import Calendar     from 'v-calendar/lib/components/calendar.umd'
  //import DatePicker   from 'v-calendar/lib/components/date-picker.umd'
  
  export default {
    name: 'marketPlace',
    // layout: 'default',
    components:{
      MoreModal,        // 전문보기 모달 컴포넌트
      NftListModal,     // NFT 목록 모달
      ConfirmModal,     // 확인 모달
      //Calendar,       // 달력 모달
      //DatePicker,     // 달력 날짜 선택
    },
    data: () => ({
      //모달
      modalInfo:{
        tit           :'',
        text          :'',
        btn           :'',
        agree1        :'',
      },
      // 아이템 기본 정보
      itemName          :'HAKAI.PT2_S Canvas Print',        // 아이템 이름
      userName          :'GHARLIERA',                       // 판매자 이름
      commission        :'2,900',                           // 수수료
      itemComment       :'아이템 상세 설명입니다.',               // 아이템 설명
      itemImgUrl        :require('assets/./img/test/test-card1.png'), // 아이템 이미지

      // 데이터 값들
      showItem          : false,                            // 아이템 선택시 정보 노출
      agree1            : false,                            // 동의1
      agree2            : false,                            // 동의2
      moreModal         : false,                            // 전문보기 모달
      confirmModal      : false,                            // 등록완료 모달
      text              : '등록이 완료되었습니다.',               // 등록완료 모달 메시지
      price             : '',                               // 가격 input 숫자만 입력 가능하게
      incentive         : false,                            // 수수료
      nftList           : false,                            // nft 리스트 모달
      needCheck         : false,                            // 필수 동의 체크 안 됐을 때
      error1            : false,                            // 필수 동의 체크 안 됐을 때
      error2            : false,                            // 필수 동의 체크 안 됐을 때
      disabled          : false,                            // 버튼 활성화 조건    
    }),
    methods: {
      //뒤로가기
      back() {  
        this.$router.go(-1);
      },
      //모달 전문보기
      infoBtn(){
        this.modalInfo.tit  = '서비스 이용동의';
        this.modalInfo.text = '판매 서비스 모달입니다.';
        this.modalInfo.btn  = '동의';
        this.modalInfo.agree= 'agree1';
        this.moreModal      = true;
      },
      notice(){
        this.modalInfo.tit  = '유의사항 안내';
        this.modalInfo.text = '판매 서비스 유의사항 모달입니다.';
        this.modalInfo.btn  = '동의';
        this.modalInfo.agree= 'agree2';
        this.moreModal      = true;
      },
      // 전체동의 체크
      allCheck(){
        this.checkAll   = this.checkAll ? false : true;
        this.agree1     = this.checkAll;
        this.agree2     = this.checkAll;
      },
      // 모달창 끄기
      closeModal(){
        this.moreModal    = false;  // 전문보기 모달창 닫기
        this.nftList      = false;  // NFT 리스트 모달창 닫기
        this.confirmModal = false;  // 등록완료 모달창 닫기
      },
      // 모달 끄는 동시에 동의 체크
      checked1(){
        this.agree1     = true;
        this.moreModal  = false;
      },
      checked2(){
        this.agree2     = true;
        this.moreModal  = false;
      },
      // 가격 input 숫자만 입력 가능하게
      onlyNum(e){
        this.price = e.target.value;
      },
      // 아이템 리스트 모달
      selectedItem(){
        this.showItem   = true;   // 아이템 선택시 정보 노출
        this.nftList    = false;  // NFT 리스트 모달창 닫기
      },
      // 폼 버튼 활성화
      ableBtn(){
        let selectItem = this.showItem == true        // 아이템 선택 여부
        let price      = this.price    != ''          // 가격 입력 여부
        let check1     = this.agree1   == true        // 동의 체크
        let check2     = this.agree2   == true        // 동의 체크
        let salePrice  = this.price.replace(/,/g,''); // 판매 금액
            salePrice  = Number(salePrice);

        selectItem && price && check1 && check2 && salePrice >= 5000
        ? this.disabled = true
        : this.disabled = false
      },
      // 폼 전송 조건
      checkForm(){
        if(this.disabled == true){
          this.confirmModal = true
          setTimeout(() => {
            this.confirmModal = false
          }, 1200);
        }
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
