import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입적는곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      #실제 전달할 변수 적는곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);

    // router.push("05-08-dynamic-routed-board-query/"+result.data.createBoard.number)
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      <br />
      제목 : <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      내용 : <input id="contents" type="text" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQl-API(동기) 요청하기</button>
    </>
  );
}
