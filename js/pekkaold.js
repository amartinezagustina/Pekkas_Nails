const botonEsculpida = document.getElementById("esculpidas");
const hEsculpida = document.getElementById('he');
const botonKapping = document.getElementById("kapping");
const hKapping = document.getElementById('hk');
const botonSemi = document.getElementById("semi");
const hSemi = document.getElementById('hs');
const radios = document.querySelectorAll('input[name="hora"]');
const formPekka = document.getElementById('formulario');
const turnosContainer = document.getElementById('turnosContainer');

botonEsculpida.addEventListener('click', function () {
  hEsculpida.classList.toggle('selecEsculpida');
  hKapping.classList.add('selecKapping');
  hSemi.classList.add('selecSemi');
  formPekka.classList.add('selecForm');
});

botonKapping.addEventListener('click', function () {
  hKapping.classList.toggle('selecKapping');
  hEsculpida.classList.add('selecEsculpida');
  hSemi.classList.add('selecSemi');
  formPekka.classList.add('selecForm');
});

botonSemi.addEventListener('click', function () {
  hSemi.classList.toggle('selecSemi');
  hEsculpida.classList.add('selecEsculpida');
  hKapping.classList.add('selecKapping');
  formPekka.classList.add('selecForm');
});

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    formPekka.classList.remove('selecForm');
    formPekka.classList.add('visible');
  });
});

formPekka.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nom').value;
  const apellido = document.getElementById('apellido').value;
  const contacto = document.getElementById('contacto').value;
  const comentario = document.getElementById('comentario').value;
  const turnoServicio = document.querySelector('input[name="hora"]:checked').value;
  const tipoServicio = turnoServicio.charAt(0);
  const horaServicio = turnoServicio.substring(1);

  let servicio;
  switch (tipoServicio) {
    case 'E':
      servicio = 'Esculpidas';
      break;
    case 'K':
      servicio = 'Kapping';
      break;
    case 'S':
      servicio = 'Semi Permanente';
      break;
  }

  const turno = `Servicio: ${servicio}, Hora: ${horaServicio}, Nombre: ${nombre}, Apellido: ${apellido}, Contacto: ${contacto}, Comentarios: ${comentario}`;
  const turnoElement = document.createElement('article');
  turnoElement.textContent = turno;
  turnosContainer.appendChild(turnoElement);

  formPekka.reset();
  formPekka.classList.add('selecForm');
});
