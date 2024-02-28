import {heroes} from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => { 
    
    const validPublishers = [ 'DC Comics' , 'Marvel Comics'];
    if (!validPublishers.includes( publisher) ) {
        console.log(' no es un creador de heroes o esta mal escrito');
        throw new Error (`${publisher} no es un creador de heroes o esta mal escrito` );
    }

    return heroes.filter (heroe => heroe.publisher === publisher );
}