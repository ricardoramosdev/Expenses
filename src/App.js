import logo from './logo.svg';
import './App.css';
import { Chart } from './components/Chart/Chart';
import { Balance } from './components/Balance/Balance';

function App() {
  return (
    <main>
      <div className="App">
      <Balance/>
      <Chart/>
      </div>
    </main>
  );
}

export default App;
