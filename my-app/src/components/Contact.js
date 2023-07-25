import React from 'react'
import query from './query.json'
import Lottie from 'react-lottie';



const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: query,
  rendererSettings: {
  preserveAspectRatio: 'xMidYMid slice'
  }
};

const Contact = () => {
  return (
    <>
    
      <div className="isolate bg-gradient-to-t from-slate-800 to-slate-600 px-6 py-24 sm:py-32 lg:px-8">
  <div className=" mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Submit Form And Raise Query</h2>
  </div>
  <div className='flex flex-row justify-evenly'>
  <form action="#" method="POST" className="mx-32 mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" placeholder='FirstName' autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" placeholder='LastName' autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" placeholder='Example@gmail.com' autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="relative mt-2.5">
          
          <input type="tel" name="phone-number" placeholder='+91' autoComplete="tel" className="block w-full rounded-md border-0  py-2 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 " required/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message (optional)</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" cols="80" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 " placeholder='Type Your Query'></textarea>
        </div>
      </div>
      <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex items-center ">
          <input type="checkbox"  name="" id="" required/>
        </div>
        <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <a href="/" className="font-semibold text-indigo-600 ml-1">privacy&nbsp;policy</a>.
        </label>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-slate-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit & Talk</button>
    </div>
  </form>
  <div className='max-[1120px]:hidden relative top-40'>
  <Lottie options={defaultOptions} width={400} height={300}></Lottie>
</div></div>
</div>

    </>
  )
}

export default Contact
