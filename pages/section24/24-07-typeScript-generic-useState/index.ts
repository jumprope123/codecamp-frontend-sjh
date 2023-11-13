/* eslint-disable @typescript-eslint/restrict-plus-operands */
export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  const myState = 초기값;
  const mySetState = (변경값: S) => {
    console.log(mySetState + "애서" + 변경값 + "로 myState를 변경하겠습니다.");
    console.log("변경된 " + 변경값 + " 를 사용해서 컴포넌트를 리렌더링합니다");
  };

  return [myState, mySetState];
}

const [count, setCount] = useState(10);
