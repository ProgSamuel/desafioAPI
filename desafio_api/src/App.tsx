import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

function App() {
  const [stars, setStars] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<any>([]);
  const [filter, setFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/')
      .then((Response) => {
        setStars(Response.data.bodies);
        // console.log(Response.data.bodies);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const cosmosFilter = stars.filter((star: any) =>
      star.englishName.toLowerCase().includes(search.toLowerCase())
    );
    setResults(cosmosFilter);
  }, [search, stars]);

  const filterStars = useMemo(() => {
    switch (filter) {
      case 'Star':
        return stars.filter((star: any) => star.bodyType === 'Star');
      case 'Planet':
        return stars.filter((star: any) => star.bodyType === 'Planet');
      case 'Moon':
        return stars.filter((star: any) => star.bodyType === 'Moon');
      case 'Comet':
        return stars.filter((star: any) => star.bodyType === 'Comet');
      case 'Dwarf Planet':
        return stars.filter((star: any) => star.bodyType === 'Dwarf Planet');
      case 'Asteroid':
        return stars.filter((star: any) => star.bodyType === 'Asteroid');
      default:
        return stars;
    }
  }, [filter, stars]);

  return (
    <>
      {isLoading && <p>Loading...</p>}

      <select name="Filter" id="" onChange={(e) => setFilter(e.target.value)}>
        <option value="All" selected>
          All
        </option>
        <option value="Star">Star</option>
        <option value="Planet">Planet</option>
        <option value="Moom">Moom</option>
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

      {filterStars.map((result: any) => (
        <li key={result.id}> {result.englishName}</li>
      ))}
    </>
  );
}

export default App;
