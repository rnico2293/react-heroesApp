import { useParams, Navigate, useNavigate } from 'react-router';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    //Con el hook de react use params consigo el id
    //por parametro que le llego
    const { id } = useParams();
    // consigo el heroe  
    const hero = getHeroById (id)

    const navigate = useNavigate ();

    const onGoHome = () => {
       navigate('/'); 
    }; 


    if (!hero) { 
        return <Navigate to="/search"/>
    }

    const heroImgUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ heroImgUrl } alt="superhero" className="img-thumbnail"/>
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Publisher : {hero.publisher}</li>
                    <li className="list-group-item">Alter ego : {hero.alter_ego}</li>
                    <li className="list-group-item">First appearance : {hero.first_appearance}</li>
                </ul>
                
                <img src="../ " alt=""/>

                <h5 className="mt-3">Characters</h5>
                <p> { hero.characters }</p>

                <button className="btn btn-outline-dark"
                        onClick = { onGoHome } >
                    Volver a inicio
                </button>
            </div>
        </div>
    )
}
