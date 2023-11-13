import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function kakaoMapPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script"); // 스크립트 태그 생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0edb010df17f393390e08844028c6f8f";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        console.log(map);
      });
    };
  }, []);

  return (
    <>
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0edb010df17f393390e08844028c6f8f"
      ></script> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
