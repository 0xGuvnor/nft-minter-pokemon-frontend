import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FadeIn from "react-fade-in";

const style = {
    wrapper: ``,
};

const mint = () => {
    return (
        <FadeIn>
            <div>
                <Header title={"Mint"} />
                <div className={style.wrapper}>mint</div>

                <Footer />
            </div>
        </FadeIn>
    );
};

export default mint;
