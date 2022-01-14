import './App.css';

import TotalContainer from './components/totalCounter/totalContainer';
import BreakdownContainer from './components/totalBreakdown/breakdownContainer';

function App() {
  return (
    <div className="App">
        <div className="Container">

          <div className='Seperator'>
            <h1>Expense Tracker</h1>
          </div>

          <TotalContainer />
          <BreakdownContainer />

        </div>

    </div>
  );
}

export default App;
