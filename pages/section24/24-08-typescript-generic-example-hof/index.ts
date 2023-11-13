// 1. HOF - 일반 함수
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("영희")(8);

//
// 1. HOF - 일반 함수
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
};

const result2 = first2("영희")(8);

//
// 1. HOF - 일반 함수
// prettier-ignore
const 로그인체크 = <C>(component: C) => <P>(props: P): [C, P] => {
    return [component, props];
};

const result2 = 로그인체크("영희")(8);

const HOF =
  <T>(arg1: T) =>
  <U>(arg2: U): [T, U] => {
    console.log(arg1, arg2);
    return [arg1, arg2];
  };

HOF(11)(22);
