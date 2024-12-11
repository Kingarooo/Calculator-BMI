import './App.css'
import { useNavigate } from "react-router-dom"
function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="calculators">
        <button className="normal-calculator-button button" onClick={() => navigate('/calculator') }>Calculator</button>
        <button className="bmi-calculator-button button" onClick={() => navigate('/BMI')}>BMI Calculator</button>
      </div>
    </div>
  )
}

export default App
