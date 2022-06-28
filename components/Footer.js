import React from "react";
import { FaTelegram } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";

const style = {
    borderWrapper: `flex justify-between`,
    borderSides: `border-t-2 border-transparent w-1/12`,
    borderCenter: `border-t-[1px] border-[#30323D] w-10/12`,
    detailsWrapper: `flex justify-between items-center h-16`,
    socialIcons: `flex text-md space-x-2 md:space-x-4 shrink w-1/3 justify-center`,
    centerDetails: `text-center text-sm flex flex-col`,
    rightDetails: `w-1/3 justify-center flex text-sm`,
};

const Footer = () => {
    return (
        <div>
            <div className={style.borderWrapper}>
                <div className={style.borderSides} />
                <div className={style.borderCenter} />
                <div className={style.borderSides} />
            </div>
            <div className={style.detailsWrapper}>
                <div className={style.socialIcons}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <GrInstagram />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <BsTwitter />
                    </a>

                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                        <SiDiscord />
                    </a>
                    <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
                        <FaTelegram />
                    </a>

                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </div>
                <div className={style.centerDetails}>
                    <a
                        className="text-blue-600"
                        href="https://faucets.chain.link/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get free testnet Ether
                    </a>
                    <a
                        href="https://github.com/0xbagholder"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Built by 0xbagholder
                    </a>
                </div>
                <div className={style.rightDetails}>Pokedéx Labs © 2022 </div>
            </div>
        </div>
    );
};

export default Footer;
