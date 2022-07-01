import Link from "next/link";
import React from "react";
import { openseaCollection } from "../constants/urlLinks";

const style = {
    wrapper: `relative bg-fixed bg-repeat bg-[length:160px_80px] bg-[url('https://images6.fanpop.com/image/photos/40000000/pikachu-wallpaper-HD-Free-Cute-Pikachu-Wallpapers-HD-roleplay-universe-40093220-1920-1080.jpg')]`,
    container: `backdrop-blur-[4px] backdrop-brightness-50`,
    contentWrapper: `flex h-screen w-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2 lg:mr-6`,
    title: `text-5xl font-bold text-white text-center lg:text-left`,
    description: `text-[#FEE440] text-2xl  rounded-xl px-2 py-4 lg:py-8 mt-2 text-center lg:text-left`,
    ctaContainer: `flex justify-center lg:justify-start space-x-4`,
    mintButton: `md:text-md font-bold w-1/3 py-4 px-2 bg-[#04E762] md:rounded-full rounded-lg text-black hover:bg-[#89FC00] hover:text-black transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110`,
    openseaButton: `md:text-md text-center font-bold w-1/3 py-4 px-2 bg-[#576066] md:rounded-full rounded-lg text-white  hover:bg-[#7D8491] transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110`,
    cardContainer: `drop-shadow-2xl`,
    imageCard: `rounded-t-3xl`,
    infoContainer: `h-20 bg-black rounded-b-3xl px-6 py-5 flex items-center text-white`,
    avatar: `h-[2.5rem] rounded-full`,
    authorInfo: `ml-4 flex flex-col text-md`,
    author: `text-[#00B4D8] ml-2`,
};

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <h1 className={style.title}>
                            Do you have what it takes to catch &apos;em all?
                        </h1>
                        <p className={style.description}>
                            Each minted Pokémon NFT is one-of-a-kind. Once minted, it is taken out
                            of the pool of available Pokémon to be chosen from.
                        </p>
                        <div className={style.ctaContainer}>
                            <Link href="/mint">
                                <button className={style.mintButton}>Mint now</button>
                            </Link>
                            <Link href={openseaCollection}>
                                <a
                                    className={style.openseaButton}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button>View on OpenSea</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img
                            className={style.imageCard}
                            src="https://www.pngitem.com/pimgs/m/373-3734017_pokemon-pikachu-hd-png-download.png"
                            height={500}
                            width={500}
                        />
                        <div className={style.infoContainer}>
                            <img
                                className={style.avatar}
                                src="https://img.seadn.io/files/0ffd18a26fa50f91281fb7c3484cefb1.png?fit=max&w=600"
                            />
                            <div className={style.authorInfo}>
                                <div>Pikachu</div>
                                <div>
                                    by
                                    <a
                                        className={style.author}
                                        href="https://www.instagram.com/ashketchum_official/?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        AshKetchum.eth
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
