import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import toast from "react-hot-toast";
import Header from "../components/Header";
import SubmitTxCard from "../components/SubmitTxCard";
import networkMapping from "../constants/networkMapping.json";
import PokedexABI from "../constants/Pokedex.json";
import MultisigABI from "../constants/MultiSig.json";
import { useNetwork } from "wagmi";

const Admin = () => {
    const { chain } = useNetwork();

    const [pokedexAddress, setPokedexAddress] = useState("");
    const [multisigAddress, setMultisigAddress] = useState("");

    const toastLoading = (txHash) =>
        toast.loading(
            (t) => (
                <div className="flex min-w-fit">
                    <div className="flex flex-col pr-4 min-w-fit">
                        <h1 className="text-md">Transaction is being mined...</h1>
                        <p className="text-sm">Transaction hash:</p>
                        <a
                            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="overflow-hidden text-sm text-indigo-500 underline text-clip">
                                {`${txHash.slice(0, 6)}...${txHash.slice(-4)}`}
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
            { icon: "⛏" }
        );

    const toastSuccess = (txHash) =>
        toast.success(
            (t) => (
                <div className="flex min-w-fit">
                    <div className="flex flex-col pr-4 min-w-fit">
                        <h1 className="text-md">Transaction completed!</h1>
                        <p className="text-sm">Transaction hash:</p>
                        <a
                            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="overflow-hidden text-sm text-indigo-500 underline text-clip">
                                {`${txHash.slice(0, 6)}...${txHash.slice(-4)}`}
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
            { icon: "✅" }
        );

    const toastError = (message) =>
        toast.error(
            (t) => (
                <div className="flex min-w-full">
                    <div className="pr-4 text-md">{message}</div>
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
            { icon: "❌" }
        );

    useEffect(() => {
        if (chain?.id) {
            setPokedexAddress(networkMapping[chain.id].Pokedex[0]);
            setMultisigAddress(networkMapping[chain.id].MultiSig[0]);
        }
    }, [chain?.id]);

    return (
        <div>
            <Header title={"Admin"} />
            <FadeIn>
                <SubmitTxCard
                    pokedexAddress={pokedexAddress}
                    multisigAddress={multisigAddress}
                    PokedexABI={PokedexABI}
                    MultisigABI={MultisigABI}
                    toastLoading={toastLoading}
                    toastSuccess={toastSuccess}
                    toastError={toastError}
                />
            </FadeIn>
        </div>
    );
};

export default Admin;
