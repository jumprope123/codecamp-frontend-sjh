import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types";

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
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);

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
        alert(result.data?.createBoard?.message);

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
            <button onClick={onClickSumbit}>GRAPHQl-API(동기) 요청하기</button>
        </>
    );
}
