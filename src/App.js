import './App.css';
import Credictcard from './Credictcard';
import Welcome from './Welcome';
import Todos from './Todos';
import Counter from './Counter'
import Randompg from './Randompg';
import Greetinggenerator from './Greetinggenerator';
import Stamp from './Stamp'
import Poster from './Poster';




function App() {
  return (
    <div>
    <Poster>
      <img src={require('./map.jpg')} />
    </Poster>
    </div>
  );
}

export default App;
