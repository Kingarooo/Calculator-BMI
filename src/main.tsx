import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App.tsx';
import Calculator from './components/Calculator';
// import BMI from './components/BMI/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
                <Routes>
                    <Route
                        
                        path="/"
                        element={<App />}
                    />
                    <Route
                        
                        path="/calculator"
                        element={<Calculator />}
                    />
                </Routes>
            </BrowserRouter>
  </StrictMode>,
)