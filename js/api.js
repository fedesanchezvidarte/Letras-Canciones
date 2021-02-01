import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    // Mostrar Spinner

    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        Spinner();

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if (resultado.lyrics) {
                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción ${this.cancion} de ${this.artista}`

                } else {
                    UI.divMensajes.textContent = 'No se encontró la canción';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }

            })
    }
}


function Spinner() {

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');

    divSpinner.innerHTML = `
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    `;
    resultado.appendChild(divSpinner);

    return;
}

export default API;