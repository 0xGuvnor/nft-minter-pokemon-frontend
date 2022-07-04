import About from "../components/About";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Team from "../components/Team";
import FadeIn from "react-fade-in";
import toast from "react-hot-toast";
import PokedexABI from "../constants/Pokedex.json";
import networkMapping from "../constants/networkMapping.json";
import { useEffect, useState } from "react";
import { useAccount, useContractEvent, useNetwork } from "wagmi";

export default function Home() {
    const { chain } = useNetwork();
    const { address } = useAccount();

    const [pokedexAddress, setPokedexAddress] = useState("");

    useContractEvent({
        addressOrName: pokedexAddress,
        contractInterface: PokedexABI,
        eventName: "Transfer",
        listener: (event) => {
            if (event[0] == "0x0000000000000000000000000000000000000000" && event[1] == address) {
                toastNftMinted(event[3].args[2].toString() /* token ID */);
            }
        },
    });

    const toastNftMinted = (tokenId) =>
        toast.success(
            (t) => (
                <div className="flex min-w-fit">
                    <div className="flex flex-col pr-4 min-w-fit">
                        <h1 className="text-md">Your Pokémon has been minted!</h1>
                        <p className="text-sm">View your NFT @</p>
                        <a
                            href={`https://testnets.opensea.io/assets/${chain.network}/${pokedexAddress}/${tokenId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="overflow-hidden text-sm text-indigo-500 underline text-clip">
                                OpenSea
                            </p>
                        </a>
                    </div>
                    <div className="flex border-l-4">
                        <button
                            className="w-full pl-4 text-sm text-indigo-500 hover:text-indigo-600"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            ),
            { icon: "🎉" }
        );

    useEffect(() => {
        if (chain?.id) {
            setPokedexAddress(networkMapping[chain.id].Pokedex[0]);
        }
    }, [chain]);

    return (
        <div className={style.wrapper}>
            <Header title={"Home"} />
            <FadeIn>
                <Hero />
                <div id="about">
                    <About />
                </div>
                <div id="team">
                    <Team />
                </div>
                <div id="faq">
                    <FAQ />
                </div>
            </FadeIn>
        </div>
    );
}
