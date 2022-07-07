import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pikachu from "../assets/Pikachu.png";
import { openseaCollection } from "../constants/urlLinks";

const style = {
    wrapper: `relative bg-fixed bg-repeat bg-[length:160px_80px] bg-[url('https://images6.fanpop.com/image/photos/40000000/pikachu-wallpaper-HD-Free-Cute-Pikachu-Wallpapers-HD-roleplay-universe-40093220-1920-1080.jpg')]`,
    container: `backdrop-blur-[4px] backdrop-brightness-50 flex justify-center`,
    contentWrapper: `lg:-translate-y-8 flex min-h-screen max-w-7xl relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2 lg:mr-6 -mt-12 sm:mt-0`,
    title: `text-4xl md:text-5xl font-bold text-white text-center md:mt-4 lg:text-left`,
    description: `text-[#FEE440] text-md md:text-xl rounded-xl px-2 py-4 lg:py-8 mt-2 text-center lg:text-left`,
    ctaContainer: `flex justify-center lg:justify-start space-x-4 md:mb-4`,
    mintButton: `text-[0.7rem] sm:text-sm md:text-md text-center font-black w-1/2 md:w-1/3 py-4 px-2 bg-[#04E762] md:rounded-full rounded-lg hover:bg-[#89FC00] transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110`,
    openseaButton: `text-[0.7rem] sm:text-sm md:text-md text-center font-black w-1/2 md:w-1/3 py-4 px-2 bg-[#576066] md:rounded-full rounded-lg text-white  hover:bg-[#7D8491] transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110`,
    cardContainer: `drop-shadow-2xl -mt-20 sm:mt-0 md:mb-12`,
    imageCard: `rounded-t-2xl sm:rounded-t-3xl bg-white flex justify-center h-[16em] w-[16rem] sm:h-[28rem] sm:w-[28rem] lg:h-[30rem] lg:w-[30rem] xl:h-[33rem] xl:w-[36rem]`,
    infoContainer: `h-12 sm:h-20 bg-black rounded-b-2xl sm:rounded-b-3xl px-3 sm:px-6 py-5 flex items-center text-white`,
    avatar: `h-[1.7rem] sm:h-[2.5rem] rounded-full`,
    authorInfo: `ml-2 sm:ml-4 flex flex-col text-[0.7rem] sm:text-base`,
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
                        <div className={style.imageCard}>
                            <Image src={Pikachu} />
                        </div>
                        {/* <img
                            
                            src="https://www.pngitem.com/pimgs/m/373-3734017_pokemon-pikachu-hd-png-download.png"
                        /> */}
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
