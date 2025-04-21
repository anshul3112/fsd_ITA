import React from 'react'
import Register from './Components/Register.jsx'
import View from './Components/View.jsx'
import Update from './Components/Update.jsx'
import './App.css'
import Delete from './Components/Delete.jsx'
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