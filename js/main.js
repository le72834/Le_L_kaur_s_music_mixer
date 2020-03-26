(() => {
  //set up the tracks or the characters
  let buttonSeasons = document.querySelectorAll('.songBut'),
      screenLayout = document.querySelector('#screen'),
      audioElement = document.querySelectorAll('.audio'),
      song         = document.querySelector(".songs")
      dropZones = document.querySelectorAll('.dropZone'),
      imagesAnimal = document.querySelectorAll('.image'),
      pauseButton = document.querySelector('#pauseBut'),
      resetButton = document.querySelector('#resetBut'),
      animalCon = document.querySelector('#animals'),


      button1 = document.querySelector('#button1'),
      button2 = document.querySelector('#button2'),
      button3 = document.querySelector('#button3'),
      button4 = document.querySelector('#button4'),
      button5 = document.querySelector('#button5'),
      button6 = document.querySelector('#button6'),
      button7 = document.querySelector('#button7'),
      button8 = document.querySelector('#button8'),
      sound1 = document.querySelector('#sound1'),
      sound2 = document.querySelector('#sound2'),
      sound3 = document.querySelector('#sound3'),
      sound4 = document.querySelector('#sound4'),
      sound5 = document.querySelector('#sound5'),
      animalSong = [];

function changeBg() {
  //debugger;
  if (this.id == 'button1') {
    screenLayout.style.backgroundImage = 'url(images/winter_background.png)';

  }
  else if (this.id == 'button2') {
    screenLayout.style.backgroundImage = 'url(images/summer_background.svg)';
  }
  else if (this.id == 'button3') {
    screenLayout.style.backgroundImage = 'url(images/spring_background.svg)';
  }
  else if (this.id == 'button4') {
    screenLayout.style.backgroundImage = 'url(images/background2.png)';
  }
  else if (this.id == 'button5') {
    screenLayout.style.backgroundImage = 'url(images/desert_2.jpg)';
  }
  else if (this.id == 'button6') {
    screenLayout.style.backgroundImage = 'url(images/mountain_background.png)';
  }
  else if (this.id == 'button7') {
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

  function allowDrag(event) {
    console.log('started dragging an image');

    event.dataTransfer.setData("text/plain", this.id);

  }

  function allowDragOver(event) {
    if (this.firstChild == null) {
      event.preventDefault();
      console.log('dragged over a drop zone');
    }
  }

  function allowDrop(event) {
    //event.preventDefault();
    console.log('dropped on a drop zone');
    // go and get the dragged element's ID from the data transfer
    let currentImage = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.querySelector(`#${currentImage}`));

    let track = document.querySelector(`audio[data-audioref="${currentImage}"]`);
    //animalSong.forEach(sound => {sound.currentTime = 0;});
    track.load();
    track.play();

  }
  function pause() {
    let audioSong = this.dataset.trackref;
    //set the audio source
    song.src = `audio/${audioSong}.mp3`;
    
    if (sound1.paused && sound2.paused && sound3.paused && sound4.paused && sound5.paused && song.paused){

      audioElement.forEach(sound => {sound.play();});

      if(!audioElement[0] == ''){

          audioElement[0].play();
        }

    }
    else {

      audioElement.forEach(sound => {sound.pause();});
      if(!audioElement[0] == ''){
          audioElement[0].pause();
        }

      }
  }

  function reset() {
    screenLayout.style.backgroundImage = 'none';
    animalCon.appendChild(imagesAnimal[0]);
    animalCon.appendChild(imagesAnimal[1]);
    animalCon.appendChild(imagesAnimal[2]);
    animalCon.appendChild(imagesAnimal[3]);
    animalCon.appendChild(imagesAnimal[4]);
    audioElement.forEach(sound => {sound.pause();});
    //the ! is a check for inequality (it means the condition is false)
   //also called a bang operator
   //if there is no matching audio element , then kill the function and do nothing
   let audioSong = this.dataset.trackref;
   song.src = `audio/${audioSong}.mp3`;

    if(!audioElement) {
      audioElement.pause();
      song.forEach (sound => {sound.pause();});
      audioElement.currentTime = 0;
      song.forEach(sound => {sound.currentTime = 0;});
    }
}



  buttonSeasons.forEach(button => {
    button.addEventListener('click', changeBg);
    button.addEventListener('click', changeSong);
  });

  imagesAnimal.forEach(image => image.addEventListener('dragstart', allowDrag));

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
  });
  pauseBut.addEventListener('click', pause);
  resetButton.addEventListener('click', reset);

})();
