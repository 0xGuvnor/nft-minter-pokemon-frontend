import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useBalance, useContractReads } from "wagmi";
import {
    GET_ACTIVE_TRANSACTIONS,
    GET_ALL_TRANSACTIONS,
    GET_EXECUTED_TRANSACTIONS,
} from "../constants/subgraphQueries";

const TxTable = ({ multisigAddress, MultisigABI }) => {
    const [activeTab1, setActiveTab1] = useState(true);
    const [activeTab2, setActiveTab2] = useState(false);
    const [activeTab3, setActiveTab3] = useState(false);
    const [owners, setOwners] = useState([]);
    const [transactionCount, setTransactionCount] = useState(0);
    const [balance, setBalance] = useState(0);

    const multisigContract = { addressOrName: multisigAddress, contractInterface: MultisigABI };
    const { data: multisigStats } = useContractReads({
        contracts: [
            { ...multisigContract, functionName: "getOwners" },
            { ...multisigContract, functionName: "getTransactionCount" },
        ],
    });
    const { data: getBalance, isLoading: loadingBalance } = useBalance({
        addressOrName: multisigAddress,
    });

    const {
        loading: loadingActive,
        error: errorActive,
        data: tableActive,
    } = useQuery(GET_ACTIVE_TRANSACTIONS);
    const {
        loading: loadingExecuted,
        error: errorExecuted,
        data: tableExecuted,
    } = useQuery(GET_EXECUTED_TRANSACTIONS);
    const { loading: loadingAll, error: errorAll, data: tableAll } = useQuery(GET_ALL_TRANSACTIONS);

    useEffect(() => {
        if (multisigStats) {
            setOwners(multisigStats[0]);
            setTransactionCount(multisigStats[1]?.toNumber());
        }
        if (loadingBalance) {
            setBalance(getBalance);
        }
    }, [multisigStats, loadingBalance]);

    return (
        <div className="z-50 mx-2 mb-10">
            <div className="ml-1 translate-y-1 tabs">
                <a
                    className={`tab tab-lifted ${activeTab1 ? "tab-active" : ""}`}
                    onClick={() => {
                        setActiveTab1(true);
                        setActiveTab2(false);
                        setActiveTab3(false);
                    }}
                >
                    Active
                </a>

                <a
                    className={`tab tab-lifted ${activeTab2 ? "tab-active" : ""}`}
                    onClick={() => {
                        setActiveTab1(false);
                        setActiveTab2(true);
                        setActiveTab3(false);
                    }}
                >
                    Executed
                </a>
                <a
                    className={`tab tab-lifted ${activeTab3 ? "tab-active" : ""}`}
                    onClick={() => {
                        setActiveTab1(false);
                        setActiveTab2(false);
                        setActiveTab3(true);
                    }}
                >
                    All
                </a>
            </div>
            {activeTab1 &&
                (loadingActive || !tableActive ? (
                    <div>Loading...</div>
                ) : (
                    <table className="table table-compact shadow-xl rounded-box w-[90rem]">
                        <thead>
                            <tr className="text-primary-content">
                                <th>Transaction ID</th>
                                <th>Created By</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Data</th>
                                <th>Description</th>
                                <th>Num. Confirmations</th>
                                <th>Executable</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableActive.aggTransactions.map((row) => (
                                <tr className="hover" key={row.txId}>
                                    <td className="bg-accent">{row.txId}</td>
                                    <td className="bg-accent">
                                        {row.createdBy.slice(0, 6)}...{row.createdBy.slice(-4)}
                                    </td>
                                    <td className="bg-accent">
                                        {row.to.slice(0, 6)}...{row.to.slice(-4)}
                                    </td>
                                    <td className="bg-accent">{row.value}</td>
                                    {row.data.length > 40 ? (
                                        <td className="text-xs bg-accent">
                                            {row.data.slice(0, row.data.length / 3)}
                                            <br />
                                            {row.data.slice(
                                                row.data.length / 3,
                                                row.data.length - row.data.length / 3
                                            )}
                                            <br />
                                            {row.data.slice(-(row.data.length / 3))}
                                        </td>
                                    ) : (
                                        <td className="text-xs bg-accent">{row.data}</td>
                                    )}
                                    <td className="bg-accent">{row.description}</td>
                                    <td className="bg-accent">
                                        {row.numConfirmations} / {row.numConfirmationsRequired}
                                    </td>
                                    <td className="bg-accent">{row.executable ? "Yes" : "No"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
            {activeTab2 &&
                (loadingExecuted || !tableExecuted ? (
                    <div>Loading...</div>
                ) : (
                    <table className="table table-compact shadow-xl rounded-box w-[90rem]">
                        <thead>
                            <tr className="text-primary-content">
                                <th>Transaction ID</th>
                                <th>Created By</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Data</th>
                                <th>Description</th>
                                <th>Num. Confirmations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableExecuted.aggTransactions.map((row) => (
                                <tr className="hover" key={row.txId}>
                                    <td className="bg-accent">{row.txId}</td>
                                    <td className="bg-accent">
                                        {row.createdBy.slice(0, 6)}...{row.createdBy.slice(-4)}
                                    </td>
                                    <td className="bg-accent">
                                        {row.to.slice(0, 6)}...{row.to.slice(-4)}
                                    </td>
                                    <td className="bg-accent">{row.value}</td>
                                    {row.data.length > 40 ? (
                                        <td className="text-xs bg-accent">
                                            {row.data.slice(0, row.data.length / 3)}
                                            <br />
                                            {row.data.slice(
                                                row.data.length / 3,
                                                row.data.length - row.data.length / 3
                                            )}
                                            <br />
                                            {row.data.slice(-(row.data.length / 3))}
                                        </td>
                                    ) : (
                                        <td className="text-xs bg-accent">{row.data}</td>
                                    )}
                                    <td className="bg-accent">{row.description}</td>
                                    <td className="bg-accent">
                                        {row.numConfirmations} / {row.numConfirmationsRequired}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
            {activeTab3 &&
                (loadingAll || !tableAll ? (
                    <div>Loading...</div>
                ) : (
                    <table className="table table-compact shadow-xl rounded-box w-[90rem]">
                        <thead>
                            <tr className="text-primary-content">
                                <th></th>
                                <th>Transaction ID</th>
                                <th>Transaction Type</th>
                                <th>Sent By</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Data</th>
                                <th>Description</th>
                                <th>Num. Confirmations</th>
                                <th>Executed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableAll.transactions.map((row) => (
                                <tr className="hover" key={row.id}>
                                    <td className="bg-accent">{row.id}</td>
                                    <td className="bg-accent">{row.aggTransaction.txId}</td>
                                    <td className="bg-accent">{row.transactionType}</td>
                                    <td className="bg-accent">
                                        {row.sentBy.slice(0, 6)}...{row.sentBy.slice(-4)}
                                    </td>
                                    <td className="bg-accent">
                                        {row.aggTransaction.to.slice(0, 6)}...
                                        {row.aggTransaction.to.slice(-4)}
                                    </td>
                                    <td className="bg-accent">{row.aggTransaction.value}</td>
                                    {row.aggTransaction.data.length > 40 ? (
                                        <td className="text-xs bg-accent">
                                            {row.aggTransaction.data.slice(
                                                0,
                                                row.aggTransaction.data.length / 3
                                            )}
                                            <br />
                                            {row.aggTransaction.data.slice(
                                                row.aggTransaction.data.length / 3,
                                                row.aggTransaction.data.length -
                                                    row.aggTransaction.data.length / 3
                                            )}
                                            <br />
                                            {row.aggTransaction.data.slice(
                                                -(row.aggTransaction.data.length / 3)
                                            )}
                                        </td>
                                    ) : (
                                        <td className="text-xs bg-accent">
                                            {row.aggTransaction.data}
                                        </td>
                                    )}
                                    <td className="bg-accent">{row.aggTransaction.description}</td>
                                    <td className="bg-accent">{`${row.aggTransaction.numConfirmations} / ${row.aggTransaction.numConfirmationsRequired}`}</td>
                                    <td className="bg-accent">
                                        {row.aggTransaction.executed ? "Yes" : "No"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
        </div>
    );
};

export default TxTable;
