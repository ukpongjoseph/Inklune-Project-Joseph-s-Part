
import './App.css'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Landing from './pages/Landing'
import ErrorPage from './pages/ErrorPage'
import Following from './pages/Following'
import { ContextProvider } from './component/Context'

function App() {


  return (
    <>
      <Router>
       <ContextProvider>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/Landing' element={<Landing/>}/>
          <Route path='/Following' element={<Following/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
       </ContextProvider>
      </Router>
    </>
  )
}

export default App
