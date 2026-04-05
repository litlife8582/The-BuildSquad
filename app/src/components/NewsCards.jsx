export default function NewsCard(props){
    return(
        <>
            <div className="newsCard">
                <h2 className="text-4xl mb-5 text-"><u>{props.title}</u></h2>
                <p>{props.description}</p>
                <button className="text-cyan-200" onClick={props.onReadMore}>Read full article</button>
            </div>
        </>
    )
}