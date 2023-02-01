import { gql,useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String, $createProductInput:CreateProductInput!){ #타입적는곳
        createProduct(seller:$seller, createProductInput:$createProductInput){ #실제 전달할 변수 적는곳
            _id,
            number,
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onClickSumbit = async()=> {
        const result = await createProduct({
            variables: { // Variables는 $를 의미
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "정말좋은 마우스",
                    price:3000,
                    
                }
            }
        });
        console.log(result);
        alert(result.data.createProduct.message);
    }

    return(
        <>
            <button onClick={onClickSumbit}>GRAPHQl-API(동기) 요청하기</button>
        </>
    )
}