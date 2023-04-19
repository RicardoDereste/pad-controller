function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('element not found or invalid selector');
    }

}

const keylist = document.querySelectorAll('.key');

for (let counter = 0; counter < keylist.length; counter++) {

    const key = keylist[counter];
    const instrument = key.classList[1];
    const idAudio = `#sound-${instrument}`;

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('activated');
        }

    }

    key.onkeyup = function () {
        key.classList.remove('activated');
    }

}
