import React from 'react'
import Typed from 'react-typed';
import cashflow2 from '../../assets/cashflow2.PNG';
import person from '../../assets/person.PNG';

export default function Banner() {
  return (
    <div>
        <div className='bg-blue-500 w-full py-[200px]'>
            <div className='max-w-[1240px] mx-auto text-center text-white'>
                <div className='text-xl md:text-3xl p-2'>
                    Right here for you!
                </div>
                <h1 className='font-bold text-4xl md:text-6xl sm:text-5xl md:py-6'>            
                RPA Business Consultancy   
                </h1>
                <div className='text-xl md:text-5xl sm:text-4xl font-bold py-3'>
                    Tax Planning, 
                    {/*use of "React typed" for typing effect*/} 
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-3 pl-2'
                    strings={['Budgeting', 'Auditing', 'Cost Management']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop/>
                </div>
                <p className='md:text-2xl text-xl text-black'>Do you have more important things to do than worry about accounting? We're here beside you to share the burden and make things easier for you.</p>

                <button className='bg-[#fd6a00] rounded-full py-2 font-medium w-[200px] my-6 mx-auto'>Sign up free</button>
            </div>        
        </div>


        {/*Cash flow component*/}

        <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={cashflow2} alt='cashFlow' />
            <div className='flex flex-col justify-center'>
                <p className='text-blue-700 font-bold '>KEEP TRACK OF YOUR CASH</p>
                <h1 className='text-blue-900 md:text-4xl sm:text-3xl text-2xl py-2 font-semibold'>Cash Flow Activity Calculator</h1>
                <p>We are one of the reputable business advising and accountancy organisations for all of your corporate and personal tax needs. We provide high-end capability provided with a personal touch as a locally owned affiliate. We will work with you to reach your business goal, whether you want to expand your firm, or keep up your best work. We handle all of your accounting needs.                    
                </p>
                <button className='bg-[#fd6a00] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Cash Flow Calculator</button>
            </div>
        </div>
    </div>


            {/*Enter email component*/}
        <div className='bg-blue-500 w-full text-white px-5 py-16'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>
                    We are here to help 
                </h1>
                <p>Receive email by us containing news and updates from the topic that you signed up for.</p>
            </div>

            <div className='my-4'>
                <div className=' w-full flex flex-col sm:flex-row justify-between items-center'>
                    <input className='w-full p-3 rounded-md text-black' type='email' placeholder='Enter your email'/>
                    <button className='bg-[#fd6a00] text-white w-[200px] ml-4 my-6 px-6 py-3 rounded-md '>Email me</button> 
                </div>
            </div>
        </div>
        </div>  

        
        {/*Plans component*/}
        <div className='bg-white w-full py-32 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>

            {/*First Card*/}
            <div className='shadow-xl w-full flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-4xl text-center py-6 text-blue-800 font-bold'>Tax Consulting</h2>
                <img className='w-20 mx-auto bg-white' src={person} alt='person' />
                
                <p className='text-2xl text-center text-blue-900 font-bold'>What we do</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>Corporate & Commercial</p>
                    <p className='py-2 border-b mx-8'>Individual & Family Business</p>
                    <p className='py-2 border-b mx-8'>Tax Due Diligence</p>
                </div>
                <button className='bg-[#fd6a00] w-[150px] font-medium rounded-md my-6 mx-auto px-6 py-3 text-white'>Join Us</button>
            </div>


            {/*Second Card*/}
            <div className='shadow-xl w-full flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 bg-white'>
            <h2 className='text-4xl text-center py-6 text-blue-800 font-bold'>Business Advisory</h2>
                <img className='w-20 mx-auto bg-white' src={person} alt='person' />
                
                <p className='text-2xl text-center text-blue-900 font-bold'>What we do</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>Business & Ownership Structures</p>
                    <p className='py-2 border-b mx-8'>Budgeting & Cashflow Forecasting</p>
                    <p className='py-2 border-b mx-8'>Credit & Debt Management</p>
                </div>
                <button className='bg-[#fd6a00] w-[150px] font-medium rounded-md my-6 mx-auto px-6 py-3 text-white'>Join Us</button>
            </div>


            {/*Third Card*/}
            <div className='shadow-xl w-full flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-4xl text-center py-6 text-blue-800 font-bold'>Audit & Assurance</h2>
                <img className='w-20 mx-auto bg-white' src={person} alt='person' />
                
                <p className='text-2xl text-center text-blue-900 font-bold'>What we do</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-6'>Internal Audits</p>
                    <p className='py-2 border-b mx-8'>Auditing Financial Statement</p>
                    <p className='py-2 border-b mx-8'>Expert advice</p>
                </div>
                <button className='bg-[#fd6a00] w-[150px] font-medium rounded-md my-6 mx-auto px-6 py-3 text-white'>Join Us</button>
                </div>                       
                </div>
            </div>               

    </div>
  )
}

