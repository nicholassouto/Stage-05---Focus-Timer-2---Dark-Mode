export function Sound() {
  const forestSound = new Audio("./assets/Floresta.wav");
  const rainSound = new Audio("./assets/Chuva.wav");
  const cafeteriaSound = new Audio("./assets/Cafeteria.wav");
  const fireplaceSound = new Audio("./assets/Lareira.wav");

  function soundForest() {
    stopSound();
    forestSound.loop = true;
    forestSound.play();
  }

  function soundRain() {
    stopSound();
    rainSound.loop = true;
    rainSound.play();
  }

  function soundCafeteria() {
    stopSound();
    cafeteriaSound.loop = true;
    cafeteriaSound.play();
  }

  function soundFireplace() {
    stopSound();
    fireplaceSound.loop = true;
    fireplaceSound.play();
  }

  function soundVolume(slider, sound) {
    sound.volume = slider.value / 100;
  }

  function stopSound() {
    forestSound.pause();
    rainSound.pause();
    fireplaceSound.pause();
    cafeteriaSound.pause();
  }

  return {
    soundForest,
    soundRain,
    soundCafeteria,
    soundFireplace,
    stopSound,
    soundVolume,
    rainSound,
    forestSound,
    cafeteriaSound,
    fireplaceSound,
  };
}
