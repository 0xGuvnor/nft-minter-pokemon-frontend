import React from "react";
import FadeIn from "react-fade-in";
import Header from "../components/Header";
import SubmitTxCard from "../components/SubmitTxCard";

const Admin = () => {
    return (
        <div>
            <Header title={"Admin"} />
            <FadeIn>
                <SubmitTxCard />
            </FadeIn>
        </div>
    );
};

export default Admin;
