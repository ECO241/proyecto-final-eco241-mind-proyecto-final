import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {
  Calm,
  Focus,
  Sleep,
  Relax,
  Home,
  Login,
  Mind,
  PreferencesRegister,
  ProfileRegister,
  Register,
  UserRegister,
  MethodPage
  
} from '../pages'

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mind />} />
        <Route path='/register' element={<Register />} />
        <Route path='/UserRegister' element={<UserRegister />} />
        <Route path='/ProfileRegister' element={<ProfileRegister />} />
        <Route path='/PreferencesRegister' element={<PreferencesRegister />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Calm' element={<Calm />} />
        <Route path='/Focus' element={<Focus/>} />
        <Route path='/Sleep' element={<Sleep/>} />
        <Route path='/Relax' element={<Relax/>} />
        <Route path='/MethodPage' element={<MethodPage/>} />
        <Route path='/*' element={<p>404</p>} />
      </Routes>
    </Router>
  )
}
