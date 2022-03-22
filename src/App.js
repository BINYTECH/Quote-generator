import React, {useState} from 'react';
import './App.css';

function App() {
  const [quote, setQuote]= useState("");
  const [author, setAuthor]=useState("");
  function genQuote(){
    fetch("http://quotable.io/random")
    .then(res => res.json())
    .then(data => {
      setQuote(data.content);
      setAuthor(data.author);
    })
    
  }
  return (
    <div className=" bg-emerald-300 h-screen App flex flex-col items-center">
    <h1 className='sm:mt-8 sm:text-2xl  sm:mb-8 sm:m-11 md:text-4xl lg:mt-20 lg:mb-12 lg:text-5xl font-bold'>Random Quote Generator</h1>
      <div className='sm:bg-gradient-to-b from-indigo-300 to-teal-50 sm:flex sm:flex-col sm:justify-center sm:w-4/5 sm:h-72 sm:px-3 sm:py-3 bg-teal-50 border-4 w-1/2 h-36 rounded-lg'>
      <p className='sm:px-0 sm:text-sm md:text-lg lg:text-2xl lg:mt-10 px-4 from-neutral-900 font-medium'>"{quote}"</p>
        <h3 className='sm:text-base pt-2 md:text-xl lg:text-3xl font-bold '>{author}</h3>
      </div>
        <button onClick={genQuote} className='sm:w-36 md:w-48 mt-10 w-48 h-10 rounded-lg font-bold text-zinc-900 border-2 bg-slate-400 hover:shadow-md hover:shadow-emerald-50'>Next Quote</button>
    </div>
  );
}

export default App;
