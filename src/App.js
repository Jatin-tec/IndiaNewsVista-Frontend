import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Import Route and Routes
import NavBar from './Components/Navbar/NavBar.jsx'
import Category from './Pages/Category/Category.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import SinglePage from './Pages/SingleNews/SingleNews.jsx'
import News from './Pages/News/News.jsx'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/:id' element={<SinglePage />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleNews' element={<SinglePage />} />
      </Routes>
    </Router>
  )
}

export default App
