import ImageScroller from "../components/ImageScroller"
import NewsCards from "../components/NewsCards"
import NewsArticle from "../components/NewsArticle";
import { useState } from "react";

export default function Newsroom() {

    const [selectedArticle,setSelectedArticle]=useState(null);

    const newsListing = [
        {
            id: 1,
            title: "BuildSquad Secures $2B Contract for High-Speed Rail Network",
            description: "BuildSquad has officially won the bid to design and construct the next-generation high-speed rail corridor, connecting three major metropolitan hubs by 2030.",
            fullText: `BuildSquad Groups Ltd. is proud to announce the finalization of a $2 billion contract to lead the design, engineering, and construction of the new Trans-Metropolitan High-Speed Rail Network. Beating out several international competitors, BuildSquad's vertically integrated approach and commitment to sustainable infrastructure ultimately secured the historic bid.
            
            "This project represents a monumental leap forward for regional connectivity," stated BuildSquad's Chief of Civil Engineering. "By utilizing our proprietary carbon-negative concrete blends and advanced automated laying machines, we will be able to deliver this project 18 months ahead of standard industry timelines, while drastically reducing the carbon footprint of the build."
            
            Groundbreaking is scheduled for Q1 of next year. The finished rail line is expected to support bullet trains traveling at speeds up to 220 mph, reducing current commute times between the hubs by over 60%. Furthermore, the project will generate an estimated 5,000 new jobs over the next five years across the engineering, manufacturing, and construction sectors.`
        },
        {
            id: 2,
            title: "Revolutionizing Materials: New Eco-Friendly Concrete Unveiled",
            description: "Our R&D division has successfully patented a new carbon-negative concrete blend that absorbs CO2 from the atmosphere while offering 20% higher tensile strength.",
            fullText: `After five years of rigorous development at our Munich R&D facility, BuildSquad is thrilled to unveil 'AeroCrete,' a revolutionary carbon-negative concrete blend. Traditional concrete production is a major contributor to global carbon emissions, but AeroCrete turns buildings into synthetic forests.
            
            The secret lies in a proprietary mineral catalyst that actively absorbs CO2 from the atmosphere during the curing process, trapping it permanently within the material's crystalline structure. Even more impressively, stress tests confirm that AeroCrete boasts a 20% higher tensile strength than standard industrial concrete.
            
            "We aren't just changing how we build; we are changing what a building can do for the planet," said the Head of BuildSquad Materials. AeroCrete will be rolled out exclusively in all BuildSquad commercial projects starting next quarter, with plans to license the technology globally by 2028.`
        },
        {
            id: 3,
            title: "Q3 Financials: BuildSquad Reports Record Growth",
            description: "Driven by heavy infrastructure and tech sectors, BuildSquad announces a 14% year-over-year revenue increase, exceeding Wall Street expectations.",
            fullText: `BuildSquad Groups Ltd. today reported its financial results for the third quarter, showcasing exceptional growth across all major verticals. The conglomerate reported a record $14.2 billion in consolidated revenue, representing a 14% year-over-year increase that comfortably beat Wall Street consensus estimates.
            
            The surge in revenue was primarily driven by the Heavy Infrastructure and Process Automation divisions, which saw massive contract wins in Southeast Asia and the Middle East. Additionally, operating margins improved by 2.1% due to the successful integration of AI-driven supply chain management tools implemented earlier this year.
            
            "Our Q3 results are a testament to the resilience and unmatched execution capabilities of the BuildSquad team," said the Chief Financial Officer. "Even amidst global supply chain fluctuations, our vertically integrated model allows us to control costs and deliver on time, proving once again why we are the partner of choice for mega-projects worldwide."`
        },
        {
            id: 4,
            title: "Smart City Initiative: Partnership with Local Government",
            description: "BuildSquad is partnering with city officials to integrate our proprietary IoT grid systems, optimizing traffic flow and reducing urban energy consumption.",
            fullText: `BuildSquad's Digital Infrastructure division has formally entered into a landmark public-private partnership to transform the downtown metropolitan area into a state-of-the-art 'Smart City.' 
            
            The pilot program will see the installation of thousands of BuildSquad's proprietary IoT (Internet of Things) sensors across intersections, streetlights, and public transit hubs. This neural network of sensors will feed real-time data into a central AI hub, which will autonomously optimize traffic light patterns to reduce rush-hour congestion by an estimated 22%.
            
            Furthermore, the smart grid will dim non-essential streetlights when no pedestrians or vehicles are present, projected to save the city millions in annual energy costs. "Infrastructure is no longer just concrete and steel; it's data and intelligence," stated the Lead Systems Architect for the project.`
        },
        {
            id: 5,
            title: "BuildSquad Wins 'Global Infrastructure Innovator' Award",
            description: "At the annual Tech & Engineering Summit in Geneva, BuildSquad was honored with the top award for our groundbreaking work on autonomous construction robotics.",
            fullText: `BuildSquad took center stage at the prestigious Global Tech & Engineering Summit in Geneva last night, taking home the highly coveted 'Global Infrastructure Innovator of the Year' award. 
            
            The judging panel, comprised of industry veterans and academic leaders, cited BuildSquad's recent deployment of the 'AutoBuilder V4' robotics fleet as the deciding factor. These semi-autonomous rovers can lay bricks, tie rebar, and execute precision welding in hazardous environments, drastically reducing workplace injuries and accelerating project timelines.
            
            "Receiving this award is a tremendous honor and validates our heavy investment in construction technology," said the CEO during the acceptance speech. "We share this victory with the brilliant engineers and software developers in our robotics lab who dared to imagine a safer, smarter construction site."`
        },
        {
            id: 6,
            title: "World's Longest Suspension Bridge Completed Ahead of Schedule",
            description: "A major milestone for our civil engineering division as the 4-mile ocean suspension bridge officially opens to public traffic 3 months early.",
            fullText: `Spanning an incredible 4 miles across open ocean straits, the newly completed Horizon Bridge is officially open to the public. Engineered and constructed entirely by BuildSquad, the mega-structure claims the title of the world's longest continuous suspension bridge.
            
            The project was completed three months ahead of schedule and significantly under budget, a rarity in public works of this scale. The bridge features advanced aerodynamic shielding to withstand Category 5 hurricane winds and utilizes smart-tension cables that report real-time structural health data back to our maintenance servers.
            
            The opening ceremony was attended by national leaders who praised BuildSquad for bridging a vital economic gap between two major coastal industrial zones, cutting commercial transit time by over two hours.`
        },
        {
            id: 7,
            title: "Sustainability Pledge: Carbon Neutral Operations by 2035",
            description: "The CEO officially outlined a comprehensive 10-year roadmap to transition all global manufacturing and construction sites to 100% renewable energy.",
            fullText: `In a bold move that sets a new standard for the heavy industry sector, BuildSquad has officially launched the 'Green Horizon 2035' initiative, a legally binding corporate pledge to achieve 100% carbon-neutral operations within the next decade.
            
            The roadmap outlines three major phases. Phase one involves outfitting all BuildSquad manufacturing facilities with rooftop solar arrays and grid-scale battery storage. Phase two targets the logistics fleet, transitioning all transport trucks and heavy machinery from diesel to electric and hydrogen fuel cells. Phase three focuses on the supply chain, requiring all third-party vendors to meet strict environmental compliance standards.
            
            "We build the world, which means we have a profound responsibility to protect it," the CEO announced at the press briefing. "This is not a PR stunt; this is a massive operational pivot that will cost billions upfront, but will ensure BuildSquad leads the green revolution for a century to come."`
        },
        {
            id: 8,
            title: "Tech Acquisition: BuildSquad Buys European AI Firm",
            description: "Expanding our digital footprint, BuildSquad has acquired 'NeuroStruct AI' to enhance predictive maintenance models for heavy machinery.",
            fullText: `BuildSquad Groups Ltd. has finalized the acquisition of Berlin-based software startup 'NeuroStruct AI' in a deal valued at $450 million. The acquisition signals BuildSquad's aggressive expansion into software and machine learning as a core pillar of its business model.
            
            NeuroStruct specializes in deep-learning algorithms for predictive maintenance. By integrating their software into BuildSquad's global fleet of excavators, cranes, and milling machines, our systems will now be able to predict mechanical failures weeks before they happen by analyzing minute vibrations and temperature anomalies.
            
            "Unplanned equipment downtime costs the construction industry billions annually," noted the VP of Fleet Operations. "With NeuroStruct's AI integrated into our telematics, we expect to reduce machinery breakdowns by over 30%, keeping our job sites running smoothly and safely."`
        },
        {
            id: 9,
            title: "Mega-Dam Project Commences in South America",
            description: "Ground has officially been broken on the massive hydroelectric project expected to power over 4 million homes upon completion.",
            fullText: `After years of environmental impact studies and geological surveying, BuildSquad has officially broken ground on the massive 'Alta-Current' hydroelectric dam in the South American Andean region. 
            
            This decade-long mega-project will be one of the most complex feats of engineering in BuildSquad's history, requiring the diversion of a major river system and the pouring of over 8 million cubic yards of concrete. Once operational, the dam's turbines will generate enough clean, renewable electricity to power 4 million homes, drastically reducing the region's reliance on fossil fuels.
            
            BuildSquad has worked closely with local indigenous communities and environmental groups to ensure the project includes advanced fish-ladders and preserves upstream biodiversity, setting a new gold standard for ecological responsibility in hydro-engineering.`
        },
        {
            id: 10,
            title: "Blueprint Unveiled for Floating Ocean Research Facilities",
            description: "Our architectural design team has released stunning renders of sustainable, self-powering marine research centers built entirely on the water.",
            fullText: `The BuildSquad Architectural Design Studio has released the final blueprints for 'Project Oceanus,' a revolutionary concept for offshore marine biology research centers. 
            
            Unlike traditional oil-rig-style platforms, the Oceanus facilities are designed to float dynamically, moving with the ocean currents to minimize disruption to the seabed. The centers are 100% self-sustaining, generating power through a combination of solar glass panels and kinetic wave-energy converters built into the pontoons.
            
            Equipped with deep-sea submersible bays and onboard desalination plants, these facilities will allow international scientists to live and study delicate marine ecosystems continuously for months at a time. BuildSquad aims to launch the first prototype facility off the coast of the Pacific by late 2028.`
        },
        {
            id: 11,
            title: "Intern to Engineer: Launching Global Mentorship Program",
            description: "BuildSquad is investing $10M into a new global internship initiative aimed at bringing top engineering and CS students straight into leadership tracks.",
            fullText: `Recognizing that human capital is the true foundation of any great infrastructure company, BuildSquad has officially launched the 'FutureBuilders Mentorship Initiative.' 
            
            Backed by a $10 million internal grant, the program will select 500 top-performing university students globally from disciplines including Civil Engineering, Computer Science, and Supply Chain Management. Interns will not fetch coffee; they will be embedded directly into active project teams, from the robotics lab to mega-construction sites.
            
            Each intern will be paired with a Senior Executive mentor. "We are looking for the brilliant, hungry minds that will lead BuildSquad 20 years from now," said the Global Head of HR. Graduates of the program will be fast-tracked for full-time employment and junior management roles upon graduation.`
        },
        {
            id: 12,
            title: "Next-Gen Automated Construction Robotics Deployed",
            description: "We are officially rolling out our fleet of semi-autonomous bricklaying and welding drones to high-risk commercial construction sites.",
            fullText: `Following successful closed-door testing, BuildSquad's Robotics & Automation division has deployed the first active fleet of construction synthetics to commercial job sites in Tokyo and Dubai.
            
            The fleet includes 'Mason-Bot,' an automated bricklaying system capable of laying 3,000 bricks a day with millimeter precision, and the 'Aero-Welder,' an tethered drone that performs high-altitude structural steel welding where it is too dangerous for human workers to operate.
            
            Human site supervisors monitor the robots via augmented reality tablets. Early data shows a 40% reduction in high-altitude safety incidents and a 15% increase in overall structural assembly speed. BuildSquad plans to double the active fleet by the end of the fiscal year.`
        },
        {
            id: 13,
            title: "BuildSquad Foundation Pledges $50M for STEM Education",
            description: "Giving back to the community, our philanthropic arm will distribute grants to underprivileged schools to build state-of-the-art computer labs.",
            fullText: `The BuildSquad Foundation, the philanthropic wing of our organization, has announced a $50 million commitment to bolster STEM (Science, Technology, Engineering, and Math) education in underprivileged communities worldwide over the next five years.
            
            The funds will be distributed as direct grants to public schools to construct 'Innovation Labs.' These labs will be fully equipped with modern computers, CAD software licenses, 3D printers, and basic robotics kits. Additionally, BuildSquad engineers will volunteer to host monthly virtual workshops for the students.
            
            "The next great architect or software engineer might be sitting in a classroom right now without the tools they need to unlock their potential," said the Foundation Director. "We consider this $50 million not as a donation, but as an investment in the global future."`
        },
        {
            id: 14,
            title: "Offshore Wind Farm Reaches Full Power Capacity",
            description: "The 120-turbine offshore wind project engineered by BuildSquad's renewable energy sector is now fully operational and feeding the mainland grid.",
            fullText: `BuildSquad's Renewable Energy Division is celebrating a massive victory today as the 'Gale Force 1' offshore wind farm officially reached 100% power generation capacity.
            
            Located 20 miles off the northern coastline, the sprawling array consists of 120 massive turbines, each standing over 800 feet tall. Constructing the deep-water foundations required unprecedented engineering solutions, utilizing BuildSquad's heavy-lift maritime crane vessels.
            
            Now fully integrated into the mainland power grid via submarine high-voltage cables, the wind farm is successfully delivering clean electricity to over 500,000 coastal homes, displacing millions of tons of coal-fired carbon emissions annually.`
        },
        {
            id: 15,
            title: "Expanding Horizons: New Heavy Manufacturing Plant in Asia",
            description: "To meet growing global demand, BuildSquad is opening a massive, fully automated manufacturing facility capable of producing advanced structural steel components.",
            fullText: `To fortify our global supply chain and meet skyrocketing demand for infrastructure materials, BuildSquad has officially cut the ribbon on a brand new, 2-million-square-foot heavy manufacturing plant in Southeast Asia.
            
            The facility is a marvel of modern industry, operating as a 'Dark Factory' where the assembly floors are so heavily automated by robotics that they require minimal lighting or human intervention for physical labor. The plant specializes in forging pre-fabricated structural steel and modular bridge components.
            
            By producing these heavy components closer to our rapidly expanding project sites in the Eastern Hemisphere, BuildSquad will dramatically cut shipping costs, reduce maritime carbon emissions, and insulate our projects from global supply chain shocks.`
        }
    ];

    return (
        <div className="background">
            <div>
                <ImageScroller />
            </div>
            <div>
                <h1 className="text-amber-200 text-5xl pl-20 "><strong><u>Newsroom</u></strong></h1>
                <div className="news-card-container gap-2 m-10">
                    {newsListing.map((news) => (
                        <NewsCards
                            key={news.id}
                            title={news.title}
                            description={news.description}
                            onReadMore={()=>setSelectedArticle(news)}
                        />
                    ))}
                </div>
            </div>
            
            <NewsArticle
                article={selectedArticle}
                onClose={()=>setSelectedArticle(null)}
            />
        </div>
    )
};