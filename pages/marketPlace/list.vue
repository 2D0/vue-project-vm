<template>
  <div class="marketPlace listPage container__inner--max container__inner--padding">
      <div class="listPage__cont">
          <div class="listPage__cont--top page__margin--mid">
            <p class="listPage__cont--tit">
              <span>NFT 마켓 판매</span>
            </p>
            <div class="page__search">
              <div class="modalNftList__search--inner page__search--inner">
                <input type="text" placeholder="검색어를 입력해주세요.">
                <NuxtLink
                  to="/marketPlace/list"
                >
                  <span class="page__img">
                    <img src="~assets/img/icons/ico-search.svg" alt="검색 버튼">
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="listPage__bar page__margin--mid">
            <div class="listPage__bar--info">
              <div class="listPage__bar--count">
                총 <span class="page__color--blue">{{marketItem.length}}</span>개의 상품이 있습니다.
              </div>
              <div class="listPage__select">
                <div>
                <button
                  class="listPage__select--pick"
                  @click="selectBtn"
                  type="button"
                >
                  <span>{{selectName}}</span>
                  <p 
                    :class="{active: selectMenu}"
                    class="side__more--arrow">
                    <i class="side__more--top"></i>
                    <i class="side__more--bottom"></i>
                  </p>
                </button>
                </div>
                <ul
                  :style="`height:${selectMenu ? 40 * menu.length : 0}px`"
                  class="listPage__select--option">
                  <li
                    v-for="(item, idx) in menu"
                    :key="idx"
                    @click="menuActive(idx)"
                  >
                    <button
                    :class="{active: menuId == idx}"
                    >
                      {{item.name}}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="listPage__info--modal">
            <button 
              @click="sideMenu = true"
              class="listPage__info--btn">
              <span>FILTER</span>
              <img src="~assets/img/icons/ico-filter.svg" alt="필터 버튼">
            </button>
            <FilterMenu
              :filterOpen="sideMenu"
              @close="closeBtn"
            ></FilterMenu>
          </div>
          <ul class="itemList__cards">
            <li 
              v-for="(itemCard, idx) in marketItem.slice(0, 20)"
              :key="idx.id" 
              class="itemList__card"
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
          </ul>
          <button class="itemList__more">
            MORE
            <span class="itemList__more--arrow">
              <i class="itemList__more--top"></i>
              <i class="itemList__more--bottom"></i>
            </span>
          </button>
      </div><!-- listPage__cont -->
  </div><!-- marketPlace -->
</template>

<script>
  import FilterMenu  from '@/blockComponents/filterMenu';// 필터
  import feed from "@/assets/constant/feed";

  console.log(feed);

  export default {
    name : 'marketPlaceList',
    // layout: 'default',
    components: {
      FilterMenu
    },
    data: () => (
        {
          ...feed
        }
    ),
    methods : {
      // 아이템 순서 셀렉트 박스
      selectBtn(){
        this.selectMenu = !this.selectMenu;
      },
      selectPick(){
      },
      // 아이템 순서 메뉴 active
      menuActive(idx){
        this.menuId = idx;
        this.selectName = this.menu[idx].name;
        this.selectMenu = false;
      },
      // 아이템 종류 메뉴 active (다중선택)
      filterActive(idx, event){
        event.target.classList.toggle('active');
      },
      // 좋아요 버튼  -> 카드
      likeBtn(idx, event){
        event.target.classList.toggle('active');
      },
      closeBtn(){
        this.sideMenu = false
      }
    }

    
  }
</script>
