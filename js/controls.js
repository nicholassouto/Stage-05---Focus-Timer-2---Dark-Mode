export function Controls(
  timer,
  buttonPlay,
  buttonPlay2,
  buttonForest,
  buttonForest2,
  buttonCafeteria,
  buttonCafeteria2,
  buttonFireplace,
  buttonRain,
  buttonRain2,
  buttonFireplace2,
  buttonDay,
  buttonNight,
  displayMinutes,
  displaySeconds,
  displayTimerSeparator,
  buttonCafeteriaNight,
  buttonCafeteriaNight2,
  buttonFireplaceNight,
  buttonFireplaceNight2,
  buttonForestNight,
  buttonForestNight2,
  buttonRainNight,
  buttonRainNight2,
  buttonMinus,
  buttonPlus,
  buttonStop,
  rainSlider,
  forestSlider,
  cafeteriaSlider,
  fireplaceSlider
) {
  let dayNight = 0;
  function Play() {
    buttonPlay.classList.add("hide");
    buttonPlay2.classList.remove("hide");
  }

  function Stop() {
    timer.Reset();
    resetPlay();
  }

  function Forest() {
    resetAll();
    buttonForest.classList.add("hide");
    buttonForest2.classList.remove("hide");
  }

  function Rain() {
    resetAll();
    buttonRain.classList.add("hide");
    buttonRain2.classList.remove("hide");
  }

  function Cafeteria() {
    resetAll();
    buttonCafeteria.classList.add("hide");
    buttonCafeteria2.classList.remove("hide");
  }

  function Fireplace() {
    resetAll();
    buttonFireplace.classList.add("hide");
    buttonFireplace2.classList.remove("hide");
  }

  function ForestNight() {
    resetAllNight();
    buttonForestNight.classList.add("hide");
    buttonForestNight2.classList.remove("hide");
  }

  function RainNight() {
    resetAllNight();
    buttonRainNight.classList.add("hide");
    buttonRainNight2.classList.remove("hide");
  }

  function CafeteriaNight() {
    resetAllNight();
    buttonCafeteriaNight.classList.add("hide");
    buttonCafeteriaNight2.classList.remove("hide");
  }

  function FireplaceNight() {
    resetAllNight();
    buttonFireplaceNight.classList.add("hide");
    buttonFireplaceNight2.classList.remove("hide");
  }

  function resetPlay() {
    buttonPlay.classList.remove("hide");
    buttonPlay2.classList.add("hide");
    if (dayNight == 0) {
      resetAll();
    } else {
      resetAllNight();
    }
  }

  function Day() {
    dayNight = 0;
    document.body.style.backgroundColor = "white";
    buttonDay.classList.remove("hide");
    buttonNight.classList.add("hide");
    displayMinutes.classList.toggle("night-timer-color");
    displaySeconds.classList.toggle("night-timer-color");
    displayTimerSeparator.classList.toggle("night-timer-color");
    buttonForestNight.classList.add("hide");
    buttonForestNight2.classList.add("hide");
    buttonRainNight.classList.add("hide");
    buttonRainNight2.classList.add("hide");
    buttonCafeteriaNight.classList.add("hide");
    buttonCafeteriaNight2.classList.add("hide");
    buttonFireplaceNight.classList.add("hide");
    buttonFireplaceNight2.classList.add("hide");
    buttonForest.classList.remove("hide");
    buttonRain.classList.remove("hide");
    buttonCafeteria.classList.remove("hide");
    buttonFireplace.classList.remove("hide");
    buttonPlay.classList.remove("night-time-controler");
    buttonPlay2.classList.remove("night-time-controler");
    buttonStop.classList.remove("night-time-controler");
    buttonPlus.classList.remove("night-time-controler");
    buttonMinus.classList.remove("night-time-controler");
    rainSlider.classList.toggle("night-slider");
    forestSlider.classList.toggle("night-slider");
    cafeteriaSlider.classList.toggle("night-slider");
    fireplaceSlider.classList.toggle("night-slider");
  }

  function Night() {
    dayNight = 1;
    document.body.style.backgroundColor = "#121214";
    buttonDay.classList.add("hide");
    buttonNight.classList.remove("hide");
    displayMinutes.classList.toggle("night-timer-color");
    displaySeconds.classList.toggle("night-timer-color");
    displayTimerSeparator.classList.toggle("night-timer-color");
    buttonForest.classList.add("hide");
    buttonForest2.classList.add("hide");
    buttonRain.classList.add("hide");
    buttonRain2.classList.add("hide");
    buttonCafeteria.classList.add("hide");
    buttonCafeteria2.classList.add("hide");
    buttonFireplace.classList.add("hide");
    buttonFireplace2.classList.add("hide");
    buttonForestNight.classList.remove("hide");
    buttonRainNight.classList.remove("hide");
    buttonCafeteriaNight.classList.remove("hide");
    buttonFireplaceNight.classList.remove("hide");
    buttonPlay.classList.add("night-time-controler");
    buttonPlay2.classList.add("night-time-controler");
    buttonStop.classList.add("night-time-controler");
    buttonPlus.classList.add("night-time-controler");
    buttonMinus.classList.add("night-time-controler");
    rainSlider.classList.toggle("night-slider");
    forestSlider.classList.toggle("night-slider");
    cafeteriaSlider.classList.toggle("night-slider");
    fireplaceSlider.classList.toggle("night-slider");
  }

  function resetAll() {
    buttonForest.classList.remove("hide");
    buttonForest2.classList.add("hide");
    buttonRain.classList.remove("hide");
    buttonRain2.classList.add("hide");
    buttonCafeteria.classList.remove("hide");
    buttonCafeteria2.classList.add("hide");
    buttonFireplace.classList.remove("hide");
    buttonFireplace2.classList.add("hide");
  }

  function resetAllNight() {
    buttonForestNight.classList.remove("hide");
    buttonForestNight2.classList.add("hide");
    buttonRainNight.classList.remove("hide");
    buttonRainNight2.classList.add("hide");
    buttonCafeteriaNight.classList.remove("hide");
    buttonCafeteriaNight2.classList.add("hide");
    buttonFireplaceNight.classList.remove("hide");
    buttonFireplaceNight2.classList.add("hide");
  }

  return {
    Play,
    Stop,
    resetAll,
    Forest,
    Rain,
    Fireplace,
    Cafeteria,
    Day,
    Night,
    resetAllNight,
    ForestNight,
    RainNight,
    CafeteriaNight,
    FireplaceNight,
  };
}
