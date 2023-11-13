// 1. 문자 숫자 불리언 (primitive type)
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result1 = getPrimitive("철수", 123, true);

//
// 2. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

//
// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  return [arg3, arg2, arg1];
};

const result3 = getAny("철수", 123, true);

//
// 4. generic 타입
function getGeneric1<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result4 = getGeneric1<string, number, boolean>("철수", 123, true);

//
// 4. generic 타입
const getGeneric4 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const result5 = getGeneric4<string, number, boolean>("철수", 123, true);
