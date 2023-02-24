import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";
import { UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [mycolor, setMycolor] = useState(false);
  //자바스크립트 영역
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [checkValid, setCheckValid] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

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
    router.push(`/09-01-board/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myVariables = { number: Number(router.query.number) };
    if (writer) {
      myVariables.writer = writer;
    }
    if (title) {
      myVariables.title = title;
    }
    if (contents) {
      myVariables.contents = contents;
    }
    //1.수정하기 뮤테이션 날리기
    const result = await updateBoard({
      variables: myVariables,
    });
    //2.상세페이지로 이동하기
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/09-01-board/${result.data.updateBoard.number}`);
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
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mycolor={mycolor}
      checkValid={checkValid}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
