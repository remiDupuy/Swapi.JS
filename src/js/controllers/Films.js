/**
 * Created by Rémi on 28/06/2018.
 */
import axios from 'axios';
import Film from '../models/Film';

export default class Films {
    constructor() {
        let films = this.getFilms();
        this.containerFilms = document.querySelector('#films');
    }

    getFilms() {

        axios.get(API_URL + '/films').then((response) => {
            let films = response.data.results;
            films.map((x) => {
                let film = new Film(x);
                this.containerFilms.appendChild(film.render());
            })
        })

    }
}