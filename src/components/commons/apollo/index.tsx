// import {
//   ApolloProvider,
//   ApolloClient,
//   InMemoryCache,
//   ApolloLink,
// } from "@apollo/client";
// import { createUploadLink } from "apollo-upload-client";

// interface IProps {
//   children: JSX.Element;
// }

// export default function ApolloSetting(props: IProps) {
//   const uploadLink = createUploadLink({
//     uri: "http://practice.codebootcamp.co.kr/graphql",
//   });

//   const client = new ApolloClient({
//     link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
//     cache: new InMemoryCache(), // 나중에 하기
//   });

//   // prettier-ignore
//   return (
//             <ApolloProvider client={client}>
//                 {props.children}
//             </ApolloProvider>
//         )
// }
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   const result = localStorage.getItem("accessToken");
  //   if (result != null) {
  //     setAccessToken(result);
  //   }
  // } else {
  //   console.log("여기는 브라우저가 아님요");
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined" ) {
  //   const result = localStorage.getItem("accessToken");
  //   if (result != null) {
  //     setAccessToken(result);
  //   }
  // } else {
  //   console.log("여기는 브라우저가 아님요");
  // }

  // 2. 프리렌더링 예제 - useEffect 사용
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    if (result != null) {
      setAccessToken(result);
    }
  }, []);

  const client = new ApolloClient({
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    // cache: new InMemoryCache(), // 나중에 하기
    cache: GLOBAL_STATE, // 페이지 전환되어도 캐시유지
  });

  // prettier-ignore
  return (
            <ApolloProvider client={client}>
                {props.children}
            </ApolloProvider>
        )
}
