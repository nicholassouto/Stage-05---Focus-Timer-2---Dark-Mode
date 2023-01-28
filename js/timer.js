import { buttonPlay, buttonPlay2 } from "./elements.js";

export function Timer(displayMinutes, displaySeconds) {
  let timerTimeOut;
  let minutes = displayMinutes.textContent;
  let seconds = displaySeconds.textContent;

  function updateDisplay(minutes, seconds) {
    displayMinutes.textContent = String(Number(minutes)).padStart(2, "0");
    displaySeconds.textContent = String(Number(seconds)).padStart(2, "0");
  }

  function Countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = displayMinutes.textContent;
      let seconds = displaySeconds.textContent;
      if (minutes <= 0 && seconds <= 0) {
        Reset();
        buttonPlay.classList.remove("hide");
        buttonPlay2.classList.add("hide");
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        minutes--;
      }
      updateDisplay(minutes, String(seconds - 1).padStart(2, "0"));
      Countdown();
    }, 1000);
  }

  function Reset() {
    clearTimeout(timerTimeOut);
    updateDisplay(minutes, seconds);
  }

  function Plus() {
    let minutes = displayMinutes.textContent;
    let seconds = displaySeconds.textContent;
    updateDisplay(String(Number(minutes) + 5).padStart(2, "0"), seconds);
  }

  function Minus() {
    let minutes = displayMinutes.textContent;
    let seconds = displaySeconds.textContent;
    if (minutes <= 4) {
      updateDisplay(0, 0);
    } else {
      updateDisplay(String(Number(minutes) - 5).padStart(2, "0"), seconds);
    }
  }

  return {
    Countdown,
    updateDisplay,
    Reset,
    Plus,
    Minus,
  };
}
