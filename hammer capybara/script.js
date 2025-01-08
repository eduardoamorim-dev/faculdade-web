// Aguarda o documento estar totalmente carregado antes de executar

$(document).ready(function () {
  // Inicialização de variáveis do jogo
  let score = 0;          // Pontuação atual
  let timeLeft = 60;      // Tempo restante em segundos
  let buttonCount = 1;    // Número de botões no jogo
  let penaltyTime = 0;    // Tempo de penalidade acumulado

  const minTime = 30;     // Tempo mínimo permitido
  const $gameContainer = $("#gameContainer");  // Container principal do jogo
  const $score = $("#score");                 // Elemento que mostra a pontuação
  const $timer = $("#timer");                 // Elemento que mostra o tempo

  // Carregamento dos efeitos sonoros
  const clickTick = new Audio("/audio/blood.wav");      // Som ao clicar no carrapato
  const clickCapybara = new Audio("/audio/capybara.wav"); // Som ao clicar na capivara
  const gameOver = new Audio("/audio/gameOver.wav");      // Som de fim de jogo
  const music = new Audio("/audio/music.wav");            // Música de fundo

  // Ajuste do volume dos sons
  clickCapybara.volume = 0.2;
  music.volume = 0.3;

  // Define o cursor personalizado para todo o jogo
  $("body, .button, .hammer-button").css({
    cursor: "url(/assets/hammer.png) 16 16, pointer",
  });

  // Função para iniciar/reiniciar o jogo
  function startGame() {
    // Reseta todas as variáveis do jogo
    score = 0;
    timeLeft = 60;
    buttonCount = 1;
    penaltyTime = 0;
    
    // Atualiza a interface
    $score.text("Pontos: " + score);
    $timer.text("Tempo: " + timeLeft + "s");
    
    // Cria os botões iniciais e inicia o timer
    createButtons();
    updateTimer();
    
    // Inicia a música em loop
    music.play();
    music.loop = true;
  }

  // Função para criar os botões do jogo (carrapatos e capivaras)
  function createButtons() {
    // Remove botões existentes
    $gameContainer.find(".tick-button , .hammer-button").remove();

    // Cria os carrapatos
    for (let i = 0; i < buttonCount; i++) {
      const $tickButton = $('<div class="tick-button "></div>');
      $gameContainer.append($tickButton);
      moveButton($tickButton);

      // Configura o comportamento ao clicar no carrapato
      $tickButton.on("click", function () {
        clickTick.play();
        score++;
        $score.text("Pontos: " + score);

        // Animação do cursor ao clicar
        $("body").css("cursor", "url(/assets/hammer-click.png) 16 16, pointer");
        setTimeout(() => {
          $("body").css("cursor", "url(/assets/hammer.png) 16 16, pointer");
        }, 250);

        // Reseta o som do carrapato
        setTimeout(() => {
          clickTick.pause();
          clickTick.currentTime = 0;
        }, 250);
        
        // Animação do carrapato sendo esmagado
        $tickButton.addClass('blood').removeClass('tick-button');
        setTimeout(() => {
          $tickButton.removeClass('blood').addClass('tick-button');
          moveButton($tickButton);
        }, 500);

        // Lógica de dificuldade progressiva
        if (score >= 90 && score % 20 === 0) {
          buttonCount++;
          timeLeft = minTime - penaltyTime; // Reseta para 30s - penalidade após 90 pontos
          createButtons();
        } else if (score < 90 && score % 20 === 0) {
          buttonCount++;
          timeLeft = 60 - penaltyTime; // Reseta para 60s - penalidade antes de 90 pontos
          createButtons();
        }

        // Reduz o tempo a cada 60 pontos antes dos 90 pontos
        if (score % 60 === 0 && timeLeft > minTime && score < 90) {
          timeLeft = Math.max(minTime, timeLeft - 10);
        }
      });

      // Move o carrapato a cada 2 segundos
      setInterval(function () {
        moveButton($tickButton);
      }, 2000);
    }

    // Cria as capivaras
    for (let i = 0; i < buttonCount; i++) {
      const $capybaraButton = $('<div class="capybara-button"></div>');
      $gameContainer.append($capybaraButton);
      moveButton($capybaraButton);

      // Configura o comportamento ao clicar na capivara
      $capybaraButton.on("click", function () {
        clickCapybara.play();
        score--;              // Perde ponto
        penaltyTime += 5;     // Aumenta penalidade
        timeLeft -= 5;        // Reduz tempo
        $score.text("Pontos: " + score);
        $timer.text("Tempo: " + timeLeft + "s");

        // Animação do cursor ao clicar
        $("body").css("cursor", "url(/assets/hammer-click.png) 16 16, pointer");
        setTimeout(() => {
          $("body").css("cursor", "url(/assets/hammer.png) 16 16, pointer");
        }, 250);
        
        // Animação da capivara
        $capybaraButton.addClass('ghost-capybara').removeClass('capybara-button');
        setTimeout(() => {
          $capybaraButton.removeClass('ghost-capybara').addClass('capybara-button');
          moveButton($capybaraButton);
        }, 500);
      });

      // Move a capivara a cada 2 segundos
      setInterval(function () {
        moveButton($capybaraButton);
      }, 2000);
    }
  }

  // Função para mover um botão para uma posição aleatória dentro do container
  function moveButton($button) {
    const maxX = $gameContainer.width() - $button.width();
    const maxY = $gameContainer.height() - $button.height();
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    $button.css({ left: newX + "px", top: newY + "px" });
  }

  // Função para atualizar o timer do jogo
  function updateTimer() {
    const timerInterval = setInterval(function () {
      if (timeLeft > 0) {
        timeLeft--;
        $timer.text("Tempo: " + timeLeft + "s");
      } else {
        // Fim de jogo
        clearInterval(timerInterval);
        music.pause();
        gameOver.play();
        music.currentTime = 0;
        alert("Game Over! Pontuação final: " + score);
        startGame();  // Reinicia o jogo
      }
    }, 1000);
  }

  // Inicia o jogo quando o documento estiver pronto
  music.play();
  startGame();
});