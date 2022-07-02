import { ethers } from "ethers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useContract, useContractRead, useProvider, useSigner, useNetwork } from "wagmi";
import Pokeballs from "../assets/Pokeballs.webp";
import networkMapping from "../constants/networkMapping.json";
import PokedexABI from "../constants/Pokedex.json";

const style = {
    container: `flex justify-center items-center z-10`,
    wrapper: `flex flex-col shadow-2xl rounded-2xl m-4 md:my-16 px-6 pt-6 pb-2 bg-[#E8E9F3] items-center justify-center w-[22rem] md:max-w-none`,
    imageWrapper: `h-72 w-72 items-center flex justify-center`,
    mintFeeTitle: `text-3xl m-4 mb-4`,
    mintAmountSelection: `text-xl space-x-4 flex justify-between`,
    mintAmountValue: `py-4 w-36 h-14 text-center text-2xl rounded-xl outline outline-2 bg-[#E8E9F3]`,
    mintAmountStepper: `p-4 px-6 h-14 bg-black flex items-center text-3xl text-white rounded-xl hover:bg-[#CECECE] hover:text-black`,
    loadingButton: `btn btn-disabled btn-block loading text-black p-4 m-4 bg-neutral-content rounded-xl border-0 h-14`,
    mintButton: `btn btn-block text-black p-4 m-4 bg-[#04E762] rounded-xl hover:bg-[#89FC00] border-0 h-14`,
};

const MintCard = () => {
    const { chain } = useNetwork();
    const provider = useProvider();
    const { data: signer, status } = useSigner();

    const [mintAmount, setMintAmount] = useState(1);
    const [mintFee, setMintFee] = useState(0);
    const [pokedexAddress, setPokedexAddress] = useState("");
    const [isMining, setisMining] = useState(false);

    const { data: mintFeePer } = useContractRead({
        addressOrName: pokedexAddress,
        contractInterface: PokedexABI,
        functionName: "mintFee",
    });

    const pokedexContract = useContract({
        addressOrName: pokedexAddress,
        contractInterface: PokedexABI,
        signerOrProvider: signer || provider,
    });

    // console.log(status, signer);

    const toastMintLoading = (txHash) =>
        toast.loading(
            (t) => (
                <div className="flex min-w-fit">
                    <div className="flex flex-col min-w-fit pr-4">
                        <h1 className="text-md">Transaction is being mined...</h1>
                        <p className="text-sm">Transaction hash:</p>
                        <a
                            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-sm text-indigo-500 underline text-clip overflow-hidden">
                                {`${txHash.slice(0, 6)}...${txHash.slice(-4)}`}
                            </p>
                        </a>
                    </div>
                    <div className="flex border-l-4">
                        <button
                            className="text-sm w-full pl-4 text-indigo-500 hover:text-indigo-600"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            ),
            { icon: "⛏" }
        );

    const toastMintSuccess = (txHash) =>
        toast.success(
            (t) => (
                <div className="flex min-w-fit">
                    <div className="flex flex-col min-w-fit pr-4">
                        <h1 className="text-md">Transaction completed!</h1>
                        <p className="text-sm">Transaction hash:</p>
                        <a
                            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-sm text-indigo-500 underline text-clip overflow-hidden">
                                {`${txHash.slice(0, 6)}...${txHash.slice(-4)}`}
                            </p>
                        </a>
                    </div>
                    <div className="flex border-l-4">
                        <button
                            className="text-sm w-full pl-4 text-indigo-500 hover:text-indigo-600"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            ),
            { icon: "🎉" }
        );

    const toastError = (message) =>
        toast.error(
            (t) => (
                <div className="flex min-w-full">
                    <div className=" pr-4 text-md">{message}</div>
                    <div className="flex border-l-4">
                        <button
                            className="text-sm w-full pl-4 text-indigo-500 hover:text-indigo-600"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            ),
            { icon: "❌" }
        );

    const mintNFT = async () => {
        let txReceipt;
        setisMining(true);

        try {
            const tx = await pokedexContract.requestMint(mintAmount, {
                value: ethers.utils.parseEther(mintFee.toString()),
            });
            toastMintLoading(tx.hash);
            txReceipt = await tx.wait();
        } catch (err) {
            console.log(err);
            if (err.code == 4001) {
                toastError(err.message);
            } else {
                toastError("Hmm looks like something went wrong...");
            }
        }

        setisMining(false);
        if (txReceipt) {
            toastMintSuccess(txReceipt.transactionHash);
        }
    };

    useEffect(() => {
        if (mintFeePer) {
            setMintFee(ethers.utils.formatEther(mintFeePer.mul(mintAmount)));
        }

        if (chain.id) {
            setPokedexAddress(networkMapping[chain.id].Pokedex[0]);
        }

        if (!signer) {
        }
    }, [mintAmount, mintFeePer, chain, signer]);

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.imageWrapper}>
                    <Image src={Pokeballs} />
                </div>
                <h1 className={style.mintFeeTitle}>Mint Fee: Ξ{mintFee}</h1>
                <div className={style.mintAmountSelection}>
                    <button className={style.mintAmountStepper} onClick={handleDecrement}>
                        -
                    </button>
                    <input readOnly className={style.mintAmountValue} value={mintAmount} />
                    <button className={style.mintAmountStepper} onClick={handleIncrement}>
                        +
                    </button>
                </div>
                {isMining ? (
                    <button className={style.loadingButton}>Loading</button>
                ) : (
                    <button className={style.mintButton} onClick={mintNFT} disabled={isMining}>
                        Mint
                    </button>
                )}
            </div>
        </div>
    );
};

export default MintCard;
