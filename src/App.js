import './App.css';
import * as Tone from 'tone';


const playC4 = () => {
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");
}

const App = () => {
  return (
    <div>
      <button onclick={playC4}>Play C4</button>
    </div>
  );
}

export default App;
