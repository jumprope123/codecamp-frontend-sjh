import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path); // 로그인페이지 일때는 set하지 않도록 조건 추가
    localStorage.setItem("visitedPagePath", path); // 로칼 스토리지도 가능
    void router.push(path);
  };

  return {
    onClickMoveToPage,
    visitedPage,
  };
};
