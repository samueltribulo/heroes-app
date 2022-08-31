import { Link } from "react-router-dom";
import 'animate.css';
export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {


    const heroImg = `/assets/heroes/${id}.jpg`;


  return (
    <div className="col">
        <div className="card mt-1 animate__animated animate__fadeIn">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImg} className="card-img m-1" alt={superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) &&  <p>{ characters }</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">
                                {first_appearance}
                            </small>
                        </p>
                        <Link to={`/hero/${id}`}>
                            More info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
