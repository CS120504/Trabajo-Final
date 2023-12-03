  
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
    document.getElementById('Ordenar').checked = false;
}






function cambiarTitulo1(nuevoTexto1) {
    document.getElementById("ordenarTitulo1").innerText = nuevoTexto1;
}

function cambiarTitulo1(nuevoTitulo1) {
    document.getElementById('ordenarTitulo1').innerText = nuevoTitulo1;
    document.getElementById('Ordenar-0').checked = false; 
}






function cambiarTitulo2(nuevoTexto2) {
    document.getElementById("ordenarTitulo2").innerText = nuevoTexto2;
}

function cambiarTitulo2(nuevoTitulo2) {
    document.getElementById('ordenarTitulo2').innerText = nuevoTitulo2;
    document.getElementById('Ordenar-00').checked = false; 
}




function cambiarTitulo3(nuevoTexto3) {
  document.getElementById("ordenarTitulo3").innerText = nuevoTexto3;
}

function cambiarTitulo3(nuevoTitulo3) {
  document.getElementById('ordenarTitulo3').innerText = nuevoTitulo3;
  document.getElementById('Ordenar-000').checked = false;
}



function cambiarTitulo5(nuevoTexto5) {
  document.getElementById("ordenarTitulo5").innerText = nuevoTexto5;
}

function cambiarTitulo5(nuevoTitulo5) {
  document.getElementById('ordenarTitulo5').innerText = nuevoTitulo5;
  document.getElementById('Ordenar-0000').checked = false;
}

  // Barra buscador//
function mostrarCover() {
  var coverCtnSearch = document.getElementById('cover-ctn-search');
  var articleList = document.getElementById('article_list');

  coverCtnSearch.style.display = 'block';
  articleList.style.display = 'block';

  setTimeout(() => {
    articleList.classList.add('visible');
  }, 10);

  setTimeout(() => {
    coverCtnSearch.style.opacity = 1;
  }, 10);
}

function ocultarCover() {
  var coverCtnSearch = document.getElementById('cover-ctn-search');
  var articleList = document.getElementById('article_list');

  coverCtnSearch.style.opacity = 0;

  articleList.classList.remove('visible');

  setTimeout(() => {
    articleList.style.display = 'none';
    coverCtnSearch.style.display = 'none';
  }, 300);
}

document.addEventListener('click', function (event) {
  var searchbar = document.getElementById('search-bar');
  var articleList = document.getElementById('article_list');
  var coverCtnSearch = document.getElementById('cover-ctn-search');

  if (event.target !== searchbar && !searchbar.contains(event.target) && articleList.classList.contains('visible')) {
    ocultarCover();
  }
});

function toggleVisibility() {
  var cover = document.getElementById('cover-ctn-search-responsive');
  var container = document.getElementById('search_responsive_container');
  
  cover.style.opacity = '0';
  container.style.opacity = '0';
  cover.style.display = 'flex';
  container.style.display = 'flex';

  cover.offsetHeight;
  container.offsetHeight;

  cover.style.opacity = '1';
  container.style.opacity = '1';
  container.style.transform = 'translateY(0%)';
}

function hideSearchContainer() {
  var cover = document.getElementById('cover-ctn-search-responsive');
  var container = document.getElementById('search_responsive_container');

  cover.style.opacity = '0';
  container.style.opacity = '0';

  setTimeout(function () {
      cover.style.display = 'none';
      container.style.display = 'none';
      container.style.transform = 'translateY(-10px)';
  }, 200);
}