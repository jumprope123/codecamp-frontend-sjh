import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onchangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    try {
      // accessToken 받아오기
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // globalState에 저장하기
      setAccessToken(accessToken);

      // 로그인 성공 페이지로 이동하기
      void router.push("/22-02-login-suceess");
    } catch (e: any) {
      Modal.error(e.message);
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onchangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
