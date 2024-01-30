import { useState,useEffect } from 'react'
import './App.css'
import Card from './Components/Card'
import Button from './Components/Button'
import { ThemeProvider } from './Context/useContext'

function App() {

  const [themeMode, setThemMode] = useState("light")

  const dark = () => {
    setThemMode("dark")
  }

  const light = () => {
    setThemMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  
  return (
    <ThemeProvider value={{ dark, light, themeMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className='w-full max-w-sm mx-auto mb-2'>
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
