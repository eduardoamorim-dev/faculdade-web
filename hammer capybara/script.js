// script.js
$(document).ready(function () {
  let score = 0;
  let timeLeft = 60;
  let buttonCount = 1;
  const minTime = 30;
  const $gameContainer = $("#gameContainer");
  const $score = $("#score");
  const $timer = $("#timer");

  const clickSound = new Audio("/audio/click-hammer.wav");

  $(document).ready(function () {
    $("body").css({
      cursor: "url(/assets/martelo.png) 16 16, pointer", 
    });
  });

  function createButtons() {
    $gameContainer.find(".button").remove();
    for (let i = 0; i < buttonCount; i++) {
      const $button = $('<div class="button"></div>');
      $gameContainer.append($button);
      moveButton($button);
      $button.on("click", function () {
        score++;
        clickSound.play();
        $score.text("Pontos: " + score);
        moveButton($button);

        if (score >= 90 && score % 20 === 0) {
          buttonCount++;
          timeLeft = minTime; // Reseta o tempo para 30 segundos a cada 20 acertos após 90 pontos
          createButtons();
        } else if (score < 90 && score % 30 === 0) {
          buttonCount++;
          timeLeft = 60; // Reseta o tempo para 60 segundos a cada 30 acertos antes de 90 pontos
          createButtons();
        }

        if (score % 60 === 0 && timeLeft > minTime && score < 90) {
          timeLeft = Math.max(minTime, timeLeft - 10);
        }
      });
    }
  }

  function moveButton($button) {
    const containerWidth = $gameContainer.width();
    const containerHeight = $gameContainer.height();
    const buttonWidth = $button.width();
    const buttonHeight = $button.height();

    const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
    const randomY = Math.floor(
      Math.random() * (containerHeight - buttonHeight)
    );

    $button.css({
      left: randomX + "px",
      top: randomY + "px",
    });
  }

  function startTimer() {
    const timerInterval = setInterval(function () {
      timeLeft--;
      $timer.text("Tempo: " + timeLeft + "s");
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Fim de jogo! Sua pontuação: " + score);
        location.reload();
      }
    }, 1000);
  }

  createButtons();
  startTimer();
});
