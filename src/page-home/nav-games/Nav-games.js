import './Nav-games.css';
import { useState } from 'react';

function Gamesnav({togglefilter}) {

  const navGames = [
    {
      "filter":"all",
      "title":"Всі ігри",
      "highlight": true,
    },
    {
      "filter":"adventure",
      "title":"Пригодне",
      "highlight": false,
    },
    {
      "filter":"horror",
      "title":"Страшне",
      "highlight": false,
    },
    {
      "filter":"mystical",
      "title":"Містичне",
      "highlight": false,
    },
    {
      "filter":"detective",
      "title":"Детективне",
      "highlight": false,
    },
    {
      "filter":"scifi",
      "title":"Sci-Fi",
      "highlight": false,
    },
  ];

  const [nav, setNav] = useState(navGames);

  function changeFilter(evt){
    const target = evt.target;
    let genre = target.getAttribute('data-filter');

    togglefilter(genre);
    console.log('filter:', genre);

    const updatedNav = navGames.map(item => {
      item.filter === genre ? item.highlight = true : item.highlight = false;
      return item;
    });

    setNav(updatedNav);
  }
    return (
      <nav className="games--nav">
        {nav.map((item) => (
          <div
            key={item.id}
            className={item.highlight ? 'games--nav-btn active' : 'games--nav-btn'}
            data-filter={item.filter}
            onClick={changeFilter}
          >
            {item.title}
          </div>
        ))}
      </nav>
    );
}
export default Gamesnav;