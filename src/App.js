import './App.css';
import { 
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5      
} from './tone.fn'

const App = () => {
  return (
    <div>
      <button onClick={playC4}>Play C4</button>
    </div>
  );
}

export default App;
