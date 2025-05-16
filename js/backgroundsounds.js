//Bojko ak sa na toto pozeras tak citaj:

const volumeSettings = { 
  background: 0.3,         
  playlist: [0.2, 0.1, 0.6] // sound2.mp3, sound3.mp3, sound4.mp3 - nastavenie volume soundov
};



const backgroundSound = new Audio('sounds/listy.mp3'); 
backgroundSound.loop = true;
backgroundSound.volume = volumeSettings.background;
backgroundSound.play().catch(console.warn);



const playlistUrls = ['sounds/datel.mp3', 'sounds/vrany.mp3'];//tuto mozes pridavat soundy do backgroundu ake chces, davaj soundy do folderu sounds/ 
const playlist = playlistUrls.map((url, index) => {             // dobuducna odporucam editnut tie soundy aby to nekoncilo naraz ten zvuk napr ze vrana krici a o 0,5s je hned ticho
  const audio = new Audio(url);                                // to ja zrobim ale , tuto som sa presviedcal ci to ide
  audio.volume = volumeSettings.playlist[index] ?? 0.5; 
  return audio;
});

let currentTrackIndex = 0;
let isTrackPlaying = false;



function playNextTrackWithDelay() {
  if (isTrackPlaying) return;

  const currentTrack = playlist[currentTrackIndex];
  if (!currentTrack.paused && !currentTrack.ended) return;

  isTrackPlaying = true;

  const delay = Math.random() * 4000 + 1000;//delay medzi soundami mozes ho zvacsit alebo zmensit je dynamicky takze by to nemalo byt take roboticke 
  setTimeout(() => {
    currentTrack.play().then(() => {
      currentTrack.onended = () => {
        isTrackPlaying = false;
        let nextIndex;
do {
  nextIndex = Math.floor(Math.random() * playlist.length);
} while (nextIndex === currentTrackIndex && playlist.length > 1); //shuffle ako vo spotify takze ked tam das milion pesniciek tak je sanca ze ju budes pocut niekedy

currentTrackIndex = nextIndex;

      };
    }).catch(err => {
      console.error('Playback error:', err);
      isTrackPlaying = false;
    });
  }, delay);
}



window.addEventListener('keydown', (e) => { //soundy sa zapinaju podla toho ci sa pohnes a ak si sa pohol a sound hra tak sa neresetne ani neskipne na dalsi plati iba na wasd
  const key = e.key.toLowerCase();
  if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    playNextTrackWithDelay();
  }
});


