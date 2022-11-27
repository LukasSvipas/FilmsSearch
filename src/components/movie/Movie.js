const Movie = (props) => {
    let pav = props.title;
    let se = "https://www.youtube.com/results?search_query=";
    let oT = " official trailer"
    let searcher = se + pav + oT;
    return (
        <div className="col form-control m-2">
            <img src={props.img && props.img} alt="" width="200px" />
            <h5 className="card-title">{props.title}</h5>
            <a href={searcher} target="blank">Official Trailer</a>
        </div>
    )
}
export default Movie