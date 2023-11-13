import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") == null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/23-03-login-check");
    }
  }, []);

  return <Component {...props} />;
};
