import codeImg from "../../assets/code.png";
import gm1v1 from "../../assets/game1v1.jpg";
import gm1v2 from "../../assets/game1v2.jpeg";
import gm2v1 from "../../assets/game2v1.png";
import gm2v2 from "../../assets/game2v2.png";
import gm2v3 from "../../assets/game2v3.png";
import gm3v1 from "../../assets/game3v1.png";
import gm3v2 from "../../assets/game3v2.jpeg";
import gm3v3 from "../../assets/game3v3.jpeg";
import gm4v1 from "../../assets/game4v1.png";
import gm4v2 from "../../assets/game4v2.jpeg";
import gm4v3 from "../../assets/game4v3.jpeg";
import gm5v1 from "../../assets/game5v1.png";
import gm5v2 from "../../assets/game5v2.jpg";
import gm5v3 from "../../assets/game5v3.jpg";


import { resourcesLinks, platformLinks, communityLinks } from "../../constants"


const PublishedGamesHeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Published 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                Games
            </span>
        </h1>
        <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl">
            Here is a list of games I have developed and published onto the Google Playstore
        </p>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={codeImg} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm1v1} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm1v2} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    SmartDash XR: Future Interface
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    A realistic 3D vehicle dashboard simulation that brings the evolution of automotive interfaces to life.
                    Accurate car physics, interactive dashboards, and AI-driven traffic.            
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 250,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: 0.6v
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Feb 19, 2024
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Feb 8, 2022
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.TaxiRyders.ToyotaCarGameSimulator2022" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        


        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm2v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm2v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm2v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    MotorCity: HD Drive Simulator
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    High-graphics 3D vehicle simulation game that delivers a realistic 
                    driving experience powered by advanced physics. Designed for both racing enthusiasts and drift lovers
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v1.2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Feb 8, 2025
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Feb 5, 2022
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.TaxiRyders.FORTUNERcargamesimulator" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm3v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm3v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm3v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    FreeDrive: Online Simulation
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    A game that allows the user to explore an expansive free-roam open world with a variety of vehicles, 
                    such as sports and off-road cars. Includes Multiplayer mode for users to engage.           
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 50,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v0.5
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Feb 7, 2025
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Feb 7, 2022
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.TaxiRyders.RollsRoyceCarSimulator2022" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm4v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm4v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm4v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    TrafficRunner: Speed and Drive
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Experience the thrill of high-speed driving in HD Traffic Runner, a dynamic and immersive endless driving 
                    game where precision, reflexes, and customization define your journey.               
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v1.4
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Feb 20, 2025
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Feb 9, 2022
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.TaxiRyders.LexusCarSimulator2022" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm5v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm5v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm5v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    CitySimulation: Open World
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    An open-world city simulation game where player can explore, interact, and shape their experiences in a vast, urban city.
                    With no missions, the game focuses entirely on freedom               
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 5,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Feb 20, 2025
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Feb 6, 2022
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.TaxiRyders.TESLAcargamesimulator" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>



        <footer className="w-full  text-white mt-10 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6">
                <div>
                    <h3 className="text-md font-semibold mb-4 ">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-400 hover:text-white" href={link.href} target="_blank" rel="noopener noreferrer" >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            
            </div>
        </footer>


    </div>

    


  );
}

export default PublishedGamesHeroSection

/*
 <div className="p-2 w-full lg:w-1/4 mt-10"> 
                <img className="border-4 border-orange-500" src={codeImg} alt="Code Image" />
 </div>
*/