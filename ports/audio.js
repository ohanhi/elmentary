var solarsystem = Elm.worker(Elm.Main, {});
solarsystem.ports.audio.subscribe(audio);

var saw = new Wad({source : 'sawtooth'});
var bass = new Wad({
		    source : 'sine',
		    env : {
		        attack : 0.02,
		        decay : 0.1,
		        sustain : 0.9,
		        hold : 0.4,
		        release : 0.1
		    },
		    filter : {
		        type : 'bandpass',
		        frequency : 100,
		        q : 0.180
		    }
		});

function audio(freq) {
  console.log('audio.js: ' + freq);
  if (freq > 20 && freq < 20000){
    bass.play({pitch: freq});
  } else {
    console.log('Frequency is outside human hearing: ' + freq);
  }
}
