import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Rinkeby}
            chainRpc={{
                [ChainId.Rinkeby]: "https://rinkeby.infura.io/v3/80514b47890f4b358946727268128c71",
            }}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;
