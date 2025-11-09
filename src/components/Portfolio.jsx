import tnw from "../assets/img/pictures/tnw.png";
import boulevard from "../assets/img/pictures/boulevard.png";
import odonto from "../assets/img/pictures/odonto.png";
import about from "../assets/img/pictures/about.png"
import gotrip from "../assets/img/pictures/gotrip.png"
import izmir from "../assets/img/pictures/izmir.png"
import food from "../assets/img/pictures/food.png"
import odontoapp from "../assets/img/pictures/odontoapp.png"
import { Link } from "react-router-dom";

export default function Portfolio() {

  const portfolio = {
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
    <div className="portfolio container" id="portfolio">
      <h2 className="title ht">Портфолио</h2>
      <div className="portfolio__inner">
        <div className="portfolio__list">
        {
          Object.values(portfolio).flat().map((project, i) => (
            <div className="portfolio__item" key={i}>
              <img src={project.pic} alt="" />
              <h3 className="portfolio__item_title">{project.name}</h3>
            </div>
          ))
        }
        </div>
        <Link to="/Portfolio" className="more__btn">Ещё</Link>
      </div>
    </div>
  )
}
