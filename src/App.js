import './App.css';
import NewTable from './component/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <NewTable></NewTable>
    </div>
  );
}

export default App;
