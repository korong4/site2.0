// Seleciona a imagem e a div para exibir a imagem ampliada
const imagens = document.getElementsByClassName('img-final'); // Retorna uma coleção de imagens
const imagemMaior = document.getElementsByClassName('img-maior')[0]; // Seleciona o primeiro elemento com essa classe
const imagemZoom = document.getElementById('imagemZoom'); // Elemento da imagem ampliada

// Função para abrir a imagem ampliada
Array.from(imagens).forEach(imagem => {
  imagem.addEventListener('click', function() {
    imagemZoom.src = imagem.src; // Atualiza a imagem ampliada com a imagem clicada
    imagemMaior.style.display = 'flex'; // Exibe a imagem ampliada
  });
});

// Função para fechar a imagem ampliada
imagemMaior.addEventListener('click', function() {
  imagemMaior.style.display = 'none'; // Oculta a imagem ampliada
});
