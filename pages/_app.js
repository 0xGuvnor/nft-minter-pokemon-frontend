import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { Toaster } from "react-hot-toast";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Footer from "../components/Footer";

const client = new ApolloClient({
    uri: "https://api.studio.thegraph.com/query/29304/pokedex---goerli/v0.1",
    cache: new InMemoryCache(),
});

const { chains, provider } = configureChains(
    [chain.goerli],
    [
        infuraProvider({
            infuraId: "bd37f1ca3d8c40ae8059fd11650b5022",
            priority: 0,
        }),
        alchemyProvider({
            alchemyId: "BCjazC46liXDSVoM-I0En7tv-bY_iITW",
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

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
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
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            duration: 7000,
                            style: { background: "#FDFCDC", color: "#2B2D42" },
                        }}
                    />
                    <Component {...pageProps} />
                    <Footer />
                </RainbowKitProvider>
            </WagmiConfig>
        </ApolloProvider>
    );
}

export default MyApp;
