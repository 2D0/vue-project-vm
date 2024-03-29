export default {
// 정보
  itemCount : 101,    // 총 아이템 개수
  menuId    :0,       // 아이템 상태 정렬 아이디
  selectMenu:false,   // 상품 정렬 셀렉트 박스
  sideMenu  :false,   // 사이드 메뉴 on off
  selectName:'전체상품',
  // 기능
  setActive : false,  // 좋아요 버튼  -> 카드

  // 아이템 순서 정렬
  menu: [
    {name: '전체상품'},
    {name: '진행중상품'},
    {name: '종료상품'},
    {name: '새상품'},
    {name: '인기상품'},
    {name: '일별거래량'},
    {name: '낮은가격'},
    {name: '높은가격'}
  ],
      // 아이템 종류
      /* filter: [
        {name  :'유튜브'},
        {name  :'일러스트'},
        {name  :'사진'},
        {name  :'영상'},
        {name  :'음악'}
      ], */
      // 판매자의 다른 아이템 카드
      marketItem: [
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell straight',
      itemImgUrl: require('assets/./img/test/test-card1.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell straight',
      itemImgUrl: require('assets/./img/test/test-card3.png'),
      userImgUrl: require('assets/./img/test/test-card7.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell straight',
      itemImgUrl: require('assets/./img/test/test-card4.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card5.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card8.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card7.png'),
      userImgUrl: require('assets/./img/test/test-card3.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card1.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card3.png'),
      userImgUrl: require('assets/./img/test/test-card7.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card4.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card5.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card8.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: '1274',
      itemImgUrl: require('assets/./img/test/test-card7.png'),
      userImgUrl: require('assets/./img/test/test-card3.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: '1274',
      itemImgUrl: require('assets/./img/test/test-card1.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card3.png'),
      userImgUrl: require('assets/./img/test/test-card7.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card4.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card5.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card8.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card7.png'),
      userImgUrl: require('assets/./img/test/test-card3.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card1.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card3.png'),
      userImgUrl: require('assets/./img/test/test-card7.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card4.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card5.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card8.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell',
      itemImgUrl: require('assets/./img/test/test-card7.png'),
      userImgUrl: require('assets/./img/test/test-card3.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell 1274',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell 1274',
      itemImgUrl: require('assets/./img/test/test-card1.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell 1274',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: 'lowell 1274',
      itemImgUrl: require('assets/./img/test/test-card3.png'),
      userImgUrl: require('assets/./img/test/test-card7.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: 'lowell 1274',
      itemImgUrl: require('assets/./img/test/test-card4.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
    {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      owner: 'lowell 1274',
      itemImgUrl: require('assets/./img/test/test-card5.png'),
      userImgUrl: require('assets/./img/test/test-card8.png'),
      itemState: '진행중',
      kinds: 'photo',
    },
    {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      owner: 'lowell 1274',
      itemImgUrl: require('assets/./img/test/test-card8.png'),
      userImgUrl: require('assets/./img/test/test-card6.png'),
      itemState: '종료임박',
      kinds: 'video',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      owner: '1274',
      itemImgUrl: require('assets/./img/test/test-card7.png'),
      userImgUrl: require('assets/./img/test/test-card3.png'),
      itemState: '진행예정',
      kinds: 'music',
    },
    {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '00D:09:21:08',
      owner: '1274',
      itemImgUrl: require('assets/./img/test/test-card2.png'),
      userImgUrl: require('assets/./img/test/test-card1.png'),
      itemState: '종료',
      kinds: 'music',
    },
  ]
}