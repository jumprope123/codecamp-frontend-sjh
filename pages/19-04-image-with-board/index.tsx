import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { CheckValidationFile } from "../../src/libraries/chechValidationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput) {
    #타입적는곳
    createBoard(createBoardInput: $createBoardInput) {
      #실제 전달할 변수 적는곳
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    if (!CheckValidationFile(file)) {
      return;
    }

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImageUrl(result.data.uploadFile.url);
    } catch (e: any) {
      console.error(e);
      Modal.error({ content: e.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onClickSumbit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: writer,
          password: 1234,
          title: title,
          contents: contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);

    // router.push("05-08-dynamic-routed-board-query/"+result.data.createBoard.number)
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        // accept="image/jpeg"
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSumbit}>GRAPHQl-API(동기) 요청하기</button>
    </>
  );
}
