import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
    const MyStar = styled(Rate)`
        font-size: 20px;
        color: red;
    `;

    const [value, setValue] = useState(3);

    const handleChange = (number: number) => {
        console.log(number);
        setValue(number);
    };

    return (
        <>
            <MyStar onChange={handleChange} />
        </>
    );
}
