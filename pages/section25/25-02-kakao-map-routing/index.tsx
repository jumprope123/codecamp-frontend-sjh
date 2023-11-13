import Link from "next/link";
import { useRouter } from "next/router";

export default function kakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = () => {
    void router.push("/section25/25-03-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>

      {/* 매 페이지를 새로 다운로드 받으므로 singlePageApplication을 활용하지 못함 */}
      <a href="/section25/25-03-kakao-map-routing-moved">페이지 이동하기!!</a>

      {/*  Link 에 <a></a> 를 달면 MPA처럼 동작하지는 않지만, 검색엔진에 연관성으로 걸리기 위해 사용하는 것. */}
      <Link href={"/section25/25-03-kakao-map-routing-moved"}>
        <a>페이지 이동하기</a>
      </Link>
    </>
  );
}
