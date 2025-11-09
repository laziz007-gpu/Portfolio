import logo from "../assets/img/logo-icons/{still.dev}.svg";

export default function Navbar() {

  

  return (
    <>
      <nav className="nav">
        <div className="nav__inner container">
            <a href="#!" className="logo"><img src={logo} alt="" /></a>

            <ul className="nav__list">
                <li className="nav__list_link"><a href="#about">Обо мне</a></li>
                <li className="nav__list_link"><a href="#skills"> Навыки </a></li>
                <li className="nav__list_link"><a href="#portfolio">Портфолио</a></li>
                <li className="nav__list_link"><a href="#services">Услуги</a></li>
            </ul>

            <a tel="+998 93 321 05 80" className="nav__contact">Связаться</a>
        </div>
      </nav>
    </>
  )
}
