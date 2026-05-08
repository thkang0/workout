import { useState } from "react";

const schedule = [
  {
    day: "월요일",
    theme: "어깨 & 상체 근력",
    icon: "💪",
    accent: "#4FC3F7",
    focus: "포핸드·서브 파워",
    noiseNote: "점프 없음 · 발소리 없음",
    exercises: [
      {
        name: "밴드 외회전 (어깨)",
        sets: "3세트", reps: "15회",
        tip: "팔꿈치 90도 고정, 천천히 컨트롤",
        tennis: "서브·스매시 안정성",
        howTo: [
          "팔꿈치를 90도로 굽혀 옆구리에 붙입니다",
          "밴드를 두 손으로 잡고 바깥 방향으로 천천히 돌립니다",
          "3초에 걸쳐 돌리고 천천히 되돌아옵니다",
          "어깨가 아닌 회전근개에 집중해서 느끼세요",
        ],
        ytUrl: "https://www.youtube.com/watch?v=9qaTGhVz--Q",
        ytLabel: "두드림정형외과 — 밴드 어깨 외회전",
      },
      {
        name: "아령 레터럴 레이즈",
        sets: "3세트", reps: "12회",
        tip: "5kg, 팔꿈치 살짝 굽혀 천천히 올리기",
        tennis: "어깨 너비 & 스윙 파워",
        howTo: [
          "양발 어깨 너비, 아령을 양손에 들고 섭니다",
          "팔꿈치를 살짝 굽혀 고정한 채 팔을 옆으로 올립니다",
          "어깨 높이까지만 올리고 3초 유지 후 천천히 내립니다",
          "승모근이 아닌 삼각근 측면에 자극을 집중하세요",
        ],
        ytUrl: "https://www.youtube.com/watch?v=HshUmMyXCGM",
        ytLabel: "사이드 레터럴 레이즈 완벽 자세",
      },
      {
        name: "아령 프론트 레이즈",
        sets: "3세트", reps: "12회",
        tip: "3~4초에 걸쳐 천천히 내리기",
        tennis: "포핸드 팔로우스루",
        howTo: [
          "아령을 허벅지 앞에 두고 섭니다",
          "팔을 앞으로 어깨 높이까지 올립니다",
          "천천히 4초에 걸쳐 내려옵니다",
          "허리가 흔들리지 않게 코어를 고정하세요",
        ],
        ytUrl: "https://www.youtube.com/watch?v=LOlJt85vMIQ",
        ytLabel: "리쌤 — 밴드 어깨 홈트",
      },
      {
        name: "밴드 페이스 풀",
        sets: "3세트", reps: "15회",
        tip: "귀 높이로 당기기, 후면 삼각근 집중",
        tennis: "회전근개 보호",
        howTo: [
          "밴드를 문손잡이나 고정물에 걸고 얼굴 높이에서 잡습니다",
          "팔꿈치를 높게 들어올린 상태에서 귀 쪽으로 당깁니다",
          "견갑골이 모이는 느낌으로 2초 유지 후 천천히 돌아옵니다",
          "팔꿈치가 내려가지 않게 주의하세요",
        ],
        ytUrl: "https://www.youtube.com/watch?v=B7zOfA7dx4E",
        ytLabel: "밴드 어깨 근육 강화 (외회전·페이스풀)",
      },
      {
        name: "아령 숄더 프레스 (앉아서)",
        sets: "3세트", reps: "10회",
        tip: "의자에 앉아서 진행 — 발소리 완전 차단",
        tennis: "서브 파워 향상",
        howTo: [
          "의자에 앉아 등을 곧게 세웁니다",
          "아령을 귀 옆 높이로 들고 시작합니다",
          "천장을 향해 천천히 밀어 올립니다",
          "팔꿈치가 완전히 펴지기 직전에 내려옵니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=LOlJt85vMIQ",
        ytLabel: "리쌤 — 홈 어깨 운동",
      },
    ],
    duration: "25분",
  },
  {
    day: "화요일",
    theme: "코어 & 회전력",
    icon: "🔄",
    accent: "#FFB74D",
    focus: "스윙 회전력",
    noiseNote: "바닥 운동 위주 · 매트 필수",
    exercises: [
      {
        name: "레그레이즈 (누워서)",
        sets: "3세트", reps: "15회",
        tip: "매트 위에서 천천히 — 소리 전혀 없음",
        tennis: "코어 & 하체 연결",
        howTo: [
          "매트에 등을 대고 눕고 손은 엉덩이 아래에 받칩니다",
          "다리를 붙인 채 천천히 90도까지 올립니다",
          "허리가 뜨지 않게 복압을 유지하면서 천천히 내립니다",
          "다리가 바닥에 닿기 직전에 멈추고 다시 올립니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "허리통증 없이 레그레이즈·플랭크 하는 법",
      },
      {
        name: "밴드 우드찹 (서서 천천히)",
        sets: "3세트", reps: "12회/방향",
        tip: "발을 바닥에 고정, 상체만 회전 — 발소리 없이",
        tennis: "포핸드·백핸드 회전 근육",
        howTo: [
          "밴드를 높게 고정하고 대각선으로 당깁니다",
          "포핸드 스윙과 동일한 궤적으로 아래 대각선으로 당깁니다",
          "발은 고정한 채 상체와 코어만 회전합니다",
          "반대 방향도 동일하게 진행합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "코어 회전 운동 가이드",
      },
      {
        name: "플랭크 (팔꿈치)",
        sets: "3세트", reps: "45초",
        tip: "팔꿈치 플랭크로 소음 완전 차단",
        tennis: "전체 스윙 안정성",
        howTo: [
          "팔꿈치와 발끝으로만 몸을 지탱합니다",
          "머리부터 발끝까지 일직선을 유지합니다",
          "엉덩이가 올라가거나 내려가지 않게 주의합니다",
          "호흡을 멈추지 말고 복근에 계속 힘을 줍니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "허리통증 없이 플랭크 하는 법",
      },
      {
        name: "사이드 플랭크",
        sets: "3세트", reps: "30초/방향",
        tip: "매트 위에서 — 정적 운동으로 완전 무음",
        tennis: "측면 코어 & 스윙 균형",
        howTo: [
          "옆으로 누워 팔꿈치로 몸을 지탱합니다",
          "엉덩이를 들어 몸이 일직선이 되게 합니다",
          "골반이 내려가지 않게 옆구리 코어에 집중합니다",
          "좌우 각 30초씩 진행합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "코어 운동 완전 가이드",
      },
      {
        name: "러시안 트위스트 (아령)",
        sets: "3세트", reps: "20회",
        tip: "엉덩이 들지 않고 천천히 좌우 회전",
        tennis: "측면 회전 파워",
        howTo: [
          "무릎을 굽혀 앉아 상체를 45도 뒤로 기울입니다",
          "아령을 양손으로 잡고 좌우로 천천히 회전합니다",
          "각 방향으로 이동할 때 2초씩 천천히 움직입니다",
          "시선은 아령을 따라가도록 합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "코어 & 복근 운동 가이드",
      },
    ],
    duration: "25분",
  },
  {
    day: "수요일",
    theme: "하체 (저소음)",
    icon: "🦵",
    accent: "#CE93D8",
    focus: "풋워크 & 하체 근력",
    noiseNote: "점프 완전 제거 · 슬로우 스쿼트",
    exercises: [
      {
        name: "슬로우 스쿼트 (5초 내려가기)",
        sets: "4세트", reps: "12회",
        tip: "내려갈 때 5초, 올라올 때 2초 — 발소리 없음",
        tennis: "기본 자세 & 하체 근력",
        howTo: [
          "발을 어깨 너비로 벌리고 발끝은 약간 바깥쪽으로 향합니다",
          "가슴을 펴고 엉덩이를 뒤로 빼면서 5초에 걸쳐 내려앉습니다",
          "허벅지가 바닥과 평행이 될 때까지 내려갑니다",
          "2초에 걸쳐 천천히 올라오고 무릎을 완전히 펴지는 않습니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "슬로우 스쿼트 자세 가이드",
      },
      {
        name: "월 싯 (벽 스쿼트)",
        sets: "3세트", reps: "45초",
        tip: "벽에 등 기대고 허벅지가 바닥과 평행 유지",
        tennis: "버티는 하체 근지구력",
        howTo: [
          "벽에서 50~60cm 떨어진 위치에 등을 기댑니다",
          "천천히 내려앉아 무릎 90도, 허벅지 바닥과 평행을 만듭니다",
          "무게중심은 발뒤꿈치, 허리는 벽에 밀착합니다",
          "45초 버티고 10초 휴식 후 반복합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "월싯 운동 효과와 방법",
      },
      {
        name: "밴드 사이드 스텝",
        sets: "3세트", reps: "15회/방향",
        tip: "발을 살살 옮기며 — 양말 착용 시 소음 최소화",
        tennis: "측면 스텝 & 회복력",
        howTo: [
          "밴드를 무릎 위 허벅지에 걸고 무릎을 약간 굽힙니다",
          "테니스 준비 자세처럼 살짝 앉은 채 옆으로 천천히 스텝합니다",
          "발을 끌지 말고 들어서 옮겨 소음을 최소화합니다",
          "좌우 각 15회 왕복합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "밴드 하체 운동 가이드",
      },
      {
        name: "루마니안 데드리프트 (아령)",
        sets: "3세트", reps: "12회",
        tip: "허리 일직선, 느리게 내리고 올리기",
        tennis: "폭발적 하체 구동 준비",
        howTo: [
          "아령을 양손에 들고 어깨 너비로 섭니다",
          "무릎을 살짝 굽힌 채 엉덩이를 뒤로 빼며 상체를 숙입니다",
          "허리가 굽지 않게 등을 일직선으로 유지합니다",
          "아령이 무릎 아래로 내려갈 때 햄스트링이 당기는 느낌을 확인합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "홈트 하체 근력 가이드",
      },
      {
        name: "카프 레이즈 (천천히)",
        sets: "3세트", reps: "20회",
        tip: "발끝으로 올라가서 3초 유지 후 천천히 내리기",
        tennis: "발목 안정성",
        howTo: [
          "벽이나 의자를 가볍게 짚고 섭니다",
          "발끝으로 최대한 높이 올라가 3초 유지합니다",
          "천천히 3초에 걸쳐 내려옵니다",
          "발뒤꿈치가 바닥에 닿기 직전에 다시 올라갑니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "카프레이즈 & 발목 강화",
      },
    ],
    duration: "25분",
  },
  {
    day: "목요일",
    theme: "등 & 풀업",
    icon: "🏋️",
    accent: "#80CBC4",
    focus: "백핸드 & 서브 근육",
    noiseNote: "풀업은 조용히 · 착지 주의",
    exercises: [
      {
        name: "턱걸이 — 네거티브",
        sets: "4세트", reps: "5~8회",
        tip: "올라갈 때 1초, 내려올 때 4~5초 천천히",
        tennis: "서브 & 오버헤드 파워",
        howTo: [
          "철봉을 어깨 너비보다 약간 넓게 오버그립으로 잡습니다",
          "어깨를 아래로 내리고(숄더 패킹) 가슴을 철봉 방향으로 당깁니다",
          "올라올 때는 빠르게, 내려갈 때는 4~5초에 걸쳐 천천히 내립니다",
          "완전히 내려올 때 어깨가 귀에 닿지 않게 유지합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "초보자 턱걸이·네거티브 방법",
      },
      {
        name: "밴드 로우 (앉아서)",
        sets: "3세트", reps: "15회",
        tip: "의자나 바닥에 앉아서 밴드 당기기 — 무음",
        tennis: "백핸드 파워",
        howTo: [
          "바닥에 앉아 다리를 뻗고 밴드를 발에 걸어 잡습니다",
          "등을 곧게 세우고 팔꿈치를 뒤로 당깁니다",
          "견갑골이 모이는 느낌으로 2초 유지 후 천천히 풀어줍니다",
          "허리가 굽지 않게 복근에 힘을 줍니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=LOlJt85vMIQ",
        ytLabel: "밴드 등 운동 홈트",
      },
      {
        name: "아령 원암 로우",
        sets: "3세트", reps: "12회/팔",
        tip: "소파나 의자에 무릎 대고 — 아령 내릴 때 천천히",
        tennis: "일측 근력 균형",
        howTo: [
          "소파나 의자에 한 손과 한 무릎을 올려 등을 수평으로 만듭니다",
          "반대 손으로 아령을 잡고 팔꿈치를 뒤 위쪽으로 당깁니다",
          "팔꿈치가 몸통을 지날 때 광배근이 수축되는 느낌에 집중합니다",
          "4초에 걸쳐 천천히 내립니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=LOlJt85vMIQ",
        ytLabel: "덤벨 원암 로우 자세",
      },
      {
        name: "레그레이즈 (매달려서)",
        sets: "3세트", reps: "10회",
        tip: "다리 내릴 때 4초 — 흔들리지 않게",
        tennis: "코어 & 하체 연결",
        howTo: [
          "철봉에 매달려 어깨를 내리고 몸을 안정시킵니다",
          "무릎을 펴고 다리를 천천히 90도까지 올립니다",
          "4초에 걸쳐 천천히 내리고 몸이 흔들리지 않게 합니다",
          "허리가 과도하게 젖혀지지 않게 복압을 유지합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "행잉 레그레이즈 자세",
      },
      {
        name: "밴드 Y-W-T 운동",
        sets: "2세트", reps: "10회 각",
        tip: "서서 또는 엎드려서 — 정적에 가까운 운동",
        tennis: "회전근개 & 어깨 안정성",
        howTo: [
          "Y자: 팔을 위 대각선으로 뻗어 Y 모양 — 2초 유지",
          "W자: 팔꿈치를 굽혀 W 모양 — 견갑골 모으기 — 2초 유지",
          "T자: 팔을 옆으로 뻗어 T 모양 — 2초 유지",
          "각 동작 사이 1초 휴식 후 연속으로 진행합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=B7zOfA7dx4E",
        ytLabel: "밴드 어깨 Y-W-T 운동",
      },
    ],
    duration: "25~30분",
  },
  {
    day: "금요일",
    theme: "전완 & 손목 강화",
    icon: "🎾",
    accent: "#EF9A9A",
    focus: "라켓 컨트롤 & 부상 예방",
    noiseNote: "앉아서 전부 가능 · 완전 무음",
    exercises: [
      {
        name: "손목 컬 (아령, 앉아서)",
        sets: "3세트", reps: "15회",
        tip: "전완을 허벅지에 올리고 손목만 굽히기",
        tennis: "스핀 & 라켓 컨트롤",
        howTo: [
          "의자에 앉아 팔뚝을 허벅지 위에 올려놓습니다",
          "손목이 무릎 밖으로 나오게 위치합니다",
          "아령을 잡고 손목만 굽혀 올렸다가 천천히 내립니다",
          "팔뚝은 고정, 손목만 움직이는 것이 포인트입니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "리스트 컬 & 전완근 강화",
      },
      {
        name: "역방향 손목 컬",
        sets: "3세트", reps: "15회",
        tip: "손등이 위를 향하게 — 천천히",
        tennis: "테니스 엘보 예방",
        howTo: [
          "손등이 위를 향하게 아령을 잡고 팔뚝을 허벅지에 올립니다",
          "손목을 위로 들어올렸다가 천천히 내립니다",
          "내릴 때 5초에 걸쳐 천천히 (편심수축이 핵심입니다)",
          "테니스 엘보 예방의 가장 중요한 운동입니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "테니스 엘보 예방 전완근 운동",
      },
      {
        name: "밴드 프로네이션/수피네이션",
        sets: "3세트", reps: "15회/방향",
        tip: "팔꿈치 고정, 손목만 회전",
        tennis: "탑스핀 & 스핀 서브",
        howTo: [
          "팔꿈치를 90도로 굽혀 몸통에 고정합니다",
          "밴드를 잡고 손바닥을 아래로 회전(프로네이션) 15회",
          "이어서 손바닥을 위로 회전(수피네이션) 15회",
          "팔꿈치 위치가 흔들리지 않게 고정하는 것이 핵심입니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=aaNbjzepJuc",
        ytLabel: "삼성서울병원 어깨·손목 재활운동",
      },
      {
        name: "아령 해머 컬 (앉아서)",
        sets: "3세트", reps: "12회",
        tip: "팔꿈치 고정, 천천히 올리고 내리기",
        tennis: "상완근 & 전완 근력",
        howTo: [
          "의자에 앉아 아령을 엄지가 위를 향하게 잡습니다",
          "팔꿈치를 옆구리에 고정한 채 손목을 구부려 올립니다",
          "천천히 3초에 걸쳐 내립니다",
          "양팔 교대 또는 동시에 진행합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "해머컬 & 이두근 운동",
      },
      {
        name: "핑거 익스텐션 (밴드)",
        sets: "3세트", reps: "15회",
        tip: "밴드를 손가락으로 벌리기 — 완전 무음",
        tennis: "그립력 & 손가락 부상 예방",
        howTo: [
          "밴드를 손가락 전체에 걸고 손가락을 모읍니다",
          "손가락을 최대한 벌리며 밴드를 저항합니다",
          "2초 유지 후 천천히 손가락을 모읍니다",
          "테니스 라켓 그립력 향상에 직접적으로 도움됩니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=aaNbjzepJuc",
        ytLabel: "손가락·손목 재활 & 강화 운동",
      },
    ],
    duration: "20분",
  },
  {
    day: "토요일",
    theme: "전신 (저소음 복합)",
    icon: "⚡",
    accent: "#A5D6A7",
    focus: "지구력 & 근지구력",
    noiseNote: "버피·점프 완전 제거 · 슬로우 컨트롤",
    exercises: [
      {
        name: "슬로우 푸시업 (5초 내려가기)",
        sets: "4세트", reps: "10회",
        tip: "내려갈 때 5초, 올라올 때 2초",
        tennis: "가슴·어깨·삼두 통합",
        howTo: [
          "손을 어깨보다 약간 넓게 짚고 시작합니다",
          "5초에 걸쳐 천천히 내려갑니다 (1, 2, 3, 4, 5 세면서)",
          "가슴이 바닥에 닿을 듯 말 듯 내려간 후 2초에 걸쳐 밀어 올립니다",
          "코어와 엉덩이에 힘을 주어 허리가 처지지 않게 합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "슬로우 푸시업 완벽 자세",
      },
      {
        name: "아령 스윙 시뮬레이션",
        sets: "3세트", reps: "15회/방향",
        tip: "포핸드·백핸드 궤적으로 천천히 스윙",
        tennis: "실전 근육 패턴 강화",
        howTo: [
          "아령을 한 손에 들고 테니스 준비 자세를 취합니다",
          "포핸드 스윙 궤적으로 천천히 아령을 움직입니다",
          "임팩트 지점에서 2초 유지 후 천천히 되돌아옵니다",
          "백핸드도 동일하게 진행합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=LOlJt85vMIQ",
        ytLabel: "테니스 근육 홈트레이닝",
      },
      {
        name: "스쿼트 + 해머컬 복합",
        sets: "3세트", reps: "12회",
        tip: "스쿼트 올라오며 해머컬 — 점프 없음",
        tennis: "전신 근력 통합",
        howTo: [
          "양손에 아령을 들고 스쿼트 자세를 취합니다",
          "천천히 스쿼트로 내려갑니다",
          "올라오는 동시에 양팔로 해머컬을 수행합니다",
          "전신 근육을 동시에 사용하는 복합 운동입니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "복합 전신 홈트 운동",
      },
      {
        name: "밴드 체스트 프레스 (앉아서)",
        sets: "3세트", reps: "15회",
        tip: "밴드를 등 뒤로 고정하고 앞으로 밀기",
        tennis: "가슴 & 어깨 전면",
        howTo: [
          "밴드를 등 뒤로 돌려 양손으로 잡고 의자에 앉습니다",
          "양손을 가슴 높이에서 앞으로 밀어냅니다",
          "팔이 완전히 뻗어지기 직전에 멈추고 천천히 돌아옵니다",
          "밴드 장력이 유지되도록 팔을 완전히 펴지 않습니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=LOlJt85vMIQ",
        ytLabel: "밴드 체스트 프레스 가이드",
      },
      {
        name: "플랭크 → 사이드 플랭크 전환",
        sets: "3세트", reps: "각 30초",
        tip: "천천히 전환 — 완전 무음 복합 코어",
        tennis: "코어 전체 강화",
        howTo: [
          "팔꿈치 플랭크 30초 유지합니다",
          "한 팔을 들어 옆으로 회전하며 사이드 플랭크로 전환합니다",
          "사이드 플랭크 30초 유지 후 반대편으로 전환합니다",
          "전환 시 천천히 컨트롤하며 소리가 나지 않게 합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "플랭크 변형 코어 운동",
      },
    ],
    duration: "25~30분",
  },
  {
    day: "일요일",
    theme: "회복 & 스트레칭",
    icon: "🧘",
    accent: "#FFF176",
    focus: "유연성 & 부상 예방",
    noiseNote: "전부 바닥 또는 서서 · 완전 무음",
    exercises: [
      {
        name: "어깨 크로스 스트레칭",
        sets: "2세트", reps: "30초/방향",
        tip: "팔을 가슴 앞으로 당겨 유지",
        tennis: "어깨 회복 & 가동 범위",
        howTo: [
          "한 팔을 가슴 앞으로 뻗어 반대 팔로 당겨줍니다",
          "어깨 후면이 늘어나는 느낌을 느끼며 30초 유지합니다",
          "통증 없이 적당한 긴장감이 느껴지는 위치에서 멈춥니다",
          "반대 어깨도 동일하게 진행합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=B7zOfA7dx4E",
        ytLabel: "어깨 스트레칭 가이드",
      },
      {
        name: "흉추 회전 스트레칭",
        sets: "2세트", reps: "10회/방향",
        tip: "무릎 구부리고 누워서 상체만 회전",
        tennis: "스윙 회전력 유연성",
        howTo: [
          "매트에 무릎을 구부리고 옆으로 눕습니다",
          "팔을 앞으로 겹쳐 놓고 위쪽 팔을 뒤로 천천히 회전합니다",
          "시선은 회전하는 팔을 따라갑니다",
          "흉추(등 위쪽)가 돌아가는 느낌에 집중합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "흉추 가동성 & 회전 스트레칭",
      },
      {
        name: "고관절 굴곡근 스트레칭",
        sets: "2세트", reps: "30초/다리",
        tip: "런지 자세로 엉덩이 내리기",
        tennis: "하체 회복 & 스텝 유연성",
        howTo: [
          "한 무릎을 매트에 대고 런지 자세를 취합니다",
          "앞 무릎은 90도, 뒷 무릎은 매트에 닿게 합니다",
          "엉덩이를 앞 아래 방향으로 천천히 내립니다",
          "허벅지 앞과 고관절이 늘어나는 느낌을 확인합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "고관절 스트레칭 가이드",
      },
      {
        name: "고양이-소 스트레칭 (캣카우)",
        sets: "2세트", reps: "10회",
        tip: "무릎 꿇고 천천히 척추 굴곡·신전",
        tennis: "척추 & 코어 유연성",
        howTo: [
          "손과 무릎으로 네발기기 자세를 취합니다",
          "숨 들이마시며 등을 내려 배를 바닥 방향으로 내립니다 (소)",
          "숨 내쉬며 등을 올려 배꼽을 척추 쪽으로 당깁니다 (고양이)",
          "천천히 호흡에 맞춰 반복합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=UAa1NTBNA-w",
        ytLabel: "캣카우 척추 스트레칭",
      },
      {
        name: "손목·전완 스트레칭",
        sets: "2세트", reps: "30초/방향",
        tip: "손바닥 위·아래 방향 모두 스트레칭",
        tennis: "테니스 엘보 예방",
        howTo: [
          "팔을 앞으로 뻗고 반대 손으로 손가락을 아래로 당깁니다",
          "전완 위쪽이 늘어나는 느낌 30초 유지합니다",
          "이번엔 손가락을 위로 당겨 전완 아래쪽을 스트레칭합니다",
          "각 방향 30초씩, 양팔 모두 진행합니다",
        ],
        ytUrl: "https://www.youtube.com/watch?v=aaNbjzepJuc",
        ytLabel: "손목 전완 스트레칭 & 재활",
      },
    ],
    duration: "20분",
  },
];

export default function TennisWorkoutGuide() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [expandedEx, setExpandedEx] = useState(null);
  const day = schedule[selectedDay];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0d1117 0%, #161b22 60%, #0d1117 100%)",
      fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif",
      padding: "20px 16px 48px",
      color: "#e6edf3",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "22px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(240,246,252,0.06)", border: "1px solid rgba(240,246,252,0.12)",
          borderRadius: "20px", padding: "4px 14px",
          fontSize: "10px", letterSpacing: "2px", color: "#8b949e", marginBottom: "10px", fontWeight: "600",
        }}>
          🌙 새벽 무음 홈트 + 운동 가이드
        </div>
        <h1 style={{ fontSize: "22px", fontWeight: "900", margin: "0 0 5px", color: "#e6edf3" }}>
          🎾 테니스 홈트 <span style={{ color: "#4FC3F7" }}>운동 방법 가이드</span>
        </h1>
        <p style={{ color: "#8b949e", fontSize: "11px", margin: 0 }}>
          운동 이름을 탭하면 방법 + 유튜브 영상이 열립니다
        </p>
      </div>

      {/* Day Tabs */}
      <div style={{ display: "flex", gap: "5px", overflowX: "auto", paddingBottom: "6px", marginBottom: "16px", scrollbarWidth: "none" }}>
        {schedule.map((s, i) => (
          <button key={i} onClick={() => { setSelectedDay(i); setExpandedEx(null); }} style={{
            flex: "0 0 auto",
            background: selectedDay === i ? "rgba(240,246,252,0.1)" : "rgba(240,246,252,0.04)",
            border: selectedDay === i ? `1.5px solid ${s.accent}` : "1.5px solid rgba(240,246,252,0.08)",
            borderRadius: "12px", padding: "8px 12px", cursor: "pointer",
            color: selectedDay === i ? "#e6edf3" : "#8b949e",
            fontWeight: selectedDay === i ? "700" : "400",
            fontSize: "11px", textAlign: "center", transition: "all 0.15s", minWidth: "62px",
          }}>
            <div style={{ fontSize: "16px", marginBottom: "2px" }}>{s.icon}</div>
            <div>{s.day.replace("요일", "")}</div>
          </button>
        ))}
      </div>

      {/* Day Header */}
      <div style={{
        background: `linear-gradient(135deg, ${day.accent}12, transparent)`,
        border: `1px solid ${day.accent}30`,
        borderRadius: "16px", padding: "14px 16px", marginBottom: "12px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
            <span style={{ fontSize: "18px" }}>{day.icon}</span>
            <span style={{ fontWeight: "800", fontSize: "17px" }}>{day.day}</span>
          </div>
          <div style={{ fontSize: "13px", fontWeight: "700", color: day.accent, marginBottom: "2px" }}>{day.theme}</div>
          <div style={{ fontSize: "10px", color: "#3fb950" }}>🤫 {day.noiseNote}</div>
        </div>
        <div style={{ textAlign: "center", background: "rgba(240,246,252,0.05)", border: `1px solid ${day.accent}40`, borderRadius: "10px", padding: "7px 12px" }}>
          <div style={{ fontSize: "15px", fontWeight: "800", color: day.accent }}>{day.duration}</div>
          <div style={{ fontSize: "9px", color: "#6e7681" }}>소요시간</div>
        </div>
      </div>

      {/* Tip */}
      <div style={{ fontSize: "11px", color: "#6e7681", marginBottom: "10px", paddingLeft: "4px" }}>
        👇 운동 카드를 탭하면 상세 방법이 펼쳐집니다
      </div>

      {/* Exercises */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {day.exercises.map((ex, i) => {
          const isOpen = expandedEx === i;
          return (
            <div key={i} style={{
              background: isOpen ? `${day.accent}0e` : "rgba(240,246,252,0.03)",
              border: `1px solid ${isOpen ? day.accent + "44" : "rgba(240,246,252,0.07)"}`,
              borderRadius: "14px", overflow: "hidden",
              transition: "all 0.2s",
            }}>
              {/* Exercise Header (tappable) */}
              <div
                onClick={() => setExpandedEx(isOpen ? null : i)}
                style={{ padding: "13px 14px", cursor: "pointer", display: "flex", gap: "10px", alignItems: "flex-start" }}
              >
                <div style={{
                  width: "26px", height: "26px", borderRadius: "8px",
                  background: `${day.accent}22`, border: `1px solid ${day.accent}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: "800", color: day.accent,
                  flexShrink: 0, marginTop: "1px",
                }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px", flexWrap: "wrap", marginBottom: "4px" }}>
                    <span style={{ fontWeight: "700", fontSize: "13px", color: "#e6edf3" }}>{ex.name}</span>
                    <span style={{ fontSize: "10px", fontWeight: "700", color: day.accent, background: `${day.accent}18`, padding: "2px 7px", borderRadius: "10px", whiteSpace: "nowrap" }}>
                      {ex.sets} × {ex.reps}
                    </span>
                  </div>
                  <div style={{ fontSize: "10px", color: "#4FC3F7" }}>🎾 {ex.tennis}</div>
                </div>
                <div style={{ fontSize: "16px", color: "#8b949e", flexShrink: 0, marginTop: "2px", transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none" }}>▾</div>
              </div>

              {/* Expanded Content */}
              {isOpen && (
                <div style={{ padding: "0 14px 14px", borderTop: `1px solid ${day.accent}20` }}>
                  {/* Tip */}
                  <div style={{ fontSize: "11px", color: "#FFB74D", marginBottom: "10px", paddingTop: "10px", display: "flex", gap: "6px" }}>
                    <span>💡</span><span>{ex.tip}</span>
                  </div>

                  {/* How To */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={{ fontSize: "11px", fontWeight: "700", color: "#8b949e", marginBottom: "7px", letterSpacing: "0.5px" }}>운동 방법</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {ex.howTo.map((step, si) => (
                        <div key={si} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <div style={{
                            width: "18px", height: "18px", borderRadius: "50%",
                            background: `${day.accent}25`, color: day.accent,
                            fontSize: "10px", fontWeight: "800",
                            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                          }}>{si + 1}</div>
                          <span style={{ fontSize: "12px", color: "#c9d1d9", lineHeight: "1.6" }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* YouTube Link */}
                  <a
                    href={ex.ytUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.3)",
                      borderRadius: "10px", padding: "9px 12px",
                      textDecoration: "none", color: "#ff6b6b",
                      fontSize: "11px", fontWeight: "600",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>▶</span>
                    <span style={{ flex: 1 }}>유튜브 영상 보기</span>
                    <span style={{ fontSize: "10px", color: "#8b949e" }}>{ex.ytLabel}</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div style={{
        marginTop: "20px", background: "rgba(63,185,80,0.06)",
        border: "1px solid rgba(63,185,80,0.2)", borderRadius: "14px", padding: "14px",
      }}>
        <div style={{ fontSize: "12px", fontWeight: "700", color: "#3fb950", marginBottom: "8px" }}>🤫 새벽 무소음 수칙</div>
        {[
          { icon: "🧦", text: "두꺼운 양말 착용 — 발소리 최소화" },
          { icon: "🛏️", text: "운동 매트 필수 — 바닥 충격 흡수" },
          { icon: "⏱️", text: "내려가는 동작을 천천히 — 소음↓ 근육 자극↑" },
          { icon: "🚫", text: "점프·버피 완전 제거" },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "11px", color: "#8b949e", marginBottom: "6px" }}>
            <span>{r.icon}</span><span>{r.text}</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "10px", color: "#30363d" }}>
        장비: 5kg 아령 · 운동 밴드 · 턱걸이/레그레이즈 기구 · 운동 매트
      </div>
    </div>
  );
}
