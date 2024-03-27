import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import SignupPage from './Components/SignupPage/SignupPage'
import LoginPage from './Components/LoginPage/LoginPage'
import HomeIndex from './Pages/Home/Homeindex'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element= {<HomeIndex/>} />
      <Route path="signupPage" element={<SignupPage/>} />
      <Route path="loginPage" element={<LoginPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

