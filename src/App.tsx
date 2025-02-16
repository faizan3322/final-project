import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Detection from './pages/Detection';
import { AuthProvider } from './context/AuthContext';
import DocDetails from './pages/DocDetails';
import UploadImg from './pages/UploadImg';
import Cancertypes from './pages/Cancertypes';
import Register from './pages/Register';
import Verify from './pages/Verify';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#F8F5E9]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/doctors-detail/:id" element={<DocDetails/>}/>
            <Route path="/upload-image" element={<UploadImg/>}/>
            <Route path="/cancer-types" element={<Cancertypes/>}/>
            <Route path="/verify" element={<Verify/>}/>
            
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;