import React, { useEffect, useState } from "react";
import { useContractReads } from "wagmi";

const TxTable = ({ multisigAddress, MultisigABI }) => {
    const [activeTab1, setActiveTab1] = useState(true);
    const [activeTab2, setActiveTab2] = useState(false);
    const [activeTab3, setActiveTab3] = useState(false);
    const [owners, setOwners] = useState([]);
    const [transactionCount, setTransactionCount] = useState(0);

    const multisigContract = { addressOrName: multisigAddress, contractInterface: MultisigABI };
    const { data: multisigStats } = useContractReads({
        contracts: [
            { ...multisigContract, functionName: "getOwners" },
            { ...multisigContract, functionName: "getTransactionCount" },
        ],
    });

    // console.log(owners);

    useEffect(() => {
        if (multisigStats) {
            setOwners(multisigStats[0]);
            setTransactionCount(multisigStats[1].toNumber());
        }
    }, [multisigStats]);

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
            {activeTab1 && (
                <table className="table table-compact shadow-xl rounded-box w-[90rem]">
                    <thead>
                        <tr className="text-primary-content">
                            <th>Transaction ID</th>
                            <th>To</th>
                            <th>Value</th>
                            <th>Data</th>
                            <th>Num. Confirmations</th>
                            <th>Confirmed</th>
                            <th>Executed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <td className="bg-accent text-accent-content">1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Lorelei Blackstone</td>
                            <td>Data Coordiator</td>
                            <td>Witting, Kutch and Greenfelder</td>
                            <td>Kazakhstan</td>
                            <td>6/3/2020</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            )}
            {activeTab2 && (
                <table className="table table-compact shadow-xl rounded-box w-[90rem]">
                    <thead>
                        <tr className="text-primary-content">
                            <th>Transaction ID</th>
                            <th>To</th>
                            <th>Value</th>
                            <th>Data</th>
                            <th>Num. Confirmations</th>
                            <th>Confirmed</th>
                            <th>Executed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <td className="bg-accent text-accent-content">1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Lorelei Blackstone</td>
                            <td>Data Coordiator</td>
                            <td>Witting, Kutch and Greenfelder</td>
                            <td>Kazakhstan</td>
                            <td>6/3/2020</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            )}
            {activeTab3 && (
                <table className="table table-compact shadow-xl rounded-box w-[90rem]">
                    <thead>
                        <tr className="text-primary-content">
                            <th>Transaction ID</th>
                            <th>To</th>
                            <th>Value</th>
                            <th>Data</th>
                            <th>Num. Confirmations</th>
                            <th>Confirmed</th>
                            <th>Executed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <td className="bg-accent text-accent-content">1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Lorelei Blackstone</td>
                            <td>Data Coordiator</td>
                            <td>Witting, Kutch and Greenfelder</td>
                            <td>Kazakhstan</td>
                            <td>6/3/2020</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TxTable;
