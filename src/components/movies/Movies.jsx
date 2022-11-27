import Search from "../search/Search";
import { useEffect, useState } from "react";
import Movie from "../movie/Movie";
const Movies = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const handleSearch = (term) => {
        setSearch(term)
    }

    useEffect(() => {
        // console.log('use effect veikia')
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=770c6aa1`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
    }, [search])

    console.log(movies);


    return (
        <div className="container">
            <Search onSearch={handleSearch} />
            <h3 className="container m-2">Films</h3>
            <div className="container-fluid row">{movies?.map(movie => <Movie
                title={movie.Title}
                img={movie.Poster}
            />)}</div>
            {/*<Movie*/}
            {/*title = {movies['Title']}*/}
            {/*img = {movies['Poster']}*/}
            {/*/>*/}
        </div>
    )
}


export default Movies