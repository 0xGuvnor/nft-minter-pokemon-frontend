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
                    className="fixed btn btn-circle bg-[#0F1108] text-base-100 border-2 drop-shadow-lg border-base-300 p-[0.4rem] bottom-[6.9rem] lg:right-[8rem] right-[4rem] z-50 md:h-[3rem] md:w-[3rem] h-[2.2rem] w-[3rem] hover:animate-none animate-bounce"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
            )}
        </div>
    );
};

export default ScrollToTop;
