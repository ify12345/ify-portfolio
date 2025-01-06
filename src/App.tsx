import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/Home'
import ProjectDetails from './components/ProjectDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
    </Routes>
  </Router>
)

export default App;
