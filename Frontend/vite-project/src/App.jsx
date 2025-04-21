import React from 'react'
import Register from './Components/Register.js/index.js'
import View from './Components/View.js/index.js'
import Update from './Components/Update.js'
import './App.css'
import Delete from './components/Delete'
const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App