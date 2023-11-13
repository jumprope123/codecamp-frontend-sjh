import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { useRecoilState } from "recoil";
import { testState } from "../../src/commons/store";
import { useEffect } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const [test, setTest] = useRecoilState(testState);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (basket: any) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기
    const baskets: any[] = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 해당 장바구니에 담기
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  useEffect(() => {
    console.log("test 리코일 변경중");
  }, [test]);

  const clickButton = () => {
    setTest(JSON.parse('{"dd":"ddd"}'));
  };

  return (
    <>
      {data?.fetchBoards?.map((el: any) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={clickButton}>dd</button>
    </>
  );
}
