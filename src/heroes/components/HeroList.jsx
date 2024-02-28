import {getHeroesByPublisher} from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const list = getHeroesByPublisher ( publisher) ;
    
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {list.map ( heroe => ( 
                    <HeroCard 
                    key={heroe.id}
                    { ...heroe }  
                    />
                ))}
            </div>
        </>
    )
}
