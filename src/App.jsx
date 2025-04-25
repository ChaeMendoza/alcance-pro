import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import HomePage from './pages/home'
import Page404 from './pages/404'

function App() {

  return (
    <Routes>
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/register' element={<RegisterPage />} />
      <Route exact path='/dashboard' element={<HomePage />} />
      <Route exact path='/404' element={<Page404 />} />
    </Routes>
  )
}

export default App
