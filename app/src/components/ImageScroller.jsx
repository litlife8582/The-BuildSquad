import img1 from '../assets/Newsroom/img 1.webp'
import img2 from '../assets/Newsroom/img 2.webp'
import img3 from '../assets/Newsroom/img 3.webp'
import img4 from '../assets/Newsroom/img 4.webp'
import img5 from '../assets/Newsroom/img 5.webp'

export default function ImageScroller(){
    const images=[img1,img2,img3,img4,img5];

    return(
        <div className='w-full overflow-hidden bg-/20 py-10'>
            <div className='animate-scroll'>
                {images.map((img,index)=>(
                    <img 
                        key={`set1-${index}`} 
                        src={img} 
                        alt="Gallery ${index}"
                        className='h-[250px] w-[400px] object-cover shadow-lg border border-slate-600'
                    />
                ))};
                {images.map((img,index)=>(
                    <img 
                        key={`set2-${index}`} 
                        src={img} 
                        alt="Gallery ${index}"
                        className='h-[250px] w-[400px] object-cover shadow-lg border border-slate-600'
                    />
                ))};
            </div>
        </div>
    )
}