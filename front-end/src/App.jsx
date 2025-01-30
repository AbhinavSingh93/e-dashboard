import { useState } from 'react';
import './App.css';
import Nav from './Component/Nav';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>Product Listing Component</h1>}/>
          <Route path="/add" element={<h2>Add Product Component</h2>}/>
          <Route path="/update" element={<h2>Update Product Component</h2>}/>
          <Route path="/logout" element={<h2>Logout Component</h2>}/>
          <Route path="/profile" element={<h2>Profile Component</h2>}/>
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
