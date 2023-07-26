import React from 'react'

const Fotter = () => {
  return (
    <> 
    <div className='w-auto h-auto md:mt-20 sm:mt-28 max-[650px]:mt-28 ml-8 mt-6'>
      <div className=' font-sans text-xl'>
        <p className=' break-words'>Read about Fun-flix TV shows and movies and watch bonus videos on Tudum.com.</p>
      </div>
      <div className=' mt-6'>
        <p>Questions? Contact us.</p>
      </div>
      <div className='mt-8 text-center mb-6'>
        <ul className=' flex flex-row justify-evenly'>
            <li className='text-left'>
                <p className='pb-2'><i className="fa-regular fa-circle-question px-2"></i>FAQ</p>
                <p className='pb-2'><i className="fa-solid fa-circle-info px-2"></i>Help Centre</p>
                <p className='pb-2'><i className="fa-solid fa-users px-2"></i>Account</p> 
                <p className='pb-2'><i className="fa-solid fa-photo-film px-2"></i>Media Centre</p>
            </li>
            <li className='text-left'>
                <p className='pb-2'><i className="fa-solid fa-boxes-stacked px-2"></i>Investor Relations</p>
                <p className='pb-2'><i className="fa-solid fa-film px-2"></i>Way to Watch</p>
                <p className='pb-2'><i className="fa-regular fa-bookmark px-2"></i>Terms of Use</p>
                <p className='pb-2'><i className="fa-solid fa-gauge-high px-2"></i>Speed Test</p>
            </li>
            <li className='text-left'>
                <p className='pb-2'><i className="fa-solid fa-scale-unbalanced-flip px-2"></i>Legal Notice</p>
                <p className='pb-2'><i className="fa-regular fa-thumbs-up px-2"></i>Only on Fun-Flix</p>
                <p className='pb-2'><i className="fa-solid fa-address-book px-2"></i>Contact us</p>
                <p className='pb-2'> <i className="fa-solid fa-person-through-window px-2"></i>Jobs</p>
            </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Fotter
