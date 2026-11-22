import MovieCard from "../components/movie_card"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2024" },
        { id: 2, title: "James Bond", release_date: "2064" },
        { id: 3, title: "Spidey", release_date: "2054" },
        { id: 4, title: "Thor", release_date: "2014" },
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for Movies....."
                className="seacrh-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="seach-btn">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) =>
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    )
            )}
        </div>
    </div>
}

export default Home;