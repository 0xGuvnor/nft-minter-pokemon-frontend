import React from "react";

const style = {
    wrapper: `flex flex-col items-center justify-center bg-white`,
};

const MintStats = () => {
    const circulatingSupply = 69;
    const gen1Chosen = 1;
    const gen2Chosen = 2;
    const gen3Chosen = 3;
    const gen4Chosen = 4;
    const gen5Chosen = 5;

    return (
        <div className={style.wrapper}>
            <h1>Circulating Supply: {circulatingSupply}/200</h1>
            <div className="container mx-auto">
                <div className="relative left-0 top-0 h-16 w-16">
                    Gen 1 selected: {gen1Chosen}/xx
                </div>
                <div className="relative right-0 top-0 h-16 w-16">
                    Gen 2 selected: {gen2Chosen}/xx
                </div>
                <div className="relative bottom-0 left-0 h-16 w-16">
                    Gen 3 selected: {gen3Chosen}/xx
                </div>
                <div className="relative bottom-0 right-0 h-16 w-16">
                    Gen 4 selected: {gen4Chosen}/xx
                </div>
            </div>
        </div>
    );
};

export default MintStats;
