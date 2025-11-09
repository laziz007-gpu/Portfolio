import tnw from "../assets/img/pictures/tnw.png";
import boulevard from "../assets/img/pictures/boulevard.png";
import odonto from "../assets/img/pictures/odonto.png";
import about from "../assets/img/pictures/about.png"
import gotrip from "../assets/img/pictures/gotrip.png"
import izmir from "../assets/img/pictures/izmir.png"
import food from "../assets/img/pictures/food.png"
import odontoapp from "../assets/img/pictures/odontoapp.png"
import back from "../assets/img/logo-icons/Go back.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PortfolioPage() {

  const [category, setCategory] = useState('All')

  const portfolio = {
        All:[
          {name: 'TNW', pic: tnw,},
          {name: 'About', pic: about},
          {name: 'Food100', pic: food},
          {name: 'GoTrip', pic: gotrip},
          {name: 'Boulevard market', pic: boulevard},
          {name: "OdontoHub", pic: odonto},    
          {name: 'OdontoHub App', pic: odontoapp},
          {name: 'Izmir', pic: izmir}
        ],
        Frontend:[
          {name: 'TNW', pic: tnw,},
          {name: 'About', pic: about},
          {name: 'Food100', pic: food},
          {name: 'GoTrip', pic: gotrip},
          {name: 'Boulevard market', pic: boulevard}
        ],
        Webdesign:[
          {name: "OdontoHub", pic: odonto},    
          {name: 'OdontoHub App', pic: odontoapp},
          {name: 'Izmir', pic: izmir}
        ]
      }
  return (
    <div className="portfolio__page container">
      <Link to="/" className="back__icon">
        <img src={back} alt="" />
      </Link>
      <h2 className="title page">Портфолио</h2>
      <div className="portfolio__inner_page">
        <div className="portfolio__page_btns">
          <button
          className={category === 'All'? 'btn active' : 'btn'}
          onClick={() => setCategory('All')}
          >
            Все
          </button>
          <button
          className={category === 'Frontend'? 'btn active' : 'btn'}
          onClick={() => setCategory('Frontend')}
          >
            Фронтенд
          </button>
          <button
          className={category === 'Webdesign' ? 'btn active' : 'btn'}
          onClick={() => setCategory('Webdesign')}
          >
          Веб-дизайн
          </button>
        </div>
        <div className="portfolio__list">
        {
          portfolio[category].map((project, i) => (
            <div className="portfolio__item" key={i}>
              <img src={project.pic} alt="" />
              <h3 className="portfolio__item_title">{project.name}</h3>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}
