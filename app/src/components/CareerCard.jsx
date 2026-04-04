export default function CareerCard(props){
    return(
        <>
            <div className="career-container">
                    <h2><u>{props.title}</u></h2>
                    <list>
                        <ul>
                            <li><strong>Experience:</strong> {props.experience}</li>
                            <li><strong>Job responsibilities:</strong> {props.responsibilities}</li>
                        </ul>
                    </list>
                </div>
        </>
    )
};