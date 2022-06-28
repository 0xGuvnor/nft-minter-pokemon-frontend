import Head from "next/head";
import React from "react";
import { RiWallet2Line } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { useAddress, useMetamask, useDisconnect, useBalance } from "@thirdweb-dev/react";
import pokedexLogo from "../assets/pokedex.png";
import Image from "next/image";
import Link from "next/link";
import blockies from "ethereum-blockies";

const style = {
    wrapper: `flex justify-between px-6 py-4 bg-[#0F1108] w-screen`,
    logoContainer: `flex items-center cursor-pointer space-x-1`,
    logoText: `text-2xl font-bold text-white`,
    navLinks: `flex text-lg items-center text-white`,
    navLink: `lg:px-8 md:px-4 sm:px-2`,
    connectButton: `flex items-center gap-1 bg-[#BA274A] rounded-lg w-auto px-3 drop-shadow-xl transition-all hover:bg-[#3A506B] text-white`,
    connectedButton: `flex flex-row bg-[#f9dc5c] items-center mt-1.5 rounded-lg text-black text-sm h-7`,
    walletBalance: `flex flex-row justify-center items-center rounded-l-lg pl-3 py-1 gap-1`,
    ethIcon: `text-md`,
    innerButton: `bg-[#BA274A] hover:bg-[#3A506B] px-2 py-2 rounded-lg flex flex-row gap-2 ml-1 text-white`,
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

    const blockie = address ? blockies.create({ seed: address }).toDataURL() : undefined;

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
            <div className={style.connectedButton}>
                <div className={style.walletBalance}>
                    {420.69}
                    <div className={style.ethIcon}>
                        <FaEthereum />
                    </div>
                </div>
                <button className={style.innerButton} onClick={disconnect}>
                    <Image src={blockie} height={20} width={20} />
                    {truncateAddress(address)}
                </button>
            </div>
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
                    <li className={style.navLink}>About</li>
                    <li className={style.navLink}>Team</li>
                    <li className={style.navLink}>FAQ</li>
                    <li className={style.navLink}>
                        <Link href="/mint">
                            <a>Mint</a>
                        </Link>
                    </li>
                </ul>
                {address ? deAuth() : Auth()}
            </div>
        </div>
    );
};

export default Header;
