import React from 'react'

export default function contact() {
  return (
    <>
      <div className='bg-white w-full py-14 px-4'>
        <div className='flex w-full justify-center items-center'>
            <div className='flex flex-col bg-orange-400 w-full max-w-4xl p-8 rounded-xl text-white shadow-lg'>

                
                <div className='flex flex-col space-y-8 justify-between'>
                    <div>
                        <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                        <p className='pt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                    </div>
                    
                </div>

                {/*Form*/}

                <div>
                    <div className='bg-gray-200 rounded-lg shadow-lg text-gray-500 p-8 mt-6'>
                        <form action='' className='flex flex-col space-y-4 font-semibold'>
                            <div>
                                <label for="" className='text-sm'>Full Name</label>
                            </div>
                            <div>
                                <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full py-2 px-4 outline-none rounded-md focus:ring-2 focus:ring-blue-500'/>
                            </div>

                            <div>
                                <label for="" className='text-sm'>Email address</label>
                            </div>
                            <div>
                                <input type="email" placeholder='Email address' className='ring-1 ring-gray-300 w-full py-2 px-4 outline-none rounded-md focus:ring-2 focus:ring-blue-500'/>
                            </div>

                            <div>
                                <label for="" className='text-sm'>Message</label>
                            </div>
                            <div>
                                <textarea 
                                    placeholder='Message...' 
                                    rows='4'
                                    className='ring-1 ring-gray-300 w-full py-2 px-4 outline-none rounded-md focus:ring-2 focus:ring-blue-500'/>
                            </div>
                            <button className='inline-block self-end bg-[#fd6a00] text-white rounded-md px-6 py-2 font-bold'>Send Message</button>                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
