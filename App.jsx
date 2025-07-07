import { useState } from 'react'
import Weather from './components/weather'
import Navbar from './components/navbar'
function App() {
  const [city, setCity] = useState();

  return (
    <>
    <div className='fpage'> 
    <Navbar/>
    <Weather/>
    </div>
    </>
  )
}

export default App
