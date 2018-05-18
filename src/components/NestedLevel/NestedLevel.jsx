import React from 'react';
import './NestedLevel.css';
import data from './data';

const NestedLevel = () => {
  return (<section className="section NestedLevel project">
    <div className="container">
      <h1 className="title">Nested Level React App</h1>
      <div className="Menu">
        <div className="MenuLevel">
          <ul className="menu-list">
            <li><a>Cars</a></li>
            <li><a className="is-active" >Movies</a></li>
            <li><a>Players</a></li>
          </ul>  
        </div>
        <div className="MenuLevel">
          <ul className="menu-list">
            <li><a className="is-active">Sci-Fi</a></li>
            <li><a>Action</a></li>
            <li><a>Family</a></li>
            <li><a>Comedy</a></li>
            <li><a>Thiller</a></li>
          </ul>  
        </div>
        <div className="MenuLevel">
          <ul className="menu-list">
            <li><a className="is-active">Matrix</a></li>
            <li><a>Avatar</a></li>
            <li><a>Star Wars</a></li>
            <li><a>Alien</a></li>
            <li><a>Blade Runner</a></li>
          </ul>  
        </div>
        <div>
          <h4 className="title is-4">Matrix</h4>
          <p>
            The Matrix
            The Matrix Poster.jpg
            Theatrical release poster
            Directed by	The Wachowski Brothers
            Produced by	Joel Silver
            Written by	The Wachowski Brothers
            Starring	
            Keanu Reeves
            Laurence Fishburne
            Carrie-Anne Moss
            Hugo Weaving
            Joe Pantoliano
            Music by	Don Davis
            Cinematography	Bill Pope
            Edited by	Zach Staenberg
            Production
            companies
            Village Roadshow Pictures
            Groucho II Film Partnership
            Silver Pictures
            Distributed by	
            Warner Bros. Pictures (United States)
            Roadshow Entertainment (Australia)
            Release date
            March 31, 1999 (United States)
            April 8, 1999 (Australia)
            Running time
            136 minutes[1]
            Country	
            United States[2]
            Australia[2]
            Language	English
            Budget	US$63 million[3]
            Box office	US$463.5 million[3]
            The Matrix is a 1999 science fiction action film written and directed by The Wachowskis (credited as The Wachowski Brothers) and starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which reality as perceived by most humans is actually a simulated reality called "the Matrix", created by sentient machines to subdue the human population, while their bodies' heat and electrical activity are used as an energy source. Cybercriminal and computer programmer Neo learns this truth and is drawn into a rebellion against the machines, which involves other people who have been freed from the "dream world."
            </p>
          </div>  
      </div>  
      </div>
    </section>)
}

export default NestedLevel;