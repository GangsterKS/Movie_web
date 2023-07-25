import React, { useContext, useEffect, useState } from "react";
import Lottie from 'react-lottie';
import MovieLoader from './MovieLoader.json'



const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MovieLoader,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState('Iron man');
    const [isError, setIsError] = useState({ show: "false", msg: ""})

    let API = "https://www.omdbapi.com/?apikey=a03cdc44&"

    const getMovie = async(url) => {

    try {
            const data = await fetch(url);
            const response = await data.json();
            if (response.Response === "True") {
                setMovie(response.Search)
                console.log(response.Search)
                setIsLoading(false)
            }
            else{
                setIsError({
                    show: true,
                    msg: response.Error,
                })
            }
            
        } 
    catch (error) {
            console.log('error')
        }

     
    }
    
    useEffect(() => {
        let timeOut = setTimeout(() => {
        getMovie(`${API}&s=${query}`)
        }, 1000)

        return() => clearTimeout(timeOut)
    }, [query])

    if (isLoading) {
        return(
            <div className='relative top-44'>
                <Lottie options={defaultOptions} height={300} width={300}/>
                 <p className='grid justify-center text-3xl'>Loading.....</p>
                 
                </div>
          )
    }

    return(
        <AppContext.Provider value={{isLoading, movie, isError, query, setQuery}}>
            {children}
            </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider,  useGlobalContext};