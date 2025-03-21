import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count , setCount] = useState(0);
  function dechandler(){  
    setCount(count-1);

  }

  function increhandler(){
    setCount(count+1);
  }
  function resethandler(){
    setCount(0);
  }
  return (
   <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#addbee] flex-col gap-10'>
    <div className='text-[#0398d4] font-medium text-2xl:'>
      Increment & Decrement
    </div>
    <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
      <button onClick={dechandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
      <div className='font-bold gap-12 text-5pxl'>
      {count}
      </div>
      <button onClick={increhandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
    </div>
    <button onClick={resethandler}className='bg-[#0398d4] text-white px-5 py-2 text-lg rounded-sm'>Reset</button>
   </div>
  );
}

export default App;
