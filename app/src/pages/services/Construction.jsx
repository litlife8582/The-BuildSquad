import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";

export default function Construction() {
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [availableDates, setAvailableDates] = useState([]);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const navigate=useNavigate();

  useEffect(()=>{
    fetchAvailability();
  },[]);

  const fetchAvailability=async()=>{
    const {data:booking,error}=await supabase
    .from('Services')
    .select('preferred_date')
    .eq('service_type','Construction')
    .neq('status','Cancelled');

    if(error){
        console.error("Error fetching bookings:",error);
        return;
    }

    const bookedDates=booking.map(b=>b.preferred_date);

    const potentialDates=[];
    for(let i=1;i<=14;i++){
        const date=new Date();
        date.setDate(date.getDate()+i);
        const dateString=date.toISOString().split('T')[0];

        if(!bookedDates.includes(dateString)){
            potentialDates.push({
                value:dateString,
                label:date.toLocaleDateString('en-GB',{
                    weekday:'short',day:'numeric',month:'short'
                })
            });
        }
    }
    setAvailableDates(potentialDates);
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const{data:{user}}=await supabase.auth.getUser();
        if(!user) throw new Error("Please login first");
        
        let imageUrl=null;
        if(file){
            const fileName=`${Date.now()}-${Math.random()}.${file.name.split('.').pop()}`;
            await supabase.storage.from('service-images').upload(fileName,file);
            const {data}=supabase.storage.from('service-images').getPublicUrl(fileName);
            imageUrl=data.publicUrl;
        }
    
        const {error}=await supabase.from('Services').insert([{
            user_id:user.id,
            service_type:'Construction',
            description,
            preferred_date:selectedDate,
            image_url:imageUrl
        }]);

        if(error) throw error;
        setMessage("Booking confirmed!");
        setTimeout(()=>navigate('/dashboard'),2000);
    }catch(err){
        setMessage(err.message);
    }
  };

  return (
    <div className="background">
      <div>
        <h1>Book Construction Service!</h1>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label>Description:</label>
            <textarea
              required
              rows="4"
              placeholder="Describe the issue...."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="font-medium">
              Available Dates (Next 2 Weeks)
            </label>
            <select
              required
              className="border p-2 rounded bg-white"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">-- Choose an available slot --</option>
              {availableDates.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </select>

            <label>Upload Image of the issue(Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
