import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      #실제 전달할 변수 적는곳
      _id
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      number
      message
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickSumbit = async () => {
    await createBoard({
      variables: {
        writer: "철수",
        title: "하이",
        contents: "내용",
      },
    });
  };

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (event: any) => {
    await deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
    });
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el.number}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
          <button onClick={onClickDelete}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSumbit}>등록하기</button>
    </>
  );
}
