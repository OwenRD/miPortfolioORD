import { useState } from 'react';
import './App.css';
import './css/style-sidebar.css';
import './css/style-body.css';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
