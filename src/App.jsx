import { useState } from 'react'
import './App.css'
import AllContexts from './AllContexts';
import Pages from './Pages';

function App() {

  return (
    <>
      <AllContexts>
        <Pages></Pages>
      </AllContexts>
    </>
  )
}

export default App
