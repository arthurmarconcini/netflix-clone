import Tmdb from './Tmdb'
import { useEffect, useState } from 'react'
import './App.css'

import MovieRow from './components/MovieRow'

export default () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL

      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
