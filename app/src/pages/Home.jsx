import Navbar from "../components/Navbar";
import GalleryImageScroller from "../components/GalleryImageScroller"
import Electrical from "../assets/electrical.jpg"
export default function Home(){
    return(
        <div className="background-home">
            <div className="home-title">
                <h1 className="text-8xl font-extrabold text-green-500 pl-10 p-30">Engineering the Future, Globally</h1>
            </div>
           
            <div className="subpart1 p-10 flex gap-12">
                <div className="w-1/2">
                <h1 className="text-amber-200 text-5xl mb-10">A Legacy of Excellence, A Future of Innovation.</h1>
                <p className="text-4xl">As a premier vertical of BuildSquad Groups Ltd., we are a global leader in technology, engineering, and construction. With over eight decades of unmatched expertise, we operate in over 30 countries, solving critical needs in Hydrocarbon, Infrastructure, Power, and Defence. We don't just execute projects; we manage the entire lifecycle from the first blueprint to the final handover.</p>
                </div>
                <div className="w-1/2">
                    <img src={Electrical} width="3500px" alt="Interior image" />
                </div>
            </div>
             <div>
                <GalleryImageScroller/>
            </div>
            <div className="home-div m-20">
                <h1 className="text-4xl text-indigo-100 font-semibold">Our Integrated Capabilities</h1>
                <ul className="text-2xl">
                    <li><strong>Infrastructure & Construction-</strong>Delivering massive, high-impact infrastructure projects with precision. We build the foundations that connect cities, power economies, and secure nations.
                    </li>
                    <li><strong>Technology & Engineering-</strong> Leveraging cutting-edge technology and rigorous engineering principles to solve complex industrial and structural challenges.</li>
                    <li><strong>Manufacturing & Process Industries-</strong> End-to-end manufacturing solutions backed by a continuous quest for world-class quality and operational safety.</li>
                </ul>
            </div>

            <div className="stats m-20">
                <div className="flex text-5xl">
                    <span className="text-amber-200">80+ Years of Excellence</span>
                    <span className="text-blue-200">30+ Countries Worldwide</span>
                    <span className="text-fuchsia-200">5+ Core Global Sectors</span>
                    <span className="text-lime-200">100% Commitment to Quality</span>
                </div>
            </div>
        </div>
    );
}