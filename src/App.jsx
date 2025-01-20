import './App.css'
import UserListPage from './pages/UserListPage'
import FamilyListPage from './pages/FamilyListPage';
import Menu from './pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <div className='content'>
          <Routes>
              <Route path="/" index element={<UserListPage/>} />
              <Route path="/user" element={<UserListPage/>} />
              <Route path="/family" element={<FamilyListPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App