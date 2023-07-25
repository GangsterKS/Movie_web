import React from 'react';
import Lottie from 'react-lottie';
import HeroLoader from './HeroLoader.json'
import Slider from './Slider';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: HeroLoader,
  rendererSettings: {
  preserveAspectRatio: 'xMidYMid slice'
  }
};

const Hero = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-slate-600 to-zinc-400'>
      <Slider />

    <div className='overflow-hidden'>
      <div className='w-screen h-200px overflow-hidden '>
        <div className='items-center flex justify-evenly'>
        <div className=' relative'>
        <h1 className=' text-5xl max-[620px]:text-3xl max-[450px]:text-xl w-96'>Let's Watch Movie Together</h1>
        <div className=' max-w-xl mt-4'>
            <p className=' font-sans max-[400px]:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi corrupti itaque dolores atque sit minus, ea consequatur repudiandae incidunt, perspiciatis ipsam aspernatur excepturi magnam reprehenderit ipsa neque minima delectus?</p>
        </div>
        <div className='bg-blue-900 absolute w-auto rounded-lg mt-4 px-2 p-2 hover:bg-blue-400'>
        
        <a href="/movie"><button className='p-1 px-4 text-lg'>Explore Movie</button></a>

      </div>
      </div>
      <div className=' max-lg:hidden'>
            <Lottie options={defaultOptions} width={300} height={300}></Lottie>
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,0L26.7,10.7C53.3,21,107,43,160,69.3C213.3,96,267,128,320,154.7C373.3,181,427,203,480,218.7C533.3,235,587,245,640,240C693.3,235,747,213,800,186.7C853.3,160,907,128,960,133.3C1013.3,139,1067,181,1120,186.7C1173.3,192,1227,160,1280,138.7C1333.3,117,1387,107,1413,101.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div></div></div>
    </>
  )
}

export default Hero
