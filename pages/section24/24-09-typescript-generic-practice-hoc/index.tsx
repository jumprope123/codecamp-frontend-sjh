import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import { useEffect } from "react";

// prettier-ignore
export const WithAuth = (Component: ()=>JSX.Element) => <P extends Record<string,unknown>>(props: P):ReactElement<P> => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") == null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/23-03-login-check");
    }
  }, []);

  return <Component {...props} />;
};
