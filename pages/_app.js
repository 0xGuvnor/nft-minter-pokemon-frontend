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
import { publicProvider } from "wagmi/providers/public";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    const defaultChains = [
        {
            ...chain.rinkeby,
        },
    ];
    const { chains, provider } = configureChains(defaultChains, [
        alchemyProvider({
            alchemyId: "https://eth-rinkeby.alchemyapi.io/v2/Qc0EMS4dxGxL6PcVI2BtD25rqfNsYrKY",
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
