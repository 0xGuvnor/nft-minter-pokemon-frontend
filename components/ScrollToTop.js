import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    return (
        <div className="relative">
            {showTopBtn && (
                <FaArrowUp
                    className="fixed rounded-full bg-black text-base-100 border-2 drop-shadow-lg border-base-300 p-[0.4rem] cursor-pointer bottom-[6.9rem] right-[4rem] z-50 h-[2.2rem] w-[2.2rem] animate-bounce"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
            )}
        </div>
    );
};

export default ScrollToTop;
