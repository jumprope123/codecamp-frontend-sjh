import { gql,useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"철수",title:"제목입니다",contents:"내용입니다"){
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
        const result = await createBoard();
        console.log(result);
        alert(result.data.createBoard.message);
    }


    return(
        <button onClick={onClickSumbit}>GRAPHQl-API(동기) 요청하기</button>
    )
}