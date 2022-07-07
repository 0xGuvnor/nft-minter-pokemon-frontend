import React, { useEffect, useState } from "react";
import { useContractWrite, useWaitForTransaction } from "wagmi";

const ConfirmTxCard = ({
    multisigAddress,
    MultisigABI,
    toastError,
    toastSuccess,
    toastLoading,
}) => {
    const [txId, setTxId] = useState("");
    const [isMining, setIsMining] = useState(false);

    const { data, isLoading, write } = useContractWrite({
        addressOrName: multisigAddress,
        contractInterface: MultisigABI,
        functionName: "confirmTransaction",
        args: [txId],
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
            console.error(err);
            setIsMining(false);
            toastError(err.message);
        },
    });

    useEffect(() => {
        if (isLoading) {
            setIsMining(true);
        }
    }, [isLoading]);

    return (
        <div className="sm:w-[30rem]">
            <div className="mx-2 my-4 border shadow-xl rounded-box collapse-arrow md:collapse-open collapse border-base-200">
                <input type="checkbox" className="peer" />
                <h1 className="text-lg collapse-title bg-base-300 text-primary-content">
                    2. Confirm Transaction
                </h1>
                <div className="space-y-2 collapse-content bg-accent text-accent-content peer-checked:bg-accent peer-checked:text-accent-content">
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Transaction ID</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Type here"
                            className="w-full input input-bordered bg-accent"
                            onChange={(e) => setTxId(e.target.value)}
                            value={txId}
                        />
                    </div>
                    <div>
                        {isMining ? (
                            <button className="mt-1 text-black btn-block btn loading btn-disabled">
                                Loading
                            </button>
                        ) : (
                            <button
                                className="mt-1 btn-block btn btn-neutral"
                                onClick={() => write()}
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmTxCard;
