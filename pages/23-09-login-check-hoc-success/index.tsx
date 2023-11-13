import { gql, useQuery } from "@apollo/client";
import { WithAuth } from "../../src/components/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const router = useRouter();

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") == null) {
  //     alert("로그인 후 이용 가능합니다.");
  //     void router.push("/23-08-login-check-hoc");
  //   }
  // }, []);

  return <>{data?.fetchUserLoggedIn.name} 님 환영합니다~!</>;
}

export default WithAuth(LoginSuccessPage);
