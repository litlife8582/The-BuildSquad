import { useState } from "react";
import CareerCard from "../components/CareerCard"

export default function Careers() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);

    const [selectedDomains, setSelectedDomains] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedExps, setSelectedExps] = useState([]);

    const jobListing = [
        { id: 1, domain: "Construction", category: "Design", expLevel: "2-5 yrs", title: "Architectural Designer", experience: "3-5 years", responsibilities: "Draft conceptual building plans and create 3D architectural models for commercial development projects." },
        { id: 2, domain: "Construction", category: "Design", expLevel: "5+ yrs", title: "BIM Coordinator", experience: "4-7 years", responsibilities: "Manage Building Information Modeling (BIM) data and resolve multi-disciplinary design clashes before construction." },
        { id: 3, domain: "Remodeling", category: "Design", expLevel: "2-5 yrs", title: "Civil CAD Drafter", experience: "2-4 years", responsibilities: "Convert rough engineer sketches into highly detailed, technical AutoCAD drawings for infrastructure layouts." },
        { id: 4, domain: "Construction", category: "Design", expLevel: "5+ yrs", title: "Structural Design Engineer", experience: "5-8 years", responsibilities: "Design load-bearing frameworks and ensure wind and seismic compliance for high-rise towers." },
        { id: 5, domain: "Electrical", category: "Design", expLevel: "2-5 yrs", title: "Industrial UI/UX Designer", experience: "3-6 years", responsibilities: "Design intuitive digital touch-screen interfaces for heavy manufacturing plant machinery and control rooms." },
        { id: 6, domain: "Construction", category: "Engineering", expLevel: "5+ yrs", title: "Senior Civil Engineer", experience: "8-12 years", responsibilities: "Oversee large-scale public works projects, including the planning and execution of highway systems and bridges." },
        { id: 7, domain: "Plumbing", category: "Engineering", expLevel: "5+ yrs", title: "Mechanical Systems Engineer", experience: "5-9 years", responsibilities: "Design, optimize, and integrate heavy-duty HVAC and fluid dynamics systems for industrial facilities." },
        { id: 8, domain: "Electrical", category: "Engineering", expLevel: "5+ yrs", title: "Electrical Power Engineer", experience: "6-10 years", responsibilities: "Design high-voltage power distribution networks and backup generator systems for new commercial developments." },
        { id: 9, domain: "Construction", category: "Engineering", expLevel: "5+ yrs", title: "Geotechnical Engineer", experience: "4-8 years", responsibilities: "Analyze soil, rock mechanics, and groundwater conditions to determine safe foundation designs." },
        { id: 10, domain: "Electrical", category: "Engineering", expLevel: "5+ yrs", title: "Process Automation Engineer", experience: "5-7 years", responsibilities: "Program PLCs and optimize automated manufacturing assembly lines and industrial robotics." },
        { id: 11, domain: "Plumbing", category: "Technicians", expLevel: "2-5 yrs", title: "HVAC Technician", experience: "3-5 years", responsibilities: "Install, maintain, calibrate, and troubleshoot complex commercial heating, ventilation, and cooling systems." },
        { id: 12, domain: "Electrical", category: "Technicians", expLevel: "5+ yrs", title: "Instrumentation Technician", experience: "4-6 years", responsibilities: "Calibrate and repair sensitive electronic pressure, flow, and temperature monitoring equipment in process plants." },
        { id: 13, domain: "Construction", category: "Technicians", expLevel: "2-5 yrs", title: "Surveying Technician", experience: "2-5 years", responsibilities: "Operate advanced GPS and total station equipment to map out construction sites and establish property boundaries accurately." },
        { id: 14, domain: "Construction", category: "Technicians", expLevel: "< 2 yrs", title: "Materials Testing Technician", experience: "1-3 years", responsibilities: "Test concrete, asphalt, and structural steel samples in the laboratory to ensure strict quality and safety standards." },
        { id: 15, domain: "Electrical", category: "Technicians", expLevel: "2-5 yrs", title: "Telecommunications Technician", experience: "3-6 years", responsibilities: "Install low-voltage wiring, server racks, and fiber optic networks in newly constructed office buildings." },
        { id: 16, domain: "Construction", category: "Mechanics", expLevel: "5+ yrs", title: "Heavy Equipment Mechanic", experience: "5-10 years", responsibilities: "Diagnose and repair complex diesel engines, hydraulic systems, and drivetrains on bulldozers, excavators, and cranes." },
        { id: 17, domain: "Plumbing", category: "Mechanics", expLevel: "5+ yrs", title: "Master Welder", experience: "7+ years", responsibilities: "Perform precision TIG and MIG welding on critical structural steel frameworks and high-pressure pipe systems." },
        { id: 18, domain: "Remodeling", category: "Mechanics", expLevel: "5+ yrs", title: "Industrial Millwright", experience: "4-8 years", responsibilities: "Read schematics to install, precisely align, and dismantle heavy industrial factory machinery and conveyor systems." },
        { id: 19, domain: "Construction", category: "Mechanics", expLevel: "2-5 yrs", title: "Fleet Maintenance Mechanic", experience: "3-6 years", responsibilities: "Perform routine maintenance, safety inspections, and preventative repairs on the company's transport trucks and vehicles." },
        { id: 20, domain: "Electrical", category: "Mechanics", expLevel: "5+ yrs", title: "Elevator Installation Mechanic", experience: "4-7 years", responsibilities: "Assemble, wire, and test commercial elevator cars, tracks, and heavy-duty hoisting mechanisms." }
    ];

    const filterOptions = {
        domain: ["Electrical", "Plumbing", "Construction", "Remodeling"],
        category: ["Design", "Engineering", "Technicians", "Mechanics"],
        experience: ["< 2 yrs", "2-5 yrs", "5+ yrs"]  
    };

    const filteredJobs = jobListing.filter(job => {
        const matchDomain = selectedDomains.length === 0 || selectedDomains.includes(job.domain);
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category);
        const matchExp = selectedExps.length === 0 || selectedExps.includes(job.expLevel);

        return matchDomain && matchCategory && matchExp;
    });

    const handleCheckboxChange = (stateList, setter, value) => {
        if (stateList.includes(value)) {
            setter(stateList.filter(item => item !== value));
        } else {
            setter([...stateList, value]);
        }
    };

    const activeFilterCount = selectedDomains.length + selectedCategories.length + selectedExps.length;

    const CheckboxList = ({ options, stateList, setter }) => (
        <div className="absolute left-[102%] top-0 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-xl p-3 flex flex-col gap-2 z-50">
            {options.map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer text-sm text-slate-200 hover:text-white p-1">
                    <input 
                        type="checkbox" 
                        className="w-4 h-4 cursor-pointer accent-blue-500 rounded"
                        checked={stateList.includes(option)}
                        onChange={() => handleCheckboxChange(stateList, setter, option)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );

    return (
        <div className="background p-10 min-h-screen">
            <div className="flex gap-10 max-w-7xl mx-auto">
                <div className="careertxt w-1/2 sticky top-24 h-fit">
                    <h1 className="text-6xl text-indigo-300 pl-10 mt-10">Careers in BuildSquad</h1>
                    <p className="text-3xl text-violet-200 p-10">We are more than just an app. We are a team of passionate creators, engineers, designers, and storytellers on a mission to "To engineer, construct, and deliver world-class infrastructure and technological solutions that empower global economies, serving our partners with unmatched integrated capabilities and a relentless commitment to quality."
                        <br /><br />
                        Our users love us because we solve real problems. We need people like you—ambitious, curious, and collaborative—to help us solve the next generation of challenges.</p>
                </div>

                <div className="w-1/2 flex flex-col gap-6">
                    
                    <div className="relative self-end">
                        <button 
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-lg"
                        >
                            Filter Jobs
                            {activeFilterCount > 0 && (
                                <span className="bg-white text-blue-600 text-xs px-2 py-1 rounded-full">
                                    {activeFilterCount}
                                </span>
                            )}
                        </button>

                        {isFilterOpen && (
                            <div className="absolute right-0 mt-3 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl py-2 z-40">
                                
                                <div 
                                    className="relative px-4 py-3 hover:bg-slate-700 text-slate-200 cursor-pointer flex justify-between items-center group"
                                    onMouseEnter={() => setHoveredTab('domain')}
                                    onMouseLeave={() => setHoveredTab(null)}
                                >
                                    <span>Domain</span>
                                    <span>▶</span>
                                    {hoveredTab === 'domain' && (
                                        <CheckboxList options={filterOptions.domain} stateList={selectedDomains} setter={setSelectedDomains} />
                                    )}
                                </div>

                                <div 
                                    className="relative px-4 py-3 hover:bg-slate-700 text-slate-200 cursor-pointer flex justify-between items-center group"
                                    onMouseEnter={() => setHoveredTab('category')}
                                    onMouseLeave={() => setHoveredTab(null)}
                                >
                                    <span>Category</span>
                                    <span>▶</span>
                                    {hoveredTab === 'category' && (
                                        <CheckboxList options={filterOptions.category} stateList={selectedCategories} setter={setSelectedCategories} />
                                    )}
                                </div>

                                <div 
                                    className="relative px-4 py-3 hover:bg-slate-700 text-slate-200 cursor-pointer flex justify-between items-center group"
                                    onMouseEnter={() => setHoveredTab('experience')}
                                    onMouseLeave={() => setHoveredTab(null)}
                                >
                                    <span>Experience</span>
                                    <span>▶</span>
                                    {hoveredTab === 'experience' && (
                                        <CheckboxList options={filterOptions.experience} stateList={selectedExps} setter={setSelectedExps} />
                                    )}
                                </div>

                                {activeFilterCount > 0 && (
                                    <div className="border-t border-slate-600 mt-2 pt-2 px-4">
                                        <button 
                                            onClick={() => { setSelectedDomains([]); setSelectedCategories([]); setSelectedExps([]); }}
                                            className="w-full text-center text-sm text-red-400 hover:text-red-300 py-1"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-6">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <CareerCard
                                    key={job.id}
                                    title={job.title}
                                    experience={job.experience}
                                    responsibilities={job.responsibilities}
                                />
                            ))
                        ) : (
                            <div className="text-center text-slate-300 mt-10 text-xl bg-slate-800/50 p-10 rounded-xl border border-slate-700">
                                No open positions match your selected filters. Try removing some checkboxes!
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}