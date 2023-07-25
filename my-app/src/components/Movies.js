import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'
import Search from './Search'


const Movies = () => {
  const {movie} = useGlobalContext()

  return (
    <>
    <Search />
    <div className="grid lg:grid-cols-3 md:grid-cols-2 overflow-hidden justify-items-center bg-gradient-to-t from-slate-800 to-slate-600 xl:grid-cols-4 relative text-center items-center">
        {
            movie.map((elem) => {
              const {Type, Title, imdbID, Poster, Year} = elem;
                return(
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className='my-4 bg-slate-700 border-4 grid justify-center rounded-md p-3 w-auto h-96' key={elem.id}>
                    <img src={Poster} className="text-center pt-5 mb-5 w-56 h-60 px-2" alt="" />
                            <div className='text-left hover:bg-slate-200 hover:text-black bg-slate-800 p-2 text-white border-4'>
                                <h3>{Title.slice(0, 25)}</h3>
                                <h4>{Year}</h4>
                                <li className="list-none text-cyan-700">{Type}</li>
                                {/* <p className="text-green-800">High-24 : {elem.high_24h} &    <span className="text-red-800">Low-24 : {elem.low_24h}</span></p> */}
                            </div>
                            </div>
                            </NavLink>
                )
            })
        }
      </div>
     
    </>
  )
}

export default Movies
