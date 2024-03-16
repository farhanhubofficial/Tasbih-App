import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown,  } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { LuTimerReset } from "react-icons/lu";
import { AiFillSound } from "react-icons/ai";
import { PiVibrateLight } from "react-icons/pi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaAffiliatetheme } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";


import "./Page1.css";

function Page1() {
  const [Count, SetCount] = useState(0)
  const [chevron, setChevron] = useState(false)
  const [align, setAlign] = useState(false)
  const [list,setList] = useState(false)
  console.log(align)

  function handleClick(){
SetCount(Count+1)
  }
  function resetClick(){
    SetCount(Count-1)
      }

  return (
       <div className='bg-black w-[450px]  h-[600px] text-white rounded-2xl relative '>
<div className=   {chevron? 'text-2xl bg-gray-950 h-44  px-2 rounded-2xl' : 'text-2xl  h-44  px-2 rounded-2x '}>
  <div className='flex  justify-between'>
    <button onClick={()=>setAlign(!align)} className='bg-gray-900 rounded-full w-9  h-9 pl-1.5 '><FiAlignJustify /></button>
    {/* <div onClick={()=>setAlign(!align)} className=''> <FiAlignJustify  bg-gray-900 rounded-full/></div> */}
    <div>
    <span className='ml-28'>Title</span>
    <div className='w-[300px] bg-green-500 h-2 rounded-full'></div>
    </div>
    <div onClick={()=>setChevron(!chevron)}>
    {!chevron ?     <FiChevronDown/>:<FiChevronUp/> }
    </div>
  </div>


  <div className={!chevron? 'hidden' :''}>
  <div className='text-base ml-32'>
  <p>Target:1000</p>
  <p>you have reached ur destination</p>
  </div>

  <div className='flex justify-between '>
    <button className='bg-black w-[140px] ml-6 h-[40px] rounded-3xl'>End</button>
    <button className='bg-black w-[140px] mr-6 h-[40px] rounded-3xl '
    >Edit</button>
  </div>
  </div>




  
  </div>
  <div className='  w-[240px] ml-20 text-5xl h-72 bg-black pt-4 mt-3 border border-gray-600 rounded-3xl '>
    
    <div className='pl-7 bg-white text-black  ml-16 mr-16   rounded-xl '>
      <h4 className='ml-1 text-2xl'>{Count}</h4>
    </div>

    <div className='flex justify-between bg-black mt-12'> 
    <LuTimerReset onClick={resetClick}/>
    <GrPowerReset onClick={()=>SetCount(0)}/>
    </div>



    <div className='ml-20 mr-16 mt-6 text-black bg-white pl-7  h-20 w-20 rounded-full' onClick={handleClick}>

    </div>
  </div>


<div className='mt-20  flex justify-between text-3xl'>
<AiFillSound/>
<PiVibrateLight/>
<button onClick={()=>setList(!list)}>List</button>
<IoColorPaletteSharp/>
<FaAffiliatetheme/>
</div>


<div className ={align? 'bg-black w-[450px]  h-[600px] text-white rounded-2xl  absolute top-0 px-2 transition-transform duration-3000 ease-linear delay-1000  ' : 'bg-black w-[450px]  h-[600px] text-white rounded-2xl  absolute  bottom-[-100%] hidden '}  >
  <div className='flex justify-between '>
  <button onClick={()=>setAlign(!align)} className='text-4xl mt-0 bg-gray-900 rounded-full' ><IoIosClose/></button>
  <span>Menu</span>
  <FaUser/>
  </div>
  <div className='bg-yellow-400  h-[120px] mt-8 rounded-xl'>
<h3 className=' ml-5  text-2xl w-[130px] text-black font-bold '>other Applications </h3>
<p className='ml-5 text-gray-800'>Recommended for you...</p>
  </div>

</div>


<div className ={list? 'bg-black w-[450px]  h-[600px] text-white rounded-2xl  absolute top-0 px-2 ease-in duration-300  ' : 'bg-black w-[450px]  h-[600px] text-white rounded-2xl  absolute hidden'}  >
<button onClick={()=>setList(!list)} className='text-4xl mt-0 bg-gray-900 rounded-full' >hwy</button>
</div>



  </div>

  )
}

export default Page1