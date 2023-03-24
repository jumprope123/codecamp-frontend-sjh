import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

interface IProps {
    children: JSX.Element;
}

export default function ApolloSetting(props: IProps) {
    const client = new ApolloClient({
        uri: "http://practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(), // 나중에 하기
    });

    // prettier-ignore
    return (
            <ApolloProvider client={client}>
                {props.children}
            </ApolloProvider>
        )
}
