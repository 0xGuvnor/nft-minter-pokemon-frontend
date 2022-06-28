import React from "react";

const style = {
    wrapper: `container mx-auto`,
    title: `text-5xl text-center underline mb-4`,
};

const FAQ = () => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>FAQ</h1>
        </div>
    );
};

export default FAQ;
