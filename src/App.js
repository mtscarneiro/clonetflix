import React, { useEffect, useState } from 'react'
import TmdbConnection from "./TmdbConnection";

export default () => {

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
                    <div>
                        {item.title}
                    </div>
                ))}
            </section>
        </div>
    )
}
