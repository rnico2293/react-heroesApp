// import {HeroCard} from '../../heroes/components/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

const navigate = useNavigate();

//query parameters 
const location = useLocation();


const { q =''} = queryString.parse(location.search);

const wantedHeros = getHeroesByName(q);

const {searchText , onInputChange} = useForm ({
    searchText : q
});

const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.length <= 1) return;

    navigate(`?q=${searchText}`);
}

    return (
        <>
            <h1>Search</h1> 
            <hr/>

            <div className="row">
                <div className="col-5">
                <h5>Search</h5>
                <hr/>
                <form onSubmit={onSearchSubmit}>
                <input 
                    type="text"
                    placeholder="Search a hero"
                    className="form-control p-3"
                    name="searchText"
                    autoComplete ="off"
                    value = {searchText}
                    onChange = {onInputChange}
                />
                <button className="btn btn-outline-dark mt-3">
                    Search
                </button>
                
                </form>
            </div>

            <div className="col-7">
                <h5>Results</h5>
                <hr/>

                {
                    ( q === '' ) 
                    ? <div className="alert alert-primary"> Search a hero </div>
                    : (wantedHeros.length === 0 ) 
                    && <div className="alert alert-danger">There is no result with <b>{ q }</b></div>
                }
                
                {
                    wantedHeros.map( hero =>(
                        < HeroCard key={hero.id} {...hero} />
                    ))
                }
            </div>
            </div>

        </>
    )
}
