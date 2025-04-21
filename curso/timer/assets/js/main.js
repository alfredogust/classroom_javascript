// Ponto de entrada: inicializa a lógica do cronômetro ao ser chamada
function clock() {
  
  // converte um número de segundos em um string formatada HH:MM:SS
  function createTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000); // converte segundos para milissegundos
    return date.toLocaleTimeString('en-US', {
      hour12: false, // formato 24 horas
      timeZone: 'UTC' // garante que o tempo comece do zero (00:00:00))
    });
  }

  // elemento do DOM onde o tempo será exibido
  const clockElement = document.querySelector('.clock');
  
  // estado interno: contador de segundos e referência do timer 
  let seconds = 0;
  let timer;

  // inicia o intervalo que atualiza o relógio a cada segundo
  function startClock() {
    timer = setInterval(function() {
      seconds++;
      clockElement.innerHTML = createTimeFromSeconds(seconds); // atualiza o conteúdo da tela
    }, 1000);
  }

  // escuta todos os cliques da página e age conforme o botão clicado
  document.addEventListener('click', function(e) {
    const el = e.target;

    //botão reset: para o timer, resea o contador e limpa a interface
    if (el.classList.contains('reset')) {
      clearInterval(timer);
      clockElement.innerHTML = '00:00:00';
      clockElement.classList.remove('paused');
      seconds = 0;
    }

    // botão start: reinicia o timer, removendo qualquer pausa anterior
    if (el.classList.contains('start')) {
      clockElement.classList.remove('paused');
      clearInterval(timer); // garante que não haja multiplos intervalos ativos
      startClock();
    }

    // botâo pause: apenas pausa o timer e marca visualmente como pausado
    if (el.classList.contains('pause')) {
      clearInterval(timer);
      clockElement.classList.add('paused');
    }
  });
}

// executa o timer assim que o script for carregado
clock();
