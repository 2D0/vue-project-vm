<template>
  <div class="auctionDetail salePage page container__inner--max container__inner--padding">
    <div class="salePage__contBox page__margin--mid">
      <div class="salePage__cont page__margin--mid">
        <div class="salePage__cont--left salePage__cont--tit">
          <div class="salePage__state itemState">
            <span class="itemState--start" v-if="itemState == '진행중'">진행중</span>
            <span class="itemState--expect" v-else-if="itemState == '진행예정'">진행예정</span>
            <span class="itemState--hurry" v-else-if="itemState == '종료임박'">종료임박</span>
            <span class="itemState--end" v-else-if="itemState == '종료'">종료</span>
          </div>
          <div class="salePage__tit">
            {{itemName}}
          </div>
          <div class="salePage__user page">
            <p class="salePage__user--img page__img">
              <img :src="userImgUrl" :alt="userName">
            </p>
            <p class="salePage__user--name">
              {{userName}}
            </p>
          </div>
        </div><!-- salePage__cont--left -->
        <div class="salePage__topBtn">
          <div class="salePage__share">
            <div class="salePage__share--like">
              <span>{{itemLikeCount}}</span>
              <button class="btn__ico" @click="pageLike">
                <div>
                  <img :class="{active:setPageActive}" class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                  <img :class="{active:setPageActive}" class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                </div>
              </button>
            </div>
            <button class="btn__ico btn__share">
              <img src="~assets/img/icons/ico-share.svg" alt="좋아요 버튼">
            </button>
          </div>
        </div>
      </div><!-- salePage__cont -->

      <div class="salePage__cont page__margin--mid">
        <div class="salePage__cont--left">
          <div class="salePage__itemImg page">
            <span class="page__img">
              <img :src="itemImgUrl" :alt="itemName">
            </span>
          </div>
        </div><!-- salePage__cont--left -->
        <div class="salePage__cont--right salePage__cont--price">
          <div class="salePage__priceBox">
          <div class="salePage__edition">
            <div class="salePage__editionNum">
              <p>
                <span class="salePage__editionNum--count">
                  #1 ~ #{{endEdition}} /
                </span>
                <span class="salePage__editionNum--total">
                  TOTAL : {{TotalEdition}}
                </span>
              </p>
              <p class="salePage__nowEdition">
                {{NowEdition}}st Edition
              </p>
            </div>
            <NuxtLink to="/myPage/userItem/home" class="salePage__anotherEdition">
              Another Edition
              <span class="salePage__anotherEdition--arrow"></span>
            </NuxtLink>
          </div><!-- salePage__edition -->
            <div class="salePage__price salePage__price--time">
              <div class="salePage__time">
                <div class="salePage__starDate">{{itemTime}}</div>
                <div class="salePage__period">{{itemTimeStart}} ~ {{itemTimeStart}}</div>
              </div>
              <div class="salePage__priceInfo">
                <div class="salePage__priceInfo--tit">현재가</div>
                <div class="salePage__priceInfo--num">
                  {{itemPrice}} <span>KRW</span>
                </div>
              </div>
            </div>
          </div><!-- salePage__priceBox -->
          <div 
            v-if="acceptBtn == true"
            class="salePage__btn"
          >
            <NuxtLink to="order" class="btn">
              <span class="btn--big btn--accept btn--margin">
              입찰
              </span>
            </NuxtLink>
          </div>
          <div
            v-else-if="acceptBtn == false"
            class="salePage__btn"
          >
            <div class="btn">
              <span class="btn--big btn--unAccept btn--margin">
                입찰
              </span>
            </div>
          </div>
        </div><!-- salePage__cont--right -->
      </div><!-- salePage__cont -->

      <div class="salePage__cont page__margin--big">
        <div class="salePage__cont--left">
          <div class="salePage__comment">
            {{itemComment}}
          </div>
        </div><!-- salePage__cont--left -->
        <div class="salePage__cont--right">
          <div class="salePage__minTable table table--small">
            <div class="salePage__tableTop page__margin--small">
              <div class="table__top--tit page__tit">주문내역</div>
              <div class="table__switch">
                <button
                  @click="switchActive = true"
                  :class="{active : switchActive == true}"
                  class="table__switch--tit" 
                >
                <!--  table__switch--active -->
                  전체 주문 내역
                </button>
                <span class="table__switch--bar"></span>
                <button
                  @click="switchActive = false"
                  :class="{active : switchActive == false}"
                  class="table__switch--tit"
                >
                  내 주문 내역
                </button>
              </div>
            </div>
            <table class="salePage__TableLayout table__layout">
              <thead>
                <th class="table__info--50">주문시간</th>
                <th class="table__info--50">주문 가격(원)</th>
              </thead>
              <tbody
                v-if="switchActive == true"
                class="salePage__TableLayout--400"
              >
                <tr
                  v-if="tableHistory == 0"
                  class="table__blank"
                >
                  <td>제안내역이 없습니다.</td>
                </tr>
                <tr
                  v-for="(history, idx) in tableHistory"
                  :key="idx"
                >
                  <td class="table__info--50">{{history.date}}</td>
                  <td class="table__info--50">{{history.price}} <span>KRW</span></td>
                </tr>
              </tbody>
              <tbody
                v-else-if="switchActive == false"
                class="salePage__TableLayout--400"
              >
                <tr
                  v-if="tableTotalHistory == 0"
                  class="table__blank"
                >
                  <td>제안내역이 없습니다.</td>
                </tr>
                <tr
                  v-for="totalHistory in tableTotalHistory"
                  :key="totalHistory.id"
                >
                  <td class="table__info--50">{{totalHistory.date}}</td>
                  <td class="table__info--50">{{totalHistory.price}} <span>KRW</span></td>
                </tr>
              </tbody>
            </table>
          </div><!-- salePage__minTable -->
        </div><!-- salePage__cont--right -->
      </div><!-- salePage__cont -->
    </div><!-- salePage__contBox -->
    <div class="salePage__contBtm">
      <div class="salePage__notice">
        Market Place 판매 유의사항<br><br>

        NFT는 특정 주체가 그 가치를 보장하지 않으며, 이에 따른 손실도 본인에게 귀속됩니다.<br>
        주문 내용은 취소할 수 없으므로 신중하게 결정하여 주문해주세요.<br>
        본인 인증이 완료된 회원만 참여할 수 있습니다.<br>
        판매 종료 후, 판매자에게는 7일 내 일괄 정산되어 지급됩니다.<br>
        NFT 소유자는 NFT와 연계된 “디지털 저작물“을 비상업적인 용도로 사용할 수 있는 권리와<br> 
        NFT 입출금, 거래 등이 지원되는 경우 지원되는 방식에 따라 NFT의 소유권을 타인에게 이전할 수 있는 권리를 갖습니다.
      </div>
    </div>
    <div class="comment">
      <div class="comment__top comment__inner">댓글 &nbsp;<span>{{commentList.length}}</span></div>
      <ul class="comment__list">
        <li
          v-for="(item, idx) in commentList"
          :key="idx">
          <div 
            v-if="item.good > 1000"
            class="comment__list--best">BEST</div>
          <div class="comment__list--box comment__inner">
            <div class="comment__list--left">
              <div class="comment__list--top">
                <div class="comment__user">
                  <div class="comment__user--img page__img">
                    <img :src="item.userImg" :alt="item.user">
                  </div>
                  {{item.user}} &nbsp;
                </div>
                <div class="comment__list--date"> ・ {{item.date}} 전</div>
              </div>
              <div
                class="comment__list--txt">{{item.comment}}</div>
            </div>
            <div class="comment__list--btns">
              <div class="comment__list--btn">
                <button><img src="~assets/img/icons/ico-cmt-good.svg" alt="좋아요"></button>
                <span>{{item.good}}</span>
              </div>
              <div class="comment__list--btn">
                <button><img src="~assets/img/icons/ico-cmt-bad.svg" alt="싫어요"></button>
                <span>{{item.bad}}</span>
              </div>
            </div>
          </div>
        </li>  
      </ul>
      <div class="comment__write comment__inner">
        <div class="comment__write--input">
          <input type="text" placeholder="댓글을 입력해주세요." maxlength="100">
        </div>
        <button class="comment__write--btn">
          댓글 등록
        </button>
      </div>
    </div>
  </div><!-- auctionDetail -->
</template>

<script>
  export default {
    name : 'auctionDetail',
    // layout: 'default',
    data: () => ({
      // 아이템 기본 정보
      itemName         :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
      userName         :'GHARLIERA',                                 // 판매자 이름
      itemPrice        :'60,142',                                    // 아이템 가격
      commission       :'2,900',                                     // 수수료
      totalPrice       :'1,252,900',                                 // 총 금액
      itemComment      :'아이템 상세 설명입니다.',                         // 아이템 설명
      itemTime         :'01D : 13 : 47 : 30',                        // 아이템 남은 시간
      itemTimeStart    :'2022년 03월 16일 12시',                       // 판매 기간 시작
      itemTimeEnd      :'2022년 03월 17일 23시 59분',                   // 판매 기간 끝
      itemImgUrl       :require('assets/./img/test/test-card4.png'),           // 아이템 이미지
      userImgUrl       :require('assets/./img/test/test-card2.png'),           // 판매 유저 이미지
      itemState        :'진행중',                                      // 판매 상태
      itemLikeCount    :'1,829',                                     // 좋아요 수
      endEdition       :'100',                                       // 마지막 에디션 숫자
      TotalEdition     :'100',                                       // 총 에디션 갯수
      NowEdition       :'1',                                         // 현재 에디션

      // 에디션 정보 표
      editionDate      :'2022.03.15 14:38',                          // 거래일시
      editionMarket    :'무야호상점',                                   // 마켓
      editionSeller    :'GHARLIERA',                                 // 판매자
      editionOwner     :'룰루랄라무야호',                                // 소유자
      editionPrice     :'1,250,000',                                 // 금액

      // 댓글
      more :'',
      // 체인정보
      contractAddr     :'agdkajgdajgl151353gadskdja1142351glkdjslkg',// 컨텍트 주소
      tokenId          :'',                                          // 토큰 아이디

      // 주문내역 표
      tableHistory     : [                                           // 전체 주문 내역
        {
          date:'2021.07.15 14:38',
          price:'70,000',
        },
        {
          date:'2021.01.09 14:38',
          price:'170,000',
        },
        {
          date:'2021.04.12 14:38',
          price:'250,000',
        },
        {
          date:'2021.03.15 14:38',
          price:'70,000',
        },
        {
          date:'2021.07.15 14:38',
          price:'70,000',
        },
        {
          date:'2021.01.09 14:38',
          price:'170,000',
        },
        {
          date:'2021.04.12 14:38',
          price:'250,000',
        },
        {
          date:'2021.03.15 14:38',
          price:'70,000',
        },
        {
          date:'2021.07.15 14:38',
          price:'70,000',
        },
        {
          date:'2021.01.09 14:38',
          price:'170,000',
        },
        {
          date:'2021.04.12 14:38',
          price:'250,000',
        },
        {
          date:'2021.03.15 14:38',
          price:'70,000',
        },
      ],
      tableTotalHistory: [                                           // 내 주문 내역
        {
          date:'2021.12.15 14:38',
          price:'150,000',
        },
        {
          date:'2021.02.19 14:38',
          price:'70,000',
        },
        {
          date:'2021.12.08 14:38',
          price:'40,000',
        },
        {
          date:'2021.12.15 14:38',
          price:'150,000',
        },
        {
          date:'2021.02.19 14:38',
          price:'70,000',
        },
        {
          date:'2021.12.08 14:38',
          price:'40,000',
        },
        {
          date:'2021.12.15 14:38',
          price:'150,000',
        },
        {
          date:'2021.02.19 14:38',
          price:'70,000',
        },
        {
          date:'2021.12.08 14:38',
          price:'40,000',
        },
        {
          date:'2021.12.15 14:38',
          price:'150,000',
        },
        {
          date:'2021.02.19 14:38',
          price:'70,000',
        },
        {
          date:'2021.12.08 14:38',
          price:'40,000',
        },
        {
          date:'2021.12.15 14:38',
          price:'150,000',
        },
        {
          date:'2021.02.19 14:38',
          price:'70,000',
        },
        {
          date:'2021.12.08 14:38',
          price:'40,000',
        },
        {
          date:'2021.12.15 14:38',
          price:'150,000',
        },
        {
          date:'2021.02.19 14:38',
          price:'70,000',
        },
        {
          date:'2021.12.08 14:38',
          price:'40,000',
        },
      ],
      // 댓글
      commentList :[
        {
          user    :'GHARLIERA',
          userImg :require('assets/./img/test/test-card4.png'),
          date    :'2 달',
          comment :'너무 굿이에요!! 그레잇해요!! 짱이에요!!',
          good    :'2377',
          bad     :'186',
        },
        {
          user    :'GHARLIERA',
          userImg :require('assets/./img/test/test-card1.png'),
          date    :'2 달',
          comment :`우주 최강 멋진 작품!! 하고싶은 말이 많은데 생각나는 게 없어요!!
          아마도 이게 세상에서 가장 최고이지 않을까요~.~ 왜냐면 최고이기 때문에다!!
          밤하늘은 반짝반짝 아름답게 빛난우주 최강 멋진 작품!!
          하고싶은 말이 많은데 생각나는 게 없어요!! 
          아마도 이게 세상에서 가장 최고이지 않을까요~.~ 왜냐면 최고이기 때문에다!!
          우주 최강 멋진 작품!! 하고싶은 말이 많은데 생각나는 게 없어요!!
          아마도 이게 세상에서 가장 최고이지 않을까요~.~ 왜냐면 최고이기 때문에다!!
          밤하늘은 반짝반짝 아름답게 빛난우주 최강 멋진 작품!!
          하고싶은 말이 많은데 생각나는 게 없어요!! 
          아마도 이게 세상에서 가장 최고이지 않을까요~.~ 왜냐면 최고이기 때문에다!!`,
          good    :'3010',
          bad     :'186',
        },
        {
          user    :'GHARLIERA',
          userImg :require('assets/./img/test/test-card7.png'),
          date    :'7 일',
          comment :`청소를 깨끗이 쓱싹쓱싹 룰루랄라 언제나 깨끗하게 얼룩같은 어제를 지우고 새로운 오늘을 살자`,
          good    :'1448',
          bad     :'186',
        },
        {
          user    :'고영희',
          userImg :require('assets/./img/test/test-card8.png'),
          date    :'35 분',
          comment :'이건 완벽해!! 아마도??',
          good    :'10',
          bad     :'0',
        },
        {
          user    :'단발좌',
          userImg :require('assets/./img/test/test-card9.png'),
          date    :'1 분',
          comment :'아아 마이크 테스트',
          good    :'1',
          bad     :'0',
        },
      ],
      // 기능
      acceptBtn         : true,  // 확인 버튼  -> 아이템 상태에 따른
      switchActive      : true,  // 탭 버튼    -> 주문내역 
      setPageActive     : false, // 좋아요 버튼 -> 페이지
    }),
    methods : {
       // 좋아요 버튼 -> 페이지
      pageLike(){                  
        this.setPageActive = !this.setPageActive
      }
    }
  }
</script>
