import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FadeIn from "react-fade-in";
import { useAccount } from "wagmi";
import MintCard from "../components/MintCard";
import MintStats from "../components/MintStats";

const style = {
    wrapper: `flex flex-col md:flex-row justify-center items-center md:mb-8 md:mt-4`,
};

const Mint = () => {
    const { isConnected } = useAccount();

    const [connected, setConnected] = useState(false);

    useEffect(() => {
        setConnected(isConnected);
    }, [isConnected]);

    return (
        <div>
            <Header title={"Mint"} />
            <FadeIn>
                {connected ? (
                    <div className={style.wrapper}>
                        <MintStats />
                        <MintCard />
                    </div>
                ) : (
                    <div className="min-h-screen flex justify-center items-center">
                        <div className="alert alert-error shadow-lg w-2/3 -translate-y-24">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Oops! You need to connect your wallet to mint 😅</span>
                            </div>
                        </div>
                    </div>
                )}
            </FadeIn>
        </div>
    );
};

export default Mint;
