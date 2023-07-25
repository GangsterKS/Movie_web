import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext()

  return (
    <>
    <div className=' grid justify-center bg-slate-900'>
      <h2 className='text-white text-2xl'> Search Your Movie </h2>
      <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder='Search Movie' className="w-52 rounded-md pl-2 p-1 mt-2" value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
      
      <div>
        <p className=' text-red-700 mt-2'>{isError.show && isError.msg}</p>
      </div>
      </div>
     
    </>
  )
}
 
export default Search
