import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMouve = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/");
  };

  useEffect(() => {
    console.log("변경되고나서 실행");

    return () => {
      console.log("언마운트시 실행.");
    };
  }, [count]);

  // useEffect의 잘못된 사용 예제
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>count Up</button>
      <button onClick={onClickMouve}>move</button>
    </>
  );
}
