import Image from "next/image";
import React from "react";
import Bulbasaur from "../assets/Bulbasaur.png";
import Charmander from "../assets/Charmander.png";
import Mew from "../assets/Mew.png";
import Squirtle from "../assets/Squirtle.png";
import Eevee from "../assets/Eevee.png";
import emptyPFP from "../assets/emptyPFP.png";

const style = {
    background: `bg-gradient-to-b from-[#7b7312] to-[#f9dc5c] min-h-screen mb-10`,
    wrapper: `container mx-auto pt-4`,
    title: `text-5xl text-center underline mb-8 text-white`,
    imageContainer: `flex flex-row justify-center gap-4 drop-shadow-2xl`,
    position1: `-mr-20 ml-20 z-0 2xl:-mr-0 2xl:ml-4`,
    position2: `-mr-11 ml-11 z-10 mt-16 2xl:-mr-0 2xl:ml-4`,
    position3: `z-20 mt-32 2xl:mx-4`,
    position4: `-ml-11 mr-11 z-10 mt-16 2xl:-ml-0 2xl:mr-4`,
    position5: `-ml-20 mr-20 z0 2xl:-ml-0 2xl:mr-4`,
    image: `bg-white rounded-t-2xl lg:rounded-t-3xl p-2 flex flex-col outline outline-1`,
    infoContainer: `bg-black h-7 md:h-8 lg:h-11 xl:h-12 rounded-b-2xl lg:rounded-b-3xl flex items-center`,
    avatar: `bg-white rounded-full ml-3 w-[1rem] h-[1rem] lg:w-5 lg:h-5`,
    authorInfo: `text-white flex flex-col ml-2 text-[8px] lg:text-sm`,
    author: `text-[#00B4D8]`,
    descriptionContainer: `flex justify-center`,
    description: `mt-12 mx-8 md:mx-0 text-justify text-lg md:w-4/5`,
};

const About = () => {
    return (
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>The Pokedéx Collection</h1>
                <div className={style.imageContainer}>
                    <div className={style.position1}>
                        <div className={style.image}>
                            <Image src={Bulbasaur} width={200} height={200} />
                        </div>
                        <div className={style.infoContainer}>
                            <div className={style.avatar}>
                                <Image src={emptyPFP} />
                            </div>
                            <div className={style.authorInfo}>
                                <div>Bulbasaur</div>
                                <div>
                                    by <span className={style.author}>???</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.position2}>
                        <div className={style.image}>
                            <Image src={Charmander} width={200} height={200} />
                        </div>
                        <div className={style.infoContainer}>
                            <div className={style.avatar}>
                                <Image src={emptyPFP} />
                            </div>
                            <div className={style.authorInfo}>
                                <div>Charmander</div>
                                <div>
                                    by <span className={style.author}>???</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.position3}>
                        <div className={style.image}>
                            <Image src={Mew} width={200} height={200} />
                        </div>
                        <div className={style.infoContainer}>
                            <div className={style.avatar}>
                                <Image src={emptyPFP} />
                            </div>
                            <div className={style.authorInfo}>
                                <div>Mew</div>
                                <div>
                                    by <span className={style.author}>???</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.position4}>
                        <div className={style.image}>
                            <Image src={Squirtle} width={200} height={200} />
                        </div>
                        <div className={style.infoContainer}>
                            <div className={style.avatar}>
                                <Image src={emptyPFP} />
                            </div>
                            <div className={style.authorInfo}>
                                <div>Squirtle</div>
                                <div>
                                    by <span className={style.author}>???</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.position5}>
                        <div className={style.image}>
                            <Image src={Eevee} width={200} height={200} />
                        </div>
                        <div className={style.infoContainer}>
                            <div className={style.avatar}>
                                <Image src={emptyPFP} />
                            </div>
                            <div className={style.authorInfo}>
                                <div>Eevee</div>
                                <div>
                                    by <span className={style.author}>???</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.descriptionContainer}>
                    <p className={style.description}>
                        The Pokedéx Collection is an NFT collection of Pokémon spanning over the
                        first 5 generations of Pokémon, with a total supply of 200 NFTs.
                        <br />
                        <br />
                        Each Pokémon NFT is chosen randomly via{" "}
                        <a
                            href="https://docs.chain.link/docs/chainlink-vrf/"
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Chainlink VRF
                        </a>{" "}
                        (Verifiable Random Function) to ensure true randomness when selecting a
                        Pokémon. Once a Pokémon is chosen to be minted, that Pokémon will be removed
                        from the pool of available Pokémon to be chosen from, ensuring each Pokémon
                        will only be able to be minted once.
                        <br />
                        <br />
                        Rarity for each Pokémon generation is as follows:
                        <br />
                        <br />
                        <div className="text-start flex flex-col">
                            Generation 1:{" "}
                            <span className="font-extrabold bg-[#FF2E00] p-2 rounded-full w-[10rem] text-white text-center">
                                10%
                            </span>
                            <br />
                            Generation 2:{" "}
                            <span className="font-extrabold bg-[#cd4527] p-2 rounded-full w-[15rem] text-white text-center">
                                15%
                            </span>
                            <br />
                            Generation 3:{" "}
                            <span className="font-extrabold bg-[#c74122] p-2 rounded-full w-[20rem] text-white text-center">
                                20%
                            </span>
                            <br />
                            Generation 4:{" "}
                            <span className="font-extrabold bg-[#ac371c] p-2 rounded-full w-[25rem] text-white text-center">
                                25%
                            </span>
                            <br />
                            Generation 5:{" "}
                            <span className="font-extrabold bg-[#9c1919] p-2 rounded-full w-[30rem] text-white text-center">
                                30%
                            </span>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
