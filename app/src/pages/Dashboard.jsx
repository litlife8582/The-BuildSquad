import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [clientName, setClientName] = useState("Guest");
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const { data: { user } } = await supabase.auth.getUser();

                if (user) {
                    if (user.user_metadata?.display_name) {
                        setClientName(user.user_metadata?.display_name);
                    }

                    const { data, error } = await supabase
                        .from('Services')
                        .select('*')
                        .eq('user_id', user.id)
                        .order('created_at', { ascending: false });

                    console.log("Supabase Data:", data, "Supabase Error:", error);
                    if (data) setRequests(data);
                }
            } catch (error) {
                console.log("Error fetching data:", error.message);
            }
        }

        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) throw error;
            setMessage("Logged out successfully....redirecting to login");
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <div className="background">
            <div className="dashboard">
            <div className="p-10 flex justify-between items-center w-full">
                <h1 className="text-amber-200 text-4xl w-1/2 pl-30">{clientName}</h1>
                <div className="flex items-center gap-4">
                    <button onClick={handleLogout} className="pr-25">Log out</button>
                    <p>{message}</p>
                </div>

            </div>
            <div>
                <div>
                    <div className="m-20 flex flex-col">
                        <h1 className="text-center text-3xl text-lime-300 p-6">Your request history</h1>
                        <table className="dashboard-table">
                            <thead>
                                <tr>
                                    <th>Request ID</th>
                                    <th>Date Submitted</th>
                                    <th>Appointment Date</th>
                                    <th>Service Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.length === 0 ? (
                                    <tr>
                                        <td colSpan={5}> No request found</td>
                                    </tr>
                                ) : (requests.map((req) => (
                                    <tr key={req.id}>
                                        <td>{req.id.toString()}</td>
                                        <td>{new Date(req.created_at).toLocaleDateString()}</td>
                                        <td>{new Date(req.preferred_date).toLocaleDateString()}</td>
                                        <td>{req.service_type}</td>
                                        <td>{req.status}</td>
                                    </tr>
                                ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}