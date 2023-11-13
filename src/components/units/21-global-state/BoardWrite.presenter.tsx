import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";

export default function BoardWriteUI() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <>{isEdit ? "등록하기" : "수정하기"}</>;
}
