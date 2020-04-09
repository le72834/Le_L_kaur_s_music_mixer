
// Read the analysis of music mixer in assets folder if you concern anything

(() => {
  //set up the tracks or the characters
  let seasonButtons = document.querySelectorAll('.songBut'),
      screenLayout = document.querySelector('#screen'),
      audioElement = document.querySelectorAll('audio'),
      song         = document.querySelector(".songs")
      dropZones   = document.querySelectorAll('.dropZone'),
      imagesAnimal = document.querySelectorAll('.image'),
      pauseButton = document.querySelector('#pauseBut'),
      resetButton = document.querySelector('#resetBut'),
      animalBoard = document.querySelector('.animals');


function allowDrag(event) {
    console.log('started dragging an image');
    event.dataTransfer.setData("text/plain", this.id);
  }

  function allowDragOver(event) {
      event.preventDefault();
      console.log('dragged over a drop zone');
    }

  function allowDrop(event) {
    if (this.children.length > 0) {
      return false;}
    //event.preventDefault();
    console.log('dropped on a drop zone');
    // go and get the dragged element's ID from the data transfer
    let currentImage = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.querySelector(`#${currentImage}`));
    //debugger;
    let track = document.querySelector(`audio[data-audioref="${currentImage}"]`);
    //audioElement.forEach(sound => {sound.currentTime = 0;});
    track.load();
    track.play();
    track.currentTime = 0;
}

  function pause() {
    console.log("Pause the song")
      if (audioElement.paused == true) {
    //if (sound1.paused && sound2.paused && sound3.paused && sound4.paused && sound5.paused && song.paused){
      //debugger;
      audioElement.forEach(sound => {sound.play();});
      //audioElement.play();

    }
    else {
      audioElement.forEach(sound => {sound.pause();});

  }
}
function reset() {
    screenLayout.style.backgroundImage = 'none';
    animalBoard.appendChild(imagesAnimal[0]);
    animalBoard.appendChild(imagesAnimal[1]);
    animalBoard.appendChild(imagesAnimal[2]);
    animalBoard.appendChild(imagesAnimal[3]);
    animalBoard.appendChild(imagesAnimal[4]);
    //debugger;
    //the ! is a check for inequality (it means the condition is false)
   //also called a bang operator
   //if there is no matching audio element , then kill the function and do nothing
   let audioSong = this.dataset.trackref;
   audioElement.src = `audio/${audioSong}.mp3`;
   audioElement.forEach(sound => {sound.pause();});
    if(!audioElement) {
      audioElement.pause();
      //audioElement.forEach (sound => {sound.pause();});
      audioElement.currentTime = 0;
      //song.forEach(sound => {sound.currentTime = 0;});
    }
}
function changeBg() {
  //debugger;
  if (this.id == 'songBtn1') {
    screenLayout.style.backgroundImage = 'url(images/winter_background.png)';
  }
  else if (this.id == 'songBtn2') {
    screenLayout.style.backgroundImage = 'url(images/summer_background.svg)';
  }
  else if (this.id == 'songBtn3') {
    screenLayout.style.backgroundImage = 'url(images/spring_background.svg)';
  }
  else if (this.id == 'songBtn4') {
    screenLayout.style.backgroundImage = 'url(images/background2.jpg)';
  }
  else if (this.id == 'songBtn5') {
    screenLayout.style.backgroundImage = 'url(images/desert_2.jpg)';
  }
  else if (this.id == 'songBtn6') {
    screenLayout.style.backgroundImage = 'url(images/mountain_background.png)';
  }
  else if (this.id == 'songBtn7') {
    screenLayout.style.backgroundImage = 'url(images/land.jpg)';
  }
  else {
    screenLayout.style.backgroundImage = 'url(images/autumn_background.svg)';
  }
}

function changeSong () {
  var audioSong = this.dataset.trackref;
  //set the audio source
  song.src = `audio/${audioSong}.mp3`;
  song.load();
  song.play();
}

  imagesAnimal.forEach(image => image.addEventListener('dragstart', allowDrag));
  dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
  });
  seasonButtons.forEach(button => {
   button.addEventListener('click', changeBg);
   button.addEventListener('click', changeSong);
 });

  pauseButton.addEventListener('click', pause);
  resetButton.addEventListener('click', reset);

})();
