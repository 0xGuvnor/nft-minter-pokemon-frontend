import Header from "../components/Header";
import Header2 from "../components/Header2";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";

const style = {};

export default function Home() {
  return (
    <div className="">
      <Header title={"Home"} />
      {/* <Header2 /> */}
      <Hero />
      {/* <Hero2 /> */}
    </div>
  );
}
