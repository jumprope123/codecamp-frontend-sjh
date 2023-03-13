import { StepForwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export default function LibraryIconPage() {
    const MyIcon = styled(StepForwardOutlined)`
        font-size: 20px;
        color: red;
    `;

    return (
        <>
            <div
                id="aaa"
                onClick={(event) => {
                    console.log("난 상위디브야");
                }}
            >
                <MyIcon
                    id="qqq"
                    onClick={(event) => {
                        event.stopPropagation();
                        console.log("난 아이콘이야");
                    }}
                />
            </div>
        </>
    );
}
