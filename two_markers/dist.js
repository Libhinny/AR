document.addEventListener('DOMContentLoaded', function () { //aguarda até que o DOM seja carregado antes de executar o código dentro da função
  const marker1 = document.querySelector('#marker1'); // seleciona o marker1 do html
  const marker2 = document.querySelector('#marker2'); // seleciona o marker2 do html
  const distanceText = document.querySelector('#distanceText'); // é onde a distância calculada será exibida como texto

  marker1.addEventListener('markerFound', updateDistance); // o markerfound dispara quando o marcador é encontrado, então a função 'updateDistace' é chamada
  marker1.addEventListener('markerLost', updateDistance); // ocorre o mesmo citado acima, no entanto quando o marker é perdido, então a função 'updateDistace' é chamada
  marker2.addEventListener('markerFound', updateDistance); // análogo
  marker2.addEventListener('markerLost', updateDistance); // análogo

  function updateDistance() { // função que calcula e atualiza a distancia entre os marcadores, além de verificar se os markers estão visíveis
    if (marker1.object3D.visible && marker2.object3D.visible) { // quando visíveis, calcula a distância entre suas posições 3d
      const position1 = marker1.object3D.position;
      const position2 = marker2.object3D.position;
      const distance = position1.distanceTo(position2);
      distanceText.setAttribute('text', 'value', `Distância: ${distance.toFixed(2)} m`); // o texto é atualizado para exibir a distância calculada
    } else {
      distanceText.setAttribute('text', 'value', 'Distância: - m'); // caso contrário, o texto é atualizado como distancia deconhecida
    }
  }
});
