import * as Tone from 'tone';

export const playC4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
}

export const playDb4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Db4", "8n");
}

export const playD4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");
}

export const playEb4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Eb4", "8n");
}

export const playE4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
}

export const playF4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", "8n");
}

export const playGb4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Gb4", "8n");
}

export const playG4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4", "8n");
}

export const playAb4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Ab4", "8n");
}

export const playA4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", "8n");
}

export const playBb4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Bb4", "8n");
}

export const playB4 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4", "8n");
}

export const playC5 = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C5", "8n");
}

export function playNote(event) {
    if (event.keyCode === 65) {
      playC4();
    }
    if (event.keyCode === 87) {
      playDb4();
    }
    if (event.keyCode === 83) {
      playD4();
    }
    if (event.keyCode === 69) {
      playEb4();
    }
    if (event.keyCode === 68) {
      playE4();
    }
    if (event.keyCode === 70) {
      playF4();
    }
    if (event.keyCode === 84) {
      playGb4();
    }
    if (event.keyCode === 71) {
      playG4();
    }
    if (event.keyCode === 89) {
      playAb4();
    }
    if (event.keyCode === 72) {
      playA4();
    }
    if (event.keyCode === 85) {
      playBb4();
    }
    if (event.keyCode === 74) {
      playB4();
    }
    if (event.keyCode === 75) {
      playC5();
    }
  }