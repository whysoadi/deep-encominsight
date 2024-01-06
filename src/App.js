import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { LuFlower } from "react-icons/lu";
import map from "./asset/map.png"
import { FaLocationArrow } from "react-icons/fa";
const App = () => {
  return (
    <div>
     {/* 1st page */}
    <div>
      {/* upper bar */}
    <div className='py-4 bg-gray-100 flex justify-between sm:px-16 px-8'>
      <div className='flex justify center items-center'>
        <div className='pr-4'>
    <IoMail />
    </div>
    <div className='flex items-center'>
      <span className='font-bold'>Coffee? </span>
      <LuDot color='gray' />
     <span className='text-gray-500 font-medium'>Mail from Maris Lu.</span> 
    </div>
    </div>

    <div className='flex items-center justify-center text-gray-500'>
    <IoMdMic size={20}/>
    </div>
    </div>

{/* 1st line */}
<div className='sm:px-16 px-8 pt-7 flex justify-between'>
  <div className='text-2xl'>
  Marisa Lu
  </div>
  <div className='text-gray-400'>
    Just Now
  </div>
</div>

{/* 2nd line  */}
<div className='sm:px-16 px-8 pt-2 text-3xl font-bold'>
  Coffee?
</div>

{/* 3rd line */}

<div className='pt-8 sm:px-16 px-8'>
  Hey Jason,
</div>
{/* 4th line  */}
<div className='sm:px-16 px-8 pt-5'>
Was wondering if you'd be interested in meeting my team at Philz Coffee at 11 AM today. No pressure if you can't make it, although I think you guys would really get along!
</div>

{/* 5th line  */}

<div className='sm:px-16 px-8 py-5'>
  Marisa
</div>

{/* 6th line  */}
<div className='my-2 py-[0.8px] bg-gray-100 sm:mx-16 mx-8'>
</div>

{/* buttons */}
<div className='sm:px-16 px-8 space-x-3'>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 capitalize'> reply</button>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 capitalize'>Forward</button>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 capitalize'> Delete</button>
</div>

<div className='my-7 text-gray-400 sm:px-16 px-8 flex space-x-2'>
<LuFlower  />
<span className='text-xs'>More actions</span>
</div>
    </div>

{/* 2nd page */}

<div className='my-2'>
  {/* upper bar */}
 <div className='py-4 bg-gray-100 flex justify-between sm:px-16 px-8'>
    <div className='flex items-center'>
      <span className='font-medium text-sm sm:text-md'>See my availability:today </span>
    </div>

    <div className='flex items-center justify-center text-gray-500'>
    <IoMdMic  size={20}/>
    </div>
    </div>

{/* 1st line */}
    <div className='sm:px-16 px-8  pt-7 flex justify-between'>
  <div className='text-3xl font-bold'>
  Available until 1 PM
  </div>
</div>

{/* 2n line  */}
<div className='sm:px-16 px-8 py-5'>
  <span>Would you like to create an event for Coffee with Marisa at 11AM?</span> 
</div>

{/* graph  */}

<div className='sm:mx-16 mx-8 bg-gray-100 h-80 rounded-xl my-2 grid grid-cols-5 gap-2 pb-5'>
 
    <div className='col-span-1 sm:pl-8 sm:pr-4 pt-8' >
     <div className='h-1/6 flex items-center sm:text-sm text-xs justify-end pb-4 font-medium'>
       9:41 AM
     </div>
     <div className='h-1/6 flex items-center justify-end sm:text-sm text-xs text-gray-400'>
      11 AM
     </div>
     <div className='h-2/6 flex items-end justify-end sm:text-sm text-xs text-gray-400'>
     1 PM
     </div>
     <div className='h-1/6 flex justify-start items-end sm:text-sm text-xs text-gray-400'>
      
     </div>
     <div className='h-1/6 flex justify-end items-end sm:text-sm text-xs text-gray-400'>
   3 PM
     </div>
    
    </div>

    <div className='col-span-4 '>
      <div className='border-l-4 border-dotted  h-1/6   items-center border-gray-500'>

      </div>
      <div className='border-l-4 border-dotted  h-1/6   items-center border-gray-500'>
      <div className=' py-[1px] bg-gray-300  '></div>
</div>
     
     
    

     <div className='h-2/6  border-l-4 border-dotted border-gray-500 pb-3 '>
      
      <div className='h-full bg-blue-400 flex items-center pt-2' > 
          <div className='text-center  px-6'>Coffee with Marisa</div>
          <div className='text-gray-300 '>Philz Coffee</div>
      </div>

     </div>
     <div className='h-2/6  bg-gray-200 flex items-center'>
        <div className='px-6'>Meeting with Danny Trinh</div>
        <div className='text-gray-400'> Mars Land</div>
     </div>
     
    </div>
  </div>
  <div className='mt-8 mb-2 py-[0.8px] bg-gray-100 sm:mx-16 mx-8'>
</div>
  <div className='sm:px-16 px-8 space-y-2 sm:space-x-3 space-x-1'>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 ml-1 sm:ml-0 capitalize'> Create Event</button>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 capitalize'>Edit Event</button>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 capitalize'> Full Calender</button>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 capitalize'> Dismiss</button>
</div>

<div className='my-7 text-gray-400 sm:px-16 px-8  flex space-x-2'>
<LuFlower  />
<span className='text-xs'>More actions</span>
</div>

</div>

{/* 3rd page */}

<div>
 
  {/* upperbar  */}
  
  <div className='py-4 bg-gray-100 flex justify-between sm:px-16 px-8'>
      <div className='flex justify center items-center'>
        <div className='pr-4 text-gray-500'>
        <FaLocationDot />
    </div>
    <div className='flex items-center'>
      <span className='font-bold'>Philz Coffee </span>
      <LuDot color='gray' />
     <span className='text-gray-500 font-medium'>Location</span> 
    </div>
    </div>

    <div className='flex items-center justify-center text-gray-500'>
    <IoMdMic size={20}/>
    </div>
 
  </div>
   {/* image */}
  <div className='h-1/5 w-full'>
 <img src={map} alt="" />
  </div>
{/* 1st line */}
<div className='sm:px-16 px-8  pt-7 flex justify-between'>
  <div className='text-3xl font-bold'>
  Philz Coffee
  </div>
</div>

{/* 2n line  */}
<div className='sm:px-16 px-8  py-3'>
  <span>Custom-blended java in a casual setting.</span> 
</div>

{/* address  */}

<div className='flex-col '>
  <div className='text-gray-400 sm:px-16 px-8  text-sm'>20686 Stevens Creek Blvd</div>
  <div className='text-gray-400 sm:px-16 px-8  text-sm'>Cupertino, CA 95014</div>
</div>

<div className='mt-6 mb-2 py-[0.8px] bg-gray-100 sm:mx-16 mx-8'>
</div>
  <div className='sm:px-16 px-8  space-x-3 flex'>
<div className='rounded-xl text-xs font-medium cursor-pointer bg-gray-200 text-gray-500 px-4 py-2 capitalize'> 
<div className='flex '>
  <div className='flex justify-center pr-1 pt-1'>
<FaLocationArrow />
</div>
<div className='pl-1'>
<div>Get directions</div>
<div className='text-2xs text-gray-400'>Requires your location</div>
</div>
</div>
</div>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-4 py-2 capitalize'>See Details</button>
<button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-4 py-1 capitalize'>Find more cafes nearby</button>
{/* <button className='rounded-xl text-xs font-medium bg-gray-200 text-gray-500 px-5 py-2.5 capitalize'> Dismiss</button> */}
</div>

<div className='my-7 text-gray-400 sm:px-16 px-8  flex space-x-2'>
<LuFlower  />
<span className='text-xs'>More actions</span>
</div>
</div>


    </div>
  )
}

export default App
