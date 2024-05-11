import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components'
import { lightTheme } from './utils/Themes'
import './App.css'
import Authentication from './pages/Authentication'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import { useSelector } from 'react-redux';
import Tutorials from './pages/Tutorials';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
const {currentUser} = useSelector((state)=>state.user)

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Router>
          {currentUser ? (<Container>
            <Navbar currentUser={currentUser}/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workout" element={<Workouts />} />
              <Route path="/tutorials" element={<Tutorials />} />
              
            </Routes>
          </Container>
            ):(<Container>
              <Authentication />
            
          </Container>
          )}
        </Router>
      </ThemeProvider>

    </>
  )
}

export default App
