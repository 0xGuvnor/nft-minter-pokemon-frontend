import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Image from "next/image";
import Pokedex2 from "../assets/Pokedex2.webp";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";

const Header = ({ title }) => {
    const { isConnected, isDisconnected } = useAccount();

    const [aboutActive, setAboutActive] = useState("");
    const [teamActive, setTeamActive] = useState("");
    const [faqActive, setFaqActive] = useState("");
    const [mintActive, setMintActive] = useState("");
    const [disconnected, setDisconnected] = useState(false);

    const toastWelcome = () => toast("Welcome!", { icon: "🥳", position: "top-center" });

    useEffect(() => {
        if (isDisconnected) {
            setDisconnected(true);
        }
        /* this condition makes sure the toast is only shown once at login */
        if (disconnected && isConnected) {
            toastWelcome();
        }
        if (title == "Mint") {
            setMintActive("tab-active");
        }
    }, [isDisconnected, isConnected]);

    return (
        <div>
            <Head>
                <title>Pokedéx - {title}</title>
                <meta name="description" content="Mint a Pokemon NFT" />
                <link rel="icon" href="/pokeball.png" />
            </Head>

            <div className="navbar bg-[#0F1108] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    Parent
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <div className="items-center flex ml-0 md:ml-2 cursor-pointer transition ease-in-out delay-150 duration-300 hover:scale-110">
                            <Image src={Pokedex2} height={40} width={40} />
                            <h1 className="btn btn-ghost normal-case text-xl -ml-2 hover:bg-transparent">
                                Pokédex
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <div className="tabs lg:space-x-8">
                        <a
                            className={`tab tab-bordered ${aboutActive} hover:tab-active text-[16px] text-white`}
                            onClick={() => {
                                setAboutActive("tab-active");
                                setTeamActive("");
                                setFaqActive("");
                                setMintActive("");
                            }}
                        >
                            About
                        </a>
                        <a
                            className={`tab tab-bordered ${teamActive} hover:tab-active text-[16px] text-white`}
                            onClick={() => {
                                setAboutActive("");
                                setTeamActive("tab-active");
                                setFaqActive("");
                                setMintActive("");
                            }}
                        >
                            Team
                        </a>
                        <a
                            className={`tab tab-bordered ${faqActive} hover:tab-active text-[16px] text-white`}
                            onClick={() => {
                                setAboutActive("");
                                setTeamActive("");
                                setFaqActive("tab-active");
                                setMintActive("");
                            }}
                        >
                            FAQ
                        </a>
                        <Link href="/mint">
                            <a
                                className={`tab tab-bordered ${mintActive} hover:tab-active text-[16px] text-white`}
                                onClick={() => {
                                    setAboutActive("");
                                    setTeamActive("");
                                    setFaqActive("");
                                    setMintActive("tab-active");
                                }}
                            >
                                Mint
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="mr-5 md:mr-1">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
