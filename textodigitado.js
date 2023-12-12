var textos = [
    "BACK END",
    "JAVA DEVELOPER",
    "DATA",
    "CLOUD",
  ];

  var result;
  var count = 0;
  var currentText = 0;
  var deleting = false;

  function trocarTexto() {
    result = document.getElementById("subtitulo");

    if (!deleting) {
      window.setTimeout(function() { inserir(textos[currentText][count]) }, 200);
    } else {
      window.setTimeout(function() { apagar() }, 200);
    }
  }

  function inserir(letra) {
    result.innerHTML += letra;
    count++;

    if (count < textos[currentText].length && !deleting) {
      window.setTimeout(function() { inserir(textos[currentText][count]) }, 90);
    } else if (count === textos[currentText].length && !deleting) {
      deleting = true;
      count--;
      window.setTimeout(function() { trocarTexto() }, 2000);
    }
  }

  function apagar() {
    var tempText = result.innerHTML;
    tempText = tempText.slice(0, -1);

    result.innerHTML = tempText;
    count--;

    if (count >= 0 && deleting) {
      window.setTimeout(function() { apagar() }, 80);
    } else if (count < 0 && deleting) {
      deleting = false;
      count = 0;

      currentText = (currentText + 1) % textos.length; // Próximo texto na lista
      window.setTimeout(function() { trocarTexto() }, 1000);
    }
  }

  window.onload = trocarTexto;

  