import React from "react";
import Header from "../components/Header";
import FadeIn from "react-fade-in";
import MintCard from "../components/MintCard";
import MintStats from "../components/MintStats";

const style = {
    wrapper: `flex flex-col md:flex-row justify-center items-center md:mb-8 md:mt-4`,
};

const mint = () => {
    return (
        <FadeIn>
            <Header title={"Mint"} />
            <div className={style.wrapper}>
                <MintStats />
                <MintCard />
            </div>
        </FadeIn>
    );
};

export default mint;
