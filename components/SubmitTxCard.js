import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useContractRead, useSendTransaction, useWaitForTransaction } from "wagmi";

const SubmitTxCard = ({
    pokedexAddress,
    multisigAddress,
    PokedexABI,
    MultisigABI,
    toastError,
    toastSuccess,
    toastLoading,
}) => {
    // Field values
    const [callingContract, setCallingContract] = useState("");
    const [ethAmount, setEthAmount] = useState("");
    const [functionData, setFunctionData] = useState("");
    const [addressArg, setAddressArg] = useState("");
    const [description, setDescription] = useState("");

    // Fields
    const [showCallingContractField, setShowCallingContractField] = useState(false);
    const [showEthAmountField, setShowEthAmountField] = useState(false);
    const [showFunctionDataField, setShowFunctionDataField] = useState(false);
    const [showAddressArgField, setShowAddressArgField] = useState(false);
    const [showDescriptionField, setShowDescriptionField] = useState(false);

    const [showSubmitButton, setShowSubmitButton] = useState(false);

    // Page Status
    const [pauseMintStatus, setPauseMintStatus] = useState(false);
    const [isMining, setIsMining] = useState(false);
    const [addressArgError, setAddressArgError] = useState(false);

    const [funcName, setFuncName] = useState("");
    const [role, setRole] = useState("");

    const pokedexContract = { addressOrName: pokedexAddress, contractInterface: PokedexABI };
    const multisigContract = { addressOrName: multisigAddress, contractInterface: MultisigABI };

    const { data: getPauseStatus } = useContractRead({
        ...pokedexContract,
        functionName: "paused",
    });

    const { data, isLoading, sendTransaction } = useSendTransaction({
        request: {
            to: callingContract,
            value: ethers.utils.parseEther(ethAmount ? ethAmount.toString() : "0"),
            data: functionData,
        },
        onSuccess(tx) {
            toastLoading(tx.hash);
        },
        onError(err) {
            console.error(err);
            setIsMining(false);
            if (err.code == 4001) {
                toastError(err.message);
            } else {
                toastError("Hmm looks like something went wrong...");
            }
        },
    });

    useWaitForTransaction({
        hash: data?.hash,
        staleTime: 60_000,
        onSuccess(tx) {
            setIsMining(false);
            toastSuccess(tx.transactionHash);
        },
        onError(err) {
            setIsMining(false);
            console.error(err);
            toastError(err.message);
        },
    });

    const pokedexInterface = new ethers.utils.Interface(PokedexABI);
    const multisigInterface = new ethers.utils.Interface(MultisigABI);

    useEffect(() => {
        setPauseMintStatus(getPauseStatus);
        if (isLoading) {
            setIsMining(true);
        }
        try {
            setFunctionData(
                multisigInterface.encodeFunctionData("submitTransaction", [
                    pokedexAddress,
                    0,
                    pokedexInterface.encodeFunctionData(
                        funcName,
                        role ? [role, addressArg] : [addressArg]
                    ),
                    description,
                ])
            );
            setAddressArgError(false);
        } catch (err) {
            console.error(err);
            setAddressArgError(true);
        }
    }, [getPauseStatus, role, addressArg, isLoading, pokedexAddress]);

    return (
        <div className="sm:w-[30rem]">
            <div className="mx-2 my-4 border shadow-xl rounded-box collapse-arrow collapse md:collapse-open border-base-200">
                <input type="checkbox" className="peer" />
                <h1 className="text-lg collapse-title bg-base-300 text-primary-content">
                    1. Submit Transaction
                </h1>
                <div className="space-y-2 collapse-content bg-accent text-accent-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Function to Call</span>
                        </label>
                        <select
                            className="select select-bordered bg-accent"
                            onChange={(e) => {
                                if (e.target.value === "Pause/Unpause Minting") {
                                    // Field visibility
                                    setShowCallingContractField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowAddressArgField(false);
                                    setShowDescriptionField(false);
                                    setShowSubmitButton(true);

                                    // Field values
                                    setCallingContract(multisigAddress);
                                    setEthAmount(0);
                                    pauseMintStatus
                                        ? setFunctionData(
                                              multisigInterface.encodeFunctionData(
                                                  "submitTransaction",
                                                  [pokedexAddress, 0, "0x3f4ba83a" /* unpause */]
                                              )
                                          )
                                        : setFunctionData(
                                              multisigInterface.encodeFunctionData(
                                                  "submitTransaction",
                                                  [pokedexAddress, 0, "0x8456cb59" /* pause */]
                                              )
                                          );
                                    setAddressArg("");
                                    setFuncName("");
                                    setRole("");
                                    setDescription("");
                                } else if (e.target.value === "Grant Pauser Role") {
                                    setShowCallingContractField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowAddressArgField(true);
                                    setShowDescriptionField(false);
                                    setShowSubmitButton(true);

                                    setCallingContract(multisigAddress);
                                    setEthAmount(0);
                                    setFunctionData("");
                                    setAddressArg("");
                                    setFuncName("grantRole");
                                    setRole(
                                        "0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a"
                                    );
                                    setDescription("");
                                } else if (e.target.value === "Revoke Pauser Role") {
                                    setShowCallingContractField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowAddressArgField(true);
                                    setShowDescriptionField(false);
                                    setShowSubmitButton(true);

                                    setCallingContract(multisigAddress);
                                    setEthAmount(0);
                                    setFunctionData("");
                                    setAddressArg("");
                                    setFuncName("revokeRole");
                                    setRole(
                                        "0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a"
                                    );
                                    setDescription("");
                                } else if (e.target.value === "Grant URI Assigner Role") {
                                    setShowCallingContractField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowAddressArgField(true);
                                    setShowDescriptionField(false);
                                    setShowSubmitButton(true);

                                    setCallingContract(multisigAddress);
                                    setEthAmount(0);
                                    setFunctionData("");
                                    setAddressArg("");
                                    setFuncName("grantRole");
                                    setRole(
                                        "0xeb565a5d2560fbcd61124fb11c656fd5c0bb173b6d55ef481d5b235d116cbeb1"
                                    );
                                    setDescription("");
                                } else if (e.target.value === "Revoke URI Assigner Role") {
                                    setShowCallingContractField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowAddressArgField(true);
                                    setShowDescriptionField(false);
                                    setShowSubmitButton(true);

                                    setCallingContract(multisigAddress);
                                    setEthAmount(0);
                                    setFunctionData("");
                                    setAddressArg("");
                                    setFuncName("revokeRole");
                                    setRole(
                                        "0xeb565a5d2560fbcd61124fb11c656fd5c0bb173b6d55ef481d5b235d116cbeb1"
                                    );
                                    setDescription("");
                                } else if (e.target.value === "Withdraw ETH") {
                                    setShowCallingContractField(false);
                                    setShowEthAmountField(false);
                                    setShowFunctionDataField(false);
                                    setShowAddressArgField(true);
                                    setShowDescriptionField(false);
                                    setShowSubmitButton(true);

                                    setCallingContract(multisigAddress);
                                    setEthAmount(0);
                                    setFunctionData("");
                                    setAddressArg("");
                                    setFuncName("withdrawETH");
                                    setRole("");
                                    setDescription("");
                                } else if (e.target.value === "Advanced") {
                                    setShowCallingContractField(true);
                                    setShowEthAmountField(true);
                                    setShowFunctionDataField(true);
                                    setShowAddressArgField(false);
                                    setShowDescriptionField(true);
                                    setShowSubmitButton(true);

                                    setCallingContract("");
                                    setEthAmount(0);
                                    setFunctionData("");
                                    setAddressArg("");
                                    setFuncName("");
                                    setRole("");
                                    setDescription("");
                                }
                            }}
                        >
                            <option selected disabled>
                                --Pick one--
                            </option>
                            <option>Pause/Unpause Minting</option>
                            <option>Grant Pauser Role</option>
                            <option>Revoke Pauser Role</option>
                            <option>Grant URI Assigner Role</option>
                            <option>Revoke URI Assigner Role</option>
                            <option>Withdraw ETH</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                    {showCallingContractField && (
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Contract to Call</span>
                            </label>
                            <input
                                type="text"
                                placeholder="0x..."
                                className="w-full input input-bordered bg-accent"
                                onChange={(e) => setCallingContract(e.target.value)}
                                value={callingContract}
                            />
                        </div>
                    )}
                    {showEthAmountField && (
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">ETH Amount</span>
                            </label>
                            <input
                                type="number"
                                placeholder="0, if none"
                                className="w-full input input-bordered bg-accent"
                                onChange={(e) => setEthAmount(e.target.value)}
                                value={ethAmount}
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
                    {showAddressArgField && (
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                                {addressArgError && (
                                    <span className="label-text-alt text-error">
                                        Invalid Address
                                    </span>
                                )}
                            </label>
                            <input
                                type="text"
                                placeholder="0x..."
                                className={`w-full input input-bordered bg-accent ${
                                    addressArgError ? "input-error" : ""
                                }`}
                                onChange={(e) => setAddressArg(e.target.value)}
                                value={addressArg}
                            />
                        </div>
                    )}
                    {showDescriptionField && (
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="w-full input input-bordered bg-accent"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                        </div>
                    )}
                    {showSubmitButton && (
                        <div>
                            {isMining ? (
                                <button className="mt-1 text-black btn-block btn loading btn-disabled">
                                    Loading
                                </button>
                            ) : (
                                <button
                                    className="mt-1 btn-block btn btn-neutral"
                                    onClick={() => sendTransaction()}
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubmitTxCard;
