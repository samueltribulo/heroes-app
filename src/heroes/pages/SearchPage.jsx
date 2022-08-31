import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../componentes/HeroCard';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroesByName } from '../actions';



export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearchHero = (q === '');

  const showError = (heroes.length === 0) && (q.length > 0); 

  const {searchText, onInputChange, onResetForm} = useForm({
    searchText:''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`)

    console.log({searchText});

    onResetForm();
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>    
            Type a name or keyword
          </h4>
          <hr />

          <form 
            onSubmit={onSearchSubmit}
          >
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
              name="searchText"
              autoComplete="off"
            />
            <button
              type='submit'
              className="btn btn-outline-primary mt-2"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>
            Results
          </h4>
          <hr />
          {
            showError 
            && 
            <div className="alert alert-danger">
              No hero with <b>{q}</b>
            </div>
          }

          {
            showSearchHero 
            &&
            <div className="alert alert-primary">
              Search a hero
            </div>
          }

          {
            heroes?.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
