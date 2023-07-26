import React, { useState } from 'react'
import { useGlobalContext } from './Context'


const Slider = () => {
  const {movie} = useGlobalContext()
  const [currentPage, setCurrentPage] = useState(1);
  const screenImage = 4;
  const lastImage = currentPage * screenImage;
  const firstImage = lastImage - screenImage;
  const fixData = movie.slice(firstImage, lastImage)

  const Prev = () => {
    if (currentPage !== 1) {
      setCurrentPage( currentPage - 1)
    }
    
  }

  const Next = () => {
    console.log('object')
    if (currentPage !== 2) {
      setCurrentPage( currentPage + 1)
    }
    
  }

  return (
    <>
      <div className=' text-center overflow-hidden'>
        <div className='w-full h-full flex justify-center overflow-hidden mt-2'> 
            <div className='w-3/4 text-center xl:grid rounded-xl flex flex-row justify-center overflow-hidden bg-slate-600 h-96'>
             <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
              
              { 
                fixData.map((img, id) => {
                  return(
                  <div className='flex h-96' key={id}>
                     <img src={img.Poster} className='relative ml-2 rounded-xl px-4 w-auto' alt="" />
                  </div>
                  )
                })
              }

            </div> </div>
            </div>
            <div className='flex justify-center mt-2'>
            <div className='w-auto bg-slate-700 p-1 px-4 font-sans text-xl rounded-md text-center items-center align-middle mr-2 cursor-pointer' onClick={Prev}><p><i className="fa-solid fa-arrow-left mr-1"></i>Prev </p></div>
              <div className='w-auto bg-slate-700 p-1 px-4 font-sans text-xl rounded-md text-center ml-2 cursor-pointer' onClick={Next}><p>Next<i className="fa-solid ml-1 fa-arrow-right"></i></p></div>
            </div>
            <div className='w-screen grid justify-center'>
            <div className='text-center mt-6 max-[400px]:text-sm text-xl'>
            <p className=' w-auto bg-slate-300 max-[400px]:p-0 max-[400px]:px-0 p-2 px-2 rounded-md'>Enjoy All Your Favourate Movie's</p>
          </div></div>
          </div>
        
      
    </>
  )

  
}

export default Slider
