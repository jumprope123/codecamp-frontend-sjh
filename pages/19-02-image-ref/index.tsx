import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function imageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImageUrl(result.data.uploadFile.url);
    } catch (e: any) {
      console.error(e);
      Modal.error({ content: e.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
