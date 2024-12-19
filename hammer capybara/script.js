$(document).ready(function () {
  let score = 0;
  let timeLeft = 60;
  let buttonCount = 1;
  let penaltyTime = 0;
  const minTime = 30;
  const $gameContainer = $("#gameContainer");
  const $score = $("#score");
  const $timer = $("#timer");

  const clickTick = new Audio("/audio/blood.wav");
  const clickCapybara = new Audio("/audio/capybara.wav");
  const gameOver = new Audio("/audio/gameOver.wav");
  const music = new Audio("/audio/music.wav");

  clickCapybara.volume = 0.2;
  music.volume = 0.3;

  $("body, .button, .hammer-button").css({
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
    music.play();
    music.loop = true;
  }

  function createButtons() {

    $gameContainer.find(".tick-button , .hammer-button").remove();

    for (let i = 0; i < buttonCount; i++) {
      const $tickButton = $('<div class="tick-button "></div>');

      $gameContainer.append($tickButton);
      moveButton($tickButton);

      $tickButton.on("click", function () {
        clickTick.play();
        score++;
        $score.text("Pontos: " + score);

        $("body").css("cursor", "url(/assets/hammer-click.png) 16 16, pointer");
        setTimeout(() => {
          $("body").css("cursor", "url(/assets/hammer.png) 16 16, pointer");
        }, 250);

        setTimeout(() => {
          clickTick.pause();
          clickTick.currentTime = 0;
        }, 250);
        
        $tickButton.addClass('blood').removeClass('tick-button');
        setTimeout(() => {
          $tickButton.removeClass('blood').addClass('tick-button');
          moveButton($tickButton);
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
        moveButton($tickButton);
      }, 2000);
    }



    for (let i = 0; i < buttonCount; i++) {
      const $capybaraButton = $('<div class="capybara-button"></div>');
      $gameContainer.append($capybaraButton);
      moveButton($capybaraButton);
      $capybaraButton.on("click", function () {
        clickCapybara.play();
        score--;
        penaltyTime += 5;
        timeLeft -= 5;
        $score.text("Pontos: " + score);
        $timer.text("Tempo: " + timeLeft + "s");

        // Muda o cursor para hammer-click.png
        $("body").css("cursor", "url(/assets/hammer-click.png) 16 16, pointer");
        setTimeout(() => {
          $("body").css("cursor", "url(/assets/hammer.png) 16 16, pointer");
        }, 250);
        
        
        $capybaraButton.addClass('ghost-capybara').removeClass('capybara-button');
        setTimeout(() => {
          $capybaraButton.removeClass('ghost-capybara').addClass('capybara-button');
          moveButton($capybaraButton);
        }, 500);
      });

      setInterval(function () {
        moveButton($capybaraButton);
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
        music.pause();
        gameOver.play();
        music.currentTime = 0;
        alert("Game Over! Pontuação final: " + score);
        startGame();
      }
    }, 1000);
  }

  startGame();
});
