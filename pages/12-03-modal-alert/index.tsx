import { Modal } from "antd";

const success = () => {
    Modal.success({ content: "성공했심니다" });
};

const error = () => {
    Modal.error({ content: "비밀번호 틀렸씸더" });
};

export default function App() {
    return (
        <>
            <button onClick={success}>성공시</button>
            <button onClick={error}>실패시</button>
        </>
    );
}
