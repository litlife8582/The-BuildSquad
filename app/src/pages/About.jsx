import factoryImage from '../assets/factory-img1.webp'
import factoryImage2 from '../assets/factory-img2.webp'

export default function About() {
    return (
        <div className="background">
            <div className="flex flex-col max-w-7xl mx-auto pb-20">
                <h1 className='ml-25 mt-7 text-[30px] text-green-600 font-bold'>What we are</h1>
                <div className="text-container items-center gap-10 mt-4" >
                    <div className='w-1/2 text-lg px-10 text-justify'>The BuildSquad Construction stands as a premier vertical within the formidable infrastructure division of BuildSquad Groups Ltd., a titan among Indian technology, engineering, construction, manufacturing, and financial services conglomerates. Boasting a heavy-weight global presence, BuildSquad represents the vanguard of Indian industrial capability on the world stage.

                    Dedicated to solving complex challenges, BuildSquad addresses pivotal needs within foundational economic sectors. Our portfolio spans the high-impact realms of Hydrocarbon engineering, critical large-scale Infrastructure, sustainable Power generation, complex Process Industries, and advanced Defence systems. We are a trusted partner to nations and private corporations in over 30 countries across five continents. </div>
                    <div className='w-1/2 pr-10'><img className='w-full h-[350px] object-cover' src={factoryImage} alt="Factory-image" /></div>
                </div>
                <div className='text-container items-center gap-10 mt-4'>
                    <div className='w-1/2 pl-10'><img className='w-full h-[350px] object-cover' src={factoryImage2} alt="Factory-image 2" /></div>
                    <div className='w-1/2 text-lg m-10 p-10 text-justify'>As a catalyst for economic growth, BuildSquad focuses on core sectors that define modern progress. Our true differentiator lies in our fully integrated, vertically aligned capabilities that span the absolute entirety of the 'design to deliver' spectrum. We don't just construct; we conceptualize, engineer, manufacture, and execute.

                    Underpinned by a rich heritage of over eight decades, our institutional philosophy is driven by a strong, unwavering customer-focused approach and a relentless pursuit of world-class quality benchmarks. This legacy has forged unmatched domain expertise, uniting the precision of high-end technology and advanced engineering with robust construction management and large-scale manufacturing excellence.</div>
                </div>
            </div>
        </div>
    )
};