import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <div className="view">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
