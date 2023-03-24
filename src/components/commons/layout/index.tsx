import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = ["/12-02-library-star", "/12-01-library-icon"];

interface IProps {
    children: JSX.Element;
}

export default function Layout(props: IProps) {
    const router = useRouter();
    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

    return (
        <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{ height: "500px", display: "flex" }}>
                <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
                <div style={{ width: "70%" }}>{props.children}</div>
            </div>
            <LayoutFooter />
        </>
    );
}
