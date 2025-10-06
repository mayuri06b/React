import { useState } from 'react'

function App() {
  const [color , setColor] = useState("White");
  return (
    <>
    <div style={{backgroundColor:color}}>
    <div>
      <h1 className='text-black'>Welcome To the Color Changer App</h1>
    </div>
    <br></br>
    <div className='space-x-5 p-2.5 border-2 inline-block rounded-lg'>
      <button className='bg-amber-400 p-1.5 rounded w-24' onClick={()=>setColor("yellow")}>Yellow</button>
      <button className='bg-blue-400 p-1.5 rounded w-24' onClick={()=>setColor("blue")}>Blue</button>
      <button className='bg-red-400 p-1.5 rounded w-24' onClick={()=>setColor("red")}>Red</button>
      <button className='bg-cyan-400 p-1.5 rounded w-24' onClick={()=>setColor("cyan")}>Cyan</button>
      <button className='bg-indigo-400 p-1.5 rounded w-24' onClick={()=>setColor("indigo")}>Indigo</button>
      <button className='bg-emerald-400 p-1.5 rounded w-24' onClick={()=>setColor("emerald")}>Emerald</button>
      <button className='bg-fuchsia-400 p-1.5 rounded w-24' onClick={()=>setColor("fuchsia")}>Fuchsia</button>
      <button className='bg-orange-400 p-1.5 rounded w-24' onClick={()=>setColor("orange")}>Orange</button>
    </div>
    </div>
    </>
  )
}

export default App
