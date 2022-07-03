import About from "../components/About";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Team from "../components/Team";
import FadeIn from "react-fade-in";

const style = {
    wrapper: `snap-mandatory snap-y`,
};

export default function Home() {
    return (
        <div className={style.wrapper}>
            <Header title={"Home"} />
            <FadeIn>
                <Hero />
                <div className="snap-always snap-center">
                    <About />
                </div>
                <Team />
                <FAQ />
            </FadeIn>
        </div>
    );
}
