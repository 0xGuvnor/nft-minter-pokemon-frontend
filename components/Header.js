import Head from "next/head";
import React from "react";
import { RiWallet2Line } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import pokedexLogo from "../assets/pokedex.png";
import Image from "next/image";
import Link from "next/link";

const style = {
    wrapper: `flex justify-between px-6 py-4 bg-[#0F1108] w-screen`,
    logoContainer: `flex items-center cursor-pointer gap-1`,
    logoText: `text-3xl font-bold text-white`,
    navLinks: `flex gap-6 text-2xl items-center text-white`,
    connectButton: `flex items-center gap-1 bg-[#BA274A] rounded-lg w-auto px-3 drop-shadow-xl transition-all hover:bg-[#3A506B] text-white`,
};

const Header = ({ title }) => {
    const connectWithMetamask = useMetamask();
    const disconnect = useDisconnect();
    const address = useAddress();

    const truncateAddress = (address) => {
        const front = address.slice(0, 6);
        const back = address.slice(-4);
        return `${front}...${back}`;
    };

    const Auth = () => {
        return (
            <button className={style.connectButton} onClick={connectWithMetamask}>
                <RiWallet2Line />
                Connect Metamask
            </button>
        );
    };

    const deAuth = () => {
        return (
            <button className={style.connectButton} onClick={disconnect}>
                <FaEthereum />
                {truncateAddress(address)}
            </button>
        );
    };

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
                    <li>About</li>
                    <li>Team</li>
                    <li>Mint</li>
                </ul>
                {address ? deAuth() : Auth()}
            </div>
        </div>
    );
};

export default Header;
