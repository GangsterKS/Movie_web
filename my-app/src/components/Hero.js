import React from 'react';
import Lottie from 'react-lottie';
import HeroLoader from './HeroLoader.json'
import Sliderr from './Slider';
import Fotter from './Fotter';


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
      <Sliderr />

    <div className='overflow-hidden mt-10'>
          <div className='w-screen h-200px overflow-hidden '>
              <div className='items-center  lg:flex lg:justify-evenly'>
                <div className='max-lg:grid max-lg:justify-center'>
                <div className=' relative '>
                  <h1 className=' text-5xl max-[620px]:text-3xl max-[450px]:text-xl w-96'>Let's Watch Movie Together</h1>
                    <div className=' max-w-xl mt-4'>
                        <p className=' font-sans max-[400px]:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta sequi corrupti itaque dolores atque sit minus, ea consequatur repudiandae incidunt, perspiciatis ipsam aspernatur excepturi magnam reprehenderit ipsa neque minima delectus?</p>
                      </div>
                        <div className='bg-blue-900 absolute w-auto rounded-lg mt-4 px-2 p-2 hover:bg-blue-400'>
                          <a href="/movie"><button className='p-1 px-4 text-lg'>Explore Movie</button></a>
                        </div>
                      </div>
                    </div>
                  <div className=' max-lg:relative max-lg:top-20 max-sm:hidden'>
                    <Lottie options={defaultOptions} width={300} height={300}></Lottie>
              </div>
            </div>
          <Fotter />
          </div>
      </div>
      </div>
    </>
  )
}

export default Hero
