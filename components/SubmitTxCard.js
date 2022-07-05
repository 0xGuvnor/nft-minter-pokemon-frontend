import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useContractRead, useContractWrite, useNetwork } from "wagmi";
import networkMapping from "../constants/networkMapping.json";
import PokedexABI from "../constants/Pokedex.json";
import MultisigABI from "../constants/MultiSig.json";

const SubmitTxCard = () => {
    const { chain } = useNetwork();

    const [pokedexAddress, setPokedexAddress] = useState("");
    const [multisigAddress, setMultisigAddress] = useState("");
    const [pauseMintStatus, setPauseMintStatus] = useState("");
    const [recipientAddress, setRecipientAddress] = useState("");
    const [ethAmount, setEthAmount] = useState("");
    const [functionData, setFunctionData] = useState("");
    const [showSubmit, setShowSubmit] = useState(false);
    const [showAddressField, setShowAddressField] = useState(false);
    const [showEthAmountField, setShowEthAmountField] = useState(false);
    const [showFunctionDataField, setShowFunctionDataField] = useState(false);

    const pokedexContract = { addressOrName: pokedexAddress, contractInterface: PokedexABI };
    const multisigContract = { addressOrName: multisigAddress, contractInterface: MultisigABI };

    const { data: getPauseStatus } = useContractRead({
        ...pokedexContract,
        functionName: "paused",
    });

    const pauseMint = useContractWrite({
        ...multisigContract,
        functionName: "submitTransaction",
        args: [pokedexAddress, 0],
    });

    const unpauseMint = useContractWrite({
        ...multisigContract,
        functionName: "submitTransaction",
        args: [pokedexAddress, 0],
    });

    useEffect(() => {
        if (chain?.id) {
            setPokedexAddress(networkMapping[chain.id].Pokedex[0]);
            setMultisigAddress(networkMapping[chain.id].MultiSig[0]);
        }
        setPauseMintStatus(getPauseStatus);
    }, [chain?.id, getPauseStatus]);

    console.log(multisigAddress);

    return (
        <div className="2xl:w-1/4">
            <div
                tabIndex="0"
                className="mx-2 my-4 shadow-xl rounded-box collapse-arrow collapse group"
            >
                <input type="checkbox" className="peer" />
                <h1 className="text-lg collapse-title bg-base-300 text-primary-content">
                    1. Submit Transaction
                </h1>
                <div className="space-y-2 collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Function to Call</span>
                        </label>
                        <select
                            className="select select-bordered bg-accent"
                            onChange={(e) => {
                                if (e.target.value === "Pause/Unpause Minting") {
                                    setShowSubmit(true);
                                    setShowAddressField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);

                                    setFunctionData("");
                                } else if (e.target.value === "Withdraw ETH") {
                                    setShowSubmit(true);
                                    setShowAddressField(true);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);

                                    setFunctionData("");
                                } else if (e.target.value === "Advanced") {
                                    setShowSubmit(true);
                                    setShowAddressField(true);
                                    setShowEthAmountField(true);
                                    setShowFunctionDataField(true);
                                }
                            }}
                            onFocus={(e) => console.log(e)}
                        >
                            <option selected disabled>
                                --Pick one--
                            </option>
                            <option>Pause/Unpause Minting</option>
                            <option>Withdraw ETH</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                    {showAddressField && (
                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Recipient Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="0x..."
                                className="w-full max-w-xs input input-bordered bg-accent"
                                onChange={(e) => setRecipientAddress(e.target.value)}
                                value={recipientAddress}
                            />
                        </div>
                    )}
                    {showEthAmountField && (
                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">ETH Amount (if any)</span>
                            </label>
                            <input
                                type="number"
                                placeholder="0, if empty"
                                className="w-full max-w-xs input input-bordered bg-accent"
                                onChange={(e) =>
                                    e.target.value
                                        ? setEthAmount(ethers.utils.parseEther(e.target.value))
                                        : setEthAmount("")
                                }
                                value={ethAmount ? ethers.utils.formatEther(ethAmount) : ""}
                            />
                        </div>
                    )}
                    {showFunctionDataField && (
                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Function Data</span>
                            </label>
                            <input
                                type="text"
                                placeholder="0x..."
                                className="w-full max-w-xs input input-bordered bg-accent"
                                onChange={(e) => setFunctionData(e.target.value)}
                                value={functionData}
                            />
                        </div>
                    )}
                    {showSubmit && (
                        <div>
                            <button className="w-full max-w-xs mt-1 btn btn-neutral">Submit</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubmitTxCard;
