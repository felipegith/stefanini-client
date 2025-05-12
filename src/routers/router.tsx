import { Routes, Route } from 'react-router-dom';
import Signin from '@/signin';
import Signup from '@/signup';
import Home from '@/home';
import PrivateRoute from './private';

export default function Routers(){
    return(
    <Routes>
      <Route path="/home" element={<PrivateRoute>
        <Home/>
      </PrivateRoute>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    )
}