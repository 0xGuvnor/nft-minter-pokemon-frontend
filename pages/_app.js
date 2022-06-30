import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
    darkTheme,
    getDefaultWallets,
    lightTheme,
    midnightTheme,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    const defaultChains = [
        {
            ...chain.rinkeby,
        },
    ];
    const { chains, provider } = configureChains(defaultChains, [
        infuraProvider({
            infuraId: "https://rinkeby.infura.io/v3/80514b47890f4b358946727268128c71",
        }),
        publicProvider(),
    ]);
    const { connectors } = getDefaultWallets({
        appName: "Pokédex NFT Collection",
        chains,
    });
    const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider,
    });

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                coolMode
                chains={chains}
                theme={darkTheme({
                    overlayBlur: "small",
                    fontStack: "system",
                    accentColor: "#BA274A",
                    accentColorForeground: "white",
                })}
                showRecentTransactions={true}
            >
                <Component {...pageProps} />
                <Footer />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default MyApp;
