import React, { useEffect, useState } from "react";
import { useNetwork, useContractReads } from "wagmi";
import networkMapping from "../constants/networkMapping.json";
import PokedexABI from "../constants/Pokedex.json";

const style = {
    wrapper: `flex flex-col items-center justify-center drop-shadow-2xl bg-[#E8E9F3] mix-blend-luminosity pt-4 md:pt-6 mt-4 md:mb-6 mx-auto md:mx-0 text-lg md:text-2xl rounded-2xl`,
    title: `text-xl md:text-3xl mb-2`,
    statsTop: `flex text-center items-center space-x-28 md:space-x-40 p-6 md:pb-12 md:pt-8`,
    statsMiddle: `flex flex-col text-center items-center p-6 md:py-12`,
    statsBottom: `flex text-center items-center space-x-28 md:space-x-40 p-6 md:py-12`,
    statsValue: `text-3xl`,
};

const MintStats = () => {
    const { chain } = useNetwork();

    const [gen1Count, setGen1Count] = useState(0);
    const [gen2Count, setGen2Count] = useState(0);
    const [gen3Count, setGen3Count] = useState(0);
    const [gen4Count, setGen4Count] = useState(0);
    const [gen5Count, setGen5Count] = useState(0);
    const [circulatingSupply, setCirculatingSupply] = useState(0);
    const [pokedexAddress, setPokedexAddress] = useState("");

    const pokedexContract = { addressOrName: pokedexAddress, contractInterface: PokedexABI };

    const { data: tokenStats } = useContractReads({
        contracts: [
            {
                ...pokedexContract,
                functionName: "getPokemonLeftByGenerationCount",
                args: [0],
            },
            {
                ...pokedexContract,
                functionName: "getPokemonLeftByGenerationCount",
                args: [1],
            },
            {
                ...pokedexContract,
                functionName: "getPokemonLeftByGenerationCount",
                args: [2],
            },
            {
                ...pokedexContract,
                functionName: "getPokemonLeftByGenerationCount",
                args: [3],
            },
            {
                ...pokedexContract,
                functionName: "getPokemonLeftByGenerationCount",
                args: [4],
            },
            {
                ...pokedexContract,
                functionName: "_tokenCounter",
            },
        ],
    });

    useEffect(() => {
        if (chain.id) {
            setPokedexAddress(networkMapping[chain.id].Pokedex[0]);
        }
        if (tokenStats && tokenStats.length > 1) {
            setGen1Count(151 - tokenStats[0].toNumber());
            setGen2Count(100 - tokenStats[1].toNumber());
            setGen3Count(135 - tokenStats[2].toNumber());
            setGen4Count(107 - tokenStats[3].toNumber());
            setGen5Count(156 - tokenStats[4].toNumber());
            setCirculatingSupply(tokenStats[5].toNumber());
        }
    }, [chain, tokenStats]);

    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Circulating Supply:</h1>
            <h2>{circulatingSupply}/200</h2>
            <div className={style.statsTop}>
                <div>
                    <h1>Gen. 1 chosen:</h1>
                    <h3 className={style.statsValue}>{gen1Count}/151</h3>
                </div>
                <div>
                    <h1>Gen. 2 chosen:</h1>
                    <h3 className={style.statsValue}>{gen2Count}/100</h3>
                </div>
            </div>
            <div className={style.statsMiddle}>
                <h1>Gen. 5 chosen:</h1>
                <h3 className={style.statsValue}>{gen5Count}/156</h3>
            </div>
            <div className={style.statsBottom}>
                <div>
                    <h1>Gen. 3 chosen:</h1>
                    <h3 className={style.statsValue}>{gen3Count}/135</h3>
                </div>
                <div>
                    <h1>Gen. 4 chosen:</h1>
                    <h3 className={style.statsValue}>{gen4Count}/107</h3>
                </div>
            </div>
        </div>
    );
};

export default MintStats;
