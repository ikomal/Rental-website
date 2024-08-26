import HeroSection from "../subcomponents/HeroSection";
import TopVillas from "../subcomponents/TopVillas";
import Regions from "../subcomponents/Regions";
import Ourspecilaities from "../subcomponents/Ourspecilaities";
import Host from "../subcomponents/Host";
import About from "../subcomponents/About";
import Contact from "../subcomponents/Contact";
const Home=()=>{
    return(
        <>
        <article className="page">
        <HeroSection/>
        <TopVillas/>
        <Regions/>
        <Ourspecilaities/>
        <Host/>
        <About/>
        <Contact/>

        </article>
        </>
    )
}

export default Home;