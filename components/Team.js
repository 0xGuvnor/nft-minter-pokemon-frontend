import Image from "next/image";
import React from "react";
import ProfessorOak from "../assets/ProfessorOak.webp";
import AshKetchum from "../assets/AshKetchum.webp";
import Misty from "../assets/Misty.webp";
import Brock from "../assets/Brock.webp";
import NurseJoy from "../assets/NurseJoy.webp";
import OfficerJenny from "../assets/OfficerJenny.png";
import { FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const style = {
    background: `bg-gradient-to-t from-[#F9EA9A] to-[#f9dc5c]`,
    wrapper: `container w-8/12 md:w-10/12 xl:w-4/6 2xl:w-4/5 mx-auto shrink pt-4`,
    title: `text-4xl md:text-5xl text-center underline mb-4`,
    grid: `grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 2xl:grid-cols-3 lg:grid-rows-2`,
    gridItem: `my-4 flex rounded-full mx-2 justify-start bg-[#F2F3AE]`,
    gridItemJoy: `my-4 ml-[0.7rem] flex rounded-full mx-2 justify-start bg-[#F2F3AE]`,
    memberBackground: `h-[3rem] w-[3rem] sm:h-[13rem] sm:w-[13rem] ml-8 sm:ml-0 rounded-full sm:py-4 sm:px-14 sm:bg-gradient-to-r sm:from-[#E84855] sm:via-[#62C370] sm:to-[#3185FC]`,
    memberBackgroundJoy: `h-[3rem] w-[3rem] sm:h-[13rem] sm:w-[13rem] ml-8 sm:ml-0 rounded-full sm:py-4 px-[.28rem] sm:px-[4.3rem] sm:bg-gradient-to-r sm:from-[#E84855] sm:via-[#62C370] sm:to-[#3185FC]`,
    memberDetails: `my-6 sm:my-0 sm:mt-8 ml-6 space-y-1 sm:space-y-4`,
    memberDetailsJoy: `my-6 sm:my-0 sm:mt-8 ml-[1.1rem] space-y-1 sm:space-y-4`,
    memberName: `text-md md:text-xl`,
    memberTitle: `text-xs md:text-sm`,
    memberSocials: `hidden sm:flex space-x-4 text-sm md:text-md`,
};

const Team = () => {
    return (
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>The Team</h1>
                <div className={style.grid}>
                    <div className={style.gridItem}>
                        <div className="h-[3rem] w-[3rem] sm:h-[13rem] sm:w-[13rem] ml-8 sm:ml-0 rounded-full sm:py-4 sm:px-14 mt-2 sm:mt-0 sm:bg-gradient-to-r sm:from-[#E84855] sm:via-[#62C370] sm:to-[#3185FC]">
                            <Image src={AshKetchum} />
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberName}>Ash Ketchum</h1>
                            <p className={style.memberTitle}>Co-founder / CEO</p>
                            <div className={style.memberSocials}>
                                <BsTwitter />
                                <FaTelegram />
                                <SiDiscord />
                            </div>
                        </div>
                    </div>
                    <div className={style.gridItem}>
                        <div className={style.memberBackground}>
                            <Image src={ProfessorOak} />
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberName}>Prof. Oak</h1>
                            <p className={style.memberTitle}>Co-founder / CTO</p>
                            <div className={style.memberSocials}>
                                <BsTwitter />
                                <FaTelegram />
                                <SiDiscord />
                            </div>
                        </div>
                    </div>
                    <div className={style.gridItem}>
                        <div className={style.memberBackground}>
                            <Image src={Brock} />
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberName}>Brock</h1>
                            <p className={style.memberTitle}>Co-founder / COO</p>
                            <div className={style.memberSocials}>
                                <BsTwitter />
                                <FaTelegram />
                                <SiDiscord />
                            </div>
                        </div>
                    </div>
                    <div className={style.gridItem}>
                        <div className={style.memberBackground}>
                            <Image src={Misty} />
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberName}>Misty</h1>
                            <p className={style.memberTitle}>Co-founder / CMO</p>
                            <div className={style.memberSocials}>
                                <BsTwitter />
                                <FaTelegram />
                                <SiDiscord />
                            </div>
                        </div>
                    </div>
                    <div className={style.gridItemJoy}>
                        <div className={style.memberBackgroundJoy}>
                            <Image src={NurseJoy} />
                        </div>
                        <div className={style.memberDetailsJoy}>
                            <h1 className={style.memberName}>Nurse Joy</h1>
                            <p className={style.memberTitle}>
                                SVP / Community
                                <br />
                                Outreach
                            </p>
                            <div className={style.memberSocials}>
                                <BsTwitter />
                                <FaTelegram />
                                <SiDiscord />
                            </div>
                        </div>
                    </div>
                    <div className={style.gridItem}>
                        <div className="h-[3rem] w-[3rem] sm:h-[13rem] sm:w-[13rem] ml-8 sm:ml-0 rounded-full sm:py-4 sm:px-14 mt-4 sm:mt-0 sm:bg-gradient-to-r sm:from-[#E84855] sm:via-[#62C370] sm:to-[#3185FC]">
                            <Image src={OfficerJenny} />
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberName}>Officer Jenny</h1>
                            <p className={style.memberTitle}>
                                SVP / Community
                                <br />
                                Management
                            </p>
                            <div className={style.memberSocials}>
                                <BsTwitter />
                                <FaTelegram />
                                <SiDiscord />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
