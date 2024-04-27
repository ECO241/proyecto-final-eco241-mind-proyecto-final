import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Mind, Register,UserRegister } from '../pages';


export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mind />} />
        <Route path='/register' element={<Register />} />
        <Route path='/UserRegister' element={<UserRegister />} />
        <Route path='/*' element={<p>404</p>} />
      </Routes>
    </Router>
  );
}