import './App.css';
import Navbar from './partials/Navbar';
import Hero from './partials/Hero';
import Tracks from './partials/Tracks';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="bg-[url('./images/Devjmi.png')] bg-cover min-h-screen bg-center">
        <Navbar />
        <Hero />
      </div>

      <div className="bg-[url('./images/Devjmi2.png')] bg-repeat-y">
        <hr className='h-1.5 bg-[#a50045] xl:w-[95%] mx-auto border-none rounded-md' />
        <Tracks />
      </div>
    </div>
  );
}

export default App;
