import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xt lg:text-6xl text-center mt-6 tracking-wide">
            Featured 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}
                    game
            </span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2 mt-10"> 
                <img className="border-4 border-orange-500" src={codeImg} alt="Code Image" />
            </div>
            <div className="pt-12 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 mt-1 text-3xl justify-center ml-5">
                    SmartDash XR: Future Interface
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    SmartDash XR is a realistic 3D vehicle dashboard simulation that brings the evolution of automotive interfaces to life. 
                    Featuring accurate car physics, interactive dashboards, and AI-driven traffic, this simulation lets users experience both traditional gasoline and modern EV control systems in a dynamic driving environment.
                </p>
                <div className="pt-12 w-full lg:w-1/2 mx-auto">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-8 justify-center items-center lg:whitespace-nowrap sm:whitespace-normal">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.TaxiRyders.ToyotaCarGameSimulator2022" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow