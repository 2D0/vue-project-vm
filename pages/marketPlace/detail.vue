<template>
  <div class="marketPlace salePage container__inner--padding">
    <PriceOffer
      v-if="priceModal == true"
      @confirm="confirm"
      @close="closeModal"
    ></PriceOffer>
    <Toast></Toast>
    <div class="container__inner--max">
      <div class="salePage__contBox  page__margin--mid page__margin--toBigPd">
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
              <p class="salePage__user--img page__img page__shadow">
                <img :src="userImgUrl" :alt="userName">
              </p>
              <p class="salePage__user--name">
                {{userName}}
              </p>
            </div>
          </div><!-- salePage__cont--left -->
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
              <div class="salePage__price">
                <div class="salePage__priceInfo">
                  <div class="salePage__priceInfo--tit">현재가</div>
                  <div class="salePage__priceInfo--num">
                    {{itemPrice}} <span>KRW</span>
                  </div>
                </div>
                <div class="salePage__priceInfo">
                  <div class="salePage__priceInfo--commission salePage__priceInfo--tit">수수료</div>
                  <div class="salePage__priceInfo--commission salePage__priceInfo--num">
                    {{commission}} <span>KRW</span>
                  </div>
                </div>
                <div class="salePage__priceInfo">
                  <div class="salePage__priceInfo--tit">총 금액</div>
                  <div class="salePage__priceInfo--num">
                    {{totalPrice}} <span>KRW</span>
                  </div>
                </div>
              </div>
            </div><!-- salePage__priceBox -->
            <div 
              v-if="acceptBtn == true"
              class="salePage__btn"
            >
              <NuxtLink to="order" class="btn">
                <span class="btn--big btn--accept page__margin--small">
                구매
              </span>
              </NuxtLink>
              <button 
                @click="priceModal = true"
                class="btn--big btn--sub ">
                가격 제안
              </button>
            </div>
            <div
              v-else-if="acceptBtn == false"
              class="salePage__btn"
            >
              <div class="btn">
                <span class="btn--big btn--unAccept btn--margin">
                  구매
                </span>
              </div>
              <div class="btn">
                <span class="btn--big btn--subUnAccept">
                  가격 제안
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
          <div class="salePage__cont--right salePage__cont--table">
            <div class="salePage__minTable table table--small">
              <div class="salePage__tableTop page__margin--small">
                <div class="table__top--tit page__tit">가격 제안 현황</div>
                <div class="table__switch">
                  <button
                    @click="switchActive = true"
                    :class="{active : switchActive == true}"
                    class="table__switch--tit" 
                  >
                  <!--  table__switch--active -->
                    {{NowEdition}}st Edition
                  </button>
                  <span class="table__switch--bar"></span>
                  <button
                    @click="switchActive = false"
                    :class="{active : switchActive == false}"
                    class="table__switch--tit"
                  >
                    전체
                  </button>
                </div>
              </div>
              <table class="salePage__TableLayout table__layout">
                <thead>
                  <th class="table__info--20">에디션</th>
                  <th class="table__info--40">판매가</th>
                  <th class="table__info--40">최고 제안가</th>
                </thead>
                <tbody
                  v-if="switchActive == true"
                  class="salePage__TableLayout--250"
                >
                  <tr
                    v-if="tableInfo == 0"
                    class="table__blank"
                  >
                    <td>제안내역이 없습니다.</td>
                  </tr>
                  <tr
                    v-for="priceOffer in tableInfo"
                    :key="priceOffer.id"
                  >
                    <td class="table__info--edition table__info--20">{{priceOffer.edition}}st</td>
                    <td class="table__info--40">{{priceOffer.price}} <span>KRW</span></td>
                    <td class="table__info--40">{{priceOffer.highPrice}} <span>KRW</span></td>
                  </tr>
                </tbody>
                <tbody
                  v-else-if="switchActive == false"
                  class="salePage__TableLayout--250"
                >
                  <tr
                    v-if="tableTotalInfo == 0"
                    class="table__blank"
                  >
                    <td>제안내역이 없습니다.</td>
                  </tr>
                  <tr
                    v-for="priceTotalOffer in tableTotalInfo"
                    :key="priceTotalOffer.id"
                  >
                    <td class="table__info--edition table__info--20">{{priceTotalOffer.edition}}st</td>
                    <td class="table__info--40">{{priceTotalOffer.price}} <span>KRW</span></td>
                    <td class="table__info--40">{{priceTotalOffer.highPrice}} <span>KRW</span></td>
                  </tr>
                </tbody>
              </table>
            </div><!-- salePage__minTable -->
            <div class="salePage__owner">
              <div class="page__tit">
                NFT 소유자
              </div>
              <div class="salePage__ownerUser">
                <p class="salePage__ownerUser--img page__img page__shadow">
                  <img :src="userImgUrl" :alt="userName">
                </p>
                <p class="salePage__ownerUser--name">
                  {{userName}}
                </p>
              </div>
            </div><!-- salePage__owner -->
          </div><!-- salePage__cont--right -->
        </div><!-- salePage__cont -->

        <div class="salePage__cont">
          <div class="salePage__cont--left salePage__cont--info">
            <div class="salePage__cont--top">
              <div class="page__tit page__tit--20 page__margin--small">1st Edition</div>
                <ul class="salePage__chain salePage__editionInfo">
                  <li>
                    <span>거래일시</span>
                    <span class="page__split">{{editionDate}}</span>
                  </li>
                  <li>
                    <span>마켓</span>
                    <span class="page__split">{{editionMarket}}</span>
                  </li>
                  <li>
                    <span>판매자</span>
                    <span class="page__split">{{editionSeller}}</span>
                  </li>
                  <li>
                    <span>소유자</span>
                    <span class="page__split">{{editionOwner}}</span>
                  </li>
                  <li>
                    <span>금액</span>
                    <span class="page__split">{{editionPrice}} <span>KRW</span></span>
                  </li>
                  <li>
                    <span>컨텍트 주소</span>
                    <span class="page__split">{{contractAddr}}</span>
                  </li>
                  <li>
                    <span>토큰 ID</span>
                    <span class="page__split">{{tokenId}}</span>
                  </li>
                </ul>
              </div>
            <!-- <div class="salePage__cont--btm">
              <div class="page__tit page__tit--40  page__margin--mid">체인정보</div>
              <ul class="salePage__chain">
                <li>
                  <span>컨텍트 주소</span>
                  <span class="page__split">{{contractAddr}}</span>
                </li>
                <li>
                  <span>토큰 ID</span>
                  <span class="page__split">{{tokenId}}</span>
                </li>
              </ul>
            </div> -->
          </div>
          <div class="salePage__cont--right salePage__cont--recent">
              <div class="salePage__minTable table table--small">
                <div class="salePage__tableTop page__margin--small">
                  <div class="page__tit">최근 거래 체결가</div>
                  <div class="table__switch">
                    <button
                      @click="switchActiveConclusion = true"
                      :class="{active : switchActiveConclusion == true}"
                      class="table__switch--tit" 
                    >
                    <!--  table__switch--active -->
                      리스트
                    </button>
                    <span class="table__switch--bar"></span>
                    <button
                      @click="switchActiveConclusion = false"
                      :class="{active : switchActiveConclusion == false}"
                      class="table__switch--tit"
                    >
                      그래프
                    </button>
                  </div>
                </div>
                <table
                  v-if="switchActiveConclusion == true"
                  class="salePage__TableLayout table__layout"
                >
                  <thead>
                    <th class="table__info--20">에디션</th>
                    <th class="table__info--40">체결가</th>
                    <th class="table__info--40">거래일시</th>
                  </thead>
                  <tbody
                    class="salePage__TableLayout--400"
                  >
                    <tr
                      v-if="tableRecent == 0"
                      class="table__blank"
                    >
                      <td>제안내역이 없습니다.</td>
                    </tr>
                    <tr
                      v-for="recentConclusion in tableRecent"
                      :key="recentConclusion.id"
                    >
                      <td class="table__info--20 table__info--edition">{{recentConclusion.edition}}st</td>
                      <td class="table__info--40">{{recentConclusion.conclusion}} <span>KRW</span></td>
                      <td class="table__info--40">{{recentConclusion.date}}</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  v-else-if="switchActiveConclusion == false"
                  class="salePage__TableLayout--graph"
                >
                  그래프 들어갈 자리
                </div>
              </div><!-- salePage__minTable -->
          </div>
        </div><!-- salePage__cont -->
      </div><!-- salePage__contBox -->
      <div class="salePage__contBtm">
        <div class="salePage__notice page__margin--big">
          Market Place 판매 유의사항<br><br>

          NFT는 특정 주체가 그 가치를 보장하지 않으며, 이에 따른 손실도 본인에게 귀속됩니다.<br>
          주문 내용은 취소할 수 없으므로 신중하게 결정하여 주문해주세요.<br>
          본인 인증이 완료된 회원만 참여할 수 있습니다.<br>
          판매 종료 후, 판매자에게는 7일 내 일괄 정산되어 지급됩니다.<br>
          NFT 소유자는 NFT와 연계된 “디지털 저작물“을 비상업적인 용도로 사용할 수 있는 권리와<br> 
          NFT 입출금, 거래 등이 지원되는 경우 지원되는 방식에 따라 NFT의 소유권을 타인에게 이전할 수 있는 권리를 갖습니다.
        </div>
      </div>
    </div>
    <div class="salePage__recommendItem">
      <div class="salePage__recommendItem--tit table__top--tit page__tit container__inner--max">
        {{userName}} 
        <span class="page__tit--small">님의 다른 NFT정보</span>
      </div>
      <div class="salePage__recommendItem--inner">
        <!-- <Hooper
              :settings="hooperSetTop">
          <Slide
            v-for="itemCard in itemInfo.slice(0, 12)" 
            :key="itemCard.id" 
            class="itemLIst__card">
              <div @click.stop="$router.push('/marketPlace/detail')" class="card">
              <div class="card__inner">
                  <div to="detail" class="card__topImg page">
                    <div class="page__img">
                      <img :src="itemCard.itemImgUrl" :alt="itemCard.itemName">
                    </div>
                    <span class="card__topImg--icon">
                      <img 
                        v-if="itemCard.kinds == 'photo'"
                        src="~assets/img/icons/ico-card-picture.svg" alt="사진"
                      >
                      <img 
                        v-else-if="itemCard.kinds == 'video'"
                        src="~assets/img/icons/ico-card-video.svg" alt="영상"
                      >
                      <img 
                        v-else-if="itemCard.kinds == 'music'"
                        src="~assets/img/icons/ico-card-music.svg" alt="음악"
                      >
                    </span>
                  </div>
                  <div class="card__topTit">
                    <div to="detail" class="card__name page__split">
                      {{itemCard.itemName}}
                    </div>
                    <button class="btn__ico" @click.stop="likeBtn(idx, $event)">
                      <div>
                        <img class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                        <img class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                      </div>
                    </button>
                  </div>
                  <div class="card__user page">
                    <p class="card__userImg page__img page__shadowThin">
                      <img :src="itemCard.userImgUrl" :alt="itemCard.userName">
                    </p>
                    <p  @click.stop="$router.push('/myPage/userItem/home')" class="card__userName">
                      {{itemCard.userName}}
                    </p>
                  </div>
                  <div to="detail" class="card__info">
                    <p 
                      v-if="itemCard.itemState == '진행중'"
                      class="card__time card__time--ing">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '진행예정'"
                      class="card__time card__time--soon">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료임박'"
                      class="card__time card__time--hurry">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료'"
                      class="card__time card__time--end">
                      판매 종료된 아이템 입니다.
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == ''"
                      class="card__time card__time--infinity">
                      팜매 기간이 없는 아이템 입니다.
                    </p>
                    <p class="card__price">
                      {{itemCard.itemPrice}}
                      <span>KRW</span>
                    </p>
                  </div>
              </div>
            </div>
          </Slide>
        </Hooper> -->
        <ul class="itemList__cards">
          <li 
            v-for="itemCard in itemInfo.slice(0, 4)" 
            :key="itemCard.id" 
            class="itemLIst__card"
          >
            <div @click.stop="$router.push('/marketPlace/detail')" class="card">
              <div class="card__inner">
                  <!-- <div class="card__itemState itemState">
                    <span class="itemState--start" v-if="itemCard.itemState == '진행중'">진행중</span>
                    <span class="itemState--expect" v-else-if="itemCard.itemState == '진행예정'">진행예정</span>
                    <span class="itemState--hurry" v-else-if="itemCard.itemState == '종료임박'">종료임박</span>
                    <span class="itemState--end" v-else-if="itemCard.itemState == '종료'">종료</span>
                  </div> -->
                  <div to="detail" class="card__topImg page">
                    <div class="page__img">
                      <img :src="itemCard.itemImgUrl" :alt="itemCard.itemName">
                    </div>
                    <span class="card__topImg--icon">
                      <img 
                        v-if="itemCard.kinds == 'photo'"
                        src="~assets/img/icons/ico-card-picture.svg" alt="사진"
                      >
                      <img 
                        v-else-if="itemCard.kinds == 'video'"
                        src="~assets/img/icons/ico-card-video.svg" alt="영상"
                      >
                      <img 
                        v-else-if="itemCard.kinds == 'music'"
                        src="~assets/img/icons/ico-card-music.svg" alt="음악"
                      >
                    </span>
                  </div>
                  <div class="card__topTit">
                    <div to="detail" class="card__name page__split">
                      {{itemCard.itemName}}
                    </div>
                    <button class="btn__ico" @click.stop="likeBtn(idx, $event)">
                      <div>
                        <img class="btn__ico--state" src="~assets/img/icons/ico-heart.svg" alt="좋아요 버튼">
                        <img class="btn__ico--stateOff" src="~assets/img/icons/ico-heart-blank.svg" alt="좋아요 버튼">
                      </div>
                    </button>
                  </div>
                  <div class="card__user page">
                    <p class="card__userImg page__img page__shadowThin">
                      <img :src="itemCard.userImgUrl" :alt="itemCard.userName">
                    </p>
                    <p  @click.stop="$router.push('/myPage/userItem/home')" class="card__userName">
                      {{itemCard.userName}}
                    </p>
                  </div>
                  <div to="detail" class="card__info">
                    <p 
                      v-if="itemCard.itemState == '진행중'"
                      class="card__time card__time--ing">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '진행예정'"
                      class="card__time card__time--soon">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료임박'"
                      class="card__time card__time--hurry">
                      {{itemCard.itemTime}}
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == '종료'"
                      class="card__time card__time--end">
                      판매 종료된 아이템 입니다.
                    </p>
                    <p 
                      v-else-if="itemCard.itemState == ''"
                      class="card__time card__time--infinity">
                      팜매 기간이 없는 아이템 입니다.
                    </p>
                    <p class="card__price">
                      {{itemCard.itemPrice}}
                      <span>KRW</span>
                    </p>
                  </div>
              </div>
            </div>
          </li>
        </ul><!-- itemList__cards -->
      </div>
    <div class="comment container__inner--max">
      <div class="comment__top comment__inner">댓글 &nbsp;<span>{{commentList.length}}</span></div>
      <ul class="comment__list">
        <li
          v-for="item in commentList"
          :key="item">
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

    </div>
  </div><!-- auctionDetail -->
</template>

<script>
  import { 
    Hooper, 
    Slide,
    Pagination as HooperPagination,    //슬라이드 페이저
    Navigation  as HooperNavigation,  //슬라이드 화살표
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  import PriceOffer from '@/modal/priceOffer'    // 가격제안 모달
  export default {
    name : 'marketPlaceDetail',
    // layout: 'default',
    components:{
      Hooper, 
      Slide,
      HooperPagination,
      HooperNavigation,
      PriceOffer,
    },
    data: () => ({
      // 아이템 기본 정보
      itemName      :'HAKAI.PT2_S Canvas Print',                  // 아이템 이름
      userName      :'GHARLIERA',                                 // 판매자 이름
      itemPrice     :'60,142',                                    // 아이템 가격
      commission    :'2,900',                                     // 수수료
      totalPrice    :'1,252,900',                                 // 총 금액
      itemComment   :`
        이 상품은 특별한 상품입니다. 떠오르는 크리에이터 작품 
        스페셜 에디션 최고의 아이템이 상품은 특별한 상품입니다. 
        떠오르는 크리에이터 작품 스페셜 에디션 최고의 아이템
        이 상품은 특별한 상품입니다. 떠오르는 크리에이터 작품 
        스페셜 에디션 최고의 아이템이 상품은 특별한 상품입니다. 
        떠오르는 크리에이터 작품 스페셜 에디션 최고의 아이템
        이 상품은 특별한 상품입니다. 떠오르는 크리에이터 작품 
        스페셜 에디션 최고의 아이템이 상품은 특별한 상품입니다. 
        떠오르는 크리에이터 작품 스페셜 에디션 최고의 아이템
        이 상품은 특별한 상품입니다. 떠오르는 크리에이터 작품 
        스페셜 에디션 최고의 아이템이 상품은 특별한 상품입니다. 
        떠오르는 크리에이터 작품 스페셜 에디션 최고의 아이템`,                         // 아이템 설명
      itemTime      :'01D : 13 : 47 : 30',                        // 아이템 남은 시간
      itemTimeStart :'2022년 03월 16일 12시',                       // 판매 기간 시작
      itemTimeEnd   :'2022년 03월 17일 23시 59분',                   // 판매 기간 끝
      itemImgUrl    :require('assets/./img/test/test-card1.png'),           // 아이템 이미지
      userImgUrl    :require('assets/./img/test/test-card8.png'),           // 판매 유저 이미지
      itemState     :'진행중',                                      // 판매 상태
      itemLikeCount :'1,829',                                     // 좋아요 수
      endEdition    :'100',                                       // 마지막 에디션 숫자
      TotalEdition  :'100',                                       // 총 에디션 갯수
      NowEdition    :'1',                                         // 현재 에디션

      // 에디션 정보 표
      editionDate   :'2022.03.15 14:38',                          // 거래일시
      editionMarket :'무야호상점',                                   // 마켓
      editionSeller :'GHARLIERA',                                 // 판매자
      editionOwner  :'룰루랄라무야호',                                // 소유자
      editionPrice  :'1,250,000',                                 // 금액

      // 체인정보
      contractAddr  :'agdkajgdajgl151353gadskdja1142351glkdjslkg',// 컨텍트 주소
      tokenId       :'',                                          // 토큰 아이디

      // 가격 제안 현황 표
      tableInfo     : [                                           // 현제 에디션
        {
          edition   :'10',
          price     :'150,000',
          highPrice :'250,000',
        },
        {
          edition   :'1001',
          price     :'1,150,000',
          highPrice :'1,250,000',
        },
        {
          edition   :'100',
          price     :'10,150,000',
          highPrice :'1,110,250,000',
        },
        {
          edition   :'10002',
          price     :'1,100,000,000',
          highPrice :'1,100,250,000',
        },
        {
          edition   :'10',
          price     :'150,000',
          highPrice :'250,000',
        },
        {
          edition   :'1001',
          price     :'1,150,000',
          highPrice :'1,250,000',
        },
        {
          edition   :'100',
          price     :'10,150,000',
          highPrice :'1,110,250,000',
        },
        {
          edition   :'10002',
          price     :'1,100,000,000',
          highPrice :'1,100,250,000',
        },
      ],
      tableTotalInfo: [                                           // 전체 에디션
        {
          edition   :'1',
          price     :'50,000',
          highPrice :'50,000',
        },
        {
          edition   :'10',
          price     :'150,000',
          highPrice :'250,000',
        },
        {
          edition   :'1000',
          price     :'50,000',
          highPrice :'10,250,000',
        },
        {
          edition   :'102',
          price     :'100,000',
          highPrice :'250,000',
        },
        {
          edition   :'1',
          price     :'50,000',
          highPrice :'50,000',
        },
        {
          edition   :'10',
          price     :'150,000',
          highPrice :'250,000',
        },
        {
          edition   :'1000',
          price     :'50,000',
          highPrice :'10,250,000',
        },
        {
          edition   :'102',
          price     :'100,000',
          highPrice :'250,000',
        },
      ],
      
      // 최근 거래 체결가 표
      tableRecent   : [                                            // 리스트
        {
          date      :'2022.03.15 14:38',
          edition   :'10',
          conclusion:'250,000',
        },
        {
          date      :'2022.03.15 14:38',
          edition   :'10',
          conclusion:'250,000',
        },
        {
          date      :'2022.03.15 14:38',
          edition   :'10',
          conclusion:'250,000',
        }
      ],

      // 판매자의 다른 아이템 카드
      itemInfo      : [
        {
          itemName  :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'60,142',
          itemTime  :'01D:13:47:30',
          itemImgUrl:require('assets/./img/test/test-card1.png'),
          userImgUrl:require('assets/./img/test/test-card8.png'),
          itemState :'진행중',
        },
        {
          itemName  :'HAKAI.PT2_S',
          userName  :'GHARLIERA',
          itemPrice :'50,000',
          itemTime  :'03D:11:49:30',
          itemImgUrl:require('assets/./img/test/test-card2.png'),
          userImgUrl:require('assets/./img/test/test-card6.png'),
          itemState :'종료임박',
        },
        {
          itemName  :'짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
          userName  :'GHARLIERA',
          itemPrice :'100,000',
          itemTime  :'2022.04.02 PM.12:00',
          itemImgUrl:require('assets/./img/test/test-card3.png'),
          userImgUrl:require('assets/./img/test/test-card7.png'),
          itemState :'진행예정',
        },
        {
          itemName   :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
        },
        {
          itemName   :'HAKAI.PT2_S Canvas Print',
          userName  :'GHARLIERA',
          itemPrice :'1,000,000',
          itemTime  :'00D:03:00:30',
          itemImgUrl:require('assets/./img/test/test-card4.png'),
          userImgUrl:require('assets/./img/test/test-card1.png'),
          itemState :'진행중',
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
      acceptBtn             : true,   // 확인 버튼    -> 아이템 상태에 따른
      switchActive          : true,   // 탭 버튼     -> 가격 제안 현황
      switchActiveConclusion: true,   // 탭 버튼     -> 최근 거래 체결가
      setActive             : false,  // 좋아요 버튼  -> 페이지
      setPageActive         : false,  // 좋아요 버튼  -> 카드

      // 모달
      priceModal            :false,    // 모달 on,off

      // 판매자의 다른 nft 정보
      hooperSetting: {
        itemsToShow     : 4,       // 슬라이드 보이는 개수
        centerMode      : true,    // 센터 모드
        //autoPlay      : true,    // 슬라이드 자동 넘김
        playSpeed       : 4000,    // 슬라이드 속도
        infiniteScroll  : true,    // 무한 스크롤 모드
        wheelControl    : false,   // 스크롤 슬라이드 넘김 방지
        hoverPause      : true,    // 호버시 슬라이드 멈춤
        
      },
    }),
    methods : {
      // 모달 닫기 버튼
      confirm(){
        setTimeout(() => {
          this.priceModal = false
        }, 1200);
      },
      closeModal(){
        this.priceModal   = false
      },
      // 좋아요 버튼  -> 페이지
      pageLike(){
        this.setPageActive = !this.setPageActive
      },
      // 좋아요 버튼  -> 카드
      likeBtn(idx, event){
        event.target.classList.toggle('active');
      },
    }
  }
</script>
