import Image from "next/image";
import React from "react";
import Bulbasaur from "../assets/Bulbasaur.png";
import Charmander from "../assets/Charmander.png";
import Mew from "../assets/Mew.png";
import Squirtle from "../assets/Squirtle.png";
import Eevee from "../assets/Eevee.png";

const style = {
    background: `bg-gradient-to-b from-[#7b7312] to-[#f9dc5c] h-screen`,
    wrapper: `container mx-auto p-8`,
    title: `text-5xl text-center underline mb-8 text-white`,
    imageContainer: `flex flex-row justify-center gap-4`,
    image: `bg-white rounded-t-3xl p-2 flex flex-col`,
};

const About = () => {
    return (
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>The Pokedéx Collection</h1>
                <div className={style.imageContainer}>
                    <div>
                        <div className={style.image}>
                            <Image src={Bulbasaur} width={200} height={200} />
                        </div>
                        <div className="bg-black h-11 rounded-b-3xl" />
                    </div>
                    <div className={style.image}>
                        <Image src={Charmander} width={200} height={200} />
                    </div>
                    <div className={style.image}>
                        <Image src={Mew} width={200} height={200} />
                    </div>
                    <div className={style.image}>
                        <Image src={Squirtle} width={200} height={200} />
                    </div>
                    <div className={style.image}>
                        <Image src={Eevee} width={200} height={200} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
