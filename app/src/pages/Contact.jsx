import ContactCard from "../components/ContactCard"

export default function Contact() {
    const contactListing = [
        {
            id: 1,
            position: "Cheif of Electrical Engineering",
            phone: "+91 98317 53620",
            email: "electrical.engineering@buildsquad.com"
        },
        {
            id: 2,
            position: "Chief of Civil Engineering",
            phone: "+91 98765 43211",
            email: "civil.engineering@buildsquad.com"
        },
        {
            id: 3,
            position: "Global HR & Recruitment",
            phone: "+91 98765 43212",
            email: "careers@buildsquad.com"
        },
        {
            id: 4,
            position: "Head of Procurement",
            phone: "+91 98765 43213",
            email: "vendors@buildsquad.com"
        },
        {
            id: 5,
            position: "Chief Architectural Designer",
            phone: "+91 98765 43214",
            email: "design.studio@buildsquad.com"
        },
        {
            id: 6,
            position: "Public Relations & Media",
            phone: "+91 98765 43215",
            email: "press@buildsquad.com"
        },
        {
            id: 7,
            position: "IT & Systems Administrator",
            phone: "+91 98765 43216",
            email: "tech.support@buildsquad.com"
        },
        {
            id: 8,
            position: "Legal & Compliance Office",
            phone: "+91 98765 43217",
            email: "legal@buildsquad.com"
        },
        {
            id: 9,
            position: "B2B Client Partnerships",
            phone: "+91 98765 43218",
            email: "partnerships@buildsquad.com"
        },
        {
            id: 10,
            position: "Site Safety & OSHA Compliance",
            phone: "+91 98765 43219",
            email: "safety@buildsquad.com"
        }
    ];

    return (
        <div className="background">
            <div>
                <h1 className="ml-20 text-7xl mt-20 text-cyan-200">Contact us here</h1>  
                <p className="text-4xl m-20">We would love to hear from you! Whether you have a question about our platform, need technical support, or just want to share your feedback, The BuildSquad team is here to help. Drop us a message using the form below, or reach out to us directly via email. We strive to respond to all inquiries within 24 hours.</p>      
            </div>
            <div className="contact-card-container gap-2 m-10"> 
                {contactListing.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        position={contact.position}
                        phone={contact.phone}
                        email={contact.email}
                    />
                ))}</div>

                
        </div>
    )
};