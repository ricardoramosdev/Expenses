import logo from './logo.svg';
import './App.css';
import { Chart } from './components/Chart/Chart';
import { Balance } from './components/Balance/Balance';

function App() {
  return (
    <div className="App">
     <Balance/>
     <Chart/>
    </div>
  );
}

export default App;
