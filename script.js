  
  document.addEventListener('DOMContentLoaded', function() {
    const palomitaImgs = document.querySelectorAll('[id^="palomita"]');
    palomitaImgs.forEach(img => img.style.display = 'none');
    const botonPalomitas = document.querySelectorAll('[id^="boton-palomita"]');
    botonPalomitas.forEach(text => text.style.justifyContent = 'center');
  });

  function toggleImage(buttonNumber) {
    const palomitaImg = document.getElementById(`palomita-${buttonNumber}`);
    const botonPalomita = document.getElementById(`boton-palomita-${buttonNumber}`);

    if (palomitaImg.style.display === 'none' || palomitaImg.style.display === '') {
      palomitaImg.style.display = 'inline-block';
      setTimeout(() => {
        palomitaImg.classList.remove('hidden');
        palomitaImg.classList.add('fade-in');
        botonPalomita.classList.add('fade-in');
        botonPalomita.style.backgroundColor = 'orange';
        botonPalomita.style.color = 'white';
        botonPalomita.style.justifyContent = 'space-between';
      }, 10);
    } else {
      palomitaImg.classList.add('fade-out');
      setTimeout(() => {
        palomitaImg.classList.add('hidden');
        palomitaImg.style.display = 'none';
        palomitaImg.classList.remove('fade-out');
        botonPalomita.classList.remove('fade-in');
        botonPalomita.style.backgroundColor = '';
        botonPalomita.style.color = '';
        botonPalomita.style.justifyContent = 'center';

      }, 300);
    }
  }







function cambiarTitulo(nuevoTexto) {
    document.getElementById("ordenarTitulo").innerText = nuevoTexto;
}

function cambiarTitulo(nuevoTitulo) {
    document.getElementById('ordenarTitulo').innerText = nuevoTitulo;
    document.getElementById('Ordenar').checked = false; // Desmarca el checkbox principal
}






function cambiarTitulo1(nuevoTexto1) {
    document.getElementById("ordenarTitulo1").innerText = nuevoTexto1;
}

function cambiarTitulo1(nuevoTitulo1) {
    document.getElementById('ordenarTitulo1').innerText = nuevoTitulo1;
    document.getElementById('Ordenar-0').checked = false; // Desmarca el checkbox principal
}






function cambiarTitulo2(nuevoTexto2) {
    document.getElementById("ordenarTitulo2").innerText = nuevoTexto2;
}

function cambiarTitulo2(nuevoTitulo2) {
    document.getElementById('ordenarTitulo2').innerText = nuevoTitulo2;
    document.getElementById('Ordenar-00').checked = false; // Desmarca el checkbox principal
}




function cambiarTitulo3(nuevoTexto3) {
  document.getElementById("ordenarTitulo3").innerText = nuevoTexto3;
}

function cambiarTitulo3(nuevoTitulo3) {
  document.getElementById('ordenarTitulo3').innerText = nuevoTitulo3;
  document.getElementById('Ordenar-000').checked = false; // Desmarca el checkbox principal
}