import { Routes, Route } from 'react-router-dom'

import NewPost from './components/NewPost/NewPost'
import HomePage from './components/HomePage/HomePage'
import EditPost from './components/EditPost/EditPost'

import './App.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/new" element={<NewPost />} />
      <Route path="/posts/:postId" element={<EditPost />} />
    </Routes>
  )
}

export default App
