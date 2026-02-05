import type { TabType } from '@shared/types/type';

interface MenuItem {
  corner: string;
  price: number;
  menu: string[];
  kcal: number;
}

export const MOCK_MENU_DATA: Record<TabType, Record<number, MenuItem[]>> = {
  // 학생회관: A코너, B코너, PLUS
  studentHall: {
    2: [
      {
        corner: 'A코너',
        price: 5500,
        menu: ['쌀밥', '아욱국', '고추장불고기', '콩나물무침'],
        kcal: 710,
      },
      {
        corner: 'B코너',
        price: 6000,
        menu: ['돈까스', '크림스프', '후실리샐러드'],
        kcal: 820,
      },
      {
        corner: 'PLUS',
        price: 7000,
        menu: ['삼겹살정식', '쌈채소', '된장찌개'],
        kcal: 950,
      },
    ],
    3: [
      {
        corner: 'A코너',
        price: 5500,
        menu: ['현미밥', '순두부찌개', '간장찜닭', '부추무침'],
        kcal: 685,
      },
      {
        corner: 'B코너',
        price: 6000,
        menu: ['스파게티', '마늘빵', '그린샐러드'],
        kcal: 750,
      },
      {
        corner: 'PLUS',
        price: 7000,
        menu: ['비빔밥뷔페', '계란후라이', '유부장국'],
        kcal: 620,
      },
    ],
    4: [
      {
        corner: 'A코너',
        price: 5500,
        menu: ['흑미밥', '콩나물국', '안동찜닭', '무생채'],
        kcal: 690,
      },
      {
        corner: 'B코너',
        price: 6000,
        menu: ['카레라이스', '치킨가라아게', '요구르트'],
        kcal: 780,
      },
      {
        corner: 'PLUS',
        price: 7000,
        menu: ['한우육회비빔밥', '미역국', '매실차'],
        kcal: 650,
      },
    ],
    5: [
      // 목요일 (오늘)
      {
        corner: 'A코너',
        price: 5500,
        menu: ['쌀밥', '소고기무국', '오징어볶음', '감자조림'],
        kcal: 705,
      },
      {
        corner: 'B코너',
        price: 6000,
        menu: ['함박스테이크', '모닝빵', '콘샐러드'],
        kcal: 890,
      },
      {
        corner: 'PLUS',
        price: 7000,
        menu: ['갈비탕', '석박지', '오징어젓갈'],
        kcal: 820,
      },
    ],
    6: [
      {
        corner: 'A코너',
        price: 5500,
        menu: ['현미밥', '김치찌개', '바싹불고기', '쌈채소'],
        kcal: 730,
      },
      {
        corner: 'B코너',
        price: 6000,
        menu: ['생선까스', '타르타르소스', '미니우동'],
        kcal: 710,
      },
      {
        corner: 'PLUS',
        price: 7000,
        menu: ['전주비빔밥', '콩나물국', '약과'],
        kcal: 680,
      },
    ],
    7: [
      {
        corner: 'A코너',
        price: 5500,
        menu: ['김치볶음밥', '계란후라이', '팽이버섯국'],
        kcal: 580,
      },
    ],
  },

  // 용오름: A코너, B코너
  yongoreum: {
    2: [
      {
        corner: 'A코너',
        price: 7000,
        menu: ['규동(소고기덮밥)', '미소장국', '단무지'],
        kcal: 720,
      },
      {
        corner: 'B코너',
        price: 7500,
        menu: ['매운철판닭갈비', '무쌈', '냉국'],
        kcal: 810,
      },
    ],
    3: [
      {
        corner: 'A코너',
        price: 7000,
        menu: ['가츠동', '우동국물', '초생강'],
        kcal: 780,
      },
      {
        corner: 'B코너',
        price: 7500,
        menu: ['제육덮밥', '계란찜', '깍두기'],
        kcal: 850,
      },
    ],
    4: [
      {
        corner: 'A코너',
        price: 7000,
        menu: ['데리야끼치킨덮밥', '샐러드', '장국'],
        kcal: 740,
      },
      {
        corner: 'B코너',
        price: 7500,
        menu: ['오삼불고기덮밥', '콩나물국', '겉절이'],
        kcal: 830,
      },
    ],
    5: [
      // 오늘
      {
        corner: 'A코너',
        price: 7000,
        menu: ['스테이크덮밥', '와사비', '미소국'],
        kcal: 690,
      },
      {
        corner: 'B코너',
        price: 7500,
        menu: ['낙지비빔밥', '콩자반', '백김치'],
        kcal: 720,
      },
    ],
    6: [
      {
        corner: 'A코너',
        price: 7000,
        menu: ['에비동(새우덮밥)', '단무지', '장국'],
        kcal: 760,
      },
      {
        corner: 'B코너',
        price: 7500,
        menu: ['짜장덮밥', '군만두', '짬뽕국물'],
        kcal: 910,
      },
    ],
    7: [],
  },

  // 생활관: 조식, 중식, 석식
  dormitory: {
    2: [
      {
        corner: '조식',
        price: 5000,
        menu: ['토스트', '시리얼', '우유', '스크램블에그'],
        kcal: 520,
      },
      {
        corner: '중식',
        price: 5500,
        menu: ['보리밥', '청국장', '자반고등어구이'],
        kcal: 640,
      },
      {
        corner: '석식',
        price: 5500,
        menu: ['쌀밥', '부대찌개', '라면사리', '감자채볶음'],
        kcal: 810,
      },
    ],
    3: [
      {
        corner: '조식',
        price: 5000,
        menu: ['모닝빵', '단호박죽', '요거트', '삶은계란'],
        kcal: 480,
      },
      {
        corner: '중식',
        price: 5500,
        menu: ['현미밥', '미역국', '안동찜닭', '겉절이'],
        kcal: 670,
      },
      {
        corner: '석식',
        price: 5500,
        menu: ['짜장면', '미니탕수육', '단무지', '짬뽕국'],
        kcal: 950,
      },
    ],
    4: [
      {
        corner: '조식',
        price: 5000,
        menu: ['샌드위치', '과일샐러드', '오렌지쥬스'],
        kcal: 510,
      },
      {
        corner: '중식',
        price: 5500,
        menu: ['잡곡밥', '닭개장', '두부구이', '깻잎지'],
        kcal: 630,
      },
      {
        corner: '석식',
        price: 5500,
        menu: ['김치볶음밥', '스팸구이', '계란후라이'],
        kcal: 720,
      },
    ],
    5: [
      // 오늘
      {
        corner: '조식',
        price: 5000,
        menu: ['누룽지', '진미채', '멸치볶음', '김구이'],
        kcal: 450,
      },
      {
        corner: '중식',
        price: 5500,
        menu: ['쌀밥', '꽃게탕', '너비아니구이', '포기김치'],
        kcal: 660,
      },
      {
        corner: '석식',
        price: 5500,
        menu: ['돈까스덮밥', '우동', '깍두기', '샐러드'],
        kcal: 840,
      },
    ],
    6: [
      {
        corner: '조식',
        price: 5000,
        menu: ['팬케이크', '베이컨', '해쉬브라운', '커피'],
        kcal: 610,
      },
      {
        corner: '중식',
        price: 5500,
        menu: ['흑미밥', '뼈해장국', '모듬전', '겉절이'],
        kcal: 820,
      },
      {
        corner: '석식',
        price: 5500,
        menu: ['낙지볶음밥', '콩나물국', '계란찜'],
        kcal: 690,
      },
    ],
    7: [
      {
        corner: '조식',
        price: 5000,
        menu: ['죽', '오징어젓갈', '동치미'],
        kcal: 410,
      },
      {
        corner: '중식',
        price: 5500,
        menu: ['카레라이스', '미소국', '소시지볶음'],
        kcal: 710,
      },
      {
        corner: '석식',
        price: 5500,
        menu: ['잔치국수', '주먹밥', '겉절이'],
        kcal: 620,
      },
    ],
  },
};
