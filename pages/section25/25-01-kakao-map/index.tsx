import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function kakaoMapPage(): JSX.Element {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0edb010df17f393390e08844028c6f8f"
      ></script>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
