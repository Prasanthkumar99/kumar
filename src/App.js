import './App.css';
import Welcome from './Welcome';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome name = "Prasanth"  year = "2021"/>
        <Welcome name = "My"  year = "Web page"/>
        <Welcome name = "Reactjs"  /> */}
        <Todos/>
      </header>
    </div>
  );
}

export default App;
