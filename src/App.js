import React, { useEffect, useState } from 'react'
import TmdbConnection from "./TmdbConnection";
import MovieRow from "./components/MovieRow/MovieRow";
import "./App.css"

const App = () => {

    const [ movieList, setMovieList ] = useState([])

    useEffect(() => {

        const loadAll = async () => {
            //Getting a movie list
            let list = await TmdbConnection.getHomeList()
            console.log(list)
            setMovieList(list)
        }

        loadAll()
    }, [])

    return (
        <div className="page">
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key}
                              title={item.title}
                              items={item.items} />
                ))}
            </section>
        </div>
    )
}

export default App