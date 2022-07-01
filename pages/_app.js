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
    const { chains, provider } = configureChains(
        [chain.rinkeby],
        [
            infuraProvider({
                infuraId: "bd37f1ca3d8c40ae8059fd11650b5022",
                priority: 0,
            }),
            alchemyProvider({
                alchemyId: "SnvxwYIO7G_Ewxuzm1sWosvgGVQKKDS3",
                priority: 1,
            }),
            publicProvider({ priority: 2 }),
        ]
    );
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
