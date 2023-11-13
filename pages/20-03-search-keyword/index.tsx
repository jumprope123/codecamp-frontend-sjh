import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $title: String) {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // const [serach, setSearch] = useState("");

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event?.currentTarget.id) }); // 검색에서 refetch할때 사용한 search검색어가 포함되어있는 상태이므로 추가로 search 포함하지 않아도 됨
  };

  // const onClickSearch = () => {
  //   void refetch({ page: 1, serach });
  // };

  const getDebounce = _.debounce((value: any) => {
    void refetch({ page: 1, serach: value });
    setKeyword(value);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    // void refetch({ page: 1, serach: event.target.value });
    getDebounce(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards?.map((el) => (
        <div key={el.number}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>
            <span>
              {el.title
                ?.replaceAll(keyword, `#@${keyword}#@`)
                .split("#@")
                .map((item) => (
                  <span
                    key={uuidv4()}
                    style={{ color: item === keyword ? "red" : "black" }}
                  >
                    {item}
                  </span>
                ))}
            </span>
          </span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
