import './App.css';

import TotalContainer from './components/totalCounter/totalContainer';
import BreakdownContainer from './components/totalBreakdown/breakdownContainer';
import AddNewForm from './components/forms/addnew';

function App() {
  return (
    <div className="App">
        <div className="Container">

          <div className='Seperator'>
            <h1>Expense Tracker</h1>
          </div>

          <TotalContainer />
          <BreakdownContainer />

          <AddNewForm />

        </div>

    </div>
  );
}

export default App;
