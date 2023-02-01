import { gql,useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title:String, $contents:String){ #타입적는곳
        createBoard(writer: $writer, title: $title, contents: $contents){ #실제 전달할 변수 적는곳
            _id,
            number,
            message
        }
    }
`

export default function GraphqlMutationPage() {
    //app.js 파일을 세팅해줘야 useMutation을 사용할 수 있음.
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSumbit = async()=> {
        const result = await createBoard({
            variables: { // Variables는 $를 의미
                writer: "훈이",
                title: "안녕하세요",
                contents: "내용입니다."
            }
        });
        console.log(result);
        alert(result.data.createBoard.message);
    }


    return(
        <button onClick={onClickSumbit}>GRAPHQl-API(동기) 요청하기</button>
    )
}