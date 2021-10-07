import React, { useEffect, useState } from 'react'
import TmdbConnection from "./TmdbConnection";
import MovieRow from "./components/MovieRow/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
import Header from "./components/Header/Header";
import "./App.css"

const App = () => {

    const [ movieList, setMovieList ] = useState([])
    const [ featuredData, setFeatureData ] = useState(null)
    const [ fadeToBlackHeader, setFadeToBlackHeader ] = useState(false)

    useEffect(() => {

        const loadAll = async () => {
            //Getting a movie list
            let list = await TmdbConnection.getHomeList()
            console.log(list)
            setMovieList(list)


            //Getting featured movie
            let originals = list.filter(i => i.slug === 'originals')

            let randomPick = Math.floor(Math.random() *
                (originals[0].items.results.length - 1))

            let chosenMovie = originals[0].items.results[randomPick]
            let chosenMovieInfo = await TmdbConnection.getMovieInfo(chosenMovie.id, 'tv')

            setFeatureData(chosenMovieInfo)
        }

        loadAll()
    }, [])

    useEffect(()=> {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setFadeToBlackHeader(true)
            } else {
                setFadeToBlackHeader(false)
            }
        }

        window.addEventListener("scroll", scrollListener)

        return () => {
            window.removeEventListener("scroll", scrollListener)
        }
    }, [])

    return (
        <div className="page">

            <Header fade={fadeToBlackHeader} />

            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }


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