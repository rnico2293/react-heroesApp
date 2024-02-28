import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters }) => {
        
    const heroImgUrl = `/assets/heroes/${ id }.jpg`;
            
    return (
        <div className="col">
            <div className="card">

                <div className="row">
                    <div className="col-4">
                        <img src={ heroImgUrl } className="card-img" alt={ superhero }/>
                    </div>

                    <div className="col-8 p-3">

                        <h4 className="card-title">{ superhero } </h4>
                        <p className="card-text">{ alter_ego } </p>
                        
                        {
                            ( alter_ego !== characters ) && ( <p className="card-text">{ characters } </p>)
                        }

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        <Link to = {`/hero/${ id }`}>
                            Ver Ficha
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
 