import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
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
                />
            </FadeIn>
        </div>
    );
};

export default Admin;
