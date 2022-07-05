import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useContractRead, useContractWrite } from "wagmi";

const SubmitTxCard = ({ pokedexAddress, multisigAddress, PokedexABI, MultisigABI }) => {
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
        args: [pokedexAddress, 0, "0x8456cb59"],
    });

    const unpauseMint = useContractWrite({
        ...multisigContract,
        functionName: "submitTransaction",
        args: [pokedexAddress, 0, "0x3f4ba83a"],
    });

    useEffect(() => {
        setPauseMintStatus(getPauseStatus);
    }, [getPauseStatus]);

    console.log(pauseMintStatus);

    return (
        <div className="2xl:w-1/4">
            <div className="mx-2 my-4 shadow-xl rounded-box collapse-arrow collapse">
                <input type="checkbox" className="peer" />
                <h1 className="text-lg collapse-title bg-base-300 text-primary-content">
                    1. Submit Transaction
                </h1>
                <div className="space-y-2 collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Function to Call</span>
                        </label>
                        <select
                            className="select select-bordered bg-accent"
                            onChange={(e) => {
                                if (e.target.value === "Pause/Unpause Minting") {
                                    setShowAddressField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowSubmit(true);
                                } else if (e.target.value === "Withdraw ETH") {
                                    setShowAddressField(true);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowSubmit(true);
                                } else if (e.target.value === "Advanced") {
                                    setShowAddressField(true);
                                    setShowEthAmountField(true);
                                    setShowFunctionDataField(true);
                                    setShowSubmit(true);
                                }
                            }}
                        >
                            <option selected disabled>
                                --Pick one--
                            </option>
                            <option>Pause/Unpause Minting</option>
                            <option>Withdraw ETH</option>
                            <option>Grant Pauser Role</option>
                            <option>Revoke Pauser Role</option>
                            <option>Grant URI Assigner Role</option>
                            <option>Revoke URI Assigner Role</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                    {showAddressField && (
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Recipient Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="0x..."
                                className="w-full input input-bordered bg-accent"
                                onChange={(e) => setRecipientAddress(e.target.value)}
                                value={recipientAddress}
                            />
                        </div>
                    )}
                    {showEthAmountField && (
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">ETH Amount (if any)</span>
                            </label>
                            <input
                                type="number"
                                placeholder="0, if empty"
                                className="w-full input input-bordered bg-accent"
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
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Function Data</span>
                            </label>
                            <input
                                type="text"
                                placeholder="0x..."
                                className="w-full input input-bordered bg-accent"
                                onChange={(e) => setFunctionData(e.target.value)}
                                value={functionData}
                            />
                        </div>
                    )}
                    {showSubmit && (
                        <div>
                            <button className="w-full mt-1 btn btn-neutral">Submit</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubmitTxCard;
