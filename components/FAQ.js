import React from "react";
import { etherscanUrl, openseaCollection, twitterUrl } from "../constants";

const style = {
    background: `bg-gradient-to-b from-[#F9EA9A] to-[#f9dc5c]`,
    wrapper: `container mx-auto mb-8`,
    title: `text-5xl text-center underline mb-8`,
    grid: `grid grid-cols-2 gap-8`,
    gridContainer: `flex flex-col`,
    gridTitle: `text-xl mb-2`,
    gridDescription: `text-justify`,
};

const FAQ = () => {
    return (
        <div className={style.background}>
            <div className={style.wrapper}>
                <h1 className={style.title}>FAQ</h1>
                <div className={style.grid}>
                    <div className={style.gridContainer}>
                        <h2 className={style.gridTitle}>What's an NFT?</h2>
                        <p className={style.gridDescription}>
                            An NFT stands for "non-fungible token", a one of a kind token that
                            proves ownership of a digital item. Once you own that item, you can then
                            do lots of other things, like sell it, hold it, show it off, use it to
                            access a chat room (like Discord) and much more. For some NFT's - the
                            main function is to simply be visual art and look cool, while some are
                            audio-based, and others offer additional utility like exclusive access
                            to websites or participation in an event. In short, it's something
                            unique, which you alone own. It can be art, and can also act as a
                            "members" card.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h2 className={style.gridTitle}>What are Pokémon?</h2>
                        <p className={style.gridDescription}>
                            Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese
                            media franchise managed by The Pokémon Company, a company founded by
                            Nintendo, Game Freak, and Creatures. The franchise was created by
                            Satoshi Tajiri in 1996, and is centered on fictional creatures called
                            "Pokémon". In Pokémon, humans, known as Pokémon Trainers, catch and
                            train Pokémon to battle other Pokémon for sport. All media works within
                            the franchise are set in the Pokémon universe. The English slogan for
                            the franchise is "Gotta Catch ‘Em All!". There are currently 913 Pokémon
                            species.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h2 className={style.gridTitle}>How much is it to mint a Pokémon?</h2>
                        <p className={style.gridDescription}>
                            Each Pokémon NFT costs 0.1 ETH to mint.
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h2 className={style.gridTitle}>What can I do with my Pokémon?</h2>
                        <p className={style.gridDescription}>
                            Create and mint derivatives. Use it as your PFP on social media. Buy a
                            Billboard Space! Create a brand using your Pokémon! Create merch!
                            Basically you can do anything you can dream up!
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h2 className={style.gridTitle}>Where is the Pokédex collection stored?</h2>
                        <p className={style.gridDescription}>
                            Your NFT is securely stored at the address / wallet you used to mint or
                            purchase. You can verify via{" "}
                            <a href={etherscanUrl} className="text-blue-500">
                                Etherscan
                            </a>
                            . You can also view your Pokémon on OpenSea:{" "}
                            <a href={openseaCollection} className="text-blue-500">
                                Pokédex Collection
                            </a>
                            .
                        </p>
                    </div>
                    <div className={style.gridContainer}>
                        <h2 className={style.gridTitle}>How do I get involved?</h2>
                        <p className={style.gridDescription}>
                            Mint a Pokémon yourself, or purchase a Pokémon of your liking on{" "}
                            <a href={openseaCollection} className="text-blue-500">
                                OpenSea
                            </a>
                            . Head over to the{" "}
                            <a href={openseaCollection} className="text-blue-500">
                                Pokédex Discord
                            </a>
                            , jump in on the conversation and let us know your ideas! In Discord you
                            can verify as a holder to access gated channels. Jump on{" "}
                            <a href={twitterUrl} className="text-blue-500">
                                Twitter
                            </a>{" "}
                            and show your support for the project!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;