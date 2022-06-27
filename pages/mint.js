import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const style = {
    wrapper: ``,
};

const mint = () => {
    return (
        <div>
            <Header title={"Mint"} />
            <div className={style.wrapper}>mint</div>

            <Footer />
        </div>
    );
};

export default mint;
