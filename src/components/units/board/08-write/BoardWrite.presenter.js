import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  //자바스크립트 영역

  //html영역(return 아래)
  return (
    <>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeContents} />
      <br />
      <BlueButton
        size="15px"
        color="green"
        bool={props.mycolor}
        checkValid={props.checkValid}
        onClick={
          props.isEdit == true ? props.onClickUpdate : props.onClickSumbit
        }
      >
        {props.isEdit === true ? "수정하기" : "등록하기"}
      </BlueButton>
    </>
  );
}
