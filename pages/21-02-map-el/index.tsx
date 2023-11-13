export default function MapElPage() {
  // 1. 기본적인 방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el : ", el, "  index : ", index);
  });

  // 2. 매개변수를 변경한 방법
  ["철수", "영희", "훈이"].forEach((aa, vv) => {
    console.log("el : ", aa, "  index : ", vv);
  });

  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].forEach(function (el, index) {
    console.log("el : ", el, "  index : ", index);
  });

  // 4. el과 index 바꾸기 방법
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el : ", index, "  index : ", el);
  });

  return <></>;
}
