import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useState } from "react";

export default function Dashboard(){
    const navigate=useNavigate();
    const [message,setMessage]=useState("");

    const handleLogout=async()=>{
        try{
            const {error}=await supabase.auth.signOut();

            if(error) throw error;
            setTimeout(()=>navigate('/login'),2000);
        }catch(error){
            setMessage(error.message);
        }
        setMessage("Logged out successfully....redirecting to login");
    }

    return(
        <div className="background">
            <button onClick={handleLogout}>Log out</button>
            <p>{message}</p>
        </div>
    );
}