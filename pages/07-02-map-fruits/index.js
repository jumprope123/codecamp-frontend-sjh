const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "딸기" },
  { number: 4, title: "바나나" },
];
// 백엔드에서 가져온 데이터라고 가정. 컴포넌트 밖에 선언한 이유는 컴포넌트 리렌더링에 상관없이 데이터가 변하지 않도록 하기 위함.
// 변하지 않는 상수들은 보통 여기에 선언함.

export default function MapFruitsPage() {
  const bbb = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "딸기" },
  ].map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  const ccc = FRUITS.map((item) => (
    <div>
      {item.number} {item.title}
    </div>
  ));

  console.log(FRUITS);
  console.log(ccc);

  return <>{ccc}</>;
}
