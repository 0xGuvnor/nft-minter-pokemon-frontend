import Image from "next/image";
import React from "react";
import Bulbasaur from "../assets/Bulbasaur.png";
import Charmander from "../assets/Charmander.png";
import Mew from "../assets/Mew.png";
import Squirtle from "../assets/Squirtle.png";
import Eevee from "../assets/Eevee.png";
import emptyPFP from "../assets/emptyPFP.png";

const style = {
    background: `bg-gradient-to-b from-[#7b7312] to-[#f9dc5c] h-screen`,
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
    description: `mt-12 mx-8 md:mx-0 text-center text-xl md:w-4/5 bg-white`,
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
                        So I started to walk into the water. I won't lie to you boys, I was
                        terrified. But I pressed on, and as I made my way past the breakers a
                        strange calm came over me. I don't know if it was divine intervention or the
                        kinship of all living things but I tell you Jerry at that moment, I was a
                        marine biologist.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
