import { ethers } from "ethers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
    const [isLoading, setIsLoading] = useState(false);

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

    console.log(status, signer);

    const mintNFT = async () => {
        try {
            const tx = await pokedexContract.requestMint(mintAmount, {
                value: ethers.utils.parseEther(mintFee.toString()),
            });
            setIsLoading(true);
            await tx.wait(1);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
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
                {isLoading ? (
                    <button className={style.loadingButton}>Loading</button>
                ) : (
                    <button className={style.mintButton} onClick={mintNFT} disabled={isLoading}>
                        Mint
                    </button>
                )}
            </div>
        </div>
    );
};

export default MintCard;
