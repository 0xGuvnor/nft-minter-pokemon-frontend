import Head from "next/head";
import React from "react";
import pokedexLogo from "../assets/pokedex.png";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const style = {
    wrapper: `flex justify-between px-6 py-4 bg-[#0F1108] w-screen items-center`,
    logoContainer: `flex items-center cursor-pointer space-x-1`,
    logoText: `md:text-2xl md:font-bold md:text-white`,
    navLinks: `flex text-lg items-center text-white`,
    navLink: `lg:px-8 md:px-4 sm:px-2`,
    connectButton: `flex items-center gap-1 bg-[#BA274A] rounded-lg w-auto px-3 drop-shadow-xl transition-all hover:bg-[#3A506B] text-white`,
    connectedButton: `flex flex-row bg-[#f9dc5c] items-center mt-1.5 rounded-lg text-black text-sm h-7`,
    walletBalance: `flex flex-row justify-center items-center rounded-l-lg pl-3 py-1 gap-1`,
    ethIcon: `text-md`,
    innerButton: `bg-[#BA274A] hover:bg-[#3A506B] px-2 py-2 rounded-lg flex flex-row gap-2 ml-1 text-white`,
};

const Header = ({ title }) => {
    return (
        <div>
            <Head>
                <title>Pokedéx - {title}</title>
                <meta name="description" content="Mint a Pokemon NFT" />
                <link rel="icon" href="/pokeball.png" />
            </Head>

            <div className={style.wrapper}>
                <Link href="/">
                    <div className={style.logoContainer}>
                        <Image src={pokedexLogo} height={40} width={40} />
                        <h1 className={style.logoText}>Pokédex</h1>
                    </div>
                </Link>
                <ul className={style.navLinks}>
                    <li className={style.navLink}>About</li>
                    <li className={style.navLink}>Team</li>
                    <li className={style.navLink}>FAQ</li>
                    <li className={style.navLink}>
                        <Link href="/mint">
                            <a>Mint</a>
                        </Link>
                    </li>
                </ul>
                <ConnectButton />
            </div>
        </div>
    );
};

export default Header;
