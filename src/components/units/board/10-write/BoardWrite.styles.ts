import styled from "@emotion/styled";
import { IBlueButtonprops } from "./BoardWrite.types";

export const RedInput = styled.input`
    border-color: red;
`;

export const BlueButton = styled.button`
    font-size: ${(props: IBlueButtonprops) => props.size};
    background-color: ${(props: IBlueButtonprops) => (props.checkValid ? props.color : "default")};
`;
