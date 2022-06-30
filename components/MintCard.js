import Image from "next/image";
import React, { useEffect, useState } from "react";
import Pokeballs from "../assets/Pokeballs.webp";

const style = {
    container: `flex justify-center items-center z-10`,
    wrapper: `flex flex-col shadow-2xl rounded-2xl m-4 md:my-16 px-6 pt-6 pb-2 bg-[#E8E9F3] items-center justify-center w-[22rem] md:max-w-none`,
    imageWrapper: `h-72 w-72 items-center flex justify-center`,
    mintFeeTitle: `text-3xl m-4 mb-4`,
    mintAmountSelection: `text-xl space-x-4 flex justify-between`,
    mintAmountValue: `py-4 w-36 h-14 text-center text-2xl rounded-xl outline outline-2 bg-[#E8E9F3]`,
    mintAmountStepper: `p-4 px-6 h-14 bg-black flex items-center text-3xl text-white rounded-xl hover:bg-[#CECECE] hover:text-black`,
    mintButton: `p-4 m-4 bg-[#04E762] w-[18.8rem] md:w-full rounded-xl text-xl font-extrabold hover:bg-[#89FC00]`,
};

const MintCard = () => {
    const [mintAmount, setMintAmount] = useState(1);
    const [mintFee, setMintFee] = useState(0.01);

    useEffect(() => {
        setMintFee(0.01 * mintAmount);
    }, [mintAmount]);

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount > 9) return;
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
                    <input className={style.mintAmountValue} value={mintAmount} />
                    <button className={style.mintAmountStepper} onClick={handleIncrement}>
                        +
                    </button>
                </div>
                <button className={style.mintButton}>Mint</button>
            </div>
        </div>
    );
};

export default MintCard;
