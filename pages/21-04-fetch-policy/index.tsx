import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/21-fetchPolicy";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function GlobalStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClickButton = () => {
    setIsOpen(true);
  };

  const onClickMovePage = () => {
    void router.push("/21-05-fetch-policy-moved");
  };

  return (
    <>
      <button onClick={onClickButton}>
        버튼을 클릭하면 새로운 컴포넌트가 나타납니다.!!
      </button>
      <button onClick={onClickMovePage}>
        버튼을 클릭하면 페이지가 이동됩니다.
      </button>
      {isOpen && <FetchPolicyExample />}
    </>
  );
}
