import Head from "next/head";
import React from "react";
import Pokedex2 from "../assets/Pokedex2.webp";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const style = {
    wrapper: `flex justify-between px-6 py-4 bg-[#0F1108] w-screen items-center`,
    logoContainer: `flex items-center cursor-pointer space-x-2`,
    logoText: `md:text-2xl md:font-bold text-white hidden md:block`,
    navLinks: `flex ml-16 text-lg items-center text-white`,
    navLink: `lg:px-8 md:px-4 sm:px-2 hidden sm:block`,
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
                        <Image src={Pokedex2} height={40} width={40} />
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
