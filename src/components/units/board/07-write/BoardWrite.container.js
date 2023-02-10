import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [mycolor, setMycolor] = useState(false);
  //자바스크립트 영역
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [checkValid, setCheckValid] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);

  useEffect(() => {
    if (writer && title && contents) {
      setCheckValid(true);
    } else {
      setCheckValid(false);
    }
  }, [writer, title, contents]);

  const onClickSumbit = async () => {
    const result = await createBoard({
      variables: {
        // Variables는 $를 의미
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);

    // router.push("05-08-dynamic-routed-board-query/"+result.data.createBoard.number)
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  //html영역(return 아래)
  return (
    <BoardWriteUI
      onClickSumbit={onClickSumbit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mycolor={mycolor}
      checkValid={checkValid}
    />
  );
}
