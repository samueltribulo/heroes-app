import { useMemo } from "react";
import { getHeroesBypublisher } from "../actions/getHeroesBypublisher"
import { HeroCard } from "./HeroCard";

export const Heroeslist = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesBypublisher( publisher ), [publisher]);

  return (
    <div
        className="row rows-cols-1 row-cols-md-3 g-3"
    >
        {
            heroes?.map(hero => (
                <HeroCard 
                    key={hero.id} 
                    {...hero}
                />
            ))
        }
    </div>
  )
}
