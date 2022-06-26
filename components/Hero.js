import React from "react";

const style = {
    wrapper: `relative bg-repeat bg-[length:160px_80px] bg-[url('https://images6.fanpop.com/image/photos/40000000/pikachu-wallpaper-HD-Free-Cute-Pikachu-Wallpapers-HD-roleplay-universe-40093220-1920-1080.jpg')]`,
    container: `backdrop-blur-[2px] backdrop-brightness-50`,
    contentWrapper: `flex h-screen w-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2 mr-6`,
    title: `text-5xl font-bold text-white`,
    description: `text-[#FFE66D] text-2xl  rounded-xl px-2 py-8 mt-2`,
    ctaContainer: `flex`,
    mintButton: `text-xl font-bold w-1/3 py-4 bg-[#00AF54] xl:rounded-full sm:rounded-lg text-white mr-5 hover:bg-[#85FFC7] hover:text-black`,
    openseaButton: `text-xl font-bold w-1/3 py-4 bg-[#576066] xl:rounded-full sm:rounded-lg text-white mr-5 hover:bg-[#7D8491]`,
    imageCard: `rounded-t-3xl`,
    infoContainer: `h-20 bg-black rounded-b-3xl px-6 py-5 flex items-center text-white`,
    avatar: `h-[2.5rem] rounded-full`,
    authorInfo: `ml-4 flex flex-col text-md`,
    author: `text-[#00B4D8]`,
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
                            <button className={style.mintButton}>Mint now</button>
                            <button className={style.openseaButton}>View on OpenSea</button>
                        </div>
                    </div>
                    <div>
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
                                <a
                                    className={style.author}
                                    href="https://www.instagram.com/ashketchum_official/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ash_Ketchum
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
