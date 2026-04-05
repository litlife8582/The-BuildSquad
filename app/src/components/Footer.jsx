export default function Footer(){
    return(
        <div>
            <hr className="pl-20 pr-20"/>
            
            <div className="flex">
                <div>
                    <h1 className="text-5xl p-20 pb-10">The BuildSquad</h1>
                </div>
                
                <div className="p-10">
                    <h2 className="font-bold text-2xl mb-3">Vellore</h2>
                    <div><strong>Email:</strong>mayukh.sarkar2024@vitstudent.ac.in</div>
                    <div><strong>Phone No.:</strong>+91 9831753620</div>
                </div>
                <div className="p-10">
                    <h2 className="font-bold text-2xl mb-3">Kolkata</h2>
                    <div><strong>Email:</strong>sarkarmayukh8582@gmail.com</div>
                    <div><strong>Phone No.:</strong>+91 9831753620</div>
                </div>

                <div className="p-10">
                    <h4 className="font-extrabold">Follow me:</h4>
                    <a href="https://www.linkedin.com/in/mayukh-sarkar-b15346322/">LinkedIn</a>
                    <br />
                    <a href="https://github.com/litlife8582">Github</a>
                </div>
            </div>
            
            <div className="footer-copy">Built and maintained by <strong> &copy; Mayukh Sarkar 2026</strong></div>
            <div className="footer-copy"><strong>.</strong></div>
        </div>
    )
}