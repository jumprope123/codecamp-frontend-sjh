import { gql, useQuery } from "@apollo/client";

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

export default function FetchPolicyExample() {
  const { data } = useQuery(FETCH_BOARDS, { fetchPolicy: "network-only" });
  return <></>;
}
