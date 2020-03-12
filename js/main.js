(() => {
  //set up the tracks or the characters
  let buttonSeasons = document.querySelectorAll('.songBut'),
      screenLayout = document.querySelector('#screen'),
      audioElement = document.querySelectorAll('.audio'),
      song         = document.querySelector(".songs")
      dropZones = document.querySelectorAll('.dropZone'),
      imagesAnimal = document.querySelectorAll('.image'),


      button1 = document.querySelector('#button1'),
      button2 = document.querySelector('#button2'),
      button3 = document.querySelector('#button3'),
      button4 = document.querySelector('#button4'),
      button5 = document.querySelector('#button5'),
      button6 = document.querySelector('#button6'),
      button7 = document.querySelector('#button7'),
      button8 = document.querySelector('#button8'),
      dropped = [],
      activeSong = [];

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
  let audioSong = this.dataset.trackref;
  //set the audio source
  song.src = `audio/${audioSong}.mp3`;
  song.load();
  audioElement.forEach(sound =>{sound.currentTime=0;});
  //activeSong.push(song);
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

    //let droppedImage = document.querySelector(`#${currentImage}`);
    //dropped.push(droppedImage);

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

})();
