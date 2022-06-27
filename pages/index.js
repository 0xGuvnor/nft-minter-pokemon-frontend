import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Team from "../components/Team";

const style = {};

export default function Home() {
    return (
        <div className="">
            <Header title={"Home"} />
            <Hero />
            <About />
            <Team />
            <Footer />
        </div>
    );
}
