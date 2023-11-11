import { useEffect, useState } from 'react';
import axios from 'axios';
import CardStar from './Components/Card';

function App() {
  const [stars, setStars] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/')
      .then((response) => {
        setStars(response.data.bodies);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredStars = stars.filter((star:any) =>
    star.englishName.toLowerCase().includes(search.toLowerCase())
  );

  const filterStars = filter === 'All' ? filteredStars : filteredStars.filter((star:any) => star.bodyType === filter);

  return (
    <>
      {isLoading && <p>Loading...</p>}

      <div className="star star1"></div>
      <div className="star star2"></div>
      <div className="star star3"></div>
      <div className="star star4"></div>
      <div className="star star5"></div>
      <div className="star star6"></div>
      <div className="star star7"></div>
      <div className="star star8"></div>
      <div className="star star9"></div>
      <div className="star star10"></div>

      <div className='home'>
        <h1> StellarAtlas </h1>
        <form action="">
          <select name="Filter" onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Star">Star</option>
            <option value="Planet">Planet</option>
            <option value="Moon">Moon</option>
            <option value="Comet">Comet</option>
            <option value="Dwarf Planet">Dwarf Planet</option>
            <option value="Asteroid">Asteroid</option>
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for star"
          />
        </form>
      </div>

      <section>
        {
          filterStars.map((result:any) => (
            <CardStar
              key={result.id}
              name={result.englishName}
              isPlanet={result.isPlanet ? 'Yes' : 'No'}
              gravity={result.gravity ? result.gravity : 'undefined'}
              discoveredBy={result.discoveredBy ? result.discoveredBy : 'undefined'}
              discoveryDate={result.discoveryDate ? result.discoveryDate : 'undefined'}
              bodyType={result.bodyType}
            />
          ))
        }
      </section>
    </>
  );
}

export default App;
