$(document).ready(function () {
  let score = 0;
  let timeLeft = 60;
  let buttonCount = 1;
  let penaltyTime = 0;
  const minTime = 30;
  const $gameContainer = $("#gameContainer");
  const $score = $("#score");
  const $timer = $("#timer");

  const clickSound = new Audio("/audio/blood.wav");

  $("body, .button").css({
    cursor: "url(/assets/hammer.png) 16 16, pointer",
  });

  function startGame() {
    score = 0;
    timeLeft = 60;
    buttonCount = 1;
    penaltyTime = 0;
    $score.text("Pontos: " + score);
    $timer.text("Tempo: " + timeLeft + "s");
    createButtons();
    updateTimer();
  }

  function createButtons() {
    $gameContainer.find(".button, .hammer-button").remove();
    for (let i = 0; i < buttonCount; i++) {
      const $button = $('<div class="button"></div>');
      $gameContainer.append($button);
      moveButton($button);
      $button.on("click", function () {
        score++;
        clickSound.play();
        $score.text("Pontos: " + score);

        setTimeout(() => {
          clickSound.pause();
          clickSound.currentTime = 0;
        }, 250);
        
        $button.addClass('blood').removeClass('button');
        setTimeout(() => {
          $button.removeClass('blood').addClass('button');
          moveButton($button);
        }, 500);

        if (score >= 90 && score % 20 === 0) {
          buttonCount++;
          timeLeft = minTime - penaltyTime; // Reseta o tempo para 30 segundos menos a penalidade a cada 20 acertos após 90 pontos
          createButtons();
        } else if (score < 90 && score % 20 === 0) {
          buttonCount++;
          timeLeft = 60 - penaltyTime; // Reseta o tempo para 60 segundos menos a penalidade a cada 20 acertos antes de 90 pontos
          createButtons();
        }

        if (score % 60 === 0 && timeLeft > minTime && score < 90) {
          timeLeft = Math.max(minTime, timeLeft - 10);
        }
      });

      setInterval(function () {
        moveButton($button);
      }, 2000);
    }

    for (let i = 0; i < buttonCount; i++) {
      const $hammerButton = $('<div class="hammer-button"></div>');
      $gameContainer.append($hammerButton);
      moveButton($hammerButton);
      $hammerButton.on("click", function () {
        score--;
        penaltyTime += 5;
        timeLeft -= 5;
        $score.text("Pontos: " + score);
        $timer.text("Tempo: " + timeLeft + "s");
        moveButton($hammerButton);
      });

      setInterval(function () {
        moveButton($hammerButton);
      }, 2000);
    }
  }

  function moveButton($button) {
    const maxX = $gameContainer.width() - $button.width();
    const maxY = $gameContainer.height() - $button.height();
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    $button.css({ left: newX + "px", top: newY + "px" });
  }

  function updateTimer() {
    const timerInterval = setInterval(function () {
      if (timeLeft > 0) {
        timeLeft--;
        $timer.text("Tempo: " + timeLeft + "s");
      } else {
        clearInterval(timerInterval);
        alert("Game Over! Pontuação final: " + score);
        startGame();
      }
    }, 1000);
  }

  startGame();
});
