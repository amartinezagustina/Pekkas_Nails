const botonEsculpida = document.getElementById("esculpidas");
const hEsculpida = document.getElementById('he');
const botonKapping = document.getElementById("kapping");
const hKapping = document.getElementById('hk');
const botonSemi = document.getElementById("semi");
const hSemi = document.getElementById('hs');
const radios = document.querySelectorAll('input[name="hora"]');
const formPekka = document.getElementById('formulario');
const horaSeleccionada = document.getElementById('horaSeleccionada');
const registrosTabla = document.getElementById('registrosTabla').querySelector('tbody');


botonEsculpida.addEventListener('click', function () {
    hEsculpida.classList.toggle('selecEsculpida');
    if (hKapping != 'selecKapping' && hSemi != 'selecSemi') {
        hKapping.classList.add('selecKapping');
        hSemi.classList.add('selecSemi');
    }
    if (formPekka != 'selecForm') {
        formPekka.classList.remove('visible');
        formPekka.classList.add('selecForm');
    }
});

botonKapping.addEventListener('click', function () {
    hKapping.classList.toggle('selecKapping');
    if (hEsculpida != 'selecEsculpida' && hSemi != 'selecSemi') {
        hEsculpida.classList.add('selecEsculpida');
        hSemi.classList.add('selecSemi');
    }
    if (formPekka != 'selecForm') {
        formPekka.classList.remove('visible');
        formPekka.classList.add('selecForm');
    }
});

botonSemi.addEventListener('click', function () {
    hSemi.classList.toggle('selecSemi');
    if (hEsculpida != 'selecEsculpida' && hKapping != 'selecKapping') {
        hEsculpida.classList.add('selecEsculpida');
        hKapping.classList.add('selecKapping');
    }
    if (formPekka != 'selecForm') {
        formPekka.classList.remove('visible');
        formPekka.classList.add('selecForm');
    }
});

radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if (event.target.name === 'hora') {
            formPekka.classList.remove('selecForm');
            formPekka.classList.add('visible');

            horaSeleccionada.value = event.target.value;
        }
    });
});

formPekka.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const nombre = document.getElementById('nom').value;
    const apellido = document.getElementById('apellido').value;
    const contacto = document.getElementById('contacto').value;
    const comentario = document.getElementById('comentario').value;
    const turno = horaSeleccionada.value;


    const formData = {
        nombre: nombre,
        apellido: apellido,
        contacto: contacto,
        comentario: comentario,
        turno: turno
    };

    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    registros.push(formData);

    localStorage.setItem('registros', JSON.stringify(registros));

    alert('Tu turno se registro con éxito');

    mostrarRegistros();
});

function mostrarRegistros() {
    registrosTabla.innerHTML = '';


    let registros = JSON.parse(localStorage.getItem('registros')) || [];

    registros.forEach((registro) => {
        let row = registrosTabla.insertRow();
        let cellNombre = row.insertCell(0);
        let cellApellido = row.insertCell(1);
        let cellContacto = row.insertCell(2);
        let cellObservaciones = row.insertCell(3);
        let cellTurno = row.insertCell(4);
        cellNombre.textContent = registro.nombre;
        cellApellido.textContent = registro.apellido;
        cellContacto.textContent = registro.contacto;
        cellObservaciones.textContent = registro.comentario;
        cellTurno.textContent = registro.turno;

    });


}

document.addEventListener('DOMContentLoaded', mostrarRegistros);
