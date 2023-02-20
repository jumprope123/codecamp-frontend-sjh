import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props) => props.size};
  background-color: ${(props) => (props.checkValid ? props.color : "default")};
`;
