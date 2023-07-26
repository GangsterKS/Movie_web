import Lottie from 'react-lottie';
import MovieLogo from './MovieLogo.json'
import { useState } from 'react';



const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MovieLogo,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Home = () => {
  const [visible, setVisible] = useState(false)

  const VisibleBar = () => {
    setVisible(true)
    if (visible === true) {
      setVisible(false)
    }
  }

  return (
    <>
        <nav className="bg-gray-800">
  <div className="mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 h-auto items-center">
          <Lottie options={defaultOptions} width={70} style={{background :"bg-gray-800"}} height={40}></Lottie> <span className='text-3xl text-white'> Fun-Flix</span>
        </div>
      </div>
    <div className="sm:ml-6 sm:block">
      <div className='text-white text-2xl sm:hidden cursor-pointer' onClick={VisibleBar}><i className="fa-solid fa-bars"></i></div>
          <div className="flex space-x-4 max-sm:hidden ">
          <a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-lg font-medium" aria-current="page">Home</a>
            <a href="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Contact</a>
            <a href="/movie" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Movies</a>
            <a href="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">About</a>
          </div>
        </div>
    </div>
  </div>
  {
    visible ? <div className='flex justify-end sm:z-0'>     
    <div className='relative flex flex-col space-y-1 w-screen bg-slate-500 text-center'>
            <a href="/Home" className="bg-gray-900 text-white rounded-md px-3 py-2 text-lg font-medium" aria-current="page">Home</a>
            <a href="/Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Contact</a>
            <a href="/movie" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Movie</a>
            <a href="/About" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">About</a>
        </div>
  </div> : null
  }
  


</nav>
    </>
  )
}

export default Home
