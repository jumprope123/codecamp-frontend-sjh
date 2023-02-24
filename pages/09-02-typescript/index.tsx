export default function index() {
    //타입 추론
    let a: string = "안녕하세요";
    // a = 3;

    //타입 명시
    let b: string = "string type";

    //문자타입(선언과 할당 분리)
    let c: string;
    c = "방가";

    //숫자타입
    let d: number = 10;

    //불린타입
    let e: boolean = false;
    e = true;

    //배열타입
    let f: number[] = [1, 2, 3, 4, 5, 6, 7];
    let g: string[] = ["dd", "ff"];
    let h: (string | number)[] = [1, "dfdf"];

    //객체타입
    interface IProfile {
        name: string;
        age: number | string;
        school: string;
    }
    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "금나래초등학교",
    };
    profile.age = "8살";

    //함수타입 = 어디서든 호출 가능하므로, 타입추론할 수 없음(반드시, 타입명시)
    const add = (number1: number, number2: number, unit: string): string => {
        return number1 + number2 + unit;
    };
    const result = add(1000, 2000, "원"); //결과의 리턴타입도 예측가능

    //any타입 = 자바스크립트와 동일
    let qqq: any = "철수";
    qqq = false;
    qqq = 1;

    return <div></div>;
}
