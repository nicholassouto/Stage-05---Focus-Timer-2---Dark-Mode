import {
  buttonCafeteria,
  buttonCafeteriaNight,
  buttonDay,
  buttonFireplace,
  buttonFireplaceNight,
  buttonForest,
  buttonForestNight,
  buttonMinus,
  buttonNight,
  buttonPlay,
  buttonPlus,
  buttonRain,
  buttonRainNight,
  buttonStop,
  forestSlider,
  rainSlider,
  cafeteriaSlider,
  fireplaceSlider,
} from "./elements.js";

export function Events(timer, controls, sound) {
  let selectedMusicSound = 0;
  buttonPlay.addEventListener("click", function () {
    controls.Play();
    timer.Countdown();
  });

  buttonStop.addEventListener("click", function () {
    controls.Stop();
    sound.stopSound();
    selectedMusicSound = 0;
  });

  buttonPlus.addEventListener("click", function () {
    timer.Plus();
  });

  buttonMinus.addEventListener("click", function () {
    timer.Minus();
  });

  buttonForest.addEventListener("click", function () {
    controls.Forest();
    sound.soundForest();
    sound.soundVolume(forestSlider, sound.forestSound);
    selectedMusicSound = 1;
  });

  forestSlider.addEventListener("input", function () {
    sound.soundVolume(forestSlider, sound.forestSound);
  });

  buttonRain.addEventListener("click", function () {
    controls.Rain();
    sound.soundRain();
    sound.soundVolume(rainSlider, sound.rainSound);
    selectedMusicSound = 2;
  });

  rainSlider.addEventListener("input", function () {
    sound.soundVolume(rainSlider, sound.rainSound);
  });

  buttonCafeteria.addEventListener("click", function () {
    controls.Cafeteria();
    sound.soundCafeteria();
    sound.soundVolume(cafeteriaSlider, sound.cafeteriaSound);
    selectedMusicSound = 3;
  });

  cafeteriaSlider.addEventListener("input", function () {
    sound.soundVolume(cafeteriaSlider, sound.cafeteriaSound);
  });

  buttonFireplace.addEventListener("click", function () {
    controls.Fireplace();
    sound.soundFireplace();
    sound.soundVolume(fireplaceSlider, sound.fireplaceSound);
    selectedMusicSound = 4;
  });

  fireplaceSlider.addEventListener("input", function () {
    sound.soundVolume(fireplaceSlider, sound.fireplaceSound);
  });

  buttonForestNight.addEventListener("click", function () {
    controls.ForestNight();
    sound.soundForest();
    sound.soundVolume(forestSlider, sound.forestSound);
    selectedMusicSound = 1;
  });

  buttonRainNight.addEventListener("click", function () {
    controls.RainNight();
    sound.soundRain();
    sound.soundVolume(rainSlider, sound.rainSound);
    selectedMusicSound = 2;
  });

  buttonCafeteriaNight.addEventListener("click", function () {
    controls.CafeteriaNight();
    sound.soundCafeteria();
    sound.soundVolume(cafeteriaSlider, sound.cafeteriaSound);
    selectedMusicSound = 3;
  });

  buttonFireplaceNight.addEventListener("click", function () {
    controls.FireplaceNight();
    sound.soundFireplace();
    sound.soundVolume(fireplaceSlider, sound.fireplaceSound);
    selectedMusicSound = 4;
  });

  buttonDay.addEventListener("click", function () {
    switch (selectedMusicSound) {
      case 1:
        controls.Night();
        controls.ForestNight();
        break;
      case 2:
        controls.Night();
        controls.RainNight();
        break;
      case 3:
        controls.Night();
        controls.CafeteriaNight();
        break;
      case 4:
        controls.Night();
        controls.FireplaceNight();
        break;
      default:
        controls.Night();
        break;
    }
  });

  buttonNight.addEventListener("click", function () {
    switch (selectedMusicSound) {
      case 1:
        controls.Day();
        controls.Forest();
        break;
      case 2:
        controls.Day();
        controls.Rain();
        break;
      case 3:
        controls.Day();
        controls.Cafeteria();
        break;
      case 4:
        controls.Day();
        controls.Fireplace();
        break;
      default:
        controls.Day();
        break;
    }
  });
}
