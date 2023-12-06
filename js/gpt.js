window.addEventListener('resize', updateConnector);
    
function updateConnector() {
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const connector = document.getElementById('connector');

  const x1 = box1.offsetLeft + box1.offsetWidth / 2;
  const y1 = box1.offsetTop + box1.offsetHeight / 2;

  const x2 = box2.offsetLeft + box2.offsetWidth / 2;
  const y2 = box2.offsetTop + box2.offsetHeight / 2;

  connector.setAttribute('d', `M${x1},${y1} Q${(x1 + x2) / 2},${y1} ${x2},${y2}`);
}

// Llama a la función para inicializar la posición
updateConnector();