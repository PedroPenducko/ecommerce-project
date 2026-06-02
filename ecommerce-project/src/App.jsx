import { HomePage } from './pages/HomePage'
import {Routes, Route} from 'react-router'
import './App.css'

function App() {


  return (
<>
<Routes>
  <Route index element={<HomePage />} />
    <Route path="checkout" element={<p>test</p>} />
</Routes>

</>
  )
}

export default App
