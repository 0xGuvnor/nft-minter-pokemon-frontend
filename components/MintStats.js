import React from "react";
import { useNetwork } from "wagmi";
import networkMapping from "../constants/networkMapping.json";

const style = {
    wrapper: `flex flex-col items-center justify-center drop-shadow-2xl bg-[#E8E9F3] mix-blend-luminosity pt-4 md:pt-6 mt-4 md:mb-6 mx-auto md:mx-0 text-lg md:text-2xl rounded-2xl`,
    title: `text-xl md:text-3xl`,
    statsTop: `flex text-center items-center space-x-28 md:space-x-40 p-6 md:pb-12 md:pt-8`,
    statsMiddle: `flex flex-col text-center items-center p-6 md:py-12`,
    statsBottom: `flex text-center items-center space-x-28 md:space-x-40 p-6 md:py-12`,
    statsValue: `text-3xl`,
};

const MintStats = () => {
    const { chain } = useNetwork();

    const circulatingSupply = 69;
    const gen1Chosen = 1;
    const gen2Chosen = 2;
    const gen3Chosen = 3;
    const gen4Chosen = 4;
    const gen5Chosen = 5;

    const chainId = chain && chain.id;
    const pokedexAddress = networkMapping[chainId].Pokedex[0];

    console.log(pokedexAddress);

    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Circulating Supply:</h1>
            <h2>{circulatingSupply}/200</h2>
            <div className={style.statsTop}>
                <div>
                    <h1>Gen. 1 chosen:</h1>
                    <h3 className={style.statsValue}>{gen1Chosen}/151</h3>
                </div>
                <div>
                    <h1>Gen. 2 chosen:</h1>
                    <h3 className={style.statsValue}>{gen2Chosen}/100</h3>
                </div>
            </div>
            <div className={style.statsMiddle}>
                <h1>Gen. 5 chosen:</h1>
                <h3 className={style.statsValue}>{gen5Chosen}/156</h3>
            </div>
            <div className={style.statsBottom}>
                <div>
                    <h1>Gen. 3 chosen:</h1>
                    <h3 className={style.statsValue}>{gen3Chosen}/135</h3>
                </div>
                <div>
                    <h1>Gen. 4 chosen:</h1>
                    <h3 className={style.statsValue}>{gen4Chosen}/107</h3>
                </div>
            </div>
        </div>
    );
};

export default MintStats;
