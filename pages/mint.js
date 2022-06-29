import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FadeIn from "react-fade-in";
import MintCard from "../components/MintCard";

const style = {
    wrapper: ``,
};

const mint = () => {
    return (
        <FadeIn>
            <Header title={"Mint"} />
            <MintCard />
            <Footer />
        </FadeIn>
    );
};

export default mint;
