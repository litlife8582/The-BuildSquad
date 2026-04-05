import img1 from '../assets/Gallery/img1.webp'
import img2 from '../assets/Gallery/img2.webp'
import img3 from '../assets/Gallery/img3.webp'
import img4 from '../assets/Gallery/img4.webp'
import img5 from '../assets/Gallery/img5.webp'
import img6 from '../assets/Gallery/img6.webp'

export default function GalleryImageScroller(){
    const images=[img1,img2,img3,img4,img5,img6];

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