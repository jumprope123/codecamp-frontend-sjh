export default function Layout(props: IProps) {
    return (
        <>
            <div>안녕하세요 철숩니다</div>
            <div>{props.school}</div>
            <div>{props.children}</div>
            <div>안녕하세요 맹굽니다</div>
        </>
    );
}

interface IProps {
    school: string;
    children: JSX.Element;
}
