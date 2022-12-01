import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'
import { CountProvider } from './context/context'
import Favorites from './pages/Favorites'


import { Provider } from 'react-redux'
import store from '../store'

function App() {

  return (
    <Provider store={store}>
      <CountProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </CountProvider>
    </Provider>

  )
}

export default App
