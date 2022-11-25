<template>
  <transition name="moreModal">
      <div class="side__mobile--nav">
        <div
            :class="{active: filterOpen}"
            class="side__mobile--sideMenu side__mobile--sideMenu--left page__shadow">
          <h3 class="side__mobile--tit">
            Filter
            <img src="~assets/img/icons/ico-filter.svg" alt="필터">
          </h3>
          <div
            @click="itemState"
            class="side__more">
            <button class="side__more--tit side__mobile--menu">
              <span>Item State</span>
              <p 
                :class="{active: stateActive == true}"
                class="side__more--arrow">
                <i class="side__more--top"></i>
                <i class="side__more--bottom"></i>
              </p>
            </button>
          </div>
          <ul
            :style="stateActive == true ? `height:${45 * state.length}px` : 'height:0'"
            class="side__mobile--menuList side__mobile--toggle">
            <li
              v-for="(item, idx) in state"
              :key="idx"
              @click="stateBtn(idx)">
              <button
                :class="{active:sateId == idx}"
                class="side__mobile--menu">
                <span>{{item.name}}</span>
              </button>
            </li>
          </ul>
          <!-- <div
            @click="itemType"
            class="side__more">
            <button class="side__more--tit side__mobile--menu">
              <span>Item Type</span>
              <p 
                :class="{active: typeActive == true}"
                class="side__more--arrow">
                <i class="side__more--top"></i>
                <i class="side__more--bottom"></i>
              </p>
            </button>
          </div>
          <ul 
          :style="typeActive == true ? `height:${45 * type.length}px` : 'height:0'"
          class="side__mobile--menuList side__mobile--toggle">
            <li
              v-for="(item, idx) in type"
              :key="idx"
              class="side__mobile--label agreeLayout__check">
              <input
                :id="idx"
                type="checkbox"
                true-value="true"
                false-value="false"
                name="agreeAll"
              >
              <label
                :for="idx">
                <span class="agreeLayout__checkBox">체크박스</span>
                <span>{{item.name}}</span>
              </label>
            </li>
          </ul> -->
        </div>
        <div
          @click="closeBtn"
          :class="{active: filterOpen}"
          class="side__mobile--back"
        >
          배경
        </div>
      </div>
  </transition>
</template>

<script>
export default {
  name: 'filterMenu',
  props:{
    filterOpen       :Boolean,
  },
  data: () => ({
    stateActive      : true,
    typeActive       : true,
    sateId           : 0,    // 아이템 상태 정렬 아이디
    state:[
      {name:'전체 상품'},
      {name:'진행중 상품'},
      {name:'종료 상품'},
      {name:'새 상품'},
      {name:'인기 상품'},
      {name:'일별 거래량'},
      {name:'낮은 가격'},
      {name:'높은 가격'}
    ],
    type:[
      {name:'유튜브'},
      {name:'일러스트'},
      {name:'사진'},
      {name:'영상'},
      {name:'음악'},
    ],
  }),
  methods: {
    stateBtn(idx){
      this.sateId = idx;
    },
    // 아이템 상태 열기
    itemState(){
      this.stateActive == true ?
      this.stateActive =  false:
      this.stateActive =  true;
    },
    // 아이템 타입 열기
    itemType(){
      this.typeActive == true ?
      this.typeActive =  false:
      this.typeActive =  true
    },
    // 모달창 닫기 버튼
    closeBtn(){
      this.$emit('close')
    },
  }
}
</script>

<style>

</style>