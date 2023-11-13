import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../src/libraries/firebase";

export default function FirebasePage() {
  const onclickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    });
  };

  const onclickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const q = query(board, where("title", "==", "제목입니다"));
    const result = await getDocs(q);
    const datas = result.docs.map((item) => item.data());
    console.log(datas);
  };

  return (
    <>
      <button onClick={onclickFetch}>조회하기</button>
      <button onClick={onclickSubmit}>등록하기</button>
    </>
  );
}
