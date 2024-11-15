
import { Tamagotchi } from './components/Tamagotchi'
import { Contact } from './components/Contact'

function App() {


  return (
    <>
  <div className="bg-no-repeat  min-h-screen bg-background-final">
    <div className='flex flex-col  '>
      <div className='flex justify-center'>
     <img src="../public/header.png" className='w-1/3 flex'/>
     </div>
     <div className='flex justify-center h-full items-center mb-8'>
    
      <Tamagotchi />
      </div>
    </div>
  </div>

    
    <div className='bg-background bg-no-repeat bg-[size:1900px] min-h-screen flex justify-center items-center'>  
      <Contact />
    </div>
    </>
  )
}

export default App
