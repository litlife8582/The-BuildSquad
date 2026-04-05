export default function ContactCard(props){
    return(
        <>
            <div className="contactCard">
                <h2><u>{props.position}</u></h2>
                <ul>
                    <li><strong>email:</strong>{props.email}</li>
                    <li><strong>Phone number:</strong>{props.phone}</li>
                </ul>
            </div>
        </>
    )
}