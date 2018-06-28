/**
 * Created by Rémi on 28/06/2018.
 */

export default class Film {

    constructor(film) {
        this.film = film
    }

    render() {
        let containerFilm = document.createElement('div');
        containerFilm.classList.add('containerFilm');
        containerFilm.innerHTML = `
           <img src='${ require("@/assets/images/films/"+this.film.episode_id+'.jpg' ) }' />
           <div class="description">
                <h2 class="film-title">${ this.film.title }</h2>
                <span class="crawl">${ this.film.opening_crawl }</span>
           </div>
        `;
        console.log(this.film)

        return containerFilm;
    }
}