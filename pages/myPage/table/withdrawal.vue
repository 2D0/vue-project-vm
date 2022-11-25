<template>
  <div class="withdrawalPage page container__inner--max container__inner--padding">
    <SubmitModal
      @closeModal="closeModal"
      @complete="complete"
      v-if="submit == true"
    >
    </SubmitModal>
    <h1 class="page__tit--big tabMenu page__margin--mid">출금신청</h1>
    <div class="withdrawalPage__top page__margin--mid">
      <div class="withdrawalPage__top--txt">
        휴대폰 본인인증을 완료해야 정산 정보 신청이 가능합니다.<br>
        본인인증정보와 신분증 정보가 일치해야 정산이 가능합니다.
      </div>
    </div>
    <article class="withdrawalPage__content withdrawalPage__content--line">
      <h2 class="withdrawalPage__content--tit page__margin--small">신분증 정보 입력</h2>
      <div class="withdrawalPage__choose">
        <div
          :class="{height : personImg == 1}"
          class="withdrawalPage__choose--inner"
        >
          <div class="withdrawalPage__choose--top">
            <div class="withdrawalPage__choose--icon">
              <img
                v-if="personImg == 1"
                src="~assets/img/icons/ico-person-check.svg"
              >
              <img
                v-else-if="personImg == 2"
                src="~assets/img/icons/ico-cloud.svg"
              >
              <img
                v-else-if="personImg == 3"
                src="~assets/img/icons/ico-person-wait.svg"
                class="width"
              >
              <img
                v-else-if="personImg == 4" 
                src="~assets/img/icons/ico-check-ok.svg"
              >
            </div>
            <div 
              v-if="personImg == 1"
              class="withdrawalPage__choose--txt"
            >
              <p>본인 주민등록번호 13자리가 명확하게 표시된 신분증 이미지</p>
              <p class="withdrawalPage__choose--subTxt">
                (운전면허증, 여권, 주민등록 등/초본)
              </p>
            </div>
            <div
              v-if="personImg == 2"
              class="withdrawalPage__choose--complete"
            >
              파일을 등록하였습니다.
            </div>
            <div
              v-if="personImg == 3"
              class="withdrawalPage__choose--complete"
            >
              본인인증 중입니다.
            </div>
            <div
              v-if="personImg == 4"
              class="withdrawalPage__choose--complete"
            >
              본인인증이 완료 되었습니다.
            </div>
          </div>
          <button
            @click="personImg = 2"
            v-if="personImg == 1"
            class="withdrawalPage__choose--btn btn--edit"
          >
            파일 선택
          </button>
        </div>
      </div>
      <div class="withdrawalPage__write formBorderLayout container__inner--mid page__margin--big">
        <form 
          v-if="personImg == 1 || personImg == 2"
          @submit.prevent="checkFormInfo"
          action=""
          method="post"
          class="withdrawalPage__writeBox formInfoLayout
          "
        >
          <fieldset>
            <legend>신분증 정보 입력</legend>
            <div class="formBorderLayout__cont">
              <div class="formBorderLayout__tit">이름</div>
              <input 
                v-model="name"
                type="text"
                name="name" 
                placeholder="본명을 적어주세요."
              >
            </div>
            <div class="formBorderLayout__cont">
              <div class="formBorderLayout__tit">주민등록번호 또는 외국인 등록번호</div>
              <input 
                v-model="residentNum"
                type="text" 
                name="residentNum"
                placeholder="13자리 숫자만 입력해주세요."
                maxlength="13"
              >
            </div>
          </fieldset>
          <input
            type="submit"
            value="본인인증 하기"
            :disabled="ablePerson()"
            :class="{accept: personAble == true}" 
            class="withdrawalPage__writeBox--btn btn--unAcceptLight btn--edit"
          >
        </form>
      </div>
    </article>
    <article class="withdrawalPage__content">
      <h2 class="withdrawalPage__content--tit page__margin--small">계좌 정보 입력</h2>
      <div class="withdrawalPage__choose">
        <div 
          :class="{height : bankImg == 1}"
          class="withdrawalPage__choose--inner"
        >
          <div class="withdrawalPage__choose--top">
            <div class="withdrawalPage__choose--icon">
              <img 
                v-if="bankImg == 1"
                src="~assets/img/icons/ico-bank-check.svg"
              >
              <img 
                v-else-if="bankImg == 2"
                src="~assets/img/icons/ico-bank-wait.svg"
                class="width"
              >
              <img
                v-else-if="bankImg == 3"  
                src="~assets/img/icons/ico-check-ok.svg"
              >
            </div>
            <div
              v-if="bankImg == 1"  
              class="withdrawalPage__choose--txt"
            >
              <p>본인의 이름과 계좌번호가 명확하게 표시된 은행 계좌 사본 이미지</p>
            </div>
            <div 
              v-else-if="bankImg == 2" 
              class="withdrawalPage__choose--complete"
            >
              계좌 인증 중입니다.
            </div>
            <div 
              v-else-if="bankImg == 3" 
              class="withdrawalPage__choose--complete"
            >
              계좌 인증이 완료 되었습니다.
            </div>
          </div>
          <button 
            @click="bankCloud()"
            v-if="bankImg == 1" 
            class="withdrawalPage__choose--btn btn--edit"
          >
            파일 선택
          </button>
        </div>
      </div>
      <div class="withdrawalPage__write formBorderLayout container__inner--mid">
        <form 
          @submit.prevent="checkForm"
          action=""
          method="post"
          class="withdrawalPage__writeBox formInfoLayout page__margin--mid"
        >
          <fieldset class="page__margin--mid">
            <legend>계좌 정보 입력</legend>
            <div class="formBorderLayout__cont">
              <div class="formBorderLayout__tit">은행명</div>
              <input 
                v-model="bankName"
                type="text"
                name="bankName" 
                placeholder="은행명을 입력해주세요."
              >
            </div>
            <div class="formBorderLayout__cont">
              <div class="formBorderLayout__tit">은행 계좌번호</div>
              <input 
                v-model="bankNum"
                type="text" 
                name="bankNum"
                placeholder="계좌번호를 숫자만 입력해주세요."
              >
            </div>
            <div class="formBorderLayout__cont">
              <div class="formBorderLayout__tit">휴대폰 번호</div>
              <input 
                v-model="phoneNum"
                type="text"
                name="phoneNum" 
                placeholder="연락처를 숫자만 입력해주세요."
              >
            </div>
            <div class="formBorderLayout__cont--price">
              <div class="formBorderLayout__tit">출금 금액</div>
              <div class="formBorderLayout__priceBox">
                <input 
                  v-model="price"
                  type="text" 
                  name="price"
                  placeholder="5,000원 이상 금액을 등록해주세요."
                >
                <span class="formBorderLayout__priceBox--unit">KRW</span>
              </div>
            </div>
          </fieldset>
          <fieldset class="agreeLayout page__margin--mid">
            <legend>동의 항목</legend>
            <div class="agreeLayout__ex--top">◈ 정산 정보 신청 시 승인 여부 완료까지 영업일 기준 최대 2일이 소요됩니다.</div>
            <div class="container__inner--mid">
              <div class="agreeLayout">
                <div class="agreeLayout__box">
                  <div class="agreeLayout__checkLine">
                    <div class="agreeLayout__check">
                      <input 
                        id="agree1" 
                        type="checkbox"
                        v-model="agree"
                        name="agree1"
                      >
                      <span 
                        v-if="error == true"
                        class="agreeLayout__essential page__essential"
                      >
                        *
                      </span>
                      <label for="agree1">
                        <span
                          :class="{error : error == true}"
                          class="agreeLayout__checkBox"
                        >
                          체크박스
                        </span>
                        <span>개인 정보 수집·이용에 동의합니다.</span>
                      </label>
                    </div>
                    <!-- <button
                      @click="moreModal = true"
                      class="agreeLayout__btn" 
                      type="button"
                    >
                      전문보기
                    </button> -->
                  </div><!-- agreeLayout__checkLine -->
                </div><!-- agreeLayout__box -->
                <div
                  v-if="error == true"
                  class="agreeLayout__error page__color--error"
                >
                  약관에 동의 해주세요!
                </div>
                <div class="agreeLayout__ex">
                  <ul>
                    <li>수집하는 개인 정보의 항목    : 성명, 전화번호, 이메일, 주민등록번호, 주소, 계좌 정보</li>
                    <li>개인 정보 수집·이용 목적      : 금액 정산금 입금</li>
                    <li>개인 정보 보유 및 이용 기간   :  민트오션 서비스 이용 종료 시점까지</li>
                    <li>
                      개인 정보의 수집·이용에 대한 동의 거부 권리 및 그 불이익 내용 : 
                      개인 정보 주제는 개인 정보 수집·이용 동의를 거부하실 수 있으나 
                      이 경우 정산 지급이 되지 않을 수 있습니다.
                    </li>
                  </ul>
                </div><!-- seeAgree -->
              </div><!-- agreeLayout -->
            </div><!-- agreeLayout -->
          </fieldset>
          <fieldset>
            <legend>정산 정보 제출</legend>
            <div class="withdrawalPage__btn container__inner--mid">
              <input
                @click="checkForm"
                :disabled="ableBtn()"
                :class="{accept: disabled == true}"  
                class="btn--unAcceptLight btn--middle" 
                type="submit" 
                value="정산 정보 제출"
              >
            </div>
          </fieldset>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
  import SubmitModal    from '@/modal/submit'
  export default {

    name: 'withdrawal',
    // layout: 'default',
    components: {
      SubmitModal
    },
    data: () => ({
      id            : 0,      // 초기 아이디 값
      personImg     : 1,      // 본인인증시 아이콘 on off
      bankImg       : 1,      // 계좌 인증시 아이콘 on off
      name          : '',     // 성명
      residentNum   : '',     // 주민번호
      bankName      : '',     // 은행 명
      bankNum       : '',     // 은행 명
      phoneNum      : '',     // 휴대폰 번호
      price         : '',     // 출금 금액
      agree         : false,  // 개인정보 수집 동의
      error         : false,  // 동의 체크 에러
      needCheck     : false,  // 필수 체크
      error1        : false,  // 
      submit        : false,  // 제출 완료 모달
      personAble    : false,  // 본인인증 버튼 활성화
      disabled      : false,  // 정산 정보 제출 버튼 활성화
    }),
    methods: {
      // 모달 닫기 버튼
      closeModal(){
        this.submit = false;
      },
      // 모달 확인 버튼
      complete(){
        this.submit = false;
      },
      // 본인인증 폼 검사
      ablePerson(){
        let img       = this.personImg   == 2;
        let name      = this.name        != '';
        let num       = this.residentNum != '';
        let numLength = this.residentNum.length == 13;

        img && name && num && numLength 
        ? this.personAble = true 
        : this.personAble = false 
          
      },
      // 본인인증 하기 버튼
      checkFormInfo(){
        if(this.personAble == true){
          this.personImg = 3;
        // 임시로 설정해놓은 거고 인증 완료 아이콘 표시
          setTimeout(() => {
            this.personImg = 4
          }, 2000);}
      },
      // 계좌 인증 파일 선택
      bankCloud(){
        this.bankImg = 2

        // 임시로 설정해놓은 거고 인증 완료 아이콘 표시
        setTimeout(() => {
          this.bankImg = 3
        }, 2000);
      },
      // 전체 폼 검사
      ableBtn(){
        let person    = this.personImg  == 4
        let img       = this.bankImg    == 3;
        let name      = this.bankName  != '';
        let phone     = this.phoneNum  != '';
        let priceAble = this.price != '' && this.price > 5000;
        let agreeAble = this.agree == true

        person && img && name && phone && priceAble && agreeAble
        ? this.disabled = true
        : this.disabled = false
      },
      // 정산 정보 제출 버튼
      checkForm(){
        this.disabled == true
        ? this.submit = true
        : this.submit = false
      }
    },
    watch: {
      // 주민등록번호 input 숫자만 입력 가능하게
      residentNum(val){
        const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
        if(rang.exec(val) !== null) this.residentNum = val.replace(/[^0-9]/g,'');
        if(isNaN(parseFloat(val)))  this.residentNum = '';
      },
      // 은행 계좌번호 input 숫자만 입력 가능하게
      bankNum(val){
        const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
        if(rang.exec(val) !== null) this.bankNum = val.replace(/[^0-9]/g,'');
        if(isNaN(parseFloat(val)))  this.bankNum = '';
      },
      // 휴대폰 번호 input 숫자만 입력 가능하게
      phoneNum(val){
        const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
        if(rang.exec(val) !== null) this.phoneNum = val.replace(/[^0-9]/g,'');
        if(isNaN(parseFloat(val)))  this.phoneNum = '';
      },
      // 출금 금액 input 숫자만 입력 가능하게
      price(val){
        const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
        if(rang.exec(val) !== null) this.price = val.replace(/[^0-9]/g,'');
        if(isNaN(parseFloat(val)))  this.price = '';
        //this.num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
    }
  }
</script>
