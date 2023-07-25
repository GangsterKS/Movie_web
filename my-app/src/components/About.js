import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
  const[email, setEmail] = useState('');

  const success = () => {

    if (email === '') {
      toast.error("Please Fill E-mail Id!");
      setEmail('')
    }else{
      toast.success("Subscription Success!");
      setEmail('')
    }
    
  }

  const handleOnChange = (event) => {
    // console.log('changed')
    setEmail(event.target.value)
  }
  
  return (
    <>
    <div className="relative isolate bg-gradient-to-r from-slate-700 to-zinc-500 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Purchase To Our Subscription</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed autem numquam illum maxime earum.</p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" value={email} onChange={handleOnChange} name="email" type="email"  required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
          <button onClick={success} type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <div className='h-6 w-6 text-white text-2xl text-center mb-1'>
            <i class="fa-regular fa-calendar-days"></i>
            </div>
          </div>
          <dt className="mt-4 font-semibold text-white">Daily new Movies</dt>
          <dd className="mt-2 leading-7 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, debitis?</dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <div className='h-6 w-6 text-white text-2xl text-center mb-1'>
          <i className="fa-regular fa-hand "></i></div>
          </div>
          <dt className="mt-4 font-semibold text-white">No spam</dt>
          <dd className="mt-2 leading-7 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, cum?.</dd>
        </div>
      </dl>
    </div>
  </div>
  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
  </div>
  </div>
  <ToastContainer position="top-center" theme="colored"/>
</>

    
  )
}