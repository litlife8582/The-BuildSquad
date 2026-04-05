export default function NewsArticle({article,onClose}){
    if(!article) return null
    
    return(
        <div>
            <div className="fullArticle">
                <button className="absolute top-6 right-6 text-4xl" onClick={onClose}>&times;</button>
                <h2 className="text-5xl m-5 text-amber-200">{article.title}</h2>
                <p className="text-3xl">{article.fullText}</p>
            </div>
        </div>
    )
}