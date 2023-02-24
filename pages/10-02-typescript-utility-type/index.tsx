export default function TypescriptUtilityPage() {
    interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
    }

    type IProfile2 = {
        name: string;
        age: number;
        school: string;
        hobby?: string;
    };

    // 1. Pick 타입 (원하는 타입만 뽑아서 생성)
    type aaa = Pick<IProfile, "name" | "age">;

    // 2. Omit 타입 (원하는 타입만 제거해서 생성)
    type bbb = Omit<IProfile, "school">;

    // 3. Partial 타입 (모든 타입에 ?를 붙여줌)
    type ccc = Partial<IProfile>;

    // 4. Required 타입 (모든 타입을 필수로 바꿔줌 ?를뺌)
    type ddd = Required<IProfile>;

    // 5. Record 타입
    type eee = "철수" | "영희" | "훈이"; // Union 타입
    let child: eee;
    child = "철수"; // 맹구는 못들어감

    type fff = Record<eee, IProfile>; //Recode 타입

    //type vs interface 차이 : 선언병합
    interface IProfile {
        candy: number;
    }

    let profile: Partial<IProfile> = {};
    profile.candy = 10;
}
